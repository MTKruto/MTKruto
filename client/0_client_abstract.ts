import { initTgCrypto } from "../0_deps.ts";
import { MaybePromise } from "../1_utilities.ts";
import { DC, TransportProvider, transportProviderWebSocket } from "../3_transport.ts";
import { INITIAL_DC } from "../4_constants.ts";

export interface ClientAbstractParams {
  /**
   * The first DC to connect to. This is commonly used to decide whether to connect to test or production servers. It is not necessarily the DC that the client will directly connect to or is currently connected to. Defaults to the default initial DC.
   */
  initialDc?: DC;
  /**
   * The transport provider to use. Defaults to `webSocketTransportProvider` with its default options.
   */
  transportProvider?: TransportProvider;
  /**
   * Whether the connection is with a CDN server. Defaults to false.
   */
  cdn?: boolean;
}

export abstract class ClientAbstract {
  protected readonly initialDc: DC;
  protected transportProvider: TransportProvider;
  protected readonly cdn: boolean;
  protected transport?: ReturnType<TransportProvider>;
  protected stateChangeHandler?: (connected: boolean) => void;

  constructor(params?: ClientAbstractParams) {
    this.initialDc = params?.initialDc ?? INITIAL_DC;
    this.transportProvider = params?.transportProvider ?? transportProviderWebSocket;
    this.cdn = params?.cdn ?? false;
  }

  get dcId() {
    if (!this.transport) {
      throw new Error("Not connected");
    }
    return this.transport.dcId;
  }

  async setDc(dc: DC): Promise<void> {
    this.transport = this.transportProvider({ dc, cdn: this.cdn });
  }

  get connected() {
    return !!this.transport && this.transport.connection.connected;
  }

  async connect() {
    if (!this.transport) {
      throw new Error("DC not set. Call setDc() before connect()");
    }
    if (this.connected) {
      throw new Error("Already connected");
    }
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
    this.transport = undefined;
  }
}
