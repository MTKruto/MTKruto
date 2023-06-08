import * as types from "../tl/2_types.ts";

export interface Thumbnail {
  fileId: string;
  fileUniqueId: string;
  width: number;
  height: number;
  fileSize: number;
}

export function constructThumbnail(size: types.PhotoSize, fileId: string, fileUniqueId: string): Thumbnail {
  return {
    fileId,
    fileUniqueId,
    width: size.w,
    height: size.h,
    fileSize: size.size,
  };
}
