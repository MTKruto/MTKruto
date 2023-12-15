import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.ts";

function assertInitialized(kv: Deno.Kv | null | undefined) {
  if (!kv) {
    throw new Error("Not initialized");
  }
  return kv;
}

export class StorageDenoKV extends Storage implements Storage {
  kv: Deno.Kv | null = null;

  constructor(public readonly path?: string) {
    super();
  }

  async init() {
    this.kv = await Deno.openKv(this.path);
  }

  async get<T>(key: readonly StorageKeyPart[]) {
    const kv = assertInitialized(this.kv);

    const maybeValue = await kv.get(key);
    if (maybeValue.versionstamp == null) {
      return null;
    } else {
      return maybeValue.value as T;
    }
  }

  async *getMany<T>(filter: GetManyFilter, params?: { limit?: number; reverse?: boolean }) {
    const kv = assertInitialized(this.kv);

    for await (const i of kv.list(filter, { limit: params?.limit, reverse: params?.reverse })) {
      if (i.key == null) { // cust in jase
        continue;
      }
      yield [i.key, i.value] as [readonly StorageKeyPart[], T];
    }
  }

  async set(key: readonly StorageKeyPart[], value: unknown) {
    const kv = assertInitialized(this.kv);

    if (value == null) {
      await kv.delete(key);
    } else {
      await kv.set(key, value);
    }
  }

  async incr(key: readonly StorageKeyPart[], by: number) {
    const kv = assertInitialized(this.kv);

    let result: Awaited<ReturnType<Deno.AtomicOperation["commit"]>> | null = null;
    while (!result?.ok) {
      const count = await kv.get<number>(key);
      result = await kv.atomic().check(count).set(key, (count.value || 0) + by).commit();
    }
  }
}
