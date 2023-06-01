import * as types from "../tl/2_types.ts";

export interface ForceReply {
  forceReply: true;
  inputFieldPlaceholder?: string;
  selective?: boolean;
}

export function constructForceReply(replyMarkup_: types.ReplyKeyboardForceReply) {
  const replyMarkup: ForceReply = { forceReply: true };
  if (replyMarkup_.placeholder) {
    replyMarkup.inputFieldPlaceholder = replyMarkup_.placeholder;
  }
  if (replyMarkup_.selective) {
    replyMarkup.selective = true;
  }
  return replyMarkup;
}

export function forceReplyToTlObject(replyMarkup: ForceReply) {
  return new types.ReplyKeyboardForceReply({
    selective: replyMarkup.selective || undefined,
    placeholder: replyMarkup.inputFieldPlaceholder,
  });
}
