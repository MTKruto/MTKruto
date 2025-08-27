import { unreachable } from "../0_deps.ts";
import { Api } from "../2_tl.ts";
import { type FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { PhotoSourceType } from "./_file_id.ts";
import type { Thumbnail } from "./0_thumbnail.ts";
import { constructSticker2, type Sticker } from "./1_sticker.ts";

export interface StickerSet {
  name: string;
  title: string;
  type: "regular" | "mask" | "customEmoji";
  stickers: Sticker[];
  thumbnails: Thumbnail[];
}

export function constructStickerSet(stickerSet: Api.messages_StickerSet): StickerSet {
  if (!Api.is("messages.stickerSet", stickerSet)) {
    unreachable();
  }
  const type: StickerSet["type"] = stickerSet.set.emojis ? "customEmoji" : stickerSet.set.masks ? "mask" : "regular";
  const name = stickerSet.set.short_name;
  const title = stickerSet.set.title;
  const stickers = stickerSet.documents.map((v) => {
    if (!Api.is("document", v)) {
      unreachable();
    }
    const fileId: FileId = {
      type: FileType.Sticker,
      dcId: v.dc_id,
      fileReference: v.file_reference,
      location: { type: "common", id: v.id, accessHash: v.access_hash },
    };
    return constructSticker2(v, serializeFileId(fileId), toUniqueFileId(fileId), name);
  });
  const thumbnails = new Array<Thumbnail>();

  const thumb = stickerSet.set.thumbs?.[0];
  if (thumb !== undefined && stickerSet.set.thumb_version !== undefined && stickerSet.set.thumb_dc_id !== undefined && Api.is("photoSize", thumb)) {
    const fileId: FileId = {
      type: FileType.Photo,
      dcId: stickerSet.set.thumb_dc_id,
      location: {
        type: "photo",
        source: {
          type: PhotoSourceType.StickerSetThumbnailVersion,
          stickerSetId: stickerSet.set.id,
          stickerSetAccessHash: stickerSet.set.access_hash,
          version: stickerSet.set.thumb_version,
        },
        id: 0n,
        accessHash: 0n,
      },
    };
    thumbnails.push({
      fileId: serializeFileId(fileId),
      fileUniqueId: toUniqueFileId(fileId),
      width: thumb.w,
      height: thumb.h,
      fileSize: thumb.size,
    });
  }

  return {
    type,
    name,
    title,
    stickers,
    thumbnails,
  };
}
