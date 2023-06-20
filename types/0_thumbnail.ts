import * as types from "../tl/2_types.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType, ThumbnailSource } from "./!0_file_id.ts";

export interface Thumbnail {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  fileUniqueId: string;
  /** Photo width */
  width: number;
  /** Photo height */
  height: number;
  /** File size in bytes */
  fileSize: number;
}

export function constructThumbnail(size: types.PhotoSize, file: types.Document | types.Photo): Thumbnail {
  const fileType = file instanceof types.Photo ? FileType.Photo : FileType.Document;

  const fileId = new FileID(null, null, fileType, file.dcId, {
    mediaId: file.id,
    accessHash: file.accessHash,
    fileReference: file.fileReference,
    thumbnailFileType: fileType,
    thumbnailSource: ThumbnailSource.Thumbnail,
    thumbnailSize: size.type,
    volumeId: 0n,
    localId: 0,
  }).encode();
  const fileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: file.id }).encode();

  return {
    fileId,
    fileUniqueId,
    width: size.w,
    height: size.h,
    fileSize: size.size,
  };
}
