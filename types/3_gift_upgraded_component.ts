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

import { unreachable } from "../0_deps.ts";
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { constructGiftComponentRarity, type GiftComponentRarity } from "./0_gift_component_rarity.ts";
import { constructSticker2, type Sticker } from "./1_sticker.ts";
import { constructMessageEntity, type MessageEntity } from "./2_message_entity.ts";

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
  /** The rarity of the model. */
  rarity: GiftComponentRarity;
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
  /** The rarity of the pattern. */
  rarity: GiftComponentRarity;
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
  /** The rarity of the backdrop. */
  rarity: GiftComponentRarity;
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
  date: number;
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

  switch (attribute._) {
    case "starGiftAttributeModel": {
      if (!Api.is("document", attribute.document)) {
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
        rarity: constructGiftComponentRarity(attribute.rarity),
      };
    }
    case "starGiftAttributePattern": {
      if (!Api.is("document", attribute.document)) {
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
        rarity: constructGiftComponentRarity(attribute.rarity),
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
        rarity: constructGiftComponentRarity(attribute.rarity),
      };
    case "starGiftAttributeOriginalDetails":
      return cleanObject({
        type: "originalDetails",
        senderId: attribute.sender_id ? Number(attribute.sender_id) : undefined,
        recipientId: Number(attribute.recipient_id),
        date: attribute.date,
        message: attribute.message?.text,
        entities: attribute.message ? attribute.message.entities.map(constructMessageEntity).filter((v): v is MessageEntity => !!v) : undefined,
      });
    default:
      unreachable();
  }
}
