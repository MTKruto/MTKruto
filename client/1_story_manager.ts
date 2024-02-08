import { types } from "../2_tl.ts";
import { ID } from "../3_types.ts";
import { StoryContent } from "../types/1_story_content.ts";
import { C } from "./0_types.ts";
import {CreateStoryParams} from './0_params.ts';
import { getRandomId } from "../1_utilities.ts";

export class StoryManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async createStory(content: StoryContent, params?: CreateStoryParams) {
    const peer = params?.chatId ? await this.#c.getInputPeer(params.chatId) : new types.InputPeerSelf();
    const randomId = getRandomId();
    this.#c.api.stories.sendStory({peer, random_id: randomId})
  }
}
