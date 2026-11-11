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
import { constructTonNftAttribute, type TonNftAttribute } from "./0_ton_nft_attribute.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructGiftUpgraded, type GiftUpgraded } from "./4_gift.ts";

/** A TON NFT. */
export interface TonNft {
  /** The address of the NFT. */
  address: string;
  /** The collection address of the NFT. */
  collectionAddress?: string;
  /** The index of the NFT in the collection. */
  index: string;
  /** The name of the NFT. */
  name: string;
  /** The description of the NFT. */
  description: string;
  /** The NFT's attributes. */
  attributes: TonNftAttribute[];
  /** The gift that belongs to the NFT. */
  gift?: GiftUpgraded;
}

export function constructTonNft(wni: Api.wallet_NftItem, getPeer: PeerGetter): TonNft {
  const address = wni.address;
  const collectionAddress = wni.collection_address;
  const index = wni.index;
  const name = wni.name ?? "";
  const description = wni.description ?? "";
  const attributes = wni.attributes?.map(constructTonNftAttribute) ?? [];
  const gift = wni.gift ? constructGiftUpgraded(Api.as("starGiftUnique", wni.gift), getPeer) : undefined;
  // TODO: implement other fields
  return {
    address,
    collectionAddress,
    index,
    name,
    description,
    attributes,
    gift,
  };
}
