import { Connection } from "../connection/connection.ts";
import { ConnectionWebSocket } from "../connection/connection_web_socket.ts";
import { Transport } from "../transport/transport.ts";
import { TransportIntermediate } from "../transport/transport_intermediate.ts";

export abstract class ClientAbstract {
  connection: Connection;
  transport: Transport;
  dcId: number;
  protected connected = false;

  constructor(protected test = false) {
    this.dcId = 2;
    const protocol = typeof location === "undefined" ? "wss" : location.protocol == "http:" ? "ws" : "wss";
    if (test) {
      this.connection = new ConnectionWebSocket(`${protocol}://venus.web.telegram.org/apiws_test`);
      this.dcId += 10000;
    } else {
      this.connection = new ConnectionWebSocket(`${protocol}://venus.web.telegram.org/apiws`);
    }
    // this.connection = new ConnectionTCP("127.0.0.1", 4430);
    this.transport = new TransportIntermediate(this.connection, true);
  }

  async connect() {
    await this.connection.open();
    await this.transport.initialize();
    this.connected = true;
  }

  async disconnect() {
    await this.transport.deinitialize();
    await this.connection.close();
    this.connected = false;
  }
}
