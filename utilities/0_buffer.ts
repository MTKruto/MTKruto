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

export function concat(...buffers: [Uint8Array, Uint8Array, ...Uint8Array[]]) {
  let length = 0;
  for (const b of buffers) {
    length += b.length;
  }

  const buffer = new Uint8Array(length);
  let offset = 0;
  for (const b of buffers) {
    buffer.set(b, offset);
    offset += b.length;
  }

  return buffer;
}

const bufferFromHexString = (hexString: string) => Uint8Array.from(hexString.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)));
export function bufferFromBigInt(int: bigint | number, byteCount: number, littleEndian = true, signed = false) {
  const actualByteCount = Math.ceil(int.toString(2).length / 8);
  if (byteCount < actualByteCount) {
    throw new Error("Int too big");
  }

  if (byteCount == 4 || byteCount == 2) { // fast path
    const buffer = new Uint8Array(byteCount);
    const dataView = new DataView(buffer.buffer);
    (byteCount == 2 ? signed ? dataView.setInt16 : dataView.setUint16 : signed ? dataView.setInt32 : dataView.setUint32).call(dataView, 0, Number(int), littleEndian);
    return buffer;
  }

  int = BigInt(typeof int === "number" ? Math.ceil(int) : int);
  if (byteCount == 8) { // fast path
    const buffer = new Uint8Array(byteCount);
    const dataView = new DataView(buffer.buffer);
    (signed ? dataView.setBigInt64 : dataView.setBigUint64).call(dataView, 0, int, littleEndian);
    return buffer;
  }
  if (!signed && int < 0n) {
    throw new Error("Got unexpected signed int");
  }

  if (signed && int < 0n) {
    int = 2n ** BigInt(byteCount * 8) + int;
  }

  const hex = int.toString(16).padStart(byteCount * 2, "0");
  const buffer = bufferFromHexString(hex);

  if (littleEndian) {
    buffer.reverse();
  }

  return buffer;
}
