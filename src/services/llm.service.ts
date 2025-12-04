import { GoogleGenAI, Type } from '@google/genai';
import config from '../config/config';
import { LLMConvertedParams } from '../models/apiParams.model';

const GEMINI_API_KEY: string = config.geminiApiKey;

const gemini = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const restaurantSearchDeclaration = {
  name: 'restaurant_search',
  description: 'Extracts search parameters for a restaurant finder API call.',
  parameters: {
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
  },
};

export const extractParameters = async (message: string) => {
  const response = await gemini.models.generateContent({
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
      tools: [
        {
          functionDeclarations: [restaurantSearchDeclaration],
        },
      ],
    },
  });

  if (response.functionCalls && response.functionCalls.length > 0) {
    const call = response.functionCalls[0];
    return call?.args as unknown as LLMConvertedParams;
  }

  throw new Error('Failed to extract restaurant search parameters');
};
