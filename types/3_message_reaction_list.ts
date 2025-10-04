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

import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import { constructMessageReactionListItem, type MessageReactionListItem } from "./2_message_reaction_list_item.ts";

/** A list of reactions made to a message along with the users or chats that made them. */
export interface MessageReactionList {
  reactions: MessageReactionListItem[];
  nextOffset?: string;
  count: number;
}

export function constructMessageReactionList(messageReactionsList: Api.messages_MessageReactionsList): MessageReactionList {
  const reactions = messageReactionsList.reactions.map((v) => constructMessageReactionListItem(v, messageReactionsList));
  const count = messageReactionsList.count;
  const nextOffset = messageReactionsList.next_offset;
  return cleanObject({
    reactions,
    count,
    nextOffset,
  });
}
