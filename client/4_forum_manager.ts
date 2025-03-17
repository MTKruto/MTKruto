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

import { getRandomId } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { assertMessageType, constructTopic, ID } from "../3_types.ts";
import { CreateTopicParams, EditTopicParams } from "./0_params.ts";
import { C as C_ } from "./1_types.ts";
import { MessageManager } from "./3_message_manager.ts";

interface C extends C_ {
  messageManager: MessageManager;
}

export class ForumManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  static #validateTopicTitle(title: string) {
    title = title.trim();
    if (!title) {
      throw new InputEvent("Invalid topic title.");
    }
    return title;
  }

  async createTopic(chatId: ID, title: string, params?: CreateTopicParams) {
    title = ForumManager.#validateTopicTitle(title);
    let send_as: Api.InputPeer | undefined;
    if (params?.sendAs) {
      this.#c.storage.assertUser("sendAs");
      send_as = await this.#c.getInputPeer(params.sendAs);
    }
    const channel = await this.#c.getInputChannel(chatId);
    const updates = await this.#c.invoke({
      _: "channels.createForumTopic",
      channel,
      title,
      icon_color: params?.color,
      icon_emoji_id: params?.customEmojiId ? BigInt(params.customEmojiId) : undefined,
      send_as,
      random_id: getRandomId(),
    });
    const message = (await this.#c.messageManager.updatesToMessages(chatId, updates))[0];
    return constructTopic(assertMessageType(message, "forumTopicCreated"));
  }

  async editTopic(chatId: ID, topicId: number, title: string, params?: EditTopicParams) {
    title = ForumManager.#validateTopicTitle(title);
    if (topicId < 2) {
      throw new Error("Invalid topic id.");
    }
    const channel = await this.#c.getInputChannel(chatId);
    const updates = await this.#c.invoke({
      _: "channels.editForumTopic",
      channel,
      topic_id: topicId,
      title,
      icon_emoji_id: params?.customEmojiId ? BigInt(params.customEmojiId) : undefined,
    });
    const message = (await this.#c.messageManager.updatesToMessages(chatId, updates))[0];
    return constructTopic(assertMessageType(message, "forumTopicEdited"));
  }

  async #toggleHideGeneralTopic(chatId: ID, hidden: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({
      _: "channels.editForumTopic",
      channel,
      topic_id: 1,
      hidden,
    });
  }

  async hideGeneralTopic(chatId: ID): Promise<void> {
    await this.#toggleHideGeneralTopic(chatId, true);
  }

  async showGeneralTopic(chatId: ID): Promise<void> {
    await this.#toggleHideGeneralTopic(chatId, false);
  }
}
