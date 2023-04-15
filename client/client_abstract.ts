import { Connection } from "../connection/connection.ts";
import { ConnectionTCP } from "../connection/connection_tcp.ts";
import { Transport } from "../transport/transport.ts";
import { TransportAbridged } from "../transport/transport_abridged.ts";

export abstract class ClientAbstract {
  connection: Connection;
  transport: Transport;
  dcId: number;

  constructor(protected test = false) {
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
}
