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

import { Api } from "../2_tl.ts";

/** A live stream channel. */
export interface LiveStreamChannel {
  /** The live stream channel's unique identifier. */
  id: number;
  /** The scale of the live stream channel's chunks. Duration of each chunk is equal to 1000 / 2 ^ scale. ` */
  scale: number;
  /** The live stream channel's last timestamp. */
  timestamp: number;
}

export function constructLiveStreamChannel(channel: Api.groupCallStreamChannel): LiveStreamChannel {
  return {
    id: channel.channel,
    scale: channel.scale,
    timestamp: Number(channel.last_timestamp_ms),
  };
}
