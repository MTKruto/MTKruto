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

import { ConnectionTLS } from "../connection/1_connection_tls.node.ts";
import { decodeHex } from "../0_deps.ts";
import { ConnectionTCP } from "../connection/1_connection_tcp.ts";
import { TransportIntermediate } from "./1_transport_intermediate.ts";
import { getDcId, type TransportProvider } from "./1_transport_provider.ts";

export function transportProviderMtproxy(link: string): TransportProvider;
export function transportProviderMtproxy(hostname: string, port: number, secret: Uint8Array<ArrayBuffer>): TransportProvider;
export function transportProviderMtproxy(hostnameOrLink: string, port?: number, secret?: Uint8Array<ArrayBuffer>): TransportProvider {
  let hostname = hostnameOrLink;

  if (port === undefined && secret === undefined) {
    const url = new URL(hostnameOrLink);
    const hostname_ = url.searchParams.get("server");
    const port_ = url.searchParams.get("port");
    const secret_ = url.searchParams.get("secret");
    if (!hostname_ || !port_ || !secret_) {
      throw new TypeError("Invalid MTProxy link.");
    }
    hostname = hostname_;
    port = parseInt(port_);
    secret = decodeHex(secret_);
    if (isNaN(port) || port < 0 || port > 0xFFFF) {
      throw new TypeError("Server port is invalid.");
    }
    if (secret.byteLength < 16) {
      throw new TypeError("Proxy secret must be at least 16 bytes.");
    }
  }

  return ({ dc, isCdn }) => {
    const dcId = getDcId(dc, isCdn);
    const connection = secret!.byteLength <= 17 ? new ConnectionTCP(hostname, port!) : new ConnectionTLS(hostname, port!, secret!);
    const transport = new TransportIntermediate(connection, { isPadded: true, isObfuscated: true, secret, dcId });
    return { connection, transport, dcId };
  };
}
