import { InlineKeyboardMarkup } from "./2_inline_keyboard_markup.ts";
import { InputMessageContent } from "./2_input_message_content.ts";

export interface InlineQueryResultCachedSticker {
  type: "sticker";
  id: string;
  stickerFileId: string;
  replyMarkup?: InlineKeyboardMarkup;
  inputMessageContent?: InputMessageContent;
}
