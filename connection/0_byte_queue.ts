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

export class ByteQueue {
  #chunks = new Array<Uint8Array | undefined>();
  #head = 0;
  #headOffset = 0;
  #length = 0;

  get length() {
    return this.#length;
  }

  push(chunk: Uint8Array) {
    if (chunk.byteLength === 0) {
      return;
    }
    this.#chunks.push(chunk);
    this.#length += chunk.byteLength;
  }

  read(destination: Uint8Array) {
    if (destination.byteLength > this.#length) {
      throw new RangeError("Not enough bytes in the queue.");
    }

    let offset = 0;
    while (offset < destination.byteLength) {
      const chunk = this.#chunks[this.#head]!;
      const byteCount = Math.min(chunk.byteLength - this.#headOffset, destination.byteLength - offset);
      destination.set(chunk.subarray(this.#headOffset, this.#headOffset + byteCount), offset);
      offset += byteCount;
      this.#headOffset += byteCount;

      if (this.#headOffset === chunk.byteLength) {
        this.#chunks[this.#head++] = undefined;
        this.#headOffset = 0;
      }
    }
    this.#length -= destination.byteLength;

    if (this.#length === 0) {
      this.clear();
    } else if (this.#head >= 64 && this.#head * 2 >= this.#chunks.length) {
      this.#chunks = this.#chunks.slice(this.#head);
      this.#head = 0;
    }
  }

  clear() {
    this.#chunks.length = 0;
    this.#head = 0;
    this.#headOffset = 0;
    this.#length = 0;
  }
}
