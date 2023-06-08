import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType, ThumbnailSource } from "./!0_file_id.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

export interface Photo {
  fileId: string;
  fileUniqueId: string;
  width: number;
  height: number;
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
    .map((v) => v[as](types.PhotoSize))
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
    thumbnails: sizes.slice(0, -1).map((v) => {
      const fileId = new FileID(null, null, FileType.Photo, dcId, {
        mediaId,
        accessHash,
        fileReference,
        thumbnailSource: ThumbnailSource.Thumbnail,
        thumbnailFileType: FileType.Photo,
        thumbnailSize: v.type,
        volumeId: 0n,
        localId: 0,
      }).encode();
      return constructThumbnail(v, fileId, fileUniqueId);
    }),
  };
}
