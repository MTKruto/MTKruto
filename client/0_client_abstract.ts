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

import { initTgCrypto } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
import { DC, TransportProvider, transportProviderTcp, transportProviderWebSocket } from "../3_transport.ts";
import { INITIAL_DC } from "../4_constants.ts";

// @ts-ignore: lib
const defaultTransportProvider = typeof Deno === "undefined" ? transportProviderWebSocket : transportProviderTcp;

export interface ClientAbstractParams {
  /**
   * The first DC to connect to. This is commonly used to decide whether to connect to test or production servers. It is not necessarily the DC that the client will directly connect to or is currently connected to. Defaults to the default initial DC.
   */
  initialDc?: DC;
  /**
   * The transport provider to use. Defaults to `webSocketTransportProvider` with its default options.
   */
  transportProvider?: TransportProvider;
  /**
   * Whether the connection is with a CDN server. Defaults to false.
   */
  cdn?: boolean;
}

export abstract class ClientAbstract {
  public readonly initialDc: DC;
  public transportProvider: TransportProvider;
  public readonly cdn: boolean;

  protected transport?: ReturnType<TransportProvider>;
  #dc?: DC;

  constructor(params?: ClientAbstractParams) {
    this.initialDc = params?.initialDc ?? INITIAL_DC;
    this.transportProvider = params?.transportProvider ?? defaultTransportProvider();
    this.cdn = params?.cdn ?? false;
  }

  stateChangeHandler?: (connected: boolean) => void;

  get dc(): DC {
    return this.#dc ?? this.initialDc;
  }

  get dcId(): number {
    if (!this.transport) {
      throw new ConnectionError("Not connected.");
    }
    return this.transport.dcId;
  }

  setDc(dc: DC) {
    this.#dc = dc;
  }

  get connected(): boolean {
    return this.transport === undefined ? false : this.transport.connection.connected;
  }

  async connect() {
    this.transport = this.transportProvider({ dc: this.#dc ?? this.initialDc, cdn: this.cdn });
    this.transport.connection.stateChangeHandler = this.stateChangeHandler;
    await initTgCrypto();
    await this.transport.connection.open();
    await this.transport.transport.initialize();
  }

  async reconnect(dc?: DC) {
    await this.disconnect();
    if (dc) {
      await this.setDc(dc);
    }
    await this.connect();
  }

  async disconnect() {
    if (!this.transport) {
      throw new ConnectionError("Not connected.");
    }
    await this.transport.transport.deinitialize();
    await this.transport.connection.close();
  }

  get disconnected(): boolean {
    return !this.transport?.transport.initialized;
  }
}
