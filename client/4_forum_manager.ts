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

import { InputError } from "../0_errors.ts";
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

  static #assertNongenralTopicIdValid(topicId: number) {
    if (!topicId || topicId < 2) {
      throw new InputError("Invalid topic ID.");
    }
  }

  static #assertAnyTopicIdValid(topicId: number) {
    if (!topicId || topicId < 1) {
      throw new InputError("Invalid topic ID.");
    }
  }

  async editTopic(chatId: ID, topicId: number, title: string, params?: EditTopicParams) {
    ForumManager.#assertNongenralTopicIdValid(topicId);
    title = ForumManager.#validateTopicTitle(title);
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

  async #toggleGeneralTopicHidden(chatId: ID, hidden: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({
      _: "channels.editForumTopic",
      channel,
      topic_id: 1,
      hidden,
    });
  }

  async hideGeneralTopic(chatId: ID) {
    await this.#toggleGeneralTopicHidden(chatId, true);
  }

  async showGeneralTopic(chatId: ID) {
    await this.#toggleGeneralTopicHidden(chatId, false);
  }

  async #toggleNongeneralTopicClosed(chatId: ID, topicId: number, closed: boolean) {
    ForumManager.#assertNongenralTopicIdValid(topicId);
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({
      _: "channels.editForumTopic",
      channel,
      topic_id: 1,
      closed,
    });
  }

  async closeTopic(chatId: ID, topicId: number) {
    await this.#toggleNongeneralTopicClosed(chatId, topicId, true);
  }

  async reopenTopic(chatId: ID, topicId: number) {
    await this.#toggleNongeneralTopicClosed(chatId, topicId, false);
  }

  async #setTopicPinned(chatId: ID, topicId: number, pinned: boolean) {
    ForumManager.#assertAnyTopicIdValid(topicId);
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({
      _: "channels.updatePinnedForumTopic",
      channel,
      topic_id: 1,
      pinned,
    });
  }

  async pinTopic(chatId: ID, topicId: number) {
    await this.#setTopicPinned(chatId, topicId, true);
  }

  async unpinTopic(chatId: ID, topicId: number) {
    await this.#setTopicPinned(chatId, topicId, false);
  }
}
