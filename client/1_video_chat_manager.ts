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

import { unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getRandomId, toUnixTimestamp, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { as, enums, types } from "../2_tl.ts";
import { constructVideoChat, ID, Update, VideoChatActive, VideoChatScheduled } from "../3_types.ts";
import { JoinVideoChatParams, StartVideoChatParams } from "./0_params.ts";
import { C } from "./0_types.ts";

type VideoChatManagerUpdate = types.UpdateGroupCall;

export class VideoChatManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async #createGroupCall(chatId: ID, title?: string, liveStream?: true, scheduleDate?: Date) {
    const peer = await this.#c.getInputPeer(chatId);
    if (peer instanceof types.InputPeerUser) {
      throw new InputError("Video chats are only available for groups and channels.");
    }
    const { updates } = await this.#c.api.phone.createGroupCall({
      peer,
      random_id: getRandomId(true),
      title,
      rtmp_stream: liveStream,
      schedule_date: scheduleDate ? toUnixTimestamp(scheduleDate) : undefined,
    }).then((v) => v[as](types.Updates));
    const updateGroupCall = updates
      .find((v): v is types.UpdateGroupCall => v instanceof types.UpdateGroupCall);
    if (!updateGroupCall) {
      unreachable();
    }
    return constructVideoChat(updateGroupCall.call);
  }

  async startVideoChat(chatId: ID, params?: StartVideoChatParams) {
    await this.#c.storage.assertUser("startVideoChat");
    return await this.#createGroupCall(chatId, params?.title, params?.liveStream || undefined) as VideoChatActive;
  }

  async scheduleVideoChat(chatId: ID, startAt: Date, params?: StartVideoChatParams) {
    await this.#c.storage.assertUser("scheduleVideoChat");
    return await this.#createGroupCall(chatId, params?.title, params?.liveStream || undefined, startAt) as VideoChatScheduled;
  }

  async #getInputGroupCall(id_: string) {
    const id = BigInt(id_);
    const accessHash = await this.#c.storage.getGroupCallAccessHash(id);
    if (accessHash == null) {
      throw new InputError("Video chat not found.");
    }
    return new types.InputGroupCall({ id, access_hash: accessHash });
  }

  async joinVideoChat(id: string, params: string, params_?: JoinVideoChatParams) {
    await this.#c.storage.assertUser("joinVideoChat");
    const call = await this.#getInputGroupCall(id);
    const { updates } = await this.#c.api.phone.joinGroupCall({
      call,
      join_as: params_?.joinAs ? await this.#c.getInputPeer(params_.joinAs) : new types.InputPeerSelf(),
      params: new types.DataJSON({ data: params }),
      invite_hash: params_?.inviteHash,
      muted: params_?.audio ? undefined : true,
      video_stopped: params_?.video ? undefined : true,
    }).then((v) => v[as](types.Updates));
    const updateGroupCall = updates
      .find((v): v is types.UpdateGroupCallConnection => v instanceof types.UpdateGroupCallConnection);
    if (!updateGroupCall) unreachable();
    return updateGroupCall.params.data;
  }

  async joinLiveStream(id: string) {
    await this.#c.storage.assertUser("joinLiveStream");
    const call = await this.#getInputGroupCall(id);
    const { updates } = await this.#c.api.phone.joinGroupCall({
      call,
      join_as: new types.InputPeerSelf(),
      params: new types.DataJSON({
        data: JSON.stringify({
          fingerprints: [],
          pwd: "",
          ssrc: getRandomId(true),
          "ssrc-groups": [],
          ufrag: "",
        }),
      }),
    }).then((v) => v[as](types.Updates));
    const updateGroupCall = updates
      .find((v): v is types.UpdateGroupCallConnection => v instanceof types.UpdateGroupCallConnection);
    if (!updateGroupCall) unreachable();
  }

  async getVideoChat(id: string) {
    await this.#c.storage.assertUser("getVideoChat");
    let groupCall: enums.GroupCall | null = await this.#c.storage.getGroupCall(BigInt(id));
    if (groupCall == null) {
      const call = await this.#getInputGroupCall(id);
      groupCall = await this.#c.api.phone.getGroupCall({ call, limit: 1 }).then((v) => v.call);
    }
    return constructVideoChat(groupCall!);
  }

  static canHandleUpdate(update: enums.Update): update is VideoChatManagerUpdate {
    return update instanceof types.UpdateGroupCall;
  }

  async handleUpdate(update: VideoChatManagerUpdate): Promise<Update> {
    let chatId = Number(-update.chat_id);
    const fullChat = await this.#c.storage.getFullChat(chatId).then((v) => v == null ? this.#c.storage.getFullChat(chatId = ZERO_CHANNEL_ID - Number(update.chat_id)) : v) as types.ChannelFull | types.ChatFull | null;
    let updateFullChat = false;
    if (update.call instanceof types.GroupCallDiscarded) {
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
          fullChat.call = new types.InputGroupCall(update.call);
          updateFullChat = true;
        }
      }
    }
    if (updateFullChat) {
      await this.#c.storage.setFullChat(chatId, fullChat);
    }
    return { videoChat: constructVideoChat(update.call) };
  }
}
