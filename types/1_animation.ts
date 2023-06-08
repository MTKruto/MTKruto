import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

export interface Animation {
  fileId: string;
  fileUniqueId: string;
  width: number;
  height: number;
  duration: number;
  thumbnail?: Thumbnail;
  mimeType: string;
  fileSize: number;
}

export function constructAnimation(document: types.Document, videoAttribute: types.DocumentAttributeVideo | undefined, fileId: string, fileUniqueId: string): Animation {
  return {
    fileId,
    fileUniqueId,
    width: videoAttribute?.w ?? 0,
    height: videoAttribute?.h ?? 0,
    duration: videoAttribute?.duration ?? 0,
    thumbnail: document.thumbs ? constructThumbnail(document.thumbs[0][as](types.PhotoSize), document) : undefined,
    mimeType: document.mimeType,
    fileSize: Number(document.size),
  };
}
