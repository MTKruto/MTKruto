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

import type { ID } from "./0_id.ts";
import type { ReplyQuote } from "./1_reply_quote.ts";

/** @unlisted */
export interface ReplyToMessage {
  /** @discriminator */
  messageId: number;
  quote?: ReplyQuote;
}

/** @unlisted */
export interface ReplyToStory {
  chatId: ID;
  /** @discriminator */
  storyId: number;
}

export type ReplyTo = ReplyToMessage | ReplyToStory;
