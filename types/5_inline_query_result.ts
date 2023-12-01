import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";
import { FileID } from "./0__file_id.ts";
import { MessageEntity } from "./0_message_entity.ts";
import { ParseMode } from "./0_parse_mode.ts";
import { UsernameResolver } from "./1__getters.ts";
import { InlineQueryResultArticle } from "./4_inline_query_result_article.ts";
import { InlineQueryResultAudio } from "./4_inline_query_result_audio.ts";
import { InlineQueryResultCachedAudio } from "./4_inline_query_result_cached_audio.ts";
import { InlineQueryResultCachedDocument } from "./4_inline_query_result_cached_document.ts";
import { InlineQueryResultCachedGif } from "./4_inline_query_result_cached_gif.ts";
import { InlineQueryResultCachedMpeg4Gif } from "./4_inline_query_result_cached_mpeg4_gif.ts";
import { InlineQueryResultCachedPhoto } from "./4_inline_query_result_cached_photo.ts";
import { InlineQueryResultCachedSticker } from "./4_inline_query_result_cached_sticker.ts";
import { InlineQueryResultCachedVideo } from "./4_inline_query_result_cached_video.ts";
import { InlineQueryResultCachedVoice } from "./4_inline_query_result_cached_voice.ts";
import { InlineQueryResultContact } from "./4_inline_query_result_contact.ts";
import { InlineQueryResultDocument } from "./4_inline_query_result_document.ts";
import { InlineQueryResultGame } from "./4_inline_query_result_game.ts";
import { InlineQueryResultGif } from "./4_inline_query_result_gif.ts";
import { InlineQueryResultLocation } from "./4_inline_query_result_location.ts";
import { InlineQueryResultMpeg4Gif } from "./4_inline_query_result_mpeg4_gif.ts";
import { InlineQueryResultPhoto } from "./4_inline_query_result_photo.ts";
import { InlineQueryResultVenue } from "./4_inline_query_result_venue.ts";
import { InlineQueryResultVideo } from "./4_inline_query_result_video.ts";
import { InlineQueryResultVoice } from "./4_inline_query_result_voice.ts";
import { replyMarkupToTlObject } from "./4_reply_markup.ts";

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

// deno-lint-ignore no-explicit-any
export async function inlineQueryResultToTlObject(result_: InlineQueryResult, parseText: (text: string, params?: { parseMode?: ParseMode; entities?: MessageEntity[] }) => readonly [string, any[] | undefined], usernameResolver: UsernameResolver) {
  let document: enums.InputWebDocument | null = null;
  let thumb: types.inputWebDocument | null = null;
  let fileId_: string | null = null;
  switch (result_.type) {
    case "audio":
      if ("audioUrl" in result_) {
        document = new types.inputWebDocument({
          url: result_.audioUrl,
          size: 0,
          mime_type: "audio/mpeg",
          attributes: [
            new types.documentAttributeAudio({
              duration: result_.audioDuration ?? 0,
              title: result_.title,
              performer: result_.performer,
            }),
          ],
        });
      } else {
        fileId_ = result_.audioFileId;
      }
      break;
    case "video":
      if ("videoUrl" in result_) {
        document = new types.inputWebDocument({
          url: result_.videoUrl,
          size: 0,
          mime_type: result_.mimeType ?? "video/mp4",
          attributes: [
            new types.documentAttributeVideo({
              duration: result_.videoDuration ?? 0,
              h: result_.videoHeight ?? 0,
              w: result_.videoWidth ?? 0,
            }),
          ],
        });
      } else {
        fileId_ = result_.videoFileId;
      }
      break;
    case "document":
      if ("documentUrl" in result_) {
        document = new types.inputWebDocument({
          url: result_.documentUrl,
          mime_type: "application/octet-stream",
          attributes: [],
          size: 0,
        });
      } else {
        fileId_ = result_.documentFileId;
      }
      break;
    case "gif":
      if ("gifUrl" in result_) {
        document = new types.inputWebDocument({
          url: result_.gifUrl,
          size: 0,
          mime_type: "image/gif",
          attributes: [
            new types.documentAttributeVideo({
              duration: result_.gifDuration ?? 0,
              h: result_.gifHeight ?? 0,
              w: result_.gifWidth ?? 0,
            }),
          ],
        });
      } else {
        fileId_ = result_.gifFileId;
      }
      break;
    case "mpeg4_gif":
      if ("mpeg4Url" in result_) {
        document = new types.inputWebDocument({
          url: result_.mpeg4Url,
          size: 0,
          mime_type: "video/mp4",
          attributes: [
            new types.documentAttributeVideo({
              nosound: true,
              duration: result_.mpeg4Duration ?? 0,
              w: result_.mpeg4Width ?? 0,
              h: result_.mpeg4Height ?? 0,
              supports_streaming: true,
            }),
          ],
        });
      } else {
        fileId_ = result_.mpeg4FileId;
      }
      break;
    case "photo":
      if ("photoUrl" in result_) {
        document = new types.inputWebDocument({
          url: result_.photoUrl,
          size: 0,
          mime_type: "image/jpeg",
          attributes: [new types.documentAttributeImageSize({ w: result_.photoWidth ?? 0, h: result_.photoHeight ?? 0 })],
        });
      } else {
        fileId_ = result_.photoFileId;
      }
      break;
    case "sticker":
      fileId_ = result_.stickerFileId;
      break;
    case "voice":
      if ("voiceUrl" in result_) {
        document = new types.inputWebDocument({
          url: result_.voiceUrl,
          size: 0,
          mime_type: "audio/mpeg",
          attributes: [
            new types.documentAttributeAudio({
              duration: result_.voiceDuration ?? 0,
              voice: true,
            }),
          ],
        });
      } else {
        fileId_ = result_.voiceFileId;
      }
      break;
  }

  const replyMarkup = "replyMarkup" in result_ && result_.replyMarkup ? await replyMarkupToTlObject(result_.replyMarkup, usernameResolver) : undefined;

  if ("thumbnailUrl" in result_ && result_.thumbnailUrl) {
    thumb = new types.inputWebDocument({
      url: result_.thumbnailUrl,
      size: 0,
      mime_type: "image/jpeg",
      attributes: [],
    });
  } else if (result_.type == "photo") {
    thumb = document;
  }

  let ret: ReturnType<typeof parseText> = ["", []];
  if ("caption" in result_ && result_.caption) {
    ret = parseText(result_.caption, { parseMode: result_.parseMode, entities: result_.captionEntities });
  }

  const { type, id } = result_;
  const [message, entities] = ret;
  const sendMessage = new types.inputBotInlineMessageMediaAuto({
    message,
    entities,
    reply_markup: replyMarkup,
  });

  const title = "title" in result_ ? result_.title : undefined;
  const description = "description" in result_ ? result_.description : undefined;

  if (document != null) {
    return new types.inputBotInlineResult({
      id,
      type,
      title,
      description,
      thumb: thumb == null ? undefined : thumb,
      content: document,
      send_message: new types.inputBotInlineMessageMediaAuto({
        message,
        entities,
        reply_markup: replyMarkup,
      }),
    });
  } else if (fileId_ != null) {
    const fileId = FileID.decode(fileId_);
    return new types.inputBotInlineResultDocument({
      id,
      type,
      title,
      description,
      document: new types.inputDocument({
        id: fileId.params.mediaId!,
        access_hash: fileId.params.accessHash!,
        file_reference: fileId.params.fileReference!,
      }),
      send_message: sendMessage,
    });
  } else if (result_.type == "location") {
    return new types.inputBotInlineResult({
      id,
      type,
      title,
      description,
      send_message: new types.inputBotInlineMessageMediaGeo({
        geo_point: new types.inputGeoPoint({
          lat: result_.latitude,
          long: result_.longitude,
          accuracy_radius: result_.horizontalAccuracy,
        }),
        heading: result_.heading,
        period: result_.livePeriod,
        proximity_notification_radius: result_.proximityAlertRadius,
        reply_markup: replyMarkup,
      }),
    });
  } else if (result_.type == "game") {
    return new types.inputBotInlineResult({
      id,
      type,
      title,
      description,
      send_message: new types.inputBotInlineMessageGame({
        reply_markup: replyMarkup,
      }),
    });
  } else if (result_.type == "article") {
    if (!("messageText" in result_.inputMessageContent)) {
      UNREACHABLE();
    }
    const [message, entities] = parseText(result_.inputMessageContent.messageText, { entities: result_.inputMessageContent.entities, parseMode: result_.inputMessageContent.parseMode });
    return new types.inputBotInlineResult({
      id,
      type,
      title,
      description,
      send_message: new types.inputBotInlineMessageText({
        message,
        entities,
        no_webpage: result_.inputMessageContent.disableWebPagePreview ? true : undefined,
        reply_markup: replyMarkup,
      }),
    });
  } else if (result_.type == "venue") {
    if (!result_.fourSquareId || !result_.foursquareType) {
      UNREACHABLE();
    }
    return new types.inputBotInlineResult({
      id,
      type,
      title,
      description,
      send_message: new types.inputBotInlineMessageMediaVenue({
        geo_point: new types.inputGeoPoint({ long: result_.longitude, lat: result_.latitude }),
        address: result_.address,
        provider: "foursquare",
        title: result_.title,
        venue_id: result_.fourSquareId,
        venue_type: result_.foursquareType,
        reply_markup: replyMarkup,
      }),
    });
  } else {
    UNREACHABLE();
  }
}
