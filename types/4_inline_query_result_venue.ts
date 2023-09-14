import { InputMessageContent } from "./2_input_message_content.ts";
import { InlineKeyboardMarkup } from "./3_inline_keyboard_markup.ts";

export interface InlineQueryResultVenue {
  type: "venue";
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  fourSquareId?: string;
  foursquareType?: string;
  googlePlaceId?: string;
  googlePlaceType?: string;
  replyMarkup?: InlineKeyboardMarkup;
  inputMessageContent?: InputMessageContent;
  thumbnailUrl?: string;
  thumbnailWidth?: string;
  thumbnailHeight?: string;
}
