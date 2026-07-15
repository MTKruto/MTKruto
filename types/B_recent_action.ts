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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { peerToChatId } from "../tl/2_telegram.ts";
import { type ChatMemberRights, constructChatMemberRights } from "./0_chat_member_rights.ts";
import { type AvailableReactions, constructAvailableReactions } from "./1_available_reactions.ts";
import { type ChannelLocation, constructChannelLocation } from "./1_channel_location.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructPhoto, type Photo } from "./1_photo.ts";
import type { StickerSetNameGetter } from "./1_sticker.ts";
import { type ChatMember, constructChatMember } from "./2_chat_member.ts";
import { constructInviteLink, type InviteLink } from "./3_invite_link.ts";
import { type CommunityGetter, constructMessage, type Message, type MessageGetter } from "./9_message.ts";
import { constructTopic2, type Topic } from "./A_topic.ts";

/** @unlisted */
export interface RecentActionChangeTitle {
  type: "changeTitle";
  previous: string;
  new: string;
}

/** @unlisted */
export interface RecentActionChangeDescription {
  type: "changeDescription";
  previous: string;
  new: string;
}

/** @unlisted */
export interface RecentActionChangeUsername {
  type: "changeUsername";
  previous: string;
  new: string;
}

/** @unlisted */
export interface RecentActionChangePhoto {
  type: "changePhoto";
  previous: Photo;
  new: Photo;
}

/** @unlisted */
export interface RecentActionToggleInvites {
  type: "toggleInvites";
  isEnabled: boolean;
}

/** @unlisted */
export interface RecentActionToggleSignatures {
  type: "toggleSignatures";
  isEnabled: boolean;
}

/** @unlisted */
export interface RecentActionPinMessage {
  type: "pinMessage";
  message: Message;
}

/** @unlisted */
export interface RecentActionEditMessage {
  type: "editMessage";
  previous: Message;
  new: Message;
}

/** @unlisted */
export interface RecentActionDeleteMessage {
  type: "deleteMessage";
  message: Message;
}

/** @unlisted */
export interface RecentActionJoin {
  type: "join";
}

/** @unlisted */
export interface RecentActionLeave {
  type: "leave";
}

/** @unlisted */
export interface RecentActionInvite {
  type: "invite";
  chatMember: ChatMember;
}

/** @unlisted */
export interface RecentActionToggleRestriction {
  type: "toggleRestriction";
  previous: ChatMember;
  new: ChatMember;
}

/** @unlisted */
export interface RecentActionTogglePromotion {
  type: "togglePromotion";
  previous: ChatMember;
  new: ChatMember;
}

/** @unlisted */
export interface RecentActionChangeStickerSet {
  type: "changeStickerSet";
  previous?: string;
  new?: string;
}

/** @unlisted */
export interface RecentActionToggleChatHistoryForNewMembers {
  type: "toggleChatHistoryForNewMembers";
  isEnabled: boolean;
}

/** @unlisted */
export interface RecentActionSetDefaultPermissions {
  type: "setDefaultPermissions";
  previous: ChatMemberRights;
  new: ChatMemberRights;
}

/** @unlisted */
export interface RecentActionStopPoll {
  type: "stopPoll";
  message: Message;
}

/** @unlisted */
export interface RecentActionChangeDiscussionChat {
  type: "changeDiscussionChat";
  previous: number;
  new: number;
}

/** @unlisted */
export interface RecentActionChangeLocation {
  type: "changeLocation";
  previous?: ChannelLocation;
  new?: ChannelLocation;
}

/** @unlisted */
export interface RecentActionChangeSetSlowMode {
  type: "setSlowMode";
  previous: number;
  new: number;
}

/** @unlisted */
export interface RecentActionStartVideoChat {
  type: "startVideoChat";
}

/** @unlisted */
export interface RecentActionEndVideoChat {
  type: "endVideoChat";
}

/** @unlisted */
export interface RecentActionMuteVideoChatParticipant {
  type: "muteVideoChatParticipant";
  participant: number;
}

/** @unlisted */
export interface RecentActionUnmuteVideoChatParticipant {
  type: "unmuteVideoChatParticipant";
  participant: number;
}

/** @unlisted */
export interface RecentActionToggleVideoChatDefaultMuted {
  type: "toggleVideoChatDefaultMuted";
  defaultMuted: boolean;
}

/** @unlisted */
export interface RecentActionJoinByInvite {
  type: "joinByInvite";
  inviteLink?: InviteLink;
  isViaList: boolean;
}

/** @unlisted */
export interface RecentActionDeleteInviteLink {
  type: "deleteInviteLink";
  inviteLink?: InviteLink;
}

/** @unlisted */
export interface RecentActionRevokeInviteLink {
  type: "revokeInviteLink";
  inviteLink?: InviteLink;
}

/** @unlisted */
export interface RecentActionEditInviteLink {
  type: "editInviteLink";
  previous?: InviteLink;
  new?: InviteLink;
}

/** @unlisted */
export interface RecentActionSetVideoChatParticipantVolume {
  type: "setVideoChatParticipantVolume";
  participant: number;
}

/** @unlisted */
export interface RecentActionSetHistoryTtl {
  type: "setHistoryTtl";
  previous: number;
  new: number;
}

/** @unlisted */
export interface RecentActionJoinByRequest {
  type: "joinByRequest";
  inviteLink?: InviteLink;
  approvedBy: number;
}

/** @unlisted */
export interface RecentActionToggleContentProtection {
  type: "toggleContentProtection";
  isEnabled: boolean;
}

/** @unlisted */
export interface RecentActionSendMessage {
  type: "sendMessage";
  message: Message;
}

/** @unlisted */
export interface RecentActionSetAvailableReactions {
  type: "setAvailableReactions";
  previous: AvailableReactions;
  new: AvailableReactions;
}

/** @unlisted */
export interface RecentActionSetUsernames {
  type: "setUsernames";
  previous: string[];
  new: string[];
}

/** @unlisted */
export interface RecentActionToggleTopics {
  type: "toggleTopics";
  isEnabled: boolean;
}

/** @unlisted */
export interface RecentActionCreateTopic {
  type: "createTopic";
  topic: Topic;
}

/** @unlisted */
export interface RecentActionEditTopic {
  type: "editTopic";
  previous: Topic;
  new: Topic;
}

/** @unlisted */
export interface RecentActionDeleteTopic {
  type: "deleteTopic";
  topic: Topic;
}

/** @unlisted */
export interface RecentActionPinTopic {
  type: "pinTopic";
  previous?: Topic;
  new?: Topic;
}

/** @unlisted */
export interface RecentActionToggleAntispam {
  type: "toggleAntispam";
  isEnabled: boolean;
}

/** @unlisted */
export interface RecentActionSetEmojiStickerSet {
  type: "setEmojiStickerSet";
  previous?: string;
  new?: string;
}

/** @unlisted */
export interface RecentActionToggleAutomaticTranslation {
  type: "toggleAutomaticTranslation";
  isEnabled: boolean;
}

/** @unlisted */
export interface RecentActionEditChatMemberTag {
  type: "editChatMemberTag";
  userId: number;
  previous?: string;
  new?: string;
}

/** @unlisted */
export interface RecentActionUnsupported {
  type: "unsupported";
}

/** Any type of recent action. */
export type RecentAction =
  | RecentActionChangeTitle
  | RecentActionChangeDescription
  | RecentActionChangeUsername
  | RecentActionChangePhoto
  | RecentActionToggleInvites
  | RecentActionToggleSignatures
  | RecentActionPinMessage
  | RecentActionEditMessage
  | RecentActionDeleteMessage
  | RecentActionJoin
  | RecentActionLeave
  | RecentActionInvite
  | RecentActionToggleRestriction
  | RecentActionTogglePromotion
  | RecentActionChangeStickerSet
  | RecentActionToggleChatHistoryForNewMembers
  | RecentActionSetDefaultPermissions
  | RecentActionStopPoll
  | RecentActionChangeDiscussionChat
  | RecentActionChangeLocation
  | RecentActionChangeSetSlowMode
  | RecentActionStartVideoChat
  | RecentActionEndVideoChat
  | RecentActionMuteVideoChatParticipant
  | RecentActionUnmuteVideoChatParticipant
  | RecentActionToggleVideoChatDefaultMuted
  | RecentActionJoinByInvite
  | RecentActionDeleteInviteLink
  | RecentActionRevokeInviteLink
  | RecentActionEditInviteLink
  | RecentActionSetVideoChatParticipantVolume
  | RecentActionSetHistoryTtl
  | RecentActionJoinByRequest
  | RecentActionToggleContentProtection
  | RecentActionSendMessage
  | RecentActionSetAvailableReactions
  | RecentActionSetUsernames
  | RecentActionToggleTopics
  | RecentActionCreateTopic
  | RecentActionEditTopic
  | RecentActionDeleteTopic
  | RecentActionPinTopic
  | RecentActionToggleAntispam
  | RecentActionSetEmojiStickerSet
  | RecentActionToggleAutomaticTranslation
  | RecentActionEditChatMemberTag
  | RecentActionUnsupported;

function getChannelParticipantPeer(participant: Api.ChannelParticipant): Api.Peer {
  switch (participant._) {
    case "channelParticipant":
    case "channelParticipantSelf":
    case "channelParticipantCreator":
    case "channelParticipantAdmin":
      return { _: "peerUser", user_id: participant.user_id };
    case "channelParticipantBanned":
    case "channelParticipantLeft":
      return participant.peer;
    default:
      unreachable();
  }
}

export async function constructRecentAction(a: Api.ChannelAdminLogEventAction, getPeer: PeerGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter, getCommunity: CommunityGetter): Promise<RecentAction> {
  switch (a._) {
    case "channelAdminLogEventActionChangeTitle":
      return {
        type: "changeTitle",
        previous: a.prev_value,
        new: a.new_value,
      };
    case "channelAdminLogEventActionChangeAbout":
      return {
        type: "changeDescription",
        previous: a.prev_value,
        new: a.new_value,
      };
    case "channelAdminLogEventActionChangeUsername":
      return {
        type: "changeUsername",
        previous: a.prev_value,
        new: a.prev_value,
      };
    case "channelAdminLogEventActionChangePhoto":
      return {
        type: "changePhoto",
        previous: constructPhoto(Api.as("photo", a.prev_photo)),
        new: constructPhoto(Api.as("photo", a.new_photo)),
      };
    case "channelAdminLogEventActionToggleInvites":
      return {
        type: "toggleInvites",
        isEnabled: a.new_value,
      };
    case "channelAdminLogEventActionToggleSignatures":
      return {
        type: "toggleSignatures",
        isEnabled: a.new_value,
      };
    case "channelAdminLogEventActionUpdatePinned":
      return {
        type: "pinMessage",
        message: await constructMessage(a.message, getPeer, getMessage, getStickerSetName, getCommunity, false),
      };
    case "channelAdminLogEventActionEditMessage":
      return {
        type: "editMessage",
        previous: await constructMessage(a.prev_message, getPeer, getMessage, getStickerSetName, getCommunity, false),
        new: await constructMessage(a.new_message, getPeer, getMessage, getStickerSetName, getCommunity, false),
      };
    case "channelAdminLogEventActionDeleteMessage":
      return {
        type: "deleteMessage",
        message: await constructMessage(a.message, getPeer, getMessage, getStickerSetName, getCommunity, false),
      };
    case "channelAdminLogEventActionParticipantJoin":
      return {
        type: "join",
      };
    case "channelAdminLogEventActionParticipantLeave":
      return {
        type: "leave",
      };
    case "channelAdminLogEventActionParticipantInvite": {
      const peer = getPeer(getChannelParticipantPeer(a.participant));
      if (peer === null) {
        unreachable();
      }
      return {
        type: "invite",
        chatMember: constructChatMember(peer[0], a.participant, getPeer),
      };
    }
    case "channelAdminLogEventActionParticipantToggleBan": {
      const peer = getPeer(getChannelParticipantPeer(a.new_participant));
      if (peer === null) {
        unreachable();
      }
      return {
        type: "toggleRestriction",
        previous: constructChatMember(peer[0], a.prev_participant, getPeer),
        new: constructChatMember(peer[0], a.new_participant, getPeer),
      };
    }
    case "channelAdminLogEventActionParticipantToggleAdmin": {
      const peer = getPeer(getChannelParticipantPeer(a.new_participant));
      if (peer === null) {
        unreachable();
      }
      return {
        type: "togglePromotion",
        previous: constructChatMember(peer[0], a.prev_participant, getPeer),
        new: constructChatMember(peer[0], a.new_participant, getPeer),
      };
    }
    case "channelAdminLogEventActionChangeStickerSet":
      return cleanObject({
        type: "changeStickerSet",
        previous: Api.is("inputStickerSetShortName", a.prev_stickerset) ? a.prev_stickerset.short_name : undefined,
        new: Api.is("inputStickerSetShortName", a.new_stickerset) ? a.new_stickerset.short_name : undefined,
      });
    case "channelAdminLogEventActionTogglePreHistoryHidden":
      return {
        type: "toggleChatHistoryForNewMembers",
        isEnabled: a.new_value,
      };
    case "channelAdminLogEventActionDefaultBannedRights":
      return {
        type: "setDefaultPermissions",
        previous: constructChatMemberRights(a.prev_banned_rights),
        new: constructChatMemberRights(a.new_banned_rights),
      };
    case "channelAdminLogEventActionStopPoll":
      return {
        type: "stopPoll",
        message: await constructMessage(a.message, getPeer, getMessage, getStickerSetName, getCommunity, false),
      };
    case "channelAdminLogEventActionChangeLinkedChat":
      return {
        type: "changeDiscussionChat",
        previous: peerToChatId({ _: "peerChannel", channel_id: a.prev_value }),
        new: peerToChatId({ _: "peerChannel", channel_id: a.new_value }),
      };
    case "channelAdminLogEventActionChangeLocation":
      return cleanObject({
        type: "changeLocation",
        previous: Api.is("channelLocation", a.prev_value) ? constructChannelLocation(a.prev_value) : undefined,
        new: Api.is("channelLocation", a.new_value) ? constructChannelLocation(a.new_value) : undefined,
      });
    case "channelAdminLogEventActionToggleSlowMode":
      return {
        type: "setSlowMode",
        previous: a.prev_value,
        new: a.new_value,
      };
    case "channelAdminLogEventActionStartGroupCall":
      return {
        type: "startVideoChat",
      };
    case "channelAdminLogEventActionDiscardGroupCall":
      return {
        type: "endVideoChat",
      };
    case "channelAdminLogEventActionParticipantMute":
      return {
        type: "muteVideoChatParticipant",
        participant: peerToChatId(a.participant.peer),
      };
    case "channelAdminLogEventActionParticipantUnmute":
      return {
        type: "unmuteVideoChatParticipant",
        participant: peerToChatId(a.participant.peer),
      };
    case "channelAdminLogEventActionToggleGroupCallSetting":
      return {
        type: "toggleVideoChatDefaultMuted",
        defaultMuted: a.join_muted,
      };
    case "channelAdminLogEventActionParticipantJoinByInvite":
      return cleanObject({
        type: "joinByInvite",
        inviteLink: Api.is("chatInviteExported", a.invite) ? constructInviteLink(a.invite, getPeer) : undefined,
        isViaList: !!a.via_chatlist,
      });
    case "channelAdminLogEventActionExportedInviteDelete":
      return cleanObject({
        type: "deleteInviteLink",
        inviteLink: Api.is("chatInviteExported", a.invite) ? constructInviteLink(a.invite, getPeer) : undefined,
      });
    case "channelAdminLogEventActionExportedInviteRevoke":
      return cleanObject({
        type: "revokeInviteLink",
        inviteLink: Api.is("chatInviteExported", a.invite) ? constructInviteLink(a.invite, getPeer) : undefined,
      });
    case "channelAdminLogEventActionExportedInviteEdit":
      return cleanObject({
        type: "editInviteLink",
        previous: Api.is("chatInviteExported", a.prev_invite) ? constructInviteLink(a.prev_invite, getPeer) : undefined,
        new: Api.is("chatInviteExported", a.new_invite) ? constructInviteLink(a.new_invite, getPeer) : undefined,
      });
    case "channelAdminLogEventActionParticipantVolume":
      return {
        type: "setVideoChatParticipantVolume",
        participant: peerToChatId(a.participant.peer),
      };
    case "channelAdminLogEventActionChangeHistoryTTL":
      return {
        type: "setHistoryTtl",
        previous: a.prev_value,
        new: a.new_value,
      };
    case "channelAdminLogEventActionParticipantJoinByRequest":
      return cleanObject({
        type: "joinByRequest",
        inviteLink: Api.is("chatInviteExported", a.invite) ? constructInviteLink(a.invite, getPeer) : undefined,

        approvedBy: Number(a.approved_by),
      });
    case "channelAdminLogEventActionToggleNoForwards":
      return {
        type: "toggleContentProtection",
        isEnabled: a.new_value,
      };
    case "channelAdminLogEventActionSendMessage":
      return {
        type: "sendMessage",
        message: await constructMessage(a.message, getPeer, getMessage, getStickerSetName, getCommunity, false),
      };
    case "channelAdminLogEventActionChangeAvailableReactions":
      return {
        type: "setAvailableReactions",
        previous: constructAvailableReactions(a.prev_value),
        new: constructAvailableReactions(a.new_value),
      };
    case "channelAdminLogEventActionChangeUsernames":
      return {
        type: "setUsernames",
        previous: a.prev_value,
        new: a.new_value,
      };
    case "channelAdminLogEventActionToggleForum":
      return {
        type: "toggleTopics",
        isEnabled: a.new_value,
      };
    case "channelAdminLogEventActionCreateTopic":
      return {
        type: "createTopic",
        topic: constructTopic2(a.topic, getPeer),
      };
    case "channelAdminLogEventActionEditTopic":
      return {
        type: "editTopic",
        previous: constructTopic2(a.prev_topic, getPeer),
        new: constructTopic2(a.new_topic, getPeer),
      };
    case "channelAdminLogEventActionDeleteTopic":
      return {
        type: "deleteTopic",
        topic: constructTopic2(a.topic, getPeer),
      };
    case "channelAdminLogEventActionPinTopic":
      return cleanObject({
        type: "pinTopic",
        previous: a.prev_topic ? constructTopic2(a.prev_topic, getPeer) : undefined,
        new: a.new_topic ? constructTopic2(a.new_topic, getPeer) : undefined,
      });
    case "channelAdminLogEventActionToggleAntiSpam":
      return {
        type: "toggleAntispam",
        isEnabled: a.new_value,
      };
    case "channelAdminLogEventActionChangeEmojiStickerSet":
      return cleanObject({
        type: "setEmojiStickerSet",
        previous: Api.is("inputStickerSetShortName", a.prev_stickerset) ? a.prev_stickerset.short_name : undefined,
        new: Api.is("inputStickerSetShortName", a.new_stickerset) ? a.new_stickerset.short_name : undefined,
      });
    case "channelAdminLogEventActionToggleSignatureProfiles":
      return {
        type: "toggleSignatures",
        isEnabled: a.new_value,
      };
    case "channelAdminLogEventActionToggleAutotranslation":
      return {
        type: "toggleAutomaticTranslation",
        isEnabled: a.new_value,
      };
    case "channelAdminLogEventActionParticipantEditRank":
      return cleanObject({
        type: "editChatMemberTag",
        userId: Number(a.user_id),
        previous: a.prev_rank || undefined,
        newTag: a.new_rank || undefined,
      });
    default:
      return {
        type: "unsupported",
      };
  }
}
