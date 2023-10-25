import { as, types } from "../2_tl.ts";

/** A shared location. */
export interface Location {
  /** The latitude of the location. */
  latitude: number;
  /** The longitude of the location. */
  longitude: number;
  /** The accuracy radius of the location in meters. Must be in the range of 0-1500. */
  horizontalAccuracy?: number;
  /** The duration in which the location can be updated in seconds. Must be in the range of 80-864,000. */
  livePeriod?: number;
  /** The direction which the user is moving towards. Must be in the range of 1-350. */
  heading?: number;
  /** The maximum distance for proximity alerts on approaching another chat member in meters. Must be in the range 1-100,000. */
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
