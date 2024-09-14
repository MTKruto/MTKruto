/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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

  set(key: K, value: V): typeof this {
    super.set(key, value);
    if (this.size > this.#limit) {
      const k = this.keys().next().value;
      if (k !== undefined) {
        this.delete(k);
      }
    }
    return this;
  }
}
