/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

import { unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { base64DecodeUrlSafe, base64EncodeUrlSafe, rleDecode, rleEncode } from "../1_utilities.ts";
import { TLReader, TLWriter, types } from "../2_tl.ts";

const NEXT_VERSION = 53;
const PERSISTENT_ID_VERSION = 4;
const WEB_LOCATION_FLAG = 1 << 24;
const FILE_REFERENCE_FLAG = 1 << 25;

export enum FileType {
  Thumbnail,
  ProfilePhoto,
  Photo,
  VoiceNote,
  Video,
  Document,
  Encrypted,
  Temp,
  Sticker,
  Audio,
  Animation,
  EncryptedThumbnail,
  Wallpaper,
  VideoNote,
  SecureDecrypted,
  SecureEncrypted,
  Background,
  DocumentAsFile,
  Ringtone,
  CallLog,
  PhotoStory,
  VideoStory,
  Size,
  None,
}

enum FileTypeClass {
  Photo,
  Document,
  Secure,
  Encrypted,
  Temp,
}

export enum PhotoSourceType {
  Legacy,
  Thumbnail,
  ChatPhotoSmall,
  ChatPhotoBig,
  StickerSetThumbnail,
  FullLegacy,
  ChatPhotoSmallLegacy,
  ChatPhotoBigLegacy,
  StickerSetThumbnailLegacy,
  StickerSetThumbnailVersion,
}

type PhotoSource =
  | { type: PhotoSourceType.Legacy; secret: bigint }
  | { type: PhotoSourceType.Thumbnail; fileType: FileType; thumbnailType: number }
  | { type: PhotoSourceType.ChatPhotoSmall; chatId: bigint; chatAccessHash: bigint }
  | { type: PhotoSourceType.ChatPhotoBig; chatId: bigint; chatAccessHash: bigint }
  | { type: PhotoSourceType.StickerSetThumbnail; stickerSetId: bigint; stickerSetAccessHash: bigint }
  | { type: PhotoSourceType.FullLegacy; volumeId: bigint; localId: number; secret: bigint }
  | { type: PhotoSourceType.ChatPhotoSmallLegacy; volumeId: bigint; localId: number }
  | { type: PhotoSourceType.ChatPhotoBigLegacy; volumeId: bigint; localId: number }
  | { type: PhotoSourceType.StickerSetThumbnailLegacy; volumeId: bigint; localId: number }
  | { type: PhotoSourceType.StickerSetThumbnailVersion; version: number };
function deserializePhotoSource(reader: TLReader): PhotoSource {
  const type = reader.readInt32() as PhotoSourceType;
  switch (type) {
    case PhotoSourceType.Legacy:
      return { type, secret: reader.readInt64() };
    case PhotoSourceType.Thumbnail:
      return { type, fileType: reader.readInt32(), thumbnailType: reader.readInt32() };
    case PhotoSourceType.ChatPhotoSmall:
    case PhotoSourceType.ChatPhotoBig: {
      const chatId = reader.readInt64();
      const chatAccessHash = reader.readInt64();
      return { type, chatId, chatAccessHash };
    }
    case PhotoSourceType.StickerSetThumbnail: {
      const stickerSetId = reader.readInt64();
      const stickerSetAccessHash = reader.readInt64();
      return { type, stickerSetId, stickerSetAccessHash };
    }
    case PhotoSourceType.FullLegacy: {
      const volumeId = reader.readInt64();
      const localId = reader.readInt32();
      const secret = reader.readInt64();
      return { type, volumeId, localId, secret };
    }
    case PhotoSourceType.ChatPhotoSmallLegacy:
    case PhotoSourceType.ChatPhotoBigLegacy:
    case PhotoSourceType.StickerSetThumbnailLegacy: {
      const volumeId = reader.readInt64();
      const localId = reader.readInt32();
      return { type, volumeId, localId };
    }
    case PhotoSourceType.StickerSetThumbnailVersion:
      return { type, version: reader.readInt32() };
  }
}
function serializePhotoSource(photoSource: PhotoSource, writer: TLWriter) {
  writer.writeInt32(photoSource.type);
  switch (photoSource.type) {
    case PhotoSourceType.Legacy:
      writer.writeInt64(photoSource.secret);
      break;
    case PhotoSourceType.Thumbnail:
      writer.writeInt32(photoSource.fileType);
      writer.writeInt32(photoSource.thumbnailType);
      break;
    case PhotoSourceType.ChatPhotoSmall:
    case PhotoSourceType.ChatPhotoBig:
      writer.writeInt64(photoSource.chatId);
      writer.writeInt64(photoSource.chatAccessHash);
      break;
    case PhotoSourceType.StickerSetThumbnail:
      writer.writeInt64(photoSource.stickerSetId);
      writer.writeInt64(photoSource.stickerSetAccessHash);
      break;
    case PhotoSourceType.FullLegacy:
      writer.writeInt64(photoSource.volumeId);
      writer.writeInt32(photoSource.localId);
      writer.writeInt64(photoSource.secret);
      break;
    case PhotoSourceType.ChatPhotoSmallLegacy:
    case PhotoSourceType.ChatPhotoBigLegacy:
    case PhotoSourceType.StickerSetThumbnailLegacy:
      writer.writeInt64(photoSource.volumeId);
      writer.writeInt32(photoSource.localId);
      break;
    case PhotoSourceType.StickerSetThumbnailVersion:
      writer.writeInt32(photoSource.version);
      break;
    default:
      unreachable();
  }
}
function getPhotoSourceCompareType(source: PhotoSource) {
  switch (source.type) {
    case PhotoSourceType.Legacy:
      break;
    case PhotoSourceType.Thumbnail: {
      const type = source.thumbnailType;
      if (!(0 <= type && type <= 127)) {
        unreachable();
      }
      if (type == "a".charCodeAt(0)) {
        return 0;
      }
      if (type == "c".charCodeAt(0)) {
        return 1;
      }
      return type + 5;
    }
    case PhotoSourceType.ChatPhotoSmall:
      return 0;
    case PhotoSourceType.ChatPhotoBig:
      return 1;
    case PhotoSourceType.StickerSetThumbnail:
      break;
    case PhotoSourceType.FullLegacy:
    case PhotoSourceType.ChatPhotoSmallLegacy:
    case PhotoSourceType.ChatPhotoBigLegacy:
    case PhotoSourceType.StickerSetThumbnailLegacy:
      return 3;
    case PhotoSourceType.StickerSetThumbnailVersion:
      return 2;
    default:
      break;
  }
  unreachable();
}
function writePhotoSourceUniqueId(photoSource: PhotoSource, writer: TLWriter) {
  const compareType = getPhotoSourceCompareType(photoSource);
  if (compareType != 2 && compareType != 3) {
    writer.write(new Uint8Array([compareType]));
    return;
  }

  if (compareType == 2) {
    writer.write(new Uint8Array([0x02]));
  }
  writer.writeInt64("volumeId" in photoSource ? photoSource.volumeId : "stickerSetId" in photoSource ? photoSource.stickerSetId : unreachable());
  writer.writeInt32("localId" in photoSource ? photoSource.localId : "version" in photoSource ? photoSource.version : unreachable());
}

type FileLocation =
  | { type: "web"; url: string; accessHash: bigint }
  | { type: "photo"; id: bigint; accessHash: bigint; source: PhotoSource }
  | { type: "common"; id: bigint; accessHash: bigint };

export interface FileId {
  type: FileType;
  dcId: number;
  fileReference?: Uint8Array;
  location: FileLocation;
}

function getFileTypeClass(fileType: FileType) {
  switch (fileType) {
    case FileType.Photo:
    case FileType.ProfilePhoto:
    case FileType.Thumbnail:
    case FileType.EncryptedThumbnail:
    case FileType.Wallpaper:
    case FileType.PhotoStory:
      return FileTypeClass.Photo;
    case FileType.Video:
    case FileType.VoiceNote:
    case FileType.Document:
    case FileType.Sticker:
    case FileType.Audio:
    case FileType.Animation:
    case FileType.VideoNote:
    case FileType.Background:
    case FileType.DocumentAsFile:
    case FileType.Ringtone:
    case FileType.CallLog:
    case FileType.VideoStory:
      return FileTypeClass.Document;
    case FileType.SecureDecrypted:
    case FileType.SecureEncrypted:
      return FileTypeClass.Secure;
    case FileType.Encrypted:
      return FileTypeClass.Encrypted;
    case FileType.Temp:
      return FileTypeClass.Temp;
    case FileType.None:
    case FileType.Size:
    default:
      unreachable();
  }
}

function isWeb(fileType: FileType) {
  return !!(fileType & WEB_LOCATION_FLAG);
}

function hasFileReference(fileType: FileType) {
  return !!(fileType & FILE_REFERENCE_FLAG);
}

export function deserializeFileId(fileId: string): FileId {
  const reader = new TLReader(rleDecode(base64DecodeUrlSafe(fileId)));
  if (reader.buffer[reader.buffer.length - 1] != PERSISTENT_ID_VERSION) {
    throw new InputError("Unsupported file ID format");
  }
  const originalType = reader.readInt32();
  const type = ((originalType & ~WEB_LOCATION_FLAG) & ~FILE_REFERENCE_FLAG) as FileType;
  const dcId = reader.readInt32();

  if (isWeb(originalType)) {
    const url = reader.readString();
    const accessHash = reader.readInt64();
    return { type, dcId, location: { type: "web", url, accessHash } };
  }

  const fileReference = hasFileReference(originalType) ? reader.readBytes() : undefined;
  const id = reader.readInt64();
  const accessHash = reader.readInt64();

  if (getFileTypeClass(type) == FileTypeClass.Photo) {
    const source = deserializePhotoSource(reader);
    return { type, dcId, fileReference, location: { type: "photo", id, accessHash, source } };
  } else {
    return { type, dcId, fileReference, location: { type: "common", id, accessHash } };
  }
}

export function serializeFileId(fileId: FileId): string {
  const writer = new TLWriter();
  let type = fileId.type;
  if (fileId.fileReference) {
    type |= FILE_REFERENCE_FLAG;
  }
  if (fileId.location.type == "web") {
    type |= WEB_LOCATION_FLAG;
  }
  writer.writeInt32(type);
  writer.writeInt32(fileId.dcId);

  if (fileId.location.type == "web") {
    writer.writeString(fileId.location.url);
    writer.writeInt64(fileId.location.accessHash);
  } else {
    if (fileId.fileReference) {
      writer.writeBytes(fileId.fileReference);
    }

    writer.writeInt64(fileId.location.id);
    writer.writeInt64(fileId.location.accessHash);

    if (fileId.location.type == "photo") {
      serializePhotoSource(fileId.location.source, writer);
    }
  }

  writer.write(new Uint8Array([NEXT_VERSION - 1, PERSISTENT_ID_VERSION]));
  return base64EncodeUrlSafe(rleEncode(writer.buffer));
}

export function toUniqueFileId(fileId: FileId): string {
  const writer = new TLWriter();
  const type = fileId.location.type == "web" ? 0 : (getFileTypeClass(fileId.type) + 1);
  writer.writeInt32(type);
  if (fileId.location.type == "web") {
    writer.writeString(fileId.location.url);
  } else if (fileId.location.type == "common") {
    writer.writeInt64(fileId.location.id);
  } else {
    switch (fileId.location.source.type) {
      case PhotoSourceType.Legacy:
      case PhotoSourceType.StickerSetThumbnail:
        unreachable();
        /* falls through */
      case PhotoSourceType.FullLegacy:
      case PhotoSourceType.ChatPhotoSmallLegacy:
      case PhotoSourceType.ChatPhotoBigLegacy:
      case PhotoSourceType.StickerSetThumbnailLegacy:
        writer.writeInt64(fileId.location.id);
        writePhotoSourceUniqueId(fileId.location.source, writer);
        break;
      case PhotoSourceType.ChatPhotoSmall:
      case PhotoSourceType.ChatPhotoBig:
      case PhotoSourceType.Thumbnail:
        writer.writeInt64(fileId.location.id);
        writePhotoSourceUniqueId(fileId.location.source, writer);
        break;
      case PhotoSourceType.StickerSetThumbnailVersion:
        writePhotoSourceUniqueId(fileId.location.source, writer);
        break;
    }
  }
  return base64EncodeUrlSafe(rleEncode(writer.buffer));
}

export function getPhotoFileId(photo: types.Photo): { fileId: string; fileUniqueId: string } {
  const sizes = photo.sizes
    .map((v) => {
      if (v instanceof types.PhotoSizeProgressive) {
        return new types.PhotoSize({ type: v.type, w: v.w, h: v.h, size: Math.max(...v.sizes) });
      } else {
        return v;
      }
    })
    .filter((v): v is types.PhotoSize => v instanceof types.PhotoSize)
    .sort((a, b) => a.size - b.size);
  const largest = sizes.slice(-1)[0];
  const { dc_id: dcId, id, access_hash: accessHash, file_reference: fileReference } = photo;
  const fileId: FileId = {
    type: FileType.Photo,
    dcId,
    fileReference,
    location: {
      type: "photo",
      id,
      accessHash,
      source: {
        type: PhotoSourceType.Thumbnail,
        fileType: FileType.Photo,
        thumbnailType: largest.type.charCodeAt(0),
      },
    },
  };
  return { fileId: serializeFileId(fileId), fileUniqueId: toUniqueFileId(fileId) };
}
