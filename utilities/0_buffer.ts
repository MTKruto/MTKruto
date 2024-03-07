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
export function bufferFromBigInt(int: bigint | number, bytesNumber: number, little = true, signed = false) {
  int = BigInt(typeof int === "number" ? Math.ceil(int) : int);
  if (bytesNumber == 8) {
    const buffer = new Uint8Array(bytesNumber);
    const dv = new DataView(buffer.buffer);
    signed ? dv.setBigInt64(0, int, little) : dv.setBigUint64(0, int, little);
    return buffer;
  }
  const bytes = Math.ceil(int.toString(2).length / 8);

  if (bytesNumber < bytes) {
    throw new Error("Int too big");
  }

  if (!signed && int < 0n) {
    throw new Error("Expected unsigned");
  }

  if (signed && int < 0n) {
    int = 2n ** BigInt(bytes * 8) + int;
  }

  const hex = int.toString(16).padStart(bytesNumber * 2, "0");
  const buffer = bufferFromHexString(hex);

  if (little) {
    buffer.reverse();
  }

  return buffer;
}
