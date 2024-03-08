import { cleanObject, fromUnixTimestamp } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { constructReaction, Reaction } from "./0_reaction.ts";
import { EntityGetter } from "./1__getters.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { constructUser, User } from "./1_user.ts";

/** The reactions of a user to a messages in a group. */
export interface MessageReactions {
  /** The chat containing the message the user reacted to. */
  chat: ChatP;
  /** The message's identifier. */
  messageId: number;
  /** The user that changed the reaction, if the user isn't anonymous. */
  user?: User;
  /** The chat on behalf of which the reaction was changed, if the user is anonymous. */
  actorChat?: ChatP;
  /** Date of the change in Unix time. */
  date: Date;
  /** Previous list of reaction types that were set by the user. */
  oldReactions: Reaction[];
  /** New list of reaction types that have been set by the user. */
  newReactions: Reaction[];
}

export async function constructMessageReactions(update: types.UpdateBotMessageReaction, getEntity: EntityGetter): Promise<MessageReactions | null> {
  const date = fromUnixTimestamp(update.date);
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
