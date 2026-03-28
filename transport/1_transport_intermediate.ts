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

import { concat } from "../0_deps.ts";
import { getRandomId, intToBytes } from "../1_utilities.ts";
import type { Connection } from "../2_connection.ts";
import { getObfuscationParameters } from "./0_obfuscation.ts";
import { Transport } from "./0_transport.ts";

export class TransportIntermediate extends Transport implements Transport {
  #connection: Connection;
  #isObfuscated: boolean;
  #isPadded: boolean;

  constructor(connection: Connection, isObfuscated = false, isPadded = false) {
    super();
    this.#connection = connection;
    this.#isObfuscated = isObfuscated;
    this.#isPadded = isPadded;
  }

  async initialize() {
    if (this.#isObfuscated) {
      this.obfuscationParameters = await getObfuscationParameters(this.#isPadded ? 0xDDDDDDDD : 0xEEEEEEEE, this.#connection);
    } else {
      await this.#connection.write(new Uint8Array(this.#isPadded ? [0xDD, 0xDD, 0xDD, 0xDD] : [0xEE, 0xEE, 0xEE, 0xEE]));
    }
  }

  async receive(): Promise<Uint8Array> {
    let length: number;

    {
      let buffer = new Uint8Array(4);
      await this.#connection.read(buffer);
      buffer = await this.decrypt(buffer);
      const dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
      length = dataView.getUint32(0, true);
    }

    const buffer = new Uint8Array(length);
    await this.#connection.read(buffer);

    return await this.decrypt(buffer);
  }

  async send(buffer: Uint8Array) {
    if (this.#isPadded) {
      const padding = crypto.getRandomValues(new Uint8Array(Math.abs(getRandomId(true) % 16)));
      buffer = concat([buffer, padding]);
    }

    const length = intToBytes(buffer.length, 4);
    const data = concat([length, buffer]);

    await this.#connection.write(await this.encrypt(data));
  }
}
