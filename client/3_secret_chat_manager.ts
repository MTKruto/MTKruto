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

import { concat, equals, ige256Decrypt, ige256Encrypt, unreachable, WEEK } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getLogger, getRandomId, getRandomInt, intFromBytes, intToBytes, type Logger, mod, modExp, sha1, sha256 } from "../1_utilities.ts";
import { Api, repr, SecretChats, TLReader, TLWriter, X } from "../2_tl.ts";
import { constructSecretChat, constructSecretMessage, deserializeFileId, type FileSource, type ID, type ParseMode, type SecretChat, type SecretMessageEntity, secretMessageEntityToTlObject, type Sticker, type Update } from "../3_types.ts";
import { parseHtml } from "./0_html.ts";
import { parseMarkdown } from "./0_markdown.ts";
import type { EndSecretChatParams, SendSecretAnimationParams, SendSecretAudioParams, SendSecretContactParams, SendSecretDocumentParams, SendSecretLocationParams, SendSecretMessageParams, SendSecretPhotoParams, SendSecretStickerParams, SendSecretVenueParams, SendSecretVideoNoteParams, SendSecretVideoParams, SendSecretVoiceParams } from "./0_params.ts";
import { isGoodModExpFirst, isSafePrime } from "./0_password.ts";
import { SecretChatState, type SerializedSecretChatState } from "./0_secret_chat_state.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import { checkPhotoName } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { FileManager } from "./2_file_manager.ts";

interface C extends C_ {
  fileManager: FileManager;
}

const secretChatManagerUpdates = [
  "updateEncryption",
  "updateNewEncryptedMessage",
  "updateEncryptedChatTyping",
] as const;

type SecretChatManagerUpdate = Api.Types[(typeof secretChatManagerUpdates)[number]];

export class SecretChatManager implements UpdateProcessor<SecretChatManagerUpdate, true> {
  #c: C;
  #L: Logger;

  constructor(c: C) {
    this.#c = c;
    this.#L = getLogger("SecretChatManager");
  }

  async loadSecretChats() {
    let loaded = 0;
    for await (const [k, v] of await this.#c.messageStorage.storage.getMany<SerializedSecretChatState>({ prefix: ["secretChats"] })) {
      if (typeof k[1] !== "number") {
        continue;
      }

      this.#states.set(k[1], SecretChatState.load(v));
      ++loaded;
    }

    this.#L.debug("loaded", loaded, "secret chats");
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

  #states = new Map<number, SecretChatState>();

  #getSecretChatState(id: number) {
    let state = this.#states.get(id);
    if (state === undefined) {
      state = new SecretChatState();
      this.#states.set(id, state);
    }

    return state;
  }

  async requestSecretChat(chatId: ID): Promise<SecretChat> {
    this.#c.storage.assertUser("requestSecretChat");
    const user_id = await this.#c.getInputUser(chatId);
    if (Api.is("inputUserSelf", user_id)) {
      throw new InputError("Received invalid chat identifier.");
    }

    const dhConfig = await this.#getDhConfig();
    const prime = intFromBytes(dhConfig.p, { byteOrder: "big", isSigned: false });

    let a: bigint;
    let gA: bigint;
    do {
      a = getRandomInt(256, false);
      gA = modExp(BigInt(dhConfig.g), a, prime);
    } while (!isGoodModExpFirst(gA, prime));

    const random_id = getRandomId(true);
    const g_a = intToBytes(gA, 256, { byteOrder: "big", isSigned: false });

    const result = await this.#c.invoke({
      _: "messages.requestEncryption",
      user_id,
      g_a,
      random_id,
    });
    const state = this.#getSecretChatState(result.id);
    state.g = dhConfig.g;
    state.prime = prime;
    state.a = a;
    state.pendingExponent = a;
    state.encryptedChat = result;
    await state.commit(this.#c.messageStorage.storage);
    return constructSecretChat(result);
  }

  static parseText(text: string, entities: SecretMessageEntity[], parseMode: ParseMode, isEmptyAllowed = false): [string, SecretMessageEntity[]] {
    switch (parseMode) {
      case null:
        break;
      case "HTML": {
        const [newText, entitiesToPush] = parseHtml(text, true);
        text = newText;
        for (const entity of entitiesToPush) {
          entities.push(entity);
        }
        break;
      }
      case "Markdown": {
        const [newText, entitiesToPush] = parseMarkdown(text, true);
        text = newText;
        for (const entity of entitiesToPush) {
          entities.push(entity);
        }
        break;
      }
      default:
        unreachable();
    }

    text = text.trimEnd();
    for (const entity of entities) {
      while (entity.length > 0 && text[entity.offset + (entity.length - 1)] === undefined) {
        --entity.length;
      }
    }
    entities = entities.filter((v) => v.length > 0);

    if (!isEmptyAllowed && !text.length) {
      throw new InputError("Text must not be empty.");
    }

    return [text, entities];
  }

  parseText(text_: string, params?: { parseMode?: ParseMode; entities?: SecretMessageEntity[] }, isEmptyAllowed?: boolean): [string, SecretChats.MessageEntity[] | undefined] {
    const [text, entities_] = SecretChatManager.parseText(text_, params?.entities ?? [], params?.parseMode === null ? null : params?.parseMode ?? this.#c.parseMode, isEmptyAllowed);
    const entities = entities_?.length > 0 ? entities_.map(secretMessageEntityToTlObject) : undefined;
    return [text, entities];
  }

  async acceptSecretChat(id: number): Promise<SecretChat> {
    this.#c.storage.assertUser("acceptSecretChat");
    const state = this.#getSecretChatState(id);
    if (!Api.is("encryptedChatRequested", state.encryptedChat)) {
      throw new InputError("Invalid secret chat identifier received.");
    }

    const dhConfig = await this.#getDhConfig();
    const prime = intFromBytes(dhConfig.p, { byteOrder: "big", isSigned: false });
    state.g = dhConfig.g;
    state.prime = prime;

    const b = getRandomInt(256, false);

    // key = (pow(g_a, b) mod dh_prime)
    const gA = intFromBytes(state.encryptedChat.g_a, { byteOrder: "big", isSigned: false });
    if (!isGoodModExpFirst(gA, prime)) {
      throw new TypeError("Received invalid g_a.");
    }

    let authKey = intToBytes(modExp(gA, b, prime), 256, { byteOrder: "big", isSigned: false });
    if (authKey.byteLength < 256) {
      authKey = concat([new Uint8Array(256 - authKey.byteLength), authKey]);
    }
    state.authKey = authKey;
    state.authKeyCreatedAt = Date.now();
    state.authKeyUseCount = 0;
    state.isAuthKeyUsed = false;

    const authKeyId = (await sha1(authKey)).subarray(-8);
    state.authKeyId_ = authKeyId;
    const key_fingerprint = intFromBytes(authKeyId);
    state.authKeyId = key_fingerprint;

    // g_b := pow(g, b) mod dh_prime
    const g_b = intToBytes(modExp(BigInt(dhConfig.g), b, prime), 256, { byteOrder: "big", isSigned: false });

    const peer: Api.inputEncryptedChat = { _: "inputEncryptedChat", chat_id: state.encryptedChat.id, access_hash: state.encryptedChat.access_hash };

    const result = await this.#c.invoke({
      _: "messages.acceptEncryption",
      peer,
      g_b,
      key_fingerprint,
    });
    state.encryptedChat = result;
    await state.commit(this.#c.messageStorage.storage);
    return constructSecretChat(result);
  }

  async endSecretChat(id: number, params?: EndSecretChatParams): Promise<SecretChat> {
    this.#c.storage.assertUser("endSecretChat");
    const state = this.#getSecretChatState(id);
    switch (state.encryptedChat._) {
      case "encryptedChatEmpty":
      case "encryptedChatDiscarded":
        throw new InputError("The secret chat has already ended.");
    }

    await this.#c.invoke({ _: "messages.discardEncryption", chat_id: state.encryptedChat.id, delete_history: params?.isHistoryDeleted || undefined });
    state.encryptedChat = { _: "encryptedChatDiscarded", id: state.encryptedChat.id, history_deleted: params?.isHistoryDeleted || undefined };
    await state.commit(this.#c.messageStorage.storage);
    return constructSecretChat(state.encryptedChat);
  }

  async #discardSecretChat(state: SecretChatState, chatId: number) {
    await this.#c.invoke({ _: "messages.discardEncryption", chat_id: chatId });
    state.encryptedChat = { _: "encryptedChatDiscarded", id: chatId };
    await state.commit(this.#c.messageStorage.storage);
  }

  #getNextOutSeqNo(id: number, isCreator: boolean) {
    const state = this.#getSecretChatState(id);
    const rawOutSeqNo = state.outSeqNo;
    state.outSeqNo = rawOutSeqNo + 1;
    return 2 * rawOutSeqNo + (isCreator ? 1 : 0);
  }

  #getInSeqNo(id: number, isCreator: boolean) {
    const state = this.#getSecretChatState(id);
    const rawInSeqNo = state.inSeqNo;
    return 2 * rawInSeqNo + (isCreator ? 0 : 1);
  }

  #mustGetEncryptedChat(id: number): SecretChatState & { encryptedChat: Api.encryptedChat } {
    const state = this.#getSecretChatState(id);
    if (!Api.is("encryptedChat", state.encryptedChat)) {
      throw new InputError("Received invalid secret chat identifier.");
    }
    return state as SecretChatState & { encryptedChat: Api.encryptedChat };
  }

  async #postSendMessage(state: SecretChatState) {
    state.isJustLoaded = false;
    await this.#maybeStartRekey(state);
  }

  async sendSecretMessage(id: number, text: string, params?: SendSecretMessageParams) {
    this.#c.storage.assertUser("sendSecretMessage");
    const state = this.#mustGetEncryptedChat(id);
    const [message, entities] = this.parseText(text, params);

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message,
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      entities,
      via_bot_name: params?.viaBot,
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_);
    await this.#postSendMessage(state);
  }

  async sendSecretLocation(id: number, latitude: number, longitude: number, params?: SendSecretLocationParams) {
    this.#c.storage.assertUser("sendSecretLocation");
    const state = this.#mustGetEncryptedChat(id);

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message: "",
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: { _: "decryptedMessageMediaGeoPoint", lat: latitude, long: longitude },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_);
    await this.#postSendMessage(state);
  }

  async sendSecretVenue(id: number, latitude: number, longitude: number, title: string, address: string, params?: SendSecretVenueParams) {
    this.#c.storage.assertUser("sendSecretVenue");
    const state = this.#mustGetEncryptedChat(id);

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message: "",
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: { _: "decryptedMessageMediaVenue", lat: latitude, long: longitude, title, address, provider: "foursquare", venue_id: params?.foursquareId ?? "" },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_);
    await this.#postSendMessage(state);
  }

  async sendSecretContact(id: number, firstName: string, phoneNumber: string, params?: SendSecretContactParams) {
    this.#c.storage.assertUser("sendSecretContact");
    const state = this.#mustGetEncryptedChat(id);

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message: "",
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: { _: "decryptedMessageMediaContact", first_name: firstName, last_name: params?.lastName ?? "", phone_number: phoneNumber, user_id: 0 },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_);
    await this.#postSendMessage(state);
  }

  #generateKeyIv(): [Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>] {
    const key = crypto.getRandomValues(new Uint8Array(32));
    const iv = crypto.getRandomValues(new Uint8Array(32));
    return [key, iv];
  }

  async sendSecretDocument(id: number, document: FileSource, params?: SendSecretDocumentParams) {
    this.#c.storage.assertUser("sendSecretDocument");
    const state = this.#mustGetEncryptedChat(id);
    const [message, entities] = this.parseText(params?.caption ?? "", params, true);

    const [key, iv] = this.#generateKeyIv();

    const { inputEncryptedFile, fileSize } = await this.#c.fileManager.upload(document, params, null, true, { key, iv });

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message,
      entities,
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: {
        _: "decryptedMessageMediaDocument",
        key,
        iv,
        caption: "",
        size: BigInt(fileSize),
        mime_type: params?.mimeType ?? "",
        attributes: params?.fileName ? [{ _: "documentAttributeFilename", file_name: params.fileName }] : [],
        thumb: new Uint8Array(),
        thumb_w: 0,
        thumb_h: 0,
      },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_, inputEncryptedFile);
    await this.#postSendMessage(state);
  }

  async sendSecretVideo(id: number, video: FileSource, params?: SendSecretVideoParams) {
    this.#c.storage.assertUser("sendSecretVideo");
    const state = this.#mustGetEncryptedChat(id);
    const [message, entities] = this.parseText(params?.caption ?? "", params, true);

    const [key, iv] = this.#generateKeyIv();

    const { inputEncryptedFile, fileSize } = await this.#c.fileManager.upload(video, params, null, true, { key, iv });

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message,
      entities,
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: {
        _: "decryptedMessageMediaDocument",
        key,
        iv,
        caption: "",
        size: BigInt(fileSize),
        mime_type: params?.mimeType ?? "",
        attributes: [
          ...(params?.fileName ? [{ _: "documentAttributeFilename", file_name: params.fileName } satisfies SecretChats.documentAttributeFilename] : []),
          { _: "documentAttributeVideo", duration: params?.duration ?? 0, w: params?.width ?? 0, h: params?.height ?? 0 },
        ],
        thumb: new Uint8Array(),
        thumb_w: 0,
        thumb_h: 0,
      },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_, inputEncryptedFile);
    await this.#postSendMessage(state);
  }

  async sendSecretVideoNote(id: number, videoNote: FileSource, params?: SendSecretVideoNoteParams) {
    this.#c.storage.assertUser("sendSecretVideoNote");
    const state = this.#mustGetEncryptedChat(id);
    const [message, entities] = this.parseText(params?.caption ?? "", params, true);

    const [key, iv] = this.#generateKeyIv();

    const { inputEncryptedFile, fileSize } = await this.#c.fileManager.upload(videoNote, params, null, true, { key, iv });

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message,
      entities,
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: {
        _: "decryptedMessageMediaDocument",
        key,
        iv,
        caption: "",
        size: BigInt(fileSize),
        mime_type: params?.mimeType ?? "",
        attributes: [
          ...(params?.fileName ? [{ _: "documentAttributeFilename", file_name: params.fileName } satisfies SecretChats.documentAttributeFilename] : []),
          { _: "documentAttributeVideo", duration: params?.duration ?? 0, w: params?.length ?? 0, h: params?.length ?? 0, round_message: true },
        ],
        thumb: new Uint8Array(),
        thumb_w: 0,
        thumb_h: 0,
      },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_, inputEncryptedFile);
    await this.#postSendMessage(state);
  }

  async sendSecretAudio(id: number, audio: FileSource, params?: SendSecretAudioParams) {
    this.#c.storage.assertUser("sendSecretAudio");
    const state = this.#mustGetEncryptedChat(id);
    const [message, entities] = this.parseText(params?.caption ?? "", params, true);

    const [key, iv] = this.#generateKeyIv();

    const { inputEncryptedFile, fileSize } = await this.#c.fileManager.upload(audio, params, null, true, { key, iv });

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message,
      entities,
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: {
        _: "decryptedMessageMediaDocument",
        key,
        iv,
        caption: "",
        size: BigInt(fileSize),
        mime_type: params?.mimeType ?? "",
        attributes: [
          ...(params?.fileName ? [{ _: "documentAttributeFilename", file_name: params.fileName } satisfies SecretChats.documentAttributeFilename] : []),
          { _: "documentAttributeAudio", duration: params?.duration ?? 0, title: params?.title, performer: params?.performer },
        ],
        thumb: new Uint8Array(),
        thumb_w: 0,
        thumb_h: 0,
      },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_, inputEncryptedFile);
    await this.#postSendMessage(state);
  }

  async sendSecretVoice(id: number, voice: FileSource, params?: SendSecretVoiceParams) {
    this.#c.storage.assertUser("sendSecretVoice");
    const state = this.#mustGetEncryptedChat(id);
    const [message, entities] = this.parseText(params?.caption ?? "", params, true);

    const [key, iv] = this.#generateKeyIv();

    const { inputEncryptedFile, fileSize } = await this.#c.fileManager.upload(voice, params, null, true, { key, iv });

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message,
      entities,
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: {
        _: "decryptedMessageMediaDocument",
        key,
        iv,
        caption: "",
        size: BigInt(fileSize),
        mime_type: params?.mimeType ?? "",
        attributes: [
          ...(params?.fileName ? [{ _: "documentAttributeFilename", file_name: params.fileName } satisfies SecretChats.documentAttributeFilename] : []),
          { _: "documentAttributeAudio", duration: params?.duration ?? 0, voice: true },
        ],
        thumb: new Uint8Array(),
        thumb_w: 0,
        thumb_h: 0,
      },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_, inputEncryptedFile);
    await this.#postSendMessage(state);
  }

  async sendSecretAnimation(id: number, animation: FileSource, params?: SendSecretAnimationParams) {
    this.#c.storage.assertUser("sendSecretAnimation");
    const state = this.#mustGetEncryptedChat(id);
    const [message, entities] = this.parseText(params?.caption ?? "", params, true);

    const [key, iv] = this.#generateKeyIv();

    const { inputEncryptedFile, fileSize } = await this.#c.fileManager.upload(animation, params, null, true, { key, iv });

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message,
      entities,
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: {
        _: "decryptedMessageMediaDocument",
        key,
        iv,
        caption: "",
        size: BigInt(fileSize),
        mime_type: params?.mimeType ?? "",
        attributes: [
          ...(params?.fileName ? [{ _: "documentAttributeFilename", file_name: params.fileName } satisfies SecretChats.documentAttributeFilename] : []),
          { _: "documentAttributeVideo", duration: params?.duration ?? 0, w: params?.width ?? 0, h: params?.height ?? 0 },
          { _: "documentAttributeAnimated" },
        ],
        thumb: new Uint8Array(),
        thumb_w: 0,
        thumb_h: 0,
      },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_, inputEncryptedFile);
    await this.#postSendMessage(state);
  }

  async sendSecretScreenshotNotification(id: number, messageIds: string[]) {
    this.#c.storage.assertUser("sendSecretScreenshotNotification");
    const state = this.#mustGetEncryptedChat(id);

    const random_id = getRandomId();
    const decryptedMessageService: SecretChats.decryptedMessageService = {
      _: "decryptedMessageService",
      action: {
        _: "decryptedMessageActionScreenshotMessages",
        random_ids: messageIds.map(BigInt),
      },
      random_id,
    };

    await this.#sendMessage(decryptedMessageService, state.encryptedChat, state.authKey, state.authKeyId_);
    await this.#postSendMessage(state);
  }

  async sendSecretPhoto(id: number, photo: FileSource, params?: SendSecretPhotoParams) {
    this.#c.storage.assertUser("sendSecretPhoto");
    const state = this.#mustGetEncryptedChat(id);
    const [message, entities] = this.parseText(params?.caption ?? "", params, true);

    const [key, iv] = this.#generateKeyIv();

    const { inputEncryptedFile, fileSize } = await this.#c.fileManager.upload(photo, params, checkPhotoName(params), true, { key, iv });

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message,
      entities,
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media: {
        _: "decryptedMessageMediaPhoto",
        key,
        iv,
        caption: "",
        size: fileSize,
        w: params?.width ?? 0,
        h: params?.height ?? 0,
        thumb: new Uint8Array(),
        thumb_w: 0,
        thumb_h: 0,
      },
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_, inputEncryptedFile);
    await this.#postSendMessage(state);
  }

  async sendSecretSticker(id: number, sticker: Sticker, params?: SendSecretStickerParams) {
    this.#c.storage.assertUser("sendSecretSticker");
    if (!sticker.setName) {
      throw new InputError("This sticker cannot be sent to a secret chat.");
    }

    const state = this.#mustGetEncryptedChat(id);
    let inputEncryptedFile: Api.InputEncryptedFile | undefined;

    const fileID = deserializeFileId(sticker.fileId);
    if (fileID.location.type !== "common") {
      unreachable();
    }

    const media: SecretChats.decryptedMessageMediaExternalDocument = {
      _: "decryptedMessageMediaExternalDocument",
      dc_id: fileID.dcId,
      access_hash: fileID.location.accessHash,
      attributes: [
        { _: "documentAttributeImageSize", w: sticker.width, h: sticker.height },
        { _: "documentAttributeSticker", alt: sticker.emoji ?? "", stickerset: { _: "inputStickerSetShortName", short_name: sticker.setName } },
      ],
      date: 0,
      id: fileID.location.id,
      size: sticker.fileSize ?? 0,
      thumb: { _: "photoSizeEmpty", type: "s" },
      mime_type: sticker.isVideo ? "video/webm" : sticker.isAnimated ? "application/x-tgsticker" : "image/webp",
    };

    const random_id = getRandomId();
    const decryptedMessage: SecretChats.decryptedMessage = {
      _: "decryptedMessage",
      message: "",
      random_id,
      ttl: params?.ttl ?? 0,
      silent: params?.isSilent || undefined,
      reply_to_random_id: params?.replyToMessageId ? BigInt(params.replyToMessageId) : undefined,
      via_bot_name: params?.viaBot,
      media,
    };

    await this.#sendMessage(decryptedMessage, state.encryptedChat, state.authKey, state.authKeyId_, inputEncryptedFile);
    await this.#postSendMessage(state);
  }

  async sendSecretTypingAction(id: number) {
    this.#c.storage.assertUser("sendSecretTypingAction");
    const { encryptedChat } = this.#mustGetEncryptedChat(id);
    const peer: Api.inputEncryptedChat = { _: "inputEncryptedChat", chat_id: encryptedChat.id, access_hash: encryptedChat.access_hash };
    await this.#c.invoke({ _: "messages.setEncryptedTyping", peer, typing: true });
  }

  async sendSecretCancelTypingAction(id: number) {
    this.#c.storage.assertUser("sendSecretCancelTypingAction");
    const { encryptedChat } = this.#mustGetEncryptedChat(id);
    const peer: Api.inputEncryptedChat = { _: "inputEncryptedChat", chat_id: encryptedChat.id, access_hash: encryptedChat.access_hash };
    await this.#c.invoke({ _: "messages.setEncryptedTyping", peer, typing: false });
  }

  #sendTails = new Map<number, Promise<void>>();
  async #sendMessage(message: SecretChats.DecryptedMessage, encryptedChat: Api.encryptedChat, authKey: Uint8Array<ArrayBuffer>, authKeyId: Uint8Array<ArrayBuffer>, file?: Api.InputEncryptedFile, isService = false) {
    try {
      await this.#sendMessageInner(message, encryptedChat, authKey, authKeyId, file, isService);
    } finally {
      await this.#getSecretChatState(encryptedChat.id).commit(this.#c.messageStorage.storage);
    }
  }

  async #sendMessageInner(message: SecretChats.DecryptedMessage, encryptedChat: Api.encryptedChat, authKey: Uint8Array<ArrayBuffer>, authKeyId: Uint8Array<ArrayBuffer>, file: Api.InputEncryptedFile | undefined, isService: boolean) {
    const previous = this.#sendTails.get(encryptedChat.id) ?? Promise.resolve();
    const { promise, resolve } = Promise.withResolvers<void>();
    const tail = previous.then(() => promise);
    this.#sendTails.set(encryptedChat.id, tail);
    await previous;
    try {
      await this.#sendMessageUnlocked(message, encryptedChat, authKey, authKeyId, file, isService);
    } finally {
      resolve();
      if (this.#sendTails.get(encryptedChat.id) === tail) {
        this.#sendTails.delete(encryptedChat.id);
      }
    }
  }

  async #sendMessageUnlocked(message: SecretChats.DecryptedMessage, encryptedChat: Api.encryptedChat, authKey: Uint8Array<ArrayBuffer>, authKeyId: Uint8Array<ArrayBuffer>, file: Api.InputEncryptedFile | undefined, isService: boolean) {
    const isCreator = Number(encryptedChat.admin_id) === await this.#c.getSelfId();
    const out_seq_no = this.#getNextOutSeqNo(encryptedChat.id, isCreator);
    const in_seq_no = this.#getInSeqNo(encryptedChat.id, isCreator);

    const decryptedMessageLayer: SecretChats.decryptedMessageLayer = { _: "decryptedMessageLayer", in_seq_no, layer: 144, message, out_seq_no, random_bytes: crypto.getRandomValues(new Uint8Array(15)) };

    const data = await this.#encryptMessage(isCreator, authKeyId, authKey, decryptedMessageLayer);

    const isSilent = !!(SecretChats.is("decryptedMessage", message) && message.silent);
    const key = (out_seq_no - (isCreator ? 1 : 0)) / 2;
    const state = this.#getSecretChatState(encryptedChat.id);
    state.outgoingMessages.set(key, { data, file, isService, isSilent });
    if (file) {
      const result = await this.#c.invoke({
        _: "messages.sendEncryptedFile",
        silent: isSilent ? true : undefined,
        peer: { _: "inputEncryptedChat", chat_id: encryptedChat.id, access_hash: encryptedChat.access_hash },
        random_id: message.random_id,
        data,
        file,
      });
      if (!Api.is("messages.sentEncryptedFile", result) || !Api.is("encryptedFile", result.file) || result.file.size <= 0n) {
        throw new InputError("Telegram did not attach the encrypted file to the secret message.");
      }
      const outgoingMessage = state.outgoingMessages.get(key);
      if (outgoingMessage) {
        outgoingMessage.file = { _: "inputEncryptedFile", id: result.file.id, access_hash: result.file.access_hash };
      }
    } else if (isService) {
      await this.#c.invoke({
        _: "messages.sendEncryptedService",
        peer: { _: "inputEncryptedChat", chat_id: encryptedChat.id, access_hash: encryptedChat.access_hash },
        random_id: message.random_id,
        data,
      });
    } else {
      await this.#c.invoke({
        _: "messages.sendEncrypted",
        silent: isSilent ? true : undefined,
        peer: { _: "inputEncryptedChat", chat_id: encryptedChat.id, access_hash: encryptedChat.access_hash },
        random_id: message.random_id,
        data,
      });
    }
    if (equals(state.authKeyId_, authKeyId)) {
      ++state.authKeyUseCount;
      state.isAuthKeyUsed = true;
    }
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

  async #checkGap(chatId: number, message: SecretChats.decryptedMessageLayer, encryptedMessage: Api.EncryptedMessage) {
    const state = this.#getSecretChatState(chatId);
    if (!Api.is("encryptedChat", state.encryptedChat)) {
      return;
    }
    const isCreator = Number(state.encryptedChat.admin_id) === await this.#c.getSelfId();
    const x = isCreator ? 0 : 1;
    const inX = isCreator ? 1 : 0;
    if (message.out_seq_no < 0 || message.out_seq_no % 2 !== x) {
      this.#L.debug("discarding secret chat", chatId, "because an invalid out_seq_no was received");
      await this.#discardSecretChat(state, chatId);
      throw new TypeError("Received invalid secret chat out_seq_no.");
    }
    const outSeqNo = (message.out_seq_no - x) / 2;
    const inSeqNo = (message.in_seq_no - inX) / 2;
    if (inSeqNo % 1 !== 0 || inSeqNo < 0 || inSeqNo > state.outSeqNo) {
      this.#L.debug("discarding secret chat", chatId, "because an invalid in_seq_no was received");
      await this.#discardSecretChat(state, chatId);
      throw new TypeError("Received invalid secret chat in_seq_no.");
    }
    if (outSeqNo < state.inSeqNo) { // old
      return;
    }
    const alreadyPending = state.pendingMessages.some((v) => v[0].out_seq_no === message.out_seq_no);
    if (!alreadyPending && SecretChats.is("decryptedMessageService", message.message) && SecretChats.is("decryptedMessageActionResend", message.message.action)) {
      await this.#resendMessages(state, message.message.action, isCreator);
    }
    if (outSeqNo > state.inSeqNo) { // gap
      if (!state.pendingMessages.some((v) => v[0].out_seq_no === message.out_seq_no)) {
        state.pendingMessages.push([message, encryptedMessage]);
      }
      if (state.isGapRequested) {
        return;
      }
      await this.#sendMessage(
        {
          _: "decryptedMessageService",
          random_id: getRandomId(),
          action: {
            _: "decryptedMessageActionResend",
            start_seq_no: state.inSeqNo * 2 + x,
            end_seq_no: message.out_seq_no - 2,
          },
        },
        state.encryptedChat,
        state.authKey,
        state.authKeyId_,
        undefined,
        true,
      );
      state.isGapRequested = true;
      state.gapEndSeqNo = outSeqNo - 1;
      return;
    }

    const handle = async (message: SecretChats.decryptedMessageLayer, encryptedMessage: Api.EncryptedMessage) => {
      const inSeqNo = (message.in_seq_no - inX) / 2;
      const isJustLoaded = state.isJustLoaded;
      if (inSeqNo < state.remoteInSeqNo && !isJustLoaded) {
        this.#L.debug("discarding secret chat", chatId, "because of decreasing in_seq_no");
        await this.#discardSecretChat(state, chatId);
        throw new TypeError("Received decreasing secret chat in_seq_no.");
      }
      state.isJustLoaded = false;
      state.remoteInSeqNo = Math.max(state.remoteInSeqNo, inSeqNo);
      ++state.inSeqNo;
      await this.#handleDecryptedMessageLayer(chatId, message, encryptedMessage);
    };
    await handle(message, encryptedMessage);
    while (true) {
      const index = state.pendingMessages.findIndex((v) => (v[0].out_seq_no - x) / 2 === state.inSeqNo);
      if (index === -1) {
        break;
      }
      const [pendingMessage] = state.pendingMessages.splice(index, 1);
      await handle(pendingMessage[0], pendingMessage[1]);
    }
    if (state.pendingMessages.length === 0) {
      state.isGapRequested = false;
      state.gapEndSeqNo = -1;
    } else if (state.inSeqNo > state.gapEndSeqNo) {
      state.isGapRequested = false;
      const next = state.pendingMessages.reduce((a, b) => a[0].out_seq_no < b[0].out_seq_no ? a : b);
      await this.#checkGap(chatId, next[0], next[1]);
    }
  }

  async #resendMessages(state: SecretChatState, action: SecretChats.decryptedMessageActionResend, isCreator: boolean) {
    if (!Api.is("encryptedChat", state.encryptedChat)) {
      return;
    }
    const x = isCreator ? 1 : 0;
    const start = (action.start_seq_no - x) / 2;
    const end = (action.end_seq_no - x) / 2;
    if (start % 1 !== 0 || end % 1 !== 0 || start < 0 || end < start || end >= state.outSeqNo) {
      this.#L.debug("discarding secret chat", state.encryptedChat.id, "because an invalid resend range was received");
      await this.#discardSecretChat(state, state.encryptedChat.id);
      throw new TypeError("Received invalid secret chat resend range.");
    }
    const peer: Api.inputEncryptedChat = { _: "inputEncryptedChat", chat_id: state.encryptedChat.id, access_hash: state.encryptedChat.access_hash };
    for (let seqNo = start; seqNo <= end; ++seqNo) {
      const message = state.outgoingMessages.get(seqNo);
      if (!message) {
        this.#L.debug("discarding secret chat", state.encryptedChat.id, "because the message could not be resent");
        await this.#discardSecretChat(state, state.encryptedChat.id);
        throw new TypeError("Unable to resend secret chat message.");
      }
      if (message.file) {
        await this.#c.invoke({
          _: "messages.sendEncryptedFile",
          peer,
          random_id: getRandomId(),
          data: message.data,
          file: message.file,
          silent: message.isSilent ? true : undefined,
        });
      } else if (message.isService) {
        await this.#c.invoke({
          _: "messages.sendEncryptedService",
          peer,
          random_id: getRandomId(),
          data: message.data,
        });
      } else {
        await this.#c.invoke({
          _: "messages.sendEncrypted",
          peer,
          random_id: getRandomId(),
          data: message.data,
          silent: message.isSilent ? true : undefined,
        });
      }
    }
  }

  #clearPreviousKey(state: SecretChatState) {
    state.previousAuthKey.fill(0);
    state.previousAuthKey = new Uint8Array();
    state.previousAuthKeyId_ = new Uint8Array();
    state.previousAuthKeyDiscardAfterSeqNo = -1;
    state.isAwaitingNewAuthKeyConfirmation = false;
  }

  #installNewKey(state: SecretChatState, authKey: Uint8Array<ArrayBuffer>, authKeyId: bigint, authKeyId_: Uint8Array<ArrayBuffer>, awaitingConfirmation: boolean, discardAfterSeqNo = -1) {
    state.previousAuthKey = state.authKey;
    state.previousAuthKeyId_ = state.authKeyId_;
    state.previousAuthKeyDiscardAfterSeqNo = discardAfterSeqNo;
    state.isAwaitingNewAuthKeyConfirmation = awaitingConfirmation;
    state.authKey = authKey;
    state.authKeyId = authKeyId;
    state.authKeyId_ = authKeyId_;
    state.authKeyCreatedAt = Date.now();
    state.authKeyUseCount = 0;
    state.isAuthKeyUsed = false;
  }

  async #abortRekey(state: SecretChatState, exchangeId: bigint) {
    if (!Api.is("encryptedChat", state.encryptedChat)) {
      return;
    }
    const action: SecretChats.decryptedMessageActionAbortKey = { _: "decryptedMessageActionAbortKey", exchange_id: exchangeId };
    await this.#sendMessage({ _: "decryptedMessageService", random_id: getRandomId(), action }, state.encryptedChat, state.authKey, state.authKeyId_, undefined, true);
  }

  #clearInitiatedRekey(state: SecretChatState) {
    state.rekeyId = 0n;
    state.rekeyA = 0n;
  }

  async #processDecryptedMessageActionAcceptKey(chatId: number, action_: SecretChats.decryptedMessageActionAcceptKey) {
    const state = this.#getSecretChatState(chatId);
    if (state.rekeyId !== action_.exchange_id || !Api.is("encryptedChat", state.encryptedChat)) {
      return;
    }

    const gB = intFromBytes(action_.g_b, { byteOrder: "big", isSigned: false });
    if (!isGoodModExpFirst(gB, state.prime)) {
      await this.#abortRekey(state, action_.exchange_id);
      this.#clearInitiatedRekey(state);
      return;
    }
    const authKey = intToBytes(modExp(gB, state.rekeyA, state.prime), 256, { byteOrder: "big", isSigned: false });
    const authKeyId_ = (await sha1(authKey)).subarray(-8);
    const authKeyId = intFromBytes(authKeyId_);
    if (action_.key_fingerprint !== authKeyId) {
      await this.#abortRekey(state, action_.exchange_id);
      this.#clearInitiatedRekey(state);
      return;
    }

    const random_id = getRandomId();
    const action: SecretChats.decryptedMessageActionCommitKey = {
      _: "decryptedMessageActionCommitKey",
      exchange_id: state.rekeyId,
      key_fingerprint: authKeyId,
    };
    await this.#sendMessage({ _: "decryptedMessageService", random_id, action }, state.encryptedChat, state.authKey, state.authKeyId_, undefined, true);
    this.#installNewKey(state, authKey, authKeyId, authKeyId_, true);
    this.#clearInitiatedRekey(state);
  }

  async #processDecryptedMessageActionRequestKey(chatId: number, action_: SecretChats.decryptedMessageActionRequestKey) {
    const state = this.#getSecretChatState(chatId);
    if (!Api.is("encryptedChat", state.encryptedChat)) {
      return;
    }

    if (state.previousAuthKey.byteLength !== 0) {
      await this.#abortRekey(state, action_.exchange_id);
      return;
    }
    if (state.toCommitId !== 0n) {
      await this.#abortRekey(state, action_.exchange_id);
      return;
    }
    if (state.rekeyId !== 0n) {
      if (state.rekeyId >= action_.exchange_id) {
        if (state.rekeyId === action_.exchange_id) {
          this.#clearInitiatedRekey(state);
        }
        return;
      }
      this.#clearInitiatedRekey(state);
    }

    const gA = intFromBytes(action_.g_a, { byteOrder: "big", isSigned: false });
    if (!isGoodModExpFirst(gA, state.prime)) {
      await this.#abortRekey(state, action_.exchange_id);
      return;
    }

    let b: bigint;
    let gB: bigint;
    do {
      b = getRandomInt(256, false);
      gB = modExp(BigInt(state.g), b, state.prime);
    } while (!isGoodModExpFirst(gB, state.prime));

    // pow(g_a, b) mod p
    const authKey = intToBytes(modExp(gA, b, state.prime), 256, { byteOrder: "big", isSigned: false });
    const authKeyId_ = (await sha1(authKey)).subarray(-8);
    const authKeyId = intFromBytes(authKeyId_);

    // pow(g,b) mod p
    const g_b = intToBytes(gB, 256, { byteOrder: "big", isSigned: false });
    const action: SecretChats.decryptedMessageActionAcceptKey = {
      _: "decryptedMessageActionAcceptKey",
      exchange_id: action_.exchange_id,
      g_b,
      key_fingerprint: authKeyId,
    };
    const random_id = getRandomId();
    state.toCommitId = action_.exchange_id;
    state.toCommitAuthKey = authKey;
    state.toCommitAuthKeyId = authKeyId;
    state.toCommitAuthKeyId_ = authKeyId_;
    try {
      await this.#sendMessage({ _: "decryptedMessageService", random_id, action }, state.encryptedChat, state.authKey, state.authKeyId_, undefined, true);
    } catch (err) {
      state.toCommitId = 0n;
      state.toCommitAuthKey = new Uint8Array();
      state.toCommitAuthKeyId = 0n;
      state.toCommitAuthKeyId_ = new Uint8Array();
      await state.commit(this.#c.messageStorage.storage);
      throw err;
    }
  }

  async #processDecryptedMessageActionCommitKey(chatId: number, action: SecretChats.decryptedMessageActionCommitKey) {
    const state = this.#getSecretChatState(chatId);
    if (state.toCommitId !== action.exchange_id) {
      return;
    }
    if (state.toCommitAuthKeyId !== action.key_fingerprint || !Api.is("encryptedChat", state.encryptedChat)) {
      this.#L.debug(`discarding secret chat ${chatId}: re-key fingerprint mismatch`);
      await this.#discardSecretChat(state, chatId);
      throw new TypeError("Secret chat re-key fingerprint mismatch.");
    }
    this.#installNewKey(state, state.toCommitAuthKey, state.toCommitAuthKeyId, state.toCommitAuthKeyId_, false);
    state.toCommitId = 0n;
    state.toCommitAuthKey = new Uint8Array();
    state.toCommitAuthKeyId = 0n;
    state.toCommitAuthKeyId_ = new Uint8Array();
    const noop: SecretChats.decryptedMessageActionNoop = { _: "decryptedMessageActionNoop" };
    await this.#sendMessage({ _: "decryptedMessageService", random_id: getRandomId(), action: noop }, state.encryptedChat, state.authKey, state.authKeyId_, undefined, true);
    this.#clearPreviousKey(state);
  }

  async #handleDecryptedMessageLayer(chatId: number, decryptedMessageLayer: SecretChats.decryptedMessageLayer, encryptedMessage: Api.EncryptedMessage) {
    const state = this.#getSecretChatState(chatId);
    if (SecretChats.is("decryptedMessage", decryptedMessageLayer.message)) {
      const secretMessage = constructSecretMessage(state.encryptedChat.id, decryptedMessageLayer.message, encryptedMessage);
      this.#c.handleUpdate({ type: "secretMessage", secretMessage });
    } else if (SecretChats.is("decryptedMessageService", decryptedMessageLayer.message)) {
      await this.#processServiceMessage(state.encryptedChat.id, decryptedMessageLayer.message);
    }
  }

  async #processServiceMessage(chatId: number, message: SecretChats.decryptedMessageService) {
    switch (message.action._) {
      case "decryptedMessageActionAcceptKey":
        await this.#processDecryptedMessageActionAcceptKey(chatId, message.action);
        break;
      case "decryptedMessageActionRequestKey":
        await this.#processDecryptedMessageActionRequestKey(chatId, message.action);
        break;
      case "decryptedMessageActionCommitKey":
        await this.#processDecryptedMessageActionCommitKey(chatId, message.action);
        break;
      case "decryptedMessageActionAbortKey": {
        const state = this.#getSecretChatState(chatId);
        if (state.rekeyId === message.action.exchange_id) {
          this.#clearInitiatedRekey(state);
        }
        break;
      }
    }
  }

  async #processUpdateNewMessageEncrypted(update: Api.updateNewEncryptedMessage): Promise<Update | null> {
    try {
      return await this.#processUpdateNewMessageEncryptedInner(update);
    } finally {
      await this.#getSecretChatState(update.message.chat_id).commit(this.#c.messageStorage.storage);
    }
  }

  async #processUpdateNewMessageEncryptedInner(update: Api.updateNewEncryptedMessage): Promise<Update | null> {
    const state = this.#getSecretChatState(update.message.chat_id);
    if (!Api.is("encryptedChat", state.encryptedChat)) {
      this.#L.debug("ignoring encrypted message");
      return null;
    }

    const isCreator = Number(state.encryptedChat.admin_id) === await this.#c.getSelfId();
    const receivedKeyId = update.message.bytes.subarray(0, 8);
    let authKey = state.authKey;
    let authKeyId = state.authKeyId_;
    let pendingKey = false;
    if (equals(receivedKeyId, state.toCommitAuthKeyId_)) {
      authKey = state.toCommitAuthKey;
      authKeyId = state.toCommitAuthKeyId_;
      pendingKey = true;
    } else if (equals(receivedKeyId, state.previousAuthKeyId_)) {
      authKey = state.previousAuthKey;
      authKeyId = state.previousAuthKeyId_;
    }
    const decryptedMessage = await this.#decryptMessage(authKeyId, authKey, isCreator, update.message.bytes);
    this.#L.debug("received", repr(decryptedMessage));
    if (SecretChats.is("decryptedMessageLayer", decryptedMessage)) {
      const x = isCreator ? 0 : 1;
      const rawOutSeqNo = (decryptedMessage.out_seq_no - x) / 2;
      if (pendingKey) {
        this.#installNewKey(state, state.toCommitAuthKey, state.toCommitAuthKeyId, state.toCommitAuthKeyId_, false, rawOutSeqNo);
        ++state.authKeyUseCount;
        state.toCommitId = 0n;
        state.toCommitAuthKey = new Uint8Array();
        state.toCommitAuthKeyId = 0n;
        state.toCommitAuthKeyId_ = new Uint8Array();
      } else if (equals(authKeyId, state.authKeyId_)) {
        ++state.authKeyUseCount;
        if (state.previousAuthKey.byteLength !== 0) {
          state.previousAuthKeyDiscardAfterSeqNo = rawOutSeqNo;
        }
      }
      await this.#checkGap(state.encryptedChat.id, decryptedMessage, update.message);
      if (pendingKey && Api.is("encryptedChat", state.encryptedChat)) {
        const noop: SecretChats.decryptedMessageActionNoop = { _: "decryptedMessageActionNoop" };
        await this.#sendMessage({ _: "decryptedMessageService", random_id: getRandomId(), action: noop }, state.encryptedChat, state.authKey, state.authKeyId_, undefined, true);
      }
      if (state.previousAuthKeyDiscardAfterSeqNo >= 0 && state.inSeqNo > state.previousAuthKeyDiscardAfterSeqNo) {
        this.#clearPreviousKey(state);
      }
      await this.#maybeStartRekey(state);
    }

    return null;
  }

  canHandleUpdate(update: Api.Update): update is SecretChatManagerUpdate {
    return Api.isOneOf(secretChatManagerUpdates, update);
  }

  async handleUpdate(update: SecretChatManagerUpdate): Promise<Update | null> {
    if (Api.is("updateEncryptedChatTyping", update)) {
      return { type: "secretTyping", chatId: update.chat_id };
    }

    if (Api.is("updateNewEncryptedMessage", update)) {
      return await this.#processUpdateNewMessageEncrypted(update);
    }

    if (Api.is("encryptedChatDiscarded", update.chat)) {
      const state = this.#states.get(update.chat.id);
      if (state !== undefined) {
        this.#states.delete(update.chat.id);
        state.encryptedChat = update.chat;
        await state.commit(this.#c.messageStorage.storage);
      }
    } else {
      const state = this.#getSecretChatState(update.chat.id);
      if (Api.is("encryptedChat", update.chat)) {
        const pending = state.pendingExponent;
        if (pending !== 0n) {
          const gB = intFromBytes(update.chat.g_a_or_b, { byteOrder: "big", isSigned: false });
          if (!isGoodModExpFirst(gB, state.prime)) {
            this.#L.debug("discarding secret chat", update.chat.id, "because an invalid g_b was received");
            state.pendingExponent = 0n;
            await this.#discardSecretChat(state, update.chat.id);
            throw new TypeError("Received invalid g_b.");
          }

          const authKey = intToBytes(modExp(gB, pending, state.prime), 256, { byteOrder: "big", isSigned: false });
          const authKeyId_ = (await sha1(authKey)).subarray(-8);
          const authKeyId = intFromBytes(authKeyId_);
          if (authKeyId !== update.chat.key_fingerprint) {
            this.#L.debug("discarding secret chat", update.chat.id, "because of key fingerprint mismatch");
            state.pendingExponent = 0n;
            await this.#discardSecretChat(state, update.chat.id);
            throw new TypeError("Secret chat key fingerprint mismatch.");
          }

          state.authKey = authKey;
          state.authKeyId = authKeyId;
          state.authKeyId_ = authKeyId_;
          state.authKeyCreatedAt = Date.now();
          state.authKeyUseCount = 0;
          state.isAuthKeyUsed = false;
          state.pendingExponent = 0n;
        }
      }

      state.encryptedChat = update.chat;
      await state.commit(this.#c.messageStorage.storage);
    }

    const secretChat = constructSecretChat(update.chat);
    return { type: "secretChat", secretChat };
  }

  async #startRekey(encryptedChat: Api.encryptedChat, authKeyId: Uint8Array<ArrayBuffer>, authKey: Uint8Array<ArrayBuffer>) {
    const state = this.#getSecretChatState(encryptedChat.id);
    if (state.rekeyId !== 0n || state.toCommitId !== 0n || state.previousAuthKey.byteLength !== 0) {
      return;
    }

    let gA: bigint;
    let a: bigint;

    do {
      a = getRandomInt(256, false);
      gA = modExp(BigInt(state.g), a, state.prime);
    } while (!isGoodModExpFirst(gA, state.prime));

    const exchange_id = getRandomId();
    state.rekeyId = exchange_id;
    state.rekeyA = a;

    const g_a = intToBytes(gA, 256, { byteOrder: "big", isSigned: false });

    const random_id = getRandomId();
    const action: SecretChats.decryptedMessageActionRequestKey = {
      _: "decryptedMessageActionRequestKey",
      exchange_id,
      g_a,
    };
    try {
      await this.#sendMessage(
        {
          _: "decryptedMessageService",
          random_id,
          action,
        },
        encryptedChat,
        authKey,
        authKeyId,
        undefined,
        true,
      );
    } catch (err) {
      this.#clearInitiatedRekey(state);
      throw err;
    }
  }

  async #maybeStartRekey(state: SecretChatState) {
    if (!Api.is("encryptedChat", state.encryptedChat) || state.rekeyId !== 0n || state.toCommitId !== 0n || state.previousAuthKey.byteLength !== 0) {
      return;
    }
    if (state.authKeyUseCount > 100 || state.isAuthKeyUsed && Date.now() - state.authKeyCreatedAt >= WEEK) {
      await this.#startRekey(state.encryptedChat, state.authKeyId_, state.authKey);
    }
  }
}
