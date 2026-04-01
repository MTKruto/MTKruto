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

import { ConnectionSocks5 } from "../connection/1_connection_socks5.node.ts";
import { isIPv6 } from "../0_deps.ts";
import { TransportAbridged } from "./1_transport_abridged.ts";
import { getDcId, getDcIps, type TransportProvider } from "./1_transport_provider.ts";

export interface TransportProviderSocks5Params {
  username: string;
  password: string;
}

export function transportProviderSocks5(url: string): TransportProvider;
export function transportProviderSocks5(hostname: string, port: number, params?: TransportProviderSocks5Params): TransportProvider;
export function transportProviderSocks5(urlOrHostname: string, port?: number, params?: TransportProviderSocks5Params): TransportProvider {
  let hostname = urlOrHostname;

  if (port === undefined && params === undefined) {
    const url = new URL(urlOrHostname);
    const hostname_ = url.hostname;
    const port_ = url.port || "1080";
    const username = url.username;
    const password = url.password;
    if (!hostname_ || !port_) {
      throw new TypeError("Invalid SOCKS5 URL.");
    }
    hostname = hostname_;
    port = parseInt(port_);
    params = { ...(params ?? {}), username, password };
  }

  return ({ dc, isCdn }) => {
    const dcId = getDcId(dc, isCdn);
    const connection = new ConnectionSocks5(getDcIps(dc, isIPv6(hostname) ? "ipv6" : "ipv4")[0], 80, hostname, port!, params);
    const transport = new TransportAbridged(connection, false);
    return { connection, transport, dcId };
  };
}
