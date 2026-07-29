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

export interface Part {
  isSmall: boolean;
  part: number;
  totalParts: number;
  bytes: Uint8Array<ArrayBuffer>;
}

export class PartStream extends TransformStream<Uint8Array<ArrayBuffer>, Part> {
  #buffer: Uint8Array<ArrayBuffer>;
  #bufferLength = 0;
  #totalRead = 0;
  #part = 0;

  constructor(chunkSize: number) {
    const buffer = new Uint8Array(chunkSize);
    super({
      transform: (chunk, controller) => {
        this.#totalRead += chunk.byteLength;
        let offset = 0;
        while (offset < chunk.byteLength) {
          if (this.#bufferLength === chunkSize) {
            controller.enqueue({
              isSmall: false,
              part: this.#part++,
              totalParts: -1,
              bytes: this.#buffer,
            });
            this.#buffer = new Uint8Array(chunkSize);
            this.#bufferLength = 0;
          }

          const byteCount = Math.min(chunkSize - this.#bufferLength, chunk.byteLength - offset);
          this.#buffer.set(chunk.subarray(offset, offset + byteCount), this.#bufferLength);
          this.#bufferLength += byteCount;
          offset += byteCount;
        }
      },
      flush: (controller) => {
        controller.enqueue({
          isSmall: this.#totalRead <= chunkSize,
          part: this.#part,
          totalParts: Math.ceil(this.#totalRead / chunkSize),
          bytes: this.#buffer.slice(0, this.#bufferLength),
        });
      },
    });
    this.#buffer = buffer;
  }
}
