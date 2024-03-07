import { base64DecodeUrlSafe, base64EncodeUrlSafe, rleDecode, rleEncode, UNREACHABLE } from "../1_utilities.ts";
import { TLReader, TLWriter } from "../2_tl.ts";

export enum FileUniqueType {
  Web = 0,
  Photo = 1,
  Document = 2,
  Secure = 3,
  Encrypted = 4,
  Temp = 5,
}

interface FileUniqueParams {
  url?: string;
  mediaId?: bigint;
  volumeId?: bigint;
  localId?: number;
}

export class FileUniqueID {
  constructor(private readonly fileUniqueType: FileUniqueType, private readonly params: FileUniqueParams) {}

  static decode(fileId: string): FileUniqueID {
    const reader = new TLReader(rleDecode(base64DecodeUrlSafe(fileId)));
    const fileUniqueType = reader.readInt32() as FileUniqueType;

    switch (fileUniqueType) {
      case FileUniqueType.Web: {
        const url = reader.readString();

        return new FileUniqueID(fileUniqueType, { url });
      }
      case FileUniqueType.Photo: {
        const volumeId = reader.readInt64();
        const localId = reader.readInt32();

        return new FileUniqueID(fileUniqueType, { volumeId, localId });
      }
      case FileUniqueType.Document: {
        const mediaId = reader.readInt64();

        return new FileUniqueID(fileUniqueType, { mediaId });
      }
      default:
        UNREACHABLE();
    }
  }

  encode(): string {
    const writer = new TLWriter();
    writer.writeInt32(this.fileUniqueType);

    switch (this.fileUniqueType) {
      case FileUniqueType.Web:
        if (this.params.url == undefined) {
          UNREACHABLE();
        }

        writer.writeString(this.params.url);
        break;
      case FileUniqueType.Photo:
        if (this.params.volumeId == undefined || this.params.localId == undefined) {
          UNREACHABLE();
        }

        writer.writeInt64(this.params.volumeId);
        writer.writeInt32(this.params.localId);
        break;
      case FileUniqueType.Document:
        if (this.params.mediaId == undefined) {
          UNREACHABLE();
        }

        writer.writeInt64(this.params.mediaId);
        break;
      default:
        UNREACHABLE();
    }

    return base64EncodeUrlSafe(rleEncode(writer.buffer));
  }
}

// start rerite

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
      UNREACHABLE();
  }
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
      UNREACHABLE();
  }
}

function isWeb(fileType: FileType) {
  return !!(fileType & WEB_LOCATION_FLAG);
}

function hasFileReference(fileType: FileType) {
  return !!(fileType && FILE_REFERENCE_FLAG);
}

export function deserializeFileId(fileId: string): FileId {
  const reader = new TLReader(rleDecode(base64DecodeUrlSafe(fileId)));
  if (reader.buffer[reader.buffer.length - 1] != PERSISTENT_ID_VERSION) {
    throw new Error("Unsupported version");
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

export function serializeFileId(fileId: FileId) {
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
