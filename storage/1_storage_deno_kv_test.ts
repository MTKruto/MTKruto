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

import { assertEquals } from "../0_deps.ts";
import type { StorageKeyPart } from "./0_storage.ts";
import { StorageDenoKV } from "./1_storage_deno_kv.ts";

async function collect<T>(entries: AsyncIterable<[readonly StorageKeyPart[], T]>) {
  const result = new Array<[readonly StorageKeyPart[], T]>();
  for await (const entry of entries) {
    result.push(entry);
  }
  return result;
}

Deno.test({
  name: "StorageDenoKV.getMany includes the range end",
  ignore: typeof Deno.openKv !== "function",
  async fn() {
    const storage = new StorageDenoKV(":memory:");
    await storage.initialize();
    try {
      await storage.set(["items", 1], 1);
      await storage.set(["items", 2], 2);
      await storage.set(["items", 2, "child"], 3);
      await storage.set(["items", 3], 4);

      const filter = { start: ["items", 1], end: ["items", 2] } as const;
      assertEquals(await collect(storage.getMany(filter)), [
        [["items", 1], 1],
        [["items", 2], 2],
      ]);
      assertEquals(await collect(storage.getMany(filter, { reverse: true, limit: 1 })), [
        [["items", 2], 2],
      ]);
    } finally {
      storage.close();
    }
  },
});
