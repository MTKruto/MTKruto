import { as } from "../mod.ts";
import * as types from "../tl/2_types.ts";
import { Location } from "./0_location.ts";

export interface Venue {
  location: Location;
  title: string;
  address: string;
  foursquareId?: string;
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
