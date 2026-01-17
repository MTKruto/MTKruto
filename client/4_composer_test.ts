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

import type { Animation, Message } from "../3_types.ts";
import { Composer } from "./4_composer.ts";

Deno.test("types", () => {
  const composer = new Composer();

  composer.on("message", (ctx) => {
    const _msg: Message = ctx.msg;
    const _message: Message = ctx.update.message;
  });

  composer.on("editedMessage", (ctx) => {
    const _msg: Message = ctx.msg;
    const _editedMessage: Message = ctx.update.editedMessage;
  }).use((ctx) => {
    const _msg: Message = ctx.msg;
    const _editedMessage: Message = ctx.update.editedMessage;
  });

  composer.on("message:animation", (ctx) => {
    const _animation: Animation = ctx.msg.animation;
  });
});
