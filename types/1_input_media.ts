import { FileSource } from "./0_file_source.ts";

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
}

export type InputMedia = InputMediaAnimation | InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo;
