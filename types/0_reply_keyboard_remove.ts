import { cleanObject } from "../utilities/0_object.ts";
import * as types from "../tl/2_types.ts";

export interface ReplyKeyboardRemove {
  removeKeyboard: true;
  selective?: boolean;
}

export function constructReplyKeyboardRemove(replyMarkup_: types.ReplyKeyboardHide): ReplyKeyboardRemove {
  return cleanObject({ removeKeyboard: true, selective: replyMarkup_.selective });
}

export function replyKeyboardRemoveToTlObject(replyMarkup: ReplyKeyboardRemove) {
  return new types.ReplyKeyboardHide({ selective: replyMarkup.selective || undefined });
}
