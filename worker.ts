/// <reference lib="webworker" />
import { getLogger } from "./1_utilities.ts";
import { Client, type ClientDispatcherParams, type ClientParams, errors, StorageIndexedDB, type WorkerRequest, type WorkerResponse } from "./mod.ts";
import { StorageDenoKV } from "./storage/1_storage_deno_kv.ts";

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
