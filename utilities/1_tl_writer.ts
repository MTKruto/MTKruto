import { bufferFromBigInt, concat } from "./0_buffer.ts";

export class TLWriter {
  private _buffer = new Uint8Array();

  constructor() {
  }

  get buffer() {
    return this._buffer;
  }

  writeInt32(int: number) {
    this._buffer = concat(
      this._buffer,
      bufferFromBigInt(int, 32 / 8, true, true),
    );
    return this;
  }

  writeInt64(int: bigint) {
    this._buffer = concat(this._buffer, bufferFromBigInt(int, 64 / 8, true));
    return this;
  }

  writeInt128(int: bigint) {
    this._buffer = concat(this._buffer, bufferFromBigInt(int, 128 / 8, true));
    return this;
  }

  writeInt256(int: bigint) {
    this._buffer = concat(this._buffer, bufferFromBigInt(int, 256 / 8, true));
    return this;
  }

  writeBytes(bytes: Uint8Array) {
    let padding: number;
    let L: Uint8Array;
    if (bytes.length > 253) {
      L = new Uint8Array(3);
      L[2] = (bytes.length & 0xff0000) >>> 16;
      L[1] = (bytes.length & 0x00ff00) >>> 8;
      L[0] = bytes.length & 0x0000ff;
      L = new Uint8Array([254, ...L]);
      padding = bytes.length % 4;
    } else {
      L = new Uint8Array([bytes.length]);
      padding = (bytes.length + 1) % 4;
    }
    if (padding > 0) {
      padding = 4 - padding;
    }
    this._buffer = concat(this._buffer, L, bytes, new Uint8Array(padding));
    return this;
  }

  writeString(string: string) {
    this.writeBytes(new TextEncoder().encode(string));
    return this;
  }
}
