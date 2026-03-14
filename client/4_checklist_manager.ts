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

import { InputError } from "../0_errors.ts";
import type { Api } from "../2_tl.ts";
import type { ID, InputChecklistItem } from "../3_types.ts";
import type { UpdateChecklistParams } from "./0_params.ts";
import type { C as C_ } from "./1_types.ts";
import type { MessageManager } from "./3_message_manager.ts";

type C = C_ & { messageManager: MessageManager };

export class ChecklistManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async addToChecklist(chatId: ID, messageId: number, items: InputChecklistItem[]) {
    this.#c.storage.assertUser("addToChecklist");
    const peer = await this.#c.getInputPeer(chatId);
    const msg_id = messageId;
    const list = items.map((v): Api.todoItem => {
      const text = v.text;
      const entities = v.entities;
      const parseResult = this.#c.messageManager.parseText(text, { parseMode: v.parseMode, entities });
      return { _: "todoItem", id: 0, title: { _: "textWithEntities", text: parseResult[0], entities: parseResult[1] ?? [] } };
    });
    await this.#c.invoke({ _: "messages.appendTodoList", peer, msg_id, list });
  }

  async #updateChecklistInner(chatId: ID, messageId: number, params: UpdateChecklistParams | undefined) {
    if (!params?.itemsToCheck?.length && !params?.itemsToUncheck?.length) {
      throw new InputError("Both itemsToCheck and itemsToUncheck msut not be empty.");
    }

    const peer = await this.#c.getInputPeer(chatId);
    const msg_id = messageId;
    const completed = params?.itemsToCheck ?? [];
    const incompleted = params?.itemsToUncheck ?? [];

    await this.#c.invoke({ _: "messages.toggleTodoCompleted", peer, msg_id, completed, incompleted });
  }

  async updateChecklist(chatId: ID, messageId: number, params?: UpdateChecklistParams) {
    this.#c.storage.assertUser("updateChecklist");
    await this.#updateChecklistInner(chatId, messageId, params);
  }

  async checkChecklistItems(chatId: ID, messageId: number, items: number[]) {
    this.#c.storage.assertUser("checkChecklistItems");
    await this.#updateChecklistInner(chatId, messageId, { itemsToCheck: items });
  }

  async uncheckChecklistItems(chatId: ID, messageId: number, items: number[]) {
    this.#c.storage.assertUser("uncheckChecklistItems");
    await this.#updateChecklistInner(chatId, messageId, { itemsToUncheck: items });
  }

  async checkChecklistItem(chatId: ID, messageId: number, item: number) {
    this.#c.storage.assertUser("checkChecklistItem");
    await this.#updateChecklistInner(chatId, messageId, { itemsToCheck: [item] });
  }

  async uncheckChecklistItem(chatId: ID, messageId: number, item: number) {
    this.#c.storage.assertUser("uncheckChecklistItem");
    await this.#updateChecklistInner(chatId, messageId, { itemsToUncheck: [item] });
  }
}
