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

import { C } from "./1_types.ts";

export class NetworkStatisticsManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getNetworkStatistics() {
    const [messagesRead, messagesWrite, cdnRead, cdnWrite] = await Promise.all([
      this.#c.storage.get<number>(["netstat_messages_read"]),
      this.#c.storage.get<number>(["netstat_messages_write"]),
      this.#c.storage.get<number>(["netstat_cdn_read"]),
      this.#c.storage.get<number>(["netstat_cdn_write"]),
    ]);
    const messages = {
      sent: Number(messagesWrite || 0),
      received: Number(messagesRead || 0),
    };
    const cdn = {
      sent: Number(cdnWrite || 0),
      received: Number(cdnRead || 0),
    };
    return { messages, cdn };
  }

  getTransportReadWriteCallback(cdn: boolean) {
    return {
      read: async (count: number) => {
        const key = cdn ? "netstat_cdn_read" : "netstat_messages_read";
        await this.#c.storage.incr([key], count);
      },
      write: async (count: number) => {
        const key = cdn ? "netstat_cdn_write" : "netstat_messages_write";
        await this.#c.storage.incr([key], count);
      },
    };
  }
}
