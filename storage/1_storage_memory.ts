import { MaybePromise } from "../utilities/0_types.ts";
import { Storage, StorageKeyPart } from "./0_storage.ts";
import { toString } from "./0_utilities.ts";

export class StorageMemory extends Storage implements Storage {
  protected map = new Map<string, unknown>();

  init() {
  }

  get<T>(key: readonly StorageKeyPart[]) {
    return this.map.get(toString(key)) as T ?? null;
  }

  set(key_: readonly StorageKeyPart[], value: unknown): MaybePromise<void> {
    const key = toString(key_);
    if (value != null) {
      this.map.set(key, value);
    } else {
      this.map.delete(key);
    }
  }
}
