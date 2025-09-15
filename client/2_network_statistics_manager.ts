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

import { getLogger, type Logger } from "../utilities/1_logger.ts";
import type { C } from "./1_types.ts";

export class NetworkStatisticsManager {
  #c: C;
  #L: Logger;

  constructor(c: C) {
    this.#c = c;
    this.#L = getLogger("NetworkStatisticsManager");
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

  #pendingWrites: Record<string, number> = {};
  getTransportReadWriteCallback(cdn: boolean) {
    return {
      read: (count: number) => {
        const key = cdn ? "netstat_cdn_read" : "netstat_messages_read";
        this.#pendingWrites[key] = (this.#pendingWrites[key] ?? 0) + count;
        this.#write();
      },
      write: (count: number) => {
        const key = cdn ? "netstat_cdn_write" : "netstat_messages_write";
        this.#pendingWrites[key] = (this.#pendingWrites[key] ?? 0) + count;
        this.#write();
      },
    };
  }

  #writing = false;
  async #write() {
    if (this.#writing) {
      return;
    }
    this.#writing = true;
    for (const [k, v] of Object.entries(this.#pendingWrites)) {
      if (v < 1) {
        continue;
      }
      try {
        await this.#c.messageStorage.incr([k], v);
        this.#pendingWrites[k] -= v;
      } catch (err) {
        this.#L.error("write failed:", err);
      }
    }
    this.#writing = false;
  }
}
