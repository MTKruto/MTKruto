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

import { concat } from "../0_deps.ts";
import { bufferFromBigInt } from "../1_utilities.ts";
import { Connection } from "../2_connection.ts";
import { getObfuscationParameters } from "./0_obfuscation.ts";
import { Transport } from "./0_transport.ts";

export class TransportIntermediate extends Transport implements Transport {
  #connection: Connection;
  #initialized = false;
  #obfuscated: boolean;

  constructor(connection: Connection, obfuscated = false) {
    super();
    this.#connection = connection;
    this.#obfuscated = obfuscated;
  }

  async initialize() {
    if (!this.initialized) {
      if (this.#obfuscated) {
        this.obfuscationParameters = await getObfuscationParameters(0xEEEEEEEE, this.#connection);
      } else {
        await this.#connection.write(new Uint8Array([0xEE, 0xEE, 0xEE, 0xEE]));
      }
      this.#initialized = true;
    } else {
      throw new Error("Transport already initialized");
    }
  }

  async receive(): Promise<Uint8Array> {
    let length: number;

    {
      const buffer = new Uint8Array(4);
      await this.#connection.read(buffer);
      this.decrypt(buffer);
      const dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
      length = dataView.getUint32(0, true);
    }

    const buffer = new Uint8Array(length);
    await this.#connection.read(buffer);
    this.decrypt(buffer);
    return buffer;
  }

  async send(buffer: Uint8Array) {
    if (!this.initialized) {
      throw new Error("Transport not initialized");
    }

    const length = bufferFromBigInt(buffer.length, 4);
    const data = concat([length, buffer]);
    this.encrypt(data);

    await this.#connection.write(data);
  }

  override deinitialize() {
    super.deinitialize();
    this.#initialized = false;
  }

  get initialized(): boolean {
    return this.#initialized;
  }
}
