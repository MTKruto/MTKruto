import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

// TODO: separate video note
export interface Video {
  fileId: string;
  fileUniqueId: string;
  width: number;
  height: number;
  duration: number;
  thumbnails: Thumbnail[];
  fileName?: string;
  mimeType: string;
  fileSize: number;
}

export function constructVideo(document: types.Document, videoAttribute: types.DocumentAttributeVideo, fileId: string, fileUniqueId: string): Video {
  return {
    fileId,
    fileUniqueId,
    width: videoAttribute.w,
    height: videoAttribute.h,
    duration: videoAttribute.duration,
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    fileName: undefined, // TODO
    mimeType: document.mimeType,
    fileSize: Number(document.size),
  };
}
