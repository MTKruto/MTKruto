import { base64DecodeUrlSafe, base64EncodeUrlSafe, cleanObject, UNREACHABLE } from "../1_utilities.ts";
import { enums, peerToChatId, serialize, TLReader, types } from "../2_tl.ts";
import { EntityGetter } from "./1__getters.ts";
import { constructUser, User } from "./1_user.ts";
import { Message, MessageGetter } from "./4_message.ts";

/** A received callback query. */
export interface CallbackQuery {
  /** The identifier of the callback query. */
  id: string;
  /** The user who made the callback query. */
  from: User;
  /** The message from which the callback query was made. Unset if made from an inline result message. */
  message?: Message;
  /** The identifier of the inline result message from which the callback query was made. Unset if made from a message not originating from an inline query result. */
  inlineMessageId?: string;
  /** A special identifier for the chat in which the callback was made from. Useful for inline result messages. */
  chatInstance: string;
  /** The data associated with the button that was used to make the callback query. */
  data?: string;
  /** The short name of the game to be returned. */
  gameShortName?: string;
}

const ERR_INVALID_INLINE_MESSAGE_ID = new Error("Invalid inline message ID");
export function deserializeInlineMessageId(inlineMessageId: string): enums.InputBotInlineMessageID {
  try {
    const buffer = base64DecodeUrlSafe(inlineMessageId);
    const reader = new TLReader(buffer);
    const object = reader.readObject();
    if (object instanceof types.InputBotInlineMessageID || object instanceof types.InputBotInlineMessageID64) {
      return object;
    }
  } catch {
    throw ERR_INVALID_INLINE_MESSAGE_ID;
  }

  throw ERR_INVALID_INLINE_MESSAGE_ID;
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
    return cleanObject({ id, from: user, inlineMessageId: base64EncodeUrlSafe(callbackQuery.msg_id[serialize]()), chatInstance, data, gameShortName });
  }
}
