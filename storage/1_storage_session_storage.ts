import { MaybePromise } from "../1_utilities.ts";
import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";
import { fromString, isInRange, toString, WEB_STORAGE_PREFIX_EXP } from "./0_utilities.ts";

export class StorageSessionStorage extends Storage implements Storage {
  readonly #prefix: string;

  constructor(prefix: string) {
    if (typeof sessionStorage === "undefined") {
      throw new Error("Unavailable in current environment");
    }
    if (prefix.length <= 0) {
      throw new Error("Empty prefix");
    } else if (!WEB_STORAGE_PREFIX_EXP.test(prefix)) {
      throw new Error("Unallowed prefix");
    }
    super();
    this.#prefix = prefix;
  }

  get prefix() {
    return this.#prefix;
  }

  branch(id: string) {
    return new StorageSessionStorage(this.prefix + "S__" + id);
  }

  initialize() {
  }

  get supportsFiles() {
    return false;
  }

  get<T>(key_: readonly StorageKeyPart[]) {
    const key = this.prefix + toString(key_);
    const value = sessionStorage.getItem(key);
    if (value != null) {
      return fromString<T>(value);
    } else {
      return null;
    }
  }

  *getMany<T>(filter: GetManyFilter, params?: { limit?: number; reverse?: boolean }) {
    let entries = Object.entries(sessionStorage).sort(([a], [b]) => a.localeCompare(b));
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

  set(key_: readonly StorageKeyPart[], value: unknown): MaybePromise<void> {
    const key = this.prefix + toString(key_);
    if (value != null) {
      sessionStorage.setItem(key, toString(value));
    } else {
      sessionStorage.removeItem(key);
    }
  }

  incr(key: readonly StorageKeyPart[], by: number) {
    this.set(key, (this.get<number>(key) || 0) + by);
  }
}
