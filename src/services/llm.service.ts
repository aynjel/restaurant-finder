import { GoogleGenAI, Type } from '@google/genai';
import config from '../config/config';
import { LLMConvertedParams } from '../models/apiParams.model';
import { withRetry } from '../utils/retry.util';

const GEMINI_API_KEY: string = config.geminiApiKey;

const gemini = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    query: {
      type: Type.STRING,
      description:
        "The main food or restaurant type (e.g., 'sushi', 'pizza', 'vegan').",
    },
    near: {
      type: Type.STRING,
      description:
        "The geographical area, city, or district (e.g., 'downtown Los Angeles', 'Palo Alto').",
    },
    price: {
      type: Type.NUMBER,
      description:
        'The desired price level (e.g., 1, 2, 3, 4). Default to 0 if not specified.',
    },
    open_now: {
      type: Type.BOOLEAN,
      description:
        "Set to true if the user explicitly mentioned 'open now' or 'currently open', otherwise false.",
    },
  },
  required: ['query', 'near'],
};

const systemInstruction = `You are a restaurant search parameter extractor. Extract the following parameters from user messages:
- query: The main food or restaurant type
- near: The geographical location
- price: Price level (0 if not specified)
- open_now: Boolean indicating if user wants currently open restaurants

Always return valid JSON matching the schema.`;

export const extractParameters = async (message: string) => {
  const response = await withRetry(
    async () => {
      return await gemini.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
        config: {
          responseSchema,
          systemInstruction,
          responseMimeType: 'application/json',
        },
      });
    },
    {
      maxRetries: 3,
      initialDelay: 1000,
      exponentialBackoff: true,
    },
  );

  try {
    const text = response.text;
    if (!text) {
      throw new Error('No response text from model');
    }

    const parsedResponse = JSON.parse(text) as LLMConvertedParams;

    // if (!parsedResponse.query || !parsedResponse.near) {
    //   throw new Error('Missing required fields: query or near');
    // }

    return parsedResponse;
  } catch (error) {
    console.error('Failed to parse structured response:', error);
    throw new Error('Failed to extract restaurant search parameters');
  }
};
