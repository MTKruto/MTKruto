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
import type { PeerGetter } from "./1_chat_p.ts";
import { constructUser2, type User } from "./2_user.ts";

/** A user's connected website. */
export interface ConnectedWebsite {
  /** The identifier of the connected website. */
  id: string;
  /** The bot that made the connection. */
  bot: User;
  /** The domain of the website. */
  domain: string;
  /** The browser used in the connection. */
  browser: string;
  /** The platform used in the connection. */
  platform: string;
  /** The point in time when the connection was made. */
  createdAt: number;
  /** The point in time when the connection was last active. */
  lastActiveAt: number;
  /** The IP address of the connection. */
  ipAddress: string;
  /** The region of the connection's IP address. */
  ipAddressRegion: string;
}

export function constructConnectedWebsite(wa: Api.WebAuthorization, getPeer: PeerGetter): ConnectedWebsite {
  const peer = getPeer({ _: "peerUser", user_id: wa.bot_id });
  if (peer === null || peer[0].type !== "private") {
    unreachable();
  }
  const bot = constructUser2(peer[0]);
  return {
    id: String(wa.hash),
    bot,
    domain: wa.domain,
    browser: wa.browser,
    platform: wa.platform,
    createdAt: wa.date_created,
    lastActiveAt: wa.date_active,
    ipAddress: wa.ip,
    ipAddressRegion: wa.region,
  };
}
