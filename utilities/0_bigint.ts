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
    if (leastSignificantBit == 1n) {
      result *= x;
      result %= n;
    }
    x *= x;
    x %= n;
  }
  return result;
}

export function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function bigIntFromBuffer(bytes: Uint8Array) {
  return BigInt(
    "0x" +
      [...bytes].map((v) => v.toString(16).padStart(2, "0")).join(""),
  );
}

export function getRandomBigInt(byteLength: number) {
  const randomBytes = new Uint8Array(byteLength);
  crypto.getRandomValues(randomBytes);
  return bigIntFromBuffer(randomBytes);
}
