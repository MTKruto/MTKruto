/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { toUnixTimestamp } from "../1_utilities.ts";
import { Api, inputPeerToPeer, is } from "../2_tl.ts";
import { constructInactiveChat, constructUser, ID } from "../3_types.ts";
import { AddContactParams, SetEmojiStatusParams } from "./0_params.ts";
import { canBeInputChannel, canBeInputUser, toInputChannel, toInputUser } from "./0_utilities.ts";
import { C } from "./1_types.ts";

export class AccountManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async #toggleUsername(id: ID, username: string, active: boolean) {
    const peer = await this.#c.getInputPeer(id);
    if (is("inputPeerSelf", peer)) {
      await this.#c.invoke({ _: "account.toggleUsername", username, active });
    } else if (canBeInputUser(peer)) {
      await this.#c.invoke({ _: "bots.toggleUsername", bot: toInputUser(peer), username, active });
    } else if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.toggleUsername", channel: toInputChannel(peer), username, active });
    } else {
      unreachable();
    }
  }

  async showUsername(id: ID, username: string) {
    this.#c.storage.assertUser("showUsername");
    await this.#toggleUsername(id, username, true);
  }

  async hideUsername(id: ID, username: string) {
    this.#c.storage.assertUser("hideUsername");
    await this.#toggleUsername(id, username, false);
  }

  async reorderUsernames(id: ID, order: string[]) {
    this.#c.storage.assertUser("reorderUsernames");
    const peer = await this.#c.getInputPeer(id);
    if (is("inputPeerSelf", peer)) {
      return await this.#c.invoke({ _: "account.reorderUsernames", order });
    } else if (canBeInputUser(peer)) {
      return await this.#c.invoke({ _: "bots.reorderUsernames", bot: toInputUser(peer), order });
    } else if (canBeInputChannel(peer)) {
      return await this.#c.invoke({ _: "channels.reorderUsernames", channel: toInputChannel(peer), order });
    } else {
      unreachable();
    }
  }

  async hideUsernames(id: ID) {
    this.#c.storage.assertUser("hideUsernames");
    const peer = await this.#c.getInputPeer(id);
    if (canBeInputChannel(peer)) {
      return await this.#c.invoke({ _: "channels.deactivateAllUsernames", channel: toInputChannel(peer) });
    } else {
      unreachable();
    }
  }

  async getInactiveChats() {
    this.#c.storage.assertUser("getInactiveChats");
    const { chats, dates } = await this.#c.invoke({ _: "channels.getInactiveChannels" });
    return chats.map((v, i) => constructInactiveChat(v, dates[i]));
  }

  async setOnline(online: boolean) {
    this.#c.storage.assertUser("setOnline");
    await this.#c.invoke({ _: "account.updateStatus", offline: !online });
  }

  async setEmojiStatus(id: string, params?: SetEmojiStatusParams) {
    this.#c.storage.assertUser("setEmojiStatus");
    const document_id = BigInt(id);
    let emoji_status: Api.EmojiStatus;
    if (params?.until) {
      const until = toUnixTimestamp(params.until);
      emoji_status = { _: "emojiStatusUntil", document_id, until };
    } else {
      emoji_status = { _: "emojiStatus", document_id };
    }
    await this.#c.invoke({ _: "account.updateEmojiStatus", emoji_status });
  }

  async setUserEmojiStatus(userId: ID, id: string, params?: SetEmojiStatusParams) {
    this.#c.storage.assertBot("setUserEmojiStatus");
    const user_id = await this.#c.getInputUser(userId);
    const document_id = BigInt(id);
    let emoji_status: Api.EmojiStatus;
    if (params?.until) {
      const until = toUnixTimestamp(params.until);
      emoji_status = { _: "emojiStatusUntil", document_id, until };
    } else {
      emoji_status = { _: "emojiStatus", document_id };
    }
    await this.#c.invoke({ _: "bots.updateUserEmojiStatus", user_id, emoji_status });
  }

  async setBotCanSetEmojiStatus(botId: ID, canSetEmojiStatus: boolean) {
    this.#c.storage.assertUser("setBotCanSetEmojiStatus");
    const bot = await this.#c.getInputUser(botId);
    const enabled = canSetEmojiStatus;
    await this.#c.invoke({ _: "bots.toggleUserEmojiStatusPermission", bot, enabled });
  }

  async getContacts() {
    this.#c.storage.assertUser("getContacts");
    const result = await this.#c.invoke({ _: "contacts.getContacts", hash: 0n });
    if (!is("contacts.contacts", result)) {
      unreachable();
    }
    return result.users.map((v) => is("user", v) ? constructUser(v) : null).filter((v) => v != null);
  }

  async deleteContacts(userIds: ID[]) {
    this.#c.storage.assertUser("deleteContacts");
    const id = await Promise.all(userIds.map((v) => this.#c.getInputUser(v)));
    await this.#c.invoke({ _: "contacts.deleteContacts", id });
  }

  async deleteContact(userId: ID) {
    this.#c.storage.assertUser("deleteContact");
    await this.deleteContacts([userId]);
  }

  async addContact(userId: ID, params?: AddContactParams) {
    this.#c.storage.assertUser("addContact");
    const id = await this.#c.getInputUser(userId);
    if (!is("inputPeerUser", id)) {
      unreachable();
    }
    const user = await this.#c.getEntity(inputPeerToPeer(id));
    if (!user || !("first_name" in user)) {
      unreachable();
    }
    const first_name = params?.firstName ?? user.first_name ?? "";
    const last_name = params?.lastName ?? user.last_name ?? "";
    const phone = "";
    const add_phone_privacy_exception = params?.sharePhoneNumber ? true : undefined;
    await this.#c.invoke({ _: "contacts.addContact", add_phone_privacy_exception, id, first_name, last_name, phone });
  }
}
