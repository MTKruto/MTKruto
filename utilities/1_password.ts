import * as types from "../tl/2_types.ts";
import { bufferFromBigInt, concat, sha256 } from "../utilities/0_buffer.ts";
import { bigIntFromBuffer, getRandomBigInt, mod, modExp } from "./0_bigint.ts";

export function isSafePrime(primeBytes: Uint8Array, g: number) {
  // deno-fmt-ignore
  const goodPrime = new Uint8Array([
      0xc7, 0x1c, 0xae, 0xb9, 0xc6, 0xb1, 0xc9, 0x04, 0x8e, 0x6c, 0x52, 0x2f,
      0x70, 0xf1, 0x3f, 0x73, 0x98, 0x0d, 0x40, 0x23, 0x8e, 0x3e, 0x21, 0xc1,
      0x49, 0x34, 0xd0, 0x37, 0x56, 0x3d, 0x93, 0x0f, 0x48, 0x19, 0x8a, 0x0a,
      0xa7, 0xc1, 0x40, 0x58, 0x22, 0x94, 0x93, 0xd2, 0x25, 0x30, 0xf4, 0xdb,
      0xfa, 0x33, 0x6f, 0x6e, 0x0a, 0xc9, 0x25, 0x13, 0x95, 0x43, 0xae, 0xd4,
      0x4c, 0xce, 0x7c, 0x37, 0x20, 0xfd, 0x51, 0xf6, 0x94, 0x58, 0x70, 0x5a,
      0xc6, 0x8c, 0xd4, 0xfe, 0x6b, 0x6b, 0x13, 0xab, 0xdc, 0x97, 0x46, 0x51,
      0x29, 0x69, 0x32, 0x84, 0x54, 0xf1, 0x8f, 0xaf, 0x8c, 0x59, 0x5f, 0x64,
      0x24, 0x77, 0xfe, 0x96, 0xbb, 0x2a, 0x94, 0x1d, 0x5b, 0xcd, 0x1d, 0x4a,
      0xc8, 0xcc, 0x49, 0x88, 0x07, 0x08, 0xfa, 0x9b, 0x37, 0x8e, 0x3c, 0x4f,
      0x3a, 0x90, 0x60, 0xbe, 0xe6, 0x7c, 0xf9, 0xa4, 0xa4, 0xa6, 0x95, 0x81,
      0x10, 0x51, 0x90, 0x7e, 0x16, 0x27, 0x53, 0xb5, 0x6b, 0x0f, 0x6b, 0x41,
      0x0d, 0xba, 0x74, 0xd8, 0xa8, 0x4b, 0x2a, 0x14, 0xb3, 0x14, 0x4e, 0x0e,
      0xf1, 0x28, 0x47, 0x54, 0xfd, 0x17, 0xed, 0x95, 0x0d, 0x59, 0x65, 0xb4,
      0xb9, 0xdd, 0x46, 0x58, 0x2d, 0xb1, 0x17, 0x8d, 0x16, 0x9c, 0x6b, 0xc4,
      0x65, 0xb0, 0xd6, 0xff, 0x9c, 0xa3, 0x92, 0x8f, 0xef, 0x5b, 0x9a, 0xe4,
      0xe4, 0x18, 0xfc, 0x15, 0xe8, 0x3e, 0xbe, 0xa0, 0xf8, 0x7f, 0xa9, 0xff,
      0x5e, 0xed, 0x70, 0x05, 0x0d, 0xed, 0x28, 0x49, 0xf4, 0x7b, 0xf9, 0x59,
      0xd9, 0x56, 0x85, 0x0c, 0xe9, 0x29, 0x85, 0x1f, 0x0d, 0x81, 0x15, 0xf6,
      0x35, 0xb1, 0x05, 0xee, 0x2e, 0x4e, 0x15, 0xd0, 0x4b, 0x24, 0x54, 0xbf,
      0x6f, 0x4f, 0xad, 0xf0, 0x34, 0xb1, 0x04, 0x03, 0x11, 0x9c, 0xd8, 0xe3,
      0xb9, 0x2f, 0xcc, 0x5b,
  ]);
  if (goodPrime.every((v, i) => v == primeBytes[i])) {
    if ([3, 4, 5, 7].includes(g)) { // It's good
      return true;
    }
  }
  return false;
}

// H(data) := sha256(data)
export const h = sha256;

// SH(data, salt) := H(salt | data | salt)
export const sh = (data: Uint8Array, salt: Uint8Array) => h(concat(salt, data, salt));

// PH1(password, salt1, salt2) := SH(SH(password, salt1), salt2)
export const ph1 = async (password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) => await sh(await sh(password, salt1), salt2);

export async function pbkdf2(password: Uint8Array, salt: Uint8Array, iterations: number) {
  const key = await window.crypto.subtle.importKey("raw", password, "PBKDF2", false, ["deriveBits"]);
  const buffer = await window.crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations, hash: "SHA-512" }, key, 512);
  return new Uint8Array(buffer);
}

// PH2(password, salt1, salt2) := SH(pbkdf2(sha512, PH1(password, salt1, salt2), salt1, 100000), salt2)
export const ph2 = async (password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) => await sh(await pbkdf2(await ph1(password, salt1, salt2), salt1, 100_000), salt2);

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
    return concat(new Uint8Array(256 - bigint.length), bigint);
  }
}

export async function checkPassword(password: Uint8Array, ap: types.AccountPassword) {
  const algo = ap.currentAlgo;
  if (
    !(algo instanceof
      types.PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow)
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

  const srpB = ap.srpB;
  const srpId = ap.srpId;
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
  const k = bigIntFromBuffer(await h(concat(pad(p), pad(g))), false);

  let u = 0n;
  let a = 0n;
  let gA = 0n;

  for (let i = 0; i < 1_000; i++) {
    a = getRandomBigInt(256, false);
    // g_a := pow(g, a) mod p
    gA = modExp(BigInt(g), a, p);
    if (isGoodModExpFirst(gA, p)) {
      u = bigIntFromBuffer(await sha256(concat(pad(gA), pad(gB))), false);
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
  const m1 = await h(concat(
    (await h(pad(p))).map((v, i) => v ^ hG[i]),
    await h(salt1),
    await h(salt2),
    pad(gA),
    pad(gB),
    kA,
  ));

  return new types.InputCheckPasswordSRP({
    srpId: srpId,
    A: pad(gA),
    M1: m1,
  });
}
