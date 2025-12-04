import fsqDevelopersPlaces from '@api/fsq-developers-places';
import type { NextFunction, Request, Response } from 'express';
import config from '../config/config';
import { FoursquareResponse } from '../models/apiResponse.model';
import { extractParameters } from '../services/llm.service';
import { cleanApiResponse } from '../utils/helpers';
import { withRetry } from '../utils/retry.util';

const REQUIRED_CODE = config.requiredCode;
const FOURSQUARE_API_KEY: string = config.foursquareApiKey;

export async function search(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const { code, message } = req.query;

    if (!code || code !== REQUIRED_CODE) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Invalid or missing code parameter',
      });
    }

    if (
      !message ||
      typeof message !== 'string' ||
      message.trim().length === 0
    ) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Message parameter is required and must be a non-empty string',
      });
    }

    const { near, price, open_now } = await extractParameters(message);

    const response = await withRetry(
      async () => {
        return await fsqDevelopersPlaces.placeSearch({
          'X-Places-Api-Version': '2025-06-17',
          Authorization: `Bearer ${FOURSQUARE_API_KEY}`,
          query: message,
          near,
          open_now,
          min_price: price,
        });
      },
      {
        maxRetries: 3,
        initialDelay: 1000,
        exponentialBackoff: true,
      },
    );

    const cleanedResponse = cleanApiResponse(
      response.data as unknown as FoursquareResponse,
    );

    return res.status(200).json(cleanedResponse);
  } catch (error) {
    console.error('Restaurant search error:', error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to search for restaurants';
    next(new Error(errorMessage));
    return res.status(500).json({
      error: 'Internal Server Error',
      message: errorMessage,
    });
  }
}
