import { MaybePromise } from "../utilities/0_types.ts";
import { Storage } from "./storage.ts";

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

  get(key: string) {
    key = this.prefix + key;
    return sessionStorage.getItem(key);
  }

  set(key: string, value: string | null): MaybePromise<void> {
    key = this.prefix + key;
    if (value != null) {
      sessionStorage.setItem(key, value);
    } else {
      sessionStorage.removeItem(key);
    }
  }
}
