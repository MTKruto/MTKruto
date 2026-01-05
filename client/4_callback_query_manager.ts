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

import { SECOND } from "../0_deps.ts";
import { encodeText } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type CallbackQueryQuestion, constructCallbackQuery, constructCallbackQueryAnswer, type ID, type Update, validateCallbackQueryQuestion } from "../3_types.ts";
import type { AnswerCallbackQueryParams } from "./0_params.ts";
import { checkPassword } from "./0_password.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import { checkCallbackQueryId, checkMessageId } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { MessageManager } from "./3_message_manager.ts";

type C = C_ & { messageManager: MessageManager };

const callbackQueryManagerUpdates = [
  "updateBotCallbackQuery",
  "updateInlineBotCallbackQuery",
] as const;

type CallbackQueryManagerUpdate = Api.Types[(typeof callbackQueryManagerUpdates)[number]];

export class CallbackQueryManager implements UpdateProcessor<CallbackQueryManagerUpdate, true> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams) {
    this.#c.storage.assertBot("answerCallbackQuery");
    checkCallbackQueryId(id);
    await this.#c.invoke({ _: "messages.setBotCallbackAnswer", query_id: BigInt(id), cache_time: params?.cacheTime ?? 0, message: params?.text, alert: params?.alert ? true : undefined });
  }

  async sendCallbackQuery(botId: ID, messageId: number, question: CallbackQueryQuestion) {
    this.#c.storage.assertUser("sendCallbackQuery");
    checkMessageId(messageId);
    validateCallbackQueryQuestion(question);
    const peer = await this.#c.getInputPeer(botId), peerId = await this.#c.getInputPeerChatId(peer), questionKey = JSON.stringify(question);
    const maybeAnswer = await this.#c.messageStorage.getCallbackQueryAnswer(peerId, messageId, questionKey);
    if (maybeAnswer !== null && !CallbackQueryManager.#isExpired(maybeAnswer[1], maybeAnswer[0].cache_time)) {
      return constructCallbackQueryAnswer(maybeAnswer[0]);
    }
    const answer = await this.#c.invoke({ _: "messages.getBotCallbackAnswer", peer, msg_id: messageId, data: "data" in question ? encodeText(question.data) : undefined, game: question.type === "game" ? true : undefined, password: question.type === "password" ? await this.#getPasswordCheck(question.password) : undefined });
    if (answer.cache_time >= 0) {
      await this.#c.messageStorage.setCallbackQueryAnswer(peerId, messageId, questionKey, answer);
    }
    return constructCallbackQueryAnswer(answer);
  }

  static #isExpired(date: Date, cacheTime: number) {
    return (Date.now() - date.getTime()) / SECOND > cacheTime;
  }

  async #getPasswordCheck(password: string) {
    const ap = await this.#c.invoke({ _: "account.getPassword" });
    return await checkPassword(password, ap);
  }

  canHandleUpdate(update: Api.Update): update is CallbackQueryManagerUpdate {
    return Api.isOneOf(callbackQueryManagerUpdates, update);
  }

  async handleUpdate(update: CallbackQueryManagerUpdate): Promise<Update> {
    return { callbackQuery: await constructCallbackQuery(update, this.#c.getPeer, this.#c.messageManager.getMessageWithReply.bind(this.#c.messageManager)) };
  }
}
