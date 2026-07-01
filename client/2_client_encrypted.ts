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

import { concat, delay, ige256Encrypt, SECOND } from "../0_deps.ts";
import { drop, fromUnixTimestamp, getLogger, getRandomId, intFromBytes, type Logger, type MaybePromise, mod, sha1, toUnixTimestamp } from "../1_utilities.ts";
import { Api, type message, Mtproto, serializeMessage, TLWriter, X } from "../2_tl.ts";
import type { DC } from "../3_transport.ts";
import { APP_VERSION, DEVICE_MODEL, LANG_CODE, LANG_PACK, SYSTEM_LANG_CODE, SYSTEM_VERSION, TEMPORARY_AUTH_KEY_TTL } from "../4_constants.ts";
import { ConnectionError, ConnectionNotInited, constructTelegramError, InputError, RetryError, type TransportError } from "../4_errors.ts";
import { SessionEncrypted, SessionError } from "../4_session.ts";
import { AbortableLoop } from "./0_abortable_loop.ts";
import { ClientAbstract } from "./0_client_abstract.ts";
import { isMediaFunction, repr } from "./0_utilities.ts";
import { ClientPlain, type ClientPlainParams } from "./1_client_plain.ts";

// global ClientEncrypted ID counter for logs
let id = 0;

type SentRequest = { call: Api.AnyFunction | Mtproto.ping; promiseWithResolvers: PromiseWithResolvers<Api.DeserializedType | Mtproto.DeserializedType> };

export interface ClientEncryptedParams extends ClientPlainParams {
  /** The app_version parameter to be passed to initConnection. It is recommended that this parameter is changed if users are authorized. Defaults to _MTKruto_. */
  appVersion?: string;
  /** The device_model parameter to be passed to initConnection. The default varies by the current runtime. */
  deviceModel?: string;
  /** The lang_code parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
  langCode?: string;
  /** The lang_pack parameter to be passed to initConnection. Defaults to an empty string. */
  langPack?: string;
  /** The system_lang_code parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
  systemLangCode?: string;
  /** The system_version parameter to be passed to initConnection. The default varies by the current runtime. */
  systemVersion?: string;
  /** Whether to disable receiving updates. Defaults to `false`. */
  disableUpdates?: boolean;
  /** Whether perfect forward secrecy should be enabled. Defaults to `false`. */
  isPerfectForwardSecrecyEnabled?: boolean;
}

export interface ClientEncryptedHandlers {
  onNewServerSalt?: (newServerSalt: bigint) => MaybePromise<void>;
  onUpdate?: (update: Api.Updates | Api.Update) => MaybePromise<void>;
  onDeserializationError?: () => MaybePromise<void>;
}

export class ClientEncrypted extends ClientAbstract {
  static #SEND_MAX_TRIES = 10;
  static #AUTH_KEY_CREATION_MAX_TRIES = 10;

  handlers: ClientEncryptedHandlers = {};

  #L: Logger;
  #dc: DC;
  #apiId: number;
  #params: ClientEncryptedParams | undefined;

  #authKey = new Uint8Array();
  #authKeyId = 0n;
  #temporaryAuthKey = new Uint8Array();
  #temporaryAuthKeyExpiresAt = 0;
  session: SessionEncrypted;
  #sentRequests = new Map<bigint, SentRequest>();
  #isAuthKeyBound = false;
  #isPerfectForwardSecrecyEnabled = false;

  constructor(dc: DC, apiId: number, params?: ClientEncryptedParams) {
    super();
    this.#L = getLogger("ClientEncrypted").client(id++);

    this.#dc = dc;
    this.#apiId = apiId;
    this.#params = params;
    this.#isPerfectForwardSecrecyEnabled = params?.isPerfectForwardSecrecyEnabled ?? false;

    this.session = new SessionEncrypted(dc, params);
    this.session.handlers.onTransportError = this.#onTransportError.bind(this);
    this.session.handlers.onUpdate = this.#onUpdate.bind(this);
    this.session.handlers.onNewServerSalt = this.#onNewServerSalt.bind(this);
    this.session.handlers.onMessageFailed = this.#onMessageFailed.bind(this);
    this.session.handlers.onRpcError = this.#onRpcError.bind(this);
    this.session.handlers.onRpcResult = this.#onRpcResult.bind(this);
    this.session.handlers.onPong = this.#onPong.bind(this);
  }

  async #encryptMessage(message: message) {
    const payloadWriter = new TLWriter();

    payloadWriter.writeInt64(getRandomId());
    payloadWriter.writeInt64(getRandomId());
    payloadWriter.write(await serializeMessage(message));

    let payload = payloadWriter.buffer;

    const payloadSha1 = await sha1(payload);
    const messageKey = payloadSha1.subarray(4, 20);

    payloadWriter.write(new Uint8Array(mod(-payload.byteLength, 16)));
    payload = payloadWriter.buffer;

    const sha1A = await sha1(concat([messageKey, this.#authKey.subarray(0, 32)]));
    const sha1B = await sha1(concat([this.#authKey.slice(32, 48), messageKey, this.#authKey.slice(48, 64)]));
    const sha1C = await sha1(concat([this.#authKey.slice(64, 96), messageKey]));
    const sha1D = await sha1(concat([messageKey, this.#authKey.slice(96, 128)]));

    const encryptionKey = concat([sha1A.slice(0, 8), sha1B.slice(8, 20), sha1C.slice(4, 16)]);
    const encryptionIv = concat([sha1A.slice(8, 20), sha1B.slice(0, 8), sha1C.slice(16, 20), sha1D.slice(0, 8)]);

    const encrypted = ige256Encrypt(payload, encryptionKey, encryptionIv);

    const messageWriter = new TLWriter();
    messageWriter.writeInt64(this.#authKeyId);
    messageWriter.write(messageKey);
    messageWriter.write(encrypted);
    return messageWriter.buffer;
  }

  #connectPromise?: Promise<void>;
  override connect(): Promise<void> {
    return this.#connectPromise ??= this.#connect().finally(() => this.#connectPromise = undefined);
  }

  async #connect() {
    if (!this.authKey.byteLength) {
      await this.#createAuthKey();
    } else if (this.#isPerfectForwardSecrecyEnabled) {
      this.#L.debug("creating temporary auth key");
      await this.#createAuthKeyInner(true);
    }
    await super.connect();

    if (this.#isPerfectForwardSecrecyEnabled) {
      this.#isAuthKeyBound = false;
      await this.#bindTemporaryAuthKey();
      this.#refreshTemporaryAuthKey();
    } else {
      this.#isAuthKeyBound = true;
    }
  }

  async #bindTemporaryAuthKey() {
    const nonce = getRandomId();
    const expires_at = toUnixTimestamp(new Date()) + TEMPORARY_AUTH_KEY_TTL;
    this.#temporaryAuthKeyExpiresAt = fromUnixTimestamp(expires_at).getTime();
    const object: Mtproto.bind_auth_key_inner = {
      _: "bind_auth_key_inner",
      perm_auth_key_id: this.#authKeyId,
      nonce,
      expires_at,
      temp_auth_key_id: this.session.authKeyId,
      temp_session_id: this.session.id,
    };
    const encrypted_message = await this.#encryptMessage({
      _: "message",
      seqno: 0,
      msg_id: this.session.previewNextMessageId(),
      body: Mtproto.serializeObject(object),
    });
    await this.invoke({
      _: "auth.bindTempAuthKey",
      perm_auth_key_id: this.#authKeyId,
      nonce,
      encrypted_message,
      expires_at,
    }), this.#isAuthKeyBound = true;
  }

  #temporaryAuthKeyRefreshLoop = new AbortableLoop(async (_loop, signal) => {
    await delay(60 * SECOND, { signal });
    signal.throwIfAborted();
    if (this.#temporaryAuthKeyExpiresAt - Date.now() > 5 * SECOND) {
      return;
    }
    this.#L.debug("reconnecting with a new temporary auth key");
    this.disconnect();
    drop(this.connect());
  }, (loop, err) => {
    if (this.isDisconnected) {
      loop.abort();
    } else {
      this.#L.error("temporary auth key refresh loop error:", err);
    }
  });

  #refreshTemporaryAuthKey() {
    this.#temporaryAuthKeyRefreshLoop.start();
  }

  override disconnect() {
    super.disconnect();
    this.#temporaryAuthKeyRefreshLoop.abort();
    this.lastRequest = undefined;
    const error = new ConnectionError("The connection was closed.");
    for (const request of this.#sentRequests.values()) {
      request.promiseWithResolvers.reject(error);
    }
    this.#sentRequests.clear();
  }

  #createAuthKeyPromise?: Promise<unknown>;
  #createAuthKey() {
    return this.#createAuthKeyPromise ??= (this.#isPerfectForwardSecrecyEnabled ? Promise.all([this.#createAuthKeyInner(false), this.#createAuthKeyInner(true)]) : this.#createAuthKeyInner(false)).finally(() => {
      this.#createAuthKeyPromise = undefined;
    });
  }
  async #createAuthKeyInner(isTemporary: boolean) {
    let lastErr: unknown;
    let errored = false;
    const plain = new ClientPlain(this.#dc, this.#params);
    for (let i = 0; i < ClientEncrypted.#AUTH_KEY_CREATION_MAX_TRIES; ++i) {
      try {
        await plain.connect();
        const [authKey, serverSalt] = await plain.createAuthKey(isTemporary);
        if (isTemporary) {
          this.#temporaryAuthKey = authKey;
          await this.session.setAuthKey(this.#temporaryAuthKey);
          this.session.serverSalt = serverSalt;
          this.#isConnectionInitialized = false;
        } else {
          await this.setAuthKey(authKey);
        }
        if (!this.#isPerfectForwardSecrecyEnabled) {
          await this.session.setAuthKey(authKey);
          this.session.serverSalt = serverSalt;
        }
        errored = false;
        break;
      } catch (err) {
        errored = true;
        lastErr = err;
        if (this.isDisconnected) {
          break;
        }
        this.#L.error("failed to create auth key:", err);
      } finally {
        plain.disconnect();
      }
    }
    if (errored) {
      throw lastErr;
    }
  }

  get authKey(): Uint8Array<ArrayBuffer> {
    return this.#isPerfectForwardSecrecyEnabled ? this.#authKey : this.session.authKey;
  }

  async setAuthKey(authKey: Uint8Array<ArrayBuffer>) {
    if (this.#isPerfectForwardSecrecyEnabled) {
      const hash = await sha1(authKey);
      this.#authKeyId = intFromBytes(hash.slice(-8));
      this.#authKey = authKey;
    } else {
      await this.session.setAuthKey(authKey);
    }
  }

  #isConnectionInitialized = false;
  lastRequest?: Date;
  async #send(function_: Api.AnyFunction | Mtproto.ping, onMessageId: (messageId: bigint) => () => void) {
    this.lastRequest = new Date();
    let body: Uint8Array<ArrayBuffer>;
    if (Mtproto.is("ping", function_)) {
      body = Mtproto.serializeObject(function_);
    } else {
      if (this.#isAuthKeyBound && this.#params?.disableUpdates && !isMediaFunction(function_)) {
        function_ = { _: "invokeWithoutUpdates", query: function_ };
      }
      if (this.#isAuthKeyBound && !this.#isConnectionInitialized) {
        if (!this.#apiId) {
          throw new InputError("apiId not set");
        }
        function_ = {
          _: "initConnection",
          api_id: this.#apiId,
          app_version: this.#params?.appVersion ?? APP_VERSION,
          device_model: this.#params?.deviceModel ?? DEVICE_MODEL,
          lang_code: this.#params?.langCode ?? LANG_CODE,
          lang_pack: this.#params?.langPack ?? LANG_PACK,
          query: {
            _: "invokeWithLayer",
            layer: Api.LAYER,
            query: function_,
          } as Api.Function,
          system_lang_code: this.#params?.systemLangCode ?? SYSTEM_LANG_CODE,
          system_version: this.#params?.systemVersion ?? SYSTEM_VERSION,
        };
      }
      body = Api.serializeObject(function_);
    }
    let lastErr: unknown;
    for (let i = 0; i < ClientEncrypted.#SEND_MAX_TRIES; ++i) {
      let errored = false;
      try {
        return await this.session.send(body, onMessageId);
      } catch (err) {
        errored = true;
        lastErr = err;
        if (this.isDisconnected) {
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
    throw new RetryError(`Failed to invoke function after ${ClientEncrypted.#SEND_MAX_TRIES} tries.`, { cause: lastErr });
  }

  async #resend(request: SentRequest) {
    try {
      await this.#send(request.call, (messageId) => {
        this.#sentRequests.set(messageId, request);
        return () => this.#sentRequests.delete(messageId);
      });
    } catch (err) {
      this.#L.error("rejecting message because of resend error:", err);
      request.promiseWithResolvers.reject(err);
    }
  }

  async invoke<T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T): Promise<R> {
    const sentRequest: SentRequest = { call: function_, promiseWithResolvers: Promise.withResolvers() };
    await this.#send(function_, (messageId) => {
      this.#L.debug("sending", function_._, "with msg_id", messageId);
      this.#sentRequests.set(messageId, sentRequest);
      return () => this.#sentRequests.delete(messageId);
    });
    return await sentRequest.promiseWithResolvers.promise as R;
  }

  async #onTransportError(transportError: TransportError) {
    this.#L.error("transport error:", transportError);
    if (!this.#isPerfectForwardSecrecyEnabled) {
      return;
    }
    if (transportError.code === -404) {
      this.#L.debug("reconnecting with a new temporary auth key");
      this.disconnect();
      await this.connect();
    }
  }

  async #onUpdate(body: Uint8Array) {
    let type: Api.DeserializedType;
    try {
      type = await Api.deserializeType(X, body);
    } catch (err) {
      this.#L.error("failed to deserialize update:", err);
      await this.handlers.onDeserializationError?.();
      return;
    }
    if (Api.isOfEnum("Update", type) || Api.isOfEnum("Updates", type)) {
      await this.handlers.onUpdate?.(type);
    } else {
      this.#L.warning("received unknown type:", repr(type));
    }
  }

  #onNewServerSalt(serverSalt: bigint) {
    drop(this.handlers.onNewServerSalt?.(serverSalt));
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
    if (error.error_message === "AUTH_KEY_PERM_EMPTY" || error.error_message === "ENCRYPTED_MESSAGE_INVALID") {
      this.#L.debug("reconnecting with a new temporary auth key because of", error.error_message);
      this.disconnect();
      await this.connect();
    }

    const request = this.#sentRequests.get(msgId);
    this.#L.debug("received rpc_error with req_msg_id =", msgId, "for", request === undefined ? "unknown" : "known", "request");
    if (request) {
      this.#sentRequests.delete(msgId);
      const reason = constructTelegramError(error, request.call);
      if (reason instanceof ConnectionNotInited) {
        this.#isConnectionInitialized = false;
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
        await this.handlers.onDeserializationError?.();
        return;
      } finally {
        this.#sentRequests.delete(msgId);
      }
    }
    if (!this.#isConnectionInitialized) {
      this.#isConnectionInitialized = true;
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
