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
import { ConnectionError } from "../0_errors.ts";
import { getLogger, Mutex } from "../1_utilities.ts";
import type { Connection } from "./0_connection.ts";

const L = getLogger("ConnectionTCP");
const errConnectionNotOpen = new ConnectionError("The connection is not open.");

export class ConnectionTCP implements Connection {
  #hostname: string;
  #port: number;
  #socket?: Socket;
  #rMutex = new Mutex();
  #wMutex = new Mutex();
  #buffer = new Array<number>();
  #nextResolve: [
    number,
    { resolve: () => void; reject: (err: unknown) => void },
  ] | null = null;
  stateChangeHandler?: Connection["stateChangeHandler"];

  constructor(hostname: string, port: number) {
    this.#hostname = hostname;
    this.#port = port;
  }

  #rejectRead() {
    if (this.#nextResolve !== null) {
      this.#nextResolve[1].reject(errConnectionNotOpen);
      this.#nextResolve = null;
    }
  }

  open() {
    if (this.isConnected) {
      return;
    }

    const socket = this.#socket = new Socket();
    socket.on("error", () => {
      if (this.#socket !== socket) {
        return;
      }
      this.#rejectRead();
      socket.destroy();
    });
    socket.on("close", () => {
      if (this.#socket !== socket) {
        return;
      }
      this.#rejectRead();
      this.#socket = undefined;
      this.#buffer = [];
      this.stateChangeHandler?.(false);
    });
    socket.on("data", (data) => {
      if (this.#socket !== socket) {
        return;
      }
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
    return new Promise<void>((resolve, reject) => {
      socket.connect(this.#port, this.#hostname);
      socket.once("error", reject);
      socket.once(
        "connect",
        () => {
          socket.off("error", reject);
          resolve();
          this.stateChangeHandler?.(true);
          L.debug("connected to", this.#hostname, "port", this.#port);
        },
      );
    });
  }

  get isConnected() {
    return this.#socket?.readyState === "open";
  }

  #assertConnected() {
    if (!this.isConnected) {
      throw errConnectionNotOpen;
    }
  }

  async read(p: Uint8Array) {
    this.#assertConnected();
    const unlock = await this.#rMutex.lock();
    try {
      this.#assertConnected();
      if (this.#buffer.length < p.byteLength) {
        await new Promise<void>((resolve, reject) => this.#nextResolve = [p.byteLength, { resolve, reject }]);
      }
      p.set(this.#buffer.splice(0, p.byteLength));
    } finally {
      unlock();
    }
  }

  async write(p: Uint8Array) {
    this.#assertConnected();
    const unlock = await this.#wMutex.lock();
    try {
      this.#assertConnected();
      try {
        await new Promise<void>((resolve, reject) => {
          this.#socket!.write(
            p,
            (err) => {
              (err === undefined || err === null) ? resolve() : reject(err);
            },
          );
        });
      } catch (err) {
        if (!this.isConnected) {
          throw errConnectionNotOpen;
        } else {
          throw err;
        }
      }
    } finally {
      unlock();
    }
  }

  close() {
    this.#assertConnected();
    this.#socket!.destroy();
  }
}
