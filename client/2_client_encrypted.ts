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

import { InputError } from "../0_errors.ts";
import { getLogger, type Logger } from "../1_utilities.ts";
import { Api, Mtproto, X } from "../2_tl.ts";
import { ConnectionNotInited } from "../3_errors.ts";
import type { DC } from "../3_transport.ts";
import { APP_VERSION, DEVICE_MODEL, LANG_CODE, LANG_PACK, SYSTEM_LANG_CODE, SYSTEM_VERSION } from "../4_constants.ts";
import { constructTelegramError } from "../4_errors.ts";
import { SessionEncrypted, SessionError } from "../4_session.ts";
import { ClientAbstract } from "./0_client_abstract.ts";
import { isCdnFunction, repr } from "./0_utilities.ts";
import { ClientPlain, type ClientPlainParams } from "./1_client_plain.ts";

// global ClientEncrypted ID counter for logs
let id = 0;

type SentRequest = { call: Api.AnyFunction | Mtproto.ping; promiseWithResolvers: PromiseWithResolvers<Api.DeserializedType | Mtproto.DeserializedType> };

export interface ClientEncryptedParams extends ClientPlainParams {
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

export class ClientEncrypted extends ClientAbstract {
  static #SEND_MAX_TRIES = 10;
  static #AUTH_KEY_CREATION_MAX_TRIES = 10;

  handlers: ClientEncryptedHandlers = {};

  #L: Logger;
  #plain: ClientPlain;
  session: SessionEncrypted;
  #sentRequests = new Map<bigint, SentRequest>();

  #apiId: number;
  #appVersion: string;
  #deviceModel: string;
  #langCode: string;
  #langPack: string;
  #systemLangCode: string;
  #systemVersion: string;
  #disableUpdates: boolean;

  constructor(dc: DC, apiId: number, params?: ClientEncryptedParams) {
    super();
    this.#L = getLogger("ClientEncrypted").client(id++);

    this.#plain = new ClientPlain(dc, params);
    this.session = new SessionEncrypted(dc, params);
    this.session.handlers.onUpdate = this.#onUpdate.bind(this);
    this.session.handlers.onNewServerSalt = this.#onNewServerSalt.bind(this);
    this.session.handlers.onMessageFailed = this.#onMessageFailed.bind(this);
    this.session.handlers.onRpcError = this.#onRpcError.bind(this);
    this.session.handlers.onRpcResult = this.#onRpcResult.bind(this);
    this.session.handlers.onPong = this.#onPong.bind(this);

    this.#apiId = apiId;
    this.#appVersion = params?.appVersion ?? APP_VERSION;
    this.#deviceModel = params?.deviceModel ?? DEVICE_MODEL;
    this.#langCode = params?.langCode ?? LANG_CODE;
    this.#langPack = params?.langPack ?? LANG_PACK;
    this.#systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
    this.#systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
    this.#disableUpdates = params?.disableUpdates ?? false;
  }

  override async connect() {
    if (!this.authKey.length) {
      await this.#createAuthKey();
    }
    await super.connect();
  }

  override disconnect() {
    super.disconnect();
    this.lastRequest = undefined;
  }

  #createAuthKeyPromise?: Promise<void>;
  #createAuthKey() {
    return this.#createAuthKeyPromise ??= this.#createAuthKeyInner().finally(() => {
      this.#createAuthKeyPromise = undefined;
    });
  }
  async #createAuthKeyInner() {
    let lastErr: unknown;
    let errored = false;
    for (let i = 0; i < ClientEncrypted.#AUTH_KEY_CREATION_MAX_TRIES; ++i) {
      try {
        await this.#plain.connect();
        const [authKey, serverSalt] = await this.#plain.createAuthKey();
        await this.setAuthKey(authKey);
        this.serverSalt = serverSalt;
        errored = false;
        break;
      } catch (err) {
        errored = true;
        lastErr = err;
        if (this.disconnected) {
          break;
        }
        this.#L.error("failed to create auth key:", err);
      } finally {
        this.#plain.disconnect();
      }
    }
    if (errored) {
      throw lastErr;
    }
  }

  get authKey(): Uint8Array<ArrayBuffer> {
    return this.session.authKey;
  }

  async setAuthKey(authKey: Uint8Array<ArrayBuffer>) {
    await this.session.setAuthKey(authKey);
  }

  #connectionInited = false;
  lastRequest?: Date;
  async #send(function_: Api.AnyFunction | Mtproto.ping) {
    this.lastRequest = new Date();
    let body: Uint8Array<ArrayBuffer>;
    if (Mtproto.is("ping", function_)) {
      body = Mtproto.serializeObject(function_);
    } else {
      if (this.#disableUpdates && !isCdnFunction(function_)) {
        function_ = { _: "invokeWithoutUpdates", query: function_ };
      }
      if (!this.#connectionInited) {
        if (!this.#apiId) {
          throw new InputError("apiId not set");
        }
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
      }
      body = Api.serializeObject(function_);
    }
    let lastErr: unknown;
    for (let i = 0; i < ClientEncrypted.#SEND_MAX_TRIES; ++i) {
      let errored = false;
      try {
        return await this.session.send(body);
      } catch (err) {
        errored = true;
        lastErr = err;
        if (this.disconnected) {
          break;
        }
        this.#L.error("send failed:", err);
      } finally {
        if (!errored) {
          this.#L.debug("invoked", repr(function_));
          this.#L.out(function_);
        }
      }
    }
    throw new Error(`Failed to invoke function after ${ClientEncrypted.#SEND_MAX_TRIES} tries.`, { cause: lastErr });
  }

  async #resend(request: SentRequest) {
    try {
      const messageId = await this.#send(request.call);
      this.#sentRequests.set(messageId, request);
    } catch (err) {
      this.#L.error("rejecting message because of resend error:", err);
      request.promiseWithResolvers.reject(err);
    }
  }

  async invoke<T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T): Promise<R> {
    const messageId = await this.#send(function_);
    this.#L.debug("sent", function_._, "with msg_id", messageId);
    const sentRequest: SentRequest = { call: function_, promiseWithResolvers: Promise.withResolvers() };
    this.#sentRequests.set(messageId, sentRequest);
    return await sentRequest.promiseWithResolvers.promise as R;
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

  async #onMessageFailed(msgId: bigint, error: unknown) {
    const request = this.#sentRequests.get(msgId);
    if (request) {
      this.#sentRequests.delete(msgId);
      if (error instanceof SessionError) {
        await this.#resend(request);
      } else {
        request.promiseWithResolvers.reject(error);
      }
    }
  }

  async #onRpcError(msgId: bigint, error: Mtproto.rpc_error) {
    const request = this.#sentRequests.get(msgId);
    this.#L.debug("received rpc_error with req_msg_id =", msgId, "for", request === undefined ? "unknown" : "known", "request");
    if (request) {
      this.#sentRequests.delete(msgId);
      const reason = constructTelegramError(error, request.call);
      if (reason instanceof ConnectionNotInited) {
        this.#connectionInited = false;
        await this.#resend(request);
      } else {
        request.promiseWithResolvers.reject(constructTelegramError(error, request.call));
      }
    }
  }

  async #onRpcResult(msgId: bigint, body: Uint8Array) {
    const sentRequest = this.#sentRequests.get(msgId);
    this.#L.debug("received rpc_result with req_msg_id =", msgId, "for", sentRequest === undefined ? "unknown" : "known", "request");
    if (sentRequest) {
      let type: Api.DeserializedType;
      try {
        type = await Api.deserializeType(Api.mustGetReturnType(sentRequest.call._), body);
        this.#L.in(type);
        this.#L.debug("received rpc_result", repr(type));
        sentRequest.promiseWithResolvers.resolve(type);
      } catch (err) {
        sentRequest.promiseWithResolvers.reject(err);
        this.#L.error("failed to deserialize rpc_result body:", err);
        this.handlers.onDeserializationError?.();
        return;
      } finally {
        this.#sentRequests.delete(msgId);
      }
    }
    if (!this.#connectionInited) {
      this.#connectionInited = true;
    }
  }

  #onPong(pong: Mtproto.pong) {
    const sentRequest = this.#sentRequests.get(pong.msg_id);
    if (sentRequest) {
      sentRequest.promiseWithResolvers.resolve(pong);
      this.#sentRequests.delete(pong.msg_id);
    }
  }
}
