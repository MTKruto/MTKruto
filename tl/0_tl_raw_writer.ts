import { bufferFromBigInt, concat } from "../1_utilities.ts";

export class TLRawWriter {
  protected _buffer: Uint8Array = new Uint8Array();

  constructor() {
  }

  get buffer(): Uint8Array {
    return this._buffer;
  }

  write(buffer: Uint8Array): typeof this {
    this._buffer = concat(this._buffer, buffer);
    return this;
  }

  writeInt24(int: number, signed = true): typeof this {
    this.write(bufferFromBigInt(int, 24 / 8, true, signed));
    return this;
  }

  writeInt32(int: number, signed = true): typeof this {
    this.write(bufferFromBigInt(int, 32 / 8, true, signed));
    return this;
  }

  writeInt64(int: bigint, signed = true): typeof this {
    this.write(bufferFromBigInt(int, 64 / 8, true, signed));
    return this;
  }

  writeDouble(double: number): typeof this {
    const buffer = new Uint8Array(8);
    new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).setFloat64(0, double, true);
    this.write(buffer);
    return this;
  }

  writeInt128(int: bigint, signed = true): typeof this {
    this.write(bufferFromBigInt(int, 128 / 8, true, signed));
    return this;
  }

  writeInt256(int: bigint, signed = true): typeof this {
    this.write(bufferFromBigInt(int, 256 / 8, true, signed));
    return this;
  }

  writeBytes(bytes: Uint8Array): typeof this {
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

  writeString(string: string): typeof this {
    this.writeBytes(new TextEncoder().encode(string));
    return this;
  }
}
