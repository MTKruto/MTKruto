import { InlineQueryResultArticle } from "./3_inline_query_result_article.ts";
import { InlineQueryResultAudio } from "./3_inline_query_result_audio.ts";
import { InlineQueryResultCachedAudio } from "./3_inline_query_result_cached_audio.ts";
import { InlineQueryResultCachedDocument } from "./3_inline_query_result_cached_document.ts";
import { InlineQueryResultCachedGif } from "./3_inline_query_result_cached_gif.ts";
import { InlineQueryResultCachedMpeg4Gif } from "./3_inline_query_result_cached_mpeg4_gif.ts";
import { InlineQueryResultCachedPhoto } from "./3_inline_query_result_cached_photo.ts";
import { InlineQueryResultCachedSticker } from "./3_inline_query_result_cached_sticker.ts";
import { InlineQueryResultCachedVideo } from "./3_inline_query_result_cached_video.ts";
import { InlineQueryResultCachedVoice } from "./3_inline_query_result_cached_voice.ts";
import { InlineQueryResultContact } from "./3_inline_query_result_contact.ts";
import { InlineQueryResultDocument } from "./3_inline_query_result_document.ts";
import { InlineQueryResultGame } from "./3_inline_query_result_game.ts";
import { InlineQueryResultGif } from "./3_inline_query_result_gif.ts";
import { InlineQueryResultLocation } from "./3_inline_query_result_location.ts";
import { InlineQueryResultMpeg4Gif } from "./3_inline_query_result_mpeg4_gif.ts";
import { InlineQueryResultPhoto } from "./3_inline_query_result_photo.ts";
import { InlineQueryResultVenue } from "./3_inline_query_result_venue.ts";
import { InlineQueryResultVideo } from "./3_inline_query_result_video.ts";
import { InlineQueryResultVoice } from "./3_inline_query_result_voice.ts";

export type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice;
