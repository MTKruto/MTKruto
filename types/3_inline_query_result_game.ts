import { InlineKeyboardMarkup } from "./2_inline_keyboard_markup.ts";

export interface InlineQueryResultGame {
  type: "game";
  id: string;
  gameShortName: string;
  replyMarkup?: InlineKeyboardMarkup;
}
