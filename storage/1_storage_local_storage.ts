import { MaybePromise } from "../utilities/0_types.ts";
import { Storage } from "./0_storage.ts";

export class StorageLocalStorage extends Storage implements Storage {
  constructor(private readonly prefix: string) {
    if (typeof localStorage === "undefined") {
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

  get(key: string) {
    key = this.prefix + key;
    return localStorage.getItem(key);
  }

  set(key: string, value: string | null): MaybePromise<void> {
    key = this.prefix + key;
    if (value != null) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  }
}
