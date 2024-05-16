/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

import { MaybePromise } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { ID } from "./0_id.ts";

/** @unlisted */
export interface EntityGetter {
  (peer: Api.peerUser): MaybePromise<Api.user | null>;
  (peer: Api.peerChat): MaybePromise<Api.chat | Api.chatForbidden | null>;
  (peer: Api.peerChannel): MaybePromise<Api.channel | Api.channelForbidden | null>;
  (peer: Api.peerUser | Api.peerChat | Api.peerChannel): MaybePromise<Api.user | Api.chat | Api.chatForbidden | Api.channel | Api.channelForbidden | null>;
}

/** @unlisted */
export interface InputPeerGetter {
  (id: ID): Promise<Api.InputPeer>;
}

/** @unlisted */
export interface UsernameResolver {
  (username: string): MaybePromise<Api.inputUser>;
}
