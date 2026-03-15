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

import { unreachable } from "../0_deps.ts";
import type { Api } from "../2_tl.ts";

export interface _EmojiStatusBase {
  until?: number;
}

/** @unlisted */
export interface EmojiStatusCustomEmoji extends _EmojiStatusBase {
  /** @discriminator */
  type: "customEmoji";
  customEmojiId: string;
}

/** @unlisted */
export interface EmojiStatusGift extends _EmojiStatusBase {
  /** @discriminator */
  type: "gift";
  giftId: string;
  customEmojiId: string;
  title: string;
  slug: string;
  patternId: string;
  centerColor: number;
  edgeColor: number;
  patternColor: number;
  textColor: number;
}

export type EmojiStatus = EmojiStatusCustomEmoji | EmojiStatusGift;

export function constructEmojiStatus(emojiStatus: Api.EmojiStatus): EmojiStatus {
  switch (emojiStatus._) {
    case "emojiStatusEmpty":
      unreachable();
      break;
    case "emojiStatus":
      return { type: "customEmoji", customEmojiId: String(emojiStatus.document_id), until: emojiStatus.until };
    case "emojiStatusCollectible":
      return { type: "gift", giftId: String(emojiStatus.collectible_id), customEmojiId: String(emojiStatus.document_id), title: emojiStatus.title, slug: emojiStatus.slug, patternId: String(emojiStatus.pattern_document_id), centerColor: emojiStatus.center_color, edgeColor: emojiStatus.edge_color, patternColor: emojiStatus.pattern_color, textColor: emojiStatus.text_color, until: emojiStatus.until };
    case "inputEmojiStatusCollectible":
      unreachable();
  }
}
