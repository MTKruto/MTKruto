/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

import { FileSource } from "./0_file_source.ts";
import { SelfDestructOption } from "./0_self_destruct_option.ts";

/** @unlisted */
export interface _InputMediaCommon {
  /** The file name to assign if applicable. */
  fileName?: string;
  /** The mime type to assign if applicable. */
  mimeType?: string;
  /** Size of each upload chunk in bytes. */
  chunkSize?: number;
  /** Upload abort signal. */
  signal?: AbortSignal | null;
}

/** @unlisted */
export interface InputMediaAnimation extends _InputMediaCommon {
  /** The new animation. */
  animation: FileSource;
  /** A thumbnail to assign. Cannot be a URL. */
  thumbnail?: FileSource;
  /** The new caption of the message. */
  caption?: string;
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
export interface InputMediaAudio extends _InputMediaCommon {
  /** The new audio. */
  audio: FileSource;
  /** A thumbnail to assign. Cannot be a URL. */
  thumbnail?: FileSource;
  /** The new caption of the message. */
  caption?: string;
  /** The duration of the audio file in seconds. */
  duration?: number;
  /** Names of the entities that are being featured in the audio. */
  performer?: string;
  /** The title of the audio. */
  title?: string;
}

/** @unlisted */
export interface InputMediaDocument extends _InputMediaCommon {
  /** The new document. */
  document: FileSource;
  /** A thumbnail to assign. Cannot be a URL. */
  thumbnail?: FileSource;
  /** The new caption of the message. */
  caption?: string;
}

/** @unlisted */
export interface InputMediaPhoto extends _InputMediaCommon {
  /** The new photo. */
  photo: FileSource;
  /** The width of the photo in pixels. */
  width?: number;
  /** The height of the photo in pixels. */
  height?: number;
  /** The new caption of the message. */
  caption?: string;
  /** Whether to mark the media as a spoiler. */
  hasSpoiler?: boolean;
  selfDestruct?: SelfDestructOption;
}

/** @unlisted */
export interface InputMediaVideo extends _InputMediaCommon {
  /** The new video. */
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
  /** The new caption of the message. */
  caption?: string;
  /** Whether to mark the media as a spoiler. */
  hasSpoiler?: boolean;
  selfDestruct?: SelfDestructOption;
}

export type InputMedia = InputMediaAnimation | InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo;
