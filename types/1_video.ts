import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents a video file. */
export interface Video {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  fileUniqueId: string;
  /** Video width as defined by sender */
  width: number;
  /** Video height as defined by sender */
  height: number;
  /** Duration of the video in seconds as defined by sender */
  duration: number;
  /** Video thumbnail */
  thumbnails: Thumbnail[];
  /** Original filename as defined by sender */
  fileName?: string;
  /** MIME type of the file as defined by sender */
  mimeType: string;
  /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  fileSize: number;
}

export function constructVideo(document: types.Document, videoAttribute: types.DocumentAttributeVideo, fileName: string | undefined, fileId: string, fileUniqueId: string): Video {
  return {
    fileId,
    fileUniqueId,
    width: videoAttribute.w,
    height: videoAttribute.h,
    duration: videoAttribute.duration,
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    fileName,
    mimeType: document.mimeType,
    fileSize: Number(document.size),
  };
}
