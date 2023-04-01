import { Connection } from "../connection/connection.ts";
import { ctr256 } from "https://raw.githubusercontent.com/roj1512/wasm-crypto/main/mod.ts";
import { Transport } from "./transport.ts";
import { getInit } from "../obfuscated.ts";

export class Intermediate implements Transport {
  private initialized = false;
  private decryptKey: Uint8Array | null = null;
  private decryptIv: Uint8Array | null = null;

  constructor(
    private readonly connection: Connection,
    private readonly obfuscated = false,
  ) {
  }

  async receive() {
    let length: number;

    {
      let buffer = new Uint8Array(4);
      await this.connection.read(buffer);
      if (this.decryptKey && this.decryptIv) {
        buffer = ctr256(buffer, this.decryptKey, this.decryptIv);
      }
      const dataView = new DataView(buffer.buffer);
      length = dataView.getUint32(0, true);
    }

    let buffer = new Uint8Array(length);
    await this.connection.read(buffer);

    if (this.decryptKey && this.decryptIv) {
      buffer = ctr256(buffer, this.decryptKey, this.decryptIv);
    }

    return buffer;
  }

  async send(buffer: Uint8Array) {
    if (!this.initialized) {
      if (this.obfuscated) {
        const protocol = 0xeeeeeeee;

        const { decryptKey, decryptIv } = await getInit(
          protocol,
          this.connection,
        );

        this.decryptKey = decryptKey;
        this.decryptIv = decryptIv;
      } else {
        await this.connection.write(new Uint8Array([0xee, 0xee, 0xee, 0xee]));
      }
    }

    const length = readBufferFromBigInt(buffer.length, 4);

    buffer = new Uint8Array([...length, ...buffer]);
    if (this.decryptKey && this.decryptIv) {
      buffer = ctr256(buffer, this.decryptKey, this.decryptIv);
    }

    await this.connection.write(buffer);
  }
}
