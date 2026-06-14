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

import type { FileSource } from "./0_file_source.ts";

/** @unlisted */
export interface _InputPollOptionMediaCommon {
  /** The file name to assign if applicable. */
  fileName?: string;
  /** The mime type to assign if applicable. */
  mimeType?: string;
  /** Size of each upload chunk in bytes. */
  chunkSize?: number;
  /** Upload abort signal. */
  signal?: AbortSignal;
}

/** @unlisted */
export interface InputPollMediaAnimation extends _InputPollOptionMediaCommon {
  type: "animation";
  /** The animation. */
  animation: FileSource;
  /** A thumbnail to assign. Cannot be a URL. */
  thumbnail?: FileSource;
  /** The duration of the animation in seconds. */
  duration?: number;
  /** The width of the animation file. */
  width?: number;
  /** The height of the animation file. */
  height?: number;
  /** Whether to mark the media as a spoiler. */
  hasSpoiler?: boolean;
}

/** @unlisted */
export interface InputPollMediaPhoto extends _InputPollOptionMediaCommon {
  type: "photo";
  /** The photo. */
  photo: FileSource;
  /** The width of the photo in pixels. */
  width?: number;
  /** The height of the photo in pixels. */
  height?: number;
  /** Whether to mark the media as a spoiler. */
  hasSpoiler?: boolean;
}

/** @unlisted */
export interface InputPollMediaVideo extends _InputPollOptionMediaCommon {
  type: "video";
  /** The video. */
  video: FileSource;
  /** A thumbnail to assign. Cannot be a URL. */
  thumbnail?: FileSource;
  /** The duration of the video in seconds. */
  duration?: number;
  /** The width of the photo in pixels. */
  width?: number;
  /** The height of the photo in pixels. */
  height?: number;
  /** Whether the video is suitable for streaming. */
  supportsStreaming?: boolean;
  /** Whether to mark the media as a spoiler. */
  hasSpoiler?: boolean;
}

/** @unlisted */
export interface InputPollMediaSticker extends _InputPollOptionMediaCommon {
  type: "sticker";
  /** The sticker. */
  sticker: FileSource;
  /** Emoji to bind to the sticker. */
  emoji?: string;
}

/** @unlisted */
export interface InputPollMediaVenue {
  type: "venue";
  /** The latitude of the venue. */
  latitude: number;
  /** The longitude of the venue. */
  longitude: number;
  /** The title of the venue. */
  title: string;
  /** The written address of the venue. */
  address: string;
  /** Foursquare identifier of the venue. */
  foursquareId?: string;
  /** Foursquare type of the venue, if known. For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream". */
  foursquareType?: string;
}

/** @unlisted */
export interface InputPollMediaLink {
  type: "link";
  /** The URL. */
  url: string;
}

/** @unlisted */
export interface InputPollLivePhoto extends _InputPollOptionMediaCommon {
  type: "livePhoto";
  /** The photo. */
  photo: FileSource;
  /** The video version of the photo. */
  video: FileSource;
}

/** @unlisted */
export interface InputPollMediaLocation {
  type: "location";
  /** The latitude of the location. */
  latitude: number;
  /** The longitude of the location. */
  longitude: number;
  /** The accuracy radius of the location in meters. Must be in the range of 0-1500. */
  horizontalAccuracy?: number;
}

/** A poll option input media. */
export type InputPollMedia = InputPollMediaAnimation | InputPollMediaPhoto | InputPollMediaVideo | InputPollMediaSticker | InputPollLivePhoto | InputPollMediaLocation | InputPollMediaVenue | InputPollMediaLink;
