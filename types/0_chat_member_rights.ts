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

import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";

/** The rights of a chat member. */
export interface ChatMemberRights {
  /** Whether messages are allowed to be sent. */
  canSendMessages?: boolean;
  /** Whether audio files are allowed to be sent. */
  canSendAudio?: boolean;
  /** Whether files are allowed to be sent. */
  canSendDocuments?: boolean;
  /** Whether photos are allowed to be sent. */
  canSendPhotos?: boolean;
  /** Whether videos are allowed to be sent. */
  canSendVideos?: boolean;
  /** Whether video notes are allowed to be sent. */
  canSendVideoNotes?: boolean;
  /** Whether voice messages are allowed to be sent. */
  canSendVoice?: boolean;
  /** Whether polls are allowed to be sent. */
  canSendPolls?: boolean;
  /** Whether stickers are allowed to be sent. */
  canSendStickers?: boolean;
  /** Whether animations are allowed to be sent. */
  canSendAnimations?: boolean;
  /** Whether games are allowed to be sent. */
  canSendGames?: boolean;
  /** Whether inline bot results are allowed to be sent. */
  canSendInlineBotResults?: boolean;
  /** Whether it is allowed to add web page previews. */
  canAddWebPagePreviews?: boolean;
  /** Whether reactions are allowed to be sent. */
  canMakeReactions?: boolean;
  /** Whether the member can change their own tag. */
  canEditMemberTag?: boolean;
  /** Whether it is allowed to change the chat info. Ignored for supergroups. */
  canChangeInfo?: boolean;
  /** Whether it is allowed to invite users. */
  canInviteUsers?: boolean;
  /** Whether it is allowed to pin messages. */
  canPinMessages?: boolean;
  /** Whether it is allowed to manage topics. */
  canManageTopics?: boolean;
}

export function constructChatMemberRights(rights: Api.chatBannedRights): ChatMemberRights {
  const canSendMedia = !rights.send_media;

  return cleanObject({
    canSendMessages: !(rights.send_plain || rights.send_messages),
    canSendAudio: canSendMedia && !rights.send_audios,
    canSendDocuments: canSendMedia && !rights.send_docs,
    canSendPhotos: canSendMedia && !rights.send_photos,
    canSendVideos: canSendMedia && !rights.send_videos,
    canSendVideoNotes: canSendMedia && !rights.send_roundvideos,
    canSendVoice: canSendMedia && !rights.send_voices,
    canSendPolls: !rights.send_polls,
    canSendStickers: !rights.send_stickers,
    canSendAnimations: !rights.send_gifs || undefined,
    canSendGames: !rights.send_games || undefined,
    canSendInlineBotResults: !rights.send_inline || undefined,
    canAddWebPagePreviews: !rights.embed_links || undefined,
    canMakeReactions: !rights.send_reactions || undefined,
    canEditMemberTag: !rights.edit_rank || undefined,
    canChangeInfo: !rights.change_info || undefined,
    canInviteUsers: !rights.invite_users || undefined,
    canPinMessages: !rights.pin_messages || undefined,
    canManageTopics: !rights.manage_topics || undefined,
  });
}

export function chatMemberRightsToTlObject(rights?: ChatMemberRights, until?: number): Api.chatBannedRights {
  return {
    _: "chatBannedRights",
    until_date: until ?? 0,
    send_plain: rights?.canSendMessages === false || undefined,
    send_audios: rights?.canSendAudio === false || undefined,
    send_docs: rights?.canSendDocuments === false || undefined,
    send_photos: rights?.canSendPhotos === false || undefined,
    send_videos: rights?.canSendVideos === false || undefined,
    send_roundvideos: rights?.canSendVideoNotes === false || undefined,
    send_voices: rights?.canSendVoice === false || undefined,
    send_polls: rights?.canSendPolls === false || undefined,
    send_stickers: rights?.canSendStickers === false || undefined,
    send_gifs: rights?.canSendAnimations === false || undefined,
    send_games: rights?.canSendGames === false || undefined,
    send_inline: rights?.canSendInlineBotResults === false || undefined,
    embed_links: rights?.canAddWebPagePreviews === false || undefined,
    send_reactions: rights?.canMakeReactions === false || undefined,
    edit_rank: rights?.canEditMemberTag === false || undefined,
    change_info: rights?.canChangeInfo === false || undefined,
    invite_users: rights?.canInviteUsers === false || undefined,
    pin_messages: rights?.canPinMessages === false || undefined,
    manage_topics: rights?.canManageTopics === false || undefined,
  };
}
