import { MaybePromise } from "../1_utilities.ts";
import { CallbackQuery, ForceReply, InlineKeyboardMarkup, InlineQuery, Message, MessageEntity, ReplyKeyboardMarkup, ReplyKeyboardRemove } from "../3_types.ts";
import { With } from "./0_utilities.ts";
import { ClientPlainParams } from "./2_client_plain.ts";

export type ParseMode = "HTML" | null;

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
}

export interface AnswerCallbackQueryParams {
  /** Text of the answer */
  text?: string;
  /** Pass true to show an alert to the user instead of a toast notification */
  alert?: boolean;
  /** URL to be opened */
  url?: string;
  /** Time during which the result of the query can be cached, in seconds */
  cacheTime?: number;
}

export interface AuthorizeUserParams<S = string> {
  phone: S | (() => MaybePromise<S>);
  code: S | (() => MaybePromise<S>);
  password: S | ((hint: string | null) => MaybePromise<S>);
}

/**
 * A chat identifier as provided by MTKruto or a string starting with a @ that is followed by a username.
 */
export type ChatID = number | string;

export interface SendMessagesParams {
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
   * True, if the poll needs to be anonymous, defaults to True */
  isAnonymous?: boolean;
  /**
   * The type of the poll. Defaults to regular. */
  type?: "quiz" | "regular";
  /**
   * True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False */
  allowMultipleAnswers?: boolean;
  /**
   * Index of the correct option. Required for quizzes. */
  correctOptionIndex?: number;
  /**
   *  Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing */
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
   * Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
   */
  openPeriod?: number;
  /**
   * Point in time when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
   */
  closeDate?: Date;
  /**
   * Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
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

export type ConnectionState = "notConnected" | "updating" | "ready";

export type AuthorizationState = { authorized: boolean };

export type FilterableUpdates = "message" | "editedMessage" | "callbackQuery";

export interface Update {
  message?: Message;
  editedMessage?: Message;
  connectionState?: ConnectionState;
  authorizationState?: AuthorizationState;
  deletedMessages?: [Message, ...Message[]];
  callbackQuery?: CallbackQuery;
  inlineQuery?: InlineQuery;
}

export type NextFn = () => Promise<void>;

export interface Handler<U extends Partial<Update> = Partial<Update>> {
  (update: U, next: NextFn): MaybePromise<void>;
}

export type FilterUpdate<U extends Update, T extends keyof U, F extends keyof NonNullable<U[T]>> = With<U, T> & Pick<{ [P in T]-?: With<NonNullable<U[T]>, F> }, T>;
