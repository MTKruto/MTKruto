import { Storage } from "./0_storage.ts";

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

  set(k: string, v: string | null) {
    if (!this.database) {
      throw new Error("Not initialized");
    }

    const store = this.database
      .transaction(KV_OBJECT_STORE, "readwrite")
      .objectStore(KV_OBJECT_STORE);
    // deno-lint-ignore no-explicit-any
    let tx: IDBRequest<any>;

    if (v == null) {
      tx = store.delete(k);
    } else {
      tx = store.put(v, k);
    }

    return new Promise<void>((res, rej) => {
      tx.onerror = rej;
      tx.onsuccess = () => {
        res();
      };
    });
  }

  get(k: string) {
    if (!this.database) {
      throw new Error("Not initialized");
    }

    const tx = this.database
      .transaction(KV_OBJECT_STORE, "readonly")
      .objectStore(KV_OBJECT_STORE)
      .get(k);
    return new Promise<string | null>((res, rej) => {
      tx.onerror = rej;
      tx.onsuccess = () => {
        res(tx.result == undefined ? null : tx.result);
      };
    });
  }
}
