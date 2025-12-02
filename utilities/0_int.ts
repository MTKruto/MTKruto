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

/**
 * Additional parameters for { @link intFromBytes }.
 */
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
  const bytesLength = bytes.length;

  if (byteOrder === "little") {
    bytes = bytes.toReversed();
  }

  let bigIntVar = BigInt("0x" + [...bytes].map((v) => v.toString(16).padStart(2, "0")).join(""));

  if (isSigned && Math.floor(bigIntVar.toString(2).length / 8) >= bytesLength) {
    bigIntVar = bigIntVar - (2n ** (BigInt(bytesLength * 8)));
  }

  return bigIntVar;
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
    return Number(getRandomInt(4, true));
  } else {
    return getRandomInt(8, true);
  }
}

export function gcd(a: bigint, b: bigint) {
  if (a === 0n) {
    return b;
  }

  while ((a & 1n) === 0n) {
    a >>= 1n;
  }

  while (true) {
    if (a > b) {
      a = (a - b) >> 1n;
      while ((a & 1n) === 0n) {
        a >>= 1n;
      }
    } else if (b > a) {
      b = (b - a) >> 1n;
      while ((b & 1n) === 0n) {
        b >>= 1n;
      }
    } else {
      return a;
    }
  }
}

const bufferFromHexString = (hexString: string) => Uint8Array.from(hexString.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)));

/** Additional parameters for { @link intToBuffer }. */
export interface BufferFromBigintParams {
  /** The byte order to use for the representation. Defaults to `little`. */
  byteOrder?: ByteOrder;
  /** Whether the integer is a signed one. Defaults to `true`. */
  isSigned?: boolean;
  /** The path to the integer in the TL schema. Unspecified by default. */
  path?: string;
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
  path = "",
}: BufferFromBigintParams = {}): Uint8Array<ArrayBuffer> {
  const actualByteCount = Math.ceil(int.toString(2).length / 8);
  if (byteCount < actualByteCount) {
    throw new TLError(`The provided integer is too big for int${byteCount * 8}`, path);
  }

  if (byteCount === 4 || byteCount === 2) { // fast path
    const buffer = new Uint8Array(byteCount);
    const dataView = new DataView(buffer.buffer);
    (byteCount === 2 ? isSigned ? dataView.setInt16 : dataView.setUint16 : isSigned ? dataView.setInt32 : dataView.setUint32).call(dataView, 0, Number(int), byteOrder === "little");
    return buffer;
  }

  int = BigInt(typeof int === "number" ? Math.ceil(int) : int);
  if (byteCount === 8) { // fast path
    const buffer = new Uint8Array(byteCount);
    const dataView = new DataView(buffer.buffer);
    (isSigned ? dataView.setBigInt64 : dataView.setBigUint64).call(dataView, 0, int, byteOrder === "little");
    return buffer;
  }
  if (!isSigned && int < 0n) {
    throw new TLError("Received a signed integer while an unsigned one was expected", path);
  }

  if (isSigned && int < 0n) {
    int = 2n ** BigInt(byteCount * 8) + int;
  }

  const hex = int.toString(16).padStart(byteCount * 2, "0");
  const buffer = bufferFromHexString(hex);

  if (byteOrder === "little") {
    buffer.reverse();
  }

  return buffer;
}
