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

import { bigIntFromBuffer } from "../1_utilities.ts";

export class TLError extends Error {
  //
}

export class TLRawReader {
  constructor(protected _buffer: Uint8Array) {
  }

  get buffer(): Uint8Array {
    return this._buffer;
  }

  read(count: number): Uint8Array {
    if (this._buffer.length < count) {
      throw new TLError("No data remaining");
    }
    const buffer = this._buffer.slice(0, count);
    this._buffer = this._buffer.subarray(count);
    return buffer;
  }

  unread(count: number) {
    const newOffest = this._buffer.byteOffset - count;
    if (newOffest < 0) {
      throw new TLError("No data has been read");
    }
    this._buffer = new Uint8Array(this._buffer.buffer, newOffest);
  }

  readInt24(signed = true): number {
    const buffer = this.read(24 / 8);
    return Number(bigIntFromBuffer(buffer, true, signed));
  }

  readInt32(signed = true): number {
    const buffer = this.read(32 / 8);
    return Number(bigIntFromBuffer(buffer, true, signed));
  }

  unreadInt32() {
    this.unread(32 / 8);
  }

  readInt64(signed = true): bigint {
    const buffer = this.read(64 / 8);
    return bigIntFromBuffer(buffer, true, signed);
  }

  readDouble(): number {
    const buffer = this.read(8);
    return new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).getFloat64(0, true);
  }

  readInt128(signed = true): bigint {
    const buffer = this.read(128 / 8);
    return bigIntFromBuffer(buffer, true, signed);
  }

  readInt256(signed = true): bigint {
    const buffer = this.read(256 / 8);
    return bigIntFromBuffer(buffer, true, signed);
  }

  readBytes(): Uint8Array {
    let L = this.read(1)[0];
    let padding: number;
    if (L > 253) {
      L = this.readInt24();
      padding = L % 4;
    } else {
      padding = (L + 1) % 4;
    }
    const bytes = this.read(L);
    if (padding > 0) {
      padding = 4 - padding;
      this.read(padding);
    }
    return bytes;
  }

  readString(): string {
    return new TextDecoder().decode(this.readBytes());
  }
}
