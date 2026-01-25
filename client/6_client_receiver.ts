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

import { StorageDenoKV } from "../storage/1_storage_deno_kv.ts";
import { StorageIndexedDB } from "../2_storage.ts";
import { Client, type ClientParams } from "./5_client.ts";
import type { ClientDispatcherParams } from "./5_client_dispatcher.ts";
import type { WorkerResponse } from "./1_worker_response.ts";
import type { WorkerRequest } from "./0_worker_request.ts";
import { getLogger, type Logger } from "../1_utilities.ts";
import { deserializeWorkerError, serializeWorkerError } from "./0_worker_error.ts";

export class ClientReceiver {
  #id: string;
  client: Client;
  // deno-lint-ignore no-explicit-any
  #pendingRequests = new Map<string, PromiseWithResolvers<any>>();
  #L: Logger;

  constructor(id: string, params: ClientDispatcherParams | undefined) {
    let storage: ClientParams["storage"];

    const name = `.mktruto-worker.${id}`;
    switch (params?.storage) {
      case "denokv":
        storage = new StorageDenoKV(name);
        break;
      case "indexeddb":
        storage = new StorageIndexedDB(name);
        break;
      case "memory":
        break;
    }

    this.#id = id;
    this.#L = getLogger("ClientReceiver").branch(this.#id);
    this.client = new Client({ ...params, storage });
    this.client.invoke.use(async (ctx) => {
      return await this.#dispatch("handleInvokeError", {
        error: serializeWorkerError(ctx.error),
        function: ctx.function,
        n: ctx.n,
      });
    });
    this.client.use((ctx) => {
      const response: WorkerResponse = {
        type: "response",
        clientId: id,
        id: "",
        isError: false,
        data: ctx.update,
      };
      postMessage(response);
    });
  }

  /** @internal */
  handleResponse(response: WorkerResponse) {
    if (response.clientId !== this.#id) {
      return;
    }

    this.#L.debug("handling response message", response);

    if (response.isError) {
      this.#pendingRequests.get(response.id)?.reject(deserializeWorkerError(response.data));
      this.#pendingRequests.delete(response.id);
    } else {
      this.#pendingRequests.get(response.id)?.resolve(response.data);
      this.#pendingRequests.delete(response.id);
    }
  }

  async #dispatch(method: string, ...args: unknown[]) {
    // deno-lint-ignore no-explicit-any
    const promiseWithResolvers = Promise.withResolvers<any>();

    const id = crypto.randomUUID();
    this.#pendingRequests.set(id, promiseWithResolvers);

    const request: WorkerRequest = {
      type: "request",
      clientId: this.#id,
      id,
      method,
      args,
    };
    this.#L.debug("posted message to parent", request);
    postMessage(request);

    return await promiseWithResolvers.promise;
  }
}
