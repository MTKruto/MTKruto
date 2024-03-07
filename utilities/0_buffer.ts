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
export function bufferFromBigInt(int: bigint | number, byteCount: number, littleEndian = true, signed = false) {
  const actualByteCount = Math.ceil(int.toString(2).length / 8);
  if (byteCount < actualByteCount) {
    throw new Error("Int too big");
  }

  if (byteCount == 4 || byteCount == 2) { // fast path
    const buffer = new Uint8Array(byteCount);
    const dataView = new DataView(buffer.buffer);
    (byteCount == 2 ? signed ? dataView.setInt16 : dataView.setUint16 : signed ? dataView.setInt32 : dataView.setUint32)(0, Number(int), littleEndian);
    return buffer;
  }

  int = BigInt(typeof int === "number" ? Math.ceil(int) : int);
  if (byteCount == 8) { // fast path
    const buffer = new Uint8Array(byteCount);
    const dv = new DataView(buffer.buffer);
    (signed ? dv.setBigInt64 : dv.setBigUint64)(0, int, littleEndian);
    return buffer;
  }
  if (!signed && int < 0n) {
    throw new Error("Got unexpected signed int");
  }

  if (signed && int < 0n) {
    int = 2n ** BigInt(byteCount * 8) + int;
  }

  const hex = int.toString(16).padStart(byteCount * 2, "0");
  const buffer = bufferFromHexString(hex);

  if (littleEndian) {
    buffer.reverse();
  }

  return buffer;
}
