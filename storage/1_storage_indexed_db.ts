import { Storage, StorageKeyPart } from "./0_storage.ts";
import { fixKey, getPrefixKeyRange, restoreKey } from "./0_utilities.ts";

const VERSION = 1;
const KV_OBJECT_STORE = "kv";

export class StorageIndexedDB extends Storage {
  database: IDBDatabase | null = null;

  constructor(public readonly name: string) {
    if (typeof indexedDB == "undefined") {
      throw new Error("Unavailable in current environment");
    }
    super();
  }

  init() {
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

  set(k: readonly StorageKeyPart[], v: unknown, tx_?: IDBTransaction) {
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

  get<T>(k: readonly StorageKeyPart[], tx_?: IDBTransaction) {
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

  async *getMany<T>(prefix: readonly StorageKeyPart[], params?: { limit?: number; reverse?: boolean }, tx_?: IDBTransaction) {
    if (!this.database) {
      throw new Error("Not initialized");
    }
    if (params?.limit !== undefined && params.limit <= 0) {
      params.limit = 1;
    }
    const keys = await new Promise<(readonly StorageKeyPart[])[]>((res, rej) => {
      const items = new Array<readonly StorageKeyPart[]>();
      const tx = (tx_ ?? this.database!.transaction(KV_OBJECT_STORE, "readonly"))
        .objectStore(KV_OBJECT_STORE)
        .openKeyCursor(getPrefixKeyRange(fixKey(prefix)), params?.reverse ? "prev" : undefined);
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
      yield [key, await this.get(key)] as [readonly StorageKeyPart[], T];
    }
  }

  async incr(key: readonly StorageKeyPart[], by: number) { // TODO: fix race
    if (!this.database) {
      throw new Error("Not initialized");
    }
    const tx = this.database
      .transaction(KV_OBJECT_STORE, "readwrite");
    const currentValue = await this.get<number>(key, tx);
    await this.set(key, (currentValue || 0) + by, tx);
  }
}
