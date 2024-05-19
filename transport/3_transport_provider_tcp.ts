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

import { SocksClient } from "../0_deps.ts";
import { ConnectionTCP } from "../connection/1_connection_tcp.ts";
import { TransportAbridged } from "./1_transport_abridged.ts";
import { getDcId, getDcIps, TransportProvider } from "./2_transport_provider.ts";

export interface Socks5 {
  type: "socks5";
  hostname: string;
  port?: number;
  username?: string;
  password?: string;
}

export function transportProviderTcp(params?: {
  ipv6?: boolean;
  obfuscated?: boolean;
  proxy?: Socks5;
}): TransportProvider {
  return ({ dc, cdn }) => {
    const connection = new ConnectionTCP(getDcIps(dc, params?.ipv6 ? "ipv6" : "ipv4")[0], 80);
    if (params?.proxy) {
      const socksClient = new SocksClient(params.proxy);
      connection.connect = socksClient.connect.bind(socksClient) as typeof Deno.connect;
    }
    const transport = new TransportAbridged(connection, params?.obfuscated);
    return { connection, transport, dcId: getDcId(dc, cdn) };
  };
}
