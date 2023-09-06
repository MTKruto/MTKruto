import { cleanObject, UNREACHABLE } from "../1_utilities.ts";
import { peerToChatId, types } from "../2_tl.ts";
import { EntityGetter } from "./!0_misc.ts";
import { constructUser, User } from "./1_user.ts";
import { Message, MessageGetter } from "./3_message.ts";

export interface CallbackQuery {
  id: string;
  from: User;
  message?: Message;
  inlineMessageId?: number;
  chatInstance?: string;
  data?: string;
  gameShortName?: string;
}

export async function constructCallbackQuery(callbackQuery: types.UpdateBotCallbackQuery | types.UpdateInlineBotCallbackQuery, getEntity: EntityGetter, getMessage: MessageGetter): Promise<CallbackQuery> {
  const user_ = await getEntity(new types.PeerUser({ userId: callbackQuery.userId }));
  if (!user_) {
    UNREACHABLE();
  }
  const user = constructUser(user_);
  const id = String(callbackQuery.queryId);
  const gameShortName = callbackQuery.gameShortName;
  const data = callbackQuery.data !== undefined ? new TextDecoder().decode(callbackQuery.data) : undefined;
  const chatInstance = callbackQuery.chatInstance == 0n ? "" : String(callbackQuery.chatInstance);
  if (callbackQuery instanceof types.UpdateBotCallbackQuery) {
    const message = await getMessage(peerToChatId(callbackQuery.peer), Number(callbackQuery.msgId));
    if (message == null) {
      UNREACHABLE();
    }
    return cleanObject({ id, from: user, message, chatInstance, data, gameShortName });
  } else {
    return cleanObject({ id, from: user, inlineMessageId: Number(callbackQuery.msgId.id), chatInstance, data, gameShortName });
  }
}
