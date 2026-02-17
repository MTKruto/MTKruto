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
import type { InputPeerGetter } from "./_getters.ts";
import type { ID } from "./0_id.ts";

/**
 * Reference to a gift by its slug.
 * @unlisted
 */
export interface InputGiftSlug {
  /** @discriminator */
  type: "slug";
  slug: string;
}

/**
 * Reference to a gift in a chat by its ID.
 * @unlisted
 */
export interface InputGiftChat {
  /** @discriminator */
  type: "chat";
  chatId: ID;
  id: string;
}

/**
 * Reference to a gift in a private chat by its message ID.
 * @unlisted
 */
export interface InputGiftUser {
  /** @discriminator */
  type: "user";
  messageId: number;
}

/** Reference to a gift. */
export type InputGift = InputGiftSlug | InputGiftChat | InputGiftUser;

export async function inputGiftToTlObject(inputGift: InputGift, getInputPeer: InputPeerGetter): Promise<Api.InputSavedStarGift> {
  switch (inputGift.type) {
    case "slug":
      return { _: "inputSavedStarGiftSlug", slug: inputGift.slug };
    case "chat":
      return { _: "inputSavedStarGiftChat", peer: await getInputPeer(inputGift.chatId), saved_id: BigInt(inputGift.id) };
    case "user":
      return { _: "inputSavedStarGiftUser", msg_id: inputGift.messageId };
    default:
      unreachable();
  }
}
