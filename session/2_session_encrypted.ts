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

import { assertEquals, concat, ige256Decrypt, ige256Encrypt, initTgCrypto, SECOND } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
import { bigIntFromBuffer, bufferFromBigInt, drop, getLogger, getRandomId, gunzip, Logger, mod, sha1, sha256, toUnixTimestamp } from "../1_utilities.ts";
import { deserializeMessage, message, msg_container, Mtproto, repr, serializeMessage, TLReader, X } from "../2_tl.ts";
import { DC } from "../3_transport.ts";
import { TLWriter } from "../tl/1_tl_writer.ts";
import { Session, SessionParams } from "./1_session.ts";

// global SessionEncrypted ID counter for logs
let id = 0;

const GZIP_PACKED = 0x3072CFA1;
const RPC_RESULT = 0xF35C6D01;
const RPC_ERROR = Mtproto.schema.definitions["rpc_error"][0];

export interface Handlers {
  onUpdate?: (body: Uint8Array) => void;
  onNewServerSalt?: (serverSalt: bigint) => void;
  onMessageFailed?: (id: bigint) => void;
  onRpcError?: (id: bigint, error: Mtproto.rpc_error) => void;
  onRpcResult?: (id: bigint, result: Uint8Array) => void;
}

// TODO(roj): fail all messages when the connection is lost
export class SessionEncrypted extends Session implements Session {
  #id = getRandomId();
  #authKey = new Uint8Array();
  #authKeyId = 0n;
  handlers?: Handlers;
  #toAcknowledge = new Array<bigint>();
  #pendingMessages = new Set<bigint>();
  #pendingPings = new Map<bigint, { resolve: (pong: Mtproto.pong) => void; reject: (reason: unknown) => void }>();
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
    this.#pingLoopAbortController?.abort();
  }

  #assertConnected() {
    if (!this.connected) {
      throw new ConnectionError("Not connected.");
    }
  }

  async #invalidateSession() {
    this.#id = getRandomId();
    this.state.reset();
    this.disconnect();
    await this.connect();
    for (const id of this.#pendingMessages) {
      this.#onMessageFailed(id);
    }
  }

  #onMessageFailed(id: bigint) {
    this.#pendingMessages.delete(id);
    this.handlers?.onMessageFailed?.(id);
    const pendingPing = this.#pendingPings.get(id);
    if (pendingPing) {
      pendingPing.reject(null); // TODO(roj): specify reasons
      this.#pendingPings.delete(id);
    }
  }

  #setServerSalt(newServerSalt: bigint) {
    this.state.serverSalt = newServerSalt;
    this.handlers?.onNewServerSalt?.(newServerSalt);
  }

  async send(body: Uint8Array) {
    this.#assertConnected();
    const msg_id = this.state.nextMessageId();
    const seqno = this.state.nextSeqNo(true);
    let message: message = {
      _: "message",
      msg_id,
      seqno,
      body,
    };

    if (this.#toAcknowledge.length) {
      console.log("there are msgs to ack");
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
    this.#assertConnected();
    const buffer = await this.transport.transport.receive();
    const decrypted = await this.#decryptMessage(buffer);
    this.#L.in(decrypted);
    return decrypted;
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
          if (!this.connected) {
            break;
          } else {
            this.#L.error("failed to receive message:", err);
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
      id = reader.readInt32();
    }
    if (id == RPC_RESULT) {
      this.#onRpcResult(msgId, body);
      return;
    }
    if (!Mtproto.schema.identifierToName[id]) {
      this.handlers?.onUpdate?.(body);
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
    let reader = new TLReader(body);
    let id = reader.readInt32(false);
    reader.unreadInt32();
    if (id == GZIP_PACKED) {
      reader = new TLReader(await gunzip(reader.readBytes()));
      id = reader.readInt32(false);
      reader.unreadInt32();
    }
    if (id == RPC_ERROR) {
      const error = await Mtproto.deserializeType("rpc_error", reader);
      this.handlers?.onRpcError?.(msgId, error);
    } else {
      this.handlers?.onRpcResult?.(msgId, reader.buffer);
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
          await this.#invalidateSession();
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
        await this.#invalidateSession();
        return;
    }
    this.#onMessageFailed(badMsgNotification.bad_msg_id);
  }

  #onBadServerSalt(badServerSalt: Mtproto.bad_server_salt) {
    this.#setServerSalt(badServerSalt.new_server_salt);
    this.#onMessageFailed(badServerSalt.bad_msg_id);
  }

  #onPong(msgId: bigint, pong: Mtproto.pong) {
    this.#toAcknowledge.push(msgId);
    const pendingPing = this.#pendingPings.get(msgId);
    if (pendingPing) {
      pendingPing.resolve(pong);
      this.#pendingPings.delete(msgId);
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
    this.#pingLoopAbortController = new AbortController();
    let timeElapsed = 0;
    while (this.connected) {
      const then = Date.now();
      try {
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(resolve, this.#pingInterval - timeElapsed);
          this.#pingLoopAbortController!.signal.onabort = () => {
            reject(this.#pingLoopAbortController?.signal.reason);
            clearTimeout(timeout);
          };
        });
        if (!this.connected) {
          continue;
        }
        this.#pingLoopAbortController.signal.throwIfAborted();
        await this.#sendPingDelayDisconnect(this.#pingInterval / SECOND + 15);
        this.#pingLoopAbortController.signal.throwIfAborted();
      } catch (err) {
        if (err instanceof DOMException && err.name == "AbortError") {
          this.#pingLoopAbortController = new AbortController();
        }
        if (!this.connected) {
          continue;
        }
        this.#LpingLoop.error(err);
      } finally {
        timeElapsed = Date.now() - then;
      }
    }
  }

  async #sendPingDelayDisconnect(disconnect_delay: number) {
    const ping_id = getRandomId();
    const request: Mtproto.ping_delay_disconnect = { _: "ping_delay_disconnect", ping_id, disconnect_delay };
    await new Promise((resolve, reject) => {
      Promise.resolve().then(async () => {
        this.#pendingPings.set(ping_id, { resolve, reject });
        try {
          await this.send(Mtproto.serializeObject(request));
        } catch (err) {
          reject(err);
          this.#pendingMessages.delete(ping_id);
        }
      });
    });
  }
}
