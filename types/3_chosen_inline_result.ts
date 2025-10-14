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
import { base64EncodeUrlSafe, cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructLocation, type Location } from "./0_location.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructUser2, type User } from "./2_user.ts";

/** A chosen inline result. */
export interface ChosenInlineResult {
  /** The identifier of the inline result that was chosen. */
  resultId: string;
  /** The user who chose the result. */
  from: User;
  /** The location of the user who chose the result. */
  location?: Location;
  /** Identifier of the sent inline message. */
  inlineMessageId?: string;
  /** The query that was used to obtain the result. */
  query: string;
}

export function constructChosenInlineResult(ubis: Api.updateBotInlineSend, getPeer: PeerGetter): ChosenInlineResult {
  const peer = getPeer({ ...ubis, _: "peerUser" });
  if (!peer || peer[0].type !== "private") {
    unreachable();
  }
  return cleanObject({
    resultId: ubis.id,
    from: constructUser2(peer[0]),
    location: Api.is("geoPoint", ubis.geo) ? constructLocation(ubis.geo) : undefined,
    inlineMessageId: ubis.msg_id === undefined ? undefined : base64EncodeUrlSafe(Api.serializeObject(ubis.msg_id)),
    query: ubis.query,
  });
}
