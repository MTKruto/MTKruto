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

import { bigIntFromBuffer } from "./0_bigint.ts";
import { bufferFromBigInt } from "./0_buffer.ts";

export class CTR {
  #key: CryptoKey;
  #iv: Uint8Array;
  #incrementPending = 0;

  get _state() {
    return { iv: new Uint8Array(this.#iv), state: this.#incrementPending };
  }

  constructor(key: CryptoKey, iv: Uint8Array) {
    this.#key = key;
    this.#iv = iv;
  }

  static async importKey(key: Uint8Array) {
    return await crypto.subtle.importKey("raw", key, "AES-CTR", false, ["encrypt"]);
  }

  async call(data: Uint8Array) {
    const promise = crypto.subtle.encrypt(
      {
        name: "AES-CTR",
        counter: new Uint8Array(this.#iv),
        length: this.#iv.length * 8,
      },
      this.#key,
      data,
    );
    const incrementPending = data.length % this.#iv.length;
    let incrementBy = (data.length - incrementPending) / this.#iv.length;
    this.#incrementPending += incrementPending;
    while (this.#incrementPending >= this.#iv.length) {
      this.#incrementPending -= this.#iv.length;
      incrementBy += 1;
    }

    if (incrementBy) {
      this.#iv = bufferFromBigInt(bigIntFromBuffer(this.#iv, false, false) + BigInt(incrementBy), 16, false, false);
    }
    return new Uint8Array(await promise);
  }
}
