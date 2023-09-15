import { MessageEntity } from "./0_message_entity.ts";
import { ParseMode } from "./0_parse_mode.ts";
import { InputMessageContent } from "./2_input_message_content.ts";
import { InlineKeyboardMarkup } from "./3_inline_keyboard_markup.ts";

export interface InlineQueryResultMpeg4Gif {
  type: "mpeg4_gif";
  id: string;
  mpeg4Url: string;
  mpeg4Width?: number;
  mpeg4Height?: number;
  mpeg4Duration?: number;
  thumbnailUrl?: string;
  thumbnailMimeType?: string;
  title?: string;
  caption?: string;
  parseMode?: ParseMode;
  captionEntities?: MessageEntity[];
  replyMarkup?: InlineKeyboardMarkup;
  inputMessageContent?: InputMessageContent;
}
