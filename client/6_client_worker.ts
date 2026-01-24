/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { getLogger } from "../utilities/1_logger.ts";
import type { WorkerResponse } from "./0_worker_response.ts";
import { ClientDispatcher, type ClientDispatcherParams } from "./5_client_dispatcher.ts";

export class ClientWorker {
  #worker: Worker;
  #idCounter = 0;
  #clients = new Array<ClientDispatcher>();
  #L = getLogger("ClientWorker");

  constructor(specifier: Worker);
  constructor(specifier: string | URL, options?: WorkerOptions);
  constructor(specifier: Worker | string | URL, options?: WorkerOptions) {
    this.#worker = specifier instanceof Worker ? specifier : new Worker(specifier, options);
    this.#worker.addEventListener("message", (e) => {
      this.#L.debug("received message from worker", e.data);

      const response = e.data as WorkerResponse;
      this.#clients[response.clientId]?.handleResponse(response);
    });
  }

  terminate() {
    this.#worker.terminate();
  }

  async createClient(params?: ClientDispatcherParams): Promise<ClientDispatcher> {
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
