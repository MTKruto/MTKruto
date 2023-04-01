import { Connection } from "./connection.ts";

export class ConnectionWebSocket implements Connection {
  private webSocket: WebSocket;
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
          this.nextResolve != null && this.nextResolve[0] >= this.buffer.length
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

  close() {
    this.webSocket.close();
  }

  async read(p: Uint8Array) {
    if (this.webSocket.readyState != WebSocket.OPEN) {
      throw new Error("Connection not open");
    }
    await new Promise<void>((r) => this.nextResolve = [p.length, r]);
    p.set(this.buffer.splice(0, p.length));
  }

  write(p: Uint8Array) {
    if (this.webSocket.readyState == WebSocket.CLOSED) {
      throw new Error("Connection not open");
    }
    this.webSocket.send(p);
  }
}
