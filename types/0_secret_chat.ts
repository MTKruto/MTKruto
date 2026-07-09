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

import { Api } from "../2_tl.ts";

/**
 * A pending secret chat.
 * @unlisted
 */
export interface SecretChatPending {
  type: "pending";
  /** The identifier of the secret chat. */
  id: number;
  /** The identifier of the user with which the secret chat is made. */
  userId: number;
}

/**
 * A requested secret chat.
 * @unlisted
 */
export interface SecretChatRequested {
  type: "requested";
  /** The identifier of the secret chat. */
  id: number;
  /** The identifier of the user with which the secret chat is made. */
  userId: number;
}

/**
 * An active secret chat.
 * @unlisted
 */
export interface SecretChatActive {
  type: "active";
  /** The identifier of the secret chat. */
  id: number;
  /** The identifier of the user with which the secret chat is made. */
  userId: number;
}

/**
 * A discarded secret chat.
 * @unlisted
 */
export interface SecretChatDiscarded {
  type: "discarded";
  /** The identifier of the secret chat. */
  id: number;
}

/** Any type of secret chat. */
export type SecretChat = SecretChatPending | SecretChatRequested | SecretChatActive | SecretChatDiscarded;

export function constructSecretChat(ec: Api.EncryptedChat, selfId?: number): SecretChat {
  if (Api.isOneOf(["encryptedChatEmpty", "encryptedChatDiscarded"], ec)) {
    return { type: "discarded", id: ec.id };
  }

  const adminId = Number(ec.admin_id);
  const participantId = Number(ec.participant_id);
  const userId = selfId === participantId ? adminId : participantId;
  if (Api.is("encryptedChatRequested", ec)) {
    return { type: "requested", id: ec.id, userId };
  }

  return { type: Api.is("encryptedChat", ec) ? "active" : "pending", id: ec.id, userId };
}
