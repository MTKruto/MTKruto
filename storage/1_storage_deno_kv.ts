import { Storage } from "./0_storage.ts";

export class StorageDenoKV extends Storage implements Storage {
  kv: Deno.Kv | null = null;

  constructor(public readonly path?: string) {
    super();
  }

  async init() {
    this.kv = await Deno.openKv(this.path);
  }

  async get(key: string) {
    if (!this.kv) {
      throw new Error("Not initialized");
    }

    const maybeValue = await this.kv.get([key]);
    if (maybeValue.versionstamp == null) {
      return null;
    } else {
      return maybeValue.value as string;
    }
  }

  async set(key: string, value: string | null) {
    if (!this.kv) {
      throw new Error("Not initialized");
    }

    if (value == null) {
      await this.kv.delete([key]);
    } else {
      await this.kv.set([key], value);
    }
  }
}
