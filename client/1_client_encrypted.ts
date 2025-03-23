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
import { APP_VERSION, DEVICE_MODEL, INITIAL_DC, LANG_CODE, LANG_PACK, SYSTEM_LANG_CODE, SYSTEM_VERSION } from "../4_constants.ts";
import { ConnectionNotInited } from "../3_errors.ts";
import { isCdnFunction } from "./0_utilities.ts";

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
}

export class ClientEncrypted extends ClientAbstract {
  #promises = new Map<bigint, { resolve?: (obj: Api.DeserializedType) => void; reject?: (reason?: unknown) => void; call: Api.AnyObject }>();

  #session: SessionEncrypted;

  // receive loop handlers
  handlers: ClientEncryptedHandlers = {};

  #appVersion: string;
  #deviceModel: string;
  #langCode: string;
  #langPack: string;
  #systemLangCode: string;
  #systemVersion: string;
  #disableUpdates: boolean;

  constructor(public apiId: number, params?: ClientEncryptedParams) {
    super();
    this.#session = new SessionEncrypted(INITIAL_DC, params);
    this.#session.handlers.onUpdate = this.#onUpdate.bind(this);
    this.#session.handlers.onNewServerSalt = this.#onNewServerSalt.bind(this);
    this.#session.handlers.onMessageFailed = this.#onMessageFailed.bind(this);
    this.#session.handlers.onRpcError = this.#onRpcError.bind(this);
    this.#session.handlers.onRpcResult = this.#onRpcResult.bind(this);

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
  async #send(function_: Api.AnyObject) {
    if (this.#disableUpdates && !isCdnFunction(function_)) {
      function_ = { _: "invokeWithoutUpdates", query: function_ } as unknown as T;
    }
    if (!this.#connectionInited) {
      function_ = {
        _: "initConnection",
        api_id: this.apiId,
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

  async #onRpcError(msgId: bigint, error: Mtproto.rpc_error) {
    const promise = this.#promises.get(msgId);
    if (promise) {
      this.#promises.delete(msgId);
      if (promise.reject) {
        const reason = constructTelegramError(error, promise.call);
        if (reason instanceof ConnectionNotInited) {
          this.#connectionInited = false;
          const messageId = await this.#send(promise.call); // TODO(roj): handle error
          this.#promises.set(messageId, promise);
        } else {
          promise.reject(constructTelegramError(error, promise.call));
        }
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
