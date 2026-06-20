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

import { cleanObject } from "../1_utilities.ts";
import type { SecretChats } from "../2_tl.ts";
import { constructSecretMessageEntity, type SecretMessageEntity } from "./0_secret_message_entity.ts";

/** A secret chat message. */
export interface SecretMessage {
  /** The identifier of the secret chat that the message belongs to. */
  chatId: number;
  /** The message's identifier. */
  id: string;
  /** The message's media group ID. */
  mediaGroupId?: string;
  /** Whether the message was sent silently. */
  isSilent: boolean;
  /** The message's text. */
  text: string;
  /** The entities of the message's text. */
  entities: SecretMessageEntity[];
  /** The identifier of the message that this message replies to. */
  replyToMessageId?: string;
  /** The message's time-to-live. */
  ttl: number;
  /** The name of the inline bot that was used to send the message. */
  viaBot?: string;
}

export function constructSecretMessage(chatId: number, message: SecretChats.decryptedMessage): SecretMessage {
  const isSilent = !!message.silent;
  const id = String(message.random_id);
  const text = message.message;
  const entities = (message.entities ?? []).map(constructSecretMessageEntity).filter((v) => v !== null);
  const mediaGroupId = message.grouped_id ? String(message.grouped_id) : undefined;
  const replyToMessageId = message.reply_to_random_id ? String(message.reply_to_random_id) : undefined;
  const ttl = message.ttl;
  const viaBot = message.via_bot_name;
  return cleanObject({
    chatId,
    id,
    mediaGroupId,
    isSilent,
    text,
    entities,
    replyToMessageId,
    ttl,
    viaBot,
  });
}
