import { unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getRandomId, toUnixTimestamp } from "../1_utilities.ts";
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
    return await this.#createGroupCall(chatId, params?.title, params?.liveStream || undefined) as VideoChatActive;
  }

  async scheduleVideoChat(chatId: ID, startAt: Date, params?: StartVideoChatParams) {
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
    const call = await this.#getInputGroupCall(id);
    const { updates } = await this.#c.api.phone.joinGroupCall({
      call,
      join_as: new types.InputPeerSelf(),
      params: new types.DataJSON({ data: JSON.stringify({ ssrc: 0 }) }), // TODO: fallback params
    }).then((v) => v[as](types.Updates));
    const updateGroupCall = updates
      .find((v): v is types.UpdateGroupCallConnection => v instanceof types.UpdateGroupCallConnection);
    if (!updateGroupCall) unreachable();
  }

  async getVideoChat(id: string) {
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

  async handleUpdate(update: VideoChatManagerUpdate): Promise<Update | null> {
    if (update.call instanceof types.GroupCallDiscarded) {
      await this.#c.storage.setGroupCall(update.call.id, null);
      await this.#c.storage.setGroupCallAccessHash(update.call.id, null);
    } else {
      await this.#c.storage.setGroupCall(update.call.id, update.call);
      await this.#c.storage.setGroupCallAccessHash(update.call.id, update.call.access_hash);
    }
    return { videoChat: constructVideoChat(update.call) };
  }
}
