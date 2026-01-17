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

/// <reference lib="webworker" />
import { getLogger } from "./1_utilities.ts";
import { StorageDenoKV } from "./storage/1_storage_deno_kv.ts";
import { Client, type ClientDispatcherParams, type ClientParams, errors, StorageIndexedDB, type WorkerRequest, type WorkerResponse } from "./mod.ts";

const clients = new Array<Client>();
const logger = getLogger("MTKrutoWorker");

addEventListener("message", async (e) => {
  const request = (e as { data: WorkerRequest }).data;
  const client = clients[request.clientId];
  let response: WorkerResponse;

  if (request.method === "initClient") {
    response = initClient(request);
  } else if (!client) {
    response = {
      clientId: request.clientId,
      id: request.id,
      isError: true,
      data: {
        name: "InputError",
        args: "Client not inited",
      },
    };
  } else {
    try {
      // @ts-ignore: it works
      const data = await client[request.method](...request.args);
      response = {
        clientId: request.clientId,
        id: request.id,
        isError: false,
        data,
      };
    } catch (err) {
      if (err instanceof errors.TelegramError) {
        const arg: errors.TelegramErrorParams = {
          error_code: err.errorCode,
          error_message: err.errorMessage,
          call: err.cause,
        };
        response = {
          clientId: request.clientId,
          id: request.id,
          isError: true,
          data: {
            name: "TelegramError",
            args: [arg],
          },
        };
      } else if (err instanceof errors.TLError) {
        response = {
          clientId: request.clientId,
          id: request.id,
          isError: true,
          data: {
            name: "TLError",
            args: [err.originalMessage, err.path],
          },
        };
      } else if (err instanceof errors.TransportError) {
        response = {
          clientId: request.clientId,
          id: request.id,
          isError: true,
          data: {
            name: "TransportError",
            args: [err.code],
          },
        };
      } else if (err instanceof Error) {
        response = {
          clientId: request.clientId,
          id: request.id,
          isError: true,
          data: {
            // deno-lint-ignore no-explicit-any
            name: err.name as unknown as any,
            args: [err.message],
          },
        };
      } else {
        response = {
          clientId: request.clientId,
          id: request.id,
          isError: true,
          data: {
            // deno-lint-ignore no-explicit-any
            name: "Error" as unknown as any, // unknown error
            args: [err],
          },
        };
      }
    }
  }

  logger.debug("posting response message", response);
  postMessage(response);
});

export function initClient(request: WorkerRequest): WorkerResponse {
  if (clients.length > request.clientId) {
    return {
      clientId: request.clientId,
      id: request.id,
      isError: true,
      data: {
        name: "InputError",
        args: "Client already inited",
      },
    };
  } else {
    try {
      const params = request.args[0] as ClientDispatcherParams | undefined;
      let storage: ClientParams["storage"];

      const name = `.mktruto-worker.${clients.length}`;
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

      const client = new Client({ ...params, storage });
      clients.push(client);
      client.use((ctx) => {
        const response: WorkerResponse = {
          clientId: request.clientId,
          id: -1,
          isError: false,
          data: ctx.update,
        };
        postMessage(response);
      });

      return {
        clientId: request.clientId,
        id: request.id,
        isError: false,
        data: null,
      };
    } catch (err) {
      logger.error("Error initing client:", err);
      return {
        clientId: request.clientId,
        id: request.id,
        isError: true,
        data: {
          name: "InputError",
          args: "Could not init client",
        },
      };
    }
  }
}
