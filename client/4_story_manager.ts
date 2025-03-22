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

import { contentType, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getRandomId } from "../1_utilities.ts";
import { Api, as, inputPeerToPeer, is, isOneOf, peerToChatId } from "../2_tl.ts";
import { constructStory, FileType, ID, Story, storyInteractiveAreaToTlObject, storyPrivacyToTlObject, Update } from "../3_types.ts";
import { InputStoryContent } from "../types/1_input_story_content.ts";
import { CreateStoryParams } from "./0_params.ts";
import { UpdateProcessor } from "./0_update_processor.ts";
import { checkArray, checkStoryId, isHttpUrl } from "./0_utilities.ts";
import { C as C_ } from "./1_types.ts";
import { FileManager } from "./2_file_manager.ts";
import { MessageManager } from "./3_message_manager.ts";

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

  async #updatesToStory(updates: Api.Updates) {
    if (Api.is("updates", updates)) {
      const updateStory = updates.updates.find((v): v is Api.updateStory => is("updateStory", v));
      if (updateStory && is("storyItem", updateStory.story)) {
        return await constructStory(updateStory.story, updateStory.peer, this.#c.getEntity);
      }
    }
    unreachable();
  }

  async createStory(chatId: ID, content: InputStoryContent, params?: CreateStoryParams) {
    this.#c.storage.assertUser("createStory");
    let media: Api.InputMedia | null = null;
    const source = "video" in content ? content.video : "photo" in content ? content.photo : unreachable();

    if (typeof source === "string") {
      const fileId = this.#c.messageManager.resolveFileId(source, FileType.Photo);
      if (fileId != null) {
        media = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" } };
      }
    }

    if (media == null) {
      if (typeof source === "string" && isHttpUrl(source)) {
        throw new InputError("URL not supported.");
      } else {
        const file = await this.#c.fileManager.upload(source, params, null, "video" in content);
        if (Api.is("inputFileStoryDocument", file)) {
          unreachable();
        }
        const mimeType = contentType(file.name.split(".").slice(-1)[0]) ?? "application/octet-stream";
        if ("video" in content) {
          media = { _: "inputMediaUploadedDocument", file, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, { _: "documentAttributeVideo", w: 720, h: 1280, duration: content.duration }], mime_type: mimeType };
        } else {
          media = { _: "inputMediaUploadedPhoto", file };
        }
      }
    }

    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? await this.#c.messageManager.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;

    const caption = parseResult === undefined ? undefined : parseResult[0];
    const entities = parseResult === undefined ? undefined : parseResult[1];
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const privacyRules = await storyPrivacyToTlObject(params?.privacy ?? { everyoneExcept: [] }, this.#c.getEntity);
    const mediaAreas = new Array<Api.MediaArea>();

    if (params?.interactiveAreas?.length) {
      for (const area of params.interactiveAreas) {
        mediaAreas.push(await storyInteractiveAreaToTlObject(area, this.#c.getEntity));
      }
    }

    const updates = await this.#c.invoke({ _: "stories.sendStory", peer, random_id: randomId, media, privacy_rules: privacyRules, caption, entities, noforwards: params?.protectContent ? true : undefined, period: params?.activeFor, pinned: params?.highlight ? true : undefined, media_areas: mediaAreas });
    return await this.#updatesToStory(updates);
  }

  async getStories(chatId: ID, storyIds: number[]) {
    this.#c.storage.assertUser("getStories");
    checkArray(storyIds, checkStoryId);
    const peer = await this.#c.getInputPeer(chatId);
    const stories_ = await this.#c.invoke({ _: "stories.getStoriesByID", peer, id: storyIds });
    const stories = new Array<Story>();
    for (const story of stories_.stories) {
      stories.push(await constructStory(as("storyItem", story), inputPeerToPeer(peer), this.#c.getEntity));
    }
    return stories;
  }

  async getStory(chatId: ID, storyId: number) {
    this.#c.storage.assertUser("getStory");
    return (await this.getStories(chatId, [storyId]))[0] ?? null;
  }

  async deleteStories(chatId: ID, storyIds: number[]) {
    this.#c.storage.assertUser("deleteStories");
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
    return isOneOf(storyManagerUpdates, update);
  }

  async handleUpdate(update: StoryManagerUpdate): Promise<Update | null> {
    if (Api.is("storyItemDeleted", update.story)) {
      const chatId = peerToChatId(update.peer);
      const storyId = update.story.id;
      return { deletedStory: { chatId, storyId } };
    } else if (Api.is("storyItem", update.story)) {
      const story = await constructStory(update.story, update.peer, this.#c.getEntity);
      return { story };
    } else {
      return null;
    }
  }
}
