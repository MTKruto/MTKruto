import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";

function assertInitialized(kv: Deno.Kv | null | undefined) {
  if (!kv) {
    throw new Error("Not initialized");
  }
  return kv;
}

export class StorageDenoKV extends Storage implements Storage {
  kv: Deno.Kv | null = null;
  #id: string | null = null;
  #path?: string;

  constructor(path?: string) {
    super();
    this.#path = path;
  }

  get path() {
    return this.#path;
  }

  get id() {
    return this.#id;
  }

  get supportsFiles() {
    return false;
  }

  branch(id: string) {
    const storage = new StorageDenoKV(this.path);
    storage.#id = id;
    return storage;
  }

  #fixKey(key: readonly StorageKeyPart[]) {
    if (this.#id !== null) {
      return ["__S" + this.#id, ...key];
    } else {
      return key;
    }
  }

  async init() {
    this.kv = await Deno.openKv(this.path);
  }

  async get<T>(key: readonly StorageKeyPart[]) {
    key = this.#fixKey(key);
    const kv = assertInitialized(this.kv);

    const maybeValue = await kv.get(key);
    if (maybeValue.versionstamp === null) {
      return null;
    } else {
      return maybeValue.value as T;
    }
  }

  async *getMany<T>(filter: GetManyFilter, params?: { limit?: number; reverse?: boolean }) {
    if ("prefix" in filter && this.#id !== null) {
      filter.prefix = this.#fixKey(filter.prefix);
    }
    if ("start" in filter && this.#id !== null) {
      filter.start = this.#fixKey(filter.start);
    }
    if ("end" in filter && this.#id !== null) {
      filter.end = this.#fixKey(filter.end);
    }
    const kv = assertInitialized(this.kv);

    for await (const i of kv.list(filter, { limit: params?.limit, reverse: params?.reverse })) {
      if (i.key == null) { // cust in jase
        continue;
      }
      yield [i.key, i.value] as [readonly StorageKeyPart[], T];
    }
  }

  async set(key: readonly StorageKeyPart[], value: unknown) {
    key = this.#fixKey(key);
    const kv = assertInitialized(this.kv);

    if (value == null) {
      await kv.delete(key);
    } else {
      await kv.set(key, value);
    }
  }

  async incr(key: readonly StorageKeyPart[], by: number) {
    key = this.#fixKey(key);
    const kv = assertInitialized(this.kv);

    let result: Awaited<ReturnType<Deno.AtomicOperation["commit"]>> | null = null;
    while (!result?.ok) {
      const count = await kv.get<number>(key);
      result = await kv.atomic().check(count).set(key, (count.value || 0) + by).commit();
    }
  }
}
