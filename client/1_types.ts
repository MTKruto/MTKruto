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

import { Api } from "../2_tl.ts";
import { ConnectionState, EntityGetter, ID, ParseMode, Update } from "../3_types.ts";
import { StorageOperations } from "./0_storage_operations.ts";

export type Invoke = <T extends Api.AnyFunction<P>, P extends Api.Function, R extends unknown = Api.ReturnType<Api.Functions[T["_"]]>>(function_: T, businessConnectionId?: string) => Promise<R>;

interface Connection {
  invoke: Invoke;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}
export interface ConnectionPool extends Omit<Connection, "invoke"> {
  size: number;
  invoke: () => Invoke;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

interface GetCdnConnection {
  (dcId?: number): Connection;
}
interface GetCdnConnectionPool {
  (size: number, dcId?: number): ConnectionPool;
}

export interface C {
  id: number;
  storage: StorageOperations;
  messageStorage: StorageOperations;
  guaranteeUpdateDelivery: boolean;
  setConnectionState: (connectionState: ConnectionState) => void;
  resetConnectionState: () => void;
  getSelfId: () => Promise<number>;
  getInputPeer: (id: ID) => Promise<Api.InputPeer>;
  getInputChannel: (id: ID) => Promise<Api.inputChannel | Api.inputChannelFromMessage>;
  getInputUser: (id: ID) => Promise<Api.inputUserSelf | Api.inputUser | Api.inputUserFromMessage>;
  getInputPeerChatId: (inputPeer: Api.InputPeer | Api.InputUser | Api.InputChannel) => Promise<number>;
  getEntity: EntityGetter;
  handleUpdate: (update: Update) => void;
  parseMode: ParseMode;
  getCdnConnection: GetCdnConnection;
  getCdnConnectionPool: GetCdnConnectionPool;
  outgoingMessages: "none" | "business" | "all" | null;
  cdn: boolean;
  dropPendingUpdates?: boolean;
  invoke: Invoke;
  disconnected: () => boolean;
  langPack?: string;
  langCode?: string;
}
