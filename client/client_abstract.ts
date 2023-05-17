import { Connection } from "../connection/connection.ts";
import { Transport } from "../transport/transport.ts";
import { defaultDc, defaultTransportProvider } from "../transport/transport_provider.ts";
import { initTgCrypto } from "../deps.ts";

export abstract class ClientAbstract {
  protected connection: Connection;
  protected transport: Transport;
  dcId: number;
  protected connected = false;

  constructor(protected transportProvider = defaultTransportProvider()) {
    const { connection, transport, dcId } = transportProvider({ dc: defaultDc, cdn: false });
    this.connection = connection;
    this.transport = transport;
    this.dcId = dcId;
  }

  async connect() {
    await initTgCrypto();
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
