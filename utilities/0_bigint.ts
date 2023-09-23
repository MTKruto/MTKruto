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

export function mod(n: bigint, m: bigint):  bigint
export function mod(n: number, m: number): number 
export function mod(n: bigint|number, m: bigint|number) {
  // @ts-ignore: TODO: do sth
  return ((n % m) + m) % m;
}

export function bigIntFromBuffer(buffer: Uint8Array, little = true, signed = false) {
  let randomBuffer = buffer;
  const bytesLength = randomBuffer.length;

  if (little) {
    randomBuffer = randomBuffer.reverse();
  }

  let bigIntVar = BigInt("0x" + [...randomBuffer].map((v) => v.toString(16).padStart(2, "0")).join(""));

  if (signed && Math.floor(bigIntVar.toString(2).length / 8) >= bytesLength) {
    bigIntVar = bigIntVar - (2n ** (BigInt(bytesLength * 8)));
  }

  return bigIntVar;
}

export function getRandomBigInt(byteLength: number, little?: boolean, signed?: boolean) {
  const randomBytes = new Uint8Array(byteLength);
  crypto.getRandomValues(randomBytes);
  return bigIntFromBuffer(randomBytes, little, signed);
}

export function getRandomId() {
  return getRandomBigInt(8, true, true);
}
