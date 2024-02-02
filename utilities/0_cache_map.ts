export class CacheMap<K, V> extends Map<K, V> {
  #size: number;

  constructor(size: number, entries?: readonly (readonly [K, V])[] | null);
  constructor(size: number);
  constructor(size: number, entries?: readonly (readonly [K, V])[] | null) {
    super(entries);
    if (!size || size < 1) {
      throw new Error("Invalid size");
    }
    this.#size = size;
  }

  set(key: K, value: V) {
    super.set(key, value);
    if (this.size > this.#size) {
      this.delete(this.keys().next().value);
    }
    return this;
  }
}
