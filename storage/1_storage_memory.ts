import { CacheMap, MaybePromise } from "../1_utilities.ts";
import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";
import { fromString, isInRange, toString } from "./0_utilities.ts";

export class StorageMemory extends Storage implements Storage {
  protected map: Map<string, unknown> = new Map<string, unknown>();
  protected messageMap: CacheMap<string, unknown> = new CacheMap<string, unknown>(30_000);
  #id: string | null = null;
  #authString?: string;

  constructor(authString?: string) {
    super();
    this.#authString = authString;
  }

  get isMemoryStorage(): boolean {
    return true;
  }

  async initialize() {
    if (this.#authString) {
      await this.importAuthString(this.#authString);
    }
  }

  getMap(key: readonly StorageKeyPart[]): Map<string, unknown> {
    if (key[0] == "messages.messages") {
      return this.messageMap;
    } else {
      return this.map;
    }
  }

  getMaps(): [Map<string, unknown>, Map<string, unknown>] {
    return [this.map, this.messageMap];
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

  get<T>(key: readonly StorageKeyPart[]): T | null {
    key = this.#fixKey(key);
    return this.getMap(key).get(toString(key)) as T ?? null;
  }

  #getEntries() {
    const entries = new Array<[string, unknown]>();
    for (const map of this.getMaps()) {
      for (const entry of map.entries()) {
        if (this.#id !== null && !entry[0].startsWith("__S" + this.#id)) {
          continue;
        }
        entries.push(entry);
      }
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
      this.getMap(key_).set(key, value);
    } else {
      this.getMap(key_).delete(key);
    }
  }

  incr(key: readonly StorageKeyPart[], by: number) {
    this.set(key, (this.get<number>(key) || 0) + by);
  }
}
