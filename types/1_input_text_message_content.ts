import { MessageEntity } from "./0_message_entity.ts";
import { ParseMode } from "./0_parse_mode.ts";

export interface InputTextMessageContent {
  messageText: string;
  parseMode?: ParseMode;
  entities?: MessageEntity[];
  disableWebPagePreview?: boolean;
}
