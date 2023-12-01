import { cleanObject } from "../1_utilities.ts";
import { types } from "../2_tl.ts";

/** Makes the user's client hide the current custom keyboard. */
export interface ReplyKeyboardRemove {
  /** Differentiate from other reply markup types. */
  removeKeyboard: true;
  /** Whether to only affect specific users. If true, only users that were mentioned will be affected along with the author of the replied message if any. */
  selective?: boolean;
}

export function constructReplyKeyboardRemove(replyMarkup_: types.replyKeyboardHide): ReplyKeyboardRemove {
  return cleanObject({ removeKeyboard: true, selective: replyMarkup_.selective });
}

export function replyKeyboardRemoveToTlObject(replyMarkup: ReplyKeyboardRemove) {
  return new types.replyKeyboardHide({ selective: replyMarkup.selective || undefined });
}
