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

import { Socket } from "node:net";
import { concat, equals, startsWith } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
import { getLogger, hmacSha256, Mutex } from "../1_utilities.ts";
import type { Connection } from "./0_connection.ts";
import { getTlsHeader } from "./0_get_tls_header.ts";

const HEADER_LENGTH = 5;
const MAX_PACKET_LENGTH = 2878;

const L = getLogger("ConnectionTCP");
const errConnectionNotOpen = new ConnectionError("The connection is not open.");

export class ConnectionTLS implements Connection {
  #hostname: string;
  #port: number;
  #secret: Uint8Array<ArrayBuffer>;
  #socket?: Socket;
  #rMutex = new Mutex();
  #wMutex = new Mutex();
  #buffer = new Array<number>();
  #nextResolve: [
    number,
    { resolve: () => void; reject: (err: unknown) => void },
  ] | null = null;
  stateChangeHandler?: Connection["stateChangeHandler"];

  constructor(hostname: string, port: number, secret: Uint8Array<ArrayBuffer>) {
    this.#hostname = hostname;
    this.#port = port;
    this.#secret = (secret[0] === 0xDD || secret[0] === 0xEE) ? secret.slice(1) : secret;
  }

  #rejectRead() {
    if (this.#nextResolve !== null) {
      this.#nextResolve[1].reject(errConnectionNotOpen);
      this.#nextResolve = null;
    }
  }

  async open() {
    if (this.isConnected) {
      return;
    }

    this.#socket = new Socket();
    this.#socket.on("close", () => {
      this.#rejectRead();
      this.stateChangeHandler?.(false);
    });
    this.#socket.on("data",  (data) => {
      if (typeof data === "string") {
        return;
      }

      for (const byte of data) {
        this.#buffer.push(byte);
      }

      if (
        this.#nextResolve !== null && this.#buffer.length >= this.#nextResolve[0]
      ) {
        const resolve = this.#nextResolve[1].resolve;
        this.#nextResolve = null;
        resolve();
      }
    });
    await new Promise<void>((resolve, reject) => {
      this.#socket!.connect(this.#port, this.#hostname);
      this.#socket!.once("error", reject);
      this.#socket!.once(
        "connect",
        () => {
          this.#socket!.off("error", reject);
          resolve();
          this.stateChangeHandler?.(true);
          L.debug("connected to", this.#hostname, "port", this.#port);
        },
      );
    });

    const header = await getTlsHeader(this.#secret);
    const helloRand = header.subarray(11, 43);
    await this.#write(header);

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

        await new Promise<void>((resolve, reject) => this.#nextResolve = [0, { resolve, reject }]);
        read = concat([read, new Uint8Array(this.#buffer.splice(0, this.#buffer.length))]);
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

  get isConnected() {
    return this.#socket?.readyState === "open";
  }

  #assertConnected() {
    if (!this.isConnected) {
      throw errConnectionNotOpen;
    }
  }

  #packetBuffer = new Uint8Array();

  async #readPacket() {
    const header = new Uint8Array(HEADER_LENGTH);
    await this.#read(header);
    if (!startsWith(header, new Uint8Array([0x17, 0x03, 0x03]))) {
      throw new TypeError("Failed to read TLS packet.");
    }

    const length = new DataView(header.buffer).getUint16(3);
    const packet = new Uint8Array(length);
    await this.#read(packet);
    this.#packetBuffer = concat([this.#packetBuffer, packet]);
  }

  #isFirstWrite = false;
  async #writePacket(packet: Uint8Array) {
    const header = new Uint8Array([0x17, 0x03, 0x03, 0x00, 0x00]);
    new DataView(header.buffer).setUint16(3, packet.byteLength);
    let data = concat([header, packet]);
    if (this.#isFirstWrite) {
      this.#isFirstWrite = false;
      data = concat([new Uint8Array([0x14, 0x03, 0x03, 0x00, 0x01, 0x01]), data]);
    }

    await this.#write(data);
  }

  async #read(p: Uint8Array) {
    if (this.#buffer.length < p.length) {
      await new Promise<void>((resolve, reject) => this.#nextResolve = [p.length, { resolve, reject }]);
    }
    p.set(this.#buffer.splice(0, p.length));
  }

  async #write(p: Uint8Array) {
    await new Promise<void>((resolve, reject) => {
      this.#socket!.write(
        p,
        (err) => {
          (err === undefined || err === null) ? resolve() : reject(err);
        },
      );
    });
  }

  async read(p: Uint8Array): Promise<void> {
    this.#assertConnected();
    const unlock = await this.#rMutex.lock();
    try {
      while (this.#packetBuffer.byteLength < p.byteLength) {
        await this.#readPacket();
      }
      p.set(this.#packetBuffer.subarray(0, p.byteLength));
      this.#packetBuffer = this.#packetBuffer.slice(p.byteLength);
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
    this.#socket!.destroy();
    this.#socket = undefined;
  }
}
