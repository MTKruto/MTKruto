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
import { constructAlbumStoryList, constructStoryAlbum, type ID } from "../3_types.ts";
import { inputPeerToPeer } from "../tl/2_telegram.ts";
import type { GetStoriesInAlbumParams } from "./0_params.ts";
import { getLimit } from "./0_utilities.ts";
import type { C } from "./1_types.ts";

export class StoryAlbumManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async createStoryAlbum(chatId: ID, name: string, storyIds: number[]) {
    this.#c.storage.assertUser("createStoryAlbum");
    const peer = await this.#c.getInputPeer(chatId);
    const title = name;
    const stories = storyIds;
    const result = await this.#c.invoke({ _: "stories.createAlbum", peer, title, stories });
    return constructStoryAlbum(result);
  }

  async setStoryAlbumName(chatId: ID, albumId: number, name: string) {
    this.#c.storage.assertUser("setStoryAlbumName");
    const peer = await this.#c.getInputPeer(chatId);
    const album_id = albumId;
    const title = name;
    const result = await this.#c.invoke({ _: "stories.updateAlbum", peer, album_id, title });
    return constructStoryAlbum(result);
  }

  async #addStoriesToAlbum(chatId: ID, albumId: number, storyIds: number[]) {
    const peer = await this.#c.getInputPeer(chatId);
    const album_id = albumId;
    const add_stories = storyIds;
    const result = await this.#c.invoke({ _: "stories.updateAlbum", peer, album_id, add_stories });
    return constructStoryAlbum(result);
  }

  async addStoriesToAlbum(chatId: ID, albumId: number, storyIds: number[]) {
    this.#c.storage.assertUser("addStoriesToAlbum");
    return await this.#addStoriesToAlbum(chatId, albumId, storyIds);
  }

  async addStoryToAlbum(chatId: ID, albumId: number, storyId: number) {
    this.#c.storage.assertUser("addStoryToAlbum");
    return await this.#addStoriesToAlbum(chatId, albumId, [storyId]);
  }

  async #removeStoriesFromAlbum(chatId: ID, albumId: number, storyIds: number[]) {
    const peer = await this.#c.getInputPeer(chatId);
    const album_id = albumId;
    const delete_stories = storyIds;
    const result = await this.#c.invoke({ _: "stories.updateAlbum", peer, album_id, delete_stories });
    return constructStoryAlbum(result);
  }

  async removeStoriesFromAlbum(chatId: ID, albumId: number, storyIds: number[]) {
    this.#c.storage.assertUser("removeStoriesFromAlbum");
    return await this.#removeStoriesFromAlbum(chatId, albumId, storyIds);
  }

  async removeStoryFromAlbum(chatId: ID, albumId: number, storyId: number) {
    this.#c.storage.assertUser("removeStoryFromAlbum");
    return await this.#removeStoriesFromAlbum(chatId, albumId, [storyId]);
  }

  async reorderStoriesInAlbum(chatId: ID, albumId: number, storyIds: number[]) {
    this.#c.storage.assertUser("reorderStoriesInAlbum");
    const peer = await this.#c.getInputPeer(chatId);
    const album_id = albumId;
    const order = storyIds;
    const result = await this.#c.invoke({ _: "stories.updateAlbum", peer, album_id, order });
    return constructStoryAlbum(result);
  }

  async getStoryAlbums(chatId: ID) {
    this.#c.storage.assertUser("getStoryAlbums");
    const peer = await this.#c.getInputPeer(chatId);
    const hash = 0n;
    const result = Api.as("stories.albums", await this.#c.invoke({ _: "stories.getAlbums", peer, hash }));
    return result.albums.map(constructStoryAlbum);
  }

  async getStoriesInAlbum(chatId: ID, albumId: number, params?: GetStoriesInAlbumParams) {
    this.#c.storage.assertUser("getStoriesInAlbum");
    const peer = await this.#c.getInputPeer(chatId);
    const album_id = albumId;
    const offset = params?.offset ?? 0;
    const limit = getLimit(params?.limit);
    const result = await this.#c.invoke({ _: "stories.getAlbumStories", peer, album_id, offset, limit });
    return constructAlbumStoryList(result, inputPeerToPeer(peer), this.#c.getPeer);
  }
}
