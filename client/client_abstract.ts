import { initTgCrypto } from "../deps.ts";
import { DEFAULT_INITIAL_DC } from "../constants.ts";
import { Connection } from "../connection/connection.ts";
import { Transport } from "../transport/transport.ts";
import { DC, defaultTransportProvider } from "../transport/transport_provider.ts";
import { MaybePromise } from "../types.ts";

export abstract class ClientAbstract {
  protected connection: Connection;
  protected transport: Transport;
  private _dcId: number;

  constructor(protected transportProvider = defaultTransportProvider({ initialDc: DEFAULT_INITIAL_DC })) {
    const { connection, transport, dcId } = transportProvider({ cdn: false });
    this.connection = connection;
    this.transport = transport;
    this._dcId = dcId;
  }

  get dcId() {
    return this._dcId;
  }

  // MaybePromise since `Client` has to deal with `Storage.set()`
  setDc(dc: DC): MaybePromise<void> {
    const { connection, transport, dcId } = this.transportProvider({ dc, cdn: false });
    this.connection = connection;
    this.transport = transport;
    this._dcId = dcId;
  }

  get connected() {
    return this.connection.connected;
  }

  async connect() {
    await initTgCrypto();
    await this.connection.open();
    await this.transport.initialize();
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
  }
}
