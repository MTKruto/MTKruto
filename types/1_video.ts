import { types } from "../2_tl.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents a video file. */
export interface Video {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
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
  /** MIME type of the file. */
  mimeType: string;
  /** Size of the file in bytes. */
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
    mimeType: document.mime_type,
    fileSize: Number(document.size),
  };
}
