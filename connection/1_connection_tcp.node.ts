import { Socket } from "node:net";
import { ConnectionError } from "../0_errors.ts";
import { getLogger, Mutex } from "../1_utilities.ts";
import { Connection } from "./0_connection.ts";

const L = getLogger("ConnectionTCP");
const errConnectionNotOpen = new ConnectionError("Connection not open");

export class ConnectionTCP implements Connection {
  #hostname: string;
  #port: number;
  #socket?: Socket;
  #rMutex = new Mutex();
  #wMutex = new Mutex();
  #buffer = new Array<number>();
  #nextResolve: [
    number,
    { resolve: () => void; reject: (err: unknown) => void },
  ] | null = null;
  stateChangeHandler?: Connection["stateChangeHandler"];

  constructor(hostname: string, port: number) {
    this.#hostname = hostname;
    this.#port = port;
  }

  #rejectRead() {
    if (this.#nextResolve != null) {
      this.#nextResolve[1].reject(errConnectionNotOpen);
      this.#nextResolve = null;
    }
  }

  open() {
    this.#socket = new Socket();
    this.#socket.on("close", () => {
      this.#rejectRead();
      this.stateChangeHandler?.(false);
    });
    const mutex = new Mutex();
    this.#socket.on("data", async (data) => {
      const unlock = await mutex.lock();

      for (const byte of data) {
        this.#buffer.push(byte);
      }

      if (
        this.#nextResolve != null && this.#buffer.length >= this.#nextResolve[0]
      ) {
        const resolve = this.#nextResolve[1].resolve;
        this.#nextResolve = null;
        resolve();
      }

      unlock();
    });
    return new Promise<void>((resolve, reject) => {
      this.#socket!.connect(this.#port, this.#hostname);
      this.#socket!.once("error", reject);
      this.#socket!.once(
        "connect",
        () => {
          this.#socket!.off("error", reject);
          resolve();
          this.stateChangeHandler?.(true);
          L.debug("connected to", this.#hostname, "port", this.#port);
        },
      );
    });
  }

  get connected() {
    return this.#socket?.readyState == "open";
  }

  #assertConnected() {
    if (!this.connected) {
      throw errConnectionNotOpen;
    }
  }

  async read(p: Uint8Array) {
    this.#assertConnected();
    const unlock = await this.#rMutex.lock();
    try {
      this.#assertConnected();
      if (this.#buffer.length < p.length) {
        await new Promise<void>((resolve, reject) => this.#nextResolve = [p.length, { resolve, reject }]);
      }
      p.set(this.#buffer.splice(0, p.length));
    } finally {
      unlock();
    }
  }

  async write(p: Uint8Array) {
    this.#assertConnected();
    const unlock = await this.#wMutex.lock();
    try {
      this.#assertConnected();
      try {
        await new Promise<void>((resolve, reject) => {
          this.#socket!.write(
            p,
            (err) => {
              (err === undefined || err == null) ? resolve() : reject(err);
            },
          );
        });
      } catch (err) {
        if (!this.connected) {
          throw errConnectionNotOpen;
        } else {
          throw err;
        }
      }
    } finally {
      unlock();
    }
  }

  close() {
    this.#assertConnected();
    this.#socket!.destroy();
    this.#socket = undefined;
  }
}
