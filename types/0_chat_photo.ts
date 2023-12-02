import { types } from "../2_tl.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType, ThumbnailSource } from "./0__file_id.ts";

export declare namespace ChatPhoto {
  export interface Base {
    /** A file identifier that can be used to download or reuse the small version of the chat photo (160x160). */
    smallFileId: string;
    /** A file identifier that can be used to identify the small version of the chat photo (160x160). */
    smallFileUniqueId: string;
    /** A file identifier that can be used to download or reuse the big version of the chat photo (640x640). */
    bigFileId: string;
    /** A file identifier that can be used to identify the big version of the chat photo (640x640). */
    bigFileUniqueId: string;
    /** Whether the chat photo is animated. */
    hasVideo: boolean;
  }

  export interface User extends Base {
    /** Differentiates between user profile photos. */
    personal: true;
  }

  export type Chat = Base;
}

/** This object represents a chat photo. */
export type ChatPhoto = ChatPhoto.User | ChatPhoto.Chat;

export function constructChatPhoto(photo: types.ChatPhoto, chatId: number, chatAccessHash: bigint): ChatPhoto.Chat;
export function constructChatPhoto(photo: types.UserProfilePhoto, chatId: number, chatAccessHash: bigint): ChatPhoto.User;
export function constructChatPhoto(photo: types.UserProfilePhoto | types.ChatPhoto, chatId: number, chatAccessHash: bigint): ChatPhoto {
  const smallFileId = new FileID(null, null, FileType.ChatPhoto, photo.dc_id, {
    mediaId: photo.photo_id,
    thumbnailSource: ThumbnailSource.ChatPhotoSmall,
    chatId,
    chatAccessHash,
    accessHash: 0n,
    volumeId: 0n,
    localId: 0,
  }).encode();
  const smallFileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: photo.photo_id }).encode();
  const bigFileId = new FileID(null, null, FileType.ChatPhoto, photo.dc_id, {
    mediaId: photo.photo_id,
    thumbnailSource: ThumbnailSource.ChatPhotoBig,
    chatId,
    chatAccessHash,
    accessHash: 0n,
    volumeId: 0n,
    localId: 0,
  }).encode();
  const bigFileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: photo.photo_id }).encode();
  if (photo instanceof types.ChatPhoto) {
    return {
      smallFileId,
      smallFileUniqueId,
      bigFileId,
      bigFileUniqueId,
      hasVideo: photo.has_video || false,
    };
  } else {
    return {
      personal: photo.personal ? true : undefined,
      smallFileId,
      smallFileUniqueId,
      bigFileId,
      bigFileUniqueId,
      hasVideo: photo.has_video || false,
    };
  }
}
