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

import { unreachable } from "../0_deps.ts";
import { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import type { StickerSetNameGetter } from "./1_sticker.ts";
import type { MessageGetter } from "./6_message.ts";
import { constructSavedChat, type SavedChat } from "./7_saved_chat.ts";

/** A list of saved chats. */
export interface SavedChats {
  /** The saved chats. */
  chats: SavedChat[];
  /** The total count of saved chats. */
  total: number;
}

export async function constructSavedChats(result: Api.messages_SavedDialogs, getPeer: PeerGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<SavedChats> {
  if (Api.is("messages.savedDialogsNotModified", result)) {
    unreachable();
  }
  const chats = new Array<Promise<SavedChat>>();
  const total = "count" in result ? result.count : result.dialogs.length;
  for (const dialog of result.dialogs) {
    chats.push(constructSavedChat(dialog, result, getPeer, getMessage, getStickerSetName));
  }
  return {
    chats: await Promise.all(chats),
    total,
  };
}
