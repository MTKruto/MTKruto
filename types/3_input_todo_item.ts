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

import type { ParseMode } from "./0_parse_mode.ts";
import type { MessageEntity } from "./2_message_entity.ts";

/** A to-do item that is to be provided as an input. */
export interface InputTodoItem {
  /** The item's text. */
  text: string;
  /** The entities of the text. */
  entities?: MessageEntity[];
  /** The parse mode to use for the text. If omitted, the default parse mode will be used. */
  parseMode?: ParseMode;
}
