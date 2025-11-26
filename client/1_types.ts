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

import type { Api, Mtproto } from "../2_tl.ts";
import type { ConnectionState, ID, ParseMode, PeerGetter, Update } from "../3_types.ts";
import type { InvokeParams } from "./0_params.ts";
import type { StorageOperations } from "./0_storage_operations.ts";

export interface C {
  id: number;
  getUploadPoolSize: () => Promise<number>;
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
  getPeer: PeerGetter;
  handleUpdate: (update: Update) => void;
  parseMode: ParseMode;
  outgoingMessages: boolean;
  dropPendingUpdates: boolean | undefined;
  disconnected: () => boolean;
  langPack: string | undefined;
  langCode: string | undefined;
  invoke<T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams & { businessConnectionId?: string }): Promise<R>;
}
