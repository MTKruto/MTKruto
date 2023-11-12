import { Mutex } from "../0_deps.ts";
import { ConnectionUnframed } from "./0_connection.ts";

export class ConnectionTCP extends ConnectionUnframed implements ConnectionUnframed {
  #hostname: string;
  #port: number;
  #connection?: Deno.Conn;
  #rMutex = new Mutex();
  #wMutex = new Mutex();

  constructor(hostname: string, port: number) {
    super();
    this.#hostname = hostname;
    this.#port = port;
  }

  get connected(): boolean {
    return !!this.#connection;
  }

  #assertConnected() {
    if (!this.connected) {
      throw new Error("Connection not open");
    }
  }

  async open() {
    if (this.#connection) {
      throw new Error("Connection already open");
    }
    this.#connection = await Deno.connect({
      hostname: this.#hostname,
      port: this.#port,
    });
  }

  async read(p: Uint8Array) {
    this.#assertConnected();
    const release = await this.#rMutex.acquire();
    try {
      this.#assertConnected();
      await this.#connection!.read(p);
    } finally {
      release();
    }
  }

  async write(p: Uint8Array) {
    this.#assertConnected();
    const release = await this.#wMutex.acquire();
    try {
      this.#assertConnected();
      await this.#connection!.write(p);
    } finally {
      release();
    }
  }

  close() {
    this.#assertConnected();
    this.#connection!.close();
    this.#connection = undefined;
  }
}
