import { message } from "https://raw.githubusercontent.com/MTKruto/compress/main/zlib/zlib/messages.ts";
import { types } from "../2_tl.ts";
import { FileID } from "./0__file_id.ts";
import { MessageEntity } from "./0_message_entity.ts";
import { ParseMode } from "./0_parse_mode.ts";
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
import { InputBotInlineMessageMediaAuto } from "../tl/2_types.ts";
import { UNREACHABLE } from "../1_utilities.ts";

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

export function inlineQueryResultToTlObject(result_: InlineQueryResult, parseText: (text: string, params?: { parseMode?: ParseMode; entities?: MessageEntity[] }) => readonly [string, any[] | undefined]) {
  let document: types.TypeInputWebDocument | null = null;
  let thumb: types.InputWebDocument | null = null;
  let fileId_: string | null = null;
  switch (result_.type) {
    case "audio":
      if ("audioUrl" in result_) {
        document = new types.InputWebDocument({
          url: result_.audioUrl,
          size: 0,
          mimeType: "audio/mpeg",
          attributes: [
            new types.DocumentAttributeAudio({
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
        document = new types.InputWebDocument({
          url: result_.videoUrl,
          size: 0,
          mimeType: result_.mimeType ?? "video/mp4",
          attributes: [
            new types.DocumentAttributeVideo({
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
        document = new types.InputWebDocument({
          url: result_.documentUrl,
          mimeType: "application/octet-stream",
          attributes: [],
          size: 0,
        });
      } else {
        fileId_ = result_.documentFileId;
      }
      break;
    case "gif":
      if ("gifUrl" in result_) {
        document = new types.InputWebDocument({
          url: result_.gifUrl,
          size: 0,
          mimeType: "image/gif",
          attributes: [
            new types.DocumentAttributeVideo({
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
        document = new types.InputWebDocument({
          url: result_.mpeg4Url,
          size: 0,
          mimeType: "video/mp4",
          attributes: [
            new types.DocumentAttributeVideo({
              nosound: true,
              duration: result_.mpeg4Duration ?? 0,
              w: result_.mpeg4Width ?? 0,
              h: result_.mpeg4Height ?? 0,
              supportsStreaming: true,
            }),
          ],
        });
      } else {
        fileId_ = result_.mpeg4FileId;
      }
      break;
    case "photo":
      if ("photoUrl" in result_) {
        document = new types.InputWebDocument({
          url: result_.photoUrl,
          size: 0,
          mimeType: "image/jpeg",
          attributes: [new types.DocumentAttributeImageSize({ w: result_.photoWidth ?? 0, h: result_.photoHeight ?? 0 })],
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
        document = new types.InputWebDocument({
          url: result_.voiceUrl,
          size: 0,
          mimeType: "audio/mpeg",
          attributes: [
            new types.DocumentAttributeAudio({
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

  if ("thumbnailUrl" in result_ && result_.thumbnailUrl) {
    thumb = new types.InputWebDocument({
      url: result_.thumbnailUrl,
      size: 0,
      mimeType: "image/jpeg",
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
  const sendMessage = new InputBotInlineMessageMediaAuto({
    message,
    entities,
    // TODO: replyMarkup
  });

  if (document != null) {
    return new types.InputBotInlineResult({
      id: result_.id,
      type: result_.type,
      thumb: thumb == null ? undefined : thumb,
      sendMessage: new types.InputBotInlineMessageMediaAuto({
        message,
        entities,
        // TODO: replyMarkup
      }),
    });
  } else if (fileId_ != null) {
    const fileId = FileID.decode(fileId_);
    return new types.InputBotInlineResultDocument({
      id: result_.id,
      type: result_.type,
      document: new types.InputDocument({
        id: fileId.params.mediaId!,
        accessHash: fileId.params.accessHash!,
        fileReference: fileId.params.fileReference!,
      }),
      sendMessage,
    });
  } else if (result_.type == "location") {
    return new types.InputBotInlineResult({
      id: result_.id,
      type: result_.type,
      sendMessage: new types.InputBotInlineMessageMediaGeo({
        geoPoint: new types.InputGeoPoint({
          lat: result_.latitude,
          long: result_.longitude,
          accuracyRadius: result_.horizontalAccuracy,
        }),
        heading: result_.heading,
        period: result_.livePeriod,
        proximityNotificationRadius: result_.proximityAlertRadius,
        // TODO: replyMarkup
      }),
    });
  } else if (result_.type == "game") {
    return new types.InputBotInlineResult({
      id,
      type,
      sendMessage: new types.InputBotInlineMessageGame({
        // TODO: replyMarkup
      }),
    });
  } else if (result_.type == "article") {
    return new types.InputBotInlineResult({
      id,
      type,
      sendMessage,
    });
  } else if (result_.type == "venue") {
    return new types.InputBotInlineResult({
      id,
      type,
      sendMessage: new types.InputBotInlineMessageMediaVenue({
        geoPoint: new types.InputGeoPoint({ long: result_.longitude, lat: result_.latitude }),
        address: result_.address,
        provider: "foursquare",
        title: result_.title,
        venueId: result_.fourSquareId!,
        venueType: result_.foursquareType!,
        // TODO: replyMarkup
      }),
    });
  } else {
    UNREACHABLE();
  }
}
