import { cleanObject } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { FileId, FileType, PhotoSourceType, serializeFileId, toUniqueFileId } from "./_file_id.ts";

/** @unlisted */
export interface _ChatPhotoBase {
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
  strippedThumbnail?: Uint8Array;
}

/** @unlisted */
export interface ChatPhotoUser extends _ChatPhotoBase {
  /** Differentiates between user profile photos. */
  personal: true;
}

/** @unlisted */
export type ChatPhotoChat = _ChatPhotoBase;

/** A chat photo. */
export type ChatPhoto = ChatPhotoUser | ChatPhotoChat;

export function constructChatPhoto(photo: types.ChatPhoto, chatId: number, chatAccessHash: bigint): ChatPhotoChat;
export function constructChatPhoto(photo: types.UserProfilePhoto, chatId: number, chatAccessHash: bigint): ChatPhotoUser;
export function constructChatPhoto(photo: types.UserProfilePhoto | types.ChatPhoto, chatId: number, chatAccessHash: bigint): ChatPhoto {
  const smallFileId_: FileId = {
    type: FileType.ProfilePhoto,
    dcId: photo.dc_id,
    location: { type: "photo", id: photo.photo_id, accessHash: 0n, source: { type: PhotoSourceType.ChatPhotoSmall, chatId: BigInt(chatId), chatAccessHash } },
  };
  const smallFileId = serializeFileId(smallFileId_);
  const smallFileUniqueId = toUniqueFileId(smallFileId_);

  const bigFileId_: FileId = {
    type: FileType.ProfilePhoto,
    dcId: photo.dc_id,
    location: { type: "photo", id: photo.photo_id, accessHash: 0n, source: { type: PhotoSourceType.ChatPhotoBig, chatId: BigInt(chatId), chatAccessHash } },
  };
  const bigFileId = serializeFileId(bigFileId_);
  const bigFileUniqueId = toUniqueFileId(bigFileId_);

  if (photo instanceof types.ChatPhoto) {
    return cleanObject({
      smallFileId,
      smallFileUniqueId,
      bigFileId,
      bigFileUniqueId,
      hasVideo: photo.has_video || false,
      strippedThumbnail: photo.stripped_thumb,
    });
  } else {
    return cleanObject({
      personal: photo.personal ? true : undefined,
      smallFileId,
      smallFileUniqueId,
      bigFileId,
      bigFileUniqueId,
      hasVideo: photo.has_video || false,
      strippedThumbnail: photo.stripped_thumb,
    });
  }
}
