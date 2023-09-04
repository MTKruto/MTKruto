import * as types from "../tl/2_types.ts";
import { constructInlineKeyboardButton, InlineKeyboardButton, inlineKeyboardButtonToTlObject } from "./1_inline_keyboard_button.ts";

/** This object represents an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) that appears right next to the message it belongs to. */
export interface InlineKeyboardMarkup {
  /** Array of button rows, each represented by an Array of InlineKeyboardButton objects */
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

export async function inlineKeyboardMarkupToTlObject(keyboard: InlineKeyboardMarkup, usernameResolver: Parameters<typeof inlineKeyboardButtonToTlObject>[1]) {
  const rows_ = new Array<types.KeyboardButtonRow>();
  for (const row of keyboard.inlineKeyboard) {
    const row_ = new Array<types.TypeKeyboardButton>();
    for (const button of row) {
      row_.push(await inlineKeyboardButtonToTlObject(button, usernameResolver));
    }
    rows_.push(new types.KeyboardButtonRow({ buttons: row_ }));
  }
  return new types.ReplyInlineMarkup({ rows: rows_ });
}
