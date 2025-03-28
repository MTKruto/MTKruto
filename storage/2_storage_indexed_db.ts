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

import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";
import { fixKey, getPrefixKeyRange, restoreKey } from "./1_utilities.ts";

const VERSION = 1;
const KV_OBJECT_STORE = "kv";

export interface StorageIndexedDBParams {
  /** Whether to store files. Defaults to true. */
  storeFiles?: boolean;
}

export class StorageIndexedDB implements Storage {
  database: IDBDatabase | null = null;
  readonly #name: string;
  #id: string | null = null;
  #supportsFiles: boolean;

  constructor(name: string, params?: StorageIndexedDBParams) {
    if (typeof indexedDB == "undefined") {
      throw new Error("Unavailable in current environment");
    }
    this.#name = name;
    this.#supportsFiles = params?.storeFiles ?? true;
  }

  get name(): string {
    return this.#name;
  }

  branch(id: string): StorageIndexedDB {
    const storage = new StorageIndexedDB(this.name, { storeFiles: this.#supportsFiles });
    storage.#id = id;
    return storage;
  }

  initialize(): Promise<void> {
    const db = indexedDB.open(this.name, VERSION);
    return new Promise<void>((res, rej) => {
      db.onblocked = rej;
      db.onerror = rej;
      db.onupgradeneeded = () => {
        db.result.createObjectStore(KV_OBJECT_STORE);
      };
      db.onsuccess = () => {
        this.database = db.result;
        res();
      };
    });
  }

  get supportsFiles(): boolean {
    return this.#supportsFiles;
  }

  get mustSerialize(): boolean {
    return true;
  }

  #fixKey(key: readonly StorageKeyPart[]) {
    if (this.#id !== null) {
      return ["__S" + this.#id, ...key];
    } else {
      return key;
    }
  }

  set(k: readonly StorageKeyPart[], v: unknown, tx_?: IDBTransaction): Promise<void> {
    k = this.#fixKey(k);
    if (!this.database) {
      throw new Error("Not initialized");
    }

    const store = (tx_ ?? this.database
      .transaction(KV_OBJECT_STORE, "readwrite"))
      .objectStore(KV_OBJECT_STORE);
    // deno-lint-ignore no-explicit-any
    let tx: IDBRequest<any>;

    if (v == null) {
      tx = store.delete(fixKey(k));
    } else {
      tx = store.put(v, fixKey(k));
    }

    return new Promise<void>((res, rej) => {
      tx.onerror = rej;
      tx.onsuccess = () => {
        res();
      };
    });
  }

  get<T>(k: readonly StorageKeyPart[], tx_?: IDBTransaction | null, fix = true): Promise<T | null> {
    if (fix) {
      k = this.#fixKey(k);
    }
    if (!this.database) {
      throw new Error("Not initialized");
    }

    const tx = (tx_ ?? this.database
      .transaction(KV_OBJECT_STORE, "readonly"))
      .objectStore(KV_OBJECT_STORE)
      .get(fixKey(k));
    return new Promise<T | null>((res, rej) => {
      tx.onerror = rej;
      tx.onsuccess = () => {
        res(tx.result == undefined ? null : tx.result);
      };
    });
  }

  async *getMany<T>(filter: GetManyFilter, params?: { limit?: number; reverse?: boolean }, tx_?: IDBTransaction): AsyncGenerator<[readonly StorageKeyPart[], T]> {
    if ("prefix" in filter && this.#id !== null) {
      filter.prefix = this.#fixKey(filter.prefix);
    }
    if ("start" in filter && this.#id !== null) {
      filter.start = this.#fixKey(filter.start);
    }
    if ("end" in filter && this.#id !== null) {
      filter.end = this.#fixKey(filter.end);
    }
    if (!this.database) {
      throw new Error("Not initialized");
    }
    if (params?.limit !== undefined && params.limit <= 0) {
      params.limit = 1;
    }
    let keyRange: IDBKeyRange;
    if ("prefix" in filter) {
      keyRange = getPrefixKeyRange(fixKey(filter.prefix));
    } else {
      keyRange = IDBKeyRange.bound(fixKey(filter.start), fixKey(filter.end), true, true);
    }
    const keys = await new Promise<(readonly StorageKeyPart[])[]>((res, rej) => {
      const items = new Array<readonly StorageKeyPart[]>();
      const tx = (tx_ ?? this.database!.transaction(KV_OBJECT_STORE, "readonly"))
        .objectStore(KV_OBJECT_STORE)
        .openKeyCursor(keyRange, params?.reverse ? "prev" : undefined);
      tx.onerror = rej;
      tx.onsuccess = () => {
        const cursor = tx.result;
        if (!cursor) {
          res(items);
          return;
        }
        items.push(restoreKey(cursor.key as readonly StorageKeyPart[]));
        if (params?.limit !== undefined && items.length >= params.limit) {
          res(items);
        } else {
          cursor.continue();
        }
      };
    });
    for (const key of keys) {
      yield [key, await this.get(key, null, false)] as [readonly StorageKeyPart[], T];
    }
  }

  async incr(key: readonly StorageKeyPart[], by: number) {
    if (!this.database) {
      throw new Error("Not initialized");
    }
    const tx = this.database
      .transaction(KV_OBJECT_STORE, "readwrite");
    const currentValue = await this.get<number>(key, tx);
    await this.set(key, (currentValue || 0) + by, tx);
  }
}
