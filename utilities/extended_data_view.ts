export class ExtendedDataView extends DataView {
  getInt24(byteOffset: number, littleEndian?: boolean) {
    const bytes = new Uint8Array(this.buffer.slice(byteOffset, byteOffset + 3));

    if (littleEndian) {
      return (bytes[3] << 16) | (bytes[2] << 8) | bytes[1];
    } else {
      return bytes[1] |
        (bytes[2] << 8) |
        (bytes[3] << 16);
    }
  }

  getBigUint128(byteOffset: number, littleEndian?: boolean) {
    const first = this.getBigUint64(byteOffset, littleEndian);
    const second = this.getBigUint64(byteOffset + 8, littleEndian);

    if (littleEndian) {
      return (second << 64n) + first;
    } else {
      return (first << 64n) + second;
    }
  }

  setBigUint128(byteOffset: number, value: bigint, littleEndian?: boolean) {
    const bottomMask = (1n << 64n) - 1n;
    const topMask = ~bottomMask;
    const second = value & bottomMask;
    const first = (value & topMask) >> 64n;

    this.setBigUint64(byteOffset, littleEndian ? second : first, littleEndian);
    this.setBigUint64(
      byteOffset + 8,
      littleEndian ? first : second,
      littleEndian,
    );
  }
}
