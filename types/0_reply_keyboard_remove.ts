import * as types from "../tl/2_types.ts";

export interface ReplyKeyboardRemove {
  removeKeyboard: true;
  selective?: boolean;
}

export function constructReplyKeyboardRemove(replyMarkup_: types.ReplyKeyboardHide) {
  const replyMarkup: ReplyKeyboardRemove = { removeKeyboard: true };
  if (replyMarkup_.selective) {
    replyMarkup.selective = true;
  }
  return replyMarkup;
}

export function replyKeyboardRemoveToTlObject(replyMarkup: ReplyKeyboardRemove) {
  return new types.ReplyKeyboardHide({ selective: replyMarkup.selective || undefined });
}
