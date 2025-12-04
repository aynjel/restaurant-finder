import {
  Category,
  CleanedApiResponse,
  Result,
} from '../models/apiResponse.model';

export function validateBoolean(
  value: string | undefined,
): boolean | undefined {
  if (value === undefined) return undefined;
  return value === 'true';
}

export function validatePrice(value: string | undefined): number | undefined {
  if (value === undefined) return undefined;
  return parseInt(value);
}

export function cleanApiResponse(response: any): CleanedApiResponse[] {
  return response.results.map((result: Result) => ({
    name: result.name,
    website: result.website,
    location: result.location,
    social_media: result.social_media,
    distance: result.distance,
    categories: result.categories.map((category: Category) => category.name),
    email: result.email,
    tel: result.tel,
  }));
}
