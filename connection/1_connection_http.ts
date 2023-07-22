import { Mutex } from "../deps.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { ConnectionFramed } from "./0_connection.ts";

export class ConnectionHTTP extends ConnectionFramed implements ConnectionFramed {
  private rMutex = new Mutex();
  private wMutex = new Mutex();

  private resolveCanRead = () => {};
  private canRead = Promise.resolve();
  private buffers = new Array<Uint8Array>();

  constructor(private readonly url: string | URL) {
    super();
    this.resetCanRead();
  }

  private resetCanRead() {
    this.canRead = new Promise((r) => this.resolveCanRead = r);
  }

  get connected() {
    return true;
  }

  async open() {
  }

  async read() {
    await this.canRead;
    const release = await this.rMutex.acquire();
    try {
      const buffer = this.buffers.pop();
      if (buffer === undefined) {
        throw UNREACHABLE();
      } else {
        return buffer;
      }
    } finally {
      if (this.buffers.length == 0) {
        this.resetCanRead();
      }
      release();
    }
  }

  async write(buffer: Uint8Array) {
    const release = await this.wMutex.acquire();
    try {
      const res = await fetch(this.url, {
        mode: "cors",
        method: "POST",
        body: buffer,
      });

      this.buffers.push(new Uint8Array(await res.arrayBuffer()));
    } finally {
      if (this.buffers.length == 1) {
        this.resolveCanRead();
      }
      release();
    }
  }

  close() {
  }
}
