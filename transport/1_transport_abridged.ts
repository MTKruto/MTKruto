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
import { intFromBytes, intToBytes } from "../1_utilities.ts";
import type { Connection } from "../2_connection.ts";
import { getObfuscationParameters } from "./0_obfuscation.ts";
import { Transport } from "./0_transport.ts";

export class TransportAbridged extends Transport implements Transport {
  #connection: Connection;
  #obfuscated: boolean;

  constructor(connection: Connection, obfuscated = false) {
    super();
    this.#connection = connection;
    this.#obfuscated = obfuscated;
  }

  async initialize() {
    if (this.#obfuscated) {
      this.obfuscationParameters = await getObfuscationParameters(0xEFEFEFEF, this.#connection);
    } else {
      await this.#connection.write(new Uint8Array([0xEF]));
    }
  }

  async receive(): Promise<Uint8Array> {
    let length: number;

    {
      let buffer = new Uint8Array(1);
      await this.#connection.read(buffer);
      buffer = await this.decrypt(buffer);

      if (buffer[0] < 0x7F) {
        length = buffer[0];
      } else {
        let buffer = new Uint8Array(3);
        await this.#connection.read(buffer);
        buffer = await this.decrypt(buffer);
        length = Number(intFromBytes(buffer, { isSigned: false }));
      }
    }

    length *= 4;

    const buffer = new Uint8Array(length);
    await this.#connection.read(buffer);

    return await this.decrypt(buffer);
  }

  async send(buffer: Uint8Array) {
    const bufferLength = buffer.length / 4;

    const header = new Uint8Array([bufferLength >= 0x7F ? 0x7F : bufferLength]);
    const length = bufferLength >= 0x7F ? intToBytes(bufferLength, 3, { isSigned: false }) : new Uint8Array();
    const data = concat([header, length, buffer]);

    await this.#connection.write(await this.encrypt(data));
  }
}
