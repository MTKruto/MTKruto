import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";

export interface Location {
  latitude: number;
  longitude: number;
  horizontalAccuracy?: number;
  livePeriod?: number;
  heading?: number;
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
