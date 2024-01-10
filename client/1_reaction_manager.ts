import { UNREACHABLE } from "../1_utilities.ts";
import { enums, peerToChatId, types } from "../2_tl.ts";
import { constructMessageReaction, constructMessageReactionCount, constructMessageReactions, Update } from "../3_types.ts";
import { C } from "./0_types.ts";

export class ReactionManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  static canHandleUpdate(update: enums.Update): update is types.UpdateBotMessageReactions | types.UpdateBotMessageReaction | types.UpdateMessageReactions | types.UpdateChannelMessageViews | types.UpdateChannelMessageForwards {
    return update instanceof types.UpdateBotMessageReactions || update instanceof types.UpdateBotMessageReaction || update instanceof types.UpdateMessageReactions || update instanceof types.UpdateChannelMessageViews || update instanceof types.UpdateChannelMessageForwards;
  }

  async handleUpdate(update: types.UpdateBotMessageReactions | types.UpdateBotMessageReaction | types.UpdateMessageReactions | types.UpdateChannelMessageViews | types.UpdateChannelMessageForwards): Promise<Update | null> {
    if (update instanceof types.UpdateBotMessageReactions) {
      const messageReactionCount = await constructMessageReactionCount(update, this.#c.getEntity);
      if (messageReactionCount) {
        return { messageReactionCount };
      } else {
        return null;
      }
    } else if (update instanceof types.UpdateBotMessageReaction) {
      const messageReactions = await constructMessageReactions(update, this.#c.getEntity);
      if (messageReactions) {
        return { messageReactions };
      } else {
        return null;
      }
    } else if (update instanceof types.UpdateMessageReactions) {
      const chatId = peerToChatId(update.peer);
      const message = await this.#c.storage.getMessage(chatId, update.msg_id);
      if (message instanceof types.Message) {
        message.reactions = update.reactions;
        await this.#c.storage.setMessage(chatId, update.msg_id, message);
        const views = message.views ?? 0;
        const forwards = message.forwards ?? 0;
        const recentReactions = update.reactions.recent_reactions ?? [];
        const reactions = update.reactions.results.map((v) => constructMessageReaction(v, recentReactions));
        return ({ messageInteractions: { chatId, messageId: update.msg_id, reactions, views, forwards } });
      } else {
        return null;
      }
    } else if (update instanceof types.UpdateChannelMessageViews || update instanceof types.UpdateChannelMessageForwards) {
      const chatId = peerToChatId(new types.PeerChannel(update));
      const message = await this.#c.storage.getMessage(chatId, update.id);
      if (message instanceof types.Message) {
        if ("views" in update) {
          message.views = update.views;
        }
        if ("forwards" in update) {
          message.forwards = update.forwards;
        }
        const views = message.views ?? 0;
        const forwards = message.forwards ?? 0;
        const recentReactions = message.reactions?.recent_reactions ?? [];
        const reactions = message.reactions?.results.map((v) => constructMessageReaction(v, recentReactions)) ?? [];
        return { messageInteractions: { chatId, messageId: update.id, reactions, views, forwards } };
      } else {
        return null;
      }
    } else {
      UNREACHABLE();
    }
  }
}
