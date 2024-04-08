/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

import { assert } from "../0_deps.ts";
import { match } from "./0_filters.ts";

Deno.test("match", () => {
  assert(match("message", { message: {} }));
  assert(match("connectionState", { connectionState: {} }));
  assert(!match("message", { editedMessage: {} }));
  assert(match(":text", { editedMessage: { text: {} } }));
  assert(match(":text", { message: { text: {} } }));
  assert(match("message:text", { message: { text: {} } }));
  assert(!match("editedMessage:text", { message: { text: {} } }));
  assert(!match("callbackQuery:inlineMessageId", { callbackQuery: { message: {} } }));
  assert(!match("callbackQuery:message", { callbackQuery: { inlineMessageId: {} } }));
  assert(match("callbackQuery:inlineMessageId", { callbackQuery: { inlineMessageId: {} } }));
  assert(match("callbackQuery:message", { callbackQuery: { message: {} } }));
  assert(!match("chosenInlineResult:inlineMessageId", { chosenInlineResult: {} }));
  assert(match("chosenInlineResult:inlineMessageId", { chosenInlineResult: { inlineMessageId: {} } }));
});
