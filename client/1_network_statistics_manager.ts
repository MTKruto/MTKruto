import { C } from "./0_types.ts";

export class NetworkStatisticsManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getNetworkStatistics() {
    const [messagesRead, messagesWrite, cdnRead, cdnWrite] = await Promise.all([
      this.#c.storage.get<number>(["netstat_messages_read"]),
      this.#c.storage.get<number>(["netstat_messages_write"]),
      this.#c.storage.get<number>(["netstat_cdn_read"]),
      this.#c.storage.get<number>(["netstat_cdn_write"]),
    ]);
    const messages = {
      sent: Number(messagesWrite || 0),
      received: Number(messagesRead || 0),
    };
    const cdn = {
      sent: Number(cdnWrite || 0),
      received: Number(cdnRead || 0),
    };
    return { messages, cdn };
  }

  getTransportReadWriteCallback() {
    return {
      read: async (count: number) => {
        const key = this.#c.cdn ? "netstat_cdn_read" : "netstat_messages_read";
        await this.#c.storage.incr([key], count);
      },
      write: async (count: number) => {
        const key = this.#c.cdn ? "netstat_cdn_write" : "netstat_messages_write";
        await this.#c.storage.incr([key], count);
      },
    };
  }
}
