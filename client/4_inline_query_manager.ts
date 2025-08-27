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

import { unreachable } from "../0_deps.ts";
import { Api } from "../2_tl.ts";
import { constructChosenInlineResult, constructInlineQuery, constructInlineQueryAnswer, type ID, type InlineQueryResult, inlineQueryResultToTlObject, type Update } from "../3_types.ts";
import type { AnswerInlineQueryParams, SendInlineQueryParams } from "./0_params.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import { checkInlineQueryId } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { MessageManager } from "./3_message_manager.ts";

type C = C_ & { messageManager: MessageManager };

const inlineQueryManagerUpdates = [
  "updateBotInlineQuery",
  "updateBotInlineSend",
] as const;

type InlineQueryManagerUpdate = Api.Types[(typeof inlineQueryManagerUpdates)[number]];

export class InlineQueryManager implements UpdateProcessor<InlineQueryManagerUpdate> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams) {
    this.#c.storage.assertBot("answerInlineQuery");
    checkInlineQueryId(id);
    await this.#c.invoke({ _: "messages.setInlineBotResults", query_id: BigInt(id), results: await Promise.all(results.map((v) => inlineQueryResultToTlObject(v, this.#c.messageManager.parseText.bind(this.#c.messageManager), this.#c.messageManager.usernameResolver.bind(this.#c.messageManager)))), cache_time: params?.cacheTime ?? 300, private: params?.isPersonal ? true : undefined, switch_webview: params?.button && params.button.miniApp ? ({ _: "inlineBotWebView", text: params.button.text, url: params.button.miniApp.url }) : undefined, switch_pm: params?.button && params.button.startParameter ? ({ _: "inlineBotSwitchPM", text: params.button.text, start_param: params.button.startParameter }) : undefined, gallery: params?.isGallery ? true : undefined, next_offset: params?.nextOffset });
  }

  canHandleUpdate(update: Api.Update): update is InlineQueryManagerUpdate {
    return Api.isOneOf(inlineQueryManagerUpdates, update);
  }

  handleUpdate(update: InlineQueryManagerUpdate): Update {
    if (Api.is("updateBotInlineQuery", update)) {
      return { inlineQuery: constructInlineQuery(update, this.#c.getPeer) };
    } else if (Api.is("updateBotInlineSend", update)) {
      return { chosenInlineResult: constructChosenInlineResult(update, this.#c.getPeer) };
    } else {
      unreachable();
    }
  }

  async sendInlineQuery(botId_: ID, chatId: ID, params?: SendInlineQueryParams) {
    this.#c.storage.assertUser("sendInlineQuery");
    const bot = await this.#c.getInputUser(botId_),
      peer = await this.#c.getInputPeer(chatId),
      query = params?.query ?? "",
      offset = params?.offset ?? "";
    const botId = await this.#c.getInputPeerChatId(bot), peerId = await this.#c.getInputPeerChatId(peer);
    const maybeResults = await this.#c.messageStorage.getInlineQueryAnswer(botId, peerId, query, offset);
    if (maybeResults != null && !InlineQueryManager.#isExpired(maybeResults[1], maybeResults[0].cache_time)) {
      return constructInlineQueryAnswer(maybeResults[0]);
    }
    const then = new Date();
    const results = await this.#c.invoke({ _: "messages.getInlineBotResults", bot, peer, query, offset });
    if (results.cache_time > 0) {
      await this.#c.messageStorage.setInlineQueryAnswer(botId, peerId, query, offset, results, then);
    }
    return constructInlineQueryAnswer(results);
  }

  static #isExpired(date: Date, cacheTime: number) {
    return (Date.now() - date.getTime()) / 1000 > cacheTime;
  }
}
