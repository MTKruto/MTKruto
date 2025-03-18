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
import { InputError } from "../0_errors.ts";
import { base64DecodeUrlSafe, base64EncodeUrlSafe, cleanObject } from "../1_utilities.ts";
import { Api, is, peerToChatId, serialize, TLReader } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { constructUser, User } from "./1_user.ts";
import { Message, MessageGetter } from "./4_message.ts";

/** A received callback query. */
export interface CallbackQuery {
  /** The identifier of the callback query. */
  id: string;
  /** The user who made the callback query. */
  from: User;
  /** The message from which the callback query was made. Unset if made from an inline result message. */
  message?: Message;
  /** The identifier of the inline result message from which the callback query was made. Unset if made from a message not originating from an inline query result. */
  inlineMessageId?: string;
  /** A special identifier for the chat in which the callback was made from. Useful for inline result messages. */
  chatInstance: string;
  /** The data associated with the button that was used to make the callback query. */
  data?: string;
  /** The short name of the game to be returned. */
  gameShortName?: string;
}

const ERR_INVALID_INLINE_MESSAGE_ID = new InputError("Invalid inline message ID");
export function deserializeInlineMessageId(inlineMessageId: string): Api.InputBotInlineMessageID {
  try {
    const buffer = base64DecodeUrlSafe(inlineMessageId);
    const reader = new TLReader(buffer);
    const object = reader.readObject("InputBotInlineMessageID");
    if (is("inputBotInlineMessageID64", object) || is("inputBotInlineMessageID", object)) {
      return object;
    }
  } catch {
    throw ERR_INVALID_INLINE_MESSAGE_ID;
  }

  throw ERR_INVALID_INLINE_MESSAGE_ID;
}

export async function constructCallbackQuery(callbackQuery: Api.updateBotCallbackQuery | Api.updateInlineBotCallbackQuery, getEntity: EntityGetter, getMessage: MessageGetter): Promise<CallbackQuery> {
  const user_ = await getEntity({ _: "peerUser", user_id: callbackQuery.user_id });
  if (!user_) {
    unreachable();
  }
  const user = constructUser(user_);
  const id = String(callbackQuery.query_id);
  const gameShortName = callbackQuery.game_short_name;
  const data = callbackQuery.data !== undefined ? new TextDecoder().decode(callbackQuery.data) : undefined;
  const chatInstance = callbackQuery.chat_instance == 0n ? "" : String(callbackQuery.chat_instance);
  if (is("updateBotCallbackQuery", callbackQuery)) {
    const message = await getMessage(peerToChatId(callbackQuery.peer), Number(callbackQuery.msg_id));
    if (message == null) {
      unreachable();
    }
    return cleanObject({ id, from: user, message, chatInstance, data, gameShortName });
  } else {
    return cleanObject({ id, from: user, inlineMessageId: base64EncodeUrlSafe(serialize(callbackQuery.msg_id)), chatInstance, data, gameShortName });
  }
}
