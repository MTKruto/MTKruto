import { InputMessageContent } from "./2_input_message_content.ts";
import { InlineKeyboardMarkup } from "./3_inline_keyboard_markup.ts";

export interface InlineQueryResultLocation {
  type: "location";
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  horizontalAccuracy?: number;
  livePeriod?: number;
  heading?: number;
  proximityAlertRadius?: number;
  replyMarkup?: InlineKeyboardMarkup;
  inputMessageContent?: InputMessageContent;
  thumbnailUrl?: string;
  thumbnailWidth?: string;
  thumbnailHeight?: string;
}
