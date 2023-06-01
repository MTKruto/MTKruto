import { MaybePromise } from "../utilities/0_types.ts";
import { Storage } from "./storage.ts";

export class StorageMemory extends Storage implements Storage {
  protected map = new Map<string, string>();

  init() {
  }

  get(key: string) {
    return this.map.get(key) ?? null;
  }

  set(key: string, value: string | null): MaybePromise<void> {
    if (value != null) {
      this.map.set(key, value);
    } else {
      this.map.delete(key);
    }
  }
}
