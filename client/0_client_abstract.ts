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

import { TransportProvider, transportProviderTcp, transportProviderWebSocket } from "../3_transport.ts";

// @ts-ignore: lib
const defaultTransportProvider = typeof Deno === "undefined" ? transportProviderWebSocket : transportProviderTcp;

export interface ClientAbstractParams {
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
  public transportProvider: TransportProvider;
  public readonly cdn: boolean;

  constructor(params?: ClientAbstractParams) {
    this.transportProvider = params?.transportProvider ?? defaultTransportProvider();
    this.cdn = params?.cdn ?? false;
  }

  abstract connect(): Promise<void>;

  abstract get connected(): boolean;

  abstract disconnect(): void;

  abstract get disconnected(): boolean;
}
