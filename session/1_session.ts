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

import { SECOND } from "../0_deps.ts";
import { drop, getLogger, Logger, Mutex } from "../1_utilities.ts";
import { Connection, ConnectionCallback } from "../2_connection.ts";
import { DC, TransportProvider, transportProviderTcp, transportProviderWebSocket } from "../3_transport.ts";
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
  cdn?: boolean;
}

export abstract class Session {
  #dc: DC;
  #cdn: boolean;
  protected state: SessionState = new SessionState();
  protected transport: ReturnType<TransportProvider>;
  #lastConnect?: Date;
  #disconnected = true;
  #L: Logger;
  #onConnectionStateChange: Connection["stateChangeHandler"];

  constructor(dc: DC, params?: SessionParams) {
    this.#dc = dc;
    this.#cdn = params?.cdn ?? false;

    const transportProvider = params?.transportProvider ?? defaultTransportProvider();
    this.transport = transportProvider({ dc: this.#dc, cdn: this.#cdn });
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

  get cdn(): boolean {
    return this.#cdn;
  }

  set serverSalt(serverSalt: bigint) {
    this.state.serverSalt = serverSalt;
  }

  #lastState?: boolean;
  async #stateChangeHandler(connected: boolean) {
    if (this.#lastState !== connected) {
      setTimeout(() => {
        this.#onConnectionStateChange?.(connected);
      });
    }
    if (!connected) {
      this.transport.transport.deinitialize();
    }
    if (this.#lastState === connected) {
      return;
    }
    this.#lastState = connected;
    if (connected || this.#disconnected) {
      if (this.#disconnected) {
        this.#L.debug("not reconnecting because explicitly disconnected");
      }
      return;
    }
    if (this.#lastConnect && Date.now() - this.#lastConnect.getTime() <= 10 * SECOND) {
      this.#L.debug("reconnecting after a delay");
      await new Promise((r) => setTimeout(r, 3 * SECOND));
    } else {
      this.#L.debug("reconnecting");
    }

    await this.connect();
  }

  get connected(): boolean {
    return this.transport.connection.connected;
  }

  #connectMutex = new Mutex();
  async connect() {
    const unlock = await this.#connectMutex.lock();
    try {
      if (this.connected) {
        return;
      }
      await this.transport.connection.open();
      await this.transport.transport.initialize();
      this.#lastConnect = new Date();
      this.#disconnected = false;
    } finally {
      unlock();
    }
  }

  protected async waitUntilConnected() {
    (await this.#connectMutex.lock())();
  }

  get disconnected(): boolean {
    return this.#disconnected;
  }

  disconnect() {
    this.#disconnected = true;
    if (this.transport.connection.connected) {
      this.transport.connection.close();
      this.transport.transport.deinitialize();
    }
  }

  abstract send(body: Uint8Array): Promise<bigint>;
}
