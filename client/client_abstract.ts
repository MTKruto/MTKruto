import { initTgCrypto } from "../deps.ts";
import { DEFAULT_INITIAL_DC } from "../constants.ts";
import { Connection } from "../connection/connection.ts";
import { Transport } from "../transport/transport.ts";
import { DC, defaultTransportProvider } from "../transport/transport_provider.ts";

export abstract class ClientAbstract {
  protected connection: Connection;
  protected transport: Transport;
  private _dcId: number;
  protected connected = false;

  constructor(protected transportProvider = defaultTransportProvider({ initialDc: DEFAULT_INITIAL_DC })) {
    const { connection, transport, dcId } = transportProvider({ cdn: false });
    this.connection = connection;
    this.transport = transport;
    this._dcId = dcId;
  }

  get dcId() {
    return this._dcId;
  }

  setDc(dc: DC) {
    const { connection, transport, dcId } = this.transportProvider({ dc, cdn: false });
    this.connection = connection;
    this.transport = transport;
    this._dcId = dcId;
  }

  async connect() {
    await initTgCrypto();
    await this.connection.open();
    await this.transport.initialize();
    this.connected = true;
  }

  async reconnect(dc?: DC) {
    await this.disconnect();
    if (dc) {
      this.setDc(dc);
    }
    await this.connect();
  }

  async disconnect() {
    await this.transport.deinitialize();
    await this.connection.close();
    this.connected = false;
  }
}
