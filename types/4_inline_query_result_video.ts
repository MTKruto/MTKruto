import { MessageEntity } from "./0_message_entity.ts";
import { ParseMode } from "./0_parse_mode.ts";
import { InputMessageContent } from "./2_input_message_content.ts";
import { InlineKeyboardMarkup } from "./3_inline_keyboard_markup.ts";

export interface InlineQueryResultVideo {
  type: "video";
  id: string;
  videoUrl: string;
  mimeType?: string;
  thumbnailUrl?: string;
  title?: string;
  caption?: string;
  parseMode?: ParseMode;
  captionEntities?: MessageEntity[];
  videoWidth?: number;
  videoHeight?: number;
  videoDuration?: number;
  description?: string;
  replyMarkup?: InlineKeyboardMarkup;
  inputMessageContent?: InputMessageContent;
}
