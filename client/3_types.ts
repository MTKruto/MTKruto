import { FileSource } from "./0_utilities.ts";
import { MaybePromise, UNREACHABLE } from "../1_utilities.ts";
import { functions, types } from "../2_tl.ts";
import { BotCommandScope, CallbackQuery, Chat, ChatID, ChosenInlineResult, ForceReply, InlineKeyboardMarkup, InlineQuery, InlineQueryResultButton, Message, MessageEntity, MessageReaction, ReplyKeyboardMarkup, ReplyKeyboardRemove, ReplyQuote } from "../3_types.ts";
import { ClientPlainParams } from "./2_client_plain.ts";
import { ParseMode } from "../3_types.ts";

export interface ClientParams extends ClientPlainParams {
  /**
   * A parse mode to use when the `parseMode` parameter is not specified when sending or editing messages. Defauls to `ParseMode.None`.
   */
  parseMode?: ParseMode;
  /**
   * The app_version parameter to be passed to initConnection when calling `authorize`. It is recommended that this parameter is changed if users are authorized. Defaults to "MTKruto" followed by this version of MTKruto.
   */
  appVersion?: string;
  /**
   * The device_version parameter to be passed to initConnection when calling `authorize`. The default varies by the current runtime.
   */
  deviceModel?: string;
  /**
   * The lang_code parameter to be passed to initConnection when calling `authorize`. Defaults to the runtime's language or `"en"`.
   */
  langCode?: string;
  /**
   * The lang_pack parameter to be passed to initConnection when calling `authorize`. Defaults to an empty string.
   */
  langPack?: string;
  /**
   * The system_lang_cde parameter to be passed to initConnection when calling `authorize`. Defaults to the runtime's language or `"en"`.
   */
  systemLangCode?: string;
  /**
   * The system_version parameter to be passed to initConnection when calling `authorize`. The default varies by the current runtime.
   */
  systemVersion?: string;
  /**
   * Whether to automatically call `start` with no parameters in the first `invoke` call. Defaults to `true`.
   */
  autoStart?: boolean;
  /**
   * Whether to use default handlers. Defaults to `true`.
   */
  defaultHandlers?: boolean;
  /**
   * Whether to ignore outgoing messages. Defaults to `true` for bots, and `false` for users.
   */
  ignoreOutgoing?: boolean;
  /**
   * Default command prefixes. Defaults to `"/"` for bots and `"\"` for users. This option must be set separately for nested composers.
   */
  prefixes?: string | string[];
}

export interface AnswerCallbackQueryParams {
  /**
   * A text to be shown to the user.
   */
  text?: string;
  /**
   * Whether to show the text as an alert (popup).
   */
  alert?: boolean;
  /**
   * A URL to be opened.
   */
  url?: string;
  /**
   * TTL of answer caches in seconds.
   */
  cacheTime?: number;
}

export interface AuthorizeUserParams<S = string> {
  phone: S | (() => MaybePromise<S>);
  code: S | (() => MaybePromise<S>);
  password: S | ((hint: string | null) => MaybePromise<S>);
}

export interface _SendCommon {
  /**
   * Whether to send the message in a silent way without making a sound on the recipients' clients.
   */
  disableNotification?: boolean;
  /**
   * Whether to protect the contents of the message from copying and forwarding.
   */
  protectContent?: boolean;
  /**
   * The identifier of a message to reply to.
   */
  replyToMessageId?: number;
  /**
   * A specific part of the replying message's text to quote.
   */
  replyQuote?: ReplyQuote;
  /**
   * The identifier of a thread to send the message to.
   */
  messageThreadId?: number;
  /**
   * The identifier of the chat to send the message on behalf of. User-only.
   */
  sendAs?: ChatID;
  /**
   * The reply markup of the message. Bot-only.
   */
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
export interface SendMessageParams extends _SendCommon {
  /**
   * The parse mode to use. If not provided, the default parse mode will be used.
   */
  parseMode?: ParseMode;
  /**
   * The message's entities.
   */
  entities?: MessageEntity[];
  /**
   * Whether to disable web page previews in the message that is to be sent.
   */
  disableWebPagePreview?: boolean;
}

export interface EditMessageParams {
  /**
   * The parse mode to use. If not provided, the default parse mode will be used.
   */
  parseMode?: ParseMode;
  /**
   * The message's entities.
   */
  entities?: MessageEntity[];
  /**
   * Whether to disable web page previews in the message that is to be edited.
   */
  disableWebPagePreview?: boolean;
  /**
   * The reply markup of the message. Bot-only.
   */
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface ForwardMessagesParams extends Omit<_SendCommon, "replyToMessageId" | "replyMarkup"> {
  /**
   * Whether to not include the original sender of the message that is going to be forwarded.
   */
  dropSenderName?: boolean;
  /**
   * Whether to not include the original caption of the message that is going to be forwarded.
   */
  dropCaption?: boolean;
}

export interface SendPollParams extends _SendCommon {
  /**
   * Whether the poll should be anonymous.
   */
  isAnonymous?: boolean;
  /**
   * The type of the poll.
   */
  type?: "quiz" | "regular";
  /**
   * Whether multiple selections should be allowed. Only valid for regular polls.
   */
  allowMultipleAnswers?: boolean;
  /**
   * Index of the correct option. Required for quiz polls.
   */
  correctOptionIndex?: number;
  /**
   * A text that will be shown to the user when the poll is answered. Only valid for quiz polls.
   */
  explanation?: string;
  /**
   * The parse mode to use for the explanation. If not provided, the default parse mode will be used.
   */
  explanationParseMode?: ParseMode;
  /**
   * The explanation's entities.
   */
  explanationEntities?: MessageEntity[];
  /**
   * Duration of the poll in seconds. Must be in the range of 5-600. Cannot be used simultaneously with `closeDate`.
   */
  openPeriod?: number;
  /**
   * The time in which the poll will be closed. Must be at least 5 seconds in the future, and no more than 600. Cannot be used simultaneously with `openPeriod`.
   */
  closeDate?: Date;
  /**
   * Whether the poll should be closed as soon as it is sent, allowing no answers.
   */
  isClosed?: boolean;
}

export interface DownloadParams {
  /**
   * Size of each download chunk in bytes.
   */
  chunkSize?: number;
}

export interface _UploadCommon {
  /**
   * The file name to assign if applicable.
   */
  fileName?: string;
  /**
   * The mime type to assign if applicable.
   */
  mimeType?: string;
  /**
   * Size of each upload chunk in bytes.
   */
  chunkSize?: number;
  /**
   * Upload abort signal.
   */
  signal?: AbortSignal | null;
}
export interface UploadParams {
  /**
   * The file name to assign.
   */
  fileName?: string;
  /**
   * Size of each upload chunk in bytes.
   */
  chunkSize?: number;
  /**
   * Upload abort signal.
   */
  signal?: AbortSignal | null;
}

export interface AnswerInlineQueryParams {
  /**
   * The maximum amount of time in seconds to cache the result on server, Defaults to 300.
   */
  cacheTime?: number;
  /**
   * Whether the results may be cached on the server side only for the user that sent the query.
   */
  isPersonal?: boolean;
  /**
   * Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
   */
  nextOffset?: string;
  /**
   * 
   */
  isGallery?: boolean;
  /**
   * A JSON-serialized object describing a button to be shown above inline query results.
   */
  button?: InlineQueryResultButton;
}

export interface SetMyCommandsParams {
  /**
   * A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands.
   */
  languageCode?: string;
  /**
   * A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
   */
  scope?: BotCommandScope;
}

export type GetMyCommandsParams = SetMyCommandsParams;

export interface DeleteMessagesParams {
  /**
   * Whether to delete the messages only for this side.
   */
  onlyForMe?: boolean;
}

export interface DeleteMessageParams {
  /**
   * Whether to delete the message only for this side.
   */
  onlyForMe?: boolean;
}

export interface _CaptionCommon {
  /**
   * The caption to attach.
   */
  caption?: string;
  /**
   * The caption's entities.
   */
  captionEntities?: MessageEntity[];
  /**
   * The parse mode to use for the caption. If not provided, the default parse mode will be used.
   */
  parseMode?: ParseMode;
}
export interface _SpoilCommon {
  /**
   * Whether to mark the media as a spoiler.
   */
  hasSpoiler?: boolean;
}
export interface SendPhotoParams extends _CaptionCommon, _SpoilCommon, _UploadCommon, _SendCommon {
}

export interface _ThumbnailCommon {
  /**
   * A thumbnail to assign. Cannot be a URL.
   */
  thumbnail?: FileSource;
}
export interface SendDocumentParams extends _CaptionCommon, _ThumbnailCommon, _SpoilCommon, _UploadCommon, _SendCommon {
}

export interface SendVideoParams extends _CaptionCommon, _ThumbnailCommon, _SpoilCommon, _UploadCommon, _SendCommon {
  /**
   * The duration of the video in seconds.
   */
  duration?: number;
  /**
   * The width of the photo in pixels.
   */
  width?: number;
  /**
   * The height of the photo in pixels.
   */
  height?: number;
  /**
   * Pass True if the uploaded video is suitable for streaming.
   */
  supportsStreaming?: boolean;
}

export interface SendAnimationParams extends _CaptionCommon, _ThumbnailCommon, _SpoilCommon, _UploadCommon, _SendCommon {
  /**
   * The duration of the animation in seconds.
   */
  duration?: number;
  /**
   * Animation width.
   */
  width?: number;
  /**
   * Animation height.
   */
  height?: number;
}

export interface SendVoiceParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
  /** 
   * he duration of the voice message in seconds.
   */
  duration?: number;
}

export interface SendAudioParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
  /**
   * The duration of the audio file in seconds.
   */
  duration?: number;
  /**
   * Performer.
   */
  performer?: string;
  /**
   * Track name.
   */
  title?: string;
}

export interface SendVideoNoteParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
  /** The duration of the video note in seconds. */
  duration?: number;
  /**
   * Video width and height, i.e. diameter of the video message.
   */
  length?: number;
  /**
   * Thumbnail of the file sent, should be in JPEG format and less than 200 kB in size. The height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. 
   */
  thumbnail?: FileSource;
}

export interface SendLocationParams extends _SendCommon {
  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500.
   */
  horizontalAccuracy?: number;
  /**
   * Period in seconds for which the location will be updated, should be between 60 and 86400.
   */
  livePeriod?: number;
  /**
   * For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number;
  /**
   * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximityAlertRadius?: number;
}

export interface SendVenueParams extends _SendCommon {
  /**
   * Foursquare identifier of the venue.
   */
  foursquareId?: string;
  /**
   * Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
   */
  foursquareType?: string;
}

export interface SendContactParams extends _SendCommon {
  /**
   * The contact's last name.
   */
  lastName?: string;
  /**
   * Additional information in the vCard format.
   */
  vcard?: string;
}

export interface SendDiceParams extends _SendCommon {
  /**
   * Emoji on which the dice throw animation is based. Currently, must be one of “🎲”, “🎯”, “🏀”, “⚽”, “🎳”, or “🎰”. Dice can have values 1-6 for “🎲”, “🎯” and “🎳”, values 1-5 for “🏀” and “⚽”, and values 1-64 for “🎰”. Defaults to “🎲”.
   */
  emoji?: "🎲" | "🎯" | "🏀" | "⚽" | "🎳" | "🎰";
}

export type ConnectionState = "notConnected" | "updating" | "ready";

export type AuthorizationState = { authorized: boolean };

export interface ReplyParams {
  /**
   * Whether to quote the message that is to be replied. Enabled by default for non-private chats.
   */
  quote?: boolean;
}

export interface GetHistoryParams {
  /**
   * The oldest message to get messages after.
   */
  after?: Message;
  /**
   * The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.
   */
  limit?: number;
}

export interface AddReactionParams {
  big?: boolean;
  addToRecents?: boolean;
}

export type MessageUpdates = "message" | "editedMessage";

export interface Update {
  /**
   * New incoming message of any kind - text, photo, sticker, etc.
   */
  message?: Message;
  /**
   * New version of a message that is known to the bot and was edited.
   */
  editedMessage?: Message;
  connectionState?: ConnectionState;
  authorizationState?: AuthorizationState;
  deletedMessages?: [Message, ...Message[]];
  /**
   * New incoming callback query.
   */
  callbackQuery?: CallbackQuery;
  /**
   * New incoming inline query.
   */
  inlineQuery?: InlineQuery;
  /**
   * The result of an inline query that was chosen by a user and sent to their chat partner.
   */
  chosenInlineResult?: ChosenInlineResult;
  newChat?: Chat;
  editedChat?: Chat;
  deletedChat?: { chatId: number };
  reactions?: { chatId: number; messageId: number; reactions: MessageReaction[] };
}

export type NextFn<T = void> = () => Promise<T>;

export interface Handler<C> {
  (ctx: C, next: NextFn): MaybePromise<void>;
}

export interface InvokeErrorHandler<C> {
  (ctx: { client: C; error: unknown; function: types.Type | functions.Function<unknown>; n: number }, next: NextFn<boolean>): MaybePromise<boolean>;
}

type Update_ = Update;
export type FilterUpdate<U extends Update_, Type extends keyof Update_, Field extends string, TypeType = NonNullable<Update_[Type]>> = Omit<U, keyof Update_> & Omit<Update_, Type> & { [Type_ in Type]-?: Field extends keyof TypeType ? TypeType & { [Field_ in Field]-?: Field extends keyof TypeType ? NonNullable<TypeType[Field]> : never } : NonNullable<TypeType> };

export interface NetworkStatisticsEntry {
  sent: number;
  received: number;
}
export interface NetworkStatistics {
  messages: NetworkStatisticsEntry;
  cdn: NetworkStatisticsEntry;
}

export function getChatListId(chatList: string) {
  switch (chatList) {
    case "main":
      return 0;
    case "archived":
      return 1;
    default:
      UNREACHABLE();
  }
}

export interface GetChatsParams {
  /**
   * The chat list to get the chats from. Defaults to main.
   */
  from?: "main" | "archived";
  /**
   * The last chat to get chats after.
   */
  after?: Chat;
  /**
   * The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.
   */
  limit?: number;
}
