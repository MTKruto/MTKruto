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
  #authKey = new Uint8Array();
  #authKeyId = 0n;
  #sessionId = 0n;
  #state = { serverSalt: 0n, seqNo: 0, messageId: 0n };
  #shouldInvalidateSession = true;
  #toAcknowledge = new Array<bigint>();
  #recentAcks = new CacheMap<bigint, { container?: bigint; message: message }>(20);
  #promises = new Map<bigint, { container?: bigint; message: message; resolve?: (obj: Api.DeserializedType | Mtproto.DeserializedType) => void; reject?: (err: Api.DeserializedType | Mtproto.DeserializedType | Error) => void; call: Api.AnyObject | Mtproto.AnyObject }>();

  #session: SessionEncrypted;

  // loggers
  #L: Logger;
  #LreceiveLoop: Logger;
  #Linvoke: Logger;
  #LpingLoop: Logger;

  // receive loop handlers
  handlers: Handlers = {};

  constructor(params?: ClientAbstractParams) {
    super(params);

    this.#session;
    const L = this.#L = getLogger("ClientEncrypted").client(id++);
    this.#LreceiveLoop = L.branch("receiveLoop");
    this.#Linvoke = L.branch("invoke");
    this.#LpingLoop = L.branch("pingLoop");
  }

  override async connect(): Promise<void> {
    await super.connect();
  }

  #reconnecting = false;
  async #reconnect() {
    if (this.connected) {
      return;
    }
    if (this.disconnected) {
      this.#L.debug("not reconnecting");
      return;
    }
    if (this.#reconnecting) {
      return;
    }
    this.#reconnecting = true;
    try {
      let delay = 5;
      while (!this.connected) {
        this.#L.debug("reconnecting");
        this.#pingLoopAbortController?.abort();
        try {
          await this.connect();
          this.#L.debug("reconnected");
          break;
        } catch (err) {
          if (delay < 15) {
            delay += 5;
          }
          this.#L.debug(`failed to reconnect, retrying in ${delay}:`, err);
        }
        await new Promise((r) => setTimeout(r, delay * SECOND));
      }
    } finally {
      this.#reconnecting = false;
    }
  }

  async setAuthKey(key: Uint8Array<ArrayBuffer>) {
    await this.#session.setAuthKey(key);
  }

  async invoke<T extends Api.AnyObject | Mtproto.AnyObject, R = T["_"] extends keyof Mtproto.Functions ? Mtproto.ReturnType<T> extends never ? Mtproto.ReturnType<Mtproto.Functions[T["_"]]> : never : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, noWait?: boolean): Promise<R | void> {
    const messageId = this.#nextMessageId();
    let body: Uint8Array;
    if (Mtproto.isValidObject(function_)) {
      body = Mtproto.serializeObject(function_);
    } else if (Api.isValidObject(function_)) {
      body = Api.serializeObject(function_);
    } else {
      unreachable();
    }
    if (body.length > COMPRESSION_THRESHOLD) {
      body = new TLWriter()
        .writeInt32(Mtproto.GZIP_PACKED, false)
        .writeBytes(await gzip(body))
        .buffer;
    }
    let message_: message = {
      _: "message",
      msg_id: messageId,
      seqno: this.#nextSeqNo(true),
      body,
    };
    const message__ = message_;

    let container: bigint | undefined = undefined;

    if (this.#toAcknowledge.length) {
      const ack: message = {
        _: "message",
        msg_id: this.#nextMessageId(),
        seqno: this.#nextSeqNo(false),
        body: Mtproto.serializeObject({ _: "msgs_ack", msg_ids: this.#toAcknowledge.splice(0, 8192) }),
      };
      this.#recentAcks.set(ack.msg_id, { container, message: ack });
      message_ = {
        _: "message",
        msg_id: container = this.#nextMessageId(),
        seqno: this.#nextSeqNo(false),
        body: {
          _: "msg_container",
          messages: [message_, ack],
        },
      };
    }

    await this.#sendMessage(message_);
    this.#Linvoke.debug("invoked", function_._);

    if (noWait) {
      this.#promises.set(messageId, {
        container,
        message: message_,
        call: function_,
      });
      return;
    }

    return (await new Promise<Api.DeserializedType | Mtproto.DeserializedType>((resolve, reject) => {
      this.#promises.set(messageId, { container, message: message__, resolve, reject, call: function_ });
    })) as R;
  }
}
