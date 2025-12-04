import fsqDevelopersPlaces from '@api/fsq-developers-places';
import type { NextFunction, Request, Response } from 'express';
import config from '../config/config';
import { FoursquareResponse } from '../models/apiResponse.model';
import {
  cleanApiResponse,
  validateBoolean,
  validatePrice,
} from '../utils/helpers';

const REQUIRED_CODE = config.requiredCode;
const FOURSQUARE_API_KEY: string = config.foursquareApiKey;

export async function search(req: Request, res: Response, next: NextFunction) {
  try {
    const { code, message, near } = req.query;

    // Validate code parameter
    if (!code || code !== REQUIRED_CODE) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Invalid or missing code parameter',
      });
    }

    // Validate message parameter
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

    // Validate near parameter
    if (!near || typeof near !== 'string' || near.trim().length === 0) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Near parameter is required and must be a non-empty string',
      });
    }

    const { price, open_now } = req.query;

    const validatedOpenNow = validateBoolean(open_now as string);
    const validatedPrice = validatePrice(price as string);

    const response = await fsqDevelopersPlaces.placeSearch({
      'X-Places-Api-Version': '2025-06-17',
      Authorization: `Bearer ${FOURSQUARE_API_KEY}`,
      query: message,
      near: near,
      open_now: validatedOpenNow,
      min_price: validatedPrice,
      max_price: validatedPrice,
    });

    const cleanedResponse = cleanApiResponse(
      response.data as unknown as FoursquareResponse,
    );

    return res.status(200).json({
      success: true,
      total_results: cleanedResponse.length,
      data: cleanedResponse,
    });
  } catch (error) {
    console.error('Restaurant search error:', error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to search for restaurants';
    next(new Error(errorMessage));
    return;
  }
}
