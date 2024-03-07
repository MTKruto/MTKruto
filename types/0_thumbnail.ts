import { types } from "../2_tl.ts";
import { PhotoSourceType } from "../3_types.ts";
import { FileId, FileType, serializeFileId, toUniqueFileId } from "./0__file_id.ts";

/** A file or sticker thumbnail. */
export interface Thumbnail {
  /** A file identifier that can be used to download or reuse the thumbnail. */
  fileId: string;
  /** A file identifier that can be used to identify the thumbnail. */
  fileUniqueId: string;
  /** The width of the thumbnail. */
  width: number;
  /** The height of the thumbnail. */
  height: number;
  /** Size of the file in bytes. */
  fileSize: number;
}

export function constructThumbnail(size: types.PhotoSize, file: types.Document | types.Photo): Thumbnail {
  const fileType = file instanceof types.Photo ? FileType.Photo : FileType.Document;

  const fileId_: FileId = file instanceof types.Photo
    ? {
      type: FileType.Photo,
      dcId: file.dc_id,
      fileReference: file.file_reference,
      location: { type: "photo", id: file.id, accessHash: file.access_hash, source: { type: PhotoSourceType.Thumbnail, fileType, thumbnailType: size.type.charCodeAt(0) } },
    }
    : {
      type: FileType.Photo,
      dcId: file.dc_id,
      fileReference: file.file_reference,
      location: { type: "common", id: file.id, accessHash: file.access_hash },
    };

  return {
    fileId: serializeFileId(fileId_),
    fileUniqueId: toUniqueFileId(fileId_),
    width: size.w,
    height: size.h,
    fileSize: size.size,
  };
}
