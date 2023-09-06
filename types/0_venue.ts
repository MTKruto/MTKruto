import { as, types } from "../2_tl.ts";
import { Location } from "./0_location.ts";

/**  */
export interface Venue {
  /** Venue location. Can't be a live location */
  location: Location;
  /** Name of the venue */
  title: string;
  /** Address of the venue */
  address: string;
  /** Foursquare identifier of the venue */
  foursquareId?: string;
  /** Foursquare type of the venue. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".) */
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
