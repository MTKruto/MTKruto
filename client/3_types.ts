import { FileSource } from "./0_utilities.ts";
import { MaybePromise, UNREACHABLE } from "../1_utilities.ts";
import { functions, types } from "../2_tl.ts";
import { BotCommandScope, CallbackQuery, Chat, ChatID, ChosenInlineResult, ForceReply, InlineKeyboardMarkup, InlineQuery, InlineQueryResultButton, Message, MessageEntity, ReplyKeyboardMarkup, ReplyKeyboardRemove, ReplyQuote } from "../3_types.ts";
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
  /** A text to be shown to the user. */
  text?: string;
  /** Whether to show the text as an alert (popup). */
  alert?: boolean;
  /** A URL to be opened. */
  url?: string;
  /** TTL of answer caches in seconds. */
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
  /** Size of each download chunk in bytes. */
  chunkSize?: number;
}

export interface _UploadCommon {
  /** The file name to assign if applicable. */
  fileName?: string;
  /** The mime type to assign if applicable. */
  mimeType?: string;
  /** Size of each upload chunk in bytes. */
  chunkSize?: number;
  /** Upload abort signal. */
  signal?: AbortSignal | null;
}
export interface UploadParams {
  /** The file name to assign. */
  fileName?: string;
  /** Size of each upload chunk in bytes. */
  chunkSize?: number;
  /** Upload abort signal. */
  signal?: AbortSignal | null;
}

export interface AnswerInlineQueryParams {
  cacheTime?: number;
  isPersonal?: boolean;
  nextOffset?: string;
  isGallery?: boolean;
  button?: InlineQueryResultButton;
}

export interface SetMyCommandsParams {
  languageCode?: string;
  scope?: BotCommandScope;
}

export type GetMyCommandsParams = SetMyCommandsParams;

export interface DeleteMessagesParams {
  /** Whether to delete the messages only for this side. */
  onlyForMe?: boolean;
}

export interface DeleteMessageParams {
  /** Whether to delete the message only for this side. */
  onlyForMe?: boolean;
}

export interface _CaptionCommon {
  /** The caption to attach. */
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
  /** A thumbnail to assign. Cannot be a URL. */
  thumbnail?: FileSource;
}
export interface SendDocumentParams extends _CaptionCommon, _ThumbnailCommon, _SpoilCommon, _UploadCommon, _SendCommon {
}

export interface SendVideoParams extends _CaptionCommon, _ThumbnailCommon, _SpoilCommon, _UploadCommon, _SendCommon {
  /** The duration of the video in seconds. */
  duration?: number;
  /** The width of the photo in pixels. */
  width?: number;
  /** The height of the photo in pixels. */
  height?: number;
  supportsStreaming?: boolean;
}

export interface SendAnimationParams extends _CaptionCommon, _ThumbnailCommon, _SpoilCommon, _UploadCommon, _SendCommon {
  /** The duration of the animation in seconds. */
  duration?: number;
  width?: number;
  height?: number;
}

export interface SendVoiceParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
  /** The duration of the voice message in seconds. */
  duration?: number;
}

export interface SendAudioParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
  /** The duration of the audio file in seconds. */
  duration?: number;
  performer?: string;
  title?: string;
}

export interface SendVideoNoteParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
  /** The duration of the video note in seconds. */
  duration?: number;
  length?: number;
  thumbnail?: FileSource;
}

export interface SendLocationParams extends _SendCommon {
  horizontalAccuracy?: number;
  livePeriod?: number;
  heading?: number;
  proximityAlertRadius?: number;
}

export interface SendVenueParams extends _SendCommon {
  foursquareId?: string;
  foursquareType?: string;
}

export interface SendContactParams extends _SendCommon {
  /** The contact's last name. */
  lastName?: string;
  /** Additional information in the vCard format. */
  vcard?: string;
}

export interface SendDiceParams extends _SendCommon {
  emoji?: "🎲" | "🎯" | "🏀" | "⚽" | "🎳" | "🎰";
}

export type ConnectionState = "notConnected" | "updating" | "ready";

export type AuthorizationState = { authorized: boolean };

export interface ReplyParams {
  /** Whether to quote the message that is to be replied. Enabled by default for non-private chats. */
  quote?: boolean;
}

export interface GetHistoryParams {
  /** The oldest message to get messages after. */
  after?: Message;
  /** The maximum number of results to return. Must be in the range of 1-100. Defaults to 100. */
  limit?: number;
}

export interface AddReactionParams {
  big?: boolean;
  addToRecents?: boolean;
}

export type FilterableUpdates = "message" | "editedMessage" | "callbackQuery" | "inlineQuery" | "chosenInlineResult" | "editedChat" | "newChat";

export interface Update {
  message?: Message;
  editedMessage?: Message;
  connectionState?: ConnectionState;
  authorizationState?: AuthorizationState;
  deletedMessages?: [Message, ...Message[]];
  callbackQuery?: CallbackQuery;
  inlineQuery?: InlineQuery;
  chosenInlineResult?: ChosenInlineResult;
  newChat?: Chat;
  editedChat?: Chat;
  deletedChat?: { chatId: number };
}

export type NextFn<T = void> = () => Promise<T>;

export interface Handler<C> {
  (ctx: C, next: NextFn): MaybePromise<void>;
}

export interface InvokeErrorHandler<C> {
  (ctx: { client: C; error: unknown; function: types.Type | functions.Function<unknown>; n: number }, next: NextFn<boolean>): MaybePromise<boolean>;
}

type Update_ = Update;
export type FilterUpdate<Update extends Update_, Type extends keyof Update_, Field extends string, TypeType extends NonNullable<Update_[Type]> = NonNullable<Update_[Type]>> = Update & { [Type_ in Type]-?: TypeType & { [Field_ in Field]-?: Field extends keyof TypeType ? NonNullable<TypeType[Field]> : never } };

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
  /** The chat list to get the chats from. Defaults to main. */
  from?: "main" | "archived";
  /** The last chat to get chats after. */
  after?: Chat;
  /** The maximum number of results to return. Must be in the range of 1-100. Defaults to 100. */
  limit?: number;
}
