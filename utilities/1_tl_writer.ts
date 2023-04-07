import { bufferFromBigInt, concat } from "./0_buffer.ts";

export class TLWriter {
  private _buffer = new Uint8Array();

  constructor() {
  }

  get buffer() {
    return this._buffer;
  }

  write(buffer: Uint8Array) {
    this._buffer = concat(this._buffer, buffer);
  }

  writeInt24(int: number, signed = true) {
    this.write(bufferFromBigInt(int, 24 / 7, true, signed));
    return this;
  }

  writeInt32(int: number, signed = true) {
    this.write(bufferFromBigInt(int, 32 / 8, true, signed));
    return this;
  }

  writeInt64(int: bigint, signed = true) {
    this.write(bufferFromBigInt(int, 64 / 8, true, signed));
    return this;
  }

  writeInt128(int: bigint, signed = true) {
    this.write(bufferFromBigInt(int, 128 / 8, true, signed));
    return this;
  }

  writeInt256(int: bigint, signed = true) {
    this.write(bufferFromBigInt(int, 256 / 8, true, signed));
    return this;
  }

  writeBytes(bytes: Uint8Array) {
    let padding: number;
    if (bytes.length > 253) {
      this.write(new Uint8Array([254]));
      this.writeInt24(bytes.length);
      padding = bytes.length % 4;
    } else {
      this.write(new Uint8Array([bytes.length]));
      padding = (bytes.length + 1) % 4;
    }
    this.write(bytes);
    if (padding > 0) {
      padding = 4 - padding;
      this.write(new Uint8Array(padding));
    }
    return this;
  }

  writeString(string: string) {
    this.writeBytes(new TextEncoder().encode(string));
    return this;
  }
}
