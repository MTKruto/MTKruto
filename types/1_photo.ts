import { types } from "../2_tl.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType, ThumbnailSource } from "./0__file_id.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents a photo. */
export interface Photo {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different users and bots. Can't be used to download or reuse the file. */
  fileUniqueId: string;
  /** Photo width */
  width: number;
  /** Photo height */
  height: number;
  /** File size in bytes */
  fileSize: number;
  thumbnails: Thumbnail[];
}

export function constructPhoto(photo: types.Photo): Photo {
  const sizes = photo.sizes
    .map((v) => {
      if (v instanceof types.PhotoSizeProgressive) {
        return new types.PhotoSize({ type: v.type, w: v.w, h: v.h, size: Math.max(...v.sizes) });
      } else {
        return v;
      }
    })
    .filter((v): v is types.PhotoSize => v instanceof types.PhotoSize)
    .sort((a, b) => a.size - b.size);

  const largest = sizes.slice(-1)[0];
  const { dcId, id: mediaId, accessHash, fileReference } = photo;
  const fileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: photo.id }).encode();

  return {
    fileId: new FileID(null, null, FileType.Photo, dcId, {
      mediaId,
      accessHash,
      fileReference,
      thumbnailSource: ThumbnailSource.Thumbnail,
      thumbnailFileType: FileType.Photo,
      thumbnailSize: largest.type,
      volumeId: 0n,
      localId: 0,
    }).encode(),
    fileUniqueId,
    width: largest.w,
    height: largest.h,
    fileSize: largest.size,
    thumbnails: sizes.slice(0, -1).map((v) => constructThumbnail(v, photo)),
  };
}
