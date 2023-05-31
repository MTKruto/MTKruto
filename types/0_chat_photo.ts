import * as types from "../tl/2_types.ts";

export enum ChatPhotoType {
  Chat = "chat",
  User = "user",
}

export declare namespace ChatPhoto {
  export interface Base {
    type: ChatPhotoType;
    hasVideo: boolean;
    photoId: bigint;
    strippedThumb?: Uint8Array;
    dcId: number;
  }

  export interface User extends Base {
    type: ChatPhotoType;
    personal: boolean;
  }

  export interface Chat extends Base {
    type: ChatPhotoType;
  }
}

export type ChatPhoto = ChatPhoto.User | ChatPhoto.Chat;

export function constructChatPhoto(photo: types.ChatPhoto): ChatPhoto.Chat;
export function constructChatPhoto(photo: types.UserProfilePhoto): ChatPhoto.User;
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
