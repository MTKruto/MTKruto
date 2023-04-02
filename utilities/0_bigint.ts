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

const getRandomByte = () => BigInt(Math.floor(Math.random() * 0xff));
export function getRandomBigInt(byteLength: number) {
  let int = getRandomByte();
  for (let i = 0; i < byteLength; i++) {
    int <<= 8n;
    int |= getRandomByte();
  }
  return int;
}
