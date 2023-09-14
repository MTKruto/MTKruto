import { InputMessageContent } from "./2_input_message_content.ts";
import { InlineKeyboardMarkup } from "./3_inline_keyboard_markup.ts";

export interface InlineQueryResultArticle {
  type: "article";
  id: string;
  title: string;
  inputMessageContent?: InputMessageContent;
  replyMarkup?: InlineKeyboardMarkup;
  url?: string;
  hideUrl?: boolean;
  description?: string;
  thumbnailUrl?: string;
  thumbnailWidth?: string;
  thumbnailHeight?: string;
}
