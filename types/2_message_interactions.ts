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

import type { MessageReaction } from "./1_message_reaction.ts";

/** The interactions made with a message. */
export interface MessageInteractions {
  /** The identifier of the message's chat. */
  chatId: number;
  /** The message's identifier. */
  messageId: number;
  /** The reactions made to the message. */
  reactions: MessageReaction[];
  /** The number of times the message was viewed. */
  views: number;
  /** The number of times the message was forwarded. */
  forwards: number;
}
