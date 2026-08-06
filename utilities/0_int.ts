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

import { TLError } from "../0_errors.ts";

export type ByteOrder = "little" | "big";

export function modExp(
  a: bigint,
  b: bigint,
  n: bigint,
) {
  a %= n;
  let result = 1n;
  let x = a;
  while (b > 0n) {
    const leastSignificantBit = b % 2n;
    b /= 2n;
    if (leastSignificantBit === 1n) {
      result *= x;
      result %= n;
    }
    x *= x;
    x %= n;
  }
  return result;
}

export function mod(n: bigint, m: bigint): bigint;
export function mod(n: number, m: number): number;
export function mod(n: bigint | number, m: bigint | number) {
  // deno-lint-ignore ban-ts-comment
  // @ts-ignore
  return ((n % m) + m) % m;
}

/** Additional parameters for {@link intFromBytes}. */
export interface IntFromBytesParams {
  /** The byte order of the representation. Defaults to `little`. */
  byteOrder?: ByteOrder;
  /** Whether the integer is a signed one. Defaults to `true`. */
  isSigned?: boolean;
}

/**
 * Creates an integer from its byte representation.
 *
 * @param bytes The byte representation of the integer.
 * @param params Additional parameters.
 */
export function intFromBytes(bytes: Uint8Array, { byteOrder = "little", isSigned = true }: IntFromBytesParams = {}) {
  const byteLength = bytes.byteLength;

  if (byteLength === 0) {
    throw new TypeError("Received an empty byte array.");
  }

  const littleEndian = byteOrder === "little";
  if (byteLength === 1) {
    return BigInt(isSigned && bytes[0] >= 0x80 ? bytes[0] - 0x100 : bytes[0]);
  }
  if (byteLength === 3) {
    const value = littleEndian ? bytes[0] | (bytes[1] << 8) | (bytes[2] << 16) : bytes[2] | (bytes[1] << 8) | (bytes[0] << 16);
    return BigInt(isSigned ? (value << 8) >> 8 : value);
  }
  const dataView = new DataView(bytes.buffer, bytes.byteOffset, byteLength);
  if (byteLength === 2) {
    return BigInt(isSigned ? dataView.getInt16(0, littleEndian) : dataView.getUint16(0, littleEndian));
  }
  if (byteLength === 4) {
    return BigInt(isSigned ? dataView.getInt32(0, littleEndian) : dataView.getUint32(0, littleEndian));
  }
  if (byteLength === 8) {
    return isSigned ? dataView.getBigInt64(0, littleEndian) : dataView.getBigUint64(0, littleEndian);
  }

  let value = 0n;
  if (littleEndian) {
    let i = byteLength;
    while (i >= 8) {
      i -= 8;
      value = (value << 64n) | dataView.getBigUint64(i, true);
    }
    for (i--; i >= 0; i--) {
      value = (value << 8n) | BigInt(bytes[i]);
    }
  } else {
    let i = 0;
    while (i + 8 <= byteLength) {
      value = (value << 64n) | dataView.getBigUint64(i);
      i += 8;
    }
    for (; i < byteLength; i++) {
      value = (value << 8n) | BigInt(bytes[i]);
    }
  }

  const mostSignificantByte = bytes[littleEndian ? byteLength - 1 : 0];
  return isSigned && (mostSignificantByte & 0x80) !== 0 ? value - (1n << BigInt(byteLength * 8)) : value;
}

/**
 * Generates a random integer of an arbitrary size.
 *
 * @param isSigned Whether to allow signed integers. Defaults to `true`.
 */
export function getRandomInt(byteLength: number, isSigned = true) {
  const randomBytes = new Uint8Array(byteLength);
  crypto.getRandomValues(randomBytes);
  return intFromBytes(randomBytes, { isSigned });
}

/**
 * Generates a random ID. Useful when interacting with the Telegram API.
 *
 * @param isNumber Whether the ID should be of the type number instead of a bigint.
 */
export function getRandomId(isNumber: true): number;
export function getRandomId(): bigint;
export function getRandomId(isNumber?: boolean): bigint | number {
  if (isNumber) {
    crypto.getRandomValues(getRandomId32);
    return getRandomId32View.getInt32(0, true);
  } else {
    crypto.getRandomValues(getRandomId64);
    return getRandomId64View.getBigInt64(0, true);
  }
}
const getRandomId32 = new Uint8Array(4);
const getRandomId32View = new DataView(getRandomId32.buffer);
const getRandomId64 = new Uint8Array(8);
const getRandomId64View = new DataView(getRandomId64.buffer);

export function gcd(a: bigint, b: bigint) {
  while (b !== 0n) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

/** Additional parameters for {@link intToBuffer}. */
export interface BufferFromBigintParams {
  /** The byte order to use for the representation. Defaults to `little`. */
  byteOrder?: ByteOrder;
  /** Whether the integer is a signed one. Defaults to `true`. */
  isSigned?: boolean;
  /** The path to the integer in the TL schema. Unspecified by default. */
  path?: string[];
}

/**
 * Converts an integer to its byte representation.
 *
 * @param int The integer to convert.
 * @param byteCount The expected size of the integer in bytes.
 * @param params Additional parameters.
 */
export function intToBytes(int: bigint | number, byteCount: number, {
  byteOrder = "little",
  isSigned = true,
  path,
}: BufferFromBigintParams = {}): Uint8Array<ArrayBuffer> {
  if (typeof int === "number" && !Number.isInteger(int)) {
    throw new TLError("Expected an integer.", path ?? []);
  }

  if (!isSigned && int < 0n) {
    throw new TLError("Received a signed integer while an unsigned one was expected.", path ?? []);
  }

  const littleEndian = byteOrder === "little";
  if (byteCount === 1 || byteCount === 3) {
    const limit = typeof int === "number" ? 2 ** (byteCount * 8 - (isSigned ? 1 : 0)) : byteCount === 1 ? isSigned ? 128n : 256n : isSigned ? 0x80_0000n : 0x100_0000n;
    if (int < (isSigned ? -limit : 0) || int >= limit) {
      throw new TLError(`The provided integer is too big for int${byteCount * 8}.`, path ?? []);
    }

    const buffer = new Uint8Array(byteCount);
    const value = Number(int);
    buffer[littleEndian ? 0 : byteCount - 1] = value;
    if (byteCount === 3) {
      buffer[1] = value >>> 8;
      buffer[littleEndian ? 2 : 0] = value >>> 16;
    }
    return buffer;
  }

  const limit = 1n << BigInt(byteCount * 8 - (isSigned ? 1 : 0));
  if (int < (isSigned ? -limit : 0n) || int >= limit) {
    throw new TLError(`The provided integer is too big for int${byteCount * 8}.`, path ?? []);
  }

  const buffer = new Uint8Array(byteCount);
  const dataView = new DataView(buffer.buffer);
  if (byteCount === 2) {
    isSigned ? dataView.setInt16(0, Number(int), littleEndian) : dataView.setUint16(0, Number(int), littleEndian);
    return buffer;
  }
  if (byteCount === 4) {
    isSigned ? dataView.setInt32(0, Number(int), littleEndian) : dataView.setUint32(0, Number(int), littleEndian);
    return buffer;
  }

  int = BigInt(int);
  if (byteCount === 8) {
    isSigned ? dataView.setBigInt64(0, int, littleEndian) : dataView.setBigUint64(0, int, littleEndian);
    return buffer;
  }
  if (isSigned && int < 0n) {
    int = (1n << BigInt(byteCount * 8)) + int;
  }

  if (littleEndian) {
    let i = 0;
    while (i + 8 <= byteCount) {
      dataView.setBigUint64(i, int & 0xFFFF_FFFF_FFFF_FFFFn, true);
      int >>= 64n;
      i += 8;
    }
    for (; i < byteCount; i++) {
      buffer[i] = Number(int & 0xFFn);
      int >>= 8n;
    }
  } else {
    let i = byteCount;
    while (i >= 8) {
      i -= 8;
      dataView.setBigUint64(i, int & 0xFFFF_FFFF_FFFF_FFFFn);
      int >>= 64n;
    }
    for (i--; i >= 0; i--) {
      buffer[i] = Number(int & 0xFFn);
      int >>= 8n;
    }
  }
  return buffer;
}
