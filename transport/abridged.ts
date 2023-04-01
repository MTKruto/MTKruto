import { Connection } from "../connection/connection.ts";
import { getObfuscationParameters } from "../obfuscated.ts";
import { concat } from "../utilities/buffer.ts";
import { readBufferFromBigInt } from "../utilities/tl.ts";
import { Transport } from "./transport.ts";

export class Abridged extends Transport implements Transport {
  private initialized = false;

  constructor(
    private readonly connection: Connection,
    private readonly obfuscated = false,
  ) {
    super();
  }

  async initialize() {
    if (!this.initialized) {
      if (this.obfuscated) {
        this.obfuscationParameters = await getObfuscationParameters(
          0xefefefef,
          this.connection,
        );
      } else {
        await this.connection.write(new Uint8Array([0xef]));
      }
      this.initialized = true;
    } else {
      throw new Error("Transport already initialized");
    }
  }

  async receive() {
    let length: number;

    {
      let buffer = new Uint8Array(1);
      await this.connection.read(buffer);
      buffer = this.decrypt(buffer);

      if (buffer[0] < 0x7F) {
        length = buffer[0];
      } else {
        const buffer = new Uint8Array(3);
        await this.connection.read(buffer);
        const dataView = new DataView(this.decrypt(buffer).buffer);
        length = dataView.getUint16(0, true);
      }
    }

    length *= 4;

    const buffer = new Uint8Array(length);
    await this.connection.read(buffer);

    return this.decrypt(buffer);
  }

  async send(buffer: Uint8Array) {
    if (!this.initialized) {
      throw new Error("Transport not initialized");
    }

    const header = new Uint8Array([
      buffer.length >= 0x7F ? 0x7F : buffer.length,
    ]);
    const length = buffer.length >= 0x7F
      ? readBufferFromBigInt(buffer.length, 3)
      : new Uint8Array();

    await this.connection.write(this.encrypt(concat(header, length, buffer)));
  }
}
