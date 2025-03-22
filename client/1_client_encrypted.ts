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

import { SECOND, unreachable } from "../0_deps.ts";
import { CacheMap, getLogger, gzip, Logger } from "../1_utilities.ts";
import { Api, message, Mtproto, TLWriter, X } from "../2_tl.ts";
import { SessionEncrypted } from "../4_session.ts";
import { ClientAbstract } from "./0_client_abstract.ts";
import { ClientAbstractParams } from "./0_client_abstract.ts";

const COMPRESSION_THRESHOLD = 1024;

// global ClientEncrypted ID counter for logs
let id = 0;

export type ErrorSource = "deserialization" | "decryption" | "unknown";

export interface Handlers {
  serverSaltReassigned?: (newServerSalt: bigint) => void;
  updates?: (updates: Api.Updates | Api.Update, call: Api.AnyType | null, callback?: () => void) => void;
  result?: (result: Api.DeserializedType, callback: () => void) => void;
  error?: (err: unknown, source: ErrorSource) => void;
}

/**
 * An MTProto client for making encrypted connections. Most users won't need to interact with this. Used internally by `Client`.
 *
 * There are a few things to note:
 *
 * - This is a bare client and it stores nothing.
 * - It expects an authorization key to be present before invoking any method.
 * - Authorization must be set using `setAuthKey`.
 * - Incoming packets that aren't a reply to a specific call are passed to the assigned handlers.
 * - It doesn't uncompress compressed packets.
 */
export class ClientEncrypted extends ClientAbstract {
  #promises = new Map<bigint, { resolve?: (obj: Api.DeserializedType) => void; reject?: (err: Api.DeserializedType | Error) => void; call: Api.AnyObject }>();

  #session!: SessionEncrypted;

  // loggers
  #L: Logger;
  #LreceiveLoop: Logger;
  #Linvoke: Logger;
  #LpingLoop: Logger;

  // receive loop handlers
  handlers: Handlers = {};

  constructor() {
    super();
    this.#session.handlers = {};
    this.#session.handlers.onMessageFailed = this.#onMessageFailed.bind(this);
  }

  async invoke<T extends Api.AnyObject, R = T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, noWait?: boolean): Promise<R | void> {
    const messageId = await this.#session.send(Api.serializeObject(function_));
    this.#Linvoke.debug("invoked", function_._);

    if (noWait) {
      this.#promises.set(messageId, {
        call: function_,
      });
      return;
    }

    return (await new Promise<Api.DeserializedType>((resolve, reject) => {
      this.#promises.set(messageId, { resolve, reject, call: function_ });
    })) as R;
  }

  #onMessageFailed(msgId: bigint) {
  }
}
