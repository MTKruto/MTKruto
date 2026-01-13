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

import type { Message } from "../3_types.ts";
import { Composer } from "./4_composer.ts";

Deno.test("types", () => {
  const composer = new Composer();

  composer.on("message", (ctx) => {
    let msg: Message = ctx.msg;
    let message: Message = ctx.update.message;
  });

  composer.on("editedMessage", (ctx) => {
    let msg: Message = ctx.msg;
    let editedMessage: Message = ctx.update.editedMessage;
  }).use((ctx) => {
    let msg: Message = ctx.msg;
    let editedMessage: Message = ctx.update.editedMessage;
  });

  composer.on(":animation", (ctx) => {
    let msg: Message = ctx.msg.animation;
    let editedMessage: Message | undefined = ctx.update.message;
  });
});
