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
import { base64DecodeUrlSafe, getRandomId } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructStory, constructStoryReportResult, FileType, type ID, type InputStoryContent, type Story, storyInteractiveAreaToTlObject, storyPrivacyToTlObject, type StoryReportResult, type Update } from "../3_types.ts";
import type { CreateStoryParams, EditStoryParams, ReportStoryParams } from "./0_params.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import { checkArray, checkStoryId, isHttpUrl } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { FileManager } from "./2_file_manager.ts";
import type { MessageManager } from "./3_message_manager.ts";

type C = C_ & { fileManager: FileManager; messageManager: MessageManager };

const storyManagerUpdates = [
  "updateStory",
] as const;

type StoryManagerUpdate = Api.Types[(typeof storyManagerUpdates)[number]];

export class StoryManager implements UpdateProcessor<StoryManagerUpdate> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  #updatesToStory(updates: Api.Updates) {
    let updateStory: Api.updateStory | undefined;
    switch (updates._) {
      case "updateShort":
        updateStory = Api.as("updateStory", updates.update);
        break;
      case "updatesCombined":
      case "updates": {
        updateStory = updates.updates.find((v): v is Api.updateStory => Api.is("updateStory", v));
      }
    }
    if (updateStory && Api.is("storyItem", updateStory.story)) {
      return constructStory(updateStory.story, updateStory.peer, this.#c.getPeer);
    }
    unreachable();
  }

  async createStory(chatId: ID, content: InputStoryContent, params?: CreateStoryParams): Promise<Story> {
    this.#c.storage.assertUser("createStory");
    let media: Api.InputMedia | null = null;
    const source = content.type === "video" ? content.video : content.type === "photo" ? content.photo : unreachable();

    if (typeof source === "string") {
      const fileId = this.#c.messageManager.resolveFileId(source, content.type === "video" ? [FileType.Video, FileType.VideoStory] : [FileType.Photo, FileType.PhotoStory]);
      if (fileId !== null) {
        if (content.type === "video") {
          media = {
            _: "inputMediaUploadedDocument",
            nosound_video: true,
            file: { _: "inputFileStoryDocument", id: { ...fileId, _: "inputDocument" } },
            attributes: [{ _: "documentAttributeFilename", file_name: "video.mp4" }, { _: "documentAttributeVideo", w: 720, h: 1280, duration: content.duration, nosound: content.isAnimation || undefined }],
            mime_type: "video/mp4",
          };
        } else {
          media = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" } };
        }
      }
    }

    if (media === null) {
      if (typeof source === "string" && isHttpUrl(source)) {
        throw new InputError("URL not supported.");
      } else {
        const file = await this.#c.fileManager.upload(source, params, null, content.type === "video");
        if (Api.is("inputFileStoryDocument", file)) {
          unreachable();
        }
        const mimeType = contentType(file.name.split(".").slice(-1)[0]) ?? "application/octet-stream";
        if (content.type === "video") {
          media = { _: "inputMediaUploadedDocument", nosound_video: true, file, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, { _: "documentAttributeVideo", w: 720, h: 1280, duration: content.duration, nosound: content.isAnimation || undefined }], mime_type: mimeType };
        } else {
          media = { _: "inputMediaUploadedPhoto", file };
        }
      }
    }

    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? this.#c.messageManager.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;

    const caption = parseResult === undefined ? undefined : parseResult[0];
    const entities = parseResult === undefined ? undefined : parseResult[1];
    const peer = await this.#c.getInputPeer(chatId);
    const random_id = getRandomId();
    const privacy_rules = storyPrivacyToTlObject(params?.privacy ?? { type: "everyone", except: [] }, this.#c.getPeer);
    const media_areas = new Array<Api.MediaArea>();
    const noforwards = params?.isContentProtected || undefined;
    const period = params?.activeFor;
    const pinned = params?.highlight || undefined;
    const albums = params?.albumIds;
    const fwd_from_id = params?.forwardedFromChatId ? await this.#c.getInputPeer(params.forwardedFromChatId) : undefined;
    const fwd_from_story = params?.forwardedFromStoryId;
    const fwd_modified = params?.isRepostedStoryModified || undefined;
    if ((fwd_from_id && !fwd_from_story) || (fwd_from_story && !fwd_from_id)) {
      throw new InputError("Both or neither of the parameters forwardedFromChatId and forwardedFromStoryId must be specified.");
    }

    if (params?.interactiveAreas?.length) {
      for (const area of params.interactiveAreas) {
        media_areas.push(storyInteractiveAreaToTlObject(area, this.#c.getPeer));
      }
    }

    const updates = await this.#c.invoke({
      _: "stories.sendStory",
      peer,
      random_id,
      media,
      privacy_rules,
      caption,
      entities,
      noforwards,
      period,
      pinned,
      media_areas,
      albums,
      fwd_from_id,
      fwd_from_story,
      fwd_modified,
    });
    return this.#updatesToStory(updates);
  }

  async editStory(chatId: ID, storyId: number, params?: EditStoryParams): Promise<Story> {
    this.#c.storage.assertUser("editStory");
    checkStoryId(storyId);
    let media: Api.InputMedia | undefined;

    if (params?.content) {
      const source = params.content.type === "video" ? params.content.video : params.content.type === "photo" ? params.content.photo : unreachable();

      if (typeof source === "string") {
        const fileId = this.#c.messageManager.resolveFileId(source, params.content.type === "video" ? [FileType.Video, FileType.VideoStory] : [FileType.Photo, FileType.PhotoStory]);
        if (fileId !== null) {
          if (params.content.type === "video") {
            media = {
              _: "inputMediaUploadedDocument",
              nosound_video: true,
              file: { _: "inputFileStoryDocument", id: { ...fileId, _: "inputDocument" } },
              attributes: [{ _: "documentAttributeFilename", file_name: "video.mp4" }, { _: "documentAttributeVideo", w: 720, h: 1280, duration: params.content.duration, nosound: params.content.isAnimation || undefined }],
              mime_type: "video/mp4",
            };
          } else {
            media = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" } };
          }
        }
      }

      if (media === undefined) {
        if (typeof source === "string" && isHttpUrl(source)) {
          throw new InputError("URL not supported.");
        } else {
          const file = await this.#c.fileManager.upload(source, params, null, params.content.type === "video");
          if (Api.is("inputFileStoryDocument", file)) {
            unreachable();
          }
          const mimeType = contentType(file.name.split(".").slice(-1)[0]) ?? "application/octet-stream";
          if (params.content.type === "video") {
            media = { _: "inputMediaUploadedDocument", nosound_video: true, file, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, { _: "documentAttributeVideo", w: 720, h: 1280, duration: params.content.duration, nosound: params.content.isAnimation || undefined }], mime_type: mimeType };
          } else {
            media = { _: "inputMediaUploadedPhoto", file };
          }
        }
      }
    }

    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? this.#c.messageManager.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }, true) : undefined;

    const id = storyId;
    const caption = parseResult === undefined ? undefined : parseResult[0];
    const entities = parseResult === undefined ? undefined : parseResult[1] ?? [];
    const peer = await this.#c.getInputPeer(chatId);
    const privacy_rules = params?.privacy ? storyPrivacyToTlObject(params.privacy, this.#c.getPeer) : undefined;
    let media_areas: Api.MediaArea[] | undefined;

    if (params?.interactiveAreas) {
      media_areas = [];
      for (const area of params.interactiveAreas) {
        media_areas.push(storyInteractiveAreaToTlObject(area, this.#c.getPeer));
      }
    }

    const updates = await this.#c.invoke({
      _: "stories.editStory",
      peer,
      id,
      media,
      privacy_rules,
      caption,
      entities,
      media_areas,
    });
    return this.#updatesToStory(updates);
  }

  async getStories(chatId: ID, storyIds: number[]): Promise<Story[]> {
    this.#c.storage.assertUser("getStories");
    checkArray(storyIds, checkStoryId);
    const peer = await this.#c.getInputPeer(chatId);
    const stories_ = await this.#c.invoke({ _: "stories.getStoriesByID", peer, id: storyIds });
    const stories = new Array<Story>();
    for (const story of stories_.stories) {
      stories.push(constructStory(Api.as("storyItem", story), await this.#c.inputPeerToPeer(peer), this.#c.getPeer));
    }
    return stories;
  }

  async getStory(chatId: ID, storyId: number): Promise<Story | null> {
    this.#c.storage.assertUser("getStory");
    return (await this.getStories(chatId, [storyId]))[0] ?? null;
  }

  async deleteStories(chatId: ID, storyIds: number[]) {
    this.#c.storage.assertUser("deleteStories");
    checkArray(storyIds, checkStoryId);
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({ _: "stories.deleteStories", peer, id: storyIds });
  }

  async deleteStory(chatId: ID, storyId: number) {
    this.#c.storage.assertUser("deleteStory");
    await this.deleteStories(chatId, [storyId]);
  }

  async #togglePinned(chatId: ID, storyIds: number[], pinned: boolean) {
    checkArray(storyIds, checkStoryId);
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({ _: "stories.togglePinned", peer, id: storyIds, pinned });
  }

  async addStoriesToHighlights(chatId: ID, storyIds: number[]) {
    this.#c.storage.assertUser("addStoriesToHighlights");
    await this.#togglePinned(chatId, storyIds, true);
  }

  async addStoryToHighlights(chatId: ID, storyId: number) {
    this.#c.storage.assertUser("addStoryToHighlights");
    await this.addStoriesToHighlights(chatId, [storyId]);
  }

  async removeStoriesFromHighlights(chatId: ID, storyIds: number[]) {
    this.#c.storage.assertUser("removeStoriesFromHighlights");
    await this.#togglePinned(chatId, storyIds, false);
  }

  async removeStoryFromHighlights(chatId: ID, storyId: number) {
    this.#c.storage.assertUser("removeStoryFromHighlights");
    await this.removeStoriesFromHighlights(chatId, [storyId]);
  }

  canHandleUpdate(update: Api.Update): update is StoryManagerUpdate {
    return Api.isOneOf(storyManagerUpdates, update);
  }

  handleUpdate(update: StoryManagerUpdate): Update | null {
    if (Api.is("storyItemDeleted", update.story)) {
      const chatId = Api.peerToChatId(update.peer);
      const storyId = update.story.id;
      return { type: "deletedStory", deletedStory: { chatId, storyId } };
    } else if (Api.is("storyItem", update.story)) {
      const story = constructStory(update.story, update.peer, this.#c.getPeer);
      return { type: "story", story };
    } else {
      return null;
    }
  }

  async #reportStories(chatId: ID, storyIds: number[], params: ReportStoryParams | undefined) {
    const peer = await this.#c.getInputPeer(chatId);
    checkArray(storyIds, checkStoryId);
    const id = storyIds;
    const result = await this.#c.invoke({ _: "stories.report", peer, id, message: params?.text ?? "", option: params?.option ? base64DecodeUrlSafe(params.option) : new Uint8Array() });
    return constructStoryReportResult(result);
  }

  async reportStory(chatId: ID, storyId: number, params?: ReportStoryParams): Promise<StoryReportResult> {
    this.#c.storage.assertUser("reportStory");
    return await this.#reportStories(chatId, [storyId], params);
  }

  async reportStories(chatId: ID, storyIds: number[], params?: ReportStoryParams): Promise<StoryReportResult> {
    this.#c.storage.assertUser("reportStories");
    return await this.#reportStories(chatId, storyIds, params);
  }
}
