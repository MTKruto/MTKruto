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

import { assertEquals, concat, delay, ige256Decrypt, ige256Encrypt, initTgCrypto, LruCache, SECOND } from "../0_deps.ts";
import { ConnectionError, TransportError } from "../0_errors.ts";
import { bigIntFromBuffer, bufferFromBigInt, drop, getLogger, getRandomId, gunzip, type Logger, mod, sha1, sha256, toUnixTimestamp } from "../1_utilities.ts";
import { deserializeMessage, type message, type msg_container, Mtproto, repr, serializeMessage, TLReader, X } from "../2_tl.ts";
import type { DC } from "../3_transport.ts";
import { AbortableLoop } from "../client/0_abortable_loop.ts";
import { TLWriter } from "../tl/1_tl_writer.ts";
import { SessionError } from "./0_session_error.ts";
import { Session, type SessionParams } from "./1_session.ts";

// global SessionEncrypted ID counter for logs
let id = 0;

const GZIP_PACKED = 0x3072CFA1;
const RPC_RESULT = 0xF35C6D01;
const RPC_ERROR = Mtproto.schema.definitions["rpc_error"][0];

type PendingMessage = { body: Uint8Array<ArrayBuffer>; promiseWithResolvers: PromiseWithResolvers<bigint> };

type PendingPing = { call: Mtproto.ping_delay_disconnect; promiseWithResolvers: PromiseWithResolvers<Mtproto.pong> };

export interface Handlers {
  onUpdate?: (body: Uint8Array) => void;
  onNewServerSalt?: (serverSalt: bigint) => void;
  onMessageFailed?: (id: bigint, reason: unknown) => void;
  onPong?: (pong: Mtproto.pong) => void;
  onRpcError?: (id: bigint, error: Mtproto.rpc_error) => void;
  onRpcResult?: (id: bigint, result: Uint8Array) => void;
}

export class SessionEncrypted extends Session implements Session {
  static #TGCRYPTO_INITED = false;

  #id = getRandomId();
  handlers: Handlers = {};
  #L: Logger;
  #LsendLoop: Logger;
  #LreceiveLoop: Logger;
  #LpingLoop: Logger;

  #authKey = new Uint8Array();
  #authKeyId = 0n;

  #sentMessages = new Set<bigint>();
  #pendingMessages = new Array<PendingMessage>();
  #containers = new LruCache<bigint, bigint[]>(20_000);
  #pendingPings = new Map<bigint, PendingPing>();

  #toAcknowledge = new Array<bigint>();
  #pendingAcks = new LruCache<bigint, bigint[]>(100);

  constructor(dc: DC, params?: SessionParams) {
    super(dc, params);
    const L = this.#L = getLogger("SessionEncrypted").client(id++);
    this.#LsendLoop = L.branch("sendLoop");
    this.#LreceiveLoop = L.branch("receiveLoop");
    this.#LpingLoop = L.branch("pingLoop");
  }

  async setAuthKey(key: Uint8Array<ArrayBuffer>) {
    const hash = await sha1(key);
    this.#authKeyId = bigIntFromBuffer(hash.slice(-8), true, false);
    this.#authKey = key;
  }

  get authKey(): Uint8Array<ArrayBuffer> {
    return this.#authKey;
  }

  override async connect(): Promise<void> {
    if (!this.connected) {
      this.#rejectAllPending(new ConnectionError("Not connected."));
    }
    await super.connect();
    if (!SessionEncrypted.#TGCRYPTO_INITED) {
      await initTgCrypto();
      SessionEncrypted.#TGCRYPTO_INITED = true;
    }
    this.#receiveLoop.start();
    this.#sendLoop.start();
    this.#pingLoop.start();
    this.#awakeSendLoop?.();
  }

  override disconnect(): void {
    super.disconnect();
    this.state.reset();
    this.#id = getRandomId();
    this.#pingLoop.abort();
    this.#awakeSendLoop?.();
    this.#rejectAllPending(new ConnectionError("Not connected."));
  }

  #assertNotDisconnected() {
    if (this.disconnected) {
      throw new ConnectionError("Not connected.");
    }
  }

  async #invalidateSession(reason: string) {
    this.#L.debug("invalidating session because of", reason);
    this.#id = getRandomId();
    this.state.reset();
    this.disconnect();
    await this.connect();
    this.#rejectAllPending(new SessionError("Session invalidated."));
  }

  #rejectAllPending(reason: unknown) {
    for (const id of this.#sentMessages) {
      this.#onMessageFailed(id, reason);
    }
    for (const pendingPing of this.#pendingPings.values()) {
      pendingPing.promiseWithResolvers.reject(reason);
    }
    this.#sentMessages.clear();
    this.#pendingPings.clear();
    this.#containers.clear();
  }

  #onMessageFailed(id: bigint, reason: unknown) {
    this.#sentMessages.delete(id);

    const pendingContainer = this.#containers.get(id);
    if (pendingContainer) {
      for (const id of pendingContainer) {
        this.#onMessageFailed(id, reason);
      }
      this.#containers.delete(id);
      return;
    }

    const pendingAck = this.#pendingAcks.get(id);
    if (pendingAck) {
      for (const id of pendingAck) {
        this.#toAcknowledge.push(id);
      }
      this.#pendingAcks.delete(id);
      return;
    }

    const pendingPing = this.#pendingPings.get(id);
    if (pendingPing) {
      this.#pendingPings.delete(id);
      if (reason instanceof SessionError) {
        drop(this.#resendPendingPing(pendingPing));
      } else {
        pendingPing.promiseWithResolvers.reject(reason);
      }
      return;
    }

    // message was not sent by us
    this.handlers.onMessageFailed?.(id, reason);
  }

  #setServerSalt(newServerSalt: bigint) {
    this.state.serverSalt = newServerSalt;
    this.handlers.onNewServerSalt?.(newServerSalt);
  }

  async send(body: Uint8Array<ArrayBuffer>): Promise<bigint> {
    if (!this.disconnected && !this.connected) {
      await super.waitUntilConnected();
    }
    this.#assertNotDisconnected();
    const pendingMessage: PendingMessage = { body, promiseWithResolvers: Promise.withResolvers() };
    this.#pendingMessages.push(pendingMessage);
    this.#awakeSendLoop?.();
    return await pendingMessage.promiseWithResolvers.promise;
  }

  async #receive() {
    this.#assertNotDisconnected();
    const buffer = await this.transport.transport.receive();
    if (buffer.length === 4) {
      const int = bigIntFromBuffer(buffer, true, true);
      throw new TransportError(Number(int));
    }
    try {
      const decrypted = await this.#decryptMessage(buffer);
      this.#L.in(decrypted);
      return decrypted;
    } catch (err) {
      await this.#invalidateSession("decryption error");
      throw err;
    }
  }

  async #encryptMessage(message: message) {
    const payloadWriter = new TLWriter();

    payloadWriter.writeInt64(this.state.serverSalt);
    payloadWriter.writeInt64(this.#id);
    payloadWriter.write(await serializeMessage(message));
    payloadWriter.write(new Uint8Array(mod(-(payloadWriter.buffer.length + 12), 16) + 12));

    const payload = payloadWriter.buffer;

    const messageKey = (await sha256(concat([this.#authKey.subarray(88, 120), payload]))).subarray(8, 24);

    const a = await sha256(concat([messageKey, this.#authKey.subarray(0, 36)]));
    const b = await sha256(concat([this.#authKey.subarray(40, 76), messageKey]));

    const aesKey = concat([a.subarray(0, 8), b.subarray(8, 24), a.subarray(24, 32)]);
    const aesIV = concat([b.subarray(0, 8), a.subarray(8, 24), b.subarray(24, 32)]);

    const messageWriter = new TLWriter();

    messageWriter.writeInt64(this.#authKeyId);
    messageWriter.write(messageKey);
    messageWriter.write(ige256Encrypt(payload, aesKey, aesIV));

    return messageWriter.buffer;
  }

  async #decryptMessage(buffer: Uint8Array) {
    const reader = new TLReader(buffer);
    assertEquals(reader.readInt64(false), this.#authKeyId);

    const messageKey_ = reader.readInt128();
    const messageKey = bufferFromBigInt(messageKey_, 16, true, true);

    const a = await sha256(concat([messageKey, this.#authKey.subarray(8, 44)]));
    const b = await sha256(concat([this.#authKey.subarray(48, 84), messageKey]));

    const aesKey = concat([a.subarray(0, 8), b.subarray(8, 24), a.subarray(24, 32)]);
    const aesIv = concat([b.subarray(0, 8), a.subarray(8, 24), b.subarray(24, 32)]);

    const plaintext = ige256Decrypt(reader.buffer, aesKey, aesIv);
    assertEquals(plaintext.buffer.byteLength % 4, 0);

    const plainReader = new TLReader(plaintext);

    const _salt = plainReader.readInt64();
    const _sessionId_ = plainReader.readInt64(false);

    return deserializeMessage(plainReader);
  }

  //// SEND LOOP ////
  #awakeSendLoop?: () => void;
  #sendLoop = new AbortableLoop(this.#sendLoopBody.bind(this), (err) => {
    this.#LsendLoop.error("unhandled receive loop error:", err);
  });
  async #sendLoopBody(loop: AbortableLoop, signal: AbortSignal) {
    if (!this.connected) {
      this.#LsendLoop.debug("aborting as not connected");
      loop.abort();
      return;
    }
    const pendingMessage = this.#pendingMessages.shift();
    if (pendingMessage === undefined) {
      this.#LsendLoop.debug("no pending messages");
      return await new Promise<void>((resolve) => {
        const onAbort = () => {
          this.#LsendLoop.debug("got aborted while sleeping");
          resolve();
        };
        signal.addEventListener("abort", onAbort);
        this.#awakeSendLoop = () => {
          this.#LsendLoop.debug("got awaken");
          resolve();
          signal.removeEventListener("abort", onAbort);
        };
      });
    }
    const msg_id = this.state.nextMessageId();
    const seqno = this.state.nextSeqNo(true);
    let message: message = {
      _: "message",
      msg_id,
      seqno,
      body: pendingMessage.body,
    };
    this.#LsendLoop.debug("msg_id =", msg_id, "seqno =", seqno);

    if (this.#toAcknowledge.length) {
      const msg_ids = this.#toAcknowledge.splice(0, 8192);
      this.#LsendLoop.debug("acknowledging", msg_ids.length, "message(s) while sending this one");
      const ack: message = {
        _: "message",
        msg_id: this.state.nextMessageId(),
        seqno: this.state.nextSeqNo(false),
        body: Mtproto.serializeObject({ _: "msgs_ack", msg_ids }),
      };
      this.#LsendLoop.debug("msgs_ack msg_id =", ack.msg_id, "seqno =", seqno);
      this.#pendingAcks.set(ack.msg_id, msg_ids);
      message = {
        _: "message",
        msg_id: this.state.nextMessageId(),
        seqno: this.state.nextSeqNo(false),
        body: {
          _: "msg_container",
          messages: [message, ack],
        },
      };
      this.#LsendLoop.debug("container msg_id =", message.msg_id, "seqno =", message.seqno);
    }

    try {
      const payload = await this.#encryptMessage(message);
      await this.transport.transport.send(payload);
      pendingMessage.promiseWithResolvers.resolve(msg_id);
    } catch (err) {
      pendingMessage.promiseWithResolvers.reject(err);
      return;
    }

    this.#LsendLoop.out(message);
    this.#sentMessages.add(msg_id);
    if (!(message.body instanceof Uint8Array)) {
      const msg_ids = message.body.messages.map((v) => v.msg_id);
      this.#LsendLoop.debug("sent container", message.msg_id, "with messages", ...msg_ids);
      this.#containers.set(message.msg_id, msg_ids);
    } else {
      this.#LsendLoop.debug("sent message", message.msg_id);
    }
  }

  //// RECEIVE LOOP ////
  #receiveLoop = new AbortableLoop(this.#receiveLoopBody.bind(this), (err) => {
    this.#LreceiveLoop.error("unhandled receive loop error:", err);
  });
  async #receiveLoopBody(loop: AbortableLoop) {
    let message: message;
    try {
      message = await this.#receive();
    } catch (err) {
      this.#LreceiveLoop.error("failed to receive message:", err);
      if (!this.connected) {
        this.#LreceiveLoop.debug("aborting as not connected");
        loop.abort();
        return;
      } else {
        return;
      }
    }
    try {
      if (message.body instanceof Uint8Array) {
        this.#onMessage(message.msg_id, message.body, null);
      } else {
        this.#onMessageContainer(message.msg_id, message.body);
      }
    } catch (err) {
      this.#LreceiveLoop.error("failed to handle message:", err);
    }
  }

  //// RECEIVE LOOP HANDLERS ////
  async #onMessage(msgId: bigint, body: Uint8Array, containerId: bigint | null) {
    this.#LreceiveLoop.debug("received message with ID", msgId, "and size", body.length, "inside", ...(containerId === null ? ["no container"] : ["container", containerId]));
    const logger = this.#LreceiveLoop.branch(msgId + "");
    let reader = new TLReader(body);
    let id = reader.readInt32(false);
    if (id === GZIP_PACKED) {
      logger.debug("unpacking compressed body");
      reader = new TLReader(await gunzip(reader.readBytes()));
      id = reader.readInt32(false);
    }
    if (id === RPC_RESULT) {
      this.#onRpcResult(msgId, reader.buffer, logger);
      return;
    }
    if (!Mtproto.schema.identifierToName[id]) {
      logger.debug("identified body as a non-MTProto constructor");
      reader.unreadInt32();
      this.handlers.onUpdate?.(reader.buffer);
      return;
    }
    let type: Mtproto.DeserializedType;
    try {
      reader.unreadInt32();
      type = await Mtproto.deserializeType(X, reader);
    } catch (err) {
      logger.error("failed to deserialize MTProto type:", err);
      return;
    }
    logger.debug("received", repr(type));
    if (Mtproto.is("new_session_created", type)) {
      this.#onNewSessionCreated(msgId, type);
    } else if (Mtproto.is("pong", type)) {
      this.#onPong(msgId, type);
    } else if (Mtproto.is("bad_server_salt", type)) {
      this.#onBadServerSalt(type);
    } else if (Mtproto.is("bad_msg_notification", type)) {
      await this.#onBadMsgNotification(msgId, type, logger);
    } else if (Mtproto.is("msg_detailed_info", type)) {
      this.#onMsgDetailedInfo(type, logger);
    } else if (Mtproto.is("msg_new_detailed_info", type)) {
      this.#onMsgNewDetailedInfo(type, logger);
    } else {
      logger.warning(`unhandled MTProto type: ${repr(type)}`);
    }
  }

  async #onRpcResult(msgId: bigint, body: Uint8Array, logger: Logger) {
    logger.debug("received rpc_result");
    this.#toAcknowledge.push(msgId);
    let reader = new TLReader(body);
    const reqMsgId = reader.readInt64();
    let id = reader.readInt32(false);
    if (id === GZIP_PACKED) {
      logger.debug("unpacking compressed rpc_result");
      reader = new TLReader(await gunzip(reader.readBytes()));
      id = reader.readInt32(false);
      reader.unreadInt32();
    } else {
      reader.unreadInt32();
    }
    if (id === RPC_ERROR) {
      logger.debug("received rpc_error from message", msgId);
      const error = await Mtproto.deserializeType("rpc_error", reader);
      this.handlers.onRpcError?.(reqMsgId, error);
    } else {
      this.handlers.onRpcResult?.(reqMsgId, reader.buffer);
    }
  }

  #onMsgDetailedInfo(msgDetailedInfo: Mtproto.msg_detailed_info, logger: Logger) {
    logger.debug("scheduling the acknowledgement of", msgDetailedInfo.answer_msg_id, "because of", msgDetailedInfo._);
    this.#toAcknowledge.push(msgDetailedInfo.answer_msg_id);
  }

  #onMsgNewDetailedInfo(msgNewDetailedInfo: Mtproto.msg_new_detailed_info, logger: Logger) {
    logger.debug("scheduling the acknowledgement of", msgNewDetailedInfo.answer_msg_id, "because of", msgNewDetailedInfo._);
    this.#toAcknowledge.push(msgNewDetailedInfo.answer_msg_id);
  }

  async #onBadMsgNotification(msgId: bigint, badMsgNotification: Mtproto.bad_msg_notification, logger: Logger) {
    let low = false;
    switch (badMsgNotification.error_code) {
      case 16: // message ID too low
        low = true;
        /* falls through */
      case 17: // message ID too high
        this.state.timeDifference = Math.abs(toUnixTimestamp(new Date()) - Number(msgId >> 32n));
        if (!low) {
          this.state.timeDifference = -this.state.timeDifference;
          logger.debug("resetting time difference to", -this.state.timeDifference, "because the ID of the message", badMsgNotification.bad_msg_id, "was too high");
          await this.#invalidateSession("message ID too high");
          return;
        } else {
          logger.debug("resending message", badMsgNotification.bad_msg_id, "because its ID was too low");
        }
        break;
      case 48: // bad server salt
        // resend
        this.#L.debug("resending message that caused bad_server_salt");
        break;
      default:
        await this.#invalidateSession("unexpected bad_msg_notification");
        return;
    }
    this.#onMessageFailed(badMsgNotification.bad_msg_id, new SessionError(badMsgNotification._));
  }

  #onBadServerSalt(badServerSalt: Mtproto.bad_server_salt) {
    this.#setServerSalt(badServerSalt.new_server_salt);
    this.#onMessageFailed(badServerSalt.bad_msg_id, new SessionError(badServerSalt._));
  }

  #onPong(msgId: bigint, pong: Mtproto.pong) {
    this.#toAcknowledge.push(msgId);
    const pendingPing = this.#pendingPings.get(pong.msg_id);
    if (pendingPing) {
      pendingPing.promiseWithResolvers.resolve(pong);
      this.#pendingPings.delete(pong.msg_id);
    } else {
      // pong is not ours
      this.handlers.onPong?.(pong);
    }
  }

  #onNewSessionCreated(msgId: bigint, newSessionCreated: Mtproto.new_session_created) {
    this.#setServerSalt(newSessionCreated.server_salt);
    this.#toAcknowledge.push(msgId);
  }

  #onMessageContainer(msgId: bigint, msgContainer: msg_container) {
    this.#LreceiveLoop.debug("received container with ID", msgId, "and", msgContainer.messages.length, "message(s)");
    for (const message of msgContainer.messages) {
      if (message.body instanceof Uint8Array) {
        this.#onMessage(message.msg_id, message.body, msgId);
      } else {
        this.#onMessageContainer(msgId, message.body);
      }
    }
  }

  //// PING LOOP ////
  #pingInterval = 56 * SECOND;
  #pingLoop = new AbortableLoop(this.#pingLoopBody.bind(this), (err) => {
    this.#LpingLoop.error(err);
  });
  async #pingLoopBody(_loop: AbortableLoop, signal: AbortSignal) {
    let timeElapsed = 0;
    await delay(Math.max(0, this.#pingInterval - timeElapsed), { signal });
    if (!this.connected) {
      return;
    }
    signal.throwIfAborted();
    const then = Date.now();
    try {
      await this.#sendPingDelayDisconnect(this.#pingInterval / SECOND + 15);
    } finally {
      timeElapsed = Date.now() - then;
    }
    signal.throwIfAborted();
  }

  async #sendPingDelayDisconnect(disconnect_delay: number) {
    const ping_id = getRandomId();
    const call: Mtproto.ping_delay_disconnect = { _: "ping_delay_disconnect", ping_id, disconnect_delay };
    const messageId = await this.send(Mtproto.serializeObject(call));
    this.#pendingPings.set(messageId, { call, promiseWithResolvers: Promise.withResolvers() });
  }

  async #resendPendingPing(pendingPing: PendingPing) {
    try {
      const messageId = await this.send(Mtproto.serializeObject(pendingPing.call));
      this.#pendingPings.set(messageId, pendingPing);
    } catch (err) {
      pendingPing.promiseWithResolvers.reject(err);
    }
  }
}
