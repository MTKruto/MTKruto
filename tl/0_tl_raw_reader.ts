import { bigIntFromBuffer } from "../utilities/0_bigint.ts";

export class TLRawReader {
  constructor(private buffer: Uint8Array) {
  }

  read(count: number) {
    if (this.buffer.length < count) {
      throw new Error("No data remaining");
    }
    const buffer = this.buffer.slice(0, count);
    this.buffer = this.buffer.slice(count);
    return buffer;
  }

  readInt24(signed = true) {
    const buffer = this.read(24 / 8);
    return Number(bigIntFromBuffer(buffer, true, signed));
  }

  readInt32(signed = true) {
    const buffer = this.read(32 / 8);
    return Number(bigIntFromBuffer(buffer, true, signed));
  }

  readInt64(signed = true) {
    const buffer = this.read(64 / 8);
    return bigIntFromBuffer(buffer, true, signed);
  }

  readInt128(signed = true) {
    const buffer = this.read(128 / 8);
    return bigIntFromBuffer(buffer, true, signed);
  }

  readInt256(signed = true) {
    const buffer = this.read(256 / 8);
    return bigIntFromBuffer(buffer, true, signed);
  }

  readBytes() {
    let L = this.read(1)[0];
    let padding: number;
    if (L > 253) {
      L = this.readInt24();
      padding = L % 4;
    } else {
      padding = (L + 1) % 4;
    }
    const bytes = this.read(L);
    if (padding > 0) {
      padding = 4 - padding;
      this.read(padding);
    }
    return bytes;
  }

  readString() {
    return new TextDecoder().decode(this.readBytes());
  }
}
