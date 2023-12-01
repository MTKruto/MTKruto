import { types } from "../2_tl.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export interface Animation {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** The width of the animation. */
  width: number;
  /** The height of the animation. */
  height: number;
  /** Duration of the animation in seconds. */
  duration: number;
  /** Thumbnails of the animation. */
  thumbnails: Thumbnail[];
  /** The original file name. */
  fileName?: string;
  /** MIME type of the file. */
  mimeType: string;
  /** Size of the file in bytes. */
  fileSize: number;
}

export function constructAnimation(document: types.document, videoAttribute: types.documentAttributeVideo | undefined, fileAttribute: types.documentAttributeFilename | undefined, fileId: string, fileUniqueId: string): Animation {
  return {
    fileId,
    fileUniqueId,
    width: videoAttribute?.w ?? 0,
    height: videoAttribute?.h ?? 0,
    duration: videoAttribute?.duration ?? 0,
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.photoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    fileName: fileAttribute?.file_name,
    mimeType: document.mime_type,
    fileSize: Number(document.size),
  };
}
