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

import { assertEquals } from "../0_deps.ts";
import { bufferFromBigInt } from "../1_utilities.ts";
import { concat } from "./0_buffer.ts";

Deno.test("concat", () => {
  const iterations = 1_000;

  for (let i = 0; i < iterations; i++) {
    const x = crypto.getRandomValues(new Uint8Array(32));
    const y = crypto.getRandomValues(new Uint8Array(32));
    const z = crypto.getRandomValues(new Uint8Array(32));

    assertEquals(concat(x, y, z), new Uint8Array([...x, ...y, ...z]));
  }
});

Deno.test("bufferFromBigInt", () => {
  assertEquals(bufferFromBigInt(-6203395183255650816n, 64 / 8, true, true), new Uint8Array([0, 126, 173, 164, 242, 28, 233, 169]));
});
