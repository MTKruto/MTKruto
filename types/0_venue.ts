import { as, types } from "../2_tl.ts";
import { Location } from "./0_location.ts";

/** A shared venue. */
export interface Venue {
  /** The location of the venue. Cannot be a live location. */
  location: Location;
  /** The name of the venue. */
  title: string;
  /** The address of the venue. */
  address: string;
  /** The Foursquare identifier of the venue. */
  foursquareId?: string;
  /** The Foursquare type of the venue. */
  foursquareType?: string;
}

export function constructVenue(media_: types.MessageMediaVenue): Venue {
  const geo = media_.geo[as](types.GeoPoint);
  return {
    location: {
      latitude: geo.lat,
      longitude: geo.long,
      horizontalAccuracy: geo.accuracyRadius,
    },
    title: media_.title,
    address: media_.address,
    foursquareId: media_.venueId,
    foursquareType: media_.venueType,
  };
}
