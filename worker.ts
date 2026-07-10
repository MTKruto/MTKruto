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

import { InputError } from "./0_errors.ts";
import { drop, getLogger } from "./1_utilities.ts";
import type { ClientDispatcherParams, WorkerRequest, WorkerResponse } from "./mod.ts";
import { ClientReceiver } from "./client/7_client_receiver.ts";
import { serializeWorkerError } from "./client/0_worker_error.ts";

const clientReceivers = new Map<string, ClientReceiver>();
const logger = getLogger("MTKrutoWorker");
const ports = new Array<MessagePort>();

addEventListener("message", (e) => {
  const message = (e as unknown as { data: WorkerRequest | WorkerResponse }).data;
  drop(handleMessage(message));
});

addEventListener("connect", (e) => {
  const connectedPorts = (e as unknown as { ports: MessagePort[] }).ports;
  for (const port of connectedPorts) {
    ports.push(port);
    port.addEventListener("message", (e) => {
      const message = (e as unknown as { data: WorkerRequest | WorkerResponse }).data;
      drop(handleMessage(message));
    });
    port.start();
  }
});

function sendMessage(message: WorkerRequest | WorkerResponse) {
  if (typeof postMessage !== "undefined") {
    postMessage(message);
  } else {
    for (const port of ports) {
      port.postMessage(message);
    }
  }
}

async function handleMessage(message: WorkerRequest | WorkerResponse) {
  if (message.type === "response") {
    clientReceivers.get(message.clientId)?.handleResponse(message);
    return;
  }

  const clientReceiver = clientReceivers.get(message.clientId);
  let response: WorkerResponse;

  if (message.method === "initClient") {
    response = initClient(message);
  } else if (!clientReceiver) {
    response = {
      type: "response",
      clientId: message.clientId,
      id: message.id,
      isError: true,
      data: serializeWorkerError(new InputError("Client not initialized.")),
    };
  } else {
    try {
      // @ts-ignore: it works
      const data = await clientReceiver.client[message.method](...message.args);
      response = {
        type: "response",
        clientId: message.clientId,
        id: message.id,
        isError: false,
        data,
      };
    } catch (err) {
      response = {
        type: "response",
        clientId: message.clientId,
        id: message.id,
        isError: true,
        data: serializeWorkerError(err),
      };
    }
  }

  logger.debug("posting response message", response);
  sendMessage(response);
}

export function initClient(request: WorkerRequest): WorkerResponse {
  if (clientReceivers.has(request.clientId)) {
    return {
      type: "response",
      clientId: request.clientId,
      id: request.id,
      isError: true,
      data: serializeWorkerError(new InputError("Client already initialized.")),
    };
  } else {
    try {
      const params = request.args[0] as ClientDispatcherParams | undefined;
      const clientReceiver = new ClientReceiver(sendMessage, request.clientId, params);
      clientReceivers.set(request.clientId, clientReceiver);

      return {
        type: "response",
        clientId: request.clientId,
        id: request.id,
        isError: false,
        data: null,
      };
    } catch (err) {
      clientReceivers.delete(request.clientId);
      logger.error("error initializing client:", err);
      return {
        type: "response",
        clientId: request.clientId,
        id: request.id,
        isError: true,
        data: serializeWorkerError(new InputError("Could not initialize client.")),
      };
    }
  }
}
