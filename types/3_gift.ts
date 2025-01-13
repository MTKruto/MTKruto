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
import { constructSticker2, Sticker } from "./1_sticker.ts";
import { constructGiftUpgradedComponent, GiftUpgradedComponent } from "./2_gift_upgraded_component.ts";

/**
 * An non-upgraded gift.
 *
 * @unlisted
 */
export interface GiftNonUpgraded {
  /** The identifier of the gift. */
  id: string;
  /** The sticker that represents the gift. */
  sticker: Sticker;
  /** The price of the sticker in Telegram Stars. */
  price: number;
  /** Whether the supply of this gift is limited. */
  limited: boolean;
  /** The remaining supply of the gift if limited. */
  remaining?: number;
  /** The total supply of the gift if limited. */
  total?: number;
  /** Whether the gift is sold out if limited. */
  soldOut?: boolean;
  /** Whether the gift is dedicated to birthdays. */
  birthday: boolean;
  /** The amount of Telegram Stars that the gift can be swapped with. */
  conversionPrice: number;
  /** The date of the first sale of the gift if sold out. */
  firstSaleDate?: Date;
  /** The date of the last sale of the gift if sold out. */
  lastSaleDate?: Date;
}

/**
 * An upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgraded {
  /** The identifier of the gift. */
  id: string;
  /** The title of the gift. */
  title: string;
  /** The unique index of the gift among others of the same type. */
  index: number;
  /** The identifier of the user that owns the gift. */
  ownerId: number;
  /** The count of the amount of upgraded gifts of the same type. */
  currentUpgrades: number;
  /** The maximum count of gifts of the same type that can be upgraded. */
  maxUpgrades: number;
  /** The components of the gift. */
  components: GiftUpgradedComponent[];
}

/** A gift. */
export type Gift = GiftNonUpgraded | GiftUpgraded;

export function constructGift(gift: Api.StarGift): Gift {
  if (is("starGiftUnique", gift)) {
    return constructGiftUpgraded(gift);
  } else {
    return constructGiftNonUpgraded(gift);
  }
}
export function constructGiftUpgraded(gift: Api.starGiftUnique): GiftUpgraded {
  const id = String(gift.id);
  const title = gift.title;
  const index = gift.num;
  const ownerId = Number(gift.owner_id);
  const currentUpgrades = gift.availability_issued;
  const maxUpgrades = gift.availability_total;
  const components = gift.attributes.map(constructGiftUpgradedComponent);
  return {
    id,
    title,
    index,
    ownerId,
    currentUpgrades,
    maxUpgrades,
    components,
  };
}
export function constructGiftNonUpgraded(gift: Api.starGift): Gift {
  if (!is("document", gift.sticker)) {
    unreachable();
  }
  const id = String(gift.id);
  const fileId: FileId = {
    type: FileType.Sticker,
    dcId: gift.sticker.dc_id,
    fileReference: gift.sticker.file_reference,
    location: { type: "common", id: gift.sticker.id, accessHash: gift.sticker.access_hash },
  };
  const sticker = constructSticker2(gift.sticker, serializeFileId(fileId), toUniqueFileId(fileId), undefined, "");
  const price = Number(gift.stars);
  const limited = !!gift.limited;
  const remaining = limited ? gift.availability_remains ?? 0 : undefined;
  const total = limited ? gift.availability_total ?? 0 : undefined;
  const soldOut = limited ? !!gift.sold_out : undefined;
  const birthday = !!gift.birthday;
  const conversionPrice = Number(gift.convert_stars);
  const firstSaleDate = limited ? gift.first_sale_date ? fromUnixTimestamp(gift.first_sale_date) : undefined : undefined;
  const lastSaleDate = limited ? gift.last_sale_date ? fromUnixTimestamp(gift.last_sale_date) : undefined : undefined;
  return cleanObject({
    id,
    sticker,
    price,
    limited,
    remaining,
    total,
    soldOut,
    birthday,
    conversionPrice,
    firstSaleDate,
    lastSaleDate,
  });
}
