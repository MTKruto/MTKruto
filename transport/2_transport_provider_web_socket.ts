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

import { ConnectionWebSocket } from "../2_connection.ts";
import { TransportIntermediate } from "./1_transport_intermediate.ts";
import { type DC, getDcId, type TransportProvider } from "./1_transport_provider.ts";

const dcToNameMap: Record<DC, string> = {
  "1": "pluto",
  "1-test": "pluto",
  "2": "venus",
  "2-test": "venus",
  "3": "aurora",
  "3-test": "aurora",
  "4": "vesta",
  "5": "flora",
};
export const transportProviderWebSocket = (params?: { wss?: boolean }): TransportProvider => {
  return ({ dc, cdn }) => {
    params ??= {};
    params.wss ??= typeof location !== "undefined" && location.protocol == "http:" && location.hostname != "localhost" ? false : true;
    const url = `${params.wss ? "wss" : "ws"}://${dcToNameMap[dc]}${cdn ? "-1" : ""}.web.telegram.org/${dc.endsWith("-test") ? "apiws_test" : "apiws"}`;
    const connection = new ConnectionWebSocket(url);
    const transport = new TransportIntermediate(connection, true);
    const dcId = getDcId(dc, cdn);
    return { connection, transport, dcId };
  };
};
