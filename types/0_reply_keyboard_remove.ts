import { cleanObject } from "../utilities/0_object.ts";
import * as types from "../tl/2_types.ts";

/** Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button. */
export interface ReplyKeyboardRemove {
  /** Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use _one_time_keyboard_ in `ReplyKeyboardMarkup`) */
  removeKeyboard: true;
  /** Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the `Message` object; 2) if the bot's message is a reply (has _reply_to_message_id_), sender of the original message. */
  selective?: boolean;
}

export function constructReplyKeyboardRemove(replyMarkup_: types.ReplyKeyboardHide): ReplyKeyboardRemove {
  return cleanObject({ removeKeyboard: true, selective: replyMarkup_.selective });
}

export function replyKeyboardRemoveToTlObject(replyMarkup: ReplyKeyboardRemove) {
  return new types.ReplyKeyboardHide({ selective: replyMarkup.selective || undefined });
}
