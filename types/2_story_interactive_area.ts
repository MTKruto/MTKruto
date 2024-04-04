import { UNREACHABLE } from "../1_utilities.ts";
import { chatIdToPeer, enums, peerToChatId, types } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { constructLocation, Location } from "./0_location.ts";
import { MessageReference } from "./0_message_reference.ts";
import { constructReaction, reactionToTlObject } from "./0_reaction.ts";
import { Reaction } from "./0_reaction.ts";
import { constructVenue, Venue } from "./1_venue.ts";

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

function constructStoryInteractiveAreaPosition(position: types.MediaAreaCoordinates): StoryInteractiveAreaPosition {
  return {
    xPercentage: position.x,
    yPercentage: position.y,
    widthPercentage: position.w,
    heightPercentage: position.h,
    rotationAngle: position.rotation,
  };
}
export function constructStoryInteractiveArea(area: enums.MediaArea): StoryInteractiveArea {
  const position = constructStoryInteractiveAreaPosition(area.coordinates);
  if (area instanceof types.MediaAreaGeoPoint) {
    if (area.geo instanceof types.GeoPointEmpty) {
      UNREACHABLE(); // will this ever be empty?
    }
    const location = constructLocation(area.geo);
    return { position, location };
  } else if (area instanceof types.MediaAreaVenue) {
    const venue = constructVenue(area);
    return { position, venue };
  } else if (area instanceof types.MediaAreaSuggestedReaction) {
    const reaction = constructReaction(area.reaction);
    return {
      position,
      reaction,
      count: 0, // TODO: count
      flipped: area.flipped ? true : false,
      dark: area.dark ? true : false,
    };
  } else if (area instanceof types.MediaAreaChannelPost) {
    return {
      position,
      messageReference: {
        chatId: peerToChatId(area),
        messageId: area.msg_id,
      },
    };
  } else {
    UNREACHABLE();
  }
}

function storyInteractiveAreaPositionToTlObject(position: StoryInteractiveAreaPosition) {
  return new types.MediaAreaCoordinates({
    x: position.xPercentage,
    y: position.yPercentage,
    w: position.widthPercentage,
    h: position.heightPercentage,
    rotation: position.rotationAngle,
  });
}
export async function storyInteractiveAreaToTlObject(area: StoryInteractiveArea, getEntity: EntityGetter): Promise<enums.MediaArea> {
  const coordinates = storyInteractiveAreaPositionToTlObject(area.position);
  if ("location" in area) {
    const geo = new types.GeoPoint({ lat: area.location.latitude, long: area.location.longitude, access_hash: 0n, accuracy_radius: area.location.horizontalAccuracy });
    return new types.MediaAreaGeoPoint({ coordinates, geo });
  } else if ("venue" in area) {
    const geo = new types.GeoPoint({ lat: area.venue.location.latitude, long: area.venue.location.longitude, access_hash: 0n, accuracy_radius: area.venue.location.horizontalAccuracy });
    return new types.MediaAreaVenue({
      coordinates,
      geo,
      address: area.venue.address,
      provider: "foursquare",
      title: area.venue.title,
      venue_id: area.venue.foursquareId || "", // TODO: require?
      venue_type: area.venue.foursquareType || "", // TODO: require?
    });
  } else if ("reaction" in area) {
    const reaction = reactionToTlObject(area.reaction);
    return new types.MediaAreaSuggestedReaction({
      coordinates,
      reaction,
      dark: area.dark ? true : undefined,
      flipped: area.flipped ? true : undefined,
    });
  } else if ("messageReference" in area) {
    const entity = await getEntity(chatIdToPeer(area.messageReference.chatId));
    if (!(entity instanceof types.Channel)) {
      UNREACHABLE();
    }
    const channel = new types.InputChannel({ channel_id: entity.id, access_hash: entity.access_hash ?? 0n });
    return new types.InputMediaAreaChannelPost({ coordinates, channel, msg_id: area.messageReference.messageId });
  } else {
    UNREACHABLE();
  }
}
