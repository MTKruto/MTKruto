import * as types from "../tl/2_types.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType, ThumbnailSource } from "./!0_file_id.ts";

export declare namespace ChatPhoto {
  export interface Base {
    /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    smallFileId: string;
    /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    smallFileUniqueId: string;
    /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    bigFileId: string;
    /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    bigFileUniqueId: string;
    hasVideo: boolean;
  }

  export interface User extends Base {
    personal: boolean;
  }

  export type Chat = Base;
}

/** This object represents a chat photo. */
export type ChatPhoto = ChatPhoto.User | ChatPhoto.Chat;

export function constructChatPhoto(photo: types.ChatPhoto, chatId: number, chatAccessHash: bigint): ChatPhoto.Chat;
export function constructChatPhoto(photo: types.UserProfilePhoto, chatId: number, chatAccessHash: bigint): ChatPhoto.User;
export function constructChatPhoto(photo: types.UserProfilePhoto | types.ChatPhoto, chatId: number, chatAccessHash: bigint): ChatPhoto {
  const smallFileId = new FileID(null, null, FileType.ChatPhoto, photo.dcId, {
    mediaId: photo.photoId,
    thumbnailSource: ThumbnailSource.ChatPhotoSmall,
    chatId,
    chatAccessHash,
    accessHash: 0n,
    volumeId: 0n,
    localId: 0,
  }).encode();
  const smallFileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: photo.photoId }).encode();
  const bigFileId = new FileID(null, null, FileType.ChatPhoto, photo.dcId, {
    mediaId: photo.photoId,
    thumbnailSource: ThumbnailSource.ChatPhotoBig,
    chatId,
    chatAccessHash,
    accessHash: 0n,
    volumeId: 0n,
    localId: 0,
  }).encode();
  const bigFileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: photo.photoId }).encode();
  if (photo instanceof types.ChatPhoto) {
    return {
      smallFileId,
      smallFileUniqueId,
      bigFileId,
      bigFileUniqueId,
      hasVideo: photo.hasVideo || false,
    };
  } else {
    return {
      personal: photo.personal || false,
      smallFileId,
      smallFileUniqueId,
      bigFileId,
      bigFileUniqueId,
      hasVideo: photo.hasVideo || false,
    };
  }
}
