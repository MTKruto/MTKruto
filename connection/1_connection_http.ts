import { debug, Mutex } from "../deps.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { ConnectionFramed } from "./0_connection.ts";

const d = debug("ConnectionHTTP");

export class ConnectionHTTP extends ConnectionFramed implements ConnectionFramed {
  private rMutex = new Mutex();
  private wMutex = new Mutex();

  private resolveCanRead = () => {};
  private canRead = Promise.resolve();
  private buffers = new Array<Uint8Array>();

  constructor(private readonly url: string | URL) {
    super();
  }

  get connected() {
    return true;
  }

  async open() {
  }

  async read() {
    await this.canRead;
    try {
      const buffer = this.buffers.pop();
      if (buffer === undefined) {
        throw UNREACHABLE();
      } else {
        d(`>>> ${buffer.length} bytes`);
        return buffer;
      }
    } finally {
      if (this.buffers.length == 0) {
        this.canRead = new Promise((r) => this.resolveCanRead = r);
      }
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

      const release = await this.rMutex.acquire();
      try {
        this.buffers.push(new Uint8Array(await res.arrayBuffer()));
        d(`<<< ${this.buffers[this.buffers.length - 1].length} bytes`);
        if (this.buffers.length == 1) {
          this.resolveCanRead();
        }
      } finally {
        release();
      }
    } finally {
      release();
    }
  }

  close() {
  }
}
