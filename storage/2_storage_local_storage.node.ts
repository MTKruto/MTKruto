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

import { LocalStorage } from "node-localstorage";
import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";
import { fromString, isInRange, toString } from "./1_utilities.ts";

export class StorageLocalStorage implements Storage {
  #prefix: string;
  readonly #path: string;
  readonly #storage: LocalStorage;

  constructor(path: string) {
    this.#prefix = "main";
    this.#storage = new LocalStorage(this.#path = path);
  }

  get prefix(): string {
    return this.#prefix;
  }

  branch(id: string): Storage {
    const storage = new StorageLocalStorage(this.#path);
    storage.#prefix = this.prefix + "S__" + id;
    return storage;
  }

  initialize() {
  }

  get supportsFiles(): boolean {
    return false;
  }

  get mustSerialize(): boolean {
    return true;
  }

  get<T>(key_: readonly StorageKeyPart[]): T | null {
    const key = this.prefix + toString(key_);
    const value = this.#storage.getItem(key);
    if (value != null) {
      return fromString<T>(value);
    } else {
      return null;
    }
  }

  *getMany<T>(filter: GetManyFilter, params?: { limit?: number; reverse?: boolean }): Generator<[readonly StorageKeyPart[], T]> {
    let entries = Object.entries(this.#storage).sort(([a], [b]) => a.localeCompare(b));
    if (params?.reverse) {
      entries.reverse();
    }
    if (params?.limit !== undefined) {
      entries = entries.slice(0, params.limit <= 0 ? 1 : params.limit);
    }
    entries: for (let [key, value] of entries) {
      if (key.startsWith(this.prefix)) {
        key = key.slice(this.prefix.length);
      }
      const parts = fromString(key);
      if (Array.isArray(parts)) {
        if ("prefix" in filter) {
          for (const [i, p] of filter.prefix.entries()) {
            if (toString(p) != toString(parts[i])) {
              continue entries;
            }
          }
        } else {
          if (!isInRange(parts, filter.start, filter.end)) {
            continue;
          }
        }

        yield [parts, fromString(value)] as [readonly StorageKeyPart[], T];
      }
    }
  }

  set(key_: readonly StorageKeyPart[], value: unknown) {
    const key = this.prefix + toString(key_);
    if (value != null) {
      this.#storage.setItem(key, toString(value));
    } else {
      this.#storage.removeItem(key);
    }
  }

  incr(key: readonly StorageKeyPart[], by: number) {
    this.set(key, (this.get<number>(key) || 0) + by);
  }
}
