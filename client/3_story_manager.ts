import { contentType } from "../0_deps.ts";
import { getRandomId, UNREACHABLE } from "../1_utilities.ts";
import { as, enums, inputPeerToPeer, peerToChatId, types } from "../2_tl.ts";
import { constructStory, FileType, ID, Story, storyInteractiveAreaToTlObject, storyPrivacyToTlObject, Update } from "../3_types.ts";
import { InputStoryContent } from "../types/1_input_story_content.ts";
import { CreateStoryParams } from "./0_params.ts";
import { C as C_ } from "./0_types.ts";
import { getFileContents, isHttpUrl } from "./0_utilities.ts";
import { FileManager } from "./1_file_manager.ts";
import { MessageManager } from "./2_message_manager.ts";

type C = C_ & { fileManager: FileManager; messageManager: MessageManager };

type StoryManagerUpdate = types.UpdateStory;

export class StoryManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async #updatesToStory(updates: enums.Updates) {
    if (updates instanceof types.Updates) {
      const updateStory = updates.updates.find((v): v is types.UpdateStory => v instanceof types.UpdateStory);
      if (updateStory && updateStory.story instanceof types.StoryItem) {
        return await constructStory(updateStory.story, updateStory.peer, this.#c.getEntity);
      }
    }
    UNREACHABLE();
  }

  async createStory(chatId: ID, content: InputStoryContent, params?: CreateStoryParams) {
    let media: enums.InputMedia | null = null;
    const source = "video" in content ? content.video : "photo" in content ? content.photo : UNREACHABLE();

    if (typeof source === "string") {
      const fileId = this.#c.messageManager.resolveFileId(source, FileType.Photo);
      if (fileId != null) {
        media = new types.InputMediaPhoto({
          id: new types.InputPhoto(fileId),
        });
      }
    }

    if (media == null) {
      if (typeof source === "string" && isHttpUrl(source)) {
        throw new Error("URL not supported");
      } else {
        const [contents, fileName] = await getFileContents(source);
        const mimeType = contentType(fileName.split(".").slice(-1)[0]) ?? "application/octet-stream";
        const file = await this.#c.fileManager.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
        if ("video" in content) {
          media = new types.InputMediaUploadedDocument({
            file,
            attributes: [new types.DocumentAttributeFilename({ file_name: fileName }), new types.DocumentAttributeVideo({ w: 720, h: 1280, duration: content.duration })],
            mime_type: mimeType,
          });
        } else {
          media = new types.InputMediaUploadedPhoto({ file });
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
    const mediaAreas = new Array<enums.MediaArea>();

    if (params?.interactiveAreas?.length) {
      for (const area of params.interactiveAreas) {
        mediaAreas.push(await storyInteractiveAreaToTlObject(area, this.#c.getEntity));
      }
    }

    const updates = await this.#c.api.stories.sendStory({
      peer,
      random_id: randomId,
      media,
      privacy_rules: privacyRules,
      caption,
      entities,
      noforwards: params?.protectContent ? true : undefined,
      period: params?.activeFor,
      pinned: params?.highlight ? true : undefined,
      media_areas: mediaAreas,
    });
    return await this.#updatesToStory(updates);
  }

  async getStories(chatId: ID, storyIds: number[]) {
    const peer = await this.#c.getInputPeer(chatId);
    const stories_ = await this.#c.api.stories.getStoriesByID({ peer, id: storyIds });
    const stories = new Array<Story>();
    for (const story of stories_.stories) {
      stories.push(await constructStory(story[as](types.StoryItem), inputPeerToPeer(peer), this.#c.getEntity));
    }
    return stories;
  }

  async getStory(chatId: ID, storyId: number) {
    return await this.getStories(chatId, [storyId]).then((v) => v[0] ?? null);
  }

  async deleteStories(chatId: ID, storyIds: number[]) {
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.api.stories.deleteStories({ peer, id: storyIds });
  }

  async deleteStory(chatId: ID, storyId: number) {
    await this.deleteStories(chatId, [storyId]);
  }

  async #togglePinned(chatId: ID, storyIds: number[], pinned: boolean) {
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.api.stories.togglePinned({ peer, id: storyIds, pinned });
  }

  async addStoriesToHighlights(chatId: ID, storyIds: number[]) {
    await this.#togglePinned(chatId, storyIds, true);
  }

  async addStoryToHighlights(chatId: ID, storyId: number) {
    await this.addStoriesToHighlights(chatId, [storyId]);
  }

  async removeStoriesFromHighlights(chatId: ID, storyIds: number[]) {
    await this.#togglePinned(chatId, storyIds, false);
  }

  async removeStoryFromHighlights(chatId: ID, storyId: number) {
    await this.removeStoriesFromHighlights(chatId, [storyId]);
  }

  static canHandleUpdate(update: enums.Update): update is StoryManagerUpdate {
    return update instanceof types.UpdateStory;
  }

  async handleUpdate(update: StoryManagerUpdate): Promise<Update | null> {
    if (update.story instanceof types.StoryItemDeleted) {
      const chatId = peerToChatId(update.peer);
      const storyId = update.story.id;
      return { deletedStory: { chatId, storyId } };
    } else if (update.story instanceof types.StoryItem) {
      const story = await constructStory(update.story, update.peer, this.#c.getEntity);
      return { story };
    } else {
      return null;
    }
  }
}
