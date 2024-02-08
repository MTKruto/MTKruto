import { contentType } from "../0_deps.ts";
import { getRandomId } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";
import { FileType, storyPrivacyToTlObject } from "../3_types.ts";
import { StoryContent } from "../types/1_story_content.ts";
import { CreateStoryParams } from "./0_params.ts";
import { C as C_ } from "./0_types.ts";
import { getFileContents, isHttpUrl } from "./0_utilities.ts";
import { FileManager } from "./1_file_manager.ts";
import { MessageManager } from "./2_message_manager.ts";

type C = C_ & { fileManager: FileManager; messageManager: MessageManager };

export class StoryManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async createStory(content: StoryContent, params?: CreateStoryParams) {
    let media: enums.InputMedia | null = null;
    const source = "video" in content ? content.video : content.photo;

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
    const peer = params?.chatId ? await this.#c.getInputPeer(params.chatId) : new types.InputPeerSelf();
    const randomId = getRandomId();
    const privacyRules = await storyPrivacyToTlObject(params?.privacy ?? { everyoneExcept: [] }, this.#c.getEntity);

    await this.#c.api.stories.sendStory({
      peer,
      random_id: randomId,
      media,
      privacy_rules: privacyRules,
      caption,
      entities,
    });
  }
}
