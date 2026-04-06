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

import { concat, isIPv4, isIPv6 } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
import { encodeText, getLogger, ipv4ToBytes, ipv6ToBytes, Mutex } from "../1_utilities.ts";
import type { Connection } from "./0_connection.ts";

const VERSION_SOCKS = 5;
const VERSION_USERNAME_PASSWORD_AUTH = 1;

const AUTH_METHOD_NONE = 0;
const AUTH_METHOD_USERNAME_PASSWORD = 2;

const RESULT_SUCCESS = 0;
const COMMAND_CONNECT = 1;

const ADDRESS_TYPE_4 = 1;
const ADDRESS_TYPE_DOMAIN_NAME = 3;
const ADDRESS_TYPE_6 = 4;

const L = getLogger("ConnectionSocks5");

export interface ConnectionSocks5Params {
  username: string;
  password: string;
}

export class ConnectionSocks5 implements Connection {
  #hostname: string;
  #port: number;
  #socks5Hostname: string;
  #socks5Port: number;
  #credentials?: ConnectionSocks5Params;

  #connection?: Deno.Conn;
  #rMutex = new Mutex();
  #wMutex = new Mutex();
  #canRead = false;
  #canWrite = false;
  stateChangeHandler?: Connection["stateChangeHandler"];
  callback?: Connection["callback"];

  constructor(hostname: string, port: number, socks5Hostname: string, socks5Port: number, params?: ConnectionSocks5Params) {
    this.#hostname = hostname.slice(0, 255);
    this.#port = port;
    this.#socks5Hostname = socks5Hostname;
    this.#socks5Port = socks5Port;
    this.#credentials = params?.username && params.password ? { username: params.username.slice(0, 255), password: params.password.slice(0, 255) } : undefined;
  }

  get isConnected(): boolean {
    return !!this.#connection && this.#canRead && this.#canWrite;
  }

  #assertConnected() {
    if (!this.isConnected) {
      throw new ConnectionError("The connection is not open.");
    }
  }

  async open() {
    if (this.isConnected) {
      return;
    }

    const connection = await Deno.connect({
      hostname: this.#socks5Hostname,
      port: this.#socks5Port,
    });
    connection.setNoDelay(true);
    connection.setKeepAlive(true);
    this.#canRead = this.#canWrite = true;
    this.#connection = connection;

    const header = new Uint8Array([VERSION_SOCKS, 2, AUTH_METHOD_NONE, AUTH_METHOD_USERNAME_PASSWORD]);
    await this.write(header);

    const negotiation = new Uint8Array(2);
    await this.read(negotiation);
    if (negotiation[0] !== VERSION_SOCKS || (negotiation[1] !== AUTH_METHOD_NONE && negotiation[1] !== AUTH_METHOD_USERNAME_PASSWORD)) {
      throw new ConnectionError("Negotiation with SOCKS5 server failed.");
    }

    if (negotiation[1] === AUTH_METHOD_USERNAME_PASSWORD && !this.#credentials) {
      throw new ConnectionError("Username and password are required for connecting to SOCKS5 server.");
    } else if (this.#credentials) {
      await this.write(concat([new Uint8Array([VERSION_USERNAME_PASSWORD_AUTH, this.#credentials.username.length]), encodeText(this.#credentials.username), new Uint8Array([this.#credentials.password.length]), encodeText(this.#credentials.password)]));

      const status = new Uint8Array(2);
      await this.read(status);
      if (status[0] !== VERSION_USERNAME_PASSWORD_AUTH || status[1] !== RESULT_SUCCESS) {
        throw new ConnectionError("SOCKS5 username and password authentication failed.");
      }
    }

    let hostnameType: number;
    let hostname: Uint8Array;
    if (isIPv4(this.#hostname)) {
      hostnameType = ADDRESS_TYPE_4;
      hostname = new Uint8Array(ipv4ToBytes(this.#hostname));
    } else if (isIPv6(this.#hostname)) {
      hostnameType = ADDRESS_TYPE_6;
      hostname = new Uint8Array(ipv6ToBytes(this.#hostname));
    } else {
      hostnameType = ADDRESS_TYPE_DOMAIN_NAME;
      hostname = concat([new Uint8Array([this.#hostname.length]), encodeText(this.#hostname)]);
    }
    const address = concat([new Uint8Array([hostnameType]), hostname, new Uint8Array(2)]);
    new DataView(address.buffer).setUint16(hostname.byteLength + 1, this.#port);

    await this.write(concat([new Uint8Array([VERSION_SOCKS, COMMAND_CONNECT, 0]), address]));

    const status = new Uint8Array(3);
    await this.read(status);
    if (status[0] !== VERSION_SOCKS || status[1] !== RESULT_SUCCESS) {
      throw new ConnectionError("Connection with SOCKS5 server failed.");
    }

    const addressType = new Uint8Array(1);
    await this.read(addressType);
    switch (addressType[0]) {
      case ADDRESS_TYPE_4: {
        const ipv4 = new Uint8Array(4);
        await this.read(ipv4);
        break;
      }
      case ADDRESS_TYPE_6: {
        const ipv4 = new Uint8Array(16);
        await this.read(ipv4);
        break;
      }
      case ADDRESS_TYPE_DOMAIN_NAME: {
        const length = new Uint8Array(1);
        await this.read(length);
        const domainName = new Uint8Array(length[0]);
        await this.read(domainName);
        break;
      }
    }

    const port = new Uint8Array(2);
    await this.read(port);

    this.stateChangeHandler?.(true);
    L.debug("connected to", this.#hostname, "port", this.#port, "through socks5 server", this.#socks5Hostname, "port", this.#socks5Port);
  }

  async read(p: Uint8Array) {
    this.#assertConnected();
    const unlock = await this.#rMutex.lock();
    let offset = 0;

    try {
      do {
        const read = await this.#connection!.read(p.subarray(offset));
        if (read === null) {
          this.#canRead = false;
          this.stateChangeHandler?.(false);
          throw new ConnectionError("The connection was closed.");
        }

        offset += read;
      } while (offset < p.byteLength);
    } catch {
      this.#canRead = false;
      this.stateChangeHandler?.(false);
      throw new ConnectionError("The connection was closed.");
    } finally {
      unlock();
    }
  }

  async write(p: Uint8Array) {
    this.#assertConnected();
    const unlock = await this.#wMutex.lock();
    try {
      this.#assertConnected();
      let written = 0;
      while (written < p.byteLength) {
        try {
          const wrote = await this.#connection!.write(p.subarray(written));
          this.callback?.write(wrote);
          written += wrote;
        } catch {
          this.#canWrite = false;
          this.stateChangeHandler?.(false);
          throw new ConnectionError("The connection was closed.");
        }
      }
    } finally {
      unlock();
    }
  }

  close() {
    this.#assertConnected();
    this.#connection!.close();
    this.#canRead = this.#canWrite = false;
    this.#connection = undefined;
  }
}
