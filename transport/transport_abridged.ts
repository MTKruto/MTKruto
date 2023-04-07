import { Connection } from "../connection/connection.ts";
import { getObfuscationParameters } from "../utilities/1_obfuscation.ts";
import { concat } from "../utilities/0_buffer.ts";
import { bufferFromBigInt } from "../utilities/0_buffer.ts";
import { Transport } from "./transport.ts";

export class TransportAbridged extends Transport implements Transport {
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
        console.log('initialized')
      }
      this.initialized = true;
    } else {
      throw new Error("Transport already initialized");
    }
  }

  async receive() {
    console.log('recv')
    let length: number;

    {
      let buffer = new Uint8Array(1);
      console.log('reading')
      await this.connection.read(buffer);
      console.log('read')
      buffer = this.decrypt(buffer);

      console.log({buffer})

      if (buffer[0] < 0x7F) {
        length = buffer[0];
      } else {
        let buffer = new Uint8Array(3);
        await this.connection.read(buffer);
        buffer = this.decrypt(buffer);
        const dataView = new DataView(buffer.buffer);
        length = dataView.getUint16(0, true);
      }
    }

    length *= 4;

    let buffer = new Uint8Array(length);
    await this.connection.read(buffer);
    buffer = this.decrypt(buffer);

    return buffer;
  }

  async send(buffer: Uint8Array) {
    if (!this.initialized) {
      throw new Error("Transport not initialized");
    }
    console.log("send", buffer.length)

    const header = new Uint8Array([
      buffer.length >= 0x7F ? 0x7F : buffer.length,
    ]);
    const length = buffer.length >= 0x7F
      ? bufferFromBigInt(buffer.length, 3)
      : new Uint8Array();

      console.log('sending')
    await this.connection.write(this.encrypt(concat(header, length, buffer)));
    console.log('sent')
  }
}
