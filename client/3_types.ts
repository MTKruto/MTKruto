import { MaybePromise, UNREACHABLE } from "../1_utilities.ts";
import { functions, types } from "../2_tl.ts";
import { BotCommandScope, CallbackQuery, Chat, ChatID, ChosenInlineResult, ForceReply, InlineKeyboardMarkup, InlineQuery, InlineQueryResultButton, Message, MessageEntity, ReplyKeyboardMarkup, ReplyKeyboardRemove } from "../3_types.ts";
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

export interface SendMessageParams {
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

export interface ForwardMessagesParams {
  messageThreadId?: number;
  /**
   * Whether to forward the message in a silent way without making a sound on the recipients' clients.
   */
  disableNotification?: boolean;
  /**
   * Whether to protect the contents of the forwarded message from copying and forwarding.
   */
  protectContent?: boolean;
  /**
   * The identifier of the chat to forward the message on behalf of. User-only.
   */
  sendAs?: ChatID;
  /**
   * Whether to not include the original sender of the message that is going to be forwarded.
   */
  dropSenderName?: boolean;
  /**
   * Whether to not include the original caption of the message that is going to be forwarded.
   */
  dropCaption?: boolean;
}

export interface SendPollParams {
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
  /**
   * Whether to send the message in a silent way without making a sound on the recipients' clients.
   */
  disableNotification?: boolean;
  /**
   * The identifier of a message to reply to.
   */
  replyToMessageId?: number;
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
  /**
   * Whether to protect the contents of the message from copying and forwarding.
   */
  protectContent?: boolean;
}

export interface DownloadParams {
  /** Size of each download chunk in bytes. */
  chunkSize?: number;
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

export interface SendPhotoParams {
  /** The file name to assign. */
  fileName?: string;
  /** Size of each upload chunk in bytes. */
  chunkSize?: number;
  /** Upload abort signal. */
  signal?: AbortSignal | null;
  /** The caption of the photo. */
  caption?: string;
  /**
   * The caption's entities.
   */
  captionEntities?: MessageEntity[];
  /**
   * The parse mode to use for the caption. If not provided, the default parse mode will be used.
   */
  parseMode?: ParseMode;
  /**
   * Whether to mark the photo as a spoiler.
   */
  hasSpoiler?: boolean;
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

export interface SendDocumentParams {
  /** The file name to assign. */
  fileName?: string;
  /** The mime type to assign. */
  mimeType?: string;
  /** Size of each upload chunk in bytes. */
  chunkSize?: number;
  /** Upload abort signal. */
  signal?: AbortSignal | null;
  /** The caption of the document. */
  caption?: string;
  /**
   * The caption's entities.
   */
  captionEntities?: MessageEntity[];
  /**
   * The parse mode to use for the caption. If not provided, the default parse mode will be used.
   */
  parseMode?: ParseMode;
  /**
   * Whether to mark the document as a spoiler.
   */
  hasSpoiler?: boolean;
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

export type ChatList = "main" | "archived";
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
  from?: ChatList;
  /** The last chat to get chats after. */
  after?: Chat;
  /** The maximum number of results to return. Must be in the range of 1-100. Defaults to 100. */
  limit?: number;
}
