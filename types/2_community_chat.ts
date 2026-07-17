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
import type { ChatP, PeerGetter } from "./1_chat_p.ts";

/** A chat in a community. */
export interface CommunityChat {
  /** Whether the chat's history is visible. */
  isHistoryVisible: boolean;
  /** Whether the chat is visible inside the community. */
  isVisible: boolean;
  /** The chat. */
  chat: ChatP;
}

export function constructCommunityChat(communityPeer: Api.communityPeer, getPeer: PeerGetter): CommunityChat {
  const chat = getPeer(communityPeer.peer)?.[0];
  if (!chat) {
    unreachable();
  }
  return {
    isHistoryVisible: communityPeer.can_view_history || false,
    isVisible: communityPeer.visible || false,
    chat,
  };
}
