import * as types from "../tl/2_types.ts";

export enum ChatPhotoType {
  Chat = "chat",
  User = "user",
}

export interface ChatPhotoBase {
  type: ChatPhotoType;
  hasVideo: boolean;
  photoId: bigint;
  strippedThumb?: Uint8Array;
  dcId: number;
}

export interface ChatPhotoUser extends ChatPhotoBase {
  type: ChatPhotoType.User;
  personal: boolean;
}

export interface ChatPhotoChat extends ChatPhotoBase {
  type: ChatPhotoType.Chat;
}

export type ChatPhoto = ChatPhotoUser | ChatPhotoChat;

export function constructChatPhoto(photo: types.ChatPhoto): ChatPhotoChat;
export function constructChatPhoto(photo: types.UserProfilePhoto): ChatPhotoUser;
export function constructChatPhoto(photo: types.UserProfilePhoto | types.ChatPhoto): ChatPhoto {
  const { hasVideo = false, photoId, strippedThumb, dcId } = photo;
  if (photo instanceof types.ChatPhoto) {
    return {
      type: ChatPhotoType.Chat,
      hasVideo,
      photoId,
      strippedThumb,
      dcId,
    };
  } else {
    return {
      type: ChatPhotoType.User,
      personal: photo.personal || false,
      hasVideo,
      photoId,
      strippedThumb,
      dcId,
    };
  }
}
