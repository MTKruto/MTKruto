/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { unreachable } from "../0_deps.ts";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.ts";
import { Api, is } from "../2_tl.ts";
import { FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructSticker2, Sticker } from "./1_sticker.ts";

/**
 * The model of an upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgradedComponentModel {
  /** @discriminator */
  type: "model";
  /** The name of the model. */
  name: string;
  /** The sticker belonging to the model. */
  sticker: Sticker;
  /** A number determining how rare this type of model is out of a thousand of others. */
  rarityLevel: number;
}

/**
 * The pattern of an upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgradedComponentPattern {
  /** @discriminator */
  type: "pattern";
  /** The name of the pattern. */
  name: string;
  /** The sticker belonging to the pattern. */
  sticker: Sticker;
  /** A number determining how rare this type of pattern is out of a thousand of others. */
  rarityLevel: number;
}

/**
 * The backdrop of an upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgradedComponentBackdrop {
  /** @discriminator */
  type: "backdrop";
  /** The name of the backdrop. */
  name: string;
  /** The center color of the backdrop. */
  centerColor: number;
  /** The edge color of the backdrop. */
  edgeColor: number;
  /** The pattern color of the backdrop. */
  patternColor: number;
  /** The text color of the backdrop. */
  textColor: number;
  /** A number determining how rare this type of backdrop is out of a thousand of others. */
  rarityLevel: number;
}

/**
 * The original details of an upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgradedComponentOriginalDetails {
  /** @discriminator */
  type: "originalDetails";
  senderId?: number;
  recipientId: number;
  date: Date;
  message?: string;
  entities?: MessageEntity[];
}

/**
 * A component of an upgraded gift.
 *
 * @unlisted
 */
export type GiftUpgradedComponent = GiftUpgradedComponentModel | GiftUpgradedComponentPattern | GiftUpgradedComponentBackdrop | GiftUpgradedComponentOriginalDetails;

export function constructGiftUpgradedComponent(attribute: Api.StarGiftAttribute): GiftUpgradedComponent {
  const name = "name" in attribute ? attribute.name : "";
  const rarityLevel = "rarity_permille" in attribute ? attribute.rarity_permille : 0;

  switch (attribute._) {
    case "starGiftAttributeModel": {
      if (!is("document", attribute.document)) {
        unreachable();
      }
      const fileId: FileId = {
        type: FileType.Sticker,
        dcId: attribute.document.dc_id,
        fileReference: attribute.document.file_reference,
        location: { type: "common", id: attribute.document.id, accessHash: attribute.document.access_hash },
      };
      const sticker = constructSticker2(attribute.document, serializeFileId(fileId), toUniqueFileId(fileId), undefined, "");
      return {
        type: "model",
        name,
        sticker,
        rarityLevel,
      };
    }
    case "starGiftAttributePattern": {
      if (!is("document", attribute.document)) {
        unreachable();
      }
      const fileId: FileId = {
        type: FileType.Sticker,
        dcId: attribute.document.dc_id,
        fileReference: attribute.document.file_reference,
        location: { type: "common", id: attribute.document.id, accessHash: attribute.document.access_hash },
      };
      const sticker = constructSticker2(attribute.document, serializeFileId(fileId), toUniqueFileId(fileId), undefined, "");
      return {
        type: "pattern",
        name,
        sticker,
        rarityLevel,
      };
    }
    case "starGiftAttributeBackdrop":
      return {
        type: "backdrop",
        name,
        centerColor: attribute.center_color,
        edgeColor: attribute.edge_color,
        patternColor: attribute.pattern_color,
        textColor: attribute.text_color,
        rarityLevel,
      };
    case "starGiftAttributeOriginalDetails":
      return cleanObject({
        type: "originalDetails",
        senderId: attribute.sender_id ? Number(attribute.sender_id) : undefined,
        recipientId: Number(attribute.recipient_id),
        date: fromUnixTimestamp(attribute.date),
        message: attribute.message?.text,
        entities: attribute.message ? attribute.message.entities.map(constructMessageEntity).filter((v): v is MessageEntity => !!v) : undefined,
      });
    default:
      unreachable();
  }
}
