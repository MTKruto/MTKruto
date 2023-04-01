import { Connection } from "./connection.ts";

export class ConnectionTCP implements Connection {
  private connection?: Deno.Conn;

  constructor(
    private readonly hostname: string,
    private readonly port: number,
  ) {
  }

  async open() {
    this.connection = await Deno.connect({
      hostname: this.hostname,
      port: this.port,
    });
  }

  async read(p: Uint8Array) {
    if (!this.connection) {
      throw new Error("Connection not open");
    }
    await this.connection.read(p);
  }

  async write(p: Uint8Array) {
    if (!this.connection) {
      throw new Error("Connection not open");
    }
    await this.connection.write(p);
  }
}
