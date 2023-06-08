import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

// TODO: separate video note
export interface Video {
  fileId: string;
  fileUniqueId: string;
  width: number;
  height: number;
  duration: number;
  thumbnail?: Thumbnail;
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
    thumbnail: document.thumbs ? constructThumbnail(document.thumbs[0][as](types.PhotoSize), document) : undefined,
    fileName: undefined, // TODO
    mimeType: document.mimeType,
    fileSize: Number(document.size),
  };
}
