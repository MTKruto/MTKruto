import { FileSource } from "./0_file_source.ts";

/** @unlisted */
export interface StoryContentPhoto {
  photo: FileSource;
  attachedStickerFileIds?: string[];
}

/** @unlisted */
export interface StoryContentVideo {
  video: FileSource;
  attachedStickerFileIds?: string[];
  duration: number;
  animation?: boolean;
}

export type StoryContent = StoryContentPhoto | StoryContentVideo;
