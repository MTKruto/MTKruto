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

import type { Api } from "../2_tl.ts";

/** @unlisted */
export interface ChatActionTypeTyping {
  type: "typing";
}

/** @unlisted */
export interface ChatActionTypeUploadingPhoto {
  type: "uploadingPhoto";
  progress?: number;
}

/** @unlisted */
export interface ChatActionTypeRecordingVideo {
  type: "recordingVideo";
}

/** @unlisted */
export interface ChatActionTypeUploadingVideo {
  type: "uploadingVideo";
  progress?: number;
}

/** @unlisted */
export interface ChatActionTypeRecordingVoice {
  type: "recordingVoice";
}

/** @unlisted */
export interface ChatActionTypeUploadingAudio {
  type: "uploadingAudio";
  progress?: number;
}

/** @unlisted */
export interface ChatActionTypeUploadingDocument {
  type: "uploadingDocument";
  progress?: number;
}

/** @unlisted */
export interface ChatActionTypeChoosingSticker {
  type: "choosingSticker";
}

/** @unlisted */
export interface ChatActionTypeChoosingLocation {
  type: "choosingLocation";
}

/** @unlisted */
export interface ChatActionTypeRecordingVideoNote {
  type: "recordingVideoNote";
}

/** @unlisted */
export interface ChatActionTypeUploadingTypeVideoNote {
  type: "uploadingVideoNote";
  progress?: number;
}

/** @unlisted */
export interface ChatActionTypePlayingGame {
  type: "playingGame";
}

/** @unlisted */
export interface ChatActionTypeCancel {
  type: "cancel";
}

/** A type of a chat action. */
export type ChatActionType =
  | ChatActionTypeTyping
  | ChatActionTypeUploadingPhoto
  | ChatActionTypeRecordingVideo
  | ChatActionTypeUploadingVideo
  | ChatActionTypeRecordingVoice
  | ChatActionTypeUploadingAudio
  | ChatActionTypeUploadingDocument
  | ChatActionTypeChoosingSticker
  | ChatActionTypeChoosingLocation
  | ChatActionTypeRecordingVideoNote
  | ChatActionTypeUploadingTypeVideoNote
  | ChatActionTypePlayingGame
  | ChatActionTypeCancel;

export function constructChatActionType(action: Api.SendMessageAction): ChatActionType | null {
  switch (action._) {
    case "sendMessageTypingAction":
      return { type: "typing" };
    case "sendMessageCancelAction":
      return { type: "cancel" };
    case "sendMessageRecordVideoAction":
      return { type: "recordingVideoNote" };
    case "sendMessageUploadVideoAction":
      return { type: "uploadingVideo", progress: action.progress };
    case "sendMessageRecordAudioAction":
      return { type: "recordingVoice" };
    case "sendMessageUploadAudioAction":
      return { type: "uploadingAudio", progress: action.progress };
    case "sendMessageUploadPhotoAction":
      return { type: "uploadingPhoto", progress: action.progress };
    case "sendMessageUploadDocumentAction":
      return { type: "uploadingDocument", progress: action.progress };
    case "sendMessageGeoLocationAction":
      return { type: "choosingLocation" };
    case "sendMessageChooseContactAction":
    case "sendMessageGamePlayAction":
      return { type: "playingGame" };
    case "sendMessageRecordRoundAction":
      return { type: "recordingVideoNote" };
    case "sendMessageUploadRoundAction":
      return { type: "uploadingVideoNote", progress: action.progress };
    case "speakingInGroupCallAction":
      break;
    case "sendMessageHistoryImportAction":
      break;
    case "sendMessageChooseStickerAction":
      return { type: "choosingSticker" };
    case "sendMessageEmojiInteraction":
      break;
    case "sendMessageEmojiInteractionSeen":
      break;
    case "sendMessageTextDraftAction":
      break;
  }

  return null;
}
