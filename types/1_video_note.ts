import { types } from "../2_tl.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** A video note. */
export interface VideoNote {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** Video width and height (diameter of the video message) as defined by sender */
  length: number;
  /** Duration of the video in seconds as defined by sender */
  duration: number;
  /** Video thumbnail */
  thumbnails: Thumbnail[];
  /** Original filename as defined by sender */
  fileName?: string;
  /** Size of the file in bytes. */
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
