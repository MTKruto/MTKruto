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

import { contentType, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { Api } from "../2_tl.ts";
import { constructStickerSet, deserializeFileId, type InputSticker } from "../3_types.ts";
import type { FileSource } from "../types/0_file_source.ts";
import type { _UploadCommon, AddStickerToStickerSetParams, CreateStickerSetParams, ReplaceStickerInStickerSetParams, SetStickerSetThumbnailParams } from "./0_params.ts";
import { checkStickerName } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { FileManager } from "./2_file_manager.ts";

interface C extends C_ {
  fileManager: FileManager;
}

export class StickerSetManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  static #getSlug(slug: string) {
    if (slug.includes("/")) {
      let valid = false;
      try {
        const url = new URL(slug);
        const pathname = "/addstickers/";
        valid = (url.protocol === "http:" || url.protocol === "https:") && url.hostname === "t.me" && url.pathname.startsWith(pathname) && url.pathname.length > pathname.length;
        if (valid) {
          slug = url.pathname.slice(pathname.length);
          if (slug.endsWith("/")) {
            slug = slug.slice(0, -1);
            if (slug === "") {
              valid = false;
            }
          }
        }
      } catch (err) {
        if (err instanceof TypeError) {
          valid = false;
        } else {
          throw err;
        }
      }
      if (!valid) {
        throw new InputError("Invalid sticker set slug or link.");
      }
    }
    return slug;
  }

  async #uploadSticker(sticker: FileSource, emoji: string, params: _UploadCommon, user: Api.InputUser): Promise<Api.inputDocument> {
    let mimeType = params.mimeType;
    const result = await this.#c.fileManager.upload(sticker, params, (name, firstPart) => {
      if (firstPart) {
        name = checkStickerName(firstPart);
      }
      mimeType ??= contentType(name.split(".").slice(-1)[0]);
      return name;
    });
    mimeType ??= "application/x-tgsticker";

    const uploadedMedia = await this.#c.invoke({
      _: "messages.uploadMedia",
      peer: Api.is("inputUserSelf", user) ? { _: "inputPeerSelf" } : Api.is("inputUser", user) ? { _: "inputPeerUser", user_id: user.user_id, access_hash: user.access_hash } : unreachable(),
      media: { _: "inputMediaUploadedDocument", file: result, attributes: [{ _: "documentAttributeSticker", alt: emoji, stickerset: { _: "inputStickerSetEmpty" } }], mime_type: mimeType },
    });
    const document = Api.as("document", Api.as("messageMediaDocument", uploadedMedia).document);
    return {
      _: "inputDocument",
      id: document.id,
      access_hash: document.access_hash,
      file_reference: document.file_reference,
    };
  }

  async createStickerSet(name: string, slug: string, stickers: InputSticker[], params?: CreateStickerSetParams) {
    slug = StickerSetManager.#getSlug(slug);
    if (this.#c.storage.isBot && !params?.userId) {
      throw new InputError("The parameter userId is required.");
    }

    const user_id: Api.InputUser = this.#c.storage.isBot ? await this.#c.getInputUser(params!.userId!) : { _: "inputUserSelf" };

    const stickers_ = new Array<Api.InputStickerSetItem>();
    for (const sticker of stickers) {
      stickers_.push({
        _: "inputStickerSetItem",
        document: await this.#uploadSticker(sticker.sticker, sticker.emoji, sticker, user_id),
        emoji: sticker.emoji,
      });
    }

    const thumb = params?.thumbnail ? await this.#uploadSticker(params.thumbnail, "⭐️", params, user_id) : undefined;

    const result = await this.#c.invoke({
      _: "stickers.createStickerSet",
      masks: params?.isMask ? true : undefined,
      emojis: params?.isCustomEmoji ? true : undefined,
      text_color: params?.isAdaptive ? true : undefined,
      title: name,
      user_id,
      short_name: slug,
      stickers: stickers_,
      thumb,
      software: params?.software,
    });

    return constructStickerSet(result);
  }

  async checkStickerSetSlug(slug: string) {
    slug = StickerSetManager.#getSlug(slug);
    return await this.#c.invoke({ _: "stickers.checkShortName", short_name: slug });
  }

  async suggestStickerSetSlug(name: string) {
    const result = await this.#c.invoke({ _: "stickers.suggestShortName", title: name });
    return result.short_name;
  }

  async addStickerToStickerSet(slug: string, sticker: InputSticker, params?: AddStickerToStickerSetParams) {
    slug = StickerSetManager.#getSlug(slug);
    if (this.#c.storage.isBot && !params?.userId) {
      throw new InputError("The parameter userId is required.");
    }

    const user_id: Api.InputUser = this.#c.storage.isBot ? await this.#c.getInputUser(params!.userId!) : { _: "inputUserSelf" };

    await this.#c.invoke({
      _: "stickers.addStickerToSet",
      stickerset: { _: "inputStickerSetShortName", short_name: slug },
      sticker: {
        _: "inputStickerSetItem",
        document: await this.#uploadSticker(sticker.sticker, sticker.emoji, sticker, user_id),
        emoji: sticker.emoji,
      },
    });
  }

  #getStickerInputDocument(fileId: string): Api.inputDocument {
    const deserializedFileId = deserializeFileId(fileId);
    if (!deserializedFileId.fileReference || deserializedFileId.location.type !== "common") {
      unreachable();
    }

    return {
      _: "inputDocument",
      id: deserializedFileId.location.id,
      access_hash: deserializedFileId.location.accessHash,
      file_reference: deserializedFileId.fileReference,
    };
  }

  async removeStickerFromStickerSet(fileId: string) {
    await this.#c.invoke({
      _: "stickers.removeStickerFromSet",
      sticker: this.#getStickerInputDocument(fileId),
    });
  }

  async replaceStickerEmoji(fileId: string, emoji: string) {
    await this.#c.invoke({ _: "stickers.changeSticker", sticker: this.#getStickerInputDocument(fileId), emoji });
  }

  async replaceStickerInStickerSet(currentStickerFileId: string, newSticker: InputSticker, params?: ReplaceStickerInStickerSetParams) {
    const sticker = this.#getStickerInputDocument(currentStickerFileId);
    if (this.#c.storage.isBot && !params?.userId) {
      throw new InputError("The parameter userId is required.");
    }

    const user_id: Api.InputUser = this.#c.storage.isBot ? await this.#c.getInputUser(params!.userId!) : { _: "inputUserSelf" };
    const inputDocument = await this.#uploadSticker(newSticker.sticker, newSticker.emoji, newSticker, user_id);
    const new_sticker: Api.inputStickerSetItem = { _: "inputStickerSetItem", document: inputDocument, emoji: newSticker.emoji };

    await this.#c.invoke({ _: "stickers.replaceSticker", sticker, new_sticker });
  }

  async deleteStickerSet(slug: string) {
    slug = StickerSetManager.#getSlug(slug);
    await this.#c.invoke({ _: "stickers.deleteStickerSet", stickerset: { _: "inputStickerSetShortName", short_name: slug } });
  }

  async setStickerSetTitle(slug: string, title: string) {
    slug = StickerSetManager.#getSlug(slug);
    await this.#c.invoke({ _: "stickers.renameStickerSet", stickerset: { _: "inputStickerSetShortName", short_name: slug }, title });
  }

  async changeStickerPositionInStickerSet(fileId: string, position: number) {
    await this.#c.invoke({ _: "stickers.changeStickerPosition", sticker: this.#getStickerInputDocument(fileId), position });
  }

  async setStickerSetThumbnail(slug: string, thumbnail: FileSource, params?: SetStickerSetThumbnailParams) {
    slug = StickerSetManager.#getSlug(slug);
    if (this.#c.storage.isBot && !params?.userId) {
      throw new InputError("The parameter userId is required.");
    }

    const user_id: Api.InputUser = this.#c.storage.isBot ? await this.#c.getInputUser(params!.userId!) : { _: "inputUserSelf" };
    const thumb = await this.#uploadSticker(thumbnail, "⭐️", params ?? {}, user_id);
    await this.#c.invoke({ _: "stickers.setStickerSetThumb", stickerset: { _: "inputStickerSetShortName", short_name: slug }, thumb });
  }

  async setCustomEmojiAsStickerSetThumbnail(slug: string, customEmojiId: string) {
    slug = StickerSetManager.#getSlug(slug);
    await this.#c.invoke({ _: "stickers.setStickerSetThumb", stickerset: { _: "inputStickerSetShortName", short_name: slug }, thumb_document_id: BigInt(customEmojiId) });
  }

  async getStickerSet(slug: string) {
    slug = StickerSetManager.#getSlug(slug);
    const result = await this.#c.invoke({ _: "messages.getStickerSet", hash: 0, stickerset: { _: "inputStickerSetShortName", short_name: slug } });
    return constructStickerSet(result);
  }
}
