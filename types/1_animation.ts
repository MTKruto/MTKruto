import { types } from "../2_tl.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export interface Animation {
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
  /** Animation thumbnail as defined by sender */
  thumbnails: Thumbnail[];
  /** Original animation filename as defined by sender */
  fileName?: string;
  /** MIME type of the file. */
  mimeType: string;
  /** Size of the file in bytes. */
  fileSize: number;
}

export function constructAnimation(document: types.Document, videoAttribute: types.DocumentAttributeVideo | undefined, fileAttribute: types.DocumentAttributeFilename | undefined, fileId: string, fileUniqueId: string): Animation {
  return {
    fileId,
    fileUniqueId,
    width: videoAttribute?.w ?? 0,
    height: videoAttribute?.h ?? 0,
    duration: videoAttribute?.duration ?? 0,
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    fileName: fileAttribute?.fileName,
    mimeType: document.mimeType,
    fileSize: Number(document.size),
  };
}
