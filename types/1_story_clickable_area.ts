import { Location } from "./0_location.ts";
import { MessageReference } from "./0_message_reference.ts";
import { Reaction } from "./0_reaction.ts";
import { Venue } from "./0_venue.ts";

/** @unlisted */
export interface StoryClickableAreaPosition {
  xPercentage: number;
  yPercentage: number;
  widthPercentage: number;
  rotationAngle: number;
}

/** @unlisted */
export interface _StoryClickableAreaPositionCommon {
  position: StoryClickableAreaPosition;
}

/** @unlisted */
export interface StoryClickableAreaLocation extends _StoryClickableAreaPositionCommon {
  location: Location;
}

/** @unlisted */
export interface StoryClickableAreaVenue extends _StoryClickableAreaPositionCommon {
  venue: Venue;
}

/** @unlisted */
export interface StoryClickableAreaReaction extends _StoryClickableAreaPositionCommon {
  reaction: Reaction;
  count?: number;
  dark?: boolean;
  flipped?: boolean;
}

/** @unlisted */
export interface StoryClickableAreaMessage extends _StoryClickableAreaPositionCommon {
  messageReference: MessageReference;
}

export type StoryClickableArea =
  | StoryClickableAreaLocation
  | StoryClickableAreaVenue
  | StoryClickableAreaReaction
  | StoryClickableAreaMessage;
