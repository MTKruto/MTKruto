import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructLocation, type Location } from "./0_location.ts";

export interface ChannelLocation {
  location?: Location;
  address: string;
}

export function constructChannelLocation(cl: Api.channelLocation): ChannelLocation {
  const location = Api.is("geoPoint", cl.geo_point) ? constructLocation(cl.geo_point) : undefined;
  const address = cl.address;
  return cleanObject({
    location,
    address,
  });
}
