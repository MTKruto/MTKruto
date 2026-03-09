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

import { delay, SECOND } from "../0_deps.ts";
import { drop, getLogger, type Logger, Mutex } from "../1_utilities.ts";
import type { Connection, ConnectionCallback } from "../2_connection.ts";
import { type DC, type TransportProvider, transportProviderTcp, transportProviderWebSocket } from "../3_transport.ts";
import { SessionState } from "./0_session_state.ts";

// global Session ID counter for logs
let id = 0;

// @ts-ignore: lib
const defaultTransportProvider = typeof Deno === "undefined" ? transportProviderWebSocket : transportProviderTcp;

export interface SessionParams {
  /**
   * The transport provider to use. Defaults to `webSocketTransportProvider` with its default options.
   */
  transportProvider?: TransportProvider;
  /**
   * Whether the connection is with a CDN server. Defaults to false.
   */
  isCdn?: boolean;
}

export abstract class Session {
  #dc: DC;
  #isCdn: boolean;
  protected state: SessionState = new SessionState();
  protected transport: ReturnType<TransportProvider>;
  #lastConnect?: Date;
  #isDisconnected = true;
  #L: Logger;
  #onConnectionStateChange: Connection["stateChangeHandler"];

  constructor(dc: DC, params?: SessionParams) {
    this.#dc = dc;
    this.#isCdn = params?.isCdn ?? false;

    const transportProvider = params?.transportProvider ?? defaultTransportProvider();
    this.transport = transportProvider({ dc: this.#dc, isCdn: this.#isCdn });
    this.transport.connection.stateChangeHandler = (connected) => {
      setTimeout(() => {
        drop(this.#stateChangeHandler(connected));
      });
    };
    this.#L = getLogger("Session").client(id++);
  }

  set onConnectionStateChange(onConnectionStateChange: Connection["stateChangeHandler"]) {
    this.#onConnectionStateChange = onConnectionStateChange;
  }

  set connectionCallback(connectionCallback: ConnectionCallback | undefined) {
    this.transport.connection.callback = connectionCallback;
  }

  get dc(): DC {
    return this.#dc;
  }

  get isCdn(): boolean {
    return this.#isCdn;
  }

  set serverSalt(serverSalt: bigint) {
    this.state.serverSalt = serverSalt;
  }

  get serverSalt(): bigint {
    return this.state.serverSalt;
  }

  #lastState?: boolean;
  async #stateChangeHandler(isConnected: boolean) {
    if (this.#lastState !== isConnected) {
      setTimeout(() => {
        this.#onConnectionStateChange?.(isConnected);
      });
    }
    if (this.#lastState === isConnected) {
      return;
    }
    this.#lastState = isConnected;
    if (isConnected || this.#isDisconnected) {
      if (this.#isDisconnected) {
        this.#L.debug("not reconnecting because explicitly disconnected");
      }
      return;
    }
    if (this.#lastConnect && Date.now() - this.#lastConnect.getTime() <= 10 * SECOND) {
      this.#L.debug("reconnecting after a delay");
      await delay(3 * SECOND);
    } else {
      this.#L.debug("reconnecting");
    }

    await this.connect();
  }

  get isConnected(): boolean {
    return this.transport.connection.isConnected;
  }

  #connectMutex = new Mutex();
  async connect() {
    const unlock = await this.#connectMutex.lock();
    try {
      if (this.isConnected) {
        return;
      }
      await this.transport.connection.open();
      await this.transport.transport.initialize();
      this.#lastConnect = new Date();
      this.#isDisconnected = false;
    } finally {
      unlock();
    }
  }

  protected async waitUntilConnected() {
    (await this.#connectMutex.lock())();
  }

  get isDisconnected(): boolean {
    return this.#isDisconnected;
  }

  disconnect() {
    this.#isDisconnected = true;
    if (this.transport.connection.isConnected) {
      this.transport.connection.close();
    }
  }

  abstract send(body: Uint8Array): Promise<bigint>;
}
