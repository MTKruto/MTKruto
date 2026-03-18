/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Api } from "../2_tl.ts";
import { type FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { constructDocument, type Document } from "./1_document.ts";

/** A gift collection. */
export interface GiftCollection {
  /** The identifier of the collection. */
  id: number;
  /** The name of the collection. */
  name: string;
  /** The icon of the collection. */
  icon?: Document;
  /** The number of gifts in the collection. */
  giftCount: number;
}

export function constructGiftCollection(collection: Api.StarGiftCollection): GiftCollection {
  const id = collection.collection_id;
  const name = collection.title;
  let icon: Document | undefined;
  if (Api.is("document", collection.icon)) {
    const fileId: FileId = {
      type: FileType.Sticker,
      dcId: collection.icon.dc_id,
      fileReference: collection.icon.file_reference,
      location: { type: "common", id: collection.icon.id, accessHash: collection.icon.access_hash },
    };
    icon = constructDocument(collection.icon, { _: "documentAttributeFilename", file_name: "gift.tgs" }, serializeFileId(fileId), toUniqueFileId(fileId));
  }

  const giftCount = collection.gifts_count;

  return {
    id,
    name,
    icon,
    giftCount,
  };
}
