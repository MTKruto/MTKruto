import { unreachable } from "../0_deps.ts";
import { DC } from "../3_transport.ts";
import { ClientEncrypted, ClientEncryptedParams } from "./1_client_encrypted.ts";

export class ClientEncryptedPool {
  #index = 0;
  #requestCounter = 0;
  #clients = new Array<ClientEncrypted>();

  constructor(size: number, requestPerClient: number, dc: DC, apiId: number, params?: ClientEncryptedParams) {
    if (!size || size < 1) {
      unreachable();
    }
    for (let i = 0; i < size; ++i) {
      const client = new ClientEncrypted(dc, apiId, params);
      const invoke = client.invoke.bind(client);
      client.invoke = (...args: Parameters<typeof client["invoke"]>) => {
        if (++this.#requestCounter >= requestPerClient) {
          this.#index++;
          if (this.#index >= this.#clients.length - 1) {
            this.#index = 0;
          }
        }
        return invoke(...args);
      };
    }
  }

  async nextClient() {
    const client = this.#clients[this.#index];
    if (client.disconnected) {
      await client.connect();
    }
    return client;
  }

  disconnect() {
    for (const client of this.#clients) {
      client.disconnect();
    }
  }
}
