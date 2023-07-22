import { Connection } from "./0_connection.ts";
import { debug, Mutex } from "../deps.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";

const d = debug("ConnectionHTTP");

export class ConnectionHTTP implements Connection {

  private canRead = Promise.resolve();
  private buffers = new Array<Uint8Array>();

  constructor(public readonly url: string | URL) {
    this.resetCanRead()
  }


  get connected() {
    return true;
  }

  async open() {
  }

  async read(_unused: Uint8Array) {
    _unused.
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

  async write() {
  }

  close() {
  }
}
