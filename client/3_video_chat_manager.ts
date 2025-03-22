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
import { InputError } from "../0_errors.ts";
import { getRandomId, toUnixTimestamp, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructLiveStreamChannel, constructVideoChat, ID, Update, VideoChatActive, VideoChatScheduled } from "../3_types.ts";
import { DownloadLiveStreamChunkParams, JoinVideoChatParams, StartVideoChatParams } from "./0_params.ts";
import { UpdateProcessor } from "./0_update_processor.ts";
import { canBeInputUser } from "./0_utilities.ts";
import { C as C_ } from "./1_types.ts";
import { FileManager } from "./2_file_manager.ts";

interface C extends C_ {
  fileManager: FileManager;
}

const videoChatManagerUpdates = [
  "updateGroupCall",
] as const;

type VideoChatManagerUpdate = Api.Types[(typeof videoChatManagerUpdates)[number]];

export class VideoChatManager implements UpdateProcessor<VideoChatManagerUpdate> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async #createGroupCall(chatId: ID, title?: string, liveStream?: true, scheduleDate?: Date) {
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputUser(peer)) {
      throw new InputError("Video chats are only available for groups and channels.");
    }
    const { updates } = await this.#c.invoke({ _: "phone.createGroupCall", peer, random_id: getRandomId(true), title, rtmp_stream: liveStream, schedule_date: scheduleDate ? toUnixTimestamp(scheduleDate) : undefined }).then((v) => as("updates", v));
    const updateGroupCall = updates
      .find((v): v is Api.updateGroupCall => Api.is("updateGroupCall", v));
    if (!updateGroupCall) {
      unreachable();
    }
    return constructVideoChat(updateGroupCall.call);
  }

  async startVideoChat(chatId: ID, params?: StartVideoChatParams) {
    this.#c.storage.assertUser("startVideoChat");
    return await this.#createGroupCall(chatId, params?.title, params?.liveStream || undefined) as VideoChatActive;
  }

  async scheduleVideoChat(chatId: ID, startAt: Date, params?: StartVideoChatParams) {
    this.#c.storage.assertUser("scheduleVideoChat");
    return await this.#createGroupCall(chatId, params?.title, params?.liveStream || undefined, startAt) as VideoChatScheduled;
  }

  async #getInputGroupCall(id_: string): Promise<Api.inputGroupCall> {
    const id = BigInt(id_);
    const accessHash = await this.#c.storage.getGroupCallAccessHash(id);
    if (accessHash == null) {
      throw new InputError("Video chat not found.");
    }
    return { _: "inputGroupCall", id, access_hash: accessHash };
  }

  async joinVideoChat(id: string, params: string, params_?: JoinVideoChatParams) {
    this.#c.storage.assertUser("joinVideoChat");
    const call = await this.#getInputGroupCall(id);
    const { updates } = await this.#c.invoke({ _: "phone.joinGroupCall", call, join_as: params_?.joinAs ? await this.#c.getInputPeer(params_.joinAs) : { _: "inputPeerSelf" }, params: ({ _: "dataJSON", data: params }), invite_hash: params_?.inviteHash, muted: params_?.audio ? undefined : true, video_stopped: params_?.video ? undefined : true }).then((v) => as("updates", v));
    const updateGroupCall = updates
      .find((v): v is Api.updateGroupCallConnection => Api.is("updateGroupCallConnection", v));
    if (!updateGroupCall) unreachable();
    return updateGroupCall.params.data;
  }

  async leaveVideoChat(id: string) {
    this.#c.storage.assertUser("leaveVideoChat");
    await this.#c.invoke({ _: "phone.leaveGroupCall", call: await this.#getInputGroupCall(id), source: 0 });
  }

  async joinLiveStream(id: string) {
    this.#c.storage.assertUser("joinLiveStream");
    const call = await this.#getInputGroupCall(id);
    const { updates } = await this.#c.invoke({
      _: "phone.joinGroupCall",
      call,
      join_as: { _: "inputPeerSelf" },
      params: ({
        _: "dataJSON",
        data: JSON.stringify({
          fingerprints: [],
          pwd: "",
          ssrc: getRandomId(true),
          "ssrc-groups": [],
          ufrag: "",
        }),
      }),
    }).then((v) => as("updates", v));
    const updateGroupCall = updates
      .find((v): v is Api.updateGroupCallConnection => Api.is("updateGroupCallConnection", v));
    if (!updateGroupCall) unreachable();
  }

  async #getCall(id: string) {
    let groupCall: Api.GroupCall | null = await this.#c.storage.getGroupCall(BigInt(id));
    if (groupCall == null) {
      const call = await this.#getInputGroupCall(id);
      groupCall = (await this.#c.invoke({ _: "phone.getGroupCall", call, limit: 1 })).call;
    }
    return groupCall!;
  }
  async getVideoChat(id: string) {
    this.#c.storage.assertUser("getVideoChat");
    return constructVideoChat(await this.#getCall(id));
  }

  canHandleUpdate(update: Api.Update): update is VideoChatManagerUpdate {
    return Api.isOneOf(videoChatManagerUpdates, update);
  }

  async handleUpdate(update: VideoChatManagerUpdate): Promise<Update | null> {
    if (!update.chat_id) {
      return null; // TODO: handle updates with unspecified chat_id
    }
    let chatId = Number(-update.chat_id);
    const fullChat = await this.#c.storage.getFullChat(chatId).then((v) => v == null ? this.#c.storage.getFullChat(chatId = ZERO_CHANNEL_ID - Number(update.chat_id)) : v) as Api.channelFull | Api.chatFull | null;
    let updateFullChat = false;
    if (Api.is("groupCallDiscarded", update.call)) {
      await this.#c.storage.setGroupCall(update.call.id, null);
      await this.#c.storage.setGroupCallAccessHash(update.call.id, null);
      if (fullChat != null) {
        fullChat.call = undefined;
        updateFullChat = true;
      }
    } else {
      await this.#c.storage.setGroupCall(update.call.id, update.call);
      await this.#c.storage.setGroupCallAccessHash(update.call.id, update.call.access_hash);
      if (fullChat != null) {
        if (!("call" in fullChat) || !fullChat.call || fullChat.call.id != update.call.id) {
          fullChat.call = { ...update.call, _: "inputGroupCall" };
          updateFullChat = true;
        }
      }
    }
    if (updateFullChat) {
      await this.#c.storage.setFullChat(chatId, fullChat);
    }
    return { videoChat: constructVideoChat(update.call) };
  }

  async getLiveStreamChannels(id: string) {
    this.#c.storage.assertUser("getLiveStreamChannels");
    const call = await this.#getCall(id);
    if (!(is("groupCall", call)) || !call.rtmp_stream) {
      throw new InputError("Not a live stream.");
    }
    const client = this.#c.getCdnConnection(call.stream_dc_id);
    await client.connect();
    try {
      const streams = await client.invoke({ _: "phone.getGroupCallStreamChannels", call: await this.#getInputGroupCall(id) });
      return streams.channels.map(constructLiveStreamChannel);
    } finally {
      await client.disconnect();
    }
  }

  async *downloadLiveStreamChunk(id: string, channel: number, scale: number, timestamp: number, params?: DownloadLiveStreamChunkParams) {
    this.#c.storage.assertUser("downloadLiveStreamChunk");
    const call = await this.#getCall(id);
    if (!(is("groupCall", call)) || !call.rtmp_stream) {
      throw new InputError("Not a live stream.");
    }
    const quality = params?.quality ?? "low";
    const location: Api.inputGroupCallStream = {
      _: "inputGroupCallStream",
      call: { ...call, _: "inputGroupCall" },
      scale,
      time_ms: BigInt(timestamp),
      video_channel: channel,
      video_quality: quality == "low" ? 0 : quality == "medium" ? 1 : quality == "high" ? 2 : (() => {
        throw new InputError("Got invalid quality.");
      })(),
    };
    yield* this.#c.fileManager.downloadInner(location, call.stream_dc_id ?? unreachable(), params);
  }
}
