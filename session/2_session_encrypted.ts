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

import { assertEquals, concat, delay, ige256Decrypt, ige256Encrypt, initTgCrypto, SECOND } from "../0_deps.ts";
import { ConnectionError, TransportError } from "../0_errors.ts";
import { bigIntFromBuffer, bufferFromBigInt, drop, getLogger, getRandomId, gunzip, Logger, mod, sha1, sha256, toUnixTimestamp } from "../1_utilities.ts";
import { deserializeMessage, message, msg_container, Mtproto, repr, serializeMessage, TLReader, X } from "../2_tl.ts";
import { DC } from "../3_transport.ts";
import { TLWriter } from "../tl/1_tl_writer.ts";
import { SessionError } from "./0_session_error.ts";
import { Session, SessionParams } from "./1_session.ts";

// global SessionEncrypted ID counter for logs
let id = 0;

const GZIP_PACKED = 0x3072CFA1;
const RPC_RESULT = 0xF35C6D01;
const RPC_ERROR = Mtproto.schema.definitions["rpc_error"][0];

export interface Handlers {
  onUpdate?: (body: Uint8Array) => void;
  onNewServerSalt?: (serverSalt: bigint) => void;
  onMessageFailed?: (id: bigint, reason: unknown) => void;
  onPong?: (pong: Mtproto.pong) => void;
  onRpcError?: (id: bigint, error: Mtproto.rpc_error) => void;
  onRpcResult?: (id: bigint, result: Uint8Array) => void;
}

interface PendingPing {
  call: Mtproto.ping_delay_disconnect;
  resolve: (pong: Mtproto.pong) => void;
  reject: (reason: unknown) => void;
}

export class SessionEncrypted extends Session implements Session {
  #id = getRandomId();
  #authKey = new Uint8Array();
  #authKeyId = 0n;
  handlers: Handlers = {};
  #toAcknowledge = new Array<bigint>();
  #pendingMessages = new Set<bigint>();
  #pendingPings = new Map<bigint, PendingPing>();
  #L: Logger;

  static #TGCRYPTO_INITED = false;

  constructor(dc: DC, params?: SessionParams) {
    super(dc, params);
    const L = this.#L = getLogger("SessionEncrypted").client(id++);
    this.#LpingLoop = L.branch("#pingLoop");
  }

  async setAuthKey(key: Uint8Array<ArrayBuffer>) {
    const hash = await sha1(key);
    this.#authKeyId = bigIntFromBuffer(hash.slice(-8), true, false);
    this.#authKey = key;
  }

  get authKey(): Uint8Array {
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
    this.#startReceiveLoop();
    this.#startPingLoop();
  }

  override disconnect(): void {
    super.disconnect();
    this.state.reset();
    this.#id = getRandomId();
    this.#pingLoopAbortController?.abort();
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
    for (const id of this.#pendingMessages) {
      this.#onMessageFailed(id, reason);
    }
    this.#pendingMessages.clear();
    for (const pendingPing of this.#pendingPings.values()) {
      pendingPing.reject(reason);
    }
    this.#pendingPings.clear();
  }

  #onMessageFailed(id: bigint, reason: unknown) {
    this.#pendingMessages.delete(id);
    const pendingPing = this.#pendingPings.get(id);
    if (pendingPing) {
      this.#pendingPings.delete(id);
      if (reason instanceof SessionError) {
        drop(this.#resendPendingPing(pendingPing));
      } else {
        pendingPing.reject(reason);
      }
    } else {
      // message was not sent by us
      this.handlers.onMessageFailed?.(id, reason);
    }
  }

  #setServerSalt(newServerSalt: bigint) {
    this.state.serverSalt = newServerSalt;
    this.handlers.onNewServerSalt?.(newServerSalt);
  }

  async send(body: Uint8Array): Promise<bigint> {
    if (!this.disconnected && !this.connected) {
      await super.waitUntilConnected();
    }
    this.#assertNotDisconnected();
    const msg_id = this.state.nextMessageId();
    const seqno = this.state.nextSeqNo(true);
    let message: message = {
      _: "message",
      msg_id,
      seqno,
      body,
    };

    if (this.#toAcknowledge.length) {
      const ack: message = {
        _: "message",
        msg_id: this.state.nextMessageId(),
        seqno: this.state.nextSeqNo(false),
        body: Mtproto.serializeObject({ _: "msgs_ack", msg_ids: this.#toAcknowledge.splice(0, 8192) }),
      };
      message = {
        _: "message",
        msg_id: this.state.nextMessageId(),
        seqno: this.state.nextSeqNo(false),
        body: {
          _: "msg_container",
          messages: [message, ack],
        },
      };
    }

    this.#L.out(message);
    const payload = await this.#encryptMessage(message);
    await this.transport.transport.send(payload);
    this.#pendingMessages.add(msg_id);
    return msg_id;
  }

  async #receive() {
    this.#assertNotDisconnected();
    const buffer = await this.transport.transport.receive();
    if (buffer.length == 4) {
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

  //// RECEIVE LOOP ////

  #startReceiveLoop() {
    if (!this.#receiveLoopActive) {
      drop(this.#receiveLoop());
    }
  }

  #receiveLoopActive = false;
  async #receiveLoop() {
    this.#receiveLoopActive = true;
    try {
      while (this.connected) {
        let message: message;
        try {
          message = await this.#receive();
        } catch (err) {
          this.#L.error("failed to receive message:", err);
          if (!this.connected) {
            break;
          } else {
            continue;
          }
        }
        try {
          if (message.body instanceof Uint8Array) {
            this.#onMessage(message.msg_id, message.body);
          } else {
            this.#onMessageContainer(message.msg_id, message.body);
          }
        } catch (err) {
          this.#L.error("failed to handle message:", err);
        }
      }
    } finally {
      this.#receiveLoopActive = false;
    }
  }

  //// RECEIVE LOOP HANDLERS ////
  async #onMessage(msgId: bigint, body: Uint8Array) {
    let reader = new TLReader(body);
    let id = reader.readInt32(false);
    if (id == GZIP_PACKED) {
      reader = new TLReader(await gunzip(reader.readBytes()));
      id = reader.readInt32(false);
    }
    if (id == RPC_RESULT) {
      this.#onRpcResult(msgId, reader.buffer);
      return;
    }
    if (!Mtproto.schema.identifierToName[id]) {
      reader.unreadInt32();
      this.handlers.onUpdate?.(reader.buffer);
      return;
    }
    let type: Mtproto.DeserializedType;
    try {
      reader.unreadInt32();
      type = await Mtproto.deserializeType(X, reader);
    } catch (err) {
      this.#L.error("failed to deserialize MTProto type:", err);
      return;
    }
    this.#L.debug("received", repr(type));
    if (Mtproto.is("new_session_created", type)) {
      this.#onNewSessionCreated(msgId, type);
    } else if (Mtproto.is("pong", type)) {
      this.#onPong(msgId, type);
    } else if (Mtproto.is("bad_server_salt", type)) {
      this.#onBadServerSalt(type);
    } else if (Mtproto.is("bad_msg_notification", type)) {
      await this.#onBadMsgNotification(msgId, type);
    } else if (Mtproto.is("msg_detailed_info", type)) {
      this.#onMsgDetailedInfo(type);
    } else if (Mtproto.is("msg_new_detailed_info", type)) {
      this.#onMsgNewDetailedInfo(type);
    } else {
      this.#L.debug(`unhandled MTProto type: ${repr(type)}`);
    }
  }

  async #onRpcResult(msgId: bigint, body: Uint8Array) {
    this.#toAcknowledge.push(msgId);
    let reader = new TLReader(body);
    const reqMsgId = reader.readInt64();
    let id = reader.readInt32(false);
    if (id == GZIP_PACKED) {
      reader = new TLReader(await gunzip(reader.readBytes()));
      id = reader.readInt32(false);
      reader.unreadInt32();
    } else {
      reader.unreadInt32();
    }
    if (id == RPC_ERROR) {
      const error = await Mtproto.deserializeType("rpc_error", reader);
      this.handlers.onRpcError?.(reqMsgId, error);
    } else {
      this.handlers.onRpcResult?.(reqMsgId, reader.buffer);
    }
  }

  #onMsgDetailedInfo(msgDetailedInfo: Mtproto.msg_detailed_info) {
    this.#toAcknowledge.push(msgDetailedInfo.answer_msg_id);
  }

  #onMsgNewDetailedInfo(msgNewDetailedInfo: Mtproto.msg_new_detailed_info) {
    this.#toAcknowledge.push(msgNewDetailedInfo.answer_msg_id);
  }

  async #onBadMsgNotification(msgId: bigint, badMsgNotification: Mtproto.bad_msg_notification) {
    let low = false;
    switch (badMsgNotification.error_code) {
      case 16: // message ID too low
        low = true;
        /* falls through */
      case 17: // message ID too high
        this.state.timeDifference = Math.abs(toUnixTimestamp(new Date()) - Number(msgId >> 32n));
        if (!low) {
          this.state.timeDifference = -this.state.timeDifference;
          await this.#invalidateSession("message ID too high");
          return;
        } else {
          this.#L.debug("message ID too low, resending message");
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
      pendingPing.resolve(pong);
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
    for (const message of msgContainer.messages) {
      if (message.body instanceof Uint8Array) {
        this.#onMessage(message.msg_id, message.body);
      } else {
        this.#onMessageContainer(msgId, message.body);
      }
    }
  }

  //// PING LOOP ////
  #pingInterval = 56 * SECOND;
  #startPingLoop() {
    drop(this.#pingLoop());
  }
  #pingLoopAbortController?: AbortController;
  #LpingLoop: Logger;
  async #pingLoop() {
    this.#pingLoopAbortController?.abort();
    const controller = this.#pingLoopAbortController = new AbortController();
    let timeElapsed = 0;
    while (this.connected) {
      try {
        await delay(Math.max(0, this.#pingInterval - timeElapsed), { signal: controller.signal });
        if (!this.connected) {
          continue;
        }
        controller.signal.throwIfAborted();
        const then = Date.now();
        try {
          await this.#sendPingDelayDisconnect(this.#pingInterval / SECOND + 15);
        } finally {
          timeElapsed = Date.now() - then;
        }
        controller.signal.throwIfAborted();
      } catch (err) {
        if (err instanceof DOMException && err.name == "AbortError") {
          break;
        } else if (!this.connected) {
          break;
        }
        this.#LpingLoop.error(err);
      }
    }
  }

  async #sendPingDelayDisconnect(disconnect_delay: number) {
    const ping_id = getRandomId();
    const call: Mtproto.ping_delay_disconnect = { _: "ping_delay_disconnect", ping_id, disconnect_delay };
    const messageId = await this.send(Mtproto.serializeObject(call));
    await new Promise((resolve, reject) => {
      this.#pendingPings.set(messageId, { call, resolve, reject });
    });
  }

  async #resendPendingPing(pendingPing: PendingPing) {
    try {
      const messageId = await this.send(Mtproto.serializeObject(pendingPing.call));
      this.#pendingPings.set(messageId, pendingPing);
    } catch (err) {
      pendingPing.reject(err);
    }
  }
}
