import { initTgCrypto } from "../deps.ts";
import { DEFAULT_INITIAL_DC } from "../constants.ts";
import { MaybePromise } from "../utilities/0_types.ts";
import { Connection } from "../connection/0_connection.ts";
import { Transport } from "../transport/0_transport.ts";
import { DC, defaultTransportProvider } from "../transport/2_transport_provider.ts";

export abstract class ClientAbstract {
  protected connection: Connection;
  protected transport: Transport;
  private _dcId: number;
  private _initialDc: DC;

  get initialDc() {
    return this._initialDc;
  }

  constructor(protected transportProvider = defaultTransportProvider({ initialDc: DEFAULT_INITIAL_DC })) {
    const { initialDc, createTransport } = transportProvider;
    this._initialDc = initialDc;
    const { connection, transport, dcId } = createTransport({ cdn: false });
    this.connection = connection;
    this.transport = transport;
    this._dcId = dcId;
  }

  get dcId() {
    return this._dcId;
  }

  // MaybePromise since `Client` has to deal with `Storage.set()`
  setDc(dc: DC): MaybePromise<void> {
    const { connection, transport, dcId } = this.transportProvider.createTransport({ dc, cdn: false });
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
      await this.setDc(dc);
    }
    await this.connect();
  }

  async disconnect() {
    await this.transport.deinitialize();
    await this.connection.close();
  }
}
