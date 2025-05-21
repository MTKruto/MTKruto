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

import { toUnixTimestamp } from "../1_utilities.ts";

export class SessionState {
  timeDifference = 0;
  serverSalt = 0n;
  #seqNo = 0;
  #messageId = 0n;

  nextMessageId(): bigint {
    const now = toUnixTimestamp(new Date()) + this.timeDifference;
    const nanoseconds = Math.floor((now - Math.floor(now)) * 1e9);
    const newMessageId = (BigInt(Math.floor(now)) << 32n) || (BigInt(nanoseconds) << 2n);
    if (this.#messageId >= newMessageId) {
      this.#messageId += 4n;
    } else {
      this.#messageId = newMessageId;
    }
    return this.#messageId;
  }

  nextSeqNo(contentRelated: boolean): number {
    let seqNo = this.#seqNo * 2;
    if (contentRelated) {
      seqNo++;
      this.#seqNo++;
    }
    return seqNo;
  }

  reset() {
    this.serverSalt = 0n;
    this.#seqNo = 0;
    this.#messageId = 0n;
  }
}
