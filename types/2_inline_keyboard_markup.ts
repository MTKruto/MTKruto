import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { constructInlineKeybaordButton, InlineKeyboardButton } from "./1_inline_keyboard_button.ts";

export interface InlineKeyboardMarkup {
  inlineKeyboard: InlineKeyboardButton[][];
}

export function constructInlineKeyboardMarkup(keyboard_: types.ReplyInlineMarkup): InlineKeyboardMarkup {
  const rows = new Array<InlineKeyboardButton[]>();
  for (const row_ of keyboard_.rows.map((v) => v[as](types.KeyboardButtonRow))) {
    const row = new Array<InlineKeyboardButton>();
    for (const button_ of row_.buttons) {
      row.push(constructInlineKeybaordButton(button_[as](types.KeyboardButton)));
    }
  }
  return { inlineKeyboard: rows };
}
