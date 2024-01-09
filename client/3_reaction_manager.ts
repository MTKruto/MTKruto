import { UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ID, Reaction, reactionEqual, reactionToTlObject } from "../3_types.ts";
import { AddReactionParams, SetReactionsParams } from "./0_params.ts";
import { C as C_ } from "./0_types.ts";
import { MessageManager } from "./2_message_manager.ts";

interface C extends C_ {
  messageManager: MessageManager;
}

export class ReactionManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]) {
    // TODO: sync with storage
    await this.#c.api.messages.setChatAvailableReactions({
      peer: await this.#c.getInputPeer(chatId),
      available_reactions: availableReactions == "none" ? new types.ChatReactionsNone() : availableReactions == "all" ? new types.ChatReactionsAll() : Array.isArray(availableReactions) ? new types.ChatReactionsSome({ reactions: availableReactions.map((v) => v.type == "emoji" ? new types.ReactionEmoji({ emoticon: v.emoji }) : new types.ReactionCustomEmoji({ document_id: BigInt(v.id) })) }) : UNREACHABLE(),
    });
  }

  async #sendReaction(chatId: number, messageId: number, reactions: Reaction[], params?: AddReactionParams) {
    await this.#c.api.messages.sendReaction({
      peer: await this.#c.getInputPeer(chatId),
      msg_id: messageId,
      reaction: reactions.map((v) => reactionToTlObject(v)),
      big: params?.big ? true : undefined,
      add_to_recent: params?.addToRecents ? true : undefined,
    });
  }

  async setReactions(chatId: number, messageId: number, reactions: Reaction[], params?: SetReactionsParams) {
    await this.#sendReaction(chatId, messageId, reactions, params);
  }

  async addReaction(chatId: number, messageId: number, reaction: Reaction, params?: AddReactionParams) {
    const chosenReactions = await this.#c.messageManager.getMessage(chatId, messageId).then((v) => v?.reactions ?? []).then((v) => v.filter((v) => v.chosen));
    for (const r of chosenReactions) {
      if (reactionEqual(r.reaction, reaction)) {
        return;
      }
    }
    const reactions = [reaction, ...chosenReactions.map((v) => v.reaction)];
    await this.setReactions(chatId, messageId, reactions, params);
  }

  async removeReaction(chatId: number, messageId: number, reaction: Reaction) {
    const chosenReactions = await this.#c.messageManager.getMessage(chatId, messageId).then((v) => v?.reactions ?? []).then((v) => v.filter((v) => v.chosen));
    for (const r of chosenReactions) {
      if (reactionEqual(r.reaction, reaction)) {
        const reactions = chosenReactions.filter((v) => v != r).map((v) => v.reaction);
        await this.setReactions(chatId, messageId, reactions);
        break;
      }
    }
  }
}
