import { debug, Mutex } from "../0_deps.ts";
import { concat, UNREACHABLE } from "../1_utilities.ts";
import { ConnectionUnframed } from "./0_connection.ts";

const d = debug("ConnectionWebSocket");
const errConnectionNotOpen = new Error("Connection not open");

export class ConnectionWebSocket extends ConnectionUnframed implements ConnectionUnframed {
  #webSocket: WebSocket;
  #rMutex = new Mutex();
  #wMutex = new Mutex();
  #buffer = new Uint8Array();
  #nextResolve: [number, { resolve: () => void; reject: (err: unknown) => void }] | null = null;

  constructor(private readonly url: string | URL) {
    super();
    this.#webSocket = this.#initWs();
  }

  #initWs() {
    const webSocket = new WebSocket(this.url, "binary");
    const mutex = new Mutex();
    webSocket.addEventListener("close", () => {
      this.#rejectRead();
      this.stateChangeHandler?.(false);
    });
    webSocket.addEventListener("open", () => {
      this.stateChangeHandler?.(true);
    });
    webSocket.addEventListener("message", async (e) => {
      if (typeof e.data === "string") {
        return;
      }
      const release = await mutex.acquire();
      const data = new Uint8Array(await new Blob([e.data].map((v) => v instanceof Blob || v instanceof Uint8Array ? v : v instanceof ArrayBuffer ? v : UNREACHABLE())).arrayBuffer());

      this.#buffer = concat(this.#buffer, data);

      if (
        this.#nextResolve != null && this.#buffer.length >= this.#nextResolve[0]
      ) {
        this.#nextResolve[1].resolve();
        this.#nextResolve = null;
      }

      release();
    });
    webSocket.addEventListener("error", (err) => {
      if (this.#isConnecting) {
        // @ts-ignore: Node.js
        this.#connectionError = err;
      }
      if (this.connected) {
        d("WebSocket error: %o", err);
      }
    });
    return webSocket;
  }

  get connected() {
    return this.#webSocket.readyState == WebSocket.OPEN;
  }

  #wasConnected = false;
  #isConnecting = false;
  #connectionError: Event | ErrorEvent | null = null;
  async open() {
    if (this.#isConnecting) {
      throw new Error("Already connecting");
    }
    this.#isConnecting = true;

    if (!this.connected && this.#wasConnected) {
      this.#webSocket = this.#initWs();
    }

    try {
      while (this.#webSocket.readyState != WebSocket.OPEN) {
        if (this.#webSocket.readyState == WebSocket.CLOSED) {
          if (this.#connectionError && "message" in this.#connectionError) {
            throw new Error(this.#connectionError.message);
          } else {
            throw new Error("Connection was closed");
          }
        } else {
          await new Promise((r) => setTimeout(r, 5));
        }
      }
      this.#wasConnected = true;
    } finally {
      this.#isConnecting = false;
      this.#connectionError = null;
    }
  }

  #assertConnected() {
    if (!this.connected) {
      throw errConnectionNotOpen;
    }
  }

  async read(p: Uint8Array) {
    this.#assertConnected();
    const release = await this.#rMutex.acquire();
    try {
      this.#assertConnected();
      if (this.#buffer.length < p.length) {
        await new Promise<void>((resolve, reject) => this.#nextResolve = [p.length, { resolve, reject }]);
      }
      const slice = this.#buffer.slice(0, p.length);
      p.set(slice);
      this.#buffer = this.#buffer.slice(slice.length);
    } finally {
      release();
    }
  }

  async write(p: Uint8Array) {
    this.#assertConnected();
    const release = await this.#wMutex.acquire();
    try {
      this.#assertConnected();
      this.#webSocket.send(p);
    } finally {
      release();
    }
  }

  #rejectRead() {
    if (this.#nextResolve != null) {
      this.#nextResolve[1].reject(errConnectionNotOpen);
      this.#nextResolve = null;
    }
  }

  close() {
    this.#assertConnected();
    this.#webSocket.close(1000, "method");
    this.#rejectRead();
  }
}
