import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

export interface VideoNote {
  fileId: string;
  fileUniqueId: string;
  length: number;
  duration: number;
  thumbnails: Thumbnail[];
  fileName?: string;
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
