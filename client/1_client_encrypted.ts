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

import { Api, Mtproto, X } from "../2_tl.ts";
import { constructTelegramError } from "../4_errors.ts";
import { SessionEncrypted, SessionError } from "../4_session.ts";
import { ClientAbstract, ClientAbstractParams } from "./0_client_abstract.ts";

export interface ClientEncryptedParams extends ClientAbstractParams {
  /** App's API ID from [my.telegram.org/apps](https://my.telegram.org/apps). Required if no account was previously authorized. */
  apiId?: number;
  /** The app_version parameter to be passed to initConnection. It is recommended that this parameter is changed if users are authorized. Defaults to _MTKruto_. */
  appVersion?: string;
  /** The device_version parameter to be passed to initConnection. The default varies by the current runtime. */
  deviceModel?: string;
  /** The system_lang_code parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
  systemLangCode?: string;
  /** The system_version parameter to be passed to initConnection. The default varies by the current runtime. */
  systemVersion?: string;
  /** Whether to disable receiving updates. UpdateConnectionState and UpdatesAuthorizationState will always be received. Defaults to `false`. */
  disableUpdates?: boolean;
}

export interface ClientEncryptedHandlers {
  onNewServerSalt?: (newServerSalt: bigint) => void;
  onUpdate?: (update: Api.Updates | Api.Update) => void;
}

export class ClientEncrypted extends ClientAbstract {
  #promises = new Map<bigint, { resolve?: (obj: Api.DeserializedType) => void; reject?: (reason?: unknown) => void; call: Api.AnyObject }>();

  #session!: SessionEncrypted;

  // receive loop handlers
  handlers: ClientEncryptedHandlers = {};

  constructor() {
    super();
    this.#session.handlers = {};

    this.#session.handlers.onUpdate = this.#onUpdate.bind(this);
    this.#session.handlers.onNewServerSalt = this.#onNewServerSalt.bind(this);
    this.#session.handlers.onMessageFailed = this.#onMessageFailed.bind(this);
    this.#session.handlers.onRpcError = this.#onRpcError.bind(this);
    this.#session.handlers.onRpcResult = this.#onRpcResult.bind(this);
  }

  async connect() {
    await this.#session.connect();
  }

  get connected() {
    return this.#session.connected;
  }

  disconnect() {
    this.#session.disconnect();
  }

  get disconnected() {
    return this.#session.disconnected;
  }

  async #send(function_: Api.AnyObject) {
    return await this.#session.send(Api.serializeObject(function_));
  }

  async invoke<T extends Api.AnyObject, R = T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, noWait?: boolean): Promise<R | void> {
    const messageId = await this.#send(function_);

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

  async #onUpdate(body: Uint8Array) {
    let type: Api.DeserializedType;
    try {
      type = await Api.deserializeType(X, body);
    } catch (err) {
      // TODO(roj): log
      return;
    }
    if (Api.isOfEnum("Update", type) || Api.isOfEnum("Updates", type)) {
      this.handlers.onUpdate?.(type);
    } else {
      // TOOD(roj): log
      // unknown type
    }
  }

  #onNewServerSalt(serverSalt: bigint) {
    this.handlers.onNewServerSalt?.(serverSalt);
  }

  async #onMessageFailed(msgId: bigint, error: SessionError) {
    const promise = this.#promises.get(msgId);
    if (promise) {
      this.#promises.delete(msgId);
      if (error.retry) {
        const messageId = await this.#send(promise.call);
        this.#promises.set(messageId, promise);
      } else if (promise.reject) {
        promise.reject(error);
      }
    }
  }

  #onRpcError(msgId: bigint, error: Mtproto.rpc_error) {
    const promise = this.#promises.get(msgId);
    if (promise) {
      this.#promises.delete(msgId);
      if (promise.reject) {
        promise.reject(constructTelegramError(error, promise.call));
      }
    }
  }

  async #onRpcResult(msgId: bigint, body: Uint8Array) {
    let type: Api.DeserializedType;
    try {
      type = await Api.deserializeType(X, body);
    } catch (err) {
      const promise = this.#promises.get(msgId);
      if (promise) {
        this.#promises.delete(msgId);
        promise.reject?.(err);
      }
      // TODO(roj): log
      return;
    }

    const promise = this.#promises.get(msgId);
    if (promise) {
      this.#promises.delete(msgId);
      promise.resolve?.(type);
    }
  }
}
