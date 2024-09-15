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
import { is } from "../2_tl.ts";
import { constructInactiveChat, ID } from "../3_types.ts";
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
    } else if (is("inputPeerUser", peer)) {
      await this.#c.invoke({ _: "bots.toggleUsername", bot: { ...peer, _: "inputUser" }, username, active });
    } else if (is("inputPeerChannel", peer)) {
      await this.#c.invoke({ _: "channels.toggleUsername", channel: { ...peer, _: "inputChannel" }, username, active });
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
    } else if (is("inputPeerUser", peer)) {
      return await this.#c.invoke({ _: "bots.reorderUsernames", bot: { ...peer, _: "inputUser" }, order });
    } else if (is("inputPeerChannel", peer)) {
      return await this.#c.invoke({ _: "channels.reorderUsernames", channel: { ...peer, _: "inputChannel" }, order });
    } else {
      unreachable();
    }
  }

  async hideUsernames(id: ID) {
    this.#c.storage.assertUser("hideUsernames");
    const peer = await this.#c.getInputPeer(id);
    if (is("inputPeerChannel", peer)) {
      return await this.#c.invoke({ _: "channels.deactivateAllUsernames", channel: { ...peer, _: "inputChannel" } });
    } else {
      unreachable();
    }
  }

  async getInactiveChats() {
    this.#c.storage.assertUser("getInactiveChats");
    const { chats, dates } = await this.#c.invoke({ _: "channels.getInactiveChannels" });
    return chats.map((v, i) => constructInactiveChat(v, dates[i]));
  }
}
