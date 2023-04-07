import { ExtendedDataView } from "./0_extended_data_view.ts";

export class TLReader {
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

  readInt() {
    const buffer = this.read(32 / 8);
    return new ExtendedDataView(buffer.buffer).getUint32(0, true);
  }

  readInt64() {
    const buffer = this.read(64 / 8);
    return new ExtendedDataView(buffer.buffer).getBigUint64(0, true);
  }

  readInt128() {
    const buffer = this.read(128 / 8);
    return new ExtendedDataView(buffer.buffer).getBigUint128(0, true);
  }

  readBytes() {
    let L = this.read(1)[0];
    let padding: number;
    if (L > 253) {
      L = this.readInt();
      padding = L % 4;
    } else {
      padding = (L + 1) % 4;
    }
    const bytes = this.read(L);
    this.read(4 - padding);
    return bytes;
  }

  readString() {
    return new TextDecoder().decode(this.readBytes());
  }
}
