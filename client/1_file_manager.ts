import { drop, getLogger, getRandomId, Logger, mod, UNREACHABLE } from "../1_utilities.ts";
import { as, enums, types } from "../2_tl.ts";
import { constructSticker, deserializeFileId, FileId, FileType, PhotoSourceType, serializeFileId, Sticker, toUniqueFileId } from "../3_types.ts";
import { STICKER_SET_NAME_TTL } from "../4_constants.ts";
import { FloodWait } from "../4_errors.ts";
import { DownloadParams, UploadParams } from "./0_params.ts";
import { C, ConnectionError } from "./0_types.ts";

export class FileManager {
  #c: C;
  #Lupload: Logger;

  constructor(c: C) {
    this.#c = c;

    const L = getLogger("FileManager").client(c.id);
    this.#Lupload = L.branch("upload");
  }

  async upload(contents: Uint8Array, params?: UploadParams) {
    const isBig = contents.length > 1048576; // 10 MB

    const chunkSize = params?.chunkSize ?? 512 * 1024;
    if (mod(chunkSize, 1024) != 0) {
      throw new Error("chunkSize must be divisible by 1024");
    }

    const signal = params?.signal;

    this.#Lupload.debug("uploading " + (isBig ? "big " : "") + "file of size " + contents.length + " with chunk size of " + chunkSize);

    const fileId = getRandomId();
    const name = params?.fileName ?? fileId.toString();

    const { api, disconnect, connect } = this.#c.apiFactory();
    signal?.addEventListener("abort", () => drop(disconnect()));
    await connect();
    let part = 0;
    const partCount = Math.ceil(contents.length / chunkSize);

    try {
      main: for (; part < partCount; part++) {
        chunk: while (true) {
          try {
            const start = part * chunkSize;
            const end = start + chunkSize;
            const bytes = contents.subarray(start, end);
            if (bytes.length == 0) {
              continue main;
            }
            if (isBig) {
              await api.upload.saveBigFilePart({ file_id: fileId, file_part: part, bytes, file_total_parts: partCount });
            } else {
              await api.upload.saveFilePart({ file_id: fileId, bytes, file_part: part });
            }
            this.#Lupload.debug((part + 1) + " out of " + partCount + " chunks have been uploaded so far");
            break chunk;
          } catch (err) {
            if (signal?.aborted) {
              break main;
            }
            if (err instanceof FloodWait) { // TODO: should this be removed?
              this.#Lupload.warning("got a flood wait of " + err.seconds + " seconds");
              await new Promise((r) => setTimeout(r, err.seconds * 1000));
            } else if (err instanceof ConnectionError) {
              while (true) {
                try {
                  await new Promise((r) => setTimeout(r, 3000));
                  await connect();
                } catch {
                  if (signal?.aborted) {
                    break main;
                  }
                }
              }
            } else {
              throw err;
            }
          }
        }
      }
    } finally {
      drop(disconnect());
    }

    this.#Lupload.debug("uploaded all " + partCount + " chunk(s)");

    if (isBig) {
      return new types.InputFileBig({ id: fileId, parts: contents.length / chunkSize, name });
    } else {
      return new types.InputFile({ id: fileId, name, parts: part, md5_checksum: "" });
    }
  }

  async *#downloadInner(location: enums.InputFileLocation, dcId: number, params?: { chunkSize?: number; offset?: number }) {
    const id = "id" in location ? location.id : "photo_id" in location ? location.photo_id : null;
    if (id != null) {
      const file = await this.#c.storage.getFile(id);
      const partOffset = file == null ? 0 : params?.offset ? Math.ceil(10 / file[1]) - 1 : 0;
      if (file != null && file[0] > 0) {
        for await (const part of this.#c.storage.iterFileParts(id, file[0], partOffset)) {
          yield part;
        }
        return;
      }
    }

    const chunkSize = params?.chunkSize ?? 1024 * 1024;
    if (mod(chunkSize, 1024) != 0) {
      throw new Error("chunkSize must be divisible by 1024");
    }

    const { api, connect, disconnect } = this.#c.apiFactory(dcId);
    await connect();

    const limit = chunkSize;
    let offset = params?.offset ? BigInt(params.offset) : 0n;
    let part = 0;

    try {
      while (true) {
        const file = await api.upload.getFile({ location, offset, limit });

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
          UNREACHABLE();
        }
      }
    } finally {
      drop(disconnect());
    }
  }

  async *download(fileId: string, params?: DownloadParams) {
    const fileId_ = deserializeFileId(fileId);
    if (fileId_.location.type == "photo") {
      switch (fileId_.type) {
        case FileType.ProfilePhoto: {
          if (fileId_.location.source.type != PhotoSourceType.ChatPhotoBig && fileId_.location.source.type != PhotoSourceType.ChatPhotoSmall) {
            UNREACHABLE();
          }
          const big = fileId_.location.source.type == PhotoSourceType.ChatPhotoBig;
          const peer = await this.#c.getInputPeer(Number(fileId_.location.source.chatId)); // TODO: use access hash from source?
          const location = new types.InputPeerPhotoFileLocation({ big: big ? true : undefined, peer, photo_id: fileId_.location.id });
          for await (const chunk of this.#downloadInner(location, fileId_.dcId, params)) {
            yield chunk;
          }
          break;
        }
        case FileType.Photo: {
          const location = new types.InputPhotoFileLocation({
            id: fileId_.location.id,
            access_hash: fileId_.location.accessHash,
            file_reference: fileId_.fileReference ?? new Uint8Array(),
            thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : "",
          });
          for await (const chunk of this.#downloadInner(location, fileId_.dcId, params)) {
            yield chunk;
          }
          break;
        }
      }
    } else if (fileId_.location.type == "common") {
      const location = new types.InputDocumentFileLocation({
        id: fileId_.location.id,
        access_hash: fileId_.location.accessHash,
        file_reference: fileId_.fileReference ?? new Uint8Array(),
        thumb_size: "", // TODO?
      });
      for await (const chunk of this.#downloadInner(location, fileId_.dcId, params)) {
        yield chunk;
      }
    } else {
      UNREACHABLE();
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

  async getCustomEmojiStickers(id: string | string[]) {
    id = Array.isArray(id) ? id : [id];
    if (!id.length) {
      throw new Error("No custom emoji ID provided");
    }
    const stickers = new Array<Sticker>();
    let shouldFetch = false;
    for (const id_ of id) {
      const maybeDocument = await this.#c.messageStorage.getCustomEmojiDocument(BigInt(id_));
      if (maybeDocument != null && Date.now() - maybeDocument[1].getTime() <= 30 * 60 * 1_000) {
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
