import { Connection } from "../connection/connection.ts";
import { bufferFromBigInt, concat } from "../utilities/0_buffer.ts";
import { getObfuscationParameters } from "../utilities/1_obfuscation.ts";
import { Transport } from "./transport.ts";

export class TransportIntermediate extends Transport implements Transport {
  constructor(private readonly connection: Connection, private readonly obfuscated = false) {
    super();
  }

  async initialize() {
    if (!this.initialized) {
      if (this.obfuscated) {
        this.obfuscationParameters = await getObfuscationParameters(0xEEEEEEEE, this.connection);
      } else {
        await this.connection.write(new Uint8Array([0xEE, 0xEE, 0xEE, 0xEE]));
      }
      this.initialized = true;
    } else {
      throw new Error("Transport already initialized");
    }
  }

  async receive() {
    let length: number;

    {
      const buffer = new Uint8Array(4);
      await this.connection.read(buffer);
      const dataView = new DataView(this.decrypt(buffer).buffer);
      length = dataView.getUint32(0, true);
    }

    const buffer = new Uint8Array(length);
    await this.connection.read(buffer);

    return this.decrypt(buffer);
  }

  async send(buffer: Uint8Array) {
    if (!this.initialized) {
      throw new Error("Transport not initialized");
    }

    const length = bufferFromBigInt(buffer.length, 4);

    await this.connection.write(this.encrypt(concat(length, buffer)));
  }

  deinitialize() {
    this.initialized = false;
  }
}
