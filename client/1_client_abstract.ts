import { initTgCrypto } from "../deps.ts";
import { INITIAL_DC } from "../constants.ts";
import { MaybePromise } from "../utilities/0_types.ts";
import { DC, TransportProvider, webSocketTransportProvider } from "../transport/2_transport_provider.ts";

export interface ClientAbstractParams {
  initialDc?: DC;
  /**
   * The transport provider to use. Defaults to `webSocketTransportProvider` with its default options.
   */
  transportProvider?: TransportProvider;
  cdn?: boolean;
}

export abstract class ClientAbstract {
  protected readonly initialDc: DC;
  protected readonly transportProvider: TransportProvider;
  protected readonly cdn: boolean;

  protected transport?: ReturnType<TransportProvider>;
  private dc?: DC;

  constructor(params?: ClientAbstractParams) {
    this.initialDc = params?.initialDc ?? INITIAL_DC;
    this.transportProvider = params?.transportProvider ?? webSocketTransportProvider();
    this.cdn = params?.cdn ?? false;
  }

  protected stateChangeHandler?: (connected: boolean) => void;

  get dcId() {
    if (!this.transport) {
      throw new Error("Not connected");
    }
    return this.transport.dcId;
  }

  // MaybePromise since `Client` has to deal with `Storage.set()`
  setDc(dc: DC): MaybePromise<void> {
    this.dc = dc;
  }

  get connected() {
    return this.transport === undefined ? false : this.transport.connection.connected;
  }

  async connect() {
    this.transport = this.transportProvider({ dc: this.dc ?? this.initialDc, cdn: this.cdn });
    this.transport.connection.stateChangeHandler = this.stateChangeHandler;
    await initTgCrypto();
    await this.transport.connection.open();
    await this.transport.transport.initialize();
  }

  async reconnect(dc?: DC) {
    await this.disconnect();
    if (dc) {
      await this.setDc(dc);
    }
    await this.connect();
  }

  async disconnect() {
    if (!this.transport) {
      throw new Error("Not connected");
    }
    await this.transport.transport.deinitialize();
    await this.transport.connection.close();
  }
}
