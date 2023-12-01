import { types } from "../2_tl.ts";
import { UsernameResolver } from "./1__getters.ts";
import { constructInlineKeyboardButton, InlineKeyboardButton, inlineKeyboardButtonToTlObject } from "./2_inline_keyboard_button.ts";

/** This object represents an inline keyboard that appears right next to the message it belongs to. */
export interface InlineKeyboardMarkup {
  /** Array of button rows, each represented by an Array of InlineKeyboardButton objects */
  inlineKeyboard: InlineKeyboardButton[][];
}

export function constructInlineKeyboardMarkup(keyboard_: types.replyInlineMarkup): InlineKeyboardMarkup {
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
  const rows_ = new Array<types.keyboardButtonRow>();
  for (const row of keyboard.inlineKeyboard) {
    const row_ = new Array<types.KeyboardButton>();
    for (const button of row) {
      row_.push(await inlineKeyboardButtonToTlObject(button, usernameResolver));
    }
    rows_.push(new types.keyboardButtonRow({ buttons: row_ }));
  }
  return new types.replyInlineMarkup({ rows: rows_ });
}
