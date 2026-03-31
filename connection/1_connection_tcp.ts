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

import { ConnectionError } from "../0_errors.ts";
import { getLogger, Mutex } from "../1_utilities.ts";
import type { Connection } from "./0_connection.ts";

const L = getLogger("ConnectionTCP");

export class ConnectionTCP implements Connection {
  #hostname: string;
  #port: number;
  #connection?: Deno.Conn;
  #rMutex = new Mutex();
  #wMutex = new Mutex();
  #canRead = false;
  #canWrite = false;
  connect: typeof Deno.connect = Deno.connect;
  stateChangeHandler?: Connection["stateChangeHandler"];
  callback?: Connection["callback"];

  constructor(hostname: string, port: number) {
    this.#hostname = hostname;
    this.#port = port;
  }

  get isConnected(): boolean {
    return !!this.#connection && this.#canRead && this.#canWrite;
  }

  #assertConnected() {
    if (!this.isConnected) {
      throw new ConnectionError("The connection is not open.");
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
    this.#canRead = this.#canWrite = true;
    this.stateChangeHandler?.(true);
    L.debug("connected to", this.#hostname, "port", this.#port);
    this.#connection = connection;
  }

  async read(p: Uint8Array) {
    this.#assertConnected();
    const unlock = await this.#rMutex.lock();
    let offset = 0;

    try {
      do {
        const read = await this.#connection!.read(p.subarray(offset));
        if (read === null) {
          this.#canRead = false;
          this.stateChangeHandler?.(false);
          throw new ConnectionError("The connection was closed.");
        }

        offset += read;
      } while (offset < p.byteLength);
    } catch {
      this.#canRead = false;
      this.stateChangeHandler?.(false);
      throw new ConnectionError("The connection was closed.");
    } finally {
      unlock();
    }
  }

  async write(p: Uint8Array) {
    this.#assertConnected();
    const unlock = await this.#wMutex.lock();
    try {
      this.#assertConnected();
      let written = 0;
      while (written < p.byteLength) {
        try {
          const wrote = await this.#connection!.write(p.subarray(written));
          this.callback?.write(wrote);
          written += wrote;
        } catch {
          this.#canWrite = false;
          this.stateChangeHandler?.(false);
          throw new ConnectionError("The connection was closed.");
        }
      }
    } finally {
      unlock();
    }
  }

  close() {
    this.#assertConnected();
    this.#connection!.close();
    this.#canRead = this.#canWrite = false;
    this.#connection = undefined;
  }
}
