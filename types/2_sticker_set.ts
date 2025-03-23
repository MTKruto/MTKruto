import { unreachable } from "../0_deps.ts";
import { Api } from "../2_tl.ts";
import { serializeFileId, toUniqueFileId } from "../3_types.ts";
import { FileId, FileType } from "./_file_id.ts";
import { Thumbnail } from "./0_thumbnail.ts";
import { constructSticker2, Sticker } from "./1_sticker.ts";

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
  const thumbnails = new Array<Thumbnail>(); // TODO
  return {
    type: "regular", // TODO
    name,
    title,
    stickers,
    thumbnails,
  };
}
