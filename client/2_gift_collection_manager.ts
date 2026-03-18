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
import { constructGiftCollection, type ID, type InputGift, inputGiftToTlObject } from "../3_types.ts";
import type { C } from "./1_types.ts";

export class GiftCollectionManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getGiftCollections(chatId: ID) {
    this.#c.storage.assertUser("getGiftCollections");
    const peer = await this.#c.getInputPeer(chatId);
    const result = Api.as("payments.starGiftCollections", await this.#c.invoke({ _: "payments.getStarGiftCollections", peer, hash: 0n }));
    return result.collections.map((v) => constructGiftCollection(v));
  }

  async createGiftCollection(chatId: ID, name: string, gifts: InputGift[]) {
    this.#c.storage.assertUser("createGiftCollection");
    const peer = await this.#c.getInputPeer(chatId);
    const title = name;
    const stargift = await Promise.all(gifts.map((v) => inputGiftToTlObject(v, this.#c.getInputPeer)));
    const result = await this.#c.invoke({ _: "payments.createStarGiftCollection", peer, title, stargift });
    return constructGiftCollection(result);
  }

  async setGiftCollectionName(chatId: ID, collectionId: number, name: string) {
    this.#c.storage.assertUser("setGiftCollectionTitle");
    const peer = await this.#c.getInputPeer(chatId);
    const collection_id = collectionId;
    const title = name;
    const result = await this.#c.invoke({ _: "payments.updateStarGiftCollection", peer, collection_id, title });
    return constructGiftCollection(result);
  }

  async addGiftsToCollection(chatId: ID, collectionId: number, gifts: InputGift[]) {
    this.#c.storage.assertUser("addGiftsToCollection");
    const peer = await this.#c.getInputPeer(chatId);
    const collection_id = collectionId;
    const add_stargift = await Promise.all(gifts.map((v) => inputGiftToTlObject(v, this.#c.getInputPeer)));
    const result = await this.#c.invoke({ _: "payments.updateStarGiftCollection", peer, collection_id, add_stargift });
    return constructGiftCollection(result);
  }

  async removeGiftsFromCollection(chatId: ID, collectionId: number, gifts: InputGift[]) {
    this.#c.storage.assertUser("removeGiftsFromCollection");
    const peer = await this.#c.getInputPeer(chatId);
    const collection_id = collectionId;
    const delete_stargift = await Promise.all(gifts.map((v) => inputGiftToTlObject(v, this.#c.getInputPeer)));
    const result = await this.#c.invoke({ _: "payments.updateStarGiftCollection", peer, collection_id, delete_stargift });
    return constructGiftCollection(result);
  }

  async reorderGiftsInCollection(chatId: ID, collectionId: number, gifts: InputGift[]) {
    this.#c.storage.assertUser("reorderGiftsInCollection");
    const peer = await this.#c.getInputPeer(chatId);
    const collection_id = collectionId;
    const order = await Promise.all(gifts.map((v) => inputGiftToTlObject(v, this.#c.getInputPeer)));
    const result = await this.#c.invoke({ _: "payments.updateStarGiftCollection", peer, collection_id, order });
    return constructGiftCollection(result);
  }

  async reorderGiftCollections(chatId: ID, collectionIds: number[]) {
    this.#c.storage.assertUser("reorderGiftCollections");
    const peer = await this.#c.getInputPeer(chatId);
    const order = collectionIds;
    await this.#c.invoke({ _: "payments.reorderStarGiftCollections", peer, order });
  }

  async deleteGiftCollection(chatId: ID, collectionId: number) {
    this.#c.storage.assertUser("deleteGiftCollection");
    const peer = await this.#c.getInputPeer(chatId);
    const collection_id = collectionId;
    await this.#c.invoke({ _: "payments.deleteStarGiftCollection", peer, collection_id });
  }
}
