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
export function bufferFromBigInt(bigIntVar: bigint | number, bytesNumber: number, little = true, signed = false) {
  bigIntVar = BigInt(typeof bigIntVar === "number" ? Math.ceil(bigIntVar) : bigIntVar);
  const bitLength = bigIntVar.toString(2).length;

  const bytes = Math.ceil(bitLength / 8);

  if (bytesNumber < bytes) {
    throw new Error("OverflowError: int too big to convert");
  }

  if (!signed && bigIntVar < 0n) {
    throw new Error("Cannot convert to unsigned");
  }

  let below = false;
  if (bigIntVar < 0n) {
    below = true;
    bigIntVar = bigIntVar < 0 ? bigIntVar * -1n : bigIntVar;
  }

  const hex = bigIntVar.toString(16).padStart(bytesNumber * 2, "0");
  const buffer = bufferFromHexString(hex);

  if (signed && below) {
    buffer[buffer.length - 1] = 256 -
      buffer[buffer.length - 1];
    for (let i = 0; i < buffer.length - 1; i++) {
      buffer[i] = 255 - buffer[i];
    }
  }

  if (little) {
    buffer.reverse();
  }

  return buffer;
}
