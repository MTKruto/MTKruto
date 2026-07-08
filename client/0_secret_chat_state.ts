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

import { LruCache } from "../0_deps.ts";
import type { Storage } from "../2_storage.ts";
import { Api, type SecretChats } from "../2_tl.ts";

export interface SerializedSecretChatState {
  encryptedChat: Api.EncryptedChat;

  authKey: Uint8Array<ArrayBuffer>;
  authKeyId: bigint;
  authKeyId_: Uint8Array<ArrayBuffer>;
  authKeyUseCount: number;
  isAuthKeyUsed: boolean;
  authKeyCreatedAt: number;

  previousAuthKey: Uint8Array<ArrayBuffer>;
  previousAuthKeyId_: Uint8Array<ArrayBuffer>;
  previousAuthKeyDiscardAfterSeqNo: number;
  isAwaitingNewAuthKeyConfirmation: boolean;

  a: bigint;
  g: number;
  prime: bigint;
  pendingExponent: bigint;

  rekeyId: bigint;
  rekeyA: bigint;

  toCommitId: bigint;
  toCommitAuthKey: Uint8Array<ArrayBuffer>;
  toCommitAuthKeyId: bigint;
  toCommitAuthKeyId_: Uint8Array<ArrayBuffer>;

  inSeqNo: number;
  outSeqNo: number;
  remoteInSeqNo: number;

  isGapRequested: boolean;
  gapEndSeqNo: number;
  pendingMessages: [SecretChats.decryptedMessageLayer, Api.EncryptedMessage][];
  outgoingMessages: [number, OutgoingMessage][];
}

export interface OutgoingMessage {
  data: Uint8Array<ArrayBuffer>;
  file?: Api.InputEncryptedFile;
  isService: boolean;
  isSilent: boolean;
}

export class SecretChatState {
  isJustLoaded = false;
  encryptedChat: Api.EncryptedChat = { _: "encryptedChatEmpty", id: 0 };

  authKey = new Uint8Array();
  authKeyId = 0n;
  authKeyId_ = new Uint8Array();
  authKeyUseCount = 0;
  isAuthKeyUsed = false;
  authKeyCreatedAt = Date.now();

  previousAuthKey = new Uint8Array();
  previousAuthKeyId_ = new Uint8Array();
  previousAuthKeyDiscardAfterSeqNo = -1;
  isAwaitingNewAuthKeyConfirmation = false;

  a = 0n;
  g = 0;
  prime = 0n;
  pendingExponent = 0n;

  rekeyId = 0n;
  rekeyA = 0n;

  toCommitId = 0n;
  toCommitAuthKey = new Uint8Array();
  toCommitAuthKeyId = 0n;
  toCommitAuthKeyId_ = new Uint8Array();

  inSeqNo = 0;
  outSeqNo = 0;
  remoteInSeqNo = 0;

  isGapRequested = false;
  gapEndSeqNo = -1;
  pendingMessages = new Array<[SecretChats.decryptedMessageLayer, Api.EncryptedMessage]>();
  outgoingMessages = new LruCache<number, OutgoingMessage>(1_000);

  async commit(storage: Storage) {
    const key = ["secretChats", this.encryptedChat.id];
    if (Api.is("encryptedChatDiscarded", this.encryptedChat) || Api.is("encryptedChatEmpty", this.encryptedChat)) {
      await storage.set(key, null);
      return;
    }

    const outgoingMessages = new Array<[number, OutgoingMessage]>();
    for (const outgoingMessage of this.outgoingMessages.entries()) {
      outgoingMessages.push(outgoingMessage);
    }

    const serialized: SerializedSecretChatState = {
      encryptedChat: this.encryptedChat,

      authKey: this.authKey,
      authKeyId: this.authKeyId,
      authKeyId_: this.authKeyId_,
      authKeyUseCount: this.authKeyUseCount,
      isAuthKeyUsed: this.isAuthKeyUsed,
      authKeyCreatedAt: this.authKeyCreatedAt,

      previousAuthKey: this.previousAuthKey,
      previousAuthKeyId_: this.previousAuthKeyId_,
      previousAuthKeyDiscardAfterSeqNo: this.previousAuthKeyDiscardAfterSeqNo,
      isAwaitingNewAuthKeyConfirmation: this.isAwaitingNewAuthKeyConfirmation,

      a: this.a,
      g: this.g,
      prime: this.prime,
      pendingExponent: this.pendingExponent,

      rekeyId: this.rekeyId,
      rekeyA: this.rekeyA,

      toCommitId: this.toCommitId,
      toCommitAuthKey: this.toCommitAuthKey,
      toCommitAuthKeyId: this.toCommitAuthKeyId,
      toCommitAuthKeyId_: this.toCommitAuthKeyId_,

      inSeqNo: this.inSeqNo,
      outSeqNo: this.outSeqNo,
      remoteInSeqNo: this.remoteInSeqNo,

      isGapRequested: this.isGapRequested,
      gapEndSeqNo: this.gapEndSeqNo,
      pendingMessages: this.pendingMessages,
      outgoingMessages,
    };

    await storage.set(key, serialized);
  }

  static load(result: SerializedSecretChatState) {
    const state = new SecretChatState();
    state.isJustLoaded = true;
    state.encryptedChat = result.encryptedChat;

    state.authKey = result.authKey;
    state.authKeyId = result.authKeyId;
    state.authKeyId_ = result.authKeyId_;
    state.authKeyUseCount = result.authKeyUseCount;
    state.isAuthKeyUsed = result.isAuthKeyUsed;
    state.authKeyCreatedAt = result.authKeyCreatedAt;

    state.previousAuthKey = result.previousAuthKey;
    state.previousAuthKeyId_ = result.previousAuthKeyId_;
    state.previousAuthKeyDiscardAfterSeqNo = result.previousAuthKeyDiscardAfterSeqNo;
    state.isAwaitingNewAuthKeyConfirmation = result.isAwaitingNewAuthKeyConfirmation;

    state.a = result.a;
    state.g = result.g;
    state.prime = result.prime;
    state.pendingExponent = result.pendingExponent;

    state.rekeyId = result.rekeyId;
    state.rekeyA = result.rekeyA;

    state.toCommitId = result.toCommitId;
    state.toCommitAuthKey = result.toCommitAuthKey;
    state.toCommitAuthKeyId = result.toCommitAuthKeyId;
    state.toCommitAuthKeyId_ = result.toCommitAuthKeyId_;

    state.inSeqNo = result.inSeqNo;
    state.outSeqNo = result.outSeqNo;
    state.remoteInSeqNo = result.remoteInSeqNo;

    state.isGapRequested = result.isGapRequested;
    state.gapEndSeqNo = result.gapEndSeqNo;
    state.pendingMessages = result.pendingMessages;
    for (const [k, v] of result.outgoingMessages) {
      state.outgoingMessages.set(k, v);
    }

    return state;
  }
}
