import { MaybePromise } from "../1_utilities.ts";
import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";
import { fromString, isInRange, toString } from "./0_utilities.ts";

export class StorageMemory extends Storage implements Storage {
  protected map = new Map<string, unknown>();

  init() {
  }

  get<T>(key: readonly StorageKeyPart[]) {
    return this.map.get(toString(key)) as T ?? null;
  }

  #getEntries() {
    const entries = new Array<[string, unknown]>();
    for (const entry of this.map.entries()) {
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
    for (const [key, value] of entries) {
      const parts = fromString(key);
      if (Array.isArray(parts)) {
        if ("prefix" in filter) {
          for (const [i, p] of filter.prefix.entries()) {
            if (toString(p) != toString(parts[i])) {
              continue;
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
