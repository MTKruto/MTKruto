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
import { toUnixTimestamp } from "../1_utilities.ts";
import { Api, as, is, isOneOf } from "../2_tl.ts";
import { constructChatMemberUpdated, constructFailedInvitation, constructInviteLink, constructJoinRequest } from "../3_types.ts";
import { chatMemberRightsToTlObject, FileSource, ID, Reaction, reactionToTlObject, Update } from "../3_types.ts";
import { _BusinessConnectionIdCommon, _ReplyMarkupCommon, _SendCommon, _SpoilCommon, AddChatMemberParams, ApproveJoinRequestsParams, BanChatMemberParams, CreateInviteLinkParams, DeclineJoinRequestsParams, GetCreatedInviteLinksParams, SetChatMemberRightsParams, SetChatPhotoParams } from "./0_params.ts";
import { canBeInputChannel, canBeInputUser, toInputChannel, toInputUser } from "./0_utilities.ts";
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

export class ChatManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  static canHandleUpdate(update: Api.Update): update is ChatManagerUpdate {
    return isOneOf(chatManagerUpdates, update);
  }

  async handleUpdate(update: ChatManagerUpdate): Promise<Update | null> {
    if (is("updateChannelParticipant", update) || is("updateChatParticipant", update)) {
      const chatMember = await constructChatMemberUpdated(update, this.#c.getEntity);
      const selfId = await this.#c.getSelfId();
      if (chatMember.oldChatMember.user.id == selfId) {
        return { myChatMember: chatMember };
      } else {
        return { chatMember };
      }
    }

    if (is("updateBotChatInviteRequester", update)) {
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

  // INVITE LINKS //
  async createInviteLink(chatId: ID, params?: CreateInviteLinkParams) {
    if (params?.requireApproval && params?.limit) {
      throw new InputError("requireApproval cannot be true while limit is specified.");
    }
    const result = await this.#c.invoke({ _: "messages.exportChatInvite", peer: await this.#c.getInputPeer(chatId), title: params?.title, expire_date: params?.expireAt ? toUnixTimestamp(params.expireAt) : undefined, request_needed: params?.requireApproval ? true : undefined, usage_limit: params?.limit });
    return await constructInviteLink(as("chatInviteExported", result), this.#c.getEntity);
  }

  async getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams) {
    this.#c.storage.assertUser("getCreatedInviteLinks");
    const { invites } = await this.#c.invoke({ _: "messages.getExportedChatInvites", peer: await this.#c.getInputPeer(chatId), revoked: params?.revoked ? true : undefined, admin_id: params?.by ? await this.#c.getInputUser(params.by) : { _: "inputUserEmpty" }, limit: params?.limit ?? 100, offset_date: params?.afterDate ? toUnixTimestamp(params.afterDate) : undefined, offset_link: params?.afterInviteLink });
    return await Promise.all(invites.map((v) => as("chatInviteExported", v)).map((v) => constructInviteLink(v, this.#c.getEntity)));
  }

  // JOINING AND LEAVING CHATS //
  async joinChat(chatId: ID) {
    this.#c.storage.assertUser("joinChat");
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputUser(peer)) {
      throw new InputError("Cannot join private chats.");
    } else if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.joinChannel", channel: toInputChannel(peer) });
    } else if (is("inputPeerChat", peer)) {
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
    } else if (is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.deleteChatUser", chat_id: peer.chat_id, user_id: { _: "inputUserSelf" } }); // TODO: use potential high-level method for adding participants to chats
    } else {
      unreachable();
    }
  }

  // RESTRICTING, BANNING, AND UNBANNING CHAT MEMBERS //
  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams) {
    const chat = await this.#c.getInputPeer(chatId);
    if (!(is("inputPeerChannel", chat)) && !(is("inputPeerChat", chat))) {
      throw new InputError("Expected a channel, supergroup, or group ID.");
    }
    const member = await this.#c.getInputPeer(memberId);
    if (is("inputPeerChannel", chat)) {
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
          until_date: params?.untilDate ? toUnixTimestamp(params.untilDate) : 0,
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
    } else if (is("inputPeerChat", chat)) {
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
    await this.#c.invoke({ _: "channels.editBanned", channel, participant: member, banned_rights: chatMemberRightsToTlObject(params?.rights, params?.untilDate) });
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
  async deleteChatPhoto(chatId: number) {
    const peer = await this.#c.getInputPeer(chatId);
    if (!(canBeInputChannel(peer)) && !(is("inputPeerChat", peer))) {
      unreachable();
    }

    if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.editPhoto", channel: toInputChannel(peer), photo: { _: "inputChatPhotoEmpty" } });
    } else if (is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.editChatPhoto", chat_id: peer.chat_id, photo: { _: "inputChatPhotoEmpty" } });
    }
  }

  async setChatPhoto(chatId: number, photo: FileSource, params?: SetChatPhotoParams): Promise<void> {
    const peer = await this.#c.getInputPeer(chatId);
    if (!(canBeInputChannel(peer)) && !(is("inputPeerChat", peer))) {
      unreachable();
    }

    const file = await this.#c.fileManager.upload(photo, params);
    const photo_: Api.inputChatUploadedPhoto = { _: "inputChatUploadedPhoto", file };

    if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.editPhoto", channel: toInputChannel(peer), photo: photo_ });
    } else if (is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.editChatPhoto", chat_id: peer.chat_id, photo: photo_ });
    }
  }

  // INVITING MEMBERS //
  async addChatMember(chatId: ID, userId: ID, params?: AddChatMemberParams) {
    this.#c.storage.assertUser("addChatMember");
    const chat = await this.#c.getInputPeer(chatId);
    if (isOneOf(["inputPeerEmpty", "inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], chat)) {
      throw new InputError("Cannot add members to private chats");
    }
    const user = await this.#c.getInputUser(userId);
    if (is("inputPeerChat", chat)) {
      const result = await this.#c.invoke({ _: "messages.addChatUser", chat_id: chat.chat_id, user_id: user, fwd_limit: params?.historyLimit ?? 0 });
      return result.missing_invitees.map(constructFailedInvitation);
    } else if (is("inputPeerChannel", chat)) {
      const result = await this.#c.invoke({ _: "channels.inviteToChannel", channel: { ...chat, _: "inputChannel" }, users: [user] });
      return result.missing_invitees.map(constructFailedInvitation);
    }
    unreachable();
  }

  async addChatMembers(chatId: ID, userIds: ID[]) {
    this.#c.storage.assertUser("addChatMembers");
    const chat = await this.#c.getInputPeer(chatId);
    if (isOneOf(["inputPeerEmpty", "inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], chat)) {
      throw new InputError("Cannot add members to private chats");
    }
    const users = new Array<Api.inputUserSelf | Api.inputUser | Api.inputUserFromMessage>();
    for (const userId of userIds) {
      users.push(await this.#c.getInputUser(userId));
    }
    if (is("inputPeerChat", chat)) {
      throw new InputError("addChatMembers cannot be used with basic groups");
    } else if (canBeInputChannel(chat)) {
      const result = await this.#c.invoke({ _: "channels.inviteToChannel", channel: toInputChannel(chat), users });
      return result.missing_invitees.map(constructFailedInvitation);
    }
    unreachable();
  }
}
