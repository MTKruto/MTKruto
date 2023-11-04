import { MaybePromise } from "../1_utilities.ts";
import { functions, types } from "../2_tl.ts";
import { BotCommandScope, CallbackQuery, ChatID, ForceReply, InlineKeyboardMarkup, InlineQuery, InlineQueryResultButton, Message, MessageEntity, ReplyKeyboardMarkup, ReplyKeyboardRemove } from "../3_types.ts";
import { With } from "./0_utilities.ts";
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
  errorHandler?: (err: unknown, function_: types.Type | functions.Function<unknown>, n: number) => MaybePromise<boolean>;
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

export const skip: Handler = (__, _) => _();
