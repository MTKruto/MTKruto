import { ConnectionFramed } from "../connection/0_connection.ts";
import { Transport } from "./0_transport.ts";

export class TransportPiped extends Transport implements Transport {
  constructor(private readonly connection: ConnectionFramed) {
    super();
  }

  async initialize() {
  }

  receive() {
    return this.connection.read();
  }

  send(buffer: Uint8Array) {
    return this.connection.write(buffer);
  }

  deinitialize() {
    this.initialized = false;
  }
}
