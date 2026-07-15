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
import { AccessError, InputError } from "../0_errors.ts";
import { Api } from "../2_tl.ts";
import { type Community, constructCommunity, type ID } from "../3_types.ts";
import type { AddChatToCommunityParams, CreateCommunityParams } from "./0_params.ts";
import type { C } from "./1_types.ts";

export class CommunityManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getCommunity(communityId: number): Promise<Community> {
    this.#c.storage.assertUser("getCommunity");
    const community = await this.#mustAccessibleGetCommunity(communityId);
    if (Api.is("communityForbidden", community)) {
      throw new AccessError("Cannot access the community.");
    }
    return constructCommunity(community);
  }

  async createCommunity(name: string, chatId: ID, params?: CreateCommunityParams): Promise<Community> {
    this.#c.storage.assertUser("createCommunity");
    const result = await this.#c.invoke({ _: "communities.create", hidden: params?.isHidden || undefined, title: name, about: params?.description, peer: await this.#c.getInputPeer(chatId) });
    if (!("chats" in result)) {
      unreachable();
    }
    const community = result.chats.find((v) => Api.is("community", v));
    if (community === undefined) {
      unreachable();
    }
    return constructCommunity(community);
  }

  async #mustAccessibleGetCommunity<T extends Api.community | Api.communityForbidden>(communityId: number): Promise<T & { access_hash: NonNullable<T["access_hash"]> }> {
    const community = await this.#c.messageStorage.communities.get([communityId]);
    if (community === null) {
      throw new InputError("Community not found.");
    }
    if (community.access_hash === undefined) {
      throw new AccessError("Cannot access the community.");
    }
    return community as T & { access_hash: NonNullable<T["access_hash"]> };
  }

  async deleteCommunity(communityId: number) {
    this.#c.storage.assertUser("deleteCommunity");
    const community = await this.#mustAccessibleGetCommunity(communityId);
    await this.#c.invoke({ _: "channels.deleteChannel", channel: { _: "inputChannel", channel_id: community.id, access_hash: community.access_hash } });
  }

  async addChatToCommunity(communityId: number, chatId: ID, params?: AddChatToCommunityParams) {
    this.#c.storage.assertUser("addChatToCommunity");
    const community = await this.#mustAccessibleGetCommunity(communityId);
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({
      _: "communities.togglePeerLink",
      visible: !params?.isHidden || undefined,
      hidden: params?.isHidden || undefined,
      community: { _: "inputChannel", channel_id: community.id, access_hash: community.access_hash },
      peer,
    });
  }

  async removeChatFromCommunity(communityId: number, chatId: ID) {
    this.#c.storage.assertUser("removeChatFromCommunity");
    const community = await this.#mustAccessibleGetCommunity(communityId);
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({
      _: "communities.togglePeerLink",
      deleted: true,
      community: { _: "inputChannel", channel_id: community.id, access_hash: community.access_hash },
      peer,
    });
  }

  async showCommunityAsOneChat(communityId: number) {
    this.#c.storage.assertUser("showCommunityAsOneChat");
    const community = await this.#mustAccessibleGetCommunity(communityId);
    await this.#c.invoke({ _: "communities.toggleCommunityCollapsedInDialogs", community: { _: "inputChannel", channel_id: community.id, access_hash: community.access_hash }, collapsed: true });
  }

  async showCommunityAsDifferentChats(communityId: number) {
    this.#c.storage.assertUser("showCommunityAsDifferentChats");
    const community = await this.#mustAccessibleGetCommunity(communityId);
    await this.#c.invoke({ _: "communities.toggleCommunityCollapsedInDialogs", community: { _: "inputChannel", channel_id: community.id, access_hash: community.access_hash } });
  }
}
