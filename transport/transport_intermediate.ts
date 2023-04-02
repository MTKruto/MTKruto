import { Connection } from "../connection/connection.ts";
import { Transport } from "./transport.ts";
import { bufferFromBigInt } from "../utilities/1_buffer.ts";
import { concat } from "../utilities/1_buffer.ts";
import { getObfuscationParameters } from "../utilities/5_obfuscation.ts";

export class TransportIntermediate extends Transport implements Transport {
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
          0xeeeeeeee,
          this.connection,
        );
      } else {
        await this.connection.write(new Uint8Array([0xee, 0xee, 0xee, 0xee]));
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
}
