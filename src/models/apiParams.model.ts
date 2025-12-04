export interface StructuredCommand {
  action: string;
  parameters: FoursquareSearchParams;
}

export interface FoursquareSearchParams {
  query: string;
  near: string;
  price: string;
  open_now: boolean;
  min_rating: number;
  cuisine: string;
}
