import { Storage, StorageKeyPart } from "./0_storage.ts";
import { fixKey } from "./0_utilities.ts";

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

  set(k: StorageKeyPart[], v: unknown) {
    if (!this.database) {
      throw new Error("Not initialized");
    }

    const store = this.database
      .transaction(KV_OBJECT_STORE, "readwrite")
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

  get<T>(k: StorageKeyPart[]) {
    if (!this.database) {
      throw new Error("Not initialized");
    }

    const tx = this.database
      .transaction(KV_OBJECT_STORE, "readonly")
      .objectStore(KV_OBJECT_STORE)
      .get(fixKey(k));
    return new Promise<T | null>((res, rej) => {
      tx.onerror = rej;
      tx.onsuccess = () => {
        res(tx.result == undefined ? null : tx.result);
      };
    });
  }
}
