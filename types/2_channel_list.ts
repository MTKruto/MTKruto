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
import { type ChatPChannel, constructChatP } from "./1_chat_p.ts";

/** A list of channels. */
export interface ChannelList {
  /** The channels. */
  channels: ChatPChannel[];
  /** The total number of channels in the list. */
  count: number;
}

export function constructChannelList(chats: Api.messages_Chats): ChannelList {
  const count = "count" in chats ? chats.count : chats.chats.length;
  const channels = new Array<ChatPChannel>();
  for (const chat of chats.chats) {
    const chatP = constructChatP(chat);
    if (chatP.type === "channel") {
      channels.push(chatP);
    }
  }

  return { channels, count };
}
