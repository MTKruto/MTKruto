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

import { assertEquals, assertThrows } from "../0_deps.ts";
import { CacheMap } from "./0_cache_map.ts";

Deno.test("throws when invalid limit is provided", () => {
  assertThrows(() => {
    // deno-lint-ignore ban-ts-comment
    // @ts-expect-error
    new CacheMap();
  });
  assertThrows(() => {
    new CacheMap(-1);
  });
  assertThrows(() => {
    new CacheMap(0);
  });
});

Deno.test("size does not exceed limit", () => {
  const limit = 100;
  const cacheMap = new CacheMap<number, 0>(limit);
  assertEquals(cacheMap.size, 0);
  for (let i = 0; i < 1000; i++) {
    cacheMap.set(i, 0);
    if (i < 99) {
      assertEquals(cacheMap.size, i + 1);
    } else {
      assertEquals(cacheMap.size, limit);
    }
  }
});
