export interface CleanedApiResponse {
  name: string;
  website: string;
  location: Location;
  social_media: SocialMedia;
  distance: number;
  categories: string[]; // category names
  email: string;
  tel: string;
}

export interface FoursquareResponse {
  results: Result[];
  context: Context;
}

export interface Result {
  fsq_place_id: string;
  latitude: Latitude;
  longitude: Longitude;
  categories: Category[];
  chains: Chain[];
  date_closed: string;
  date_created: string;
  date_refreshed: string;
  description: string;
  distance: number;
  email: string;
  extended_location: ExtendedLocation;
  attributes: Attributes;
  hours: Hours;
  hours_popular: HoursPopular[];
  link: string;
  location: Location;
  menu: string;
  name: string;
  photos: Photo[];
  place_actions: PlaceAction[];
  popularity: number;
  placemaker_url: string;
  price: number;
  rating: number;
  related_places: RelatedPlaces;
  social_media: SocialMedia3;
  stats: Stats3;
  store_id: string;
  tastes: string[];
  tel: string;
  tips: Tip13[];
  verified: boolean;
  unresolved_flags: string[];
  veracity_rating: VeracityRating;
  website: string;
  plugins: Plugins;
}

export interface Latitude {}

export interface Longitude {}

export interface Category {
  fsq_category_id: string;
  name: string;
  short_name: string;
  plural_name: string;
  icon: Icon;
}

export interface Icon {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip;
}

export interface Tip {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface Chain {
  fsq_chain_id: string;
  name: string;
  logo: Logo;
  parent_id: string;
}

export interface Logo {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip2;
}

export interface Tip2 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface ExtendedLocation {
  dma: string;
  census_block_id: string;
}

export interface Attributes {
  restroom: Restroom;
  outdoor_seating: OutdoorSeating;
  atm: Atm;
  has_parking: HasParking;
  wifi: string;
  delivery: Delivery;
  reservations: Reservations;
  takes_credit_card: TakesCreditCard;
}

export interface Restroom {}

export interface OutdoorSeating {}

export interface Atm {}

export interface HasParking {}

export interface Delivery {}

export interface Reservations {}

export interface TakesCreditCard {}

export interface Hours {
  display: string;
  is_local_holiday: boolean;
  open_now: boolean;
  regular: Regular[];
}

export interface Regular {
  close: string;
  day: number;
  open: string;
}

export interface HoursPopular {
  close: string;
  day: number;
  open: string;
}

export interface Location {
  address: string;
  locality: string;
  region: string;
  postcode: string;
  admin_region: string;
  post_town: string;
  po_box: string;
  country: string;
  formatted_address: string;
}

export interface Photo {
  fsq_photo_id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip3;
}

export interface Tip3 {
  fsq_tip_id: string;
  created_at: string;
  text: string;
  url: string;
  photo: Photo2;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface Photo2 {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip4;
}

export interface Tip4 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface PlaceAction {
  action: string;
  url: string;
  provider: string;
}

export interface RelatedPlaces {
  parent: Parent;
  children: Children[];
}

export interface Parent {
  fsq_place_id: string;
  latitude: Latitude2;
  longitude: Longitude2;
  categories: Category2[];
  chains: Chain2[];
  date_closed: string;
  date_created: string;
  date_refreshed: string;
  description: string;
  distance: number;
  email: string;
  extended_location: ExtendedLocation2;
  attributes: Attributes2;
  hours: Hours2;
  hours_popular: HoursPopular2[];
  link: string;
  location: Location2;
  menu: string;
  name: string;
  photos: Photo3[];
  place_actions: PlaceAction2[];
  popularity: number;
  placemaker_url: string;
  price: number;
  rating: number;
  social_media: SocialMedia;
  stats: Stats;
  store_id: string;
  tastes: string[];
  tel: string;
  tips: Tip8[];
  verified: boolean;
  website: string;
}

export interface Latitude2 {}

export interface Longitude2 {}

export interface Category2 {
  fsq_category_id: string;
  name: string;
  short_name: string;
  plural_name: string;
  icon: Icon2;
}

export interface Icon2 {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip5;
}

export interface Tip5 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface Chain2 {
  fsq_chain_id: string;
  name: string;
  logo: Logo2;
  parent_id: string;
}

export interface Logo2 {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip6;
}

export interface Tip6 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface ExtendedLocation2 {
  dma: string;
  census_block_id: string;
}

export interface Attributes2 {
  restroom: Restroom2;
  outdoor_seating: OutdoorSeating2;
  atm: Atm2;
  has_parking: HasParking2;
  wifi: string;
  delivery: Delivery2;
  reservations: Reservations2;
  takes_credit_card: TakesCreditCard2;
}

export interface Restroom2 {}

export interface OutdoorSeating2 {}

export interface Atm2 {}

export interface HasParking2 {}

export interface Delivery2 {}

export interface Reservations2 {}

export interface TakesCreditCard2 {}

export interface Hours2 {
  display: string;
  is_local_holiday: boolean;
  open_now: boolean;
  regular: Regular2[];
}

export interface Regular2 {
  close: string;
  day: number;
  open: string;
}

export interface HoursPopular2 {
  close: string;
  day: number;
  open: string;
}

export interface Location2 {
  address: string;
  locality: string;
  region: string;
  postcode: string;
  admin_region: string;
  post_town: string;
  po_box: string;
  country: string;
  formatted_address: string;
}

export interface Photo3 {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  tip: Tip7;
}

export interface Tip7 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface PlaceAction2 {
  action: string;
  url: string;
  provider: string;
}

export interface SocialMedia {
  facebook_id: string;
  instagram: string;
  twitter: string;
}

export interface Stats {
  total_photos: number;
  total_ratings: number;
  total_tips: number;
}

export interface Tip8 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface Children {
  fsq_place_id: string;
  latitude: Latitude3;
  longitude: Longitude3;
  categories: Category3[];
  chains: Chain3[];
  date_closed: string;
  date_created: string;
  date_refreshed: string;
  description: string;
  distance: number;
  email: string;
  extended_location: ExtendedLocation3;
  attributes: Attributes3;
  hours: Hours3;
  hours_popular: HoursPopular3[];
  link: string;
  location: Location3;
  menu: string;
  name: string;
  photos: Photo4[];
  place_actions: PlaceAction3[];
  popularity: number;
  placemaker_url: string;
  price: number;
  rating: number;
  social_media: SocialMedia2;
  stats: Stats2;
  store_id: string;
  tastes: string[];
  tel: string;
  tips: Tip12[];
  verified: boolean;
  website: string;
}

export interface Latitude3 {}

export interface Longitude3 {}

export interface Category3 {
  fsq_category_id: string;
  name: string;
  short_name: string;
  plural_name: string;
  icon: Icon3;
}

export interface Icon3 {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip9;
}

export interface Tip9 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface Chain3 {
  fsq_chain_id: string;
  name: string;
  logo: Logo3;
  parent_id: string;
}

export interface Logo3 {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip10;
}

export interface Tip10 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface ExtendedLocation3 {
  dma: string;
  census_block_id: string;
}

export interface Attributes3 {
  restroom: Restroom3;
  outdoor_seating: OutdoorSeating3;
  atm: Atm3;
  has_parking: HasParking3;
  wifi: string;
  delivery: Delivery3;
  reservations: Reservations3;
  takes_credit_card: TakesCreditCard3;
}

export interface Restroom3 {}

export interface OutdoorSeating3 {}

export interface Atm3 {}

export interface HasParking3 {}

export interface Delivery3 {}

export interface Reservations3 {}

export interface TakesCreditCard3 {}

export interface Hours3 {
  display: string;
  is_local_holiday: boolean;
  open_now: boolean;
  regular: Regular3[];
}

export interface Regular3 {
  close: string;
  day: number;
  open: string;
}

export interface HoursPopular3 {
  close: string;
  day: number;
  open: string;
}

export interface Location3 {
  address: string;
  locality: string;
  region: string;
  postcode: string;
  admin_region: string;
  post_town: string;
  po_box: string;
  country: string;
  formatted_address: string;
}

export interface Photo4 {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  tip: Tip11;
}

export interface Tip11 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface PlaceAction3 {
  action: string;
  url: string;
  provider: string;
}

export interface SocialMedia2 {
  facebook_id: string;
  instagram: string;
  twitter: string;
}

export interface Stats2 {
  total_photos: number;
  total_ratings: number;
  total_tips: number;
}

export interface Tip12 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface SocialMedia3 {
  facebook_id: string;
  instagram: string;
  twitter: string;
}

export interface Stats3 {
  total_photos: number;
  total_ratings: number;
  total_tips: number;
}

export interface Tip13 {
  fsq_tip_id: string;
  created_at: string;
  text: string;
  url: string;
  photo: Photo5;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface Photo5 {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip14;
}

export interface Tip14 {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface VeracityRating {}

export interface Plugins {
  traversable_again: boolean;
  additionalProp: AdditionalProp;
}

export interface AdditionalProp {}

export interface Context {
  geo_bounds: GeoBounds;
}

export interface GeoBounds {
  circle: Circle;
}

export interface Circle {
  center: Center;
  radius: number;
}

export interface Center {
  latitude: number;
  longitude: number;
}
