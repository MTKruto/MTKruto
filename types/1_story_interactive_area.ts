import { chatIdToPeer, types } from "../2_tl.ts";
import { UNREACHABLE } from "../1_utilities.ts";
import { Location } from "./0_location.ts";
import { MessageReference } from "./0_message_reference.ts";
import { reactionToTlObject } from "./0_reaction.ts";
import { Reaction } from "./0_reaction.ts";
import { Venue } from "./0_venue.ts";
import { EntityGetter } from "./1__getters.ts";

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

export type StoryInteractiveArea =
  | StoryInteractiveAreaLocation
  | StoryInteractiveAreaVenue
  | StoryInteractiveAreaReaction
  | StoryInteractiveAreaMessage;

function storyInteractiveAreaPositionToTlObject(position: StoryInteractiveAreaPosition) {
  return new types.MediaAreaCoordinates({
    x: position.xPercentage,
    y: position.yPercentage,
    w: position.widthPercentage,
    h: position.heightPercentage,
    rotation: position.rotationAngle,
  });
}
export async function storyInteractiveAreaToTlObject(area: StoryInteractiveArea, getEntity: EntityGetter) {
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
