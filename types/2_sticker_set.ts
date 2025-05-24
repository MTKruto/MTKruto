import { unreachable } from "../0_deps.ts";
import { Api } from "../2_tl.ts";
import { constructThumbnail } from "../3_types.ts";
import { FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
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
  const thumbnails = new Array<Thumbnail>(); // TODO

  // stickerSet.set.thumbs?.map((v) => {
  //   return constructThumbnail(
  //     Api.as("photoSize", v),
  //     {
  //       _: "document",
  //       id: stickerSet.set.thumb_document_id,
  //       access_hash: stickerSet.set.access_hash,
  //       file_reference: new Uint16Array(),
  //       date: 0,
  //       mime_type: '',
  //       size: 
  //     },
  //   );
  // });

  return {
    type,
    name,
    title,
    stickers,
    thumbnails,
  };
}
