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

import type { Api } from "../2_tl.ts";
import { type ChatPPrivate, constructChatP } from "./1_chat_p.ts";

/** A list of bots. */
export interface BotList {
  /** The bots. */
  bots: ChatPPrivate[];
  /** The total number of bots in the list. */
  count: number;
}

export function constructBotList(chats: Api.users_Users): BotList {
  const count = "count" in chats ? chats.count : chats.users.length;
  const bots = new Array<ChatPPrivate>();
  for (const chat of chats.users) {
    const chatP = constructChatP(chat);
    if (chatP.type === "private") {
      bots.push(chatP);
    }
  }

  return { bots, count };
}
