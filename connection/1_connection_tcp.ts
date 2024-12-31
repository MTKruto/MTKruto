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

import { concat, iterateReader } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
import { getLogger, Mutex } from "../1_utilities.ts";
import { Connection } from "./0_connection.ts";

const L = getLogger("ConnectionTCP");

export class ConnectionTCP implements Connection {
  #hostname: string;
  #port: number;
  #connection?: Deno.Conn;
  #rMutex = new Mutex();
  #wMutex = new Mutex();
  #buffer = new Uint8Array();
  #nextResolve: [number, { resolve: () => void; reject: (err: unknown) => void }] | null = null;
  #canRead = false;
  #canWrite = false;
  connect: typeof Deno.connect = Deno.connect;
  stateChangeHandler?: Connection["stateChangeHandler"];
  callback?: Connection["callback"];

  constructor(hostname: string, port: number) {
    this.#hostname = hostname;
    this.#port = port;
  }

  get connected(): boolean {
    return !!this.#connection && this.#canRead && this.#canWrite;
  }

  #assertConnected() {
    if (!this.connected) {
      throw new ConnectionError("Connection not open");
    }
  }

  async open() {
    if (this.connected) {
      throw new Error("Connection already open");
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
    Promise.resolve().then(async () => {
      do {
        try {
          for await (const chunk of iterateReader(connection)) {
            this.callback?.read(chunk.length);
            this.#buffer = concat([this.#buffer, chunk]);

            if (
              this.#nextResolve != null && this.#buffer.length >= this.#nextResolve[0]
            ) {
              this.#nextResolve[1].resolve();
              this.#nextResolve = null;
            }
          }
          this.#canRead = false;
          break;
        } catch (err) {
          this.#canRead = false;
          this.stateChangeHandler?.(false);
          this.#rejectRead();
          L.error(err);
        }
      } while (this.connected);
      this.stateChangeHandler?.(false);
    });
    this.#connection = connection;
  }

  #rejectRead() {
    if (this.#nextResolve != null) {
      this.#nextResolve[1].reject(new ConnectionError("Connection was closed"));
      this.#nextResolve = null;
    }
  }

  async read(p: Uint8Array) {
    this.#assertConnected();
    const unlock = await this.#rMutex.lock();
    try {
      this.#assertConnected();
      if (this.#buffer.length < p.length) {
        await new Promise<void>((resolve, reject) => this.#nextResolve = [p.length, { resolve, reject }]);
      }
      const slice = this.#buffer.slice(0, p.length);
      p.set(slice);
      this.#buffer = this.#buffer.slice(slice.length);
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
      while (written < p.length) {
        try {
          const wrote = await this.#connection!.write(p.subarray(written));
          this.callback?.write(wrote);
          written += wrote;
        } catch (err) {
          if (err instanceof Deno.errors.BrokenPipe || err instanceof Deno.errors.ConnectionReset) {
            this.#canWrite = false;
          }
          if (!this.connected) {
            this.stateChangeHandler?.(false);
            throw new ConnectionError("Connection was closed");
          } else {
            throw err;
          }
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
    this.#rejectRead();
  }
}
