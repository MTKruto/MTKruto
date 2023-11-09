import { MaybePromise } from "../1_utilities.ts";
import { Storage, StorageKeyPart } from "./0_storage.ts";
import { fromString, toString } from "./0_utilities.ts";

export class StorageSessionStorage extends Storage implements Storage {
  constructor(private readonly prefix: string) {
    if (typeof sessionStorage === "undefined") {
      throw new Error("Unavailable in current environment");
    }
    if (prefix.length <= 0) {
      throw new Error("Empty prefix");
    } else if (!/^[0-9a-zA-Z]+$/.test(prefix)) {
      throw new Error("Unallowed prefix");
    }
    super();
  }

  init() {
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

  *getMany<T>(prefix: readonly StorageKeyPart[]) {
    for (let [key, value] of Object.entries(localStorage)) {
      if (key.startsWith(this.prefix)) {
        key = key.slice(this.prefix.length);
      }
      const parts = fromString(key);
      if (Array.isArray(parts)) {
        for (const [i, p] of prefix.entries()) {
          if (toString(p) != toString(parts[i])) {
            continue;
          }
          yield [parts, fromString(value)] as [readonly StorageKeyPart[], T];
        }
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
}
