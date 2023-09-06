import { types } from "../2_tl.ts";

/** Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. */
export interface ForceReply {
  /** Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
  forceReply: true;
  /** Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
  inputFieldPlaceholder?: string;
  /** Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. */
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
