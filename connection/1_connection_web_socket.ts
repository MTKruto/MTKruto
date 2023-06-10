import { debug, Mutex } from "../deps.ts";
import { Connection } from "./0_connection.ts";

const d = debug("ConnectionWebSocket");

export class ConnectionWebSocket implements Connection {
  private webSocket: WebSocket;
  private rMutex = new Mutex();
  private wMutex = new Mutex();
  private buffer = new Array<number>();
  private nextResolve: [number, () => void] | null = null;

  constructor(url: string | URL) {
    this.webSocket = new WebSocket(url, "binary");
    this.webSocket.onmessage = async (e) => {
      // deno-lint-ignore no-explicit-any
      const data = e.data instanceof Blob ? new Uint8Array(await e.data.arrayBuffer()) : new Uint8Array(e.data as any);

      for (const byte of data) {
        this.buffer.push(byte);
      }

      if (
        this.nextResolve != null && this.buffer.length >= this.nextResolve[0]
      ) {
        this.nextResolve[1]();
        this.nextResolve = null;
      }
    };
    this.webSocket.onerror = (err) => {
      d("WebSocket error: %o", err);
    };
  }

  get connected() {
    return this.webSocket.readyState == WebSocket.OPEN;
  }

  async open() {
    while (this.webSocket.readyState != WebSocket.OPEN) {
      if (this.webSocket.readyState == WebSocket.CLOSED) {
        throw new Error("Connection was closed");
      } else {
        await new Promise((r) => setTimeout(r, 5));
      }
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
    this.webSocket.close();
  }
}
