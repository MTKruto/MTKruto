import { Mutex } from "../utilities/0_mutex.ts";
import { Connection } from "./connection.ts";

export class ConnectionWebSocket implements Connection {
  private webSocket: WebSocket;
  private rMutex = new Mutex();
  private buffer = new Array<number>();
  private nextResolve: [number, () => void] | null = null;

  constructor(url: string | URL) {
    this.webSocket = new WebSocket(url, "binary");
    this.webSocket.onmessage = async (e) => {
      if (e.data instanceof Blob) {
        this.buffer.push(
          ...Array.from(new Uint8Array(await e.data.arrayBuffer())),
        );
        if (
          this.nextResolve != null && this.buffer.length >= this.nextResolve[0]
        ) {
          this.nextResolve[1]();
          this.nextResolve = null;
        }
      }
    };
    this.webSocket.onerror = console.error;
  }

  async open() {
    if (this.webSocket.readyState == WebSocket.OPEN) {
      throw new Error("Connection already open");
    } else {
      while (this.webSocket.readyState != WebSocket.OPEN) {
        if (this.webSocket.readyState == WebSocket.CLOSED) {
          throw new Error("Connection was closed");
        } else {
          await new Promise((r) => setTimeout(r, 5));
        }
      }
    }
  }

  async read(p: Uint8Array) {
    if (this.webSocket.readyState != WebSocket.OPEN) {
      throw new Error("Connection not open");
    }
    const release = await this.rMutex.acquire();
    if (this.buffer.length < p.length) {
      await new Promise<void>((r) => this.nextResolve = [p.length, r]);
    }
    p.set(this.buffer.splice(0, p.length));
    release();
  }

  write(p: Uint8Array) {
    if (this.webSocket.readyState == WebSocket.CLOSED) {
      throw new Error("Connection not open");
    }
    this.webSocket.send(p);
  }
}
