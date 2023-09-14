import { MessageEntity } from "./0_message_entity.ts";
import { ParseMode } from "./0_parse_mode.ts";
import { InlineKeyboardMarkup } from "./2_inline_keyboard_markup.ts";
import { InputMessageContent } from "./2_input_message_content.ts";

export interface InlineQueryResultAudio {
  type: "audio";
  id: string;
  audioUrl: string;
  title: string;
  caption?: string;
  parseMode?: ParseMode;
  captionEntities: MessageEntity[];
  performer?: string;
  audioDuration?: number;
  replyMarkup?: InlineKeyboardMarkup;
  inputMessageContent?: InputMessageContent;
}
