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

import { assertEquals, delay } from "../0_deps.ts";
import { AbortableLoop } from "./0_abortable_loop.ts";

const MS = 10;
const ITERATIONS = 10;
const MARGIN = 100;

Deno.test("AbortableLoop", async (t) => {
  await t.step("start", async () => {
    const array = new Array<number>();
    let c = 0;
    const loop = new AbortableLoop(async (loop, signal) => {
      await delay(MS, { signal });
      array.push(c);
      if (++c >= ITERATIONS) {
        loop.abort();
      }
    }, () => {});
    loop.start();
    loop.start();
    await delay(MS * ITERATIONS + MARGIN);
    assertEquals(array, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
