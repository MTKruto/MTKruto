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
import { toString } from "./1_utilities.ts";
import { StorageLocalStorage } from "./2_storage_local_storage.ts";

const isLocalStorageUsable = (() => {
  try {
    if (typeof localStorage === "undefined") {
      return false;
    }
    const prefix = `mtkruto:test:probe:${crypto.randomUUID()}:`;
    const storage = new StorageLocalStorage(prefix);
    storage.set(["probe"], 1);
    storage.set(["probe"], null);
    return true;
  } catch {
    return false;
  }
})();

Deno.test({
  name: "StorageLocalStorage.getMany ignores keys outside prefix",
  ignore: !isLocalStorageUsable,
  fn: () => {
    const id = crypto.randomUUID();
    const prefix = `mtkruto:test:${id}:`;
    const scope = `scope-${id}`;
    const ownedKey = [scope, "owned"] as const;
    const foreignKey = [scope, "foreign"] as const;
    const ownedStorageKey = prefix + toString(ownedKey);
    const foreignStorageKey = toString(foreignKey);

    try {
      const storage = new StorageLocalStorage(prefix);
      storage.set(ownedKey, 1);
      localStorage.setItem(foreignStorageKey, toString(2));

      const entries = Array.from(storage.getMany<number>({ prefix: [scope] }));
      assertEquals(entries, [[ownedKey, 1]]);
    } finally {
      try {
        localStorage.removeItem(ownedStorageKey);
        localStorage.removeItem(foreignStorageKey);
      } catch {
        // Ignore cleanup failures in environments with unusable localStorage backends.
      }
    }
  },
});
