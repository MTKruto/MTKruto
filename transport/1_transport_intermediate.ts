import { bufferFromBigInt, concat } from "../1_utilities.ts";
import { Connection } from "../2_connection.ts";
import { getObfuscationParameters } from "./0_obfuscation.ts";
import { Transport } from "./0_transport.ts";

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
      this.decrypt(buffer);
      const dataView = new DataView(buffer.buffer);
      length = dataView.getUint32(0, true);
    }

    const buffer = new Uint8Array(length);
    await this.connection.read(buffer);
    this.decrypt(buffer);
    return buffer;
  }

  async send(buffer: Uint8Array) {
    if (!this.initialized) {
      throw new Error("Transport not initialized");
    }

    const length = bufferFromBigInt(buffer.length, 4);
    const data = concat(length, buffer);
    this.encrypt(data);

    await this.connection.write(data);
  }

  deinitialize() {
    this.initialized = false;
  }
}
