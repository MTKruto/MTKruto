import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { InlineKeyboardButton } from "./0_inline_keyboard_button.ts";

export interface InlineKeyboardMarkup {
  inlineKeyboard: InlineKeyboardButton[][];
}

export function constructInlineKeyboardMarkup(keyboard_: types.ReplyInlineMarkup): InlineKeyboardMarkup {
  const rows = new Array<InlineKeyboardButton[]>();

  for (const row_ of keyboard_.rows.map((v) => v[as](types.KeyboardButtonRow))) {
    const row = new Array<InlineKeyboardButton>();

    for (const button_ of row_.buttons) {
      if (button_ instanceof types.KeyboardButtonURL) {
        row.push({ text: button_.text, url: button_.url });
      } else if (button_ instanceof types.KeyboardButtonCallback) {
        row.push({ text: button_.text, callbackData: new TextDecoder().decode(button_.data) });
      } else if (button_ instanceof types.KeyboardButtonWebView || button_ instanceof types.KeyboardButtonSimpleWebView) {
        row.push({ text: button_.text, webApp: { url: button_.url } });
      } else if (button_ instanceof types.KeyboardButtonSwitchInline) {
        if (button_.samePeer) {
          row.push({ text: button_.text, switchInlineQueryCurrentChat: button_.query });
        } else {
          row.push({ text: button_.text, switchInlineQuery: button_.query });
        }
      } else if (button_ instanceof types.KeyboardButtonBuy) {
        row.push({ text: button_.text, pay: true });
      }
    }
  }

  return { inlineKeyboard: rows };
}
