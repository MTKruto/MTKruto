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
import { Api } from "../2_tl.ts";
import { ChatP, constructChatMemberUpdated, constructChatP, constructFailedInvitation, constructInviteLink, constructJoinRequest, constructJoinRequest2, SlowModeDuration, slowModeDurationToSeconds } from "../3_types.ts";
import { chatMemberRightsToTlObject, FileSource, ID, Reaction, reactionToTlObject, Update } from "../3_types.ts";
import { inputPeerToPeer } from "../tl/2_telegram.ts";
import { _BusinessConnectionIdCommon, _ReplyMarkupCommon, _SendCommon, _SpoilCommon, AddChatMemberParams, ApproveJoinRequestsParams, BanChatMemberParams, CreateInviteLinkParams, DeclineJoinRequestsParams, GetCreatedInviteLinksParams, GetJoinRequestsParams, SetChatMemberRightsParams, SetChatPhotoParams, SetSignaturesEnabledParams } from "./0_params.ts";
import { checkPassword } from "./0_password.ts";
import { UpdateProcessor } from "./0_update_processor.ts";
import { canBeInputChannel, canBeInputUser, getLimit, toInputChannel, toInputUser } from "./0_utilities.ts";
import { C as C_ } from "./1_types.ts";
import { FileManager } from "./2_file_manager.ts";
import { MessageManager } from "./3_message_manager.ts";

interface C extends C_ {
  fileManager: FileManager;
  messageManager: MessageManager;
}

const chatManagerUpdates = [
  "updateChannelParticipant",
  "updateChatParticipant",
  "updateBotChatInviteRequester",
] as const;

type ChatManagerUpdate = Api.Types[(typeof chatManagerUpdates)[number]];

export class ChatManager implements UpdateProcessor<ChatManagerUpdate> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  canHandleUpdate(update: Api.Update): update is ChatManagerUpdate {
    return Api.isOneOf(chatManagerUpdates, update);
  }

  async handleUpdate(update: ChatManagerUpdate): Promise<Update | null> {
    if (Api.is("updateChannelParticipant", update) || Api.is("updateChatParticipant", update)) {
      const chatMember = await constructChatMemberUpdated(update, this.#c.getEntity);
      const selfId = await this.#c.getSelfId();
      if (chatMember.oldChatMember.user.id == selfId) {
        return { myChatMember: chatMember };
      } else {
        return { chatMember };
      }
    }

    if (Api.is("updateBotChatInviteRequester", update)) {
      const joinRequest = await constructJoinRequest(update, this.#c.getEntity);
      return { joinRequest };
    }

    return null;
  }

  // JOIN REQUESTS //
  async #toggleJoinRequests(chatId: ID, enabled: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleJoinRequest", channel, enabled });
  }

  async approveJoinRequest(chatId: ID, userId: ID) {
    await this.#c.invoke({
      _: "messages.hideChatJoinRequest",
      peer: await this.#c.getInputPeer(chatId),
      user_id: await this.#c.getInputUser(userId),
      approved: true,
    });
  }
  async declineJoinRequest(chatId: ID, userId: ID) {
    await this.#c.invoke({
      _: "messages.hideChatJoinRequest",
      peer: await this.#c.getInputPeer(chatId),
      user_id: await this.#c.getInputUser(userId),
    });
  }

  async approveJoinRequests(chatId: ID, params?: ApproveJoinRequestsParams) {
    this.#c.storage.assertUser("approveJoinRequests");
    await this.#c.invoke({
      _: "messages.hideAllChatJoinRequests",
      peer: await this.#c.getInputPeer(chatId),
      approved: true,
      link: params?.inviteLink,
    });
  }

  async declineJoinRequests(chatId: ID, params?: DeclineJoinRequestsParams) {
    this.#c.storage.assertUser("declineJoinRequests");
    await this.#c.invoke({
      _: "messages.hideAllChatJoinRequests",
      peer: await this.#c.getInputPeer(chatId),
      link: params?.inviteLink,
    });
  }

  async getJoinRequests(chatId: ID, params?: GetJoinRequestsParams) {
    this.#c.storage.assertUser("getJoinRequests");
    if (typeof params?.inviteLink === "string" && typeof params?.search === "string") {
      throw new InputError("inviteLink and search cannot be specified together.");
    }
    const peer = await this.#c.getInputPeer(chatId);
    const offset_user: Api.InputUser = params?.fromUserId ? await this.#c.getInputUser(params.fromUserId) : { _: "inputUserEmpty" };
    const { importers } = await this.#c.invoke({
      _: "messages.getChatInviteImporters",
      requested: true,
      peer,
      link: params?.inviteLink,
      q: params?.search,
      offset_date: params?.fromDate ?? 0,
      offset_user,
      limit: getLimit(params?.limit),
    });
    const peer_ = inputPeerToPeer(peer);
    return await Promise.all(importers.map((v) => constructJoinRequest2(peer_, v, this.#c.getEntity)));
  }

  // INVITE LINKS //
  async createInviteLink(chatId: ID, params?: CreateInviteLinkParams) {
    if (params?.requireApproval && params?.limit) {
      throw new InputError("requireApproval cannot be true while limit is specified.");
    }
    const result = await this.#c.invoke({ _: "messages.exportChatInvite", peer: await this.#c.getInputPeer(chatId), title: params?.title, expire_date: params?.expireAt, request_needed: params?.requireApproval ? true : undefined, usage_limit: params?.limit });
    return await constructInviteLink(Api.as("chatInviteExported", result), this.#c.getEntity);
  }

  async getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams) {
    this.#c.storage.assertUser("getCreatedInviteLinks");
    const { invites } = await this.#c.invoke({ _: "messages.getExportedChatInvites", peer: await this.#c.getInputPeer(chatId), revoked: params?.revoked ? true : undefined, admin_id: params?.by ? await this.#c.getInputUser(params.by) : { _: "inputUserEmpty" }, limit: getLimit(params?.limit), offset_date: params?.afterDate, offset_link: params?.afterInviteLink });
    return await Promise.all(invites.map((v) => Api.as("chatInviteExported", v)).map((v) => constructInviteLink(v, this.#c.getEntity)));
  }

  // JOINING AND LEAVING CHATS //
  async joinChat(chatId: ID) {
    this.#c.storage.assertUser("joinChat");
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputUser(peer)) {
      throw new InputError("Cannot join private chats.");
    } else if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.joinChannel", channel: toInputChannel(peer) });
    } else if (Api.is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.addChatUser", chat_id: peer.chat_id, user_id: { _: "inputUserSelf" }, fwd_limit: 0 }); // TODO: use potential high-level method for adding participants to chats
    } else {
      unreachable();
    }
  }

  async leaveChat(chatId: ID) {
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputUser(peer)) {
      throw new InputError("Cannot leave private chats.");
    } else if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.leaveChannel", channel: toInputChannel(peer) });
    } else if (Api.is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.deleteChatUser", chat_id: peer.chat_id, user_id: { _: "inputUserSelf" } }); // TODO: use potential high-level method for adding participants to chats
    } else {
      unreachable();
    }
  }

  // RESTRICTING, BANNING, AND UNBANNING CHAT MEMBERS //
  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams) {
    const chat = await this.#c.getInputPeer(chatId);
    if (!(Api.is("inputPeerChannel", chat)) && !(Api.is("inputPeerChat", chat))) {
      throw new InputError("Expected a channel, supergroup, or group ID.");
    }
    const member = await this.#c.getInputPeer(memberId);
    if (Api.is("inputPeerChannel", chat)) {
      if (params?.deleteMessages) {
        try {
          await this.#c.messageManager.deleteChatMemberMessages(chatId, memberId);
        } catch {
          //
        }
      }
      await this.#c.invoke({
        _: "channels.editBanned",
        channel: { ...chat, _: "inputChannel" },
        participant: member,
        banned_rights: ({
          _: "chatBannedRights",
          until_date: params?.until ?? 0,
          view_messages: true,
          send_messages: true,
          send_media: true,
          send_stickers: true,
          send_gifs: true,
          send_games: true,
          send_inline: true,
          embed_links: true,
        }),
      });
    } else if (Api.is("inputPeerChat", chat)) {
      if (!canBeInputUser(member)) {
        throw new InputError(`Invalid user ID: ${memberId}`);
      }
      await this.#c.invoke({ _: "messages.deleteChatUser", chat_id: chat.chat_id, user_id: toInputUser(member), revoke_history: params?.deleteMessages ? true : undefined });
    }
  }

  async unbanChatMember(chatId: ID, memberId: ID) {
    const channel = await this.#c.getInputChannel(chatId);
    const member = await this.#c.getInputPeer(memberId);
    await this.#c.invoke({ _: "channels.editBanned", channel, participant: member, banned_rights: ({ _: "chatBannedRights", until_date: 0 }) });
  }

  async setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams) {
    const channel = await this.#c.getInputChannel(chatId);
    const member = await this.#c.getInputPeer(memberId);
    await this.#c.invoke({ _: "channels.editBanned", channel, participant: member, banned_rights: chatMemberRightsToTlObject(params?.rights, params?.until) });
  }

  // CHAT SETTINGS //
  async setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]) {
    await this.#c.invoke({ _: "messages.setChatAvailableReactions", peer: await this.#c.getInputPeer(chatId), available_reactions: availableReactions == "none" ? { _: "chatReactionsNone" } : availableReactions == "all" ? { _: "chatReactionsAll" } : Array.isArray(availableReactions) ? ({ _: "chatReactionsSome", reactions: availableReactions.map((v) => reactionToTlObject(v)) }) : unreachable() });
  }

  async setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number) {
    this.#c.storage.assertUser("setBoostsRequiredToCircumventRestrictions");
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.setBoostsToUnblockRestrictions", channel, boosts });
  }

  async enableJoinRequests(chatId: ID) {
    this.#c.storage.assertUser("enableJoinRequests");
    await this.#toggleJoinRequests(chatId, true);
  }

  async disableJoinRequests(chatId: ID) {
    this.#c.storage.assertUser("disableJoinRequests");
    await this.#toggleJoinRequests(chatId, false);
  }

  async setChatStickerSet(chatId: ID, setName: string) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.setStickers", channel, stickerset: { _: "inputStickerSetShortName", short_name: setName } });
  }

  async deleteChatStickerSet(chatId: ID) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.setStickers", channel, stickerset: { _: "inputStickerSetEmpty" } });
  }

  // CHAT PHOTOS //
  async deleteChatPhoto(chatId: ID) {
    const peer = await this.#c.getInputPeer(chatId);
    if (!(canBeInputChannel(peer)) && !(Api.is("inputPeerChat", peer))) {
      unreachable();
    }

    if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.editPhoto", channel: toInputChannel(peer), photo: { _: "inputChatPhotoEmpty" } });
    } else if (Api.is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.editChatPhoto", chat_id: peer.chat_id, photo: { _: "inputChatPhotoEmpty" } });
    }
  }

  async setChatPhoto(chatId: ID, photo: FileSource, params?: SetChatPhotoParams): Promise<void> {
    const peer = await this.#c.getInputPeer(chatId);
    if (!(canBeInputChannel(peer)) && !(Api.is("inputPeerChat", peer))) {
      unreachable();
    }

    const file = await this.#c.fileManager.upload(photo, params);
    const photo_: Api.inputChatUploadedPhoto = { _: "inputChatUploadedPhoto", file };

    if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.editPhoto", channel: toInputChannel(peer), photo: photo_ });
    } else if (Api.is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.editChatPhoto", chat_id: peer.chat_id, photo: photo_ });
    }
  }

  // INVITING MEMBERS //
  async addChatMember(chatId: ID, userId: ID, params?: AddChatMemberParams) {
    this.#c.storage.assertUser("addChatMember");
    const chat = await this.#c.getInputPeer(chatId);
    if (Api.isOneOf(["inputPeerEmpty", "inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], chat)) {
      throw new InputError("Cannot add members to private chats");
    }
    const user = await this.#c.getInputUser(userId);
    if (Api.is("inputPeerChat", chat)) {
      const result = await this.#c.invoke({ _: "messages.addChatUser", chat_id: chat.chat_id, user_id: user, fwd_limit: params?.historyLimit ?? 0 });
      return result.missing_invitees.map(constructFailedInvitation);
    } else if (Api.is("inputPeerChannel", chat)) {
      const result = await this.#c.invoke({ _: "channels.inviteToChannel", channel: { ...chat, _: "inputChannel" }, users: [user] });
      return result.missing_invitees.map(constructFailedInvitation);
    }
    unreachable();
  }

  async addChatMembers(chatId: ID, userIds: ID[]) {
    this.#c.storage.assertUser("addChatMembers");
    const chat = await this.#c.getInputPeer(chatId);
    if (Api.isOneOf(["inputPeerEmpty", "inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], chat)) {
      throw new InputError("Cannot add members to private chats");
    }
    const users = new Array<Api.inputUserSelf | Api.inputUser | Api.inputUserFromMessage>();
    for (const userId of userIds) {
      users.push(await this.#c.getInputUser(userId));
    }
    if (Api.is("inputPeerChat", chat)) {
      throw new InputError("addChatMembers cannot be used with basic groups");
    } else if (canBeInputChannel(chat)) {
      const result = await this.#c.invoke({ _: "channels.inviteToChannel", channel: toInputChannel(chat), users });
      return result.missing_invitees.map(constructFailedInvitation);
    }
    unreachable();
  }

  async #toggleSlowMode(chatId: ID, seconds: number) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleSlowMode", channel, seconds });
  }

  async disableSlowMode(chatId: ID) {
    this.#c.storage.assertUser("disableSlowMode");
    await this.#toggleSlowMode(chatId, 0);
  }

  async setSlowMode(chatId: ID, duration: SlowModeDuration) {
    this.#c.storage.assertUser("setSlowMode");
    const seconds = slowModeDurationToSeconds(duration);
    if (seconds > 1) {
      throw new InputError("Invalid slow mode duration.");
    }

    await this.#toggleSlowMode(chatId, seconds);
  }

  async setChatTitle(chatId: ID, title: string) {
    const peer = await this.#c.getInputPeer(chatId);
    if (Api.is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.editChatTitle", chat_id: peer.chat_id, title });
    } else if (canBeInputChannel(peer)) {
      const channel = toInputChannel(peer);
      await this.#c.invoke({ _: "channels.editTitle", channel, title });
    } else {
      throw new InputError("A chat or channel identifier was expected.");
    }
  }

  async setChatDescription(chatId: ID, description: string) {
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputUser(peer)) {
      throw new InputError("A chat or channel identifier was expected.");
    }
    await this.#c.invoke({ _: "messages.editChatAbout", peer, about: description });
  }

  async setMemberListVisibility(chatId: ID, visible: boolean) {
    this.#c.storage.assertUser("setMemberListVisible");
    const channel = await this.#c.getInputChannel(chatId);
    const enabled = !visible;
    await this.#c.invoke({ _: "channels.toggleParticipantsHidden", channel, enabled });
  }

  async setTopicsEnabled(chatId: ID, enabled: boolean) {
    this.#c.storage.assertUser("setTopicsEnabled");
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleForum", channel, enabled });
  }

  async setAntispamEnabled(chatId: ID, enabled: boolean) {
    this.#c.storage.assertUser("setTopicsEnabled");
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleAntiSpam", channel, enabled });
  }

  async setSignaturesEnabled(chatId: ID, enabled: boolean, params?: SetSignaturesEnabledParams) {
    this.#c.storage.assertUser("setSignaturesEnabled");
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleSignatures", channel, signatures_enabled: enabled ? true : undefined, profiles_enabled: params?.showAuthorProfile ? true : undefined });
  }

  async deleteChat(chatId: ID) {
    this.#c.storage.assertUser("deleteChat");
    const peer = await this.#c.getInputPeer(chatId);
    if (Api.is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.deleteChat", chat_id: peer.chat_id });
    } else if (canBeInputChannel(peer)) {
      const channel = toInputChannel(peer);
      await this.#c.invoke({ _: "channels.deleteChannel", channel });
    } else {
      throw new InputError("A chat or channel identifier was expected.");
    }
  }

  async getDiscussionChatSuggestions() {
    this.#c.storage.assertUser("getDiscussionChatSuggestions");
    const { chats } = await this.#c.invoke({ _: "channels.getGroupsForDiscussion" });
    return chats
      .map((v) => {
        if (!Api.isOneOf(["chat", "channel"], v)) {
          return v;
        } else {
          return constructChatP(v);
        }
      })
      .filter((v): v is ChatP => v != null);
  }

  async setDiscussionChat(chatId: ID, discussionChatId: ID) {
    this.#c.storage.assertUser("setDiscussionChat");
    const [broadcast, group] = await Promise.all([this.#c.getInputChannel(chatId), this.#c.getInputChannel(discussionChatId)]);
    await this.#c.invoke({ _: "channels.setDiscussionGroup", broadcast, group });
  }

  async transferChatOwnership(chatId: ID, userId: ID, password: string) {
    this.#c.storage.assertUser("transferChat");
    const user_id = await this.#c.getInputUser(userId);
    const isSelf = Api.is("inputUserSelf", user_id);
    if (isSelf || Api.peerToChatId(user_id) == await this.#c.getSelfId()) {
      throw new InputError("A user ID except that of the current one was expected.");
    }
    const channel = await this.#c.getInputChannel(chatId);
    const ap = await this.#c.invoke({ _: "account.getPassword" });
    const password_ = await checkPassword(password, ap);
    await this.#c.invoke({ _: "channels.editCreator", channel, user_id, password: password_ });
  }
}
