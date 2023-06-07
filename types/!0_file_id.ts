// Direct port from Pyrogram
import { base64DecodeUrlSafe, base64EncodeUrlSafe } from "../utilities/0_base64.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { rleDecode, rleEncode } from "../utilities/0_rle.ts";
import { TLRawWriter } from "../tl/0_tl_raw_writer.ts";
import { TLRawReader } from "../tl/0_tl_raw_reader.ts";

export enum FileType {
  Thumbnail = 0,
  ChatPhoto = 1,
  Photo = 2,
  Voice = 3,
  Video = 4,
  Document = 5,
  Encrypted = 6,
  Temp = 7,
  Sticker = 8,
  Audio = 9,
  Animation = 10,
  EncryptedThumbnail = 11,
  Wallpaper = 12,
  VideoNote = 13,
  SecureRaw = 14,
  Secure = 15,
  Background = 16,
  DocumentAsFile = 17,
}

const PHOTO_TYPES = [FileType.Thumbnail, FileType.ChatPhoto, FileType.Photo, FileType.EncryptedThumbnail];
const DOCUMENT_TYPES: FileType[] = Object.keys(FileType).map(Number).filter((v) => !isNaN(v)).filter((v) => !PHOTO_TYPES.includes(v));

export enum ThumbnailSource {
  Legacy = 0,
  Thumbnail = 1,
  ChatPhotoSmall = 2,
  ChatPhotoBig = 3,
  StickerSetThumbnail = 4,
}

interface FileIDParams {
  fileReference?: Uint8Array;
  url?: string;
  mediaId?: bigint;
  accessHash?: bigint;
  volumeId?: bigint;
  thumbnailSource?: ThumbnailSource;
  thumbnailFileType?: FileType;
  thumbnailSize?: string;
  secret?: bigint;
  localId?: number;
  chatId?: number;
  chatAccessHash?: bigint;
  stickerSetId?: bigint;
  stickerSetAccessHash?: bigint;
}

const WEB_LOCATION_FLAG = 1 << 24;
const FILE_REFERENCE_FLAG = 1 << 25;

export class FileID {
  static MAJOR = 4;
  static MINOR = 30;
  public readonly major: number;
  public readonly minor: number;

  constructor(major: number | null = FileID.MAJOR, minor: number | null = FileID.MINOR, public readonly fileType: FileType, public readonly dcId: number, public readonly params: FileIDParams) {
    if (major == null) {
      this.major = FileID.MAJOR;
    } else {
      this.major = major;
    }
    if (minor == null) {
      this.minor = FileID.MINOR;
    } else {
      this.minor = minor;
    }
    this.params.thumbnailSize ??= "";
  }

  static decode(fileId: string) {
    const decoded = rleDecode(base64DecodeUrlSafe(fileId));

    const major = decoded[decoded.length - 1];
    let minor: number;
    let buffer: Uint8Array;

    if (major < 4) {
      minor = 0;
      buffer = decoded.slice(0, -1);
    } else {
      minor = decoded[decoded.length - 2];
      buffer = decoded.slice(0, -2);
    }
    const reader = new TLRawReader(buffer);

    let fileType = reader.readInt32();
    const dcId = reader.readInt32();

    const hasWebLocation = Boolean(fileType & WEB_LOCATION_FLAG);
    const hasFileReference = Boolean(fileType & FILE_REFERENCE_FLAG);

    fileType &= ~WEB_LOCATION_FLAG;
    fileType &= ~FILE_REFERENCE_FLAG;

    if (hasWebLocation) {
      const url = reader.readString();
      const accessHash = reader.readInt64();

      return new FileID(major, minor, fileType, dcId, { url, accessHash });
    }

    let fileReference = new Uint8Array();
    if (hasFileReference) {
      fileReference = reader.readBytes();
    }
    const mediaId = reader.readInt64();
    const accessHash = reader.readInt64();

    if (PHOTO_TYPES.includes(fileType)) {
      const volumeId = reader.readInt64();
      let thumbnailSource = 0 as ThumbnailSource;
      if (major >= 4) {
        thumbnailSource = reader.readInt32(false) as ThumbnailSource;
      }

      switch (thumbnailSource) {
        case ThumbnailSource.Legacy: {
          const secret = reader.readInt64();
          const localId = reader.readInt32();

          return new FileID(major, minor, fileType, dcId, { fileReference, mediaId, accessHash, volumeId, thumbnailSource, secret, localId });
        }
        case ThumbnailSource.Thumbnail: {
          const thumbnailFileType = reader.readInt32();
          const thumbnailSize = String.fromCharCode(reader.readInt32());
          const localId = reader.readInt32();

          return new FileID(major, minor, fileType, dcId, { fileReference, mediaId, accessHash, volumeId, thumbnailSource, thumbnailFileType, thumbnailSize, localId });
        }
        case ThumbnailSource.ChatPhotoSmall:
        case ThumbnailSource.ChatPhotoBig: {
          const chatId = Number(reader.readInt64());
          const chatAccessHash = reader.readInt64();
          const localId = reader.readInt32();

          return new FileID(major, minor, fileType, dcId, { fileReference, mediaId, accessHash, volumeId, thumbnailSource, chatId: Number(chatId), chatAccessHash, localId });
        }
        case ThumbnailSource.StickerSetThumbnail: {
          const stickerSetId = reader.readInt64();
          const stickerSetAccessHash = reader.readInt64();
          const localId = reader.readInt32();

          return new FileID(major, minor, fileType, dcId, { fileReference, mediaId, accessHash, volumeId, thumbnailSource, stickerSetId, stickerSetAccessHash, localId });
        }
        default:
          UNREACHABLE();
      }
    } else if (DOCUMENT_TYPES.includes(fileType)) {
      return new FileID(minor, major, fileType, dcId, { fileReference, mediaId, accessHash });
    } else {
      UNREACHABLE();
    }
  }

  encode(major?: number, minor?: number) {
    major ??= this.major;
    minor ??= this.minor;

    const writer = new TLRawWriter();
    let fileType = this.fileType;

    if (this.params.url) {
      fileType |= WEB_LOCATION_FLAG;
    }

    if (this.params.fileReference) {
      fileType |= FILE_REFERENCE_FLAG;
    }

    writer.writeInt32(fileType);
    writer.writeInt32(this.dcId);

    if (this.params.url) {
      writer.writeString(this.params.url);
    }

    if (this.params.fileReference) {
      writer.writeBytes(this.params.fileReference);
    }

    if (this.params.mediaId == undefined || this.params.accessHash == undefined) {
      UNREACHABLE();
    }

    writer.writeInt64(this.params.mediaId);
    writer.writeInt64(this.params.accessHash);

    if (PHOTO_TYPES.includes(this.fileType)) {
      if (this.params.volumeId == undefined || this.params.thumbnailSize == undefined || this.params.localId == undefined) {
        UNREACHABLE();
      }

      writer.writeInt64(this.params.volumeId);

      if (major >= 4) {
        writer.writeInt32(Number(this.params.thumbnailSource));
      }

      switch (this.params.thumbnailSource) {
        case ThumbnailSource.Legacy:
          if (this.params.secret == undefined) {
            UNREACHABLE();
          }

          writer.writeInt64(this.params.secret);
          writer.writeInt32(this.params.localId);
          break;
        case ThumbnailSource.Thumbnail:
          if (this.params.thumbnailFileType == undefined || this.params.thumbnailSize == undefined) {
            UNREACHABLE();
          }

          writer.writeInt32(Number(this.params.thumbnailFileType));
          writer.writeInt32(this.params.thumbnailSize.charCodeAt(0));
          writer.writeInt32(this.params.localId);
          break;
        case ThumbnailSource.ChatPhotoSmall:
        case ThumbnailSource.ChatPhotoBig:
          if (this.params.chatId == undefined || this.params.chatAccessHash == undefined) {
            UNREACHABLE();
          }

          writer.writeInt64(BigInt(this.params.chatId));
          writer.writeInt64(this.params.chatAccessHash);
          writer.writeInt32(this.params.localId);
          break;
        case ThumbnailSource.StickerSetThumbnail:
          if (this.params.stickerSetId == undefined || this.params.stickerSetAccessHash == undefined) {
            UNREACHABLE();
          }

          writer.writeInt64(this.params.stickerSetId);
          writer.writeInt64(this.params.stickerSetAccessHash);
          writer.writeInt32(this.params.localId);
          break;
        default:
          UNREACHABLE();
      }
    } else if (DOCUMENT_TYPES.includes(this.fileType)) {
      writer.writeInt32(minor);
      writer.writeInt32(major);
    } else {
      UNREACHABLE();
    }

    writer.write(new Uint8Array([minor, major]));

    return base64EncodeUrlSafe(rleEncode(writer.buffer));
  }
}

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

  static decode(fileId: string) {
    const reader = new TLRawReader(rleDecode(base64DecodeUrlSafe(fileId)));
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

  encode() {
    const writer = new TLRawWriter();
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
