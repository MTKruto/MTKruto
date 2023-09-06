import { as, types } from "../2_tl.ts";

/** This object represents a point on the map. */
export interface Location {
  /** Latitude as defined by sender */
  latitude: number;
  /** Longitude as defined by sender */
  longitude: number;
  /** The radius of uncertainty for the location, measured in meters; 0-1500 */
  horizontalAccuracy?: number;
  /** Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. */
  livePeriod?: number;
  /** The direction in which user is moving, in degrees; 1-360. For active live locations only. */
  heading?: number;
  /** The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
  proximityAlertRadius?: number;
}

export function constructLocation(geo_: types.MessageMediaGeo | types.MessageMediaGeoLive | types.GeoPoint): Location {
  if (geo_ instanceof types.MessageMediaGeo) {
    const geo = geo_.geo[as](types.GeoPoint);
    return {
      latitude: geo.lat,
      longitude: geo.long,
      horizontalAccuracy: geo.accuracyRadius,
    };
  } else if (geo_ instanceof types.MessageMediaGeoLive) {
    const media = geo_;
    const geo = media.geo[as](types.GeoPoint);
    return {
      latitude: geo.lat,
      longitude: geo.long,
      horizontalAccuracy: geo.accuracyRadius,
      livePeriod: media.period,
      heading: media.heading,
      proximityAlertRadius: media.proximityNotificationRadius,
    };
  } else {
    return {
      latitude: geo_.lat,
      longitude: geo_.long,
      horizontalAccuracy: geo_.accuracyRadius,
    };
  }
}
