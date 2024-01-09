import { debug, extension } from "../0_deps.ts";
import { drop, getRandomId, mod, UNREACHABLE } from "../1_utilities.ts";
import { as, enums, types } from "../2_tl.ts";
import { constructDocument, Document, FileID, FileType, FileUniqueID, FileUniqueType, ThumbnailSource } from "../3_types.ts";
import { FloodWait } from "../4_errors.ts";
import { DownloadParams, UploadParams } from "./0_params.ts";
import { C, ConnectionError } from "./0_types.ts";

const d = debug("FileManager");

export class FileManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async upload(contents: Uint8Array, params?: UploadParams) {
    const isBig = contents.length > 1048576; // 10 MB

    const chunkSize = params?.chunkSize ?? 512 * 1024;
    if (mod(chunkSize, 1024) != 0) {
      throw new Error("chunkSize must be divisible by 1024");
    }

    const signal = params?.signal;

    d("uploading " + (isBig ? "big " : "") + "file of size " + contents.length + " with chunk size of " + chunkSize);

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
            const bytes = contents.slice(start, end);
            if (bytes.length == 0) {
              continue main;
            }
            if (isBig) {
              await api.upload.saveBigFilePart({ file_id: fileId, file_part: part, bytes, file_total_parts: partCount });
            } else {
              await api.upload.saveFilePart({ file_id: fileId, bytes, file_part: part });
            }
            d((part + 1) + " out of " + partCount + " chunks have been uploaded so far");
            break chunk;
          } catch (err) {
            if (signal?.aborted) {
              break main;
            }
            if (err instanceof FloodWait) {
              d("got a flood wait of " + err.seconds + " seconds");
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

    d("uploaded all " + partCount + " chunk(s)");

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
    const fileId_ = FileID.decode(fileId);
    switch (fileId_.fileType) {
      case FileType.ChatPhoto: {
        const big = fileId_.params.thumbnailSource == ThumbnailSource.ChatPhotoBig;
        const peer = await this.#c.getInputPeer(fileId_.params.chatId!);
        const location = new types.InputPeerPhotoFileLocation({ big: big ? true : undefined, peer, photo_id: fileId_.params.mediaId! });
        for await (const chunk of this.#downloadInner(location, fileId_.dcId, params)) {
          yield chunk;
        }
        break;
      }
      case FileType.Photo: {
        if (fileId_.params.mediaId == undefined || fileId_.params.accessHash == undefined || fileId_.params.fileReference == undefined || fileId_.params.thumbnailSize == undefined) {
          UNREACHABLE();
        }
        const location = new types.InputPhotoFileLocation({
          id: fileId_.params.mediaId,
          access_hash: fileId_.params.accessHash,
          file_reference: fileId_.params.fileReference,
          thumb_size: fileId_.params.thumbnailSize,
        });
        for await (const chunk of this.#downloadInner(location, fileId_.dcId, params)) {
          yield chunk;
        }
        break;
      }
      case FileType.Document:
      case FileType.Sticker:
      case FileType.VideoNote:
      case FileType.Video:
      case FileType.Audio:
      case FileType.Voice:
      case FileType.Animation: {
        if (fileId_.params.mediaId == undefined || fileId_.params.accessHash == undefined || fileId_.params.fileReference == undefined || fileId_.params.thumbnailSize == undefined) {
          UNREACHABLE();
        }
        const location = new types.InputDocumentFileLocation({
          id: fileId_.params.mediaId,
          access_hash: fileId_.params.accessHash,
          file_reference: fileId_.params.fileReference,
          thumb_size: fileId_.params.thumbnailSize,
        });
        for await (const chunk of this.#downloadInner(location, fileId_.dcId, params)) {
          yield chunk;
        }
        break;
      }
      default:
        UNREACHABLE();
    }
  }

  async getCustomEmojiDocuments(id: string | string[]) {
    id = Array.isArray(id) ? id : [id];
    if (!id.length) {
      throw new Error("No custom emoji ID provided");
    }
    const documents = new Array<Document>();
    let shouldFetch = false;
    for (const [i, id_] of id.entries()) {
      const maybeDocument = await this.#c.storage.getCustomEmojiDocument(BigInt(id_));
      if (maybeDocument != null && Date.now() - maybeDocument[1].getTime() <= 30 * 60 * 1_000) {
        const document_ = maybeDocument[0];
        const fileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: document_.id }).encode();
        const fileId = new FileID(null, null, FileType.Document, document_.dc_id, {
          mediaId: document_.id,
          accessHash: document_.access_hash,
          fileReference: document_.file_reference,
        }).encode();
        const document = constructDocument(document_, new types.DocumentAttributeFilename({ file_name: `${id[i] ?? "customEmoji"}.${extension(document_.mime_type)}` }), fileId, fileUniqueId);
        documents.push(document);
      } else {
        shouldFetch = true;
        break;
      }
    }
    if (!shouldFetch) {
      return documents;
    }
    const documents_ = await this.#c.api.messages.getCustomEmojiDocuments({ document_id: id.map(BigInt) }).then((v) => v.map((v) => v[as](types.Document)));
    for (const [i, document_] of documents_.entries()) {
      const fileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: document_.id }).encode();
      const fileId = new FileID(null, null, FileType.Document, document_.dc_id, {
        mediaId: document_.id,
        accessHash: document_.access_hash,
        fileReference: document_.file_reference,
      }).encode();
      const document = constructDocument(document_, new types.DocumentAttributeFilename({ file_name: `${id[i] ?? "customEmoji"}.${extension(document_.mime_type)}` }), fileId, fileUniqueId);
      documents.push(document);
    }
    return documents;
  }
}
