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

import { concat, equals, startsWith, writeAll } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
import { getLogger, hmacSha256, Mutex } from "../1_utilities.ts";
import type { Connection } from "./0_connection.ts";
import { getTlsHeader } from "./0_get_tls_header.ts";

const HEADER_LENGTH = 5;
const MAX_PACKET_LENGTH = 2878;

const L = getLogger("ConnectionTLS");

export class ConnectionTLS implements Connection {
  #hostname: string;
  #port: number;
  #secret: Uint8Array<ArrayBuffer>;
  #connection?: Deno.Conn;
  #rMutex = new Mutex();
  #wMutex = new Mutex();
  #buffer = new Uint8Array();
  #canRead = false;
  #canWrite = false;
  #isFirstWrite = true;
  connect: typeof Deno.connect = Deno.connect;
  stateChangeHandler?: Connection["stateChangeHandler"];
  callback?: Connection["callback"];

  constructor(hostname: string, port: number, secret: Uint8Array<ArrayBuffer>) {
    this.#hostname = hostname;
    this.#port = port;
    this.#secret = secret.byteLength > 16 ? secret.slice(1) : secret;
  }

  get isConnected(): boolean {
    return !!this.#connection && this.#canRead && this.#canWrite;
  }

  #assertConnected() {
    if (!this.isConnected) {
      throw new ConnectionError("The connection is not open.");
    }
  }

  async #read(array: Uint8Array) {
    let offset = 0;
    try {
      while (offset < array.length) {
        const n = await this.#connection!.read(array.subarray(offset));
        if (n === null) {
          this.#canRead = false;
          this.stateChangeHandler?.(false);
          throw new ConnectionError("The connection is not open.");
        }
        if (n <= 0) {
          continue;
        }
        this.callback?.read(n);
        offset += n;
      }
    } catch (err) {
      this.stateChangeHandler?.(false);
      this.#canRead = false;
      throw err;
    }
  }

  async open() {
    if (this.isConnected) {
      return;
    }

    const connection = await this.connect({
      hostname: this.#hostname,
      port: this.#port,
    });
    connection.setNoDelay(true);
    connection.setKeepAlive(true);
    this.#canRead = this.#canWrite = this.#isFirstWrite = true;
    this.stateChangeHandler?.(true);
    L.debug("connected to", this.#hostname, "port", this.#port);
    this.#connection = connection;

    const header = await getTlsHeader(this.#secret);
    const helloRand = header.subarray(11, 43);
    await writeAll(this.#connection!, header);

    let offset = 0;
    let read = new Uint8Array();
    for (
      const prefix of [
        new Uint8Array([0x16, 0x03, 0x03]),
        new Uint8Array([0x14, 0x03, 0x03, 0x00, 0x01, 0x01, 0x17, 0x03, 0x03]),
      ]
    ) {
      while (true) {
        if ((read.byteLength - offset) >= (prefix.byteLength + 2)) {
          if (!startsWith(read.subarray(offset), prefix)) {
            throw new TypeError("Received an invalid prefix.");
          }

          const dataView = new DataView(read.buffer, read.byteOffset, read.byteLength);
          const size = dataView.getUint16(offset + prefix.byteLength, false);
          const total = prefix.byteLength + 2 + size;

          if ((read.byteLength - offset) >= total) {
            offset += total;
            break;
          }
        }

        const buffer = new Uint8Array(4096);
        const n = await connection.read(buffer);
        if (n === null) {
          throw new TypeError("Failed to initialize TLS connection.");
        }
        if (n <= 0) {
          continue;
        }
        this.callback?.read(n);
        read = concat([read, buffer.subarray(0, n)]);
      }
    }

    const response = read.subarray(0, offset);
    const actual = response.slice(11, 43);

    const zeroed = response.slice();
    zeroed.fill(0, 11, 43);

    const expected = await hmacSha256(concat([helloRand, zeroed]), this.#secret.slice(0, 16));

    if (!equals(actual, expected)) {
      throw new TypeError("Failed to initialize TLS connection.");
    }

    L.debug(`initialized TLS connection with ${this.#hostname}`);
  }

  async #readPacket() {
    const header = new Uint8Array(HEADER_LENGTH);
    await this.#read(header);
    if (!startsWith(header, new Uint8Array([0x17, 0x03, 0x03]))) {
      throw new TypeError("Failed to read TLS packet.");
    }

    const length = new DataView(header.buffer).getUint16(3);
    const packet = new Uint8Array(length);
    await this.#read(packet);
    this.#buffer = concat([this.#buffer, packet]);
  }

  async #writePacket(packet: Uint8Array) {
    const header = new Uint8Array([0x17, 0x03, 0x03, 0x00, 0x00]);
    new DataView(header.buffer).setUint16(3, packet.byteLength);
    let data = concat([header, packet]);
    if (this.#isFirstWrite) {
      this.#isFirstWrite = false;
      data = concat([new Uint8Array([0x14, 0x03, 0x03, 0x00, 0x01, 0x01]), data]);
    }
    try {
      await writeAll(this.#connection!, data);
      this.callback?.write(data.byteLength);
    } catch (err) {
      this.#canWrite = false;
      this.stateChangeHandler?.(false);
      throw err;
    }
  }

  async read(p: Uint8Array): Promise<void> {
    this.#assertConnected();
    const unlock = await this.#rMutex.lock();
    try {
      while (this.#buffer.byteLength < p.byteLength) {
        await this.#readPacket();
      }
      p.set(this.#buffer.subarray(0, p.byteLength));
      this.#buffer = this.#buffer.slice(p.byteLength);
    } finally {
      unlock();
    }
  }

  async write(p: Uint8Array): Promise<void> {
    this.#assertConnected();
    const unlock = await this.#wMutex.lock();
    try {
      let offset = 0;
      while (true) {
        const packet = p.subarray(offset, offset + MAX_PACKET_LENGTH - HEADER_LENGTH);
        if (packet.byteLength === 0) {
          break;
        }

        await this.#writePacket(packet);
        offset += packet.byteLength;
      }
    } finally {
      unlock();
    }
  }

  close() {
    this.#assertConnected();
    this.#connection!.close();
    this.#canRead = this.#canWrite = false;
    this.#isFirstWrite = true;
    this.#connection = undefined;
  }
}
