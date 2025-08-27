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
import { constructLocation, type Location } from "./0_location.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructUser2, type User } from "./2_user.ts";

/** An incoming inline query. */
export interface InlineQuery {
  /** The identifier of the inline query. */
  id: string;
  /** The user who made the inline query. */
  from: User;
  /** The query that was made. */
  query: string;
  /** The offset parameter that was passed to the last [answerInlineQuery](/methods/answerInlineQuery) call. */
  offset: string;
  /** The type of the chat from which the inline query was made. */
  chatType?: "sender" | "private" | "group" | "supergroup" | "channel";
  /** The location of the user who made the inline query. */
  location?: Location;
}

export function constructInlineQuery(query_: Api.updateBotInlineQuery, getPeer: PeerGetter): InlineQuery {
  const peer = getPeer({ _: "peerUser", user_id: query_.user_id });
  if (peer == null) {
    unreachable();
  }

  const user = constructUser2(peer[0]);

  let chatType: InlineQuery["chatType"] | undefined;
  if (query_.peer_type !== undefined) {
    if (Api.is("inlineQueryPeerTypeSameBotPM", query_.peer_type)) {
      chatType = "private";
    } else if (Api.is("inlineQueryPeerTypeBotPM", query_.peer_type) || Api.is("inlineQueryPeerTypePM", query_.peer_type)) {
      chatType = "sender";
    } else if (Api.is("inlineQueryPeerTypeChat", query_.peer_type)) {
      chatType = "group";
    } else if (Api.is("inlineQueryPeerTypeMegagroup", query_.peer_type)) {
      chatType = "supergroup";
    } else if (Api.is("inlineQueryPeerTypeBroadcast", query_.peer_type)) {
      chatType = "channel";
    } else {
      unreachable();
    }
  }

  const location = query_.geo !== undefined && Api.is("geoPoint", query_.geo) ? constructLocation(query_.geo) : undefined;

  return {
    id: String(query_.query_id),
    from: user,
    query: query_.query,
    offset: query_.offset,
    chatType,
    location,
  };
}
