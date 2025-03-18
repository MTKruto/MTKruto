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

import { unreachable } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
import { bigIntFromBuffer, CacheMap, drop, getLogger, getRandomBigInt, gunzip, gzip, Logger, sha1, toUnixTimestamp } from "../1_utilities.ts";
import { Api, GZIP_PACKED, is, isGenericFunction, isOfEnum, isOneOf, message, mustGetReturnType, ReadObject, repr, RPC_RESULT, TLError, TLReader, X } from "../2_tl.ts";
import { constructTelegramError } from "../4_errors.ts";
import { TLWriter } from "../tl/2_tl_writer.ts";
import { ClientAbstract } from "./0_client_abstract.ts";
import { ClientAbstractParams } from "./0_client_abstract.ts";
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.ts";

const COMPRESSION_THRESHOLD = 1024;

// global ClientEncrypted ID counter for logs
let id = 0;

export type ErrorSource = "deserialization" | "decryption" | "unknown";

export interface Handlers {
  serverSaltReassigned?: (newServerSalt: bigint) => void;
  updates?: (updates: Api.Updates | Api.Update, call: Api.AnyType | null, callback?: () => void) => void;
  result?: (result: ReadObject, callback: () => void) => void;
  error?: (err: unknown, source: ErrorSource) => void;
}

const RPC_ERROR = Api.getType("rpc_error")![0];

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
  #promises = new Map<bigint, { container?: bigint; message: message; resolve?: (obj: ReadObject) => void; reject?: (err: ReadObject | Error) => void; call: Api.AnyObject }>();
  #loopActive = true;

  // loggers
  #L: Logger;
  #LreceiveLoop: Logger;
  #Linvoke: Logger;

  // receive loop handlers
  handlers: Handlers = {};

  constructor(params?: ClientAbstractParams) {
    super(params);

    const L = this.#L = getLogger("ClientEncrypted").client(id++);
    this.#LreceiveLoop = L.branch("receiveLoop");
    this.#Linvoke = L.branch("invoke");
  }

  override async connect(): Promise<void> {
    await super.connect();
    if (this.#shouldInvalidateSession) {
      this.#sessionId = getRandomBigInt(8, true, false);
      this.#state = { serverSalt: 0n, seqNo: 0, messageId: 0n };
      this.#shouldInvalidateSession = false;
    }
    drop(this.#receiveLoop()); // TODO: ability to join this promise
  }

  async setAuthKey(key: Uint8Array<ArrayBuffer>) {
    const hash = await sha1(key);
    this.#authKeyId = bigIntFromBuffer(hash.slice(-8), true, false);
    this.#authKey = key;
  }

  get authKey(): Uint8Array {
    return this.#authKey;
  }

  set serverSalt(serverSalt: bigint) {
    this.#state.serverSalt = serverSalt;
  }

  get serverSalt(): bigint {
    return this.#state.serverSalt;
  }

  #timeDifference = 0;
  #nextMessageId() {
    return this.#state.messageId = getMessageId(this.#state.messageId, this.#timeDifference);
  }

  #nextSeqNo(contentRelated: boolean) {
    let seqNo = this.#state.seqNo * 2;
    if (contentRelated) {
      seqNo++;
      this.#state.seqNo++;
    }
    return seqNo;
  }

  async #invalidateSession() {
    await this.transport?.transport.deinitialize();
    await this.transport?.connection.close();
    this.#shouldInvalidateSession = true;
  }

  async #sendMessage(message: message) {
    const payload = await encryptMessage(
      message,
      this.#authKey,
      this.#authKeyId,
      this.#state.serverSalt,
      this.#sessionId,
    );
    if (!this.transport) {
      throw new ConnectionError("Not connected.");
    }
    await this.transport!.transport.send(payload);
    this.#L.out(message);
    this.#L.outBin(payload);
  }

  async invoke<T extends Api.AnyObject, R = T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, noWait?: boolean): Promise<R | void> {
    const messageId = this.#nextMessageId();
    let body = new TLWriter().serialize(function_).buffer;
    if (body.length > COMPRESSION_THRESHOLD) {
      body = new TLWriter()
        .writeInt32(GZIP_PACKED, false)
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
        body: new TLWriter().serialize({ _: "msgs_ack", msg_ids: this.#toAcknowledge.splice(0, 8192) }).buffer,
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

    return (await new Promise<ReadObject>((resolve, reject) => {
      this.#promises.set(messageId, { container, message: message__, resolve, reject, call: function_ });
    })) as R;
  }

  async #receiveLoop() {
    if (!this.transport) {
      unreachable();
    }

    for (const [key, { reject }] of this.#promises.entries()) {
      reject?.(new ConnectionError("Connection was closed"));
      this.#promises.delete(key);
    }

    this.#loopActive = true;
    while (this.connected && this.#loopActive) {
      try {
        const buffer = await this.transport.transport.receive();
        this.#L.inBin(buffer);

        let decrypted;
        try {
          decrypted = await (decryptMessage(
            buffer,
            this.#authKey,
            this.#authKeyId,
            this.#sessionId,
          ));
          this.#L.in(decrypted);
        } catch (err) {
          this.#LreceiveLoop.error("failed to decrypt message:", err);
          drop(this.handlers.error?.(err, "decryption"));
          continue;
        }
        const messages = decrypted.body instanceof Uint8Array ? [decrypted] : decrypted.body.messages.map((v) => v);

        for (const message of messages) {
          if (!(message.body instanceof Uint8Array)) {
            unreachable();
          }
          await this.#handleIncomingMessage(message);
        }
      } catch (err) {
        if (!this.connected) {
          break;
        } else if (err instanceof TLError) {
          this.#LreceiveLoop.error("failed to deserialize:", err);
          drop(this.handlers.error?.(err, "deserialization"));
        } else {
          this.#LreceiveLoop.error("unexpected error:", err);
        }
      }
    }

    if (!this.connected) {
      for (const [key, { reject }] of this.#promises.entries()) {
        reject?.(new ConnectionError("Connection was closed"));
        this.#promises.delete(key);
      }
    } else {
      unreachable();
    }
  }

  async #handleIncomingMessage(message: message) {
    const body = message.body;
    if (!(body instanceof Uint8Array)) {
      unreachable();
    }
    let reader = new TLReader(body);
    const id = reader.readInt32(false);
    if (id == GZIP_PACKED) {
      reader = new TLReader(await gunzip(reader.readBytes()));
    } else if (id == RPC_RESULT) {
      await this.#handleRpcResult(reader);
    } else {
      await this.#handleType(message, id, reader);
      return;
    }
    this.#toAcknowledge.push(message.msg_id);
  }

  async #handleRpcResult(reader: TLReader) {
    const messageId = reader.readInt64();
    const promise = this.#promises.get(messageId);
    if (!promise) {
      return;
    }
    const id = reader.readInt32(false);
    if (id == GZIP_PACKED) {
      reader = new TLReader(await gunzip(reader.readBytes()));
    }
    // deno-lint-ignore no-explicit-any
    let call: any = promise?.call ?? null;
    if (isGenericFunction(call)) {
      call = call.query;
    }
    // deno-lint-ignore no-explicit-any
    let result: any;
    if (id == RPC_ERROR) {
      result = reader.deserialize("rpc_error", id);
      this.#LreceiveLoop.debug("RPCResult:", result.error_code, result.error_message);
    } else {
      result = reader.deserialize(mustGetReturnType(call._));
      this.#LreceiveLoop.debug("RPCResult:", Array.isArray(result) ? "Array" : typeof result === "object" ? result._ : result);
    }
    const resolvePromise = () => {
      if (is("rpc_error", result)) {
        promise.reject?.(constructTelegramError(result, promise.call));
      } else {
        promise.resolve?.(result);
      }
      this.#promises.delete(messageId);
    };
    if (isOfEnum("Updates", result) || isOfEnum("Update", result)) {
      drop(this.handlers.updates?.(result, call, resolvePromise));
    } else {
      drop(this.handlers.result?.(result, resolvePromise));
    }
  }

  async #handleType(message: message, id: number, reader: TLReader) {
    const body = await reader.deserialize(X, id);
    this.#LreceiveLoop.debug("received", repr(body));

    let sendAck = true;
    if (isOfEnum("Updates", body) || isOfEnum("Update", body)) {
      drop(this.handlers.updates?.(body as Api.Updates | Api.Update, null));
    } else if (is("new_session_created", body)) {
      this.serverSalt = body.server_salt;
      drop(this.handlers.serverSaltReassigned?.(this.serverSalt));
      this.#LreceiveLoop.debug("new session created with ID", body.unique_id);
    } else if (is("pong", body)) {
      const promise = this.#promises.get(body.msg_id);
      if (promise) {
        promise.resolve?.(body);
        this.#promises.delete(body.msg_id);
      }
    } else if (is("bad_server_salt", body)) {
      sendAck = false;
      this.#LreceiveLoop.debug("server salt reassigned");
      this.serverSalt = body.new_server_salt;
      drop(this.handlers.serverSaltReassigned?.(this.serverSalt));
      const promise = this.#promises.get(body.bad_msg_id);
      const ack = this.#recentAcks.get(body.bad_msg_id);
      if (promise) {
        drop(this.#sendMessage(promise.message));
      } else if (ack) {
        drop(this.#sendMessage(ack.message));
      } else {
        for (const promise of this.#promises.values()) {
          if (promise.container && promise.container == body.bad_msg_id) {
            drop(this.#sendMessage(promise.message));
          }
        }
        for (const ack of this.#recentAcks.values()) {
          if (ack.container && ack.container == body.bad_msg_id) {
            drop(this.#sendMessage(ack.message));
          }
        }
      }
    } else if (is("bad_msg_notification", body)) {
      sendAck = false;
      let low = false;
      switch (body.error_code) {
        case 16: // message ID too low
          low = true;
          /* falls through */
        case 17: // message ID too high
          this.#timeDifference = Math.abs(toUnixTimestamp(new Date()) - Number(message.msg_id >> 32n));
          if (!low) {
            this.#timeDifference = -this.#timeDifference;
            this.#LreceiveLoop.debug("message ID too high, invalidating session");
            await this.#invalidateSession();
            this.#loopActive = false;
          } else {
            this.#LreceiveLoop.debug("message ID too low, resending message");
          }
          break;
        case 48: // bad server salt
          // resend
          this.#LreceiveLoop.debug("resending message that caused bad_server_salt");
          break;
        default:
          await this.#invalidateSession();
          this.#LreceiveLoop.debug("invalidating session because of unexpected bad_msg_notification:", body.error_code);
          this.#loopActive = false;
      }
      const promise = this.#promises.get(body.bad_msg_id);
      if (promise) {
        promise.reject?.(body);
        this.#promises.delete(body.bad_msg_id);
      }
    } else if (isOneOf(["msg_detailed_info", "msg_new_detailed_info"], body)) {
      sendAck = false;
      this.#toAcknowledge.push(body.answer_msg_id);
    }

    if (sendAck) {
      this.#toAcknowledge.push(message.msg_id);
    }
  }
}
