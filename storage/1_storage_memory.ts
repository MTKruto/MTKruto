import { MaybePromise } from "../1_utilities.ts";
import { Storage, StorageKeyPart } from "./0_storage.ts";
import { fromString, toString } from "./0_utilities.ts";

export class StorageMemory extends Storage implements Storage {
  protected map = new Map<string, unknown>();

  init() {
  }

  get<T>(key: readonly StorageKeyPart[]) {
    return this.map.get(toString(key)) as T ?? null;
  }

  *getMany<T>(prefix: readonly StorageKeyPart[]) {
    for (const [key, value] of this.map.entries()) {
      const parts = fromString(key);
      if (Array.isArray(parts)) {
        for (const [i, p] of prefix.entries()) {
          if (toString(p) != toString(parts[i])) {
            continue;
          }
          yield [parts, value] as [readonly StorageKeyPart[], T];
        }
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
