/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { concat } from "../0_deps.ts";

export interface Part {
  small: boolean;
  part: number;
  totalParts: number;
  bytes: Uint8Array<ArrayBuffer>;
}

export class PartStream extends TransformStream<Uint8Array<ArrayBuffer>, Part> {
  #buffer = new Uint8Array();
  #totalRead = 0;
  #part = 0;

  constructor(chunkSize: number) {
    super({
      transform: (chunk, controller) => {
        this.#totalRead += chunk.byteLength;
        chunk = concat([this.#buffer, chunk]);
        while (chunk.byteLength > chunkSize) {
          controller.enqueue({
            small: false,
            part: this.#part++,
            totalParts: -1,
            bytes: chunk.slice(0, chunkSize),
          });
          chunk = chunk.slice(chunkSize);
        }
        this.#buffer = chunk;
      },
      flush: (controller) => {
        controller.enqueue({
          small: this.#totalRead <= chunkSize,
          part: this.#part,
          totalParts: Math.ceil(this.#totalRead / chunkSize),
          bytes: this.#buffer,
        });
      },
    });
  }
}
