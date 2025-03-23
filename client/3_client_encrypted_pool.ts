/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { ClientEncrypted } from "./2_client_encrypted.ts";

export class ClientEncryptedPool {
  #index = 0;
  #requestCounter = 0;
  #clients = new Array<ClientEncrypted>();
  #requestPerClient: number;

  constructor(requestPerClient: number) {
    this.#requestPerClient = requestPerClient;
  }

  get size() {
    return this.#clients.length;
  }

  add(client: ClientEncrypted) {
    this.#clients.push(client);
    const invoke = client.invoke.bind(client);
    client.invoke = (...args: Parameters<typeof client["invoke"]>) => {
      if (++this.#requestCounter >= this.#requestPerClient) {
        this.#index++;
        if (this.#index >= this.#clients.length - 1) {
          this.#index = 0;
        }
      }
      return invoke(...args);
    };
  }

  nextClient() {
    const client = this.#clients[this.#index];
    return client;
  }

  disconnect() {
    for (const client of this.#clients) {
      client.disconnect();
    }
  }
}
