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
import { Api } from "../2_tl.ts";
import { constructUser, type ID } from "../3_types.ts";
import type { AddContactParams } from "./0_params.ts";
import type { C as C_ } from "./1_types.ts";
import type { MessageManager } from "./3_message_manager.ts";

type C = C_ & { messageManager: MessageManager };

export class ContactManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async addContact(userId: ID, firstName: string, params?: AddContactParams) {
    this.#c.storage.assertUser("addContact");

    const noteParsed = params?.note ? this.#c.messageManager.parseText(params?.note, { parseMode: params?.noteParseMode, entities: params?.noteEntities }) : undefined;

    await this.#c.invoke({ _: "contacts.addContact", add_phone_privacy_exception: params?.isPhoneNumberShared ? true : undefined, id: await this.#c.getInputUser(userId), first_name: firstName, last_name: params?.lastName ?? "", phone: params?.phoneNumber ?? "", note: noteParsed ? { _: "textWithEntities", text: noteParsed[0], entities: noteParsed[1] ?? [] } : undefined });
  }

  async #deleteContacts(userIds: ID[]) {
    const id = await Promise.all(userIds.map((v) => this.#c.getInputUser(v)));
    await this.#c.invoke({ _: "contacts.deleteContacts", id });
  }

  async deleteContacts(userIds: ID[]) {
    this.#c.storage.assertUser("deleteContacts");
    await this.#deleteContacts(userIds);
  }

  async deleteContact(userId: ID) {
    this.#c.storage.assertUser("deleteContact");
    await this.#deleteContacts([userId]);
  }

  async getContacts() {
    this.#c.storage.assertUser("getContacts");
    const result = await this.#c.invoke({ _: "contacts.getContacts", hash: 0n });
    if (!Api.is("contacts.contacts", result)) {
      unreachable();
    }
    return result.users.map((v) => Api.is("user", v) ? constructUser(v) : null).filter((v) => v !== null);
  }
}
