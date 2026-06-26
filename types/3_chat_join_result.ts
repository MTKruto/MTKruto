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
import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructUser2, type User } from "./2_user.ts";

/** @unlisted */
export interface ChatJoinResultJoined {
  type: "joined";
}

/** @unlisted */
export interface ChatJoinResultCaptcha {
  type: "captcha";
  bot: User;
  isFullSize: boolean;
  isFullscreen: boolean;
  isSameOrigin: boolean;
  queryId?: string;
  url: string;
}

/** Any type of chat join result. */
export type ChatJoinResult = ChatJoinResultJoined | ChatJoinResultCaptcha;

export function constructChatJoinResult(cijr: Api.messages_ChatInviteJoinResult, getPeer: PeerGetter): ChatJoinResult {
  switch (cijr._) {
    case "messages.chatInviteJoinResultOk":
      return { type: "joined" };
    case "messages.chatInviteJoinResultWebView": {
      const peer = getPeer({ _: "peerUser", user_id: cijr.bot_id });
      if (peer === null || peer[0].type !== "private") {
        unreachable();
      }
      const bot = constructUser2(peer[0]);
      return cleanObject({
        type: "captcha",
        bot,
        isFullSize: !!cijr.webview.fullsize,
        isFullscreen: !!cijr.webview.fullscreen,
        isSameOrigin: !!cijr.webview.same_origin,
        queryId: cijr.webview.query_id ? String(cijr.webview.query_id) : undefined,
        url: cijr.webview.url,
      });
    }
  }

  unreachable();
}
