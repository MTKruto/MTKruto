import * as types from "../tl/2_types.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType, ThumbnailSource } from "./!0_file_id.ts";

export declare namespace ChatPhoto {
  export interface Base {
    smallFileId: string;
    smallFileUniqueId: string;
    bigFileId: string;
    bigFileUniqueId: string;
  }

  export interface User extends Base {
    personal: boolean;
  }

  export type Chat = Base;
}

export type ChatPhoto = ChatPhoto.User | ChatPhoto.Chat;

export function constructChatPhoto(photo: types.ChatPhoto, chatId: number, chatAccessHash: bigint): ChatPhoto.Chat;
export function constructChatPhoto(photo: types.UserProfilePhoto, chatId: number, chatAccessHash: bigint): ChatPhoto.User;
export function constructChatPhoto(photo: types.UserProfilePhoto | types.ChatPhoto, chatId: number, chatAccessHash: bigint): ChatPhoto {
  const smallFileId = new FileID(null, null, FileType.ChatPhoto, photo.dcId, {
    mediaId: photo.photoId,
    thumbnailSource: ThumbnailSource.ChatPhotoSmall,
    chatId: BigInt(chatId),
    chatAccessHash,
    accessHash: 0n,
    volumeId: 0n,
    localId: 0,
  }).encode();
  const smallFileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: photo.photoId }).encode();
  const bigFileId = new FileID(null, null, FileType.ChatPhoto, photo.dcId, {
    mediaId: photo.photoId,
    thumbnailSource: ThumbnailSource.ChatPhotoBig,
    chatId: BigInt(chatId),
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
    };
  } else {
    return {
      personal: photo.personal || false,
      smallFileId,
      smallFileUniqueId,
      bigFileId,
      bigFileUniqueId,
    };
  }
}
