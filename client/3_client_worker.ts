import type { WorkerRequest } from "./0_worker_request.ts";
import type { WorkerResponse } from "./0_worker_response.ts";
import { ClientTransmitter, type ClientTransmitterParams } from "./2_client_transmitter.ts";

export class ClientWorker {
  #worker: Worker;
  #idCounter = 0;
  #clients = new Array<ClientTransmitter>();

  constructor(specifier: string | URL, options?: WorkerOptions) {
    this.#worker = new Worker(specifier, options);
    this.#worker.addEventListener("message", (e) => {
      const response = e.data as WorkerResponse;
      this.#clients[response.clientId]?.handleResponse(response);
    });
  }

  terminate() {
    this.#worker.terminate();
  }

  createClient(params?: ClientTransmitterParams) {
    const clientId = this.#idCounter++;
    const client = new ClientTransmitter(this.#worker, clientId);
    this.#clients.push(client);

    const initClient: WorkerRequest = {
      clientId,
      id: -1,
    method: 'initClient',
    args: [params]   
    }
    this.#worker.postMessage(initClient)

    return client;
  }
}
