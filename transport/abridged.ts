import { Connection } from "../connection/connection.ts";
import { getInit } from "../obfuscated.ts";
import { readBufferFromBigInt } from "../utils.ts";
import { Transport } from "./transport.ts";
import { ctr256 } from "../deps.ts";

export class Abridged implements Transport {
  private initialized = false;
  private encryptKey: Uint8Array | null = null;
  private encryptIv: Uint8Array | null = null;
  private decryptKey: Uint8Array | null = null;
  private decryptIv: Uint8Array | null = null;

  constructor(
    private readonly connection: Connection,
    private readonly obfuscated = false,
  ) {
  }

  async initialize() {
    if (!this.initialized) {
      if (this.obfuscated) {
        const protocol = 0xefefefef;

        const { encryptKey, encryptIv, decryptKey, decryptIv } = await getInit(
          protocol,
          this.connection,
        );

        this.encryptKey = encryptKey;
        this.encryptIv = encryptIv;
        this.decryptKey = decryptKey;
        this.decryptIv = decryptIv;
      } else {
        await this.connection.write(new Uint8Array([0xef]));
        this.initialized = true;
      }
    } else {
      throw new Error("Transport already initialized");
    }
  }

  async receive() {
    let length: number;

    {
      let buffer = new Uint8Array(1);
      await this.connection.read(buffer);
      if (this.decryptKey && this.decryptIv) {
        buffer = ctr256(buffer, this.decryptKey, this.decryptIv);
      }

      if (buffer[0] < 0x7F) {
        length = buffer[0];
      } else {
        let buffer = new Uint8Array(3);
        await this.connection.read(buffer);
        if (this.decryptKey && this.decryptIv) {
          buffer = ctr256(buffer, this.decryptKey, this.decryptIv);
        }
        const dataView = new DataView(buffer.buffer);
        length = dataView.getUint16(0, true);
      }
    }

    length *= 4;

    let buffer = new Uint8Array(length);
    await this.connection.read(buffer);

    if (this.decryptKey && this.decryptIv) {
      buffer = ctr256(buffer, this.decryptKey, this.decryptIv);
    }

    return buffer;
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

    buffer = new Uint8Array([...header, ...length, ...buffer]);
    if (this.encryptIv && this.encryptKey) {
      buffer = ctr256(buffer, this.encryptKey, this.encryptIv);
    }

    await this.connection.write(buffer);
  }
}
