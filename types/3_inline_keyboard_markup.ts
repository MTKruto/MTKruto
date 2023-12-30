import { enums, types } from "../2_tl.ts";
import { UsernameResolver } from "./1__getters.ts";
import { constructInlineKeyboardButton, InlineKeyboardButton, inlineKeyboardButtonToTlObject } from "./2_inline_keyboard_button.ts";

export interface InlineKeyboardMarkup {
  inlineKeyboard: InlineKeyboardButton[][];
}

export function constructInlineKeyboardMarkup(keyboard_: types.ReplyInlineMarkup): InlineKeyboardMarkup {
  const rows = new Array<InlineKeyboardButton[]>();
  for (const row_ of keyboard_.rows) {
    const row = new Array<InlineKeyboardButton>();
    for (const button_ of row_.buttons) {
      row.push(constructInlineKeyboardButton(button_));
    }
    rows.push(row);
  }
  return { inlineKeyboard: rows };
}

export async function inlineKeyboardMarkupToTlObject(keyboard: InlineKeyboardMarkup, usernameResolver: UsernameResolver) {
  const rows_ = new Array<types.KeyboardButtonRow>();
  for (const row of keyboard.inlineKeyboard) {
    const row_ = new Array<enums.KeyboardButton>();
    for (const button of row) {
      row_.push(await inlineKeyboardButtonToTlObject(button, usernameResolver));
    }
    rows_.push(new types.KeyboardButtonRow({ buttons: row_ }));
  }
  return new types.ReplyInlineMarkup({ rows: rows_ });
}
