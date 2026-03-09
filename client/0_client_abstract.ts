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

import type { Connection, ConnectionCallback } from "../2_connection.ts";
import type { DC } from "../3_transport.ts";
import type { Session } from "../4_session.ts";

export abstract class ClientAbstract {
  abstract session: Session;

  get dc(): DC {
    return this.session.dc;
  }

  get isCdn(): boolean {
    return this.session.isCdn;
  }

  set serverSalt(serverSalt: bigint) {
    this.session.serverSalt = serverSalt;
  }

  get serverSalt(): bigint {
    return this.session.serverSalt;
  }

  get isConnected(): boolean {
    return this.session.isConnected;
  }

  async connect() {
    await this.session.connect();
  }

  get isDisconnected(): boolean {
    return this.session.isDisconnected;
  }

  disconnect() {
    this.session.disconnect();
  }

  set connectionCallback(connectionCallback: ConnectionCallback | undefined) {
    this.session.connectionCallback = connectionCallback;
  }

  set onConnectionStateChange(onConnectionStateChange: Connection["stateChangeHandler"]) {
    this.session.onConnectionStateChange = onConnectionStateChange;
  }
}
