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
import { enums, peerToChatId, types } from "../2_tl.ts";
import { constructChosenInlineResult, constructInlineQuery, constructInlineQueryAnswer, ID, InlineQueryResult, inlineQueryResultToTlObject, Update } from "../3_types.ts";
import { AnswerInlineQueryParams, SendInlineQueryParams } from "./0_params.ts";
import { C as C_ } from "./0_types.ts";
import { checkInlineQueryId } from "./0_utilities.ts";
import { MessageManager } from "./2_message_manager.ts";

type C = C_ & { messageManager: MessageManager };

type InlineQueryManagerUpdate = types.UpdateBotInlineQuery | types.UpdateBotInlineSend;

export class InlineQueryManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams) {
    await this.#c.storage.assertBot("answerInlineQuery");
    checkInlineQueryId(id);
    await this.#c.api.messages.setInlineBotResults({
      query_id: BigInt(id),
      results: await Promise.all(results.map((v) => inlineQueryResultToTlObject(v, this.#c.messageManager.parseText.bind(this.#c.messageManager), this.#c.messageManager.usernameResolver.bind(this.#c.messageManager)))),
      cache_time: params?.cacheTime ?? 300,
      private: params?.isPersonal ? true : undefined,
      switch_webview: params?.button && params.button.miniApp ? new types.InlineBotWebView({ text: params.button.text, url: params.button.miniApp.url }) : undefined,
      switch_pm: params?.button && params.button.startParameter ? new types.InlineBotSwitchPM({ text: params.button.text, start_param: params.button.startParameter }) : undefined,
      gallery: params?.isGallery ? true : undefined,
      next_offset: params?.nextOffset,
    });
  }

  static canHandleUpdate(update: enums.Update): update is InlineQueryManagerUpdate {
    return update instanceof types.UpdateBotInlineQuery || update instanceof types.UpdateBotInlineSend;
  }

  async handleUpdate(update: InlineQueryManagerUpdate): Promise<Update> {
    if (update instanceof types.UpdateBotInlineQuery) {
      return { inlineQuery: await constructInlineQuery(update, this.#c.getEntity) };
    } else if (update instanceof types.UpdateBotInlineSend) {
      return { chosenInlineResult: await constructChosenInlineResult(update, this.#c.getEntity) };
    } else {
      unreachable();
    }
  }

  async sendInlineQuery(userId: ID, chatId: ID, params?: SendInlineQueryParams) {
    await this.#c.storage.assertUser("sendInlineQuery");
    const bot = await this.#c.getInputUser(userId),
      peer = await this.#c.getInputPeer(chatId),
      query = params?.query ?? "",
      offset = params?.offset ?? "";
    const botId = peerToChatId(bot), peerId = peerToChatId(peer);
    const maybeResults = await this.#c.messageStorage.getInlineQueryAnswer(botId, peerId, query, offset);
    if (maybeResults != null && !InlineQueryManager.#isExpired(maybeResults[1], maybeResults[0].cache_time)) {
      return constructInlineQueryAnswer(maybeResults[0]);
    }
    const then = new Date();
    const results = await this.#c.api.messages.getInlineBotResults({ bot, peer, query, offset });
    if (results.cache_time > 0) {
      await this.#c.messageStorage.setInlineQueryAnswer(botId, peerId, query, offset, results, then);
    }
    return constructInlineQueryAnswer(results);
  }

  static #isExpired(date: Date, cacheTime: number) {
    return (Date.now() - date.getTime()) / 1000 > cacheTime;
  }
}
