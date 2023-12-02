import { cleanObject, UNREACHABLE } from "../1_utilities.ts";
import { peerToChatId, types } from "../2_tl.ts";
import { EntityGetter } from "./1__getters.ts";
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
  const user_ = await getEntity(new types.PeerUser({ user_id: callbackQuery.user_id }));
  if (!user_) {
    UNREACHABLE();
  }
  const user = constructUser(user_);
  const id = String(callbackQuery.query_id);
  const gameShortName = callbackQuery.game_short_name;
  const data = callbackQuery.data !== undefined ? new TextDecoder().decode(callbackQuery.data) : undefined;
  const chatInstance = callbackQuery.chat_instance == 0n ? "" : String(callbackQuery.chat_instance);
  if (callbackQuery instanceof types.UpdateBotCallbackQuery) {
    const message = await getMessage(peerToChatId(callbackQuery.peer), Number(callbackQuery.msg_id));
    if (message == null) {
      UNREACHABLE();
    }
    return cleanObject({ id, from: user, message, chatInstance, data, gameShortName });
  } else {
    return cleanObject({ id, from: user, inlineMessageId: Number(callbackQuery.msg_id.id), chatInstance, data, gameShortName });
  }
}
