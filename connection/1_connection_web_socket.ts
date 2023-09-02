import { debug, Mutex } from "../deps.ts";
import { ConnectionUnframed } from "./0_connection.ts";

const d = debug("ConnectionWebSocket");

export class ConnectionWebSocket extends ConnectionUnframed implements ConnectionUnframed {
  private webSocket: WebSocket;
  private rMutex = new Mutex();
  private wMutex = new Mutex();
  private buffer = new Array<number>();
  private nextResolve: [number, () => void] | null = null;

  constructor(private readonly url: string | URL) {
    super();
    this.webSocket = this.initWs();
  }

  private initWs() {
    const webSocket = new WebSocket(this.url, "binary");
    const mutex = new Mutex();
    this.webSocket.addEventListener("close", () => {
      this.stateChangeHandler?.();
    });
    this.webSocket.addEventListener("open", () => {
      this.stateChangeHandler?.();
    });
    webSocket.addEventListener("message", async (e) => {
      if (typeof e.data === "string") {
        return;
      }
      const release = await mutex.acquire();
      const data = new Uint8Array(await new Blob([e.data].map((v) => v instanceof Blob ? v : v instanceof ArrayBuffer ? v : Array.isArray(v) ? v.map((v) => v.buffer) : v.buffer).flat()).arrayBuffer());

      for (const byte of data) {
        this.buffer.push(byte);
      }

      if (
        this.nextResolve != null && this.buffer.length >= this.nextResolve[0]
      ) {
        this.nextResolve[1]();
        this.nextResolve = null;
      }

      release();
    });
    webSocket.addEventListener("error", (err) => {
      if (this.isConnecting) {
        // @ts-ignore: Node.js
        this.connectionError = err;
      }
      if (this.connected) {
        d("WebSocket error: %o", err);
      }
    });
    return webSocket;
  }

  get connected() {
    return this.webSocket.readyState == WebSocket.OPEN;
  }

  private wasConnected = false;
  private isConnecting = false;
  private connectionError: Event | ErrorEvent | null = null;
  async open() {
    if (this.isConnecting) {
      throw new Error("Already connecting");
    }
    this.isConnecting = true;

    if (!this.connected && this.wasConnected) {
      this.webSocket = this.initWs()
    }

    try {
      while (this.webSocket.readyState != WebSocket.OPEN) {
        if (this.webSocket.readyState == WebSocket.CLOSED) {
          if (this.connectionError instanceof ErrorEvent) {
            throw new Error(this.connectionError.message);
          } else {
            throw new Error("Connection was closed");
          }
        } else {
          await new Promise((r) => setTimeout(r, 5));
        }
      }
      this.wasConnected = true
    } finally {
      this.isConnecting = false;
      this.connectionError = null;
    }
  }

  async read(p: Uint8Array) {
    if (this.webSocket.readyState != WebSocket.OPEN) {
      throw new Error("Connection not open");
    }
    const release = await this.rMutex.acquire();
    try {
      if (this.buffer.length < p.length) {
        await new Promise<void>((r) => this.nextResolve = [p.length, r]);
      }
      p.set(this.buffer.splice(0, p.length));
    } finally {
      release();
    }
  }

  async write(p: Uint8Array) {
    if (this.webSocket.readyState == WebSocket.CLOSED) {
      throw new Error("Connection not open");
    }
    const release = await this.wMutex.acquire();
    try {
      this.webSocket.send(p);
    } finally {
      release();
    }
  }

  close() {
    if (this.webSocket.readyState == WebSocket.CLOSED) {
      throw new Error("Connection not open");
    }
    this.webSocket.close(1000, "method");
  }
}
