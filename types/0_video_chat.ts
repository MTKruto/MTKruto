import { fromUnixTimestamp } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";

/** @unlisted */
export interface _VideoChatCommon {
  id: string;
}

/** @unlisted */
export interface _VideoChatNotEndedCommon {
  title: string;
  liveStream: boolean;
}

/** @unlisted */
export interface VideoChatActive extends _VideoChatCommon, _VideoChatNotEndedCommon {
  recording: boolean;
}

/** @unlisted */
export interface VideoChatScheduled extends _VideoChatCommon, _VideoChatNotEndedCommon {
  scheduledFor: Date;
}

/** @unlisted */
export interface VideoChatEnded extends _VideoChatCommon {
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
    if (call.schedule_date) {
      return {
        id,
        title,
        scheduledFor: fromUnixTimestamp(call.schedule_date),
        liveStream,
      };
    } else {
      return {
        id,
        title,
        liveStream,
        recording: call.record_video_active ? true : false,
      };
    }
  }
}
