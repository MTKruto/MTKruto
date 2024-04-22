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

import { fromUnixTimestamp } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";

/** @unlisted */
export interface _VideoChatCommon {
  /** The video chat's unique identifier. */
  id: string;
}

/** @unlisted */
export interface _VideoChatNotEndedCommon {
  /** The video chat's title. */
  title: string;
  /** Whether it is a live stream. */
  liveStream: boolean;
  /** The number of current participants. */
  participantCount: number;
}

/**
 * An ongoing video chat.
 * @unlisted
 */
export interface VideoChatActive extends _VideoChatCommon, _VideoChatNotEndedCommon {
  /** Whether the video chat is being recorded. */
  recording: boolean;
}

/**
 * A scheduled video chat.
 * @unlisted
 */
export interface VideoChatScheduled extends _VideoChatCommon, _VideoChatNotEndedCommon {
  /** The point in time in which the video chat will be started. */
  scheduledFor: Date;
}

/**
 * An ended video chat.
 * @unlisted
 */
export interface VideoChatEnded extends _VideoChatCommon {
  /** The duration of the video chat in seconds. */
  duration: number;
}

export type VideoChat = VideoChatActive | VideoChatScheduled | VideoChatEnded;

export function constructVideoChat(call: enums.GroupCall): VideoChat {
  const id = String(call.id);
  if (call instanceof types.GroupCallDiscarded) {
    return {
      id,
      duration: call.duration,
    };
  } else {
    const title = call.title ?? "";
    const liveStream = call.rtmp_stream ? true : false;
    const participantCount = call.participants_count;
    if (call.schedule_date) {
      return {
        id,
        title,
        scheduledFor: fromUnixTimestamp(call.schedule_date),
        liveStream,
        participantCount,
      };
    } else {
      return {
        id,
        title,
        liveStream,
        recording: call.record_video_active ? true : false,
        participantCount,
      };
    }
  }
}
