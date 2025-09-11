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

import { concat } from "../0_deps.ts";
import { bigIntFromBuffer, bufferFromBigInt, encodeText, getRandomBigInt, mod, modExp, sha256 } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";

export function isSafePrime(primeBytes: Uint8Array, g: number) {
  // deno-fmt-ignore
  const goodPrime = new Uint8Array([
      0xC7, 0x1C, 0xAE, 0xB9, 0xC6, 0xB1, 0xC9, 0x04, 0x8E, 0x6C, 0x52, 0x2F,
      0x70, 0xF1, 0x3F, 0x73, 0x98, 0x0D, 0x40, 0x23, 0x8E, 0x3E, 0x21, 0xC1,
      0x49, 0x34, 0xD0, 0x37, 0x56, 0x3D, 0x93, 0x0F, 0x48, 0x19, 0x8A, 0x0A,
      0xA7, 0xC1, 0x40, 0x58, 0x22, 0x94, 0x93, 0xD2, 0x25, 0x30, 0xF4, 0xDB,
      0xFA, 0x33, 0x6F, 0x6E, 0x0A, 0xC9, 0x25, 0x13, 0x95, 0x43, 0xAE, 0xD4,
      0x4C, 0xCE, 0x7C, 0x37, 0x20, 0xFD, 0x51, 0xF6, 0x94, 0x58, 0x70, 0x5A,
      0xC6, 0x8C, 0xD4, 0xFE, 0x6B, 0x6B, 0x13, 0xAB, 0xDC, 0x97, 0x46, 0x51,
      0x29, 0x69, 0x32, 0x84, 0x54, 0xF1, 0x8F, 0xAF, 0x8C, 0x59, 0x5F, 0x64,
      0x24, 0x77, 0xFE, 0x96, 0xBB, 0x2A, 0x94, 0x1D, 0x5B, 0xCD, 0x1D, 0x4A,
      0xC8, 0xCC, 0x49, 0x88, 0x07, 0x08, 0xFA, 0x9B, 0x37, 0x8E, 0x3C, 0x4F,
      0x3A, 0x90, 0x60, 0xBE, 0xE6, 0x7C, 0xF9, 0xA4, 0xA4, 0xA6, 0x95, 0x81,
      0x10, 0x51, 0x90, 0x7E, 0x16, 0x27, 0x53, 0xB5, 0x6B, 0x0F, 0x6B, 0x41,
      0x0D, 0xBA, 0x74, 0xD8, 0xA8, 0x4B, 0x2A, 0x14, 0xB3, 0x14, 0x4E, 0x0E,
      0xF1, 0x28, 0x47, 0x54, 0xFD, 0x17, 0xED, 0x95, 0x0D, 0x59, 0x65, 0xB4,
      0xB9, 0xDD, 0x46, 0x58, 0x2D, 0xB1, 0x17, 0x8D, 0x16, 0x9C, 0x6B, 0xC4,
      0x65, 0xB0, 0xD6, 0xFF, 0x9C, 0xA3, 0x92, 0x8F, 0xEF, 0x5B, 0x9A, 0xE4,
      0xE4, 0x18, 0xFC, 0x15, 0xE8, 0x3E, 0xBE, 0xA0, 0xF8, 0x7F, 0xA9, 0xFF,
      0x5E, 0xED, 0x70, 0x05, 0x0D, 0xED, 0x28, 0x49, 0xF4, 0x7B, 0xF9, 0x59,
      0xD9, 0x56, 0x85, 0x0C, 0xE9, 0x29, 0x85, 0x1F, 0x0D, 0x81, 0x15, 0xF6,
      0x35, 0xB1, 0x05, 0xEE, 0x2E, 0x4E, 0x15, 0xD0, 0x4B, 0x24, 0x54, 0xBF,
      0x6F, 0x4F, 0xAD, 0xF0, 0x34, 0xB1, 0x04, 0x03, 0x11, 0x9C, 0xD8, 0xE3,
      0xB9, 0x2F, 0xCC, 0x5B,
  ]);
  if (goodPrime.every((v, i) => v === primeBytes[i])) {
    if ([3, 4, 5, 7].includes(g)) {
      return true;
    }
  }
  return false;
}

// H(data) := sha256(data)
export const h = sha256;

// SH(data, salt) := H(salt | data | salt)
export const sh = (data: Uint8Array, salt: Uint8Array) => h(concat([salt, data, salt]));

// PH1(password, salt1, salt2) := SH(SH(password, salt1), salt2)
export const ph1 = async (password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) => await sh(await sh(password, salt1), salt2);

export async function pbkdf2(password: Uint8Array<ArrayBuffer>, salt: Uint8Array<ArrayBuffer>, iterations: number) {
  const key = await crypto.subtle.importKey("raw", password, "PBKDF2", false, ["deriveBits"]);
  const buffer = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations, hash: "SHA-512" }, key, 512);
  return new Uint8Array(buffer);
}

// PH2(password, salt1, salt2) := SH(pbkdf2(sha512, PH1(password, salt1, salt2), salt1, 100000), salt2)
export const ph2 = async (password: Uint8Array, salt1: Uint8Array<ArrayBuffer>, salt2: Uint8Array) => await sh(await pbkdf2(await ph1(password, salt1, salt2), salt1, 100_000), salt2);

export function isGoodModExpFirst(
  modexp: bigint,
  prime: bigint,
) {
  const diff = prime - modexp;
  const minDiffBitsCount = 2048 - 64;
  const maxModExpSize = 256;
  return !(
    diff < 0n ||
    diff.toString(2).length < minDiffBitsCount ||
    modexp.toString(2).length < minDiffBitsCount ||
    Math.floor((modexp.toString(2).length + 7) / 8) > maxModExpSize
  );
}

export function pad(bigint: number | bigint | Uint8Array) {
  if (typeof bigint === "number") {
    bigint = BigInt(bigint);
  }
  if (typeof bigint === "bigint") {
    return bufferFromBigInt(bigint, 256, false);
  } else {
    return concat([new Uint8Array(256 - bigint.length), bigint]);
  }
}

export async function checkPassword(password_: string, ap: Api.account_Password): Promise<Api.inputCheckPasswordSRP> {
  const password = encodeText(password_);
  const algo = ap.current_algo;
  if (
    !(Api.is("passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow", algo))
  ) {
    throw new Error("Unexpected algorithm");
  }

  // g := algo.g
  const g = algo.g;
  // p := algo.p
  const p = bigIntFromBuffer(algo.p, false);
  if (!isSafePrime(algo.p, g)) {
    throw new Error("Got unsafe prime");
  }

  const srpB = ap.srp_B;
  const srpId = ap.srp_id;
  {
    if (!srpB) {
      throw new Error("srbB is not set");
    }
    if (!srpId) {
      throw new Error("srpId is not set");
    }
  }

  // salt1 := algo.salt1
  const salt1 = algo.salt1;

  // salt2 := algo.salt2
  const salt2 = algo.salt2;

  // g_b := srp_B
  const gB = bigIntFromBuffer(srpB, false);

  // k := H(p | g)
  const k = bigIntFromBuffer(await h(concat([pad(p), pad(g)])), false);

  let u = 0n;
  let a = 0n;
  let gA = 0n;

  for (let i = 0; i < 1_000; i++) {
    a = getRandomBigInt(256, false);
    // g_a := pow(g, a) mod p
    gA = modExp(BigInt(g), a, p);
    if (isGoodModExpFirst(gA, p)) {
      u = bigIntFromBuffer(await sha256(concat([pad(gA), pad(gB)])), false);
      if (u > 0n) {
        break;
      }
    }
  }
  if (!a || !u || !gA) {
    throw new Error();
  }

  // x := PH2(password, salt1, salt2)
  const x = bigIntFromBuffer(await ph2(password, salt1, salt2), false);

  // v := pow(g, x) mod p
  const v = modExp(BigInt(g), x, p);

  // k_v := (k * v) mod p
  const kV = mod(k * v, p);

  // t := (g_b - k_v) mod p
  const t = mod(gB - kV, p);

  // s_a := pow(t, a + u * x) mod p
  const sA = modExp(t, a + u * x, p);

  // k_a := H(s_a)
  const kA = await h(pad(sA));

  // M1 := H(H(p) xor H(g) | H(salt1) | H(salt2) | g_a | g_b | k_a)
  const hG = await h(pad(g));
  const m1 = await h(concat([
    (await h(pad(p))).map((v, i) => v ^ hG[i]),
    await h(salt1),
    await h(salt2),
    pad(gA),
    pad(gB),
    kA,
  ]));

  return { _: "inputCheckPasswordSRP", srp_id: srpId, A: pad(gA), M1: m1 };
}
