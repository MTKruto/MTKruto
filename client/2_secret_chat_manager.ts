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

import { concat, equals, ige256Decrypt, ige256Encrypt } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getLogger, getRandomId, getRandomInt, intFromBytes, intToBytes, type Logger, mod, modExp, sha1, sha256 } from "../1_utilities.ts";
import { Api, SecretChats, TLReader, TLWriter, X } from "../2_tl.ts";
import { type ID, secretMessageEntityToTlObject, type Update } from "../3_types.ts";
import { constructSecretChat } from "../types/0_secret_chat.ts";
import { constructSecretMessage } from "../types/1_secret_message.ts";
import type { SendSecretChatMessageParams } from "./0_params.ts";
import { isGoodModExpFirst, isSafePrime } from "./0_password.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import type { C } from "./1_types.ts";

const secretChatManagerUpdates = [
  "updateEncryption",
  "updateNewEncryptedMessage",
] as const;

type SecretChatManagerUpdate = Api.Types[(typeof secretChatManagerUpdates)[number]];

export class SecretChatManager implements UpdateProcessor<SecretChatManagerUpdate, true> {
  #c: C;
  #L: Logger;

  constructor(c: C) {
    this.#c = c;
    this.#L = getLogger("SecretChatManager");
  }

  static #checkDhConfig(dhConfig: Api.messages_dhConfig) {
    const prime = intFromBytes(dhConfig.p, { byteOrder: "big", isSigned: false });
    if (prime.toString(2).length !== 2048) {
      return false;
    }

    let mod_ok = false;
    let mod_r = 0;
    switch (dhConfig.g) {
      case 2:
        mod_ok = prime % 8n === 7n;
        break;
      case 3:
        mod_ok = prime % 3n === 2n;
        break;
      case 4:
        mod_ok = true;
        break;
      case 5:
        mod_ok = (mod_r = Number(prime % 5n)) === 1 || mod_r === 4;
        break;
      case 6:
        mod_ok = (mod_r = Number(prime % 24n)) === 19 || mod_r === 23;
        break;
      case 7:
        mod_ok = (mod_r = Number(prime % 7n)) === 3 || mod_r === 5 || mod_r === 6;
        break;
      default:
        mod_ok = false;
    }

    return mod_ok && (isSafePrime(dhConfig.p, dhConfig.g));
  }

  async #getDhConfig() {
    const result = Api.as(
      "messages.dhConfig",
      await this.#c.invoke({
        _: "messages.getDhConfig",
        version: 0,
        random_length: 256,
      }),
    );

    if (!SecretChatManager.#checkDhConfig(result)) {
      throw new TypeError("Received invalid dhConfig.");
    }

    return result;
  }

  #encryptedChats = new Map<number, Api.EncryptedChat>();
  #authKeys = new Map<number, Uint8Array<ArrayBuffer>>();
  #authKeyIds = new Map<number, Uint8Array<ArrayBuffer>>();
  #pendingExponents = new Map<number, { exponent: bigint; prime: bigint }>();

  #inSeqNo = new Map<number, number>();
  #outSeqNo = new Map<number, number>();

  async requestSecretChat(chatId: ID) {
    const user_id = await this.#c.getInputUser(chatId);
    if (Api.is("inputUserSelf", user_id)) {
      throw new InputError("Received invalid chat identifier.");
    }

    const dhConfig = await this.#getDhConfig();
    const prime = intFromBytes(dhConfig.p, { byteOrder: "big", isSigned: false });

    const a = getRandomInt(256, false);

    const g_a = intToBytes(modExp(BigInt(dhConfig.g), a, prime), 256, { isSigned: false, byteOrder: "big" });

    const result = await this.#c.invoke({
      _: "messages.requestEncryption",
      user_id,
      g_a,
      random_id: getRandomId(true),
    });
    this.#pendingExponents.set(result.id, { exponent: a, prime });

    return constructSecretChat(result);
  }

  async acceptSecretChat(id: number) {
    const encryptedChat = this.#encryptedChats.get(id);
    if (!Api.is("encryptedChatRequested", encryptedChat)) {
      throw new InputError("Invalid secret chat identifier received.");
    }

    const dhConfig = await this.#getDhConfig();
    const prime = intFromBytes(dhConfig.p, { byteOrder: "big", isSigned: false });

    const b = getRandomInt(256, false);

    // key = (pow(g_a, b) mod dh_prime)
    const gA = intFromBytes(encryptedChat.g_a, { byteOrder: "big", isSigned: false });
    if (!isGoodModExpFirst(gA, prime)) {
      throw new TypeError("Received invalid g_a.");
    }
    let authKey = intToBytes(modExp(gA, b, prime), 256, { byteOrder: "big", isSigned: false });
    if (authKey.byteLength < 256) {
      authKey = concat([new Uint8Array(256 - authKey.byteLength), authKey]);
    }
    this.#authKeys.set(id, authKey);

    const authKeyId = (await sha1(authKey)).subarray(-8);
    this.#authKeyIds.set(id, authKeyId);
    const key_fingerprint = intFromBytes(authKeyId);

    // g_b := pow(g, b) mod dh_prime
    const g_b = intToBytes(modExp(BigInt(dhConfig.g), b, prime), 256, { byteOrder: "big", isSigned: false });

    const peer: Api.inputEncryptedChat = { _: "inputEncryptedChat", chat_id: encryptedChat.id, access_hash: encryptedChat.access_hash };

    const result = await this.#c.invoke({
      _: "messages.acceptEncryption",
      peer,
      g_b,
      key_fingerprint,
    });
    this.#encryptedChats.set(result.id, result);
    return constructSecretChat(result);
  }

  #getNextOutSeqNo(id: number, isCreator: boolean) {
    const rawOutSeqNo = this.#outSeqNo.get(id) ?? 0;
    this.#outSeqNo.set(id, rawOutSeqNo + 1);
    return 2 * rawOutSeqNo + (isCreator ? 1 : 0);
  }

  #getInSeqNo(id: number, isCreator: boolean) {
    const rawInSeqNo = this.#inSeqNo.get(id) ?? 0;
    return 2 * rawInSeqNo + (isCreator ? 0 : 1);
  }

  async sendSecretChatMessage(id: number, text: string, params?: SendSecretChatMessageParams) {
    const encryptedChat = this.#encryptedChats.get(id);
    const authKeyId = this.#authKeyIds.get(id);
    const authKey = this.#authKeys.get(id);
    if (!Api.is("encryptedChat", encryptedChat) || authKeyId === undefined || authKey === undefined) {
      throw new InputError("Received invalid secret chat identifier.");
    }

    const isCreator = Number(encryptedChat.admin_id) === await this.#c.getSelfId();

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message: text,
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      entities: params?.entities?.length ? params.entities.map(secretMessageEntityToTlObject) : undefined,
      via_bot_name: params?.viaBot,
    };
    const out_seq_no = this.#getNextOutSeqNo(id, isCreator);
    const in_seq_no = this.#getInSeqNo(id, isCreator);
    const decryptedMessageLayer: SecretChats.decryptedMessageLayer = { _: "decryptedMessageLayer", in_seq_no, layer: 144, message: decryptedMessage, out_seq_no, random_bytes: crypto.getRandomValues(new Uint8Array(15)) };

    const data = await this.#encryptMessage(isCreator, authKeyId, authKey, decryptedMessageLayer);

    await this.#c.invoke({ _: "messages.sendEncrypted", peer: { _: "inputEncryptedChat", chat_id: encryptedChat.id, access_hash: encryptedChat.access_hash }, random_id, data });
  }

  async #encryptMessage(isCreator: boolean, authKeyId: Uint8Array<ArrayBuffer>, authKey: Uint8Array<ArrayBuffer>, message: SecretChats.decryptedMessageLayer) {
    const serializedDecryptedMessageLayer = SecretChats.serializeObject(message);

    const plainTextWriter = new TLWriter();
    plainTextWriter.writeInt32(serializedDecryptedMessageLayer.byteLength, false);
    plainTextWriter.write(serializedDecryptedMessageLayer);
    let paddingLength = mod(-(4 + serializedDecryptedMessageLayer.byteLength), 16);
    if (paddingLength < 12) {
      paddingLength += 16;
    }
    plainTextWriter.write(crypto.getRandomValues(new Uint8Array(paddingLength)));
    const plainText = plainTextWriter.buffer;

    const x = isCreator ? 0 : 8;
    // msg_key_large = SHA256 (substr (key, 88+x, 32) + plaintext + random_padding);
    const messageKeyLarge = await sha256(concat([authKey.subarray(88 + x, 88 + x + 32), plainText]));
    // msg_key = substr (msg_key_large, 8, 16);
    const messageKey = messageKeyLarge.subarray(8, 8 + 16);
    // sha256_a = SHA256 (msg_key + substr (key, x, 36));
    const sha256A = await sha256(concat([messageKey, authKey.subarray(x, x + 36)]));
    // sha256_b = SHA256 (substr (key, 40+x, 36) + msg_key);
    const sha256B = await sha256(concat([authKey.subarray(40 + x, 40 + x + 36), messageKey]));
    // aes_key = substr (sha256_a, 0, 8) + substr (sha256_b, 8, 16) + substr (sha256_a, 24, 8);
    const aesKey = concat([sha256A.subarray(0, 8), sha256B.subarray(8, 8 + 16), sha256A.subarray(24, 24 + 8)]);
    // aes_iv = substr (sha256_b, 0, 8) + substr (sha256_a, 8, 16) + substr (sha256_b, 24, 8);
    const aesIv = concat([sha256B.subarray(0, 8), sha256A.subarray(8, 8 + 16), sha256B.subarray(24, 24 + 8)]);

    const encryptedText = ige256Encrypt(plainText, aesKey, aesIv);
    const dataWriter = new TLWriter();
    dataWriter.write(authKeyId);
    dataWriter.write(messageKey);
    dataWriter.write(encryptedText);
    const data = dataWriter.buffer;
    return data;
  }

  async #decryptMessage(authKeyId: Uint8Array<ArrayBuffer>, authKey: Uint8Array<ArrayBuffer>, isCreator: boolean, message: Uint8Array) {
    const x = isCreator ? 8 : 0;

    if (message.byteLength < 40 || (message.byteLength - 24) % 16 !== 0) {
      throw new TypeError("Received invalid encrypted message length.");
    }
    const messageReader = new TLReader(message);
    if (!equals(messageReader.read(8), authKeyId)) {
      throw new TypeError("Received invalid auth key identifier.");
    }

    const messageKey = messageReader.read(16);

    // sha256_a = SHA256 (msg_key + substr (key, x, 36));
    const sha256A = await sha256(concat([messageKey, authKey.subarray(x, x + 36)]));
    // sha256_b = SHA256 (substr (key, 40+x, 36) + msg_key);
    const sha256B = await sha256(concat([authKey.subarray(40 + x, 40 + x + 36), messageKey]));
    // aes_key = substr (sha256_a, 0, 8) + substr (sha256_b, 8, 16) + substr (sha256_a, 24, 8);
    const aesKey = concat([sha256A.subarray(0, 8), sha256B.subarray(8, 8 + 16), sha256A.subarray(24, 24 + 8)]);
    // aes_iv = substr (sha256_b, 0, 8) + substr (sha256_a, 8, 16) + substr (sha256_b, 24, 8);
    const aesIv = concat([sha256B.subarray(0, 8), sha256A.subarray(8, 8 + 16), sha256B.subarray(24, 24 + 8)]);
    const decryptedText = ige256Decrypt(messageReader.buffer, aesKey, aesIv);

    const expectedMessageKey = (await sha256(concat([authKey.subarray(88 + x, 88 + x + 32), decryptedText]))).subarray(8, 24);
    if (!equals(messageKey, expectedMessageKey)) {
      throw new TypeError("Encrypted message key mismatch.");
    }

    const decryptedTextReader = new TLReader(decryptedText);
    const length = decryptedTextReader.readInt32(false);
    const paddingLength = decryptedText.byteLength - 4 - length;
    if (length < 0 || paddingLength < 12 || paddingLength > 1024) {
      throw new TypeError("Received invalid encrypted message padding.");
    }
    const serializedMessage = decryptedTextReader.read(length);
    return await SecretChats.deserializeType(X, serializedMessage);
  }

  async #processUpdateNewMessageEncrypted(update: Api.updateNewEncryptedMessage): Promise<Update | null> {
    const authKey = this.#authKeys.get(update.message.chat_id);
    const authKeyId = this.#authKeyIds.get(update.message.chat_id);
    const encryptedChat = this.#encryptedChats.get(update.message.chat_id);
    if (authKey === undefined || authKeyId === undefined || !Api.is("encryptedChat", encryptedChat)) {
      this.#L.debug("ignoring encrypted message");
      return null;
    }

    const isCreator = Number(encryptedChat.admin_id) === await this.#c.getSelfId();
    const decryptedMessage = await this.#decryptMessage(authKeyId, authKey, isCreator, update.message.bytes);
    this.#L.debug("received", decryptedMessage);
    if (SecretChats.is("decryptedMessageLayer", decryptedMessage)) {
      this.#inSeqNo.set(encryptedChat.id, (this.#inSeqNo.get(encryptedChat.id) ?? 0) + 1);
      if (SecretChats.is("decryptedMessage", decryptedMessage.message)) {
        const secretMessage = constructSecretMessage(encryptedChat.id, decryptedMessage.message);
        return { type: "secretMessage", secretMessage };
      }
    }

    return null;
  }

  canHandleUpdate(update: Api.Update): update is SecretChatManagerUpdate {
    return Api.isOneOf(secretChatManagerUpdates, update);
  }

  async handleUpdate(update: SecretChatManagerUpdate): Promise<Update | null> {
    if (Api.is("updateNewEncryptedMessage", update)) {
      return await this.#processUpdateNewMessageEncrypted(update);
    }

    if (Api.is("encryptedChatDiscarded", update.chat)) {
      this.#encryptedChats.delete(update.chat.id);
      this.#authKeys.delete(update.chat.id);
      this.#authKeyIds.delete(update.chat.id);
      this.#pendingExponents.delete(update.chat.id);
      this.#inSeqNo.delete(update.chat.id);
      this.#outSeqNo.delete(update.chat.id);
    } else {
      if (Api.is("encryptedChat", update.chat)) {
        const pending = this.#pendingExponents.get(update.chat.id);
        if (pending !== undefined) {
          const gB = intFromBytes(update.chat.g_a_or_b, { byteOrder: "big", isSigned: false });
          if (!isGoodModExpFirst(gB, pending.prime)) {
            await this.#c.invoke({ _: "messages.discardEncryption", chat_id: update.chat.id });
            this.#pendingExponents.delete(update.chat.id);
            throw new TypeError("Received invalid g_b.");
          }

          const authKey = intToBytes(modExp(gB, pending.exponent, pending.prime), 256, { byteOrder: "big", isSigned: false });
          const authKeyId = (await sha1(authKey)).subarray(-8);
          if (intFromBytes(authKeyId) !== update.chat.key_fingerprint) {
            await this.#c.invoke({ _: "messages.discardEncryption", chat_id: update.chat.id });
            this.#pendingExponents.delete(update.chat.id);
            throw new TypeError("Secret chat key fingerprint mismatch.");
          }

          this.#authKeys.set(update.chat.id, authKey);
          this.#authKeyIds.set(update.chat.id, authKeyId);
          this.#pendingExponents.delete(update.chat.id);
        }
      }
      this.#encryptedChats.set(update.chat.id, update.chat);
    }

    const secretChat = constructSecretChat(update.chat);
    return { type: "secretChat", secretChat };
  }
}
