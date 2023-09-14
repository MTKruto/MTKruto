import { MessageEntity } from "./0_message_entity.ts";
import { ParseMode } from "./0_parse_mode.ts";
import { InlineKeyboardMarkup } from "./2_inline_keyboard_markup.ts";
import { InputMessageContent } from "./2_input_message_content.ts";

export interface InlineQueryResultCachedGif {
  type: "gif";
  id: string;
  gifFileId: string;
  title?: string;
  caption?: string;
  parseMode?: ParseMode;
  captionEntities: MessageEntity[];
  replyMarkup?: InlineKeyboardMarkup;
  inputMessageContent?: InputMessageContent;
}
