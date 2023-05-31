import * as types from "../tl/2_types.ts";

export declare namespace ChatPhoto {
  export enum Type {
    Chat = "chat",
    User = "user",
  }

  export interface Base {
    type: Type;
    hasVideo: boolean;
    photoId: bigint;
    strippedThumb?: Uint8Array;
    dcId: number;
  }

  export interface User extends Base {
    type: Type.User;
    personal: boolean;
  }

  export interface Chat extends Base {
    type: Type.Chat;
  }
}

export type ChatPhoto = ChatPhoto.User | ChatPhoto.Chat;

export function constructChatPhoto(photo: types.ChatPhoto): ChatPhoto.Chat;
export function constructChatPhoto(photo: types.UserProfilePhoto): ChatPhoto.User;
export function constructChatPhoto(photo: types.UserProfilePhoto | types.ChatPhoto): ChatPhoto {
  const { hasVideo = false, photoId, strippedThumb, dcId } = photo;
  if (photo instanceof types.ChatPhoto) {
    return {
      type: ChatPhoto.Type.Chat,
      hasVideo,
      photoId,
      strippedThumb,
      dcId,
    };
  } else {
    return {
      type: ChatPhoto.Type.User,
      personal: photo.personal || false,
      hasVideo,
      photoId,
      strippedThumb,
      dcId,
    };
  }
}
