import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";
import { FileID } from "./0__file_id.ts";
import { MessageEntity } from "./0_message_entity.ts";
import { ParseMode } from "./0_parse_mode.ts";
import { UsernameResolver } from "./1__getters.ts";
import { InputMessageContent } from "./1_input_message_content.ts";
import { InlineKeyboardMarkup } from "./3_inline_keyboard_markup.ts";
import { replyMarkupToTlObject } from "./4_reply_markup.ts";

/** @unlisted */
export interface _InlineQueryResultBase {
  id: string;
}

/** @unlisted */
export interface _InlineQueryResultCaptionCommon {
  caption?: string;
  parseMode?: ParseMode;
  captionEntities?: MessageEntity[];
}

/** @unlisted */
export interface _InlineQueryResultInputMessageContentReplyMarkupCommon {
  inputMessageContent?: InputMessageContent;
  replyMarkup?: InlineKeyboardMarkup;
}

/** @unlisted */
export interface _InlineQueryResultThumbnailCommon {
  thumbnailUrl?: string;
  thumbnailWidth?: string;
  thumbnailHeight?: string;
}

/** @unlisted */
export interface InlineQueryResultArticle extends _InlineQueryResultBase {
  type: "article";
  title: string;
  inputMessageContent: InputMessageContent;
  description?: string;
  replyMarkup?: InlineKeyboardMarkup;
  url?: string;
  hideUrl?: boolean;
}

/** @unlisted */
export interface InlineQueryResultAudio extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "audio";
  title: string;
  audioUrl: string;
  performer?: string;
  audioDuration?: number;
}

/** @unlisted */
export interface InlineQueryResultCachedAudio extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "audio";
  audioFileId: string;
}

/** @unlisted */
export interface InlineQueryResultCachedDocument extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "document";
  documentFileId: string;
  description?: string;
}

/** @unlisted */
export interface InlineQueryResultCachedGif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "gif";
  gifFileId: string;
  title?: string;
}

/** @unlisted */
export interface InlineQueryResultCachedMpeg4Gif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "mpeg4_gif";
  mpeg4FileId: string;
  title?: string;
}

/** @unlisted */
export interface InlineQueryResultCachedPhoto extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "photo";
  photoFileId: string;
  title?: string;
  description?: string;
}

/** @unlisted */
export interface InlineQueryResultCachedSticker extends _InlineQueryResultBase, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "sticker";
  stickerFileId: string;
}

/** @unlisted */
export interface InlineQueryResultCachedVideo extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "video";
  title: string;
  videoFileId: string;
  description?: string;
}

/** @unlisted */
export interface InlineQueryResultCachedVoice extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "voice";
  title: string;
  voiceFileId: string;
}

/** @unlisted */
export interface InlineQueryResultContact extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
  type: "game";
  phoneNumber: string;
  firstName: string;
  lastName?: string;
  vcard?: string;
}

/** @unlisted */
export interface InlineQueryResultDocument extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
  type: "document";
  title: string;
  documentUrl: string;
}

/** @unlisted */
export interface InlineQueryResultGame extends _InlineQueryResultBase {
  type: "game";
  gameShortName: string;
  replyMarkup?: InlineKeyboardMarkup;
}

/** @unlisted */
export interface InlineQueryResultGif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "gif";
  title?: string;
  gifUrl: string;
  gifWidth?: number;
  gifHeight?: number;
  gifDuration?: number;
  thumbnailUrl?: string;
  thumbnailMimeType?: string;
}

/** @unlisted */
export interface InlineQueryResultLocation extends _InlineQueryResultBase, _InlineQueryResultInputMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
  type: "location";
  title: string;
  latitude: number;
  longitude: number;
  horizontalAccuracy?: number;
  livePeriod?: number;
  heading?: number;
  proximityAlertRadius?: number;
}

/** @unlisted */
export interface InlineQueryResultMpeg4Gif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "mpeg4_gif";
  mpeg4Url: string;
  title?: string;
  mpeg4Width?: number;
  mpeg4Height?: number;
  mpeg4Duration?: number;
  thumbnailUrl?: string;
  thumbnailMimeType?: string;
}

/** @unlisted */
export interface InlineQueryResultPhoto extends _InlineQueryResultBase, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "photo";
  photoUrl: string;
  thumbnailUrl: string;
  title?: string;
  description?: string;
  photoWidth?: number;
  photoHeight?: number;
}

/** @unlisted */
export interface InlineQueryResultVenue extends _InlineQueryResultBase, _InlineQueryResultInputMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
  type: "venue";
  title: string;
  latitude: number;
  longitude: number;
  address: string;
  fourSquareId?: string;
  foursquareType?: string;
}

/** @unlisted */
export interface InlineQueryResultVideo extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "video";
  title: string;
  description?: string;
  videoUrl: string;
  mimeType: string;
  thumbnailUrl: string;
  videoWidth?: number;
  videoHeight?: number;
  videoDuration?: number;
}

/** @unlisted */
export interface InlineQueryResultVoice extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
  type: "voice";
  title: string;
  voiceUrl: string;
  voiceDuration?: number;
}

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
  let thumb: types.InputWebDocument | null = null;
  let fileId_: string | null = null;
  switch (result_.type) {
    case "audio":
      if ("audioUrl" in result_) {
        document = new types.InputWebDocument({
          url: result_.audioUrl,
          size: 0,
          mime_type: "audio/mpeg",
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
          mime_type: result_.mimeType ?? "video/mp4",
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
        document = new types.InputWebDocument({
          url: result_.gifUrl,
          size: 0,
          mime_type: "image/gif",
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
          mime_type: "video/mp4",
          attributes: [
            new types.DocumentAttributeVideo({
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
        document = new types.InputWebDocument({
          url: result_.photoUrl,
          size: 0,
          mime_type: "image/jpeg",
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
          mime_type: "audio/mpeg",
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

  const replyMarkup = "replyMarkup" in result_ && result_.replyMarkup ? await replyMarkupToTlObject(result_.replyMarkup, usernameResolver) : undefined;

  if ("thumbnailUrl" in result_ && result_.thumbnailUrl) {
    thumb = new types.InputWebDocument({
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
  const sendMessage = new types.InputBotInlineMessageMediaAuto({
    message,
    entities,
    reply_markup: replyMarkup,
  });

  const title = "title" in result_ ? result_.title : undefined;
  const description = "description" in result_ ? result_.description : undefined;

  if (document != null) {
    return new types.InputBotInlineResult({
      id,
      type,
      title,
      description,
      thumb: thumb == null ? undefined : thumb,
      content: document,
      send_message: new types.InputBotInlineMessageMediaAuto({
        message,
        entities,
        reply_markup: replyMarkup,
      }),
    });
  } else if (fileId_ != null) {
    const fileId = FileID.decode(fileId_);
    return new types.InputBotInlineResultDocument({
      id,
      type,
      title,
      description,
      document: new types.InputDocument({
        id: fileId.params.mediaId!,
        access_hash: fileId.params.accessHash!,
        file_reference: fileId.params.fileReference!,
      }),
      send_message: sendMessage,
    });
  } else if (result_.type == "location") {
    return new types.InputBotInlineResult({
      id,
      type,
      title,
      description,
      send_message: new types.InputBotInlineMessageMediaGeo({
        geo_point: new types.InputGeoPoint({
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
    return new types.InputBotInlineResult({
      id,
      type,
      title,
      description,
      send_message: new types.InputBotInlineMessageGame({
        reply_markup: replyMarkup,
      }),
    });
  } else if (result_.type == "article") {
    if (!("messageText" in result_.inputMessageContent)) {
      UNREACHABLE();
    }
    const [message, entities] = parseText(result_.inputMessageContent.messageText, { entities: result_.inputMessageContent.entities, parseMode: result_.inputMessageContent.parseMode });
    return new types.InputBotInlineResult({
      id,
      type,
      title,
      description,
      send_message: new types.InputBotInlineMessageText({
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
    return new types.InputBotInlineResult({
      id,
      type,
      title,
      description,
      send_message: new types.InputBotInlineMessageMediaVenue({
        geo_point: new types.InputGeoPoint({ long: result_.longitude, lat: result_.latitude }),
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
