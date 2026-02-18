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

import type { ID } from "./0_id.ts";
import type { ReplyQuote } from "./3_reply_quote.ts";

/**
 * Information on a message that another message is replying to.
 * @unlisted */
export interface ReplyToMessage {
  /**
   * The identifier of the message that is being replied to.
   * @discriminator
   */
  messageId: number;
  /**
   * A quoted part of the message that is being replied to.
   */
  quote?: ReplyQuote;
}

/**
 * Information on a story that a message is replying to.
 * @unlisted
 */
export interface ReplyToStory {
  /** The identifier of the chat that posted the story. */
  chatId: ID;
  /**
   * The identifier of the story that is being replied to.
   * @discriminator
   */
  storyId: number;
}

/** Information on what a message is replying to. */
export type ReplyTo = ReplyToMessage | ReplyToStory;
