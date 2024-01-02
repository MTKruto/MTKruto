import { types } from "../2_tl.ts";
import { cleanObject } from "../1_utilities.ts";
import { constructReaction, Reaction } from "./0_reaction.ts";
import { EntityGetter } from "./1__getters.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { constructUser, User } from "./1_user.ts";

export interface MessageReactions {
  chat: ChatP;
  messageId: number;
  user?: User;
  actorChat?: ChatP;
  date: Date;
  oldReactions: Reaction[];
  newReactions: Reaction[];
}

export async function constructMessageReactions(update: types.UpdateBotMessageReaction, getEntity: EntityGetter): Promise<MessageReactions | null> {
  const date = new Date(update.date * 1_000);
  const oldReactions = update.old_reactions.map((v) => constructReaction(v));
  const newReactions = update.new_reactions.map((v) => constructReaction(v));
  const messageId = update.msg_id;

  let entity = await getEntity(update.peer);
  if (!entity) {
    return null;
  }
  const chat = constructChatP(entity);

  let user: User | undefined = undefined;
  let actorChat: ChatP | undefined = undefined;

  entity = await getEntity(update.actor);
  if (!entity) {
    return null;
  }
  if (entity instanceof types.User) {
    user = constructUser(entity);
  } else {
    actorChat = constructChatP(entity);
  }

  return cleanObject({
    chat,
    messageId,
    user,
    actorChat,
    date,
    oldReactions,
    newReactions,
  });
}
