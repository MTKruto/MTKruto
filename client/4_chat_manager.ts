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
import { InputError } from "../0_errors.ts";
import { Api } from "../2_tl.ts";
import { type AvailableReactions, availableReactionsToTlObject, chatAdministratorRightsToTlObject, type ChatJoinResult, type ChatP, type ChatPChannel, type ChatPPrivate, constructChatJoinResult, constructChatMemberUpdated, constructChatP, constructFailedInvitation, constructInviteLink, constructJoinRequest, constructJoinRequest2, constructNotificationSettings, constructRecentActionsEntry, constructResolvedInviteLink, type FailedInvitation, type InviteLink, type JoinRequest, type NotificationSettings, notificationSoundToTlObject, type RecentActionsEntry, reportReasonToTlObject, type ResolvedInviteLink, type SlowModeDuration, slowModeDurationToSeconds } from "../3_types.ts";
import { chatMemberRightsToTlObject, type FileSource, type ID, type ReportReason, type Update } from "../3_types.ts";
import type { _BusinessConnectionIdCommon, _ReplyMarkupCommon, _SendCommon, _SpoilCommon, AddChatMemberParams, ApproveJoinRequestsParams, BanChatMemberParams, BoostChatParams, CreateInviteLinkParams, DeclineJoinRequestsParams, EnableSignaturesParams, GetAdministeredChatsParams, GetCreatedInviteLinksParams, GetJoinRequestsParams, GetRecentActionsParams, MarkAllMentionsAsReadParams, PromoteChatMemberParams, ReportChatParams, SetChatMemberRightsParams, SetChatMemberTagParams, SetChatPhotoParams, SetNotificationSettingsParams } from "./0_params.ts";
import { checkPassword } from "./0_password.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import { canBeInputChannel, canBeInputUser, getLimit, toInputChannel, toInputUser } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { FileManager } from "./2_file_manager.ts";
import type { MessageManager } from "./3_message_manager.ts";

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

export class ChatManager implements UpdateProcessor<ChatManagerUpdate, true> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  canHandleUpdate(update: Api.Update): update is ChatManagerUpdate {
    return Api.isOneOf(chatManagerUpdates, update);
  }

  async handleUpdate(update: ChatManagerUpdate): Promise<Update | null> {
    if (Api.is("updateChannelParticipant", update) || Api.is("updateChatParticipant", update)) {
      const chatMember = constructChatMemberUpdated(update, this.#c.getPeer);
      const selfId = await this.#c.getSelfId();
      if (chatMember.oldChatMember.member.id === selfId) {
        return { type: "myChatMember", myChatMember: chatMember };
      } else {
        return { type: "chatMember", chatMember };
      }
    }

    if (Api.is("updateBotChatInviteRequester", update)) {
      const joinRequest = constructJoinRequest(update, this.#c.getPeer);
      return { type: "joinRequest", joinRequest };
    }

    return null;
  }

  // JOIN REQUESTS //
  async #toggleJoinRequests(chatId: ID, isEnabled: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleJoinRequest", channel, enabled: isEnabled });
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

  async getJoinRequests(chatId: ID, params?: GetJoinRequestsParams): Promise<JoinRequest[]> {
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
    const peer_ = await this.#c.inputPeerToPeer(peer);
    return await Promise.all(importers.map((v) => constructJoinRequest2(peer_, v, this.#c.getPeer)));
  }

  // INVITE LINKS //
  async createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<InviteLink> {
    if (params?.isApprovalRequired && params?.limit) {
      throw new InputError("isApprovalRequired cannot be true while limit is specified.");
    }
    const result = await this.#c.invoke({ _: "messages.exportChatInvite", peer: await this.#c.getInputPeer(chatId), title: params?.title, expire_date: params?.expireAt, request_needed: params?.isApprovalRequired || undefined, usage_limit: params?.limit });
    return constructInviteLink(Api.as("chatInviteExported", result), this.#c.getPeer);
  }

  async getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<InviteLink[]> {
    this.#c.storage.assertUser("getCreatedInviteLinks");
    if ((params?.afterDate !== undefined && !params.afterInviteLink) || (params?.afterDate === undefined && params?.afterInviteLink)) {
      throw new InputError("Both or neither of the parameters afterDate and afterInviteLink must be specified.");
    }
    const { invites } = await this.#c.invoke({ _: "messages.getExportedChatInvites", peer: await this.#c.getInputPeer(chatId), revoked: params?.isRevoked || undefined, admin_id: params?.by ? await this.#c.getInputUser(params.by) : { _: "inputUserEmpty" }, limit: getLimit(params?.limit), offset_date: params?.afterDate, offset_link: params?.afterInviteLink });
    return await Promise.all(invites.map((v) => Api.as("chatInviteExported", v)).map((v) => constructInviteLink(v, this.#c.getPeer)));
  }

  // JOINING AND LEAVING CHATS //
  async joinChat(chatId: ID): Promise<ChatJoinResult> {
    this.#c.storage.assertUser("joinChat");
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputUser(peer)) {
      throw new InputError("Cannot join private chats.");
    } else if (canBeInputChannel(peer)) {
      const result = await this.#c.invoke({ _: "channels.joinChannel", channel: toInputChannel(peer) });
      return constructChatJoinResult(result, this.#c.getPeer);
    } else if (Api.is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.addChatUser", chat_id: peer.chat_id, user_id: { _: "inputUserSelf" }, fwd_limit: 0 }); // TODO: use potential high-level method for adding participants to chats
      return { type: "joined" };
    } else {
      unreachable();
    }
  }

  async joinChatByInviteLink(inviteLink: string): Promise<ChatJoinResult> {
    this.#c.storage.assertUser("joinChatByInviteLink");
    const hash = ChatManager.#getInviteLinkHash(inviteLink);
    const result = await this.#c.invoke({ _: "messages.importChatInvite", hash });
    return constructChatJoinResult(result, this.#c.getPeer);
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

  // CHAT MEMBERS //
  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams) {
    const chat = await this.#c.getInputPeer(chatId);
    if (!Api.isOneOf(["inputPeerChannel", "inputPeerChat", "inputPeerChannelFromMessage"], chat)) {
      throw new InputError("Expected a channel, supergroup, or group ID.");
    }
    const member = await this.#c.getInputPeer(memberId);
    if (Api.isOneOf(["inputPeerChannel", "inputPeerChannelFromMessage"], chat)) {
      if (params?.deleteMessages) {
        try {
          await this.#c.messageManager.deleteChatMemberMessages(chatId, memberId);
        } catch {
          //
        }
      }
      await this.#c.invoke({
        _: "channels.editBanned",
        channel: toInputChannel(chat),
        participant: member,
        banned_rights: {
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
        },
      });
    } else if (Api.is("inputPeerChat", chat)) {
      if (!canBeInputUser(member)) {
        throw new InputError(`Invalid user ID: ${memberId}`);
      }
      await this.#c.invoke({ _: "messages.deleteChatUser", chat_id: chat.chat_id, user_id: toInputUser(member), revoke_history: params?.deleteMessages || undefined });
    }
  }

  async unbanChatMember(chatId: ID, memberId: ID) {
    const channel = await this.#c.getInputChannel(chatId);
    const member = await this.#c.getInputPeer(memberId);
    await this.#c.invoke({ _: "channels.editBanned", channel, participant: member, banned_rights: { _: "chatBannedRights", until_date: 0 } });
  }

  async setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams) {
    const channel = await this.#c.getInputChannel(chatId);
    const member = await this.#c.getInputPeer(memberId);
    await this.#c.invoke({ _: "channels.editBanned", channel, participant: member, banned_rights: chatMemberRightsToTlObject(params?.rights, params?.until) });
  }

  async promoteChatMember(chatId: ID, userId: ID, params?: PromoteChatMemberParams) {
    const channel = await this.#c.getInputChannel(chatId);
    const user_id = await this.#c.getInputUser(userId);
    const admin_rights = chatAdministratorRightsToTlObject(params ?? {});
    const rank = params?.title ?? "";
    await this.#c.invoke({
      _: "channels.editAdmin",
      channel,
      user_id,
      admin_rights,
      rank,
    });
  }

  async setChatMemberTag(chatId: ID, userId: ID, params?: SetChatMemberTagParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const participant = await this.#c.getInputPeer(userId);
    const rank = params?.tag ?? "";
    await this.#c.invoke({ _: "messages.editChatParticipantRank", peer, participant, rank });
  }

  // CHAT SETTINGS //
  async setAvailableReactions(chatId: ID, availableReactions: AvailableReactions) {
    this.#c.storage.assertUser("setAvailableReactions");
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({ _: "messages.setChatAvailableReactions", peer, available_reactions: availableReactionsToTlObject(availableReactions), paid_enabled: availableReactions.type === "all" ? true : availableReactions.type === "some" ? availableReactions.reactions.some((v) => v.type === "paid") : undefined, reactions_limit: "maxReactionCount" in availableReactions ? availableReactions.maxReactionCount : undefined });
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
    if (seconds < 1) {
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

  async #setIsMemberListVisible(chatId: ID, isVisible: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    const enabled = !isVisible;
    await this.#c.invoke({ _: "channels.toggleParticipantsHidden", channel, enabled });
  }

  async hideMemberList(chatId: ID) {
    this.#c.storage.assertUser("hideMemberList");
    await this.#setIsMemberListVisible(chatId, false);
  }

  async showMemberList(chatId: ID) {
    this.#c.storage.assertUser("showMemberList");
    await this.#setIsMemberListVisible(chatId, true);
  }

  async #setIsTopicsEnabled(chatId: ID, isEnabled: boolean, isShownAsTabs: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleForum", channel, enabled: isEnabled, tabs: isShownAsTabs });
  }

  async disableTopics(chatId: ID) {
    this.#c.storage.assertUser("disableTopics");
    await this.#setIsTopicsEnabled(chatId, false, false);
  }

  async enableTopics(chatId: ID, isShownAsTabs: boolean) {
    this.#c.storage.assertUser("enableTopics");
    await this.#setIsTopicsEnabled(chatId, true, isShownAsTabs);
  }

  async #setIsAntispamEnabled(chatId: ID, isEnabled: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleAntiSpam", channel, enabled: isEnabled });
  }

  async enableAntispam(chatId: ID) {
    this.#c.storage.assertUser("enableAntispam");
    await this.#setIsAntispamEnabled(chatId, true);
  }

  async disableAntispam(chatId: ID) {
    this.#c.storage.assertUser("disableAntispam");
    await this.#setIsAntispamEnabled(chatId, false);
  }

  async #setIsSignaturesEnabled(chatId: ID, isEnabled: boolean, params?: EnableSignaturesParams) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleSignatures", channel, signatures_enabled: isEnabled || undefined, profiles_enabled: params?.showAuthorProfile || undefined });
  }

  async enableSignatures(chatId: ID, params?: EnableSignaturesParams) {
    this.#c.storage.assertUser("enableSignatures");
    await this.#setIsSignaturesEnabled(chatId, true, params);
  }

  async disableSignatures(chatId: ID) {
    this.#c.storage.assertUser("disableSignatures");
    await this.#setIsSignaturesEnabled(chatId, false);
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

  async getDiscussionChatSuggestions(): Promise<ChatP[]> {
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
      .filter((v): v is ChatP => v !== null);
  }

  async setDiscussionChat(chatId: ID, discussionChatId: ID) {
    this.#c.storage.assertUser("setDiscussionChat");
    const [broadcast, group] = await Promise.all([this.#c.getInputChannel(chatId), this.#c.getInputChannel(discussionChatId)]);
    await this.#c.invoke({ _: "channels.setDiscussionGroup", broadcast, group });
  }

  async transferChatOwnership(chatId: ID, userId: ID, password: string) {
    this.#c.storage.assertUser("transferChatOwnership");
    const user_id = await this.#c.getInputUser(userId);
    const isSelf = Api.is("inputUserSelf", user_id);
    if (isSelf || Api.peerToChatId(user_id) === await this.#c.getSelfId()) {
      throw new InputError("A user ID other than that of the current user was expected.");
    }
    const peer = await this.#c.getInputPeer(chatId);
    const ap = await this.#c.invoke({ _: "account.getPassword" });
    const password_ = await checkPassword(password, ap);
    await this.#c.invoke({ _: "messages.editChatCreator", peer, user_id, password: password_ });
  }

  async #setIsSharingEnabled(chatId: ID, isSharingEnabled: boolean) {
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({ _: "messages.toggleNoForwards", peer, enabled: !isSharingEnabled });
  }

  async enableSharing(chatId: ID) {
    this.#c.storage.assertUser("enableSharing");
    await this.#setIsSharingEnabled(chatId, true);
  }

  async disableSharing(chatId: ID) {
    this.#c.storage.assertUser("disableSharing");
    await this.#setIsSharingEnabled(chatId, false);
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
  async addChatMember(chatId: ID, userId: ID, params?: AddChatMemberParams): Promise<FailedInvitation[]> {
    this.#c.storage.assertUser("addChatMember");
    const chat = await this.#c.getInputPeer(chatId);
    if (Api.isOneOf(["inputPeerEmpty", "inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], chat)) {
      throw new InputError("Cannot add members to private chats");
    }
    const user = await this.#c.getInputUser(userId);
    if (Api.is("inputPeerChat", chat)) {
      const result = await this.#c.invoke({ _: "messages.addChatUser", chat_id: chat.chat_id, user_id: user, fwd_limit: params?.historyLimit ?? 0 });
      return result.missing_invitees.map(constructFailedInvitation);
    } else if (Api.isOneOf(["inputPeerChannel", "inputPeerChannelFromMessage"], chat)) {
      const result = await this.#c.invoke({ _: "channels.inviteToChannel", channel: toInputChannel(chat), users: [user] });
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

  async getRecommendedChannels(): Promise<ChatPChannel[]> {
    this.#c.storage.assertUser("getRecommendedChannels");
    const result = await this.#c.invoke({ _: "channels.getChannelRecommendations" });
    return result.chats.map((v) => constructChatP(v)).filter((v) => v.type === "channel");
  }

  async getSimilarChannels(chatId: ID): Promise<ChatPChannel[]> {
    this.#c.storage.assertUser("getSimilarChannels");
    const channel = await this.#c.getInputChannel(chatId);
    const result = await this.#c.invoke({ _: "channels.getChannelRecommendations", channel });
    return result.chats.map((v) => constructChatP(v)).filter((v) => v.type === "channel");
  }

  async getSimilarBots(chatId: ID): Promise<ChatPPrivate[]> {
    this.#c.storage.assertUser("getSimilarBots");
    const bot = await this.#c.getInputUser(chatId);
    const result = await this.#c.invoke({ _: "bots.getBotRecommendations", bot });
    return result.users.map((v) => constructChatP(v)).filter((v) => v.type === "private");
  }

  async getOnlineCount(chatId: ID): Promise<number> {
    this.#c.storage.assertUser("getOnlineCount");
    const peer = await this.#c.getInputPeer(chatId);
    const result = await this.#c.invoke({ _: "messages.getOnlines", peer });
    return result.onlines;
  }

  async #toggleChatHistoryForNewMembers(chatId: ID, isEnabled: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.togglePreHistoryHidden", channel, enabled: !isEnabled });
  }

  async enableChatHistoryForNewMembers(chatId: ID) {
    this.#c.storage.assertUser("enableChatHistoryForNewMembers");
    await this.#toggleChatHistoryForNewMembers(chatId, true);
  }

  async disableChatHistoryForNewMembers(chatId: ID) {
    this.#c.storage.assertUser("disableChatHistoryForNewMembers");
    await this.#toggleChatHistoryForNewMembers(chatId, false);
  }

  async setDefaultSendAs(chatId: ID, sendAs: ID) {
    this.#c.storage.assertUser("setDefaultSendAs");
    const peer = await this.#c.getInputPeer(chatId);
    const send_as = await this.#c.getInputPeer(sendAs);
    await this.#c.invoke({ _: "messages.saveDefaultSendAs", peer, send_as });
  }

  async reportChat(chatId: ID, reason_: ReportReason, params?: ReportChatParams) {
    this.#c.storage.assertUser("reportChat");
    const peer = await this.#c.getInputPeer(chatId);
    const reason = reportReasonToTlObject(reason_);
    const message = params?.text ?? "";
    await this.#c.invoke({ _: "account.reportPeer", peer, reason, message });
  }

  async #setIsChatUnread(chatId: ID, isUnread: boolean) {
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({ _: "messages.markDialogUnread", peer: { _: "inputDialogPeer", peer }, unread: isUnread || undefined });
  }

  async markChatAsUnread(chatId: ID) {
    this.#c.storage.assertUser("markChatAsUnread");
    await this.#setIsChatUnread(chatId, true);
  }

  async markChatAsRead(chatId: ID) {
    this.#c.storage.assertUser("markChatAsRead");
    await this.#setIsChatUnread(chatId, false);
  }

  async markAllMentionsAsRead(chatId: ID, params?: MarkAllMentionsAsReadParams) {
    this.#c.storage.assertUser("markAllMentionsAsRead");
    const peer = await this.#c.getInputPeer(chatId);
    const top_msg_id = params?.topicId;
    await this.#c.invoke({ _: "messages.readMentions", peer, top_msg_id });
  }

  async getAdministeredChats(params?: GetAdministeredChatsParams): Promise<ChatP[]> {
    this.#c.storage.assertUser("getAdministeredChats");
    const for_personal = params?.isForPersonalChannel || undefined;
    const result = await this.#c.invoke({ _: "channels.getAdminedPublicChannels", for_personal });
    return result.chats.map(constructChatP);
  }

  async getRecentActions(chatId: ID, params?: GetRecentActionsParams): Promise<RecentActionsEntry[]> {
    this.#c.storage.assertUser("getRecentActions");
    const channel = await this.#c.getInputChannel(chatId);
    const limit = getLimit(params?.limit);
    const events_filter: Api.channelAdminLogEventsFilter = {
      _: "channelAdminLogEventsFilter",
      ban: params?.isRestrict || undefined,
      delete: params?.isDelete || undefined,
      demote: params?.isRestrict || undefined,
      edit_rank: params?.isMemberTag || undefined,
      edit: params?.isEdit || undefined,
      forums: params?.isForum || undefined,
      group_call: params?.isVideoChat || undefined,
      info: params?.isChatSettings || undefined,
      invite: params?.isInvite || undefined,
      invites: params?.isInvite || undefined,
      join: params?.isJoin || undefined,
      kick: params?.isRestrict || undefined,
      leave: params?.isLeave || undefined,
      pinned: params?.isPin || undefined,
      promote: params?.isRestrict || undefined,
      send: params?.isNewMessage || undefined,
      settings: params?.isChatSettings || undefined,
      unban: params?.isRestrict || undefined,
      unkick: params?.isRestrict || undefined,
    };
    const max_id = params?.offsetId ? BigInt(params.offsetId) : 0n;
    const admins = params?.admins ? await Promise.all(params.admins.map(this.#c.getInputUser)) : undefined;
    const result = await this.#c.invoke({
      _: "channels.getAdminLog",
      channel,
      limit,
      max_id,
      min_id: 0n,
      q: "",
      admins,
      events_filter,
    });
    const entries = result.events.map((v) => constructRecentActionsEntry(v, this.#c.getPeer, this.#c.messageManager.getMessage.bind(this.#c.messageManager), this.#c.fileManager.getStickerSetName.bind(this.#c.fileManager)));
    return await Promise.all(entries);
  }

  async deleteRevokedInviteLinks(chatId: ID, userId: ID) {
    this.#c.storage.assertUser("deleteRevokedInviteLinks");
    const peer = await this.#c.getInputPeer(chatId);
    const admin_id = await this.#c.getInputUser(userId);
    await this.#c.invoke({ _: "messages.deleteRevokedExportedChatInvites", peer, admin_id });
  }

  async boostChat(chatId: ID, params?: BoostChatParams) {
    this.#c.storage.assertUser("boostChat");
    const peer = await this.#c.getInputPeer(chatId);
    const slots = params?.slots;
    await this.#c.invoke({ _: "premium.applyBoost", peer, slots });
  }

  static #getInviteLinkHash(inviteLink: string) {
    try {
      const result = new URL(inviteLink);
      const parts = result.pathname.split("/").slice(1);
      if (parts.length > 1) {
        return parts[1];
      } else {
        const part = parts[0];
        if (part.startsWith("+")) {
          return part.slice(1);
        } else {
          return part;
        }
      }
    } catch {
      return inviteLink;
    }
  }

  async resolveInviteLink(inviteLink: string): Promise<ChatP | ResolvedInviteLink> {
    this.#c.storage.assertUser("resolveInviteLink");
    const hash = ChatManager.#getInviteLinkHash(inviteLink);
    const result = await this.#c.invoke({ _: "messages.checkChatInvite", hash });
    switch (result._) {
      case "chatInviteAlready":
      case "chatInvitePeek":
        return constructChatP(result.chat);
      case "chatInvite":
        return constructResolvedInviteLink(result);
    }
  }

  async setNotificationSettings(chatId: ID, params?: SetNotificationSettingsParams) {
    this.#c.storage.assertUser("setNotificationSettings");
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({
      _: "account.updateNotifySettings",
      peer: { _: "inputNotifyPeer", peer },
      settings: {
        _: "inputPeerNotifySettings",
        mute_until: params?.settings?.muteUntil,
        show_previews: params?.settings?.showsPreviews,
        silent: params?.settings?.isSilent,
        sound: params?.settings?.sound ? notificationSoundToTlObject(params.settings.sound) : undefined,
        stories_hide_sender: params?.settings?.hidesStories,
        stories_muted: params?.settings?.mutesStories,
        stories_sound: params?.settings?.storySound ? notificationSoundToTlObject(params.settings.storySound) : undefined,
      },
    });
  }

  async getNotificationSettings(chatId: ID): Promise<NotificationSettings> {
    this.#c.storage.assertUser("getNotificationSettings");
    const peer = await this.#c.getInputPeer(chatId);
    const result = await this.#c.invoke({ _: "account.getNotifySettings", peer: { _: "inputNotifyPeer", peer } });
    return constructNotificationSettings(result);
  }
}
