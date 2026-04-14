/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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
import { chatIdToPeerId } from "../tl/2_telegram.ts";
import { constructLocation, type Location } from "./0_location.ts";
import type { MessageReference } from "./0_message_reference.ts";
import { constructReaction, type Reaction, reactionToTlObject } from "./0_reaction.ts";
import type { PeerGetter } from "./1_chat_p.ts";
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
  type: "location";
  location: Location;
}

/** @unlisted */
export interface StoryInteractiveAreaVenue extends _StoryInteractiveAreaPositionCommon {
  type: "venue";
  venue: Venue;
}

/** @unlisted */
export interface StoryInteractiveAreaReaction extends _StoryInteractiveAreaPositionCommon {
  type: "reaction";
  reaction: Reaction;
  count?: number;
  isDark?: boolean;
  isFlipped?: boolean;
}

/** @unlisted */
export interface StoryInteractiveAreaMessage extends _StoryInteractiveAreaPositionCommon {
  type: "messageReference";
  messageReference: MessageReference;
}

/** @unlisted */
export interface StoryInteractiveAreaLink extends _StoryInteractiveAreaPositionCommon {
  type: "link";
  link: string;
}

/** @unlisted */
export interface StoryInteractiveAreaWeather extends _StoryInteractiveAreaPositionCommon {
  type: "weather";
  emoji: string;
  temperature: number;
  color: number;
}

/** @unlisted */
export interface StoryInteractiveAreaGift extends _StoryInteractiveAreaPositionCommon {
  type: "gift";
  slug: string;
}

/** A story's interactive area. */
export type StoryInteractiveArea =
  | StoryInteractiveAreaLocation
  | StoryInteractiveAreaVenue
  | StoryInteractiveAreaReaction
  | StoryInteractiveAreaMessage
  | StoryInteractiveAreaLink
  | StoryInteractiveAreaWeather
  | StoryInteractiveAreaGift;

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
    return { type: "location", position, location };
  } else if (Api.is("mediaAreaVenue", area)) {
    const venue = constructVenue(area);
    return { type: "venue", position, venue };
  } else if (Api.is("mediaAreaSuggestedReaction", area)) {
    const reaction = constructReaction(area.reaction);
    return {
      type: "reaction",
      position,
      reaction,
      count: 0, // TODO: count
      isFlipped: area.flipped ? true : false,
      isDark: area.dark ? true : false,
    };
  } else if (Api.is("mediaAreaChannelPost", area)) {
    return {
      type: "messageReference",
      position,
      messageReference: {
        chatId: Api.peerToChatId(area),
        messageId: area.msg_id,
      },
    };
  } else if (Api.is("mediaAreaUrl", area)) {
    return {
      type: "link",
      position,
      link: area.url,
    };
  } else if (Api.is("mediaAreaWeather", area)) {
    return {
      type: "weather",
      position,
      emoji: area.emoji,
      temperature: area.temperature_c,
      color: area.color,
    };
  } else if (Api.is("mediaAreaStarGift", area)) {
    return {
      type: "gift",
      position,
      slug: area.slug,
    };
  } else {
    unreachable();
  }
}

function storyInteractiveAreaPositionToTlObject(position: StoryInteractiveAreaPosition): Api.mediaAreaCoordinates {
  return { _: "mediaAreaCoordinates", x: position.xPercentage, y: position.yPercentage, w: position.widthPercentage, h: position.heightPercentage, rotation: position.rotationAngle };
}
export function storyInteractiveAreaToTlObject(area: StoryInteractiveArea, getPeer: PeerGetter): Api.MediaArea {
  const coordinates = storyInteractiveAreaPositionToTlObject(area.position);
  switch (area.type) {
    case "location": {
      const geo: Api.geoPoint = { _: "geoPoint", lat: area.location.latitude, long: area.location.longitude, access_hash: 0n, accuracy_radius: area.location.horizontalAccuracy };
      return { _: "mediaAreaGeoPoint", coordinates, geo };
    }
    case "venue": {
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
    }

    case "reaction": {
      const reaction = reactionToTlObject(area.reaction);
      return { _: "mediaAreaSuggestedReaction", coordinates, reaction, dark: area.isDark ? true : undefined, flipped: area.isFlipped ? true : undefined };
    }
    case "messageReference": {
      const peer = getPeer(Api.chatIdToPeer(area.messageReference.chatId));
      if (!peer || peer[0].type !== "channel") {
        unreachable();
      }
      const channel: Api.inputChannel = { _: "inputChannel", channel_id: chatIdToPeerId(peer[0].id), access_hash: peer[1] };
      return { _: "inputMediaAreaChannelPost", coordinates, channel, msg_id: area.messageReference.messageId };
    }
    case "link":
      return { _: "mediaAreaUrl", coordinates, url: area.link };
    case "weather":
      return { _: "mediaAreaWeather", coordinates, emoji: area.emoji, temperature_c: area.temperature, color: area.color };
    case "gift":
      return { _: "mediaAreaStarGift", coordinates, slug: area.slug };
  }

  unreachable();
}
