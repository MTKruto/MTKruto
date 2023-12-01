import { types } from "../2_tl.ts";

/** Forces the user's client to select the message as the one that is to be replied. */
export interface ForceReply {
  /** Differentiate from other reply markup types. */
  forceReply: true;
  /** A placeholder to be shown in the client's message box. */
  inputFieldPlaceholder?: string;
  /** Whether to only affect specific users. If true, only users that were mentioned will be affected along with the author of the replied message if any. */
  selective?: boolean;
}

export function constructForceReply(replyMarkup_: types.replyKeyboardForceReply) {
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
  return new types.replyKeyboardForceReply({
    selective: replyMarkup.selective || undefined,
    placeholder: replyMarkup.inputFieldPlaceholder,
  });
}
