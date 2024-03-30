import { initTgCrypto } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
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
  public readonly initialDc: DC;
  public transportProvider: TransportProvider;
  public readonly cdn: boolean;

  protected transport?: ReturnType<TransportProvider>;
  #dc?: DC;

  constructor(params?: ClientAbstractParams) {
    this.initialDc = params?.initialDc ?? INITIAL_DC;
    this.transportProvider = params?.transportProvider ?? transportProviderWebSocket();
    this.cdn = params?.cdn ?? false;
  }

  stateChangeHandler?: (connected: boolean) => void;

  get dc(): DC {
    return this.#dc ?? this.initialDc;
  }

  get dcId(): number {
    if (!this.transport) {
      throw new ConnectionError("Not connected.");
    }
    return this.transport.dcId;
  }

  // MaybePromise since `Client` has to deal with `Storage.set()`
  setDc(dc: DC): MaybePromise<void> {
    this.#dc = dc;
  }

  get connected(): boolean {
    return this.transport === undefined ? false : this.transport.connection.connected;
  }

  async connect() {
    this.transport = this.transportProvider({ dc: this.#dc ?? this.initialDc, cdn: this.cdn });
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
      throw new ConnectionError("Not connected.");
    }
    await this.transport.transport.deinitialize();
    await this.transport.connection.close();
  }

  get disconnected(): boolean {
    return !this.transport?.transport.initialized;
  }
}
