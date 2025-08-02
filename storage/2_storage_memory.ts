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

import { MaybePromise } from "../1_utilities.ts";
import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";
import { fromString, isInRange, toString } from "./1_utilities.ts";

export class StorageMemory implements Storage {
  protected map: Map<string, unknown> = new Map<string, unknown>();
  #id: string | null = null;

  constructor() {
  }

  get mustSerialize(): boolean {
    return false;
  }

  initialize() {
  }

  #fixKey(key: readonly StorageKeyPart[]) {
    if (this.#id !== null) {
      return ["__S" + this.#id, ...key];
    } else {
      return key;
    }
  }

  branch(id: string): Storage {
    const storage = new StorageMemory();
    storage.#id = id;
    return storage;
  }

  get supportsFiles(): boolean {
    return false;
  }

  get isMemory(): boolean {
    return true;
  }

  get<T>(key: readonly StorageKeyPart[]): T | null {
    key = this.#fixKey(key);
    return this.map.get(toString(key)) as T ?? null;
  }

  #getEntries() {
    const entries = new Array<[string, unknown]>();
    for (const entry of this.map.entries()) {
      if (this.#id !== null && !entry[0].startsWith("__S" + this.#id)) {
        continue;
      }
      entries.push(entry);
    }
    return entries;
  }

  *getMany<T>(filter: GetManyFilter, params?: { limit?: number; reverse?: boolean }): Generator<[readonly StorageKeyPart[], T]> {
    let entries = this.#getEntries();
    if (params?.reverse) {
      entries.reverse();
    }
    if (params?.limit !== undefined) {
      entries = entries.slice(0, params.limit <= 0 ? 1 : params.limit);
    }
    entries: for (const [key, value] of entries) {
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

        yield [parts, value] as [readonly StorageKeyPart[], T];
      }
    }
  }

  set(key_: readonly StorageKeyPart[], value: unknown): MaybePromise<void> {
    key_ = this.#fixKey(key_);

    const key = toString(key_);
    if (value != null) {
      this.map.set(key, value);
    } else {
      this.map.delete(key);
    }
  }

  incr(key: readonly StorageKeyPart[], by: number) {
    this.set(key, (this.get<number>(key) || 0) + by);
  }
}
