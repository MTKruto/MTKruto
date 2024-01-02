import { types } from "../2_tl.ts";
import { EntityGetter } from "./1__getters.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { constructReactionCount, ReactionCount } from "./1_reaction_count.ts";

export interface MessageReactionCount {
  chat: ChatP;
  messageId: number;
  date: Date;
  reactions: ReactionCount[];
}

export async function constructMessageReactionCount(update: types.UpdateBotMessageReactions, getEntity: EntityGetter): Promise<MessageReactionCount | null> {
  const date = new Date(update.date * 1_000);
  const reactions = update.reactions.map((v) => constructReactionCount(v));
  const entity = await getEntity(update.peer);
  if (entity) {
    const chat = constructChatP(entity);
    const messageId = update.msg_id;
    const messageReactionCount = { chat, messageId, date, reactions };
    return messageReactionCount;
  } else {
    return null;
  }
}
