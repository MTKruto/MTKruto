/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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

import { Mutex } from "./0_mutex.ts";

export class CTR {
  #key: CryptoKey;
  #iv: Uint8Array<ArrayBuffer>;
  #bytesUntilNextBlock = 0;

  get _state(): { iv: Uint8Array; state: number } {
    return { iv: new Uint8Array(this.#iv), state: this.#bytesUntilNextBlock };
  }

  constructor(key: CryptoKey, iv: Uint8Array) {
    this.#key = key;
    this.#iv = new Uint8Array(iv);
  }

  static async importKey(key: Uint8Array<ArrayBuffer>): Promise<CryptoKey> {
    return await crypto.subtle.importKey("raw", key, "AES-CTR", false, ["encrypt"]);
  }

  #callMutex = new Mutex();
  async call(data: Uint8Array<ArrayBuffer>): Promise<Uint8Array<ArrayBuffer>> {
    const unlock = await this.#callMutex.lock();
    try {
      return await this.#call(data);
    } finally {
      unlock();
    }
  }

  async #call(data: Uint8Array<ArrayBuffer>) {
    const skippedBytes = this.#bytesUntilNextBlock;
    let input = data;
    if (skippedBytes !== 0) {
      input = new Uint8Array(skippedBytes + data.byteLength);
      input.set(data, skippedBytes);
    }

    const encrypted = await this.#encrypt(input);
    this.#bytesUntilNextBlock = encrypted.byteLength % this.#iv.byteLength;
    this.#increaseIv((encrypted.byteLength - this.#bytesUntilNextBlock) / this.#iv.byteLength);
    return skippedBytes === 0 ? encrypted : encrypted.subarray(skippedBytes);
  }

  async #encrypt(data: Uint8Array<ArrayBuffer>) {
    return new Uint8Array(
      await crypto.subtle.encrypt(
        {
          name: "AES-CTR",
          counter: this.#iv,
          length: this.#iv.byteLength * 8,
        },
        this.#key,
        data,
      ),
    );
  }

  #increaseIv(amount: number) {
    for (let i = this.#iv.byteLength - 1; i >= 0 && amount > 0; --i) {
      amount += this.#iv[i];
      this.#iv[i] = amount & 0xFF;
      amount = Math.floor(amount / 0x100);
    }
  }
}

export async function hmacSha256(data: Uint8Array<ArrayBuffer>, secret: Uint8Array<ArrayBuffer>) {
  const key = await crypto.subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, data));
}
