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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructSticker2, type Sticker } from "./1_sticker.ts";
import { constructUser, type User } from "./2_user.ts";
import { constructGiftUpgradedComponent, type GiftUpgradedComponent } from "./3_gift_upgraded_component.ts";

/**
 * An non-upgraded gift.
 *
 * @unlisted
 */
export interface GiftNonUpgraded {
  /** @discriminator */
  type: "nonupgraded";
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
  firstSaleDate?: number;
  /** The date of the last sale of the gift if sold out. */
  lastSaleDate?: number;
  /** The amount of stars required to upgrade the gift. */
  upgradePrice?: number;
}

/**
 * An upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgraded {
  /** @discriminator */
  type: "upgraded";
  /** The identifier of the gift. */
  id: string;
  /** The title of the gift. */
  title: string;
  /** The unique index of the gift among others of the same type. */
  index: number;
  /** The name of the user that owns the gift. */
  ownerName?: string;
  /** The address of the TON wallet that owns the gift. */
  ownerAddress?: string;
  /** The user that owns the gift. */
  owner?: User;
  /** The count of the amount of upgraded gifts of the same type. */
  currentUpgrades: number;
  /** The maximum count of gifts of the same type that can be upgraded. */
  maxUpgrades: number;
  /** The components of the gift. */
  components: GiftUpgradedComponent[];
  /** The address of the gift in TON blockchain. */
  address?: string;
  /** The amount of stars that can be used to buy the gift.  */
  price?: number;
}

/** A gift. */
export type Gift = GiftNonUpgraded | GiftUpgraded;

export function constructGift(gift: Api.StarGift, getPeer: PeerGetter): Gift {
  if (Api.is("starGiftUnique", gift)) {
    return constructGiftUpgraded(gift, getPeer);
  } else {
    return constructGiftNonUpgraded(gift);
  }
}
export function constructGiftUpgraded(gift: Api.starGiftUnique, getPeer: PeerGetter): GiftUpgraded {
  const id = String(gift.id);
  const title = gift.title;
  const index = gift.num;
  let owner: User | undefined;
  if (gift.owner_id) {
    const entity = getPeer(gift.owner_id);
    if (Api.is("user", entity)) {
      owner = constructUser(entity);
    }
  }
  const ownerName = gift.owner_name;
  const ownerAddress = gift.owner_address;
  const currentUpgrades = gift.availability_issued;
  const maxUpgrades = gift.availability_total;
  const components = gift.attributes.map(constructGiftUpgradedComponent);
  const address = gift.gift_address;
  const price = gift.resell_amount !== undefined ? Number(gift.resell_amount) : undefined;
  return cleanObject({
    type: "upgraded",
    id,
    title,
    index,
    ownerName,
    ownerAddress,
    owner,
    currentUpgrades,
    maxUpgrades,
    components,
    address,
    price,
  });
}
export function constructGiftNonUpgraded(gift: Api.starGift): Gift {
  if (!Api.is("document", gift.sticker)) {
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
  const firstSaleDate = limited ? gift.first_sale_date ? gift.first_sale_date : undefined : undefined;
  const lastSaleDate = limited ? gift.last_sale_date ? gift.last_sale_date : undefined : undefined;
  const upgradePrice = gift.upgrade_stars ? Number(gift.upgrade_stars) : undefined;
  return cleanObject({
    type: "nonupgraded",
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
    upgradePrice,
  });
}
