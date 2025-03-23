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

import { getLogger, Logger } from "../1_utilities.ts";
import { Api, Mtproto, repr, X } from "../2_tl.ts";
import { ConnectionNotInited } from "../3_errors.ts";
import { DC } from "../3_transport.ts";
import { APP_VERSION, DEVICE_MODEL, INITIAL_DC, LANG_CODE, LANG_PACK, SYSTEM_LANG_CODE, SYSTEM_VERSION } from "../4_constants.ts";
import { constructTelegramError } from "../4_errors.ts";
import { SessionEncrypted, SessionError } from "../4_session.ts";
import { ClientAbstract, ClientAbstractParams } from "./0_client_abstract.ts";
import { isCdnFunction } from "./0_utilities.ts";

// global ClientEncrypted ID counter for logs
let id = 0;

export interface ClientEncryptedParams extends ClientAbstractParams {
  /** The app_version parameter to be passed to initConnection. It is recommended that this parameter is changed if users are authorized. Defaults to _MTKruto_. */
  appVersion?: string;
  /** The device_version parameter to be passed to initConnection. The default varies by the current runtime. */
  deviceModel?: string;
  /** The lang_pack parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
  langCode?: string;
  /** The lang_pack parameter to be passed to initConnection. Defaults to an empty string. */
  langPack?: string;
  /** The system_lang_code parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
  systemLangCode?: string;
  /** The system_version parameter to be passed to initConnection. The default varies by the current runtime. */
  systemVersion?: string;
  /** Whether to disable receiving updates. Defaults to `false`. */
  disableUpdates?: boolean;
}

export interface ClientEncryptedHandlers {
  onNewServerSalt?: (newServerSalt: bigint) => void;
  onUpdate?: (update: Api.Updates | Api.Update) => void;
  onDeserializationError?: () => void;
}

interface PendingRequest {
  resolve?: (obj: Api.DeserializedType) => void;
  reject?: (reason?: unknown) => void;
  call: Api.AnyFunction;
}

export class ClientEncrypted extends ClientAbstract {
  static #SEND_MAX_TRIES = 10;

  handlers: ClientEncryptedHandlers = {};

  #L: Logger;
  #session: SessionEncrypted;
  #pendingRequests = new Map<bigint, PendingRequest>();

  #apiId: number;
  #appVersion: string;
  #deviceModel: string;
  #langCode: string;
  #langPack: string;
  #systemLangCode: string;
  #systemVersion: string;
  #disableUpdates: boolean;

  constructor(dc: DC, apiId: number, params?: ClientEncryptedParams) {
    super(dc, params);
    this.#L = getLogger("ClientEncrypted").client(id++);

    this.#session = new SessionEncrypted(INITIAL_DC, params);
    this.#session.handlers.onUpdate = this.#onUpdate.bind(this);
    this.#session.handlers.onNewServerSalt = this.#onNewServerSalt.bind(this);
    this.#session.handlers.onMessageFailed = this.#onMessageFailed.bind(this);
    this.#session.handlers.onRpcError = this.#onRpcError.bind(this);
    this.#session.handlers.onRpcResult = this.#onRpcResult.bind(this);

    this.#apiId = apiId;
    this.#appVersion = params?.appVersion ?? APP_VERSION;
    this.#deviceModel = params?.deviceModel ?? DEVICE_MODEL;
    this.#langCode = params?.langCode ?? LANG_CODE;
    this.#langPack = params?.langPack ?? LANG_PACK;
    this.#systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
    this.#systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
    this.#disableUpdates = params?.disableUpdates ?? false;
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

  #connectionInited = false;
  async #send(function_: Api.AnyFunction) {
    if (this.#disableUpdates && !isCdnFunction(function_)) {
      function_ = { _: "invokeWithoutUpdates", query: function_ };
    }
    if (!this.#connectionInited) {
      function_ = {
        _: "initConnection",
        api_id: this.#apiId,
        app_version: this.#appVersion,
        device_model: this.#deviceModel,
        lang_code: this.#langCode,
        lang_pack: this.#langPack,
        query: {
          _: "invokeWithLayer",
          layer: Api.LAYER,
          query: function_,
        } as Api.Function,
        system_lang_code: this.#systemLangCode,
        system_version: this.#systemVersion,
      };
      this.#connectionInited = true;
    }
    const body = Api.serializeObject(function_);
    let lastErr: unknown;
    for (let i = 0; i < ClientEncrypted.#SEND_MAX_TRIES; ++i) {
      try {
        return await this.#session.send(body);
      } catch (err) {
        lastErr = err;
        if (this.disconnected) {
          break;
        }
        this.#L.error("send failed:", err);
      }
    }
    throw new Error(`Failed to invoke function after ${ClientEncrypted.#SEND_MAX_TRIES} tries.`, { cause: lastErr });
  }

  async #resend(request: PendingRequest) {
    try {
      const messageId = await this.#send(request.call);
      this.#pendingRequests.set(messageId, request);
    } catch (err) {
      request.reject?.(err);
    }
  }

  async invoke<T extends Api.AnyFunction, R = T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, noWait?: boolean): Promise<R | void> {
    const messageId = await this.#send(function_);

    if (noWait) {
      this.#pendingRequests.set(messageId, {
        call: function_,
      });
      return;
    }

    return (await new Promise<Api.DeserializedType>((resolve, reject) => {
      this.#pendingRequests.set(messageId, { resolve, reject, call: function_ });
    })) as R;
  }

  async #onUpdate(body: Uint8Array) {
    let type: Api.DeserializedType;
    try {
      type = await Api.deserializeType(X, body);
    } catch (err) {
      this.#L.error("failed to deserialize update:", err);
      this.handlers.onDeserializationError?.();
      return;
    }
    if (Api.isOfEnum("Update", type) || Api.isOfEnum("Updates", type)) {
      this.handlers.onUpdate?.(type);
    } else {
      this.#L.warning("received unknown type:", repr(type));
    }
  }

  #onNewServerSalt(serverSalt: bigint) {
    this.handlers.onNewServerSalt?.(serverSalt);
  }

  async #onMessageFailed(msgId: bigint, error: SessionError) {
    const request = this.#pendingRequests.get(msgId);
    if (request) {
      this.#pendingRequests.delete(msgId);
      if (error.retry) {
        await this.#resend(request);
      } else if (request.reject) {
        request.reject(error);
      }
    }
  }

  async #onRpcError(msgId: bigint, error: Mtproto.rpc_error) {
    const request = this.#pendingRequests.get(msgId);
    if (request) {
      this.#pendingRequests.delete(msgId);
      if (request.reject) {
        const reason = constructTelegramError(error, request.call);
        if (reason instanceof ConnectionNotInited) {
          this.#connectionInited = false;
          await this.#resend(request);
        } else {
          request.reject(constructTelegramError(error, request.call));
        }
      }
    }
  }

  async #onRpcResult(msgId: bigint, body: Uint8Array) {
    let type: Api.DeserializedType;
    try {
      type = await Api.deserializeType(X, body);
    } catch (err) {
      const request = this.#pendingRequests.get(msgId);
      if (request) {
        this.#pendingRequests.delete(msgId);
        request.reject?.(err);
      }
      this.#L.error("failed to deserialize RPC result body:", err);
      this.handlers.onDeserializationError?.();
      return;
    }

    const promise = this.#pendingRequests.get(msgId);
    if (promise) {
      this.#pendingRequests.delete(msgId);
      promise.resolve?.(type);
    }
  }
}
