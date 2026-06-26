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

import type { NetworkStatistics } from "../3_types.ts";
import { drop } from "../utilities/0_misc.ts";
import { getLogger, type Logger } from "../utilities/1_logger.ts";
import type { C } from "./1_types.ts";

export class NetworkStatisticsManager {
  #c: C;
  #L: Logger;

  constructor(c: C) {
    this.#c = c;
    this.#L = getLogger("NetworkStatisticsManager");
  }

  async getNetworkStatistics(): Promise<NetworkStatistics> {
    const [messagesRead, messagesWrite, mediaRead, mediaWrite] = await Promise.all([
      this.#c.storage.get<number>(["netstat_messages_read"]),
      this.#c.storage.get<number>(["netstat_messages_write"]),
      this.#c.storage.get<number>(["netstat_media_read"]),
      this.#c.storage.get<number>(["netstat_media_write"]),
    ]);
    const messages = {
      sent: Number(messagesWrite || 0),
      received: Number(messagesRead || 0),
    };
    const media = {
      sent: Number(mediaWrite || 0),
      received: Number(mediaRead || 0),
    };
    return { messages, media };
  }

  #pendingWrites: Record<string, number> = {};
  getTransportReadWriteCallback(isMedia: boolean): { read: (count: number) => void; write: (count: number) => void } {
    return {
      read: (count: number) => {
        const key = isMedia ? "netstat_media_read" : "netstat_messages_read";
        this.#pendingWrites[key] = (this.#pendingWrites[key] ?? 0) + count;
        drop(this.#write());
      },
      write: (count: number) => {
        const key = isMedia ? "netstat_media_write" : "netstat_messages_write";
        this.#pendingWrites[key] = (this.#pendingWrites[key] ?? 0) + count;
        drop(this.#write());
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
