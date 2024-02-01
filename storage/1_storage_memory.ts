import { MaybePromise } from "../1_utilities.ts";
import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";
import { fromString, isInRange, toString } from "./0_utilities.ts";

const MAX_ITEMS = 50_000;

export class StorageMemory extends Storage implements Storage {
  protected map = new Map<string, unknown>();
  #id: string | null = null;

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

  get supportsFiles() {
    return false;
  }

  get<T>(key: readonly StorageKeyPart[]) {
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

  *getMany<T>(filter: GetManyFilter, params?: { limit?: number; reverse?: boolean }) {
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

  async clearIfNeeded() {
    if (this.map.size >= MAX_ITEMS) {
      await this.clear();
    }
  }
}
