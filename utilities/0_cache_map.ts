export class CacheMap<K, V> extends Map<K, V> {
  #limit: number;

  constructor(limit: number, entries?: readonly (readonly [K, V])[] | null);
  constructor(limit: number);
  constructor(limit: number, entries?: readonly (readonly [K, V])[] | null) {
    super(entries);
    if (!limit || limit < 1) {
      throw new Error("Invalid size");
    }
    this.#limit = limit;
  }

  set(key: K, value: V) {
    super.set(key, value);
    if (this.size > this.#limit) {
      this.delete(this.keys().next().value);
    }
    return this;
  }
}
