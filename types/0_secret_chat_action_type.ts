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

import type { SecretChats } from "../2_tl.ts";

/** @unlisted */
export interface SecretSecretChatActionTypeTyping {
  type: "typing";
}

/** @unlisted */
export interface SecretChatActionTypeUploadingPhoto {
  type: "uploadingPhoto";
}

/** @unlisted */
export interface SecretChatActionTypeRecordingVideo {
  type: "recordingVideo";
}

/** @unlisted */
export interface SecretChatActionTypeUploadingVideo {
  type: "uploadingVideo";
}

/** @unlisted */
export interface SecretChatActionTypeRecordingVoice {
  type: "recordingVoice";
}

/** @unlisted */
export interface SecretChatActionTypeUploadingAudio {
  type: "uploadingAudio";
}

/** @unlisted */
export interface SecretChatActionTypeUploadingDocument {
  type: "uploadingDocument";
}

/** @unlisted */
export interface SecretChatActionTypeChoosingLocation {
  type: "choosingLocation";
}

/** @unlisted */
export interface SecretChatActionTypeRecordingVideoNote {
  type: "recordingVideoNote";
}

/** @unlisted */
export interface SecretChatActionTypeUploadingTypeVideoNote {
  type: "uploadingVideoNote";
  progress?: number;
}

/** @unlisted */
export interface SecretChatActionTypeCancel {
  type: "cancel";
}

/** A type of a secret chat action. */
export type SecretChatActionType =
  | SecretSecretChatActionTypeTyping
  | SecretChatActionTypeUploadingPhoto
  | SecretChatActionTypeRecordingVideo
  | SecretChatActionTypeUploadingVideo
  | SecretChatActionTypeRecordingVoice
  | SecretChatActionTypeUploadingAudio
  | SecretChatActionTypeUploadingDocument
  | SecretChatActionTypeChoosingLocation
  | SecretChatActionTypeRecordingVideoNote
  | SecretChatActionTypeUploadingTypeVideoNote
  | SecretChatActionTypeCancel;

export function constructSecretChatActionType(action: SecretChats.SendMessageAction): SecretChatActionType | null {
  switch (action._) {
    case "sendMessageTypingAction":
      return { type: "typing" };
    case "sendMessageCancelAction":
      return { type: "cancel" };
    case "sendMessageRecordVideoAction":
      return { type: "recordingVideoNote" };
    case "sendMessageUploadVideoAction":
      return { type: "uploadingVideo" };
    case "sendMessageRecordAudioAction":
      return { type: "recordingVoice" };
    case "sendMessageUploadAudioAction":
      return { type: "uploadingAudio" };
    case "sendMessageUploadPhotoAction":
      return { type: "uploadingPhoto" };
    case "sendMessageUploadDocumentAction":
      return { type: "uploadingDocument" };
    case "sendMessageGeoLocationAction":
      return { type: "choosingLocation" };
    case "sendMessageRecordRoundAction":
      return { type: "recordingVideoNote" };
    case "sendMessageUploadRoundAction":
      return { type: "uploadingVideoNote" };
  }

  return null;
}
