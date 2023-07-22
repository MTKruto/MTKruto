import { ConnectionHTTP } from "../connection/1_connection_http.ts";
import { debug, Mutex } from "../deps.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { Transport } from "./0_transport.ts";

const d = debug("TransportHTTP");

export class TransportHTTP extends Transport implements Transport {
  private canRead: Promise<void>;
  private resolveCanRead = () => {};
  private rMutex = new Mutex();
  private wMutex = new Mutex();
  private buffers = new Array<Uint8Array>();

  constructor(private connection: ConnectionHTTP) {
    super();
    this.resetCanRead()
  }


  private resetCanRead() {
    this.canRead = new Promise((r) => this.resolveCanRead = r);
  }

  async initialize() {
  }

  async receive() {
    await this.canRead;
    try {
      const buffer = this.buffers.pop();
      if (buffer === undefined) {
        throw UNREACHABLE();
      } else {
        d(`>>> ${buffer.length} octets`);
        return buffer;
      }
    } finally {
      if (this.buffers.length == 0) {
        this.canRead = new Promise((r) => this.resolveCanRead = r);
      }
    }
  }

  async send(buffer: Uint8Array) {
    const release = await this.wMutex.acquire();
    try {
      const res = await fetch(this.connection.url, {
        method: "POST",
        body: buffer,
      });

      const release = await this.rMutex.acquire();
      try {
        this.buffers.push(new Uint8Array(await res.arrayBuffer()));
        d(`<<< ${this.buffers[this.buffers.length - 1].length} octets`);
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

  deinitialize() {
  }
}
