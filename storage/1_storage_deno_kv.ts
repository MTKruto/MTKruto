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

import type { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";

function assertInitialized(kv: Deno.Kv | null | undefined) {
  if (!kv) {
    throw new Error("Not initialized");
  }
  return kv;
}

export class StorageDenoKV implements Storage {
  kv: Deno.Kv | null = null;
  #id: string | null = null;
  #path?: string;

  constructor(path?: string) {
    this.#path = path;
  }

  get path(): string | undefined {
    return this.#path;
  }

  get id(): string | null {
    return this.#id;
  }

  get supportsFiles(): boolean {
    return false;
  }

  get mustSerialize(): boolean {
    return true;
  }

  branch(id: string): Storage {
    const storage = new StorageDenoKV(this.path);
    storage.#id = id;
    return storage;
  }

  #fixKey(key: readonly StorageKeyPart[]) {
    if (this.#id !== null) {
      return ["__S" + this.#id, ...key];
    } else {
      return key;
    }
  }

  async initialize() {
    this.kv = await Deno.openKv(this.path);
  }

  async get<T>(key: readonly StorageKeyPart[]): Promise<T | null> {
    key = this.#fixKey(key);
    const kv = assertInitialized(this.kv);

    const maybeValue = await kv.get(key);
    if (maybeValue.versionstamp === null) {
      return null;
    } else {
      return maybeValue.value as T;
    }
  }

  async *getMany<T>(filter: GetManyFilter, params?: { limit?: number; reverse?: boolean }): AsyncGenerator<[readonly StorageKeyPart[], T], void, unknown> {
    if ("prefix" in filter && this.#id !== null) {
      filter.prefix = this.#fixKey(filter.prefix);
    }
    if ("start" in filter && this.#id !== null) {
      filter.start = this.#fixKey(filter.start);
    }
    if ("end" in filter && this.#id !== null) {
      filter.end = this.#fixKey(filter.end);
    }
    const kv = assertInitialized(this.kv);

    for await (const i of kv.list(filter, { limit: params?.limit, reverse: params?.reverse })) {
      if (i.key == null) { // cust in jase
        continue;
      }
      yield [i.key, i.value] as [readonly StorageKeyPart[], T];
    }
  }

  async set(key: readonly StorageKeyPart[], value: unknown) {
    key = this.#fixKey(key);
    const kv = assertInitialized(this.kv);

    if (value == null) {
      await kv.delete(key);
    } else {
      await kv.set(key, value);
    }
  }

  async incr(key: readonly StorageKeyPart[], by: number) {
    key = this.#fixKey(key);
    const kv = assertInitialized(this.kv);

    let result: Awaited<ReturnType<Deno.AtomicOperation["commit"]>> | null = null;
    while (!result?.ok) {
      const count = await kv.get<number>(key);
      result = await kv.atomic().check(count).set(key, (count.value || 0) + by).commit();
    }
  }
}
