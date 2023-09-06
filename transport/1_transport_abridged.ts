import { bufferFromBigInt, concat } from "../1_utilities.ts";
import { Connection } from "../2_connection.ts";
import { getObfuscationParameters } from "./0_obfuscation.ts";
import { Transport } from "./0_transport.ts";

export class TransportAbridged extends Transport implements Transport {
  constructor(private readonly connection: Connection, private readonly obfuscated = false) {
    super();
  }

  async initialize() {
    if (!this.initialized) {
      if (this.obfuscated) {
        this.obfuscationParameters = await getObfuscationParameters(0xEFEFEFEF, this.connection);
      } else {
        await this.connection.write(new Uint8Array([0xEF]));
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

    const bufferLength = buffer.length / 4;

    const header = new Uint8Array([bufferLength >= 0x7F ? 0x7F : bufferLength]);
    const length = bufferLength >= 0x7F ? bufferFromBigInt(bufferLength, 3) : new Uint8Array();

    await this.connection.write(this.encrypt(concat(header, length, buffer)));
  }

  deinitialize() {
    this.initialized = false;
  }
}
