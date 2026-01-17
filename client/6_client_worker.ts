import { getLogger } from "../utilities/1_logger.ts";
import type { WorkerResponse } from "./0_worker_response.ts";
import { ClientDispatcher, type ClientDispatcherParams } from "./5_client_dispatcher.ts";

export class ClientWorker {
  #worker: Worker;
  #idCounter = 0;
  #clients = new Array<ClientDispatcher>();
  #L = getLogger("ClientWorker");

  constructor(specifier: string | URL, options?: WorkerOptions) {
    this.#worker = new Worker(specifier, options);
    this.#worker.addEventListener("message", (e) => {
      this.#L.debug("received message from worker", e.data);

      const response = e.data as WorkerResponse;
      this.#clients[response.clientId]?.handleResponse(response);
    });
  }

  terminate() {
    this.#worker.terminate();
  }

  async createClient(params?: ClientDispatcherParams) {
    const clientId = this.#idCounter++;
    const client = new ClientDispatcher(this.#worker, clientId);
    this.#clients.push(client);
    try {
      await client.init(params);
    } catch (err) {
      this.#clients = this.#clients.filter((v) => v !== client);
      throw err;
    }
    return client;
  }
}
