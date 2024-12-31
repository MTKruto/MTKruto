/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Api, as } from "../2_tl.ts";
import { constructLocation, Location } from "./0_location.ts";

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

export function constructVenue(media_: Api.messageMediaVenue | Api.mediaAreaVenue): Venue {
  const geo = as("geoPoint", media_.geo);
  return {
    location: constructLocation(geo),
    title: media_.title,
    address: media_.address,
    foursquareId: media_.venue_id,
    foursquareType: media_.venue_type,
  };
}
