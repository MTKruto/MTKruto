/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { AssertionError, basename, delay, extension, extname, isAbsolute, MINUTE, SECOND, toFileUrl, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getLogger, getRandomId, iterateReadableStream, kilobyte, Logger, megabyte, mod, Part, PartStream } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { getDc } from "../3_transport.ts";
import { constructSticker, deserializeFileId, FileId, FileSource, FileType, PhotoSourceType, serializeFileId, Sticker, toUniqueFileId } from "../3_types.ts";
import { STICKER_SET_NAME_TTL } from "../4_constants.ts";
import { _UploadCommon, DownloadParams } from "./0_params.ts";
import { UPLOAD_REQUEST_PER_CONNECTION } from "./0_utilities.ts";
import { C } from "./1_types.ts";

export class FileManager {
  #c: C;
  #Lupload: Logger;
  static #UPLOAD_MAX_CHUNK_SIZE = 512 * kilobyte;
  static #DOWNLOAD_MAX_CHUNK_SIZE = 1 * megabyte;
  static #BIG_FILE_THRESHOLD = 10 * megabyte;

  constructor(c: C) {
    this.#c = c;

    const L = getLogger("FileManager").client(c.id);
    this.#Lupload = L.branch("upload");
  }

  async upload(file: FileSource, params?: _UploadCommon, checkName?: null | ((name: string) => string), allowStream = true): Promise<Api.InputFile> {
    let { size, name, contents } = await FileManager.#getFileContents(file, params, allowStream);
    if (checkName) {
      name = checkName(name);
    }
    if (size == 0 || size < -1) {
      throw new InputError("Invalid file size.");
    }

    const poolSize = await this.#c.getUploadPoolSize();

    const chunkSize = params?.chunkSize ?? FileManager.#UPLOAD_MAX_CHUNK_SIZE;
    FileManager.validateChunkSize(chunkSize, FileManager.#UPLOAD_MAX_CHUNK_SIZE);

    const fileId = getRandomId();

    const isBig = contents instanceof Uint8Array ? contents.length > FileManager.#BIG_FILE_THRESHOLD : true;

    const whatIsUploaded = contents instanceof Uint8Array ? (isBig ? "big file" : "file") + " of size " + size : "stream";
    this.#Lupload.debug("uploading " + whatIsUploaded + " with chunk size of " + chunkSize + " and pool size of " + poolSize + " and file ID of " + fileId);

    let result: { small: boolean; parts: number };
    if (contents instanceof Uint8Array) {
      result = await this.#uploadBuffer(contents, fileId, chunkSize, poolSize, params?.signal);
    } else {
      result = await this.#uploadStream(contents, fileId, chunkSize, poolSize, params?.signal);
    }

    this.#Lupload.debug(`[${fileId}] uploaded ` + result.parts + " part(s)");

    if (result.small) {
      return { _: "inputFile", id: fileId, name, parts: result.parts, md5_checksum: "" };
    } else {
      return { _: "inputFileBig", id: fileId, name, parts: result.parts };
    }
  }

  async #uploadStream(stream: ReadableStream<Uint8Array>, fileId: bigint, chunkSize: number, poolSize: number, signal: AbortSignal | undefined) {
    let part: Part;
    let promises = new Array<Promise<void>>();
    let ms = 0.05;
    for await (part of iterateReadableStream(stream.pipeThrough(new PartStream(chunkSize)))) {
      if (!part.small && part.part > 0) {
        await delay(ms);
        ms = Math.max(ms * .8, 0.003);
      }
      promises.push(this.#uploadPart(fileId, part.totalParts, !part.small, part.part, part.bytes, signal));
      if (promises.length == poolSize * UPLOAD_REQUEST_PER_CONNECTION) {
        await Promise.all(promises);
        promises = [];
      }
    }
    await Promise.all(promises);
    return { small: part!.small, parts: part!.totalParts };
  }

  async #uploadBuffer(buffer: Uint8Array, fileId: bigint, chunkSize: number, poolSize: number, signal: AbortSignal | undefined) {
    const isBig = buffer.byteLength > FileManager.#BIG_FILE_THRESHOLD;
    const partCount = Math.ceil(buffer.byteLength / chunkSize);
    let promises = new Array<Promise<void>>();
    let started = false;
    let ms = 0.05;
    main: for (let part = 0; part < partCount;) {
      for (let i = 0; i < poolSize; ++i) {
        for (let i = 0; i < UPLOAD_REQUEST_PER_CONNECTION; ++i) {
          const start = part * chunkSize;
          const end = start + chunkSize;
          const bytes = buffer.subarray(start, end);
          if (!bytes.length) {
            break main;
          }
          if (!started) {
            started = true;
          } else if (isBig && part > 0) {
            await delay(ms);
            ms = Math.max(ms * .8, 0.003);
          }
          promises.push(this.#uploadPart(fileId, partCount, isBig, part++, bytes, signal));
          if (promises.length == poolSize * UPLOAD_REQUEST_PER_CONNECTION) {
            await Promise.all(promises);
            promises = [];
          }
        }
      }
      await Promise.all(promises);
      promises = [];
    }
    await Promise.all(promises);
    return { small: !isBig, parts: partCount };
  }

  async #uploadPart(fileId: bigint, partCount: number, isBig: boolean, index: number, bytes: Uint8Array, signal: AbortSignal | undefined) {
    let retryIn = 1;
    let errorCount = 0;
    while (true) {
      try {
        signal?.throwIfAborted();
        this.#Lupload.debug(`[${fileId}] uploading part ` + (index + 1));
        if (isBig) {
          await this.#c.invoke({ _: "upload.saveBigFilePart", file_id: fileId, file_part: index, bytes: bytes, file_total_parts: partCount }, { type: "upload" });
        } else {
          await this.#c.invoke({ _: "upload.saveFilePart", file_id: fileId, bytes: bytes, file_part: index }, { type: "upload" });
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
    if (retryIn > 0) {
      this.#Lupload.warning(`${logPrefix} retrying in ${retryIn} seconds`);
      await delay(retryIn * SECOND);
    } else {
      throw err;
    }
  }

  static async #getFileContents(source: FileSource, params: _UploadCommon | undefined, allowStream: boolean) {
    let name = params?.fileName?.trim() || "file";
    let contents: Uint8Array | ReadableStream<Uint8Array>;
    let size = -1;
    if (source instanceof Uint8Array) {
      contents = source;
      size = source.byteLength;
    } else if (source instanceof ReadableStream) {
      if (!allowStream) {
        throw new InputError("Streamed upload not allowed.");
      }
      contents = source;
    } else if (typeof source === "object" && source != null && (Symbol.iterator in source || Symbol.asyncIterator in source)) {
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
      if (response.body == null) {
        throw new InputError("Invalid response");
      }
      if (name == "file") {
        const contentType = response.headers.get("content-type")?.split(";")[0].trim();
        if (contentType) {
          name += extension(contentType);
        } else {
          const maybeFileName = new URL(response.url).pathname.split("/")
            .filter((v) => v)
            .slice(-1)[0]
            .trim();
          if (maybeFileName) {
            name += extension(extname(maybeFileName));
          }
        }
      }
      const contentLength = Number(response.headers.get("content-length"));
      if (!isNaN(contentLength)) {
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

  async *downloadInner(location: Api.InputFileLocation, dcId: number, params: DownloadParams | undefined) {
    const signal = params?.signal;
    signal?.throwIfAborted();
    const id = "id" in location ? location.id : "photo_id" in location ? location.photo_id : null;
    if (id != null && this.#c.storage.supportsFiles) {
      const file = await this.#c.storage.getFile(id);
      const partOffset = file == null ? 0 : params?.offset ? Math.ceil(10 / file[1]) - 1 : 0;
      if (file != null && file[0] > 0) {
        yield* this.#c.storage.iterFileParts(id, file[0], partOffset, signal);
        return;
      }
    }

    const chunkSize = params?.chunkSize ?? FileManager.#DOWNLOAD_MAX_CHUNK_SIZE;
    FileManager.validateChunkSize(chunkSize, FileManager.#DOWNLOAD_MAX_CHUNK_SIZE);
    if (params?.offset !== undefined) {
      FileManager.validateOffset(params.offset);
    }

    const dc = getDc(dcId);
    signal?.throwIfAborted();

    const limit = chunkSize;
    let offset = params?.offset ? BigInt(params.offset) : 0n;
    let part = 0;

    let ms = 0.05;
    while (true) {
      signal?.throwIfAborted();
      let retryIn = 1;
      let errorCount = 0;
      try {
        const file = await this.#c.invoke({ _: "upload.getFile", location, offset, limit }, { dc, type: "download" });
        signal?.throwIfAborted();

        if (Api.is("upload.file", file)) {
          yield file.bytes;
          if (id != null) {
            await this.#c.storage.saveFilePart(id, part, file.bytes);
            signal?.throwIfAborted();
          }
          ++part;
          if (file.bytes.length < limit) {
            if (id != null) {
              await this.#c.storage.setFilePartCount(id, part + 1, chunkSize);
              signal?.throwIfAborted();
            }
            break;
          } else {
            offset += BigInt(file.bytes.length);
          }
        } else {
          unreachable();
        }

        await delay(ms);
        ms = Math.max(ms * .8, 0.003);
      } catch (err) {
        if (typeof err === "object" && err instanceof AssertionError) {
          throw err;
        }
        ++errorCount;
        if (errorCount > 20) {
          retryIn = 0;
          errorCount = 0;
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
      throw new InputError("chunkSize must be bigger than zero.");
    }
    if (chunkSize % 1 != 0) {
      throw new InputError("chunkSize must be a whole number.");
    }
    if (chunkSize > max) {
      throw new InputError("chunkSize is too big.");
    }
    if (mod(chunkSize, 1024) != 0) {
      throw new InputError("chunkSize must be divisible by 1024.");
    }
  }

  static validateOffset(offset: number) {
    if (offset < 0) {
      throw new InputError("offset must not be smaller than zero.");
    }
    if (offset % 1 != 0) {
      throw new InputError("offset must be a whole number.");
    }
    if (mod(offset, 1024) != 0) {
      throw new InputError("offset must be divisible by 1024.");
    }
  }

  async *download(fileId: string, params?: DownloadParams) {
    const fileId_ = deserializeFileId(fileId);
    if (fileId_.location.type == "photo") {
      switch (fileId_.type) {
        case FileType.ProfilePhoto: {
          if (fileId_.location.source.type != PhotoSourceType.ChatPhotoBig && fileId_.location.source.type != PhotoSourceType.ChatPhotoSmall) {
            unreachable();
          }
          const big = fileId_.location.source.type == PhotoSourceType.ChatPhotoBig;
          const peer = await this.#c.getInputPeer(Number(fileId_.location.source.chatId));
          const location: Api.inputPeerPhotoFileLocation = { _: "inputPeerPhotoFileLocation", big: big ? true : undefined, peer, photo_id: fileId_.location.id };
          yield* this.downloadInner(location, fileId_.dcId, params);
          break;
        }
        case FileType.Photo: {
          const location: Api.inputPhotoFileLocation = {
            _: "inputPhotoFileLocation",
            id: fileId_.location.id,
            access_hash: fileId_.location.accessHash,
            file_reference: fileId_.fileReference ?? new Uint8Array(),
            thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : "",
          };
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
    } else if (fileId_.location.type == "common") {
      const location: Api.inputDocumentFileLocation = {
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

  async getStickerSetName(inputStickerSet: Api.inputStickerSetID, hash = 0) {
    const maybeStickerSetName = await this.#c.messageStorage.getStickerSetName(inputStickerSet.id, inputStickerSet.access_hash);
    if (maybeStickerSetName != null && Date.now() - maybeStickerSetName[1].getTime() < STICKER_SET_NAME_TTL) {
      return maybeStickerSetName[0];
    } else {
      const stickerSet = await this.#c.invoke({ _: "messages.getStickerSet", stickerset: inputStickerSet, hash });
      const name = Api.as("messages.stickerSet", stickerSet).set.short_name;
      await this.#c.messageStorage.updateStickerSetName(inputStickerSet.id, inputStickerSet.access_hash, name);
      return name;
    }
  }

  static #CUSTOM_EMOJI_TTL = 30 * MINUTE;
  async getCustomEmojiStickers(id: string | string[]) {
    id = Array.isArray(id) ? id : [id];
    if (!id.length) {
      return [];
    }
    const stickers = new Array<Sticker>();
    let shouldFetch = false;
    for (const id_ of id) {
      const maybeDocument = await this.#c.messageStorage.getCustomEmojiDocument(BigInt(id_));
      if (maybeDocument != null && Date.now() - maybeDocument[1].getTime() <= FileManager.#CUSTOM_EMOJI_TTL) {
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
