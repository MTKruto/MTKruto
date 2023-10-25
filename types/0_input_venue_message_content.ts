/** A message content that shares a venue. */
export interface InputVenuMessageContent {
  /** The latitude of the venue. */
  latitude: number;
  /** The longitude of the venue. */
  longitude: number;
  /** The name of the venue. */
  title: string;
  /** The address of the venue. */
  address: string;
  /** The Foursquare identifier of the venue. */
  foursquareId?: string;
  /** The Foursquare type of the venue. */
  foursquareType?: string;
  /** The Google Places identifier of the venue. */
  googlePlaceId?: string;
  /** The Google Places type of the venue. */
  googlePlaceType?: string;
}
