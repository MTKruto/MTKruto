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

import { assert, extension, path, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { drop, getLogger, getRandomId, kilobyte, Logger, megabyte, minute, mod, Part, PartStream } from "../1_utilities.ts";
import { as, enums, types } from "../2_tl.ts";
import { constructSticker, deserializeFileId, FileId, FileSource, FileType, PhotoSourceType, serializeFileId, Sticker, toUniqueFileId } from "../3_types.ts";
import { STICKER_SET_NAME_TTL } from "../4_constants.ts";
import { FloodWait } from "../4_errors.ts";
import { DownloadParams, UploadParams } from "./0_params.ts";
import { C, ConnectionPool } from "./0_types.ts";

export class FileManager {
  #c: C;
  #Lupload: Logger;
  static #UPLOAD_MAX_CHUNK_SIZE = 512 * kilobyte;
  static #DOWNLOAD_MAX_CHUNK_SIZE = 1 * megabyte;
  static #BIG_FILE_THRESHOLD = 10 * megabyte;
  static #UPLOAD_REQUEST_PER_CONNECTION = 2;

  constructor(c: C) {
    this.#c = c;

    const L = getLogger("FileManager").client(c.id);
    this.#Lupload = L.branch("upload");
  }

  async upload(file: FileSource, params?: UploadParams, checkName?: null | ((name: string) => string), allowStream = true) {
    let { size, name, contents } = await FileManager.#getFileContents(file, params, allowStream);
    if (checkName) {
      name = checkName(name);
    }
    if (size == 0 || size < -1) {
      throw new InputError("Invalid file size.");
    }

    const chunkSize = params?.chunkSize ?? FileManager.#UPLOAD_MAX_CHUNK_SIZE;
    FileManager.validateChunkSize(chunkSize, FileManager.#UPLOAD_MAX_CHUNK_SIZE);

    const fileId = getRandomId();

    const isBig = contents instanceof Uint8Array ? contents.length > FileManager.#BIG_FILE_THRESHOLD : true;
    const poolSize = contents instanceof Uint8Array ? isBig ? 3 : 1 : 3;
    const pool = this.#c.getCdnConnectionPool(poolSize);

    const whatIsUploaded = contents instanceof Uint8Array ? (isBig ? "big file" : "file") + " of size " + size : "stream";
    this.#Lupload.debug("uploading " + whatIsUploaded + " with chunk size of " + chunkSize + " and pool size of " + poolSize + " and file ID of " + fileId);
    params?.signal?.addEventListener("abort", () => drop(pool.disconnect()));
    await pool.connect();

    let result: { small: boolean; parts: number };
    try {
      if (contents instanceof Uint8Array) {
        result = await this.#uploadBuffer(contents, fileId, chunkSize, params?.signal, pool);
      } else {
        result = await this.#uploadStream(contents, fileId, chunkSize, params?.signal, pool);
      }
    } finally {
      drop(pool.disconnect());
    }

    this.#Lupload.debug(`[${fileId}] uploaded ` + result.parts + " part(s)");

    if (result.small) {
      return new types.InputFile({ id: fileId, name, parts: result.parts, md5_checksum: "" });
    } else {
      return new types.InputFileBig({ id: fileId, parts: result.parts, name });
    }
  }

  async #uploadStream(stream: ReadableStream<Uint8Array>, fileId: bigint, chunkSize: number, signal: AbortSignal | null | undefined, pool: ConnectionPool) {
    let part: Part;
    let promises = new Array<Promise<void>>();
    let api = pool.api();
    let apiPromiseCount = 0;
    for await (part of stream.pipeThrough(new PartStream(chunkSize))) {
      promises.push(
        Promise.resolve().then(async () => {
          while (true) {
            try {
              if (part.small) {
                await api.upload.saveFilePart({ file_id: fileId, bytes: part.bytes, file_part: part.part });
              } else {
                await api.upload.saveBigFilePart({ file_id: fileId, file_part: part.part, bytes: part.bytes, file_total_parts: part.totalParts });
              }
              this.#Lupload.debug(`[${fileId}] uploaded part ` + (part.part + 1));
              break;
            } catch (err) {
              signal?.throwIfAborted();
              this.#Lupload.debug(`[${fileId}] failed to upload part ` + (part.part + 1));
              await this.#handleUploadError(err);
            }
          }
        }),
      );
      if (++apiPromiseCount >= FileManager.#UPLOAD_REQUEST_PER_CONNECTION) {
        api = pool.api();
        apiPromiseCount = 0;
      }
      if (promises.length == pool.size * FileManager.#UPLOAD_REQUEST_PER_CONNECTION) {
        await Promise.all(promises);
        promises = [];
      }
    }
    await Promise.all(promises);
    return { small: part!.small, parts: part!.totalParts };
  }

  async #uploadBuffer(buffer: Uint8Array, fileId: bigint, chunkSize: number, signal: AbortSignal | null | undefined, pool: ConnectionPool) {
    const isBig = buffer.byteLength > FileManager.#BIG_FILE_THRESHOLD;
    const partCount = Math.ceil(buffer.byteLength / chunkSize);
    let promises = new Array<Promise<void>>();
    for (let part = 0; part < partCount;) {
      for (let i = 0; i < pool.size; ++i) {
        const api = pool.api();
        for (let i = 0; i < FileManager.#UPLOAD_REQUEST_PER_CONNECTION; ++i) {
          const start = part * chunkSize;
          const end = start + chunkSize;
          const bytes = buffer.subarray(start, end);
          assert(bytes.length != 0);
          const thisPart = part++; // `thisPart` must be used instead of `part` in the promise body
          promises.push(
            Promise.resolve().then(async () => {
              while (true) {
                try {
                  signal?.throwIfAborted();
                  if (isBig) {
                    await api.upload.saveBigFilePart({ file_id: fileId, file_part: thisPart, bytes, file_total_parts: partCount });
                  } else {
                    await api.upload.saveFilePart({ file_id: fileId, bytes, file_part: thisPart });
                  }
                  this.#Lupload.debug(`[${fileId}] uploaded part ` + (thisPart + 1) + " / " + partCount);
                  break;
                } catch (err) {
                  signal?.throwIfAborted();
                  this.#Lupload.debug(`[${fileId}] failed to upload part ` + (thisPart + 1) + " / " + partCount);
                  await this.#handleUploadError(err);
                }
              }
            }),
          );
        }
      }
      await Promise.all(promises);
      promises = [];
    }
    await Promise.all(promises);
    return { small: !isBig, parts: partCount };
  }

  async #handleUploadError(err: unknown) {
    if (err instanceof FloodWait) {
      this.#Lupload.warning("got a flood wait of " + err.seconds + " seconds");
      await new Promise((r) => setTimeout(r, err.seconds * 1000));
    } else {
      throw err;
    }
  }

  static async #getFileContents(source: FileSource, params: UploadParams | undefined, allowStream: boolean) {
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
          if (path.isAbsolute(source)) {
            path_ = source;
          } else {
            // @ts-ignore: lib
            path_ = path.join(Deno.cwd(), source);
          }
          url = path.toFileUrl(path_).toString();
          name = path.basename(path_);
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
            name += extension(path.extname(maybeFileName));
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

  async *#downloadInner(location: enums.InputFileLocation, dcId: number, params?: { chunkSize?: number; offset?: number }) {
    const id = "id" in location ? location.id : "photo_id" in location ? location.photo_id : null;
    if (id != null && this.#c.storage.supportsFiles) {
      const file = await this.#c.storage.getFile(id);
      const partOffset = file == null ? 0 : params?.offset ? Math.ceil(10 / file[1]) - 1 : 0;
      if (file != null && file[0] > 0) {
        yield* this.#c.storage.iterFileParts(id, file[0], partOffset);
        return;
      }
    }

    const chunkSize = params?.chunkSize ?? FileManager.#DOWNLOAD_MAX_CHUNK_SIZE;
    FileManager.validateChunkSize(chunkSize, FileManager.#DOWNLOAD_MAX_CHUNK_SIZE);

    const connection = this.#c.getCdnConnection(dcId);
    await connection.connect();

    const limit = chunkSize;
    let offset = params?.offset ? BigInt(params.offset) : 0n;
    let part = 0;

    try {
      while (true) {
        const file = await connection.api.upload.getFile({ location, offset, limit });

        if (file instanceof types.upload.File) {
          yield file.bytes;
          if (id != null) {
            await this.#c.storage.saveFilePart(id, part, file.bytes);
          }
          ++part;
          if (file.bytes.length < limit) {
            if (id != null) {
              await this.#c.storage.setFilePartCount(id, part + 1, chunkSize);
            }
            break;
          } else {
            offset += BigInt(file.bytes.length);
          }
        } else {
          unreachable();
        }
      }
    } finally {
      drop(connection.disconnect());
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

  async *download(fileId: string, params?: DownloadParams) {
    const fileId_ = deserializeFileId(fileId);
    if (fileId_.location.type == "photo") {
      switch (fileId_.type) {
        case FileType.ProfilePhoto: {
          if (fileId_.location.source.type != PhotoSourceType.ChatPhotoBig && fileId_.location.source.type != PhotoSourceType.ChatPhotoSmall) {
            unreachable();
          }
          const big = fileId_.location.source.type == PhotoSourceType.ChatPhotoBig;
          const peer = await this.#c.getInputPeer(Number(fileId_.location.source.chatId)); // TODO: use access hash from source?
          const location = new types.InputPeerPhotoFileLocation({ big: big ? true : undefined, peer, photo_id: fileId_.location.id });
          yield* this.#downloadInner(location, fileId_.dcId, params);
          break;
        }
        case FileType.Photo: {
          const location = new types.InputPhotoFileLocation({
            id: fileId_.location.id,
            access_hash: fileId_.location.accessHash,
            file_reference: fileId_.fileReference ?? new Uint8Array(),
            thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : "",
          });
          yield* this.#downloadInner(location, fileId_.dcId, params);
          break;
        }
        case FileType.Thumbnail: {
          const location = new types.InputDocumentFileLocation({
            id: fileId_.location.id,
            access_hash: fileId_.location.accessHash,
            file_reference: fileId_.fileReference ?? new Uint8Array(),
            thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : unreachable(),
          });
          yield* this.#downloadInner(location, fileId_.dcId, params);
          break;
        }
      }
    } else if (fileId_.location.type == "common") {
      const location = new types.InputDocumentFileLocation({
        id: fileId_.location.id,
        access_hash: fileId_.location.accessHash,
        file_reference: fileId_.fileReference ?? new Uint8Array(),
        thumb_size: "",
      });
      yield* this.#downloadInner(location, fileId_.dcId, params);
    } else {
      unreachable();
    }
  }

  async getStickerSetName(inputStickerSet: types.InputStickerSetID, hash = 0) {
    const maybeStickerSetName = await this.#c.messageStorage.getStickerSetName(inputStickerSet.id, inputStickerSet.access_hash);
    if (maybeStickerSetName != null && Date.now() - maybeStickerSetName[1].getTime() < STICKER_SET_NAME_TTL) {
      return maybeStickerSetName[0];
    } else {
      const stickerSet = await this.#c.api.messages.getStickerSet({ stickerset: inputStickerSet, hash });
      const name = stickerSet[as](types.messages.StickerSet).set.short_name;
      await this.#c.messageStorage.updateStickerSetName(inputStickerSet.id, inputStickerSet.access_hash, name);
      return name;
    }
  }

  static #CUSTOM_EMOJI_TTL = 30 * minute;
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
    const documents_ = await this.#c.api.messages.getCustomEmojiDocuments({ document_id: id.map(BigInt) }).then((v) => v.map((v) => v[as](types.Document)));
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
