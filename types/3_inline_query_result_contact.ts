import { InlineKeyboardMarkup } from "./2_inline_keyboard_markup.ts";
import { InputMessageContent } from "./2_input_message_content.ts";

export interface InlineQueryResultContact {
  type: "game";
  id: string;
  phoneNumber: string;
  firstName: string;
  lastName?: string;
  vcard?: string;
  replyMarkup?: InlineKeyboardMarkup;
  inputMessageContent?: InputMessageContent;
  thumbnailUrl?: string;
  thumbnailWidth?: string;
  thumbnailHeight?: string;
}
