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

import { fromUnixTimestamp } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { constructUser, User } from "./1_user.ts";

/** A business connection. */
export interface BusinessConnection {
  /** The business connection's unique identifier. */
  id: string;
  /** The business account that the connection is made with. */
  user: User;
  /** The point in time in which the connection was recently updated. */
  date: Date;
  /** Whether the bot can reply to older chats. */
  canReply: boolean;
  /** Whether the connection is active. */
  isEnabled: boolean;
}

export async function constructBusinessConnection(connection: Api.botBusinessConnection, getEntity: EntityGetter): Promise<BusinessConnection> {
  return {
    id: connection.connection_id,
    user: constructUser((await getEntity({ ...connection, _: "peerUser" }))!),
    date: fromUnixTimestamp(connection.date),
    canReply: !!connection.rights?.reply,
    isEnabled: !connection.disabled,
  };
}
