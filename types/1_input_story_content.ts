import { FileSource } from "./0_file_source.ts";

/** @unlisted */
export interface InputStoryContentPhoto {
  photo: FileSource;
  attachedStickerFileIds?: string[];
}

/** @unlisted */
export interface InputStoryContentVideo {
  video: FileSource;
  attachedStickerFileIds?: string[];
  duration: number;
  animation?: boolean;
}

/** A story content when provided as an input. */
export type InputStoryContent = InputStoryContentPhoto | InputStoryContentVideo;
