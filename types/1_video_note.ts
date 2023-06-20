import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents a video message (available in Telegram apps as of v.4.0). */
export interface VideoNote {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  fileUniqueId: string;
  /** Video width and height (diameter of the video message) as defined by sender */
  length: number;
  /** Duration of the video in seconds as defined by sender */
  duration: number;
  /** Video thumbnail */
  thumbnails: Thumbnail[];
  /** Original filename as defined by sender */
  fileName?: string;
  /** File size in bytes */
  fileSize: number;
}

export function constructVideoNote(document: types.Document, videoAttribute: types.DocumentAttributeVideo, fileId: string, fileUniqueId: string): VideoNote {
  return {
    fileId,
    fileUniqueId,
    length: videoAttribute.w,
    duration: videoAttribute.duration,
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    fileSize: Number(document.size),
  };
}
