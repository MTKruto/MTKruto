import { concat, decodeHex } from "../0_deps.ts";
import { hmacSha256, intFromBytes, intToBytes, modExp } from "../1_utilities.ts";

export async function getTlsHeader(secret: Uint8Array<ArrayBuffer>) {
  const array = serializeOps(ops, secret.slice(16));
  secret = secret.slice(0, 16);
  secret = await hmacSha256(array, secret);
  array.set(secret.slice(0), 11);
  const dataView = new DataView(array.buffer);
  const old = dataView.getInt32(39, true);
  dataView.setInt32(39, old ^ Math.floor(Date.now() / 1000), true);
  return array;
}

type Op =
  | { type: "string"; data: Uint8Array }
  | { type: "random"; length: number }
  | { type: "zero"; length: number }
  | { type: "domain" }
  | { type: "grease"; seed: number }
  | { type: "key" }
  | { type: "beginScope" }
  | { type: "endScope" }
  | { type: "padding" };

const ops: Op[] = [
  { type: "string", data: new Uint8Array([0x16, 0x03, 0x01, 0x02, 0x00, 0x01, 0x00, 0x01, 0xfc, 0x03, 0x03]) },
  { type: "zero", length: 32 },
  { type: "string", data: new Uint8Array([0x20]) },
  { type: "random", length: 32 },
  { type: "string", data: new Uint8Array([0x00, 0x2a]) },
  { type: "grease", seed: 0 },
  { type: "string", data: new Uint8Array([0x13, 0x01, 0x13, 0x02, 0x13, 0x03, 0xc0, 0x2c, 0xc0, 0x2b, 0xcc, 0xa9, 0xc0, 0x30, 0xc0, 0x2f, 0xcc, 0xa8, 0xc0, 0x0a, 0xc0, 0x09, 0xc0, 0x14, 0xc0, 0x13, 0x00, 0x9d, 0x00, 0x9c, 0x00, 0x35, 0x00, 0x2f, 0xc0, 0x08, 0xc0, 0x12, 0x00, 0x0a, 0x01, 0x00, 0x01, 0x89]) },
  { type: "grease", seed: 2 },
  { type: "string", data: new Uint8Array([0x00, 0x00, 0x00, 0x00]) },
  { type: "beginScope" },
  { type: "beginScope" },
  { type: "string", data: new Uint8Array([0x00]) },
  { type: "beginScope" },
  { type: "domain" },
  { type: "endScope" },
  { type: "endScope" },
  { type: "endScope" },
  { type: "string", data: new Uint8Array([0x00, 0x17, 0x00, 0x00, 0xff, 0x01, 0x00, 0x01, 0x00, 0x00, 0x0a, 0x00, 0x0c, 0x00, 0x0a]) },
  { type: "grease", seed: 4 },
  { type: "string", data: new Uint8Array([0x00, 0x1d, 0x00, 0x17, 0x00, 0x18, 0x00, 0x19, 0x00, 0x0b, 0x00, 0x02, 0x01, 0x00, 0x00, 0x10, 0x00, 0x0e, 0x00, 0x0c, 0x02, 0x68, 0x32, 0x08, 0x68, 0x74, 0x74, 0x70, 0x2f, 0x31, 0x2e, 0x31, 0x00, 0x05, 0x00, 0x05, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0d, 0x00, 0x16, 0x00, 0x14, 0x04, 0x03, 0x08, 0x04, 0x04, 0x01, 0x05, 0x03, 0x08, 0x05, 0x08, 0x05, 0x05, 0x01, 0x08, 0x06, 0x06, 0x01, 0x02, 0x01, 0x00, 0x12, 0x00, 0x00, 0x00, 0x33, 0x00, 0x2b, 0x00, 0x29]) },
  { type: "grease", seed: 4 },
  { type: "string", data: new Uint8Array([0x00, 0x01, 0x00, 0x00, 0x1d, 0x00, 0x20]) },
  { type: "key" },
  { type: "string", data: new Uint8Array([0x00, 0x2d, 0x00, 0x02, 0x01, 0x01, 0x00, 0x2b, 0x00, 0x0b, 0x0a]) },
  { type: "grease", seed: 6 },
  { type: "string", data: new Uint8Array([0x03, 0x04, 0x03, 0x03, 0x03, 0x02, 0x03, 0x01, 0x00, 0x1b, 0x00, 0x03, 0x02, 0x00, 0x01]) },
  { type: "grease", seed: 3 },
  { type: "string", data: new Uint8Array([0x00, 0x01, 0x00]) },
  { type: "padding" },
];

function getGrease() {
  const res = crypto.getRandomValues(new Uint8Array(7));

  for (let i = 0; i < res.length; ++i) {
    res[i] = (res[i] & 0xF0) + 0x0A;
  }

  for (let i = 1; i < res.length; i += 2) {
    if (res[i] === res[i - 1]) {
      res[i] ^= 0x10;
    }
  }

  return res;
}

function getY2(x: bigint, mod: bigint) {
  let y = (x + 486662n) % mod;
  y = y * x % mod;
  y = (y + 1n) % mod;
  return y * x % mod;
}

function getDoubleX(x: bigint, mod: bigint): bigint {
  const y2 = getY2(x, mod);
  const denominator = (4n * y2) % mod;

  let numerator = (x * x % mod - 1n + mod) % mod;
  numerator = (numerator * numerator) % mod;

  const denominatorInv = modExp(denominator, mod - 2n, mod);
  numerator = (numerator * denominatorInv) % mod;

  return numerator;
}

function isQuadraticResidue(a: bigint) {
  const mod = 2n ** 255n - 19n;
  const pow = 2n ** 254n - 10n;
  const r = modExp(a, pow, mod);
  return r === 1n;
}

function serializeOps(ops: Op[], domain: Uint8Array) {
  const GREASE = getGrease();
  let buffer = new Uint8Array();
  const scopes = new Array<number>();

  function serializeOp(op: Op) {
    switch (op.type) {
      case "string":
        buffer = concat([buffer, op.data]);
        break;
      case "random":
        buffer = concat([
          buffer,
          crypto.getRandomValues(new Uint8Array(op.length)),
        ]);
        break;
      case "zero":
        buffer = concat([buffer, new Uint8Array(op.length)]);
        break;
      case "domain":
        buffer = concat([buffer, domain]);
        break;
      case "grease": {
        const grease = GREASE[op.seed];
        buffer = concat([buffer, new Uint8Array([grease, grease])]);
        break;
      }
      case "key": {
        const mod = intFromBytes(
          decodeHex(
            "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed",
          ),
          { byteOrder: "big", isSigned: false },
        );
        let key = new Uint8Array(32);
        while (true) {
          crypto.getRandomValues(key);
          key[31] &= 127;
          let x = intFromBytes(key, { byteOrder: "big", isSigned: false });
          const y = getY2(x, mod);
          if (isQuadraticResidue(y)) {
            for (let i = 0; i < 3; ++i) {
              x = getDoubleX(x, mod);
            }
            key = intToBytes(x, 32, { byteOrder: "little", isSigned: false });
            break;
          }
        }
        buffer = concat([buffer, key]);
        break;
      }
      case "beginScope":
        scopes.push(buffer.length);
        buffer = concat([buffer, new Uint8Array([0, 0])]);
        break;
      case "endScope": {
        const beginOffset = scopes.pop();
        if (beginOffset === undefined) {
          throw new TypeError("Invalid endScope");
        }
        const endOffset = buffer.length;
        const size = endOffset - beginOffset - 2;
        new DataView(buffer.buffer).setUint16(beginOffset, size);
        break;
      }
      case "padding": {
        const size = 513 - buffer.length;
        if (size > 0) {
          serializeOp({ type: "string", data: new Uint8Array([0x00, 0x15]) });
          serializeOp({ type: "beginScope" });
          serializeOp({ type: "zero", length: size });
          serializeOp({ type: "endScope" });
        }
      }
    }
  }

  for (const op of ops) {
    serializeOp(op);
  }

  return buffer;
}
