import { UNREACHABLE } from "../1_utilities.ts";
import { ForceReply, forceReplyToTlObject } from "./0_force_reply.ts";
import { ReplyKeyboardRemove, replyKeyboardRemoveToTlObject } from "./0_reply_keyboard_remove.ts";
import { UsernameResolver } from "./1__getters.ts";
import { ReplyKeyboardMarkup, replyKeyboardMarkupToTlObject } from "./2_reply_keyboard_markup.ts";
import { InlineKeyboardMarkup, inlineKeyboardMarkupToTlObject } from "./3_inline_keyboard_markup.ts";

export type ReplyMarkup = InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;

export async function replyMarkupToTlObject(replyMarkup: ReplyMarkup, usernameResolver: UsernameResolver) {
  if ("inlineKeyboard" in replyMarkup) {
    return await inlineKeyboardMarkupToTlObject(replyMarkup, usernameResolver);
  } else if ("keyboard" in replyMarkup) {
    return replyKeyboardMarkupToTlObject(replyMarkup);
  } else if ("removeKeyboard" in replyMarkup) {
    return replyKeyboardRemoveToTlObject(replyMarkup);
  } else if ("forceReply" in replyMarkup) {
    return forceReplyToTlObject(replyMarkup);
  } else {
    UNREACHABLE();
  }
}
