import { types } from "../2_tl.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType, ThumbnailSource } from "./0__file_id.ts";

/** This object represents thumbnail of a file or a sticker. */
export interface Thumbnail {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** Photo width */
  width: number;
  /** Photo height */
  height: number;
  /** Size of the file in bytes. */
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
