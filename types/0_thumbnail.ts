import * as types from "../tl/2_types.ts";

export interface Thumbnail {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  fileUniqueId: string;
  /** Photo width */
  width: number;
  /** Photo height */
  height: number;
  /** Optional. File size in bytes */
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
