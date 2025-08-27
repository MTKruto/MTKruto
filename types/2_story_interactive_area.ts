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

import { unreachable } from "../0_deps.ts";
import { Api } from "../2_tl.ts";
import type { EntityGetter } from "./_getters.ts";
import { constructLocation, type Location } from "./0_location.ts";
import type { MessageReference } from "./0_message_reference.ts";
import { constructReaction, type Reaction, reactionToTlObject } from "./0_reaction.ts";
import { constructVenue, type Venue } from "./1_venue.ts";

/** @unlisted */
export interface StoryInteractiveAreaPosition {
  xPercentage: number;
  yPercentage: number;
  widthPercentage: number;
  heightPercentage: number;
  rotationAngle: number;
}

/** @unlisted */
export interface _StoryInteractiveAreaPositionCommon {
  position: StoryInteractiveAreaPosition;
}

/** @unlisted */
export interface StoryInteractiveAreaLocation extends _StoryInteractiveAreaPositionCommon {
  location: Location;
}

/** @unlisted */
export interface StoryInteractiveAreaVenue extends _StoryInteractiveAreaPositionCommon {
  venue: Venue;
}

/** @unlisted */
export interface StoryInteractiveAreaReaction extends _StoryInteractiveAreaPositionCommon {
  reaction: Reaction;
  count?: number;
  dark?: boolean;
  flipped?: boolean;
}

/** @unlisted */
export interface StoryInteractiveAreaMessage extends _StoryInteractiveAreaPositionCommon {
  messageReference: MessageReference;
}

/** A story's interactive area. */
export type StoryInteractiveArea =
  | StoryInteractiveAreaLocation
  | StoryInteractiveAreaVenue
  | StoryInteractiveAreaReaction
  | StoryInteractiveAreaMessage;

function constructStoryInteractiveAreaPosition(position: Api.mediaAreaCoordinates): StoryInteractiveAreaPosition {
  return {
    xPercentage: position.x,
    yPercentage: position.y,
    widthPercentage: position.w,
    heightPercentage: position.h,
    rotationAngle: position.rotation,
  };
}
export function constructStoryInteractiveArea(area: Api.MediaArea): StoryInteractiveArea {
  const position = constructStoryInteractiveAreaPosition(area.coordinates);
  if (Api.is("mediaAreaGeoPoint", area)) {
    if (Api.is("geoPointEmpty", area.geo)) {
      unreachable(); // will this ever be empty?
    }
    const location = constructLocation(area.geo);
    return { position, location };
  } else if (Api.is("mediaAreaVenue", area)) {
    const venue = constructVenue(area);
    return { position, venue };
  } else if (Api.is("mediaAreaSuggestedReaction", area)) {
    const reaction = constructReaction(area.reaction);
    return {
      position,
      reaction,
      count: 0, // TODO: count
      flipped: area.flipped ? true : false,
      dark: area.dark ? true : false,
    };
  } else if (Api.is("mediaAreaChannelPost", area)) {
    return {
      position,
      messageReference: {
        chatId: Api.peerToChatId(area),
        messageId: area.msg_id,
      },
    };
  } else {
    unreachable();
  }
}

function storyInteractiveAreaPositionToTlObject(position: StoryInteractiveAreaPosition): Api.mediaAreaCoordinates {
  return { _: "mediaAreaCoordinates", x: position.xPercentage, y: position.yPercentage, w: position.widthPercentage, h: position.heightPercentage, rotation: position.rotationAngle };
}
export async function storyInteractiveAreaToTlObject(area: StoryInteractiveArea, getEntity: EntityGetter): Promise<Api.MediaArea> {
  const coordinates = storyInteractiveAreaPositionToTlObject(area.position);
  if ("location" in area) {
    const geo: Api.geoPoint = { _: "geoPoint", lat: area.location.latitude, long: area.location.longitude, access_hash: 0n, accuracy_radius: area.location.horizontalAccuracy };
    return { _: "mediaAreaGeoPoint", coordinates, geo };
  } else if ("venue" in area) {
    const geo: Api.geoPoint = { _: "geoPoint", lat: area.venue.location.latitude, long: area.venue.location.longitude, access_hash: 0n, accuracy_radius: area.venue.location.horizontalAccuracy };
    return {
      _: "mediaAreaVenue",
      coordinates,
      geo,
      address: area.venue.address,
      provider: "foursquare",
      title: area.venue.title,
      venue_id: area.venue.foursquareId || "",
      venue_type: area.venue.foursquareType || "",
    };
  } else if ("reaction" in area) {
    const reaction = reactionToTlObject(area.reaction);
    return { _: "mediaAreaSuggestedReaction", coordinates, reaction, dark: area.dark ? true : undefined, flipped: area.flipped ? true : undefined };
  } else if ("messageReference" in area) {
    const entity = await getEntity(Api.chatIdToPeer(area.messageReference.chatId));
    if (!(Api.is("channel", entity))) {
      unreachable();
    }
    const channel: Api.inputChannel = { _: "inputChannel", channel_id: entity.id, access_hash: entity.access_hash ?? 0n };
    return { _: "inputMediaAreaChannelPost", coordinates, channel, msg_id: area.messageReference.messageId };
  } else {
    unreachable();
  }
}
