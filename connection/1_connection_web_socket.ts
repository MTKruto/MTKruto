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

import { concat, unreachable } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
import { getLogger, Mutex } from "../1_utilities.ts";
import type { Connection } from "./0_connection.ts";

const L = getLogger("ConnectionWebSocket");
const errConnectionNotOpen = new ConnectionError("Connection not open");

export class ConnectionWebSocket implements Connection {
  #url: string;
  #webSocket?: WebSocket;
  #rMutex = new Mutex();
  #wMutex = new Mutex();
  #buffer = new Uint8Array();
  #nextResolve: [number, { resolve: () => void; reject: (err: unknown) => void }] | null = null;
  stateChangeHandler?: Connection["stateChangeHandler"];

  constructor(url: string) {
    this.#url = url;
  }

  #initWs() {
    return new Promise<WebSocket>((resolve, reject) => {
      const webSocket = new WebSocket(this.#url, "binary");
      const mutex = new Mutex();
      webSocket.addEventListener("close", () => {
        this.#rejectRead();
        this.stateChangeHandler?.(false);
      });
      webSocket.addEventListener("open", () => {
        this.stateChangeHandler?.(true);
        resolve(webSocket);
        L.debug("connected to", this.#url);
      });
      webSocket.addEventListener("message", async (e) => {
        if (typeof e.data === "string") {
          return;
        }
        const unlock = await mutex.lock();
        const data = new Uint8Array(await new Blob([e.data].map((v) => v instanceof Blob || v instanceof Uint8Array ? v : v instanceof ArrayBuffer ? v : unreachable())).arrayBuffer());

        this.#buffer = concat([this.#buffer, data]);

        if (
          this.#nextResolve != null && this.#buffer.length >= this.#nextResolve[0]
        ) {
          this.#nextResolve[1].resolve();
          this.#nextResolve = null;
        }

        unlock();
      });
      webSocket.addEventListener("error", (err) => {
        if (this.#isConnecting) {
          reject("message" in err ? new ConnectionError(err.message as string) : new ConnectionError("Connection failed"));
        }
        if (this.connected) {
          L.error(err);
        }
      });
    });
  }

  get connected(): boolean {
    return !!this.#webSocket && this.#webSocket.readyState == WebSocket.OPEN;
  }

  #isConnecting = false;
  async open() {
    if (this.#isConnecting) {
      throw new ConnectionError("Already connecting");
    }
    this.#isConnecting = true;

    if (this.connected) {
      throw new ConnectionError("Already connected");
    }

    try {
      this.#webSocket = await this.#initWs();
    } finally {
      this.#isConnecting = false;
    }
  }

  #assertConnected() {
    if (!this.connected) {
      throw errConnectionNotOpen;
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
      this.#webSocket!.send(p);
    } finally {
      unlock();
    }
  }

  #rejectRead() {
    if (this.#nextResolve != null) {
      this.#nextResolve[1].reject(errConnectionNotOpen);
      this.#nextResolve = null;
    }
  }

  close() {
    this.#assertConnected();
    this.#webSocket!.close(1000, "method");
    this.#webSocket = undefined;
    this.#rejectRead();
  }
}
