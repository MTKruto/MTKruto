import { Connection } from "./connection/connection.ts";
import { Transport } from "./transport/transport.ts";
import { ConnectionTCP } from "./connection/connection_tcp.ts";
import { TransportAbridged } from "./transport/transport_abridged.ts";
import { Function } from "./tl/3_functions.ts";
import {
  packUnencryptedMessage,
  unpackUnencryptedMessage,
} from "./utilities/1_tl.ts";
import { bigIntFromBuffer } from "./utilities/0_bigint.ts";
import { TLReader } from "./tl/3_tl_reader.ts";

export class Client {
  protected connection: Connection;
  protected transport: Transport;
  dcId: number;

  constructor(test = false) {
    this.dcId = 1;
    if (test) {
      this.connection = new ConnectionTCP("149.154.175.10", 80);
      this.dcId += 10000;
    } else {
      this.connection = new ConnectionTCP("149.154.175.53", 80);
    }
    // this.connection = new ConnectionTCP("127.0.0.1", 4430);
    this.transport = new TransportAbridged(this.connection);
  }

  async connect() {
    this.transport = new TransportAbridged(this.connection);
    await this.connection.open();
    await this.transport.initialize();
  }

  async disconnect() {
    await this.connection.close();
  }

  async invokeRaw(buffer: Uint8Array) {
    await this.transport.send(buffer);
    return await this.transport.receive();
  }

  async invoke(function_: Function) {
    // deno-fmt-ignore
    const buffer = await this.invokeRaw(packUnencryptedMessage(function_.serialize()));
    if (buffer.length == 4) {
      const int = bigIntFromBuffer(buffer, true, true);
      if (int == -404n) {
        throw new Error("-404");
      }
    }
    const { message } = unpackUnencryptedMessage(buffer);
    const reader = new TLReader(message);
    return reader.readObject();
  }
}
