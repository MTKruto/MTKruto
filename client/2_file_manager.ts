/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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

import { AssertionError, basename, concat, crypto, decodeHex, delay, extension, extname, ige256Decrypt, ige256Encrypt, isAbsolute, join, MINUTE, SECOND, toFileUrl, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getLogger, getRandomId, intFromBytes, iterateReadableStream, kilobyte, type Logger, megabyte, mod, type Part, PartStream } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { TimeTooBig, TimeTooSmall } from "../3_errors.ts";
import { getDc } from "../3_transport.ts";
import { constructSticker, deserializeFileId, type FileId, type FileSource, FileType, PhotoSourceType, serializeFileId, type Sticker, toUniqueFileId } from "../3_types.ts";
import { DOWNLOAD_MAX_CHUNK_SIZE, STICKER_SET_NAME_TTL } from "../4_constants.ts";
import { FloodWait, StickersetInvalid } from "../4_errors.ts";
import type { _UploadCommon, DownloadParams } from "./0_params.ts";
import { DOWNLOAD_POOL_SIZE, DOWNLOAD_REQUEST_PER_CONNECTION, UPLOAD_REQUEST_PER_CONNECTION } from "./0_utilities.ts";
import type { C } from "./1_types.ts";

export interface EncryptionInformation {
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
}

export class FileManager {
  #c: C;
  #Lupload: Logger;
  static #UPLOAD_MAX_CHUNK_SIZE = 512 * kilobyte;
  static #BIG_FILE_THRESHOLD = 10 * megabyte;

  constructor(c: C) {
    this.#c = c;

    const L = getLogger("FileManager").client(c.id);
    this.#Lupload = L.branch("upload");
  }

  #progressIds = new Set<bigint>();
  getProgressId(): Promise<string> {
    let id: bigint;
    do {
      id = getRandomId();
    } while (id === 0n || this.#progressIds.has(id));
    this.#progressIds.add(id);
    return Promise.resolve(String(id));
  }

  async upload(file: FileSource, params: _UploadCommon | undefined, checkName: null | ((name: string, firstPart?: Uint8Array) => string), allowStream: boolean, encryptionInformation: EncryptionInformation): Promise<{ inputEncryptedFile: Api.InputEncryptedFile; fileSize: number }>;
  async upload(file: FileSource, params?: _UploadCommon, checkName?: null | ((name: string, firstPart?: Uint8Array) => string), allowStream?: boolean, encryptionInformation?: undefined): Promise<Api.InputFile>;
  async upload(file: FileSource, params?: _UploadCommon, checkName?: null | ((name: string, firstPart?: Uint8Array) => string), allowStream = true, encryptionInformation?: EncryptionInformation): Promise<Api.InputFile | { inputEncryptedFile: Api.InputEncryptedFile; fileSize: number }> {
    if (params?.progressId !== undefined && !this.#progressIds.has(BigInt(params.progressId))) {
      throw new InputError("Invalid progressId.");
    }
    if (params?.progressId !== undefined) {
      this.#progressIds.delete(BigInt(params.progressId));
    }
    let { size, name, contents } = await FileManager.#getFileContents(file, params, allowStream);
    if (checkName) {
      name = checkName(name);
    }
    if (size === 0 || size < -1) {
      throw new InputError("Invalid file size.");
    }

    const poolSize = await this.#c.getUploadPoolSize();

    const chunkSize = params?.chunkSize ?? FileManager.#UPLOAD_MAX_CHUNK_SIZE;
    FileManager.validateChunkSize(chunkSize, FileManager.#UPLOAD_MAX_CHUNK_SIZE);

    const mustTrackProgress = params?.progressId !== undefined;
    const fileId = params?.progressId !== undefined ? BigInt(params.progressId) : getRandomId();

    const isBig = contents instanceof Uint8Array ? contents.byteLength > FileManager.#BIG_FILE_THRESHOLD : true;

    const whatIsUploaded = contents instanceof Uint8Array ? (isBig ? "big file" : "file") + " of size " + size : "stream";
    this.#Lupload.debug("uploading " + whatIsUploaded + " with chunk size of " + chunkSize + " and pool size of " + poolSize + " and file ID of " + fileId);

    let result: { isSmall: boolean; parts: number; firstPart?: Uint8Array; fileSize: number };
    if (contents instanceof Uint8Array) {
      result = await this.#uploadBuffer(contents, fileId, mustTrackProgress, chunkSize, poolSize, params?.signal, encryptionInformation);
    } else {
      result = await this.#uploadStream(contents, fileId, mustTrackProgress, chunkSize, poolSize, params?.signal, encryptionInformation);
    }

    this.#Lupload.debug(`[${fileId}] uploaded ` + result.parts + " part(s)");
    if (checkName) {
      name = checkName(name, result.firstPart);
    }

    if (encryptionInformation) {
      const digest = new Uint8Array(await crypto.subtle.digest("MD5", concat([encryptionInformation.key, encryptionInformation.iv])));
      const right = digest.subarray(4, 8);
      const key_fingerprint = Number(intFromBytes(digest.subarray(0, 4).map((v, i) => v ^ right[i])));

      if (result.isSmall) {
        const inputEncryptedFile: Api.InputEncryptedFile = { _: "inputEncryptedFileUploaded", id: fileId, parts: result.parts, key_fingerprint, md5_checksum: "" };
        return { inputEncryptedFile, fileSize: result.fileSize };
      } else {
        const inputEncryptedFile: Api.InputEncryptedFile = { _: "inputEncryptedFileBigUploaded", id: fileId, parts: result.parts, key_fingerprint };
        return { inputEncryptedFile, fileSize: result.fileSize };
      }
    }

    if (result.isSmall) {
      return { _: "inputFile", id: fileId, name, parts: result.parts, md5_checksum: "" };
    } else {
      return { _: "inputFileBig", id: fileId, name, parts: result.parts };
    }
  }

  async #uploadStream(stream: ReadableStream<Uint8Array>, fileId: bigint, mustTrackProgress: boolean, chunkSize: number, poolSize: number, signal: AbortSignal | undefined, encryptionInformation: EncryptionInformation | undefined) {
    let part: Part;
    let promises = new Array<Promise<void>>();
    let ms = 0.05;
    let uploaded = 0;
    let firstPart: Uint8Array | undefined;
    let iv = encryptionInformation?.iv;
    let fileSize = 0;
    for await (part of iterateReadableStream(stream.pipeThrough(new PartStream(chunkSize)))) {
      if (!part.isSmall && part.part > 0) {
        await delay(ms);
        ms = Math.max(ms * .8, 0.003);
      }
      if (!firstPart) {
        firstPart = part.bytes;
      }
      if (encryptionInformation) {
        fileSize += part.bytes.byteLength;
        if (part.bytes.byteLength % 16 !== 0) {
          part.bytes = concat([part.bytes, crypto.getRandomValues(new Uint8Array((16 - part.bytes.length % 16) % 16))]);
        }
        const right = part.bytes.subarray(-16);

        part.bytes = ige256Encrypt(part.bytes, encryptionInformation.key, iv!);
        const left = part.bytes.subarray(-16);

        iv = concat([left, right]);
      }
      promises.push(
        this.#uploadPart(fileId, part.totalParts, !part.isSmall, part.part, part.bytes, signal).then(() => {
          if (mustTrackProgress) {
            uploaded += part.bytes.byteLength;
            this.#c.handleUpdate({
              type: "uploadProgress",
              uploadProgress: {
                id: String(fileId),
                uploaded,
                total: 0,
                isUploaded: false,
              },
            });
          }
        }),
      );
      if (promises.length === poolSize * UPLOAD_REQUEST_PER_CONNECTION) {
        await Promise.all(promises);
        promises = [];
      }
    }
    await Promise.all(promises);
    if (mustTrackProgress) {
      this.#c.handleUpdate({
        type: "uploadProgress",
        uploadProgress: {
          id: String(fileId),
          uploaded,
          total: 0,
          isUploaded: true,
        },
      });
    }
    return { isSmall: part!.isSmall, parts: part!.totalParts, firstPart, fileSize };
  }

  async #uploadBuffer(buffer: Uint8Array<ArrayBuffer>, fileId: bigint, mustTrackProgress: boolean, chunkSize: number, poolSize: number, signal: AbortSignal | undefined, encryptionInformation: EncryptionInformation | undefined) {
    const isBig = buffer.byteLength > FileManager.#BIG_FILE_THRESHOLD;
    const partCount = Math.ceil(buffer.byteLength / chunkSize);
    let promises = new Array<Promise<void>>();
    let started = false;
    let ms = 0.05;
    let uploaded = 0;
    let firstPart: Uint8Array | undefined;
    let iv = encryptionInformation?.iv;
    let fileSize = 0;
    main: for (let part = 0; part < partCount;) {
      for (let i = 0; i < poolSize; ++i) {
        for (let i = 0; i < UPLOAD_REQUEST_PER_CONNECTION; ++i) {
          const start = part * chunkSize;
          const end = start + chunkSize;
          let bytes = buffer.subarray(start, end);
          const partSize = bytes.byteLength;
          if (!bytes.byteLength) {
            break main;
          }
          if (!firstPart) {
            firstPart = bytes;
          }
          if (encryptionInformation) {
            fileSize += bytes.byteLength;
            if (bytes.byteLength % 16 !== 0) {
              bytes = concat([bytes, crypto.getRandomValues(new Uint8Array((16 - bytes.length % 16) % 16))]);
            }
            const right = bytes.subarray(-16);

            bytes = ige256Encrypt(bytes, encryptionInformation.key, iv!);
            const left = bytes.subarray(-16);

            iv = concat([left, right]);
          }
          if (!started) {
            started = true;
          } else if (isBig && part > 0) {
            await delay(ms);
            ms = Math.max(ms * .8, 0.003);
          }
          promises.push(
            this.#uploadPart(fileId, partCount, isBig, part++, bytes, signal).then(() => {
              if (mustTrackProgress) {
                uploaded += partSize;
                this.#c.handleUpdate({
                  type: "uploadProgress",
                  uploadProgress: {
                    id: String(fileId),
                    uploaded,
                    total: buffer.byteLength,
                    isUploaded: false,
                  },
                });
              }
            }),
          );
          if (promises.length === poolSize * UPLOAD_REQUEST_PER_CONNECTION) {
            await Promise.all(promises);
            promises = [];
          }
        }
      }
      await Promise.all(promises);
      promises = [];
    }
    await Promise.all(promises);
    if (mustTrackProgress) {
      this.#c.handleUpdate({
        type: "uploadProgress",
        uploadProgress: {
          id: String(fileId),
          uploaded,
          total: buffer.byteLength,
          isUploaded: true,
        },
      });
    }
    return { isSmall: !isBig, parts: partCount, firstPart, fileSize };
  }

  async #uploadPart(fileId: bigint, partCount: number, isBig: boolean, index: number, bytes: Uint8Array<ArrayBuffer>, signal: AbortSignal | undefined) {
    let retryIn = 1;
    let errorCount = 0;
    while (true) {
      try {
        signal?.throwIfAborted();
        this.#Lupload.debug(`[${fileId}] uploading part ` + (index + 1));
        if (isBig) {
          await this.#c.invoke({ _: "upload.saveBigFilePart", file_id: fileId, file_part: index, bytes, file_total_parts: partCount }, { type: "upload" });
        } else {
          await this.#c.invoke({ _: "upload.saveFilePart", file_id: fileId, bytes, file_part: index }, { type: "upload" });
        }
        this.#Lupload.debug(`[${fileId}] uploaded part ` + (index + 1));
        break;
      } catch (err) {
        signal?.throwIfAborted();
        this.#Lupload.debug(`[${fileId}] failed to upload part ` + (index + 1));
        ++errorCount;
        if (errorCount > 20) {
          retryIn = 0;
          errorCount = 20;
        }
        await this.#handleError(err, retryIn, `[${fileId}-${index + 1}]`);
        retryIn += 2;
        if (retryIn > 11) {
          retryIn = 11;
        }
      }
    }
  }

  async #handleError(err: unknown, retryIn: number, logPrefix: string) {
    if (err instanceof TimeTooBig || err instanceof TimeTooSmall) {
      throw err;
    } else if (err instanceof FloodWait) {
      this.#Lupload.warning(`${logPrefix} retrying in ${err.seconds} seconds:`, err);
      await delay(err.seconds * SECOND);
    } else if (retryIn > 0) {
      this.#Lupload.warning(`${logPrefix} retrying in ${retryIn} seconds:`, err);
      await delay(retryIn * SECOND);
    } else {
      throw err;
    }
  }

  static async #getFileContents(source: FileSource, params: _UploadCommon | undefined, allowStream: boolean) {
    let name = params?.fileName?.trim() || "file";
    let contents: Uint8Array<ArrayBuffer> | ReadableStream<Uint8Array>;
    let size = -1;
    if (source instanceof Uint8Array) {
      contents = source;
      size = source.byteLength;
    } else if (source instanceof ReadableStream) {
      if (!allowStream) {
        throw new InputError("Streamed upload not allowed.");
      }
      contents = source;
    } else if (typeof source === "object" && source !== null && (Symbol.iterator in source || Symbol.asyncIterator in source)) {
      if (!allowStream) {
        throw new InputError("Streamed upload not allowed.");
      }
      contents = new ReadableStream({
        pull: Symbol.asyncIterator in source
          ? async (controller) => {
            const { value, done } = await (source as AsyncIterableIterator<Uint8Array>).next();
            done ? controller.close() : controller.enqueue(value);
          }
          : (controller) => {
            const { value, done } = (source as IterableIterator<Uint8Array>).next();
            done ? controller.close() : controller.enqueue(value);
          },
      });
    } else {
      let url: string;
      try {
        url = new URL(source).toString();
      } catch {
        let path_: string;
        if (typeof source === "string") {
          if (isAbsolute(source)) {
            path_ = source;
          } else {
            // @ts-ignore: lib
            path_ = join(Deno.cwd(), source);
          }
          url = toFileUrl(path_).toString();
          name = basename(path_);
        } else {
          unreachable();
        }
      }
      const response = await fetch(url);
      if (response.body === null) {
        throw new InputError("Invalid response");
      }
      if (name === "file") {
        const contentType = response.headers.get("content-type")?.split(";")[0].trim();
        if (contentType) {
          name += `.${extension(contentType)}`;
        } else {
          const maybeFileName = new URL(response.url).pathname.split("/")
            .filter((v) => v)
            .slice(-1)[0]
            .trim();
          if (maybeFileName) {
            name += extname(maybeFileName);
          }
        }
      }
      const contentLength = Number(response.headers.get("content-length"));
      if (contentLength && !isNaN(contentLength)) {
        size = contentLength;
      }
      if (allowStream) {
        contents = response.body;
      } else {
        contents = new Uint8Array(await response.arrayBuffer());
      }
    }
    return { size: params?.fileSize ? params.fileSize : size, name, contents };
  }

  // deno-lint-ignore no-explicit-any
  async *downloadInner(location: Api.InputFileLocation, dcId: number, params: DownloadParams | undefined): AsyncGenerator<Uint8Array<ArrayBufferLike>, void, any> {
    const signal = params?.signal;
    signal?.throwIfAborted();
    if (params?.offset !== undefined) {
      FileManager.validateOffset(params.offset);
    }
    const id = "id" in location ? location.id : "photo_id" in location ? location.photo_id : null;
    if (id !== null && this.#c.storage.supportsFiles) {
      const file = await this.#c.storage.getFile(id);
      if (file !== null && file[0] > 0) {
        const offset = params?.offset ?? 0;
        const partOffset = Math.floor(offset / file[1]);
        let first = true;
        for await (const bytes of this.#c.storage.iterFileParts(id, file[0], partOffset, signal)) {
          if (first) {
            first = false;
            yield bytes.subarray(offset % file[1]);
          } else {
            yield bytes;
          }
        }
        return;
      }
    }

    let fileSize = 0;
    let decryptionInformation: { key: Uint8Array<ArrayBuffer>; iv: Uint8Array<ArrayBuffer> } | undefined;
    if (params?.fileInformation) {
      const version = params.fileInformation[0];
      if (version !== "0") {
        throw new InputError("Unsupported file information version.");
      }

      const withoutVersion = params.fileInformation.slice(1);
      const key = decodeHex(withoutVersion.slice(0, 64));
      const iv = decodeHex(withoutVersion.slice(64, 128));
      decryptionInformation = { key, iv };
      fileSize = Number(withoutVersion.slice(128));
    }

    const chunkSize = params?.chunkSize ?? DOWNLOAD_MAX_CHUNK_SIZE;
    FileManager.validateChunkSize(chunkSize, DOWNLOAD_MAX_CHUNK_SIZE);

    const dc = getDc(dcId);
    signal?.throwIfAborted();

    const limit = chunkSize;
    const requestedOffset = params?.offset ?? 0;
    let offset = decryptionInformation ? 0n : BigInt(requestedOffset);
    let bytesToSkip = decryptionInformation ? requestedOffset : 0;
    let part = 0;

    let totalSize = 0;
    const requestCount = DOWNLOAD_POOL_SIZE * DOWNLOAD_REQUEST_PER_CONNECTION;
    let finished = false;
    while (true) {
      signal?.throwIfAborted();
      const results = await Promise.all(Array.from({ length: requestCount }, (_, i) => this.#downloadPart(location, offset + BigInt(i * limit), limit, dc, signal, id, part + i)));
      for (const result of results) {
        signal?.throwIfAborted();

        if (Api.is("upload.file", result)) {
          const downloadedSize = result.bytes.byteLength;
          finished = downloadedSize < limit;
          if (decryptionInformation) {
            const left = result.bytes.subarray(-16);

            const decryptedBytes = ige256Decrypt(result.bytes, decryptionInformation.key, decryptionInformation.iv);
            const right = decryptedBytes.subarray(-16);

            const remainingSize = Math.max(0, fileSize - totalSize);
            result.bytes = decryptedBytes.slice(0, remainingSize);
            totalSize += result.bytes.byteLength;
            finished = totalSize >= fileSize;

            decryptionInformation.iv = concat([left, right]);
          }
          const bytesToCache = result.bytes;
          if (bytesToSkip > 0) {
            const skipped = Math.min(bytesToSkip, result.bytes.byteLength);
            bytesToSkip -= skipped;
            result.bytes = result.bytes.subarray(skipped);
          }
          if (result.bytes.byteLength) {
            yield result.bytes;
          }
          if (id !== null) {
            await this.#c.storage.saveFilePart(id, part, bytesToCache);
            signal?.throwIfAborted();
          }
          ++part;
          if (finished) {
            if (id !== null) {
              await this.#c.storage.setFilePartCount(id, part, chunkSize);
              signal?.throwIfAborted();
            }
            break;
          } else {
            offset += BigInt(downloadedSize);
          }
        } else {
          unreachable();
        }
      }
      if (finished) {
        break;
      }
    }
  }

  async #downloadPart(location: Api.InputFileLocation, offset: bigint, limit: number, dc: ReturnType<typeof getDc>, signal: AbortSignal | undefined, id: bigint | null, part: number) {
    let retryIn = 1;
    let errorCount = 0;
    while (true) {
      try {
        signal?.throwIfAborted();
        return await this.#c.invoke({ _: "upload.getFile", location, offset, limit }, { dc, type: "download" });
      } catch (err) {
        if (typeof err === "object" && err instanceof AssertionError) {
          throw err;
        }
        ++errorCount;
        if (errorCount > 20) {
          retryIn = 0;
          errorCount = 20;
        }
        await this.#handleError(err, retryIn, `[${id}-${part + 1}]`);
        signal?.throwIfAborted();
        retryIn += 2;
        if (retryIn > 11) {
          retryIn = 11;
        }
      }
    }
  }

  static validateChunkSize(chunkSize: number, max: number) {
    if (chunkSize <= 0) {
      throw new InputError("chunkSize must be greater than zero.");
    }
    if (chunkSize % 1 !== 0) {
      throw new InputError("chunkSize must be a whole number.");
    }
    if (chunkSize > max) {
      throw new InputError("chunkSize is too big.");
    }
    if (mod(chunkSize, 1024) !== 0) {
      throw new InputError("chunkSize must be divisible by 1024.");
    }
  }

  static validateOffset(offset: number) {
    if (offset < 0) {
      throw new InputError("offset must not be smaller than zero.");
    }
    if (offset % 1 !== 0) {
      throw new InputError("offset must be a whole number.");
    }
    if (mod(offset, 1024) !== 0) {
      throw new InputError("offset must be divisible by 1024.");
    }
  }

  // deno-lint-ignore no-explicit-any
  async *download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array<ArrayBufferLike>, void, any> {
    const fileId_ = deserializeFileId(fileId);
    if (fileId_.location.type === "photo") {
      switch (fileId_.type) {
        case FileType.ProfilePhoto: {
          if (fileId_.location.source.type !== PhotoSourceType.ChatPhotoBig && fileId_.location.source.type !== PhotoSourceType.ChatPhotoSmall) {
            unreachable();
          }
          const big = fileId_.location.source.type === PhotoSourceType.ChatPhotoBig;
          const peer = await this.#c.getInputPeer(Number(fileId_.location.source.chatId));
          const location: Api.inputPeerPhotoFileLocation = { _: "inputPeerPhotoFileLocation", big: big || undefined, peer, photo_id: fileId_.location.id };
          yield* this.downloadInner(location, fileId_.dcId, params);
          break;
        }
        case FileType.Photo: {
          let location: Api.inputPhotoFileLocation | Api.inputStickerSetThumb;
          if (fileId_.location.source.type === PhotoSourceType.StickerSetThumbnailVersion) {
            location = {
              _: "inputStickerSetThumb",
              stickerset: {
                _: "inputStickerSetID",
                id: fileId_.location.source.stickerSetId,
                access_hash: fileId_.location.source.stickerSetAccessHash,
              },
              thumb_version: fileId_.location.source.version,
            };
          } else {
            location = {
              _: "inputPhotoFileLocation",
              id: fileId_.location.id,
              access_hash: fileId_.location.accessHash,
              file_reference: fileId_.fileReference ?? new Uint8Array(),
              thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : "",
            };
          }
          yield* this.downloadInner(location, fileId_.dcId, params);
          break;
        }
        case FileType.Thumbnail: {
          const location: Api.inputDocumentFileLocation = {
            _: "inputDocumentFileLocation",
            id: fileId_.location.id,
            access_hash: fileId_.location.accessHash,
            file_reference: fileId_.fileReference ?? new Uint8Array(),
            thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : unreachable(),
          };
          yield* this.downloadInner(location, fileId_.dcId, params);
          break;
        }
      }
    } else if (fileId_.location.type === "common") {
      const location: Api.inputDocumentFileLocation | Api.inputEncryptedFileLocation = fileId_.type === FileType.Encrypted
        ? {
          _: "inputEncryptedFileLocation",
          id: fileId_.location.id,
          access_hash: fileId_.location.accessHash,
        }
        : {
          _: "inputDocumentFileLocation",
          id: fileId_.location.id,
          access_hash: fileId_.location.accessHash,
          file_reference: fileId_.fileReference ?? new Uint8Array(),
          thumb_size: "",
        };
      yield* this.downloadInner(location, fileId_.dcId, params);
    } else {
      unreachable();
    }
  }

  async getStickerSetName(inputStickerSet: Api.inputStickerSetID, hash = 0): Promise<string | undefined> {
    const maybeStickerSetName = await this.#c.messageStorage.getStickerSetName(inputStickerSet.id, inputStickerSet.access_hash);
    if (maybeStickerSetName !== null && Date.now() - maybeStickerSetName[1].getTime() < STICKER_SET_NAME_TTL) {
      return maybeStickerSetName[0];
    } else {
      try {
        const stickerSet = await this.#c.invoke({ _: "messages.getStickerSet", stickerset: inputStickerSet, hash });
        const name = Api.as("messages.stickerSet", stickerSet).set.short_name;
        await this.#c.messageStorage.updateStickerSetName(inputStickerSet.id, inputStickerSet.access_hash, name);
        return name;
      } catch (err) {
        if (err instanceof StickersetInvalid) {
          return undefined;
        } else {
          throw err;
        }
      }
    }
  }

  static #CUSTOM_EMOJI_TTL = 30 * MINUTE;
  async getCustomEmojiStickers(id: string | string[]): Promise<Sticker[]> {
    id = Array.isArray(id) ? id : [id];
    if (!id.length) {
      return [];
    }
    let stickers = new Array<Sticker>();
    let shouldFetch = false;
    for (const id_ of id) {
      const maybeDocument = await this.#c.messageStorage.getCustomEmojiDocument(BigInt(id_));
      if (maybeDocument !== null && Date.now() - maybeDocument[1].getTime() <= FileManager.#CUSTOM_EMOJI_TTL) {
        const document_ = maybeDocument[0];
        const fileId_: FileId = {
          type: FileType.Document,
          dcId: document_.dc_id,
          fileReference: document_.file_reference,
          location: { type: "common", id: document_.id, accessHash: document_.access_hash },
        };
        const fileUniqueId = toUniqueFileId(fileId_);
        const fileId = serializeFileId(fileId_);
        const sticker = await constructSticker(document_, fileId, fileUniqueId, this.getStickerSetName.bind(this), id_);
        stickers.push(sticker);
      } else {
        shouldFetch = true;
        break;
      }
    }
    if (!shouldFetch) {
      return stickers;
    }
    stickers = [];
    const documents_ = (await this.#c.invoke({ _: "messages.getCustomEmojiDocuments", document_id: id.map(BigInt) })).map((v) => Api.as("document", v));
    for (const [i, document_] of documents_.entries()) {
      await this.#c.messageStorage.setCustomEmojiDocument(document_.id, document_);
      const fileId_: FileId = {
        type: FileType.Document,
        dcId: document_.dc_id,
        fileReference: document_.file_reference,
        location: { type: "common", id: document_.id, accessHash: document_.access_hash },
      };
      const fileUniqueId = toUniqueFileId(fileId_);
      const fileId = serializeFileId(fileId_);
      const sticker = await constructSticker(document_, fileId, fileUniqueId, this.getStickerSetName.bind(this), id[i]);
      stickers.push(sticker);
    }
    return stickers;
  }
}
