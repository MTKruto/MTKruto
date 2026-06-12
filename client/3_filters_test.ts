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

import { assert } from "../0_deps.ts";
import { match } from "./3_filters.ts";

Deno.test("match", () => {
  assert(match("message", { type: "message", message: {} }));
  assert(match("connectionState", { type: "connectionState", connectionState: {} }));
  assert(!match("message", { type: "editedMessage", editedMessage: {} }));
  assert(match(":text", { type: "editedMessage", editedMessage: { type: "text", text: {} } }));
  assert(match(":text", { type: "message", message: { type: "text", text: {} } }));
  assert(match("message:text", { type: "message", message: { type: "text", text: {} } }));
  assert(!match("editedMessage:text", { type: "message", message: { type: "text", text: {} } }));
  assert(!match("callbackQuery:inlineMessageId", { type: "callbackQuery", callbackQuery: { message: {} } }));
  assert(!match("callbackQuery:message", { type: "callbackQuery", callbackQuery: { inlineMessageId: {} } }));
  assert(match("callbackQuery:inlineMessageId", { type: "callbackQuery", callbackQuery: { inlineMessageId: {} } }));
  assert(match("callbackQuery:message", { type: "callbackQuery", callbackQuery: { message: {} } }));
  assert(!match("chosenInlineResult:inlineMessageId", { type: "chosenInlineResult", chosenInlineResult: {} }));
  assert(match("chosenInlineResult:inlineMessageId", { type: "chosenInlineResult", chosenInlineResult: { inlineMessageId: {} } }));
  assert(match("update", { type: "update", update: { _: "updateNewMessage" } }));
  assert(match("updateNewMessage", { type: "update", update: { _: "updateNewMessage" } }));
  assert(!match("updateNewChannelMessage", { type: "update", update: { _: "updateNewMessage" } }));
});
