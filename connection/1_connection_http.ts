import { Connection } from "./0_connection.ts";

export class ConnectionHTTP implements Connection {
  constructor(public readonly url: string | URL) {
  }

  get connected() {
    return true;
  }

  async open() {
  }

  async read() {
  }

  async write() {
  }

  close() {
  }
}
