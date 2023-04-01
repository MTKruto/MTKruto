import { Connection } from "../connection/connection.ts";
import { Transport } from "./transport.ts";
import { readBufferFromBigInt } from "../utils.ts";

export class Intermediate implements Transport {
  private initialized = false;

  constructor(private readonly connection: Connection) {
  }

  async receive() {
    let length: number;

    {
      const buffer = new Uint8Array(4);
      await this.connection.read(buffer);
      const dataView = new DataView(buffer.buffer);
      length = dataView.getUint32(0, true);
    }

    const buffer = new Uint8Array(length);
    await this.connection.read(buffer);

    return buffer;
  }

  async send(buffer: Uint8Array) {
    if (!this.initialized) {
      await this.connection.write(new Uint8Array([0xee, 0xee, 0xee, 0xee]));
      this.initialized = true;
    }

    const length = readBufferFromBigInt(buffer.length, 4);

    await this.connection.write(new Uint8Array([...length, ...buffer]));
  }
}
