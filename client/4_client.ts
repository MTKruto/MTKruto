import { contentType, debug, extension, gunzip, Mutex } from "../0_deps.ts";
import { bigIntFromBuffer, cleanObject, drop, getRandomBigInt, getRandomId, MaybePromise, mod, mustPrompt, mustPromptOneOf, sha1, toUnixTimestamp, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { as, enums, functions, getChannelChatId, Message_, MessageContainer, name, peerToChatId, ReadObject, RPCResult, TLError, TLObject, TLReader, types } from "../2_tl.ts";
import { Storage, StorageMemory } from "../3_storage.ts";
import { DC } from "../3_transport.ts";
import { assertMessageType, BotCommand, botCommandScopeToTlObject, Chat, ChatAction, ChatP, ConnectionState, constructCallbackQuery, constructChat, constructChat2, constructChat3, constructChat4, constructChosenInlineResult, constructDocument, constructInlineQuery, constructMessage, constructMessageReaction, constructMessageReactionCount, constructMessageReactions, constructUser, Document, FileID, FileType, FileUniqueID, FileUniqueType, getChatOrder, ID, InlineQueryResult, inlineQueryResultToTlObject, Message, MessageAnimation, MessageAudio, MessageContact, MessageDice, MessageDocument, MessageEntity, messageEntityToTlObject, MessageLocation, MessagePhoto, MessagePoll, MessageText, MessageVenue, MessageVideo, MessageVideoNote, MessageVoice, NetworkStatistics, ParseMode, Reaction, reactionEqual, reactionToTlObject, replyMarkupToTlObject, ThumbnailSource, Update, UpdateIntersection, User, UsernameResolver } from "../3_types.ts";
import { ACK_THRESHOLD, APP_VERSION, DEVICE_MODEL, LANG_CODE, LANG_PACK, LAYER, MAX_CHANNEL_ID, MAX_CHAT_ID, PublicKeys, STICKER_SET_NAME_TTL, SYSTEM_LANG_CODE, SYSTEM_VERSION, USERNAME_TTL } from "../4_constants.ts";
import { AuthKeyUnregistered, FloodWait, Migrate, PasswordHashInvalid, PhoneNumberInvalid, SessionPasswordNeeded, upgradeInstance } from "../4_errors.ts";
import { ClientAbstract } from "./0_client_abstract.ts";
import { FilterQuery, match, WithFilter } from "./0_filters.ts";
import { parseHtml } from "./0_html.ts";
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.ts";
import { checkPassword } from "./0_password.ts";
import { Api } from "./0_types.ts";
import { FileSource, getChatListId, getFileContents, getUsername, isHttpUrl, resolve } from "./0_utilities.ts";
import { Composer, concat, flatten, Middleware, MiddlewareFn, skip } from "./1_composer.ts";
import { UpdateManager } from "./1_update_manager.ts";
import { ClientPlain } from "./2_client_plain.ts";
import { _SendCommon, AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AuthorizeUserParams, BanChatMemberParams, ClientParams, DeleteMessageParams, DeleteMessagesParams, DownloadParams, EditMessageParams, EditMessageReplyMarkupParams, ForwardMessagesParams, GetChatsParams, GetHistoryParams, GetMyCommandsParams, PinMessageParams, ReplyParams, SendAnimationParams, SendAudioParams, SendContactParams, SendDiceParams, SendDocumentParams, SendLocationParams, SendMessageParams, SendPhotoParams, SendPollParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatPhotoParams, SetMyCommandsParams, SetReactionsParams, UploadParams } from "./3_params.ts";

export type NextFn<T = void> = () => Promise<T>;
export interface InvokeErrorHandler<C> {
  (ctx: { client: C; error: unknown; function: types.Type | functions.Function<unknown>; n: number }, next: NextFn<boolean>): MaybePromise<boolean>;
}

const d = debug("Client");
const dAuth = debug("Client/authorize");
const dRecv = debug("Client/receiveLoop");
const dUpload = debug("Client/upload");

const getEntity = Symbol();
const getStickerSetName = Symbol();
export const handleMigrationError = Symbol();
const getMessageWithReply = Symbol();

const functionNamespaces = Object.entries(functions).filter(([, v]) => !(v instanceof Function)).map(([k]) => k);

export interface Context {
  /** The client that received the update. */
  client: Client;
  /** The currently authorized user. */
  me?: User;
  /** Resolves to `message`, `editedMessage`, or the `message` field of `callbackQuery`. */
  msg?: Message;
  /** Resolves to `msg?.chat`. TODO */
  chat?: ChatP;
  /** Resolves to the `from` field of `message`, `editedMessage`, `callbackQuery`, or `inlineQuery`. */
  from?: User;
  /** Resolves to `msg?.senderChat`. */
  senderChat?: ChatP;
  /** Reply the received message with a text message. */
  reply: (text: string, params?: Omit<SendMessageParams, "replyToMessageId"> & ReplyParams) => Promise<MessageText>;
  /** Reply the received message with a poll. */
  replyPoll: (question: string, options: [string, string, ...string[]], params?: Omit<SendPollParams, "replyToMessageId"> & ReplyParams) => Promise<MessagePoll>;
  /** Reply the received message with a photo. */
  replyPhoto: (photo: FileSource, params?: Omit<SendPhotoParams, "replyToMessageId"> & ReplyParams) => Promise<MessagePhoto>;
  /** Reply the received message with a document. */
  replyDocument: (document: FileSource, params?: Omit<SendDocumentParams, "replyToMessageId"> & ReplyParams) => Promise<MessageDocument>;
  /** Reply the received message with a location. */
  replyLocation: (latitude: number, longitude: number, params?: Omit<SendLocationParams, "replyToMessageId"> & ReplyParams) => Promise<MessageLocation>;
  /** Reply the received message with a dice. */
  replyDice: (params?: Omit<SendDiceParams, "replyToMessageId"> & ReplyParams) => Promise<MessageDice>;
  /** Reply the received message with a venue. */
  replyVenue: (latitude: number, longitude: number, title: string, address: string, params?: Omit<SendVenueParams, "replyToMessageId"> & ReplyParams) => Promise<MessageVenue>;
  /** Reply the received message with a contact. */
  replyContact: (firstName: string, number: string, params?: Omit<SendContactParams, "replyToMessageId"> & ReplyParams) => Promise<MessageContact>;
  /** Reply the received message with a video. */
  replyVideo: (video: FileSource, params?: Omit<SendVideoParams, "replyToMessageId"> & ReplyParams) => Promise<MessageVideo>;
  /** Reply the received message with an animation. */
  replyAnimation: (animation: FileSource, params?: Omit<SendAnimationParams, "replyToMessageId"> & ReplyParams) => Promise<MessageAnimation>;
  /** Reply the received message with a voice message. */
  replyVoice: (voice: FileSource, params?: Omit<SendVoiceParams, "replyToMessageId"> & ReplyParams) => Promise<MessageVoice>;
  /** Reply the received message with an audio file. */
  replyAudio: (audio: FileSource, params?: Omit<SendAudioParams, "replyToMessageId"> & ReplyParams) => Promise<MessageAudio>;
  /** Reply the received message with a video note. */
  replyVideoNote: (videoNote: FileSource, params?: Omit<SendVideoNoteParams, "replyToMessageId"> & ReplyParams) => Promise<MessageVideoNote>;
  /** Delete the received message. */
  delete: () => Promise<void>;
  /** Forward the received message. */
  forward: (to: ID, params?: ForwardMessagesParams) => Promise<this["msg"]>;
  /** Pin the received message. */
  pin: (params?: PinMessageParams) => Promise<void>;
  /** Unpin the received message. */
  unpin: (params?: PinMessageParams) => Promise<void>;
  /** Ban the sender of the received message. */
  banSender: (params?: BanChatMemberParams) => Promise<void>;
  /** Kick the sender of the received message. */
  kickSender: () => Promise<void>;
  /** Set the rights of the received message. */
  setSenderRights: (params?: SetChatMemberRightsParams) => Promise<void>;
  /** Change the reactions made to the received message. */
  react: (reactions: Reaction[], params?: SetReactionsParams) => Promise<void>;
  /** Send a chat action to the chat which the message was received from. */
  sendChatAction: (action: ChatAction, params?: { messageThreadId?: number }) => Promise<void>;
  /** Edit a message in the chat which the message was received from. */
  editMessageText: (messageId: number, text: string, params?: EditMessageParams) => Promise<MessageText>;
  /** Edit the reply markup of a message in the chat which the message was received from. */
  editMessageReplyMarkup: (messageId: number, params?: EditMessageReplyMarkupParams) => Promise<Message>;
  /** Answer the received callback query. */
  answerCallbackQuery: (params?: AnswerCallbackQueryParams) => Promise<void>;
  /** Answer the received inline query. */
  answerInlineQuery: (results: InlineQueryResult[], params?: AnswerInlineQueryParams) => Promise<void>;
  /** Retrieve a single message of the chat which the message was received from. */
  getMessage: (messageId: number) => Promise<Message | null>;
  /** Retrieve multiple messages of the chat which the message was received from. */
  getMessages: (messageIds: number[]) => Promise<Message[]>;
  /** Forward a message of the chat which the message was received from. */
  forwardMessage: (to: ID, messageId: number, params?: ForwardMessagesParams) => Promise<Message>;
  /** Forward multiple messages of the chat which the message was received from. */
  forwardMessages: (to: ID, messageIds: number[], params?: ForwardMessagesParams) => Promise<Message[]>;
  /** Delete a message in the chat which the message was received from. */
  deleteMessage: (messageId: number, params?: DeleteMessagesParams) => Promise<void>;
  /** Delete multiple messages in the chat which the message was received from. */
  deleteMessages: (messageIds: number[], params?: DeleteMessagesParams) => Promise<void>;
  /** Pin a message in the chat which the message was received from. */
  pinMessage: (messageId: number, params?: PinMessageParams) => Promise<void>;
  /** Unpin a message in the chat which the message was received from. */
  unpinMessage: (messageId: number) => Promise<void>;
  /** Unpin the pinned messages in the chat which the message was received from. */
  unpinMessages: (messageId: number) => Promise<void>;
  /** Set the available reactions of the chat which the message was received from. */
  setAvailableReactions: (availableReactions: "none" | "all" | Reaction[]) => Promise<void>;
  /** Add a reaction to a message of the chat which the message was received from. */
  addReaction: (messageId: number, reaction: Reaction, params?: AddReactionParams) => Promise<void>;
  /** Remove a reaction from a message of the chat which the message was received from. */
  removeReaction: (messageId: number, reaction: Reaction) => Promise<void>;
  /** Change the reactions made to a message of the chat which the message was received from. */
  setReactions: (messageId: number, reactions: Reaction[], params?: SetReactionsParams) => Promise<void>;
  /** Set the photo of the chat which the message was received from. */
  setChatPhoto: (photo: FileSource, params?: SetChatPhotoParams) => Promise<void>;
  /** Delete the photo of the chat which the message was received from. */
  deleteChatPhoto: () => Promise<void>;
  /** Ban a member from the chat which the message was received from. */
  banChatMember: (memberId: ID, params?: BanChatMemberParams) => Promise<void>;
  /** Unban a member from the chat which the message was received from. */
  unbanChatMember: (memberId: ID) => Promise<void>;
  /** Kick a member from the chat which the message was received from. */
  kickChatMember: (memberId: ID) => Promise<void>;
  /** Set the rights of a member of the chat which the message was received from. */
  setChatMemberRights: (memberId: ID, params?: SetChatMemberRightsParams) => Promise<void>;
  deleteChatMemberMessages: (userId: ID) => Promise<void>;
  toJSON: () => Update;
}

export function skipInvoke<C extends Context>(): InvokeErrorHandler<Client<C>> {
  return (_ctx, next) => next();
}

export const restartAuth = Symbol();

export class ConnectionError extends Error {
  //
}

export class Client<C extends Context = Context> extends ClientAbstract {
  #auth: { key: Uint8Array; id: bigint } | null = null;
  #sessionId = getRandomBigInt(8, true, false);
  #state = { salt: 0n, seqNo: 0 };
  #promises = new Map<bigint, { resolve: (obj: ReadObject) => void; reject: (err: ReadObject | Error) => void; call: TLObject }>();
  #toAcknowledge = new Set<bigint>();
  #updateState?: types.updates.State;
  #guaranteeUpdateDelivery: boolean;
  #updateManager: UpdateManager;

  public readonly storage: Storage;
  public readonly parseMode: ParseMode;

  public readonly appVersion: string;
  public readonly deviceModel: string;
  public readonly langCode: string;
  public readonly langPack: string;
  public readonly systemLangCode: string;
  public readonly systemVersion: string;
  readonly #publicKeys?: PublicKeys;
  readonly #autoStart: boolean;
  readonly #ignoreOutgoing: boolean | null;
  readonly #prefixes?: string | string[];

  /**
   * Constructs the client.
   *
   * @param storage The storage provider to use. Defaults to memory storage.
   * @param apiId App's API ID from [my.telegram.org](https://my.telegram.org/apps). Defaults to 0 (unset).
   * @param apiHash App's API hash from [my.telegram.org/apps](https://my.telegram.org/apps). Defaults to empty string (unset).
   */
  constructor(
    storage?: Storage | null,
    public readonly apiId: number | null = 0,
    public readonly apiHash: string | null = "",
    params?: ClientParams,
  ) {
    super(params);

    this.storage = storage ?? new StorageMemory();
    this.parseMode = params?.parseMode ?? null;

    this.appVersion = params?.appVersion ?? APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEVICE_MODEL;
    this.langCode = params?.langCode ?? LANG_CODE;
    this.langPack = params?.langPack ?? LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
    this.#publicKeys = params?.publicKeys;
    this.#autoStart = params?.autoStart ?? true;
    this.#ignoreOutgoing = params?.ignoreOutgoing ?? null;
    this.#prefixes = params?.prefixes;
    this.#guaranteeUpdateDelivery = params?.guaranteeUpdateDelivery ?? false;

    const c = {
      api: this.api,
      storage: this.storage,
      guaranteeUpdateDelivery: this.#guaranteeUpdateDelivery,
      setConnectionState: this.#propagateConnectionState.bind(this),
      resetConnectionState: () => this.stateChangeHandler(this.connected),
      getSelfId: this.#getSelfId,
      getInputPeer: this.getInputPeer,
    };
    this.#updateManager = new UpdateManager(c);
    this.#updateManager.setUpdateHandler(this.#handleUpdate.bind(this));

    const transportProvider = this.transportProvider;
    this.transportProvider = (params) => {
      const transport = transportProvider(params);
      transport.connection.callback = {
        read: async (count) => {
          const key = params.cdn ? "netstat_cdn_read" : "netstat_messages_read";
          await this.storage.incr([key], count);
        },
        write: async (count) => {
          const key = params.cdn ? "netstat_cdn_write" : "netstat_messages_write";
          await this.storage.incr([key], count);
        },
      };
      return transport;
    };

    if (params?.defaultHandlers ?? true) {
      this.on("connectionState", ({ connectionState }, next) => {
        drop((async (): Promise<void> => {
          if (connectionState == "notConnected") {
            if (!this.transport?.transport.initialized) {
              d("not reconnecting");
              return;
            }
            let delay = 5;
            while (!this.connected) {
              d("reconnecting");
              try {
                await this.connect();
                d("reconnected");
                drop(this.#updateManager.recoverUpdateGap("reconnect"));
                break;
              } catch (err) {
                d("failed to reconnect, retrying in %d: %o", delay, err);
              }
              await new Promise((r) => setTimeout(r, delay * 1_000));
              if (delay < 15) {
                delay += 5;
              }
            }
          }
        })());
        return next();
      });

      this.invoke.use(async ({ error }, next) => {
        if (error instanceof FloodWait && error.seconds <= 10) {
          d("sleeping for %d because of: %o", error.seconds, error);
          await new Promise((r) => setTimeout(r, 1000 * error.seconds));
          return true;
        } else {
          return next();
        }
      });
    }
  }

  #namespaceProxies = (() => {
    // deno-lint-ignore no-explicit-any
    const proxies = {} as any;
    for (const name of functionNamespaces) {
      const ns = functions[name as keyof typeof functions];
      proxies[name] = new Proxy({}, {
        get: (_, key) => {
          if (key in ns) {
            // deno-lint-ignore no-explicit-any
            const func = ns[key as keyof typeof ns] as any;
            if (func instanceof Function) {
              // deno-lint-ignore no-explicit-any
              return (params: any) => {
                // deno-lint-ignore ban-ts-comment
                // @ts-ignore
                return this.invoke(new func(params));
              };
            } else {
              UNREACHABLE();
            }
          }
        },
        set() {
          return true;
        },
      });
    }
    return proxies;
  })();
  api = new Proxy({} as unknown as Api, {
    get: (_, key) => {
      if (key in functions) {
        const func = functions[key as keyof typeof functions];
        if (func instanceof Function) {
          // deno-lint-ignore no-explicit-any
          return (params: any) => {
            // deno-lint-ignore ban-ts-comment
            // @ts-ignore
            return this.invoke(new func(params));
          };
        } else {
          return this.#namespaceProxies[key];
        }
      }
    },
    set() {
      return true;
    },
  });

  #constructContext = async (update: Update) => {
    const msg = "message" in update ? update.message : "editedMessage" in update ? update.editedMessage : "callbackQuery" in update ? update.callbackQuery.message : undefined;
    const reactions = "messageInteractions" in update ? update.messageInteractions : undefined;
    const mustGetMsg = () => {
      if (msg !== undefined) {
        return { chatId: msg.chat.id, messageId: msg.id, senderId: (msg.from ?? msg.senderChat)?.id };
      } else if (reactions !== undefined) {
        return { chatId: reactions.chatId, messageId: reactions.messageId };
      } else {
        UNREACHABLE();
      }
    };
    const chat_ = "messageReactions" in update ? update.messageReactions.chat : "messageReactionCount" in update ? update.messageReactionCount.chat : undefined;
    const chat = chat_ ?? msg?.chat;
    const from = "callbackQuery" in update ? update.callbackQuery.from : "inlineQuery" in update ? update.inlineQuery.from : "message" in update ? update.message.from : "editedMessage" in update ? update.editedMessage?.from : undefined;
    const senderChat = msg?.senderChat;
    const getReplyToMessageId = (quote: boolean | undefined, chatId: number, messageId: number) => {
      const isPrivate = chatId > 0;
      const shouldQuote = quote === undefined ? !isPrivate : quote;
      const replyToMessageId = shouldQuote ? messageId : undefined;
      return replyToMessageId;
    };
    const me = "connectionState" in update ? this.#lastGetMe : ("authorizationState" in update && !update.authorizationState.authorized) ? this.#lastGetMe : await this.#getMe();

    const context: Context = {
      ...update,
      client: this as unknown as Client,
      me: (me == null ? undefined : me) as C["me"],
      msg: msg as C["msg"],
      chat: chat as C["chat"],
      from: from as C["from"],
      senderChat: senderChat as C["senderChat"],
      get toJSON() {
        return () => update;
      },
      reply: (text, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendMessage(chatId, text, { ...params, replyToMessageId });
      },
      replyPoll: (question, options, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendPoll(chatId, question, options, { ...params, replyToMessageId });
      },
      replyPhoto: (photo, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendPhoto(chatId, photo, { ...params, replyToMessageId });
      },
      replyDocument: (document, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendDocument(chatId, document, { ...params, replyToMessageId });
      },
      replyContact: (firstName, number, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendContact(chatId, firstName, number, { ...params, replyToMessageId });
      },
      replyLocation: (latitude, longitude, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendLocation(chatId, latitude, longitude, { ...params, replyToMessageId });
      },
      replyDice: (params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendDice(chatId, { ...params, replyToMessageId });
      },
      replyVenue: (latitude, longitude, title, address, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendVenue(chatId, latitude, longitude, title, address, { ...params, replyToMessageId });
      },
      replyVideo: (video, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendVideo(chatId, video, { ...params, replyToMessageId });
      },
      replyAnimation: (document, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendAnimation(chatId, document, { ...params, replyToMessageId });
      },
      replyVoice: (document, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendVoice(chatId, document, { ...params, replyToMessageId });
      },
      replyAudio: (document, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendAudio(chatId, document, { ...params, replyToMessageId });
      },
      replyVideoNote: (videoNote, params) => {
        const { chatId, messageId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendVideoNote(chatId, videoNote, { ...params, replyToMessageId });
      },
      delete: () => {
        const { chatId, messageId } = mustGetMsg();
        return this.deleteMessage(chatId, messageId);
      },
      forward: (to, params) => {
        const { chatId, messageId } = mustGetMsg();
        return this.forwardMessage(chatId, to, messageId, params) as unknown as ReturnType<C["forward"]>;
      },
      pin: (params) => {
        const { chatId, messageId } = mustGetMsg();
        return this.pinMessage(chatId, messageId, params);
      },
      unpin: () => {
        const { chatId, messageId } = mustGetMsg();
        return this.unpinMessage(chatId, messageId);
      },
      banSender: (params) => {
        const { chatId, senderId } = mustGetMsg();
        if (!senderId) {
          UNREACHABLE();
        }
        return this.banChatMember(chatId, senderId, params);
      },
      kickSender: () => {
        const { chatId, senderId } = mustGetMsg();
        if (!senderId) {
          UNREACHABLE();
        }
        return this.kickChatMember(chatId, senderId);
      },
      setSenderRights: (params) => {
        const { chatId, senderId } = mustGetMsg();
        if (!senderId) {
          UNREACHABLE();
        }
        return this.setChatMemberRights(chatId, senderId, params);
      },
      react: (reactions, params) => {
        const { chatId, messageId } = mustGetMsg();
        return this.setReactions(chatId, messageId, reactions, params);
      },
      answerCallbackQuery: (params) => {
        if (!("callbackQuery" in update)) {
          UNREACHABLE();
        }
        return this.answerCallbackQuery(update.callbackQuery.id, params);
      },
      answerInlineQuery: (results, params) => {
        if (!("inlineQuery" in update)) {
          UNREACHABLE();
        }
        return this.answerInlineQuery(update.inlineQuery.id, results, params);
      },
      sendChatAction: (chatAction, params) => {
        const { chatId } = mustGetMsg();
        return this.sendChatAction(chatId, chatAction, params);
      },
      editMessageText: (messageId, text, params) => {
        const { chatId } = mustGetMsg();
        return this.editMessageText(chatId, messageId, text, params);
      },
      editMessageReplyMarkup: (messageId, params) => {
        const { chatId } = mustGetMsg();
        return this.editMessageReplyMarkup(chatId, messageId, params);
      },
      getMessage: (messageId) => {
        const { chatId } = mustGetMsg();
        return this.getMessage(chatId, messageId);
      },
      getMessages: (messageIds) => {
        const { chatId } = mustGetMsg();
        return this.getMessages(chatId, messageIds);
      },
      forwardMessage: (to, messageId, params) => {
        const { chatId } = mustGetMsg();
        return this.forwardMessage(chatId, to, messageId, params);
      },
      forwardMessages: (to, messageIds, params) => {
        const { chatId } = mustGetMsg();
        return this.forwardMessages(chatId, to, messageIds, params);
      },
      deleteMessage: (messageId, params) => {
        const { chatId } = mustGetMsg();
        return this.deleteMessage(chatId, messageId, params);
      },
      deleteMessages: (messageIds, params) => {
        const { chatId } = mustGetMsg();
        return this.deleteMessages(chatId, messageIds, params);
      },
      pinMessage: (messageId, params) => {
        const { chatId } = mustGetMsg();
        return this.pinMessage(chatId, messageId, params);
      },
      unpinMessage: (messageId) => {
        const { chatId } = mustGetMsg();
        return this.unpinMessage(chatId, messageId);
      },
      unpinMessages: () => {
        const { chatId } = mustGetMsg();
        return this.unpinMessages(chatId);
      },
      setAvailableReactions: (availableReactions) => {
        const { chatId } = mustGetMsg();
        return this.setAvailableReactions(chatId, availableReactions);
      },
      addReaction: (messageId, reaction, params) => {
        const { chatId } = mustGetMsg();
        return this.addReaction(chatId, messageId, reaction, params);
      },
      removeReaction: (messageId, reaction) => {
        const { chatId } = mustGetMsg();
        return this.removeReaction(chatId, messageId, reaction);
      },
      setReactions: (messageId, reactions, params) => {
        const { chatId } = mustGetMsg();
        return this.setReactions(chatId, messageId, reactions, params);
      },
      setChatPhoto: (photo, params) => {
        const { chatId } = mustGetMsg();
        return this.setChatPhoto(chatId, photo, params);
      },
      deleteChatPhoto: () => {
        const { chatId } = mustGetMsg();
        return this.deleteChatPhoto(chatId);
      },
      banChatMember: (memberId, params) => {
        const { chatId } = mustGetMsg();
        return this.banChatMember(chatId, memberId, params);
      },
      unbanChatMember: (memberId) => {
        const { chatId } = mustGetMsg();
        return this.unbanChatMember(chatId, memberId);
      },
      kickChatMember: (memberId) => {
        const { chatId } = mustGetMsg();
        return this.kickChatMember(chatId, memberId);
      },
      setChatMemberRights: (memberId, params) => {
        const { chatId } = mustGetMsg();
        return this.setChatMemberRights(chatId, memberId, params);
      },
      deleteChatMemberMessages: (userId) => {
        const { chatId } = mustGetMsg();
        return this.deleteChatMemberMessages(chatId, userId);
      },
    };

    return cleanObject(context as C);
  };

  #propagateConnectionState(connectionState: ConnectionState) {
    this.#updateManager.getHandleUpdateQueue(UpdateManager.MAIN_BOX_ID).add(async () => {
      await this.#handle(await this.#constructContext({ connectionState }), resolve);
    });
    this.#lastPropagatedConnectionState = connectionState;
  }

  #lastPropagatedConnectionState: ConnectionState | null = null;
  protected stateChangeHandler = ((connected: boolean) => {
    this.#connectMutex.acquire().then((release) => {
      try {
        const connectionState = connected ? "ready" : "notConnected";
        if (this.connected == connected && this.#lastPropagatedConnectionState != connectionState) {
          this.#propagateConnectionState(connectionState);
        }
      } finally {
        release();
      }
    });
  }).bind(this);

  #storageInited = false;

  /**
   * Sets the DC and resets the auth key stored in the session provider
   * if the stored DC was not the same as the `dc` parameter.
   *
   * @param dc The DC to change to.
   */
  async setDc(dc: DC) {
    if (!this.#storageInited) {
      await this.storage.initialize();
      this.#storageInited = true;
    }
    if (await this.storage.getDc() != dc) {
      await this.storage.setDc(dc);
      await this.storage.setAuthKey(null);
      await this.storage.getAuthKey();
    }
    super.setDc(dc);
  }

  async #setAuth(key: Uint8Array) {
    const hash = await sha1(key);
    const id = bigIntFromBuffer(hash.slice(-8), true, false);
    this.#auth = { key, id };
  }

  #authKeyWasCreated = true;
  #connectMutex = new Mutex();
  /**
   * Loads the session if `setDc` was not called, initializes and connnects
   * a `ClientPlain` to generate auth key if there was none, and connects the client.
   * Before establishing the connection, the session is saved.
   */
  async connect() {
    if (this.connected) {
      return;
    }
    const release = await this.#connectMutex.acquire();
    try {
      if (!this.#storageInited) {
        await this.storage.initialize();
        if (!this.#guaranteeUpdateDelivery) {
          await this.storage.deleteUpdates();
        }
        this.#storageInited = true;
      }
      const authKey = await this.storage.getAuthKey();
      if (authKey == null) {
        const plain = new ClientPlain({ initialDc: this.initialDc, transportProvider: this.transportProvider, cdn: this.cdn, publicKeys: this.#publicKeys });
        const dc = await this.storage.getDc();
        if (dc != null) {
          plain.setDc(dc);
        }
        await plain.connect();
        const { authKey, salt } = await plain.createAuthKey();
        await plain.disconnect();
        await this.storage.setAuthKey(authKey);
        await this.#setAuth(authKey);
        this.#state.salt = salt;
        await this.storage.setServerSalt(salt);
      } else {
        if (this.#state.salt == 0n) {
          this.#state.salt = await this.storage.getServerSalt() ?? 0n;
        }
        await this.#setAuth(authKey);
        this.#authKeyWasCreated = false;
      }
      const dc = await this.storage.getDc();
      if (dc != null) {
        await this.setDc(dc);
      }
      await super.connect();
      if (dc == null) {
        await this.storage.setDc(this.initialDc);
      }
      d("encrypted client connected");
      drop(this.#receiveLoop());
      if (this.#pingLoopStarted) {
        drop(this.#pingLoop());
      }
    } finally {
      release();
    }
  }

  async #assertUser(source: string) {
    if (await this.storage.getAccountType() != "user") {
      throw new Error(`${source}: not user a client`);
    }
  }

  async #assertBot(source: string) {
    if (await this.storage.getAccountType() != "bot") {
      throw new Error(`${source}: not a bot client`);
    }
  }

  async [handleMigrationError](err: Migrate) {
    let newDc = String(err.dc);
    if (Math.abs(this.dcId) >= 10_000) {
      newDc += "-test";
    }
    await this.reconnect(newDc as DC);
    d("migrated to DC%s", newDc);
  }

  #connectionInited = false;
  async disconnect() {
    this.#connectionInited = false;
    await super.disconnect();
    this.#pingLoopAbortSignal?.abort();
  }
  async #initConnection() {
    if (!this.#connectionInited) {
      await this.api.initConnection({
        api_id: this.apiId!,
        app_version: this.appVersion,
        device_model: this.deviceModel,
        lang_code: this.langCode,
        lang_pack: this.langPack,
        query: new functions.invokeWithLayer({
          layer: LAYER,
          query: new functions.help.getConfig(),
        }),
        system_lang_code: this.systemLangCode,
        system_version: this.systemVersion,
      });
      this.#connectionInited = true;
      d("connection inited");
    }
  }

  #lastPropagatedAuthorizationState: boolean | null = null;
  async #propagateAuthorizationState(authorized: boolean) {
    if (this.#lastPropagatedAuthorizationState != authorized) {
      await this.#handle(await this.#constructContext({ authorizationState: { authorized } }), resolve);
      this.#lastPropagatedAuthorizationState = authorized;
    }
  }

  #selfId: number | null = null;
  async #getSelfId() {
    if (this.#selfId == null) {
      this.#selfId = await this.getMe().then((v) => v.id);
    }
    return this.#selfId!;
  }

  /**
   * Calls [initConnection](1) and authorizes the client with one of the following:
   *
   * - Bot token (`string`)
   * - Exported authorization (`types.AuthExportedAuthorization`)
   * - User authorization handlers (`AuthorizeUserParams`)
   *
   * if the current auth key doesn't throw AUTH_KEY_UNREGISTERED when calling [updates.getState](2).
   *
   * Notes:
   * 1. Requires the `apiId` and `apiHash` paramters to be passed when constructing the client.
   * 2. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.
   * 3. The parameters passed to the [initConnection][1] call can be configured with the last parameter of the constructor.
   *
   * [1]: https://core.telegram.org/method/initConnection
   * [2]: https://core.telegram.org/method/updates.getState
   */
  async authorize(params?: string | types.auth.ExportedAuthorization | AuthorizeUserParams) {
    if (!this.apiId) {
      throw new Error("apiId not set");
    }
    if (!this.apiHash) {
      throw new Error("apiHash not set");
    }

    if (typeof params === "undefined") {
      const loginType = mustPromptOneOf("Do you want to login as bot [b] or user [u]?", ["b", "u"] as const);
      if (loginType == "b") {
        params = mustPrompt("Bot token:");
      } else {
        params = { phone: () => mustPrompt("Phone number:"), code: () => mustPrompt("Verification code:"), password: () => mustPrompt("Password:") };
      }
    }

    dAuth("authorizing with %s", typeof params === "string" ? "bot token" : params instanceof types.auth.ExportedAuthorization ? "exported authorization" : "AuthorizeUserParams");

    await this.#initConnection();

    try {
      await this.#updateManager.fetchState("authorize");
      await this.#propagateAuthorizationState(true);
      drop(this.#updateManager.recoverUpdateGap("authorize"));
      d("already authorized");
      return;
    } catch (err) {
      if (!(err instanceof AuthKeyUnregistered)) {
        throw err;
      }
    }

    if (typeof params === "string") {
      while (true) {
        try {
          const auth = await this.api.auth.importBotAuthorization({ api_id: this.apiId, api_hash: this.apiHash, bot_auth_token: params, flags: 0 });
          this.#selfId = Number(auth[as](types.auth.Authorization).user.id);
          await this.storage.setAccountType("bot");
          break;
        } catch (err) {
          if (err instanceof Migrate) {
            await this[handleMigrationError](err);
            await this.#initConnection();
            continue;
          } else {
            throw err;
          }
        }
      }
      dAuth("authorized as bot");
      await this.#propagateAuthorizationState(true);
      await this.#updateManager.fetchState("authorize");
      return;
    }

    if (params instanceof types.auth.ExportedAuthorization) {
      await this.api.auth.importAuthorization({ id: params.id, bytes: params.bytes });
      dAuth("authorization imported");
      return;
    }

    auth: while (true) {
      try {
        let phone: string;
        let sentCode: types.auth.SentCode;
        while (true) {
          try {
            phone = typeof params.phone === "string" ? params.phone : await params.phone();
            const sendCode = () =>
              this.api.auth.sendCode({
                phone_number: phone,
                api_id: this.apiId!,
                api_hash: this.apiHash!,
                settings: new types.CodeSettings(),
              }).then((v) => v[as](types.auth.SentCode));
            try {
              sentCode = await sendCode();
            } catch (err) {
              if (err instanceof Migrate) {
                await this[handleMigrationError](err);
                await this.#initConnection();
                sentCode = await sendCode();
              } else {
                throw err;
              }
            }
            break;
          } catch (err) {
            if (err instanceof PhoneNumberInvalid) {
              continue;
            } else {
              throw err;
            }
          }
        }
        dAuth("verification code sent");

        let err: unknown;
        code: while (true) {
          const code = typeof params.code === "string" ? params.code : await params.code();
          try {
            const auth = await this.api.auth.signIn({
              phone_number: phone,
              phone_code: code,
              phone_code_hash: sentCode.phone_code_hash,
            });
            this.#selfId = Number(auth[as](types.auth.Authorization).user.id);
            await this.storage.setAccountType("user");
            dAuth("authorized as user");
            await this.#propagateAuthorizationState(true);
            await this.#updateManager.fetchState("authorize");
            return;
          } catch (err_) {
            if (err_ instanceof types.Rpc_error && err_.error_message == "PHONE_CODE_INVALID") {
              continue code;
            } else {
              err = err_;
              break code;
            }
          }
        }

        if (!(err instanceof SessionPasswordNeeded)) {
          throw err;
        }

        password: while (true) {
          const ap = await this.api.account.getPassword();
          if (!(ap.current_algo instanceof types.PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow)) {
            throw new Error(`Handling ${ap.current_algo?.[name]} not implemented`);
          }
          try {
            const password = typeof params.password === "string" ? params.password : await params.password(ap.hint ?? null);
            const input = await checkPassword(password, ap);

            const auth = await this.api.auth.checkPassword({ password: input });
            this.#selfId = Number(auth[as](types.auth.Authorization).user.id);
            await this.storage.setAccountType("user");
            dAuth("authorized as user");
            await this.#propagateAuthorizationState(true);
            await this.#updateManager.fetchState("authorize");
            return;
          } catch (err) {
            if (err instanceof PasswordHashInvalid) {
              continue password;
            } else {
              throw err;
            }
          }
        }
      } catch (err) {
        if (err == restartAuth) {
          continue auth;
        } else {
          throw err;
        }
      }
    }
  }

  /**
   * Same as calling `.connect()` followed by `.authorize(params)` if the session didn't have an auth key.
   */
  async start(params?: string | types.auth.ExportedAuthorization | AuthorizeUserParams) {
    await this.connect();
    await this.#initConnection();

    if (!this.#authKeyWasCreated) {
      drop(this.#updateManager.fetchState("start"));
      drop(this.#updateManager.recoverUpdateGap("start"));
      return;
    }

    await this.authorize(params);
  }

  async #receiveLoop() {
    if (!this.#auth || !this.transport) {
      throw new ConnectionError("Not connected");
    }

    while (this.connected) {
      try {
        if (this.#toAcknowledge.size >= ACK_THRESHOLD) {
          await this.send(new types.Msgs_ack({ msg_ids: [...this.#toAcknowledge] }));
          this.#toAcknowledge.clear();
        }

        const buffer = await this.transport.transport.receive();

        let decrypted;
        try {
          decrypted = await (decryptMessage(
            buffer,
            this.#auth.key,
            this.#auth.id,
            this.#sessionId,
          ));
        } catch (err) {
          dRecv("failed to decrypt message: %o", err);
          drop((async () => {
            try {
              await this.disconnect();
            } catch {
              //
            }
            await this.connect();
            await this.#updateManager.recoverUpdateGap("decryption");
          })());
          continue;
        }
        const messages = decrypted instanceof MessageContainer ? decrypted.messages : [decrypted];

        for (const message of messages) {
          let body = message.body;
          if (body instanceof types.Gzip_packed) {
            body = new TLReader(gunzip(body.packed_data)).readObject();
          }
          dRecv("received %s", (typeof body === "object" && name in body) ? body[name] : body.constructor.name);
          if (body instanceof types._Updates || body instanceof types._Update) {
            this.#updateManager.processUpdates(body as types.Updates | enums.Update, true);
          } else if (body instanceof types.New_session_created) {
            this.#state.salt = body.server_salt;
            await this.storage.setServerSalt(this.#state.salt);
          } else if (message.body instanceof RPCResult) {
            let result = message.body.result;
            if (result instanceof types.Gzip_packed) {
              result = new TLReader(gunzip(result.packed_data)).readObject();
            }
            if (result instanceof types.Rpc_error) {
              dRecv("RPCResult: %d %s", result.error_code, result.error_message);
            } else {
              dRecv("RPCResult: %s", (typeof result === "object" && name in result) ? result[name] : result.constructor.name);
            }
            const messageId = message.body.messageId;
            const promise = this.#promises.get(messageId);
            const resolvePromise = () => {
              if (promise) {
                if (result instanceof types.Rpc_error) {
                  promise.reject(upgradeInstance(result, promise.call));
                } else {
                  promise.resolve(result);
                }
                this.#promises.delete(messageId);
              }
            };
            if (result instanceof types._Updates || result instanceof types._Update) {
              this.#updateManager.processUpdates(result as enums.Updates | enums.Update, true, promise?.call, resolvePromise);
            } else {
              await this.#updateManager.processResult(result);
              resolvePromise();
            }
          } else if (message.body instanceof types.Pong) {
            const promise = this.#promises.get(message.body.msg_id);
            if (promise) {
              promise.resolve(message.body);
              this.#promises.delete(message.body.msg_id);
            }
          } else if (message.body instanceof types.Bad_server_salt) {
            d("server salt reassigned");
            this.#state.salt = message.body.new_server_salt;
            await this.storage.setServerSalt(this.#state.salt);
            const promise = this.#promises.get(message.body.bad_msg_id);
            if (promise) {
              promise.resolve(message.body);
              this.#promises.delete(message.body.bad_msg_id);
            }
          }

          this.#toAcknowledge.add(message.id);
        }
      } catch (err) {
        if (!this.connected) {
          break;
        } else if (err instanceof TLError) {
          dRecv("failed to deserialize: %o", err);
          drop(this.#updateManager.recoverUpdateGap("deserialize"));
        } else {
          dRecv("uncaught error: %o", err);
        }
      }
    }

    if (!this.connected) {
      for (const { reject } of this.#promises.values()) {
        reject(new ConnectionError("Connection was closed"));
      }
    } else {
      UNREACHABLE();
    }
  }

  #pingLoopAbortSignal: AbortController | null = null;
  #pingInterval = 60 * 1_000; // 60 seconds
  #lastUpdates = new Date();
  async #pingLoop() {
    this.#pingLoopAbortSignal = new AbortController();
    while (this.connected) {
      try {
        await new Promise((resolve, reject) => {
          setTimeout(resolve, this.#pingInterval);
          this.#pingLoopAbortSignal!.signal.onabort = () => {
            reject(this.#pingLoopAbortSignal?.signal.reason);
          };
        });
        await this.api.ping_delay_disconnect({ ping_id: getRandomId(), disconnect_delay: this.#pingInterval / 1_000 + 15 });
        if (Date.now() - this.#lastUpdates.getTime() >= 15 * 60 * 1_000) {
          drop(this.#updateManager.recoverUpdateGap("lastUpdates"));
        }
      } catch (err) {
        d("ping loop error: %o", err);
      }
    }
  }

  #pingLoopStarted = false;
  #autoStarted = false;
  #lastMsgId = 0n;
  async #invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
  async #invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
  async #invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void> {
    let n = 1;
    while (true) {
      try {
        if (!this.#auth || !this.transport) {
          if (this.#autoStart && !this.#autoStarted) {
            await this.start();
          } else {
            throw new ConnectionError("Not connected");
          }
        }
        if (!this.#auth || !this.transport) {
          UNREACHABLE();
        }

        let seqNo = this.#state.seqNo * 2;
        if (!(function_ instanceof functions.ping) && !(function_ instanceof types.Msgs_ack)) {
          seqNo++;
          this.#state.seqNo++;
        }

        const messageId = this.#lastMsgId = getMessageId(this.#lastMsgId);
        const message = new Message_(messageId, seqNo, function_);
        await this.transport.transport.send(
          await encryptMessage(
            message,
            this.#auth.key,
            this.#auth.id,
            this.#state.salt,
            this.#sessionId,
          ),
        );
        d("invoked %s", function_[name]);

        if (noWait) {
          this.#promises.set(message.id, {
            resolve: (result) => {
              if (result instanceof types.Bad_server_salt) {
                drop(this.invoke(function_, true));
              }
            },
            reject: () => {},
            call: function_,
          });
          return;
        }

        let result;

        try {
          result = await new Promise<ReadObject>((resolve, reject) => {
            this.#promises.set(message.id, { resolve, reject, call: function_ });
          });
        } catch (err) {
          if (err instanceof AuthKeyUnregistered) {
            await this.#propagateAuthorizationState(false);
          }
          throw err;
        }

        if (result instanceof types.Bad_server_salt) {
          return await this.invoke(function_) as T;
        } else {
          if (!this.#pingLoopStarted) {
            drop(this.#pingLoop());
            this.#pingLoopStarted = true;
          }
          return result as T;
        }
      } catch (err) {
        if (await this.#handleInvokeError(Object.freeze({ client: this, error: err, function: function_, n: n++ }), () => Promise.resolve(false))) {
          continue;
        } else {
          throw err;
        }
      }
    }
  }

  #handleInvokeError = skipInvoke<C>();

  /**
   * Invokes a function waiting and returning its reply if the second parameter is not `true`. Requires the client
   * to be connected.
   *
   * @param function_ The function to invoke.
   */
  invoke = Object.assign(
    this.#invoke,
    {
      use: (handler: InvokeErrorHandler<Client<C>>) => {
        const handle = this.#handleInvokeError;
        this.#handleInvokeError = async (ctx, next) => {
          let result: boolean | null = null;
          return await handle(ctx, async () => {
            if (result != null) return result;
            result = await handler(ctx, next);
            return result;
          });
        };
      },
    },
  );

  /**
   * Alias for `invoke` with its second parameter being `true`.
   */
  send<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T) {
    return this.invoke(function_, true);
  }

  async #getUserAccessHash(userId: bigint) {
    const users = await this.api.users.getUsers({ id: [new types.InputUser({ user_id: userId, access_hash: 0n })] });
    return users[0]?.[as](types.User).access_hash ?? 0n;
  }

  async #getChannelAccessHash(channelId: bigint) {
    const channels = await this.api.channels.getChannels({ id: [new types.InputChannel({ channel_id: channelId, access_hash: 0n })] });
    return channels.chats[0][as](types.Channel).access_hash ?? 0n;
  }

  async getInputPeer(id: ID) {
    const inputPeer = await this.#getInputPeerInner(id);
    if ((inputPeer instanceof types.InputPeerUser || inputPeer instanceof types.InputPeerChannel && inputPeer.access_hash == 0n) && await this.storage.getAccountType() == "bot") {
      if ("channel_id" in inputPeer) {
        inputPeer.access_hash = await this.#getChannelAccessHash(inputPeer.channel_id);
      } else {
        inputPeer.access_hash = await this.#getUserAccessHash(inputPeer.user_id);
        await this.storage.setUserAccessHash(inputPeer.user_id, inputPeer.access_hash);
      }
    }
    return inputPeer;
  }

  async #getInputPeerInner(id: ID) {
    if (typeof id === "string") {
      id = getUsername(id);
      let userId = 0n;
      let channelId = 0n;
      const maybeUsername = await this.storage.getUsername(id);
      if (maybeUsername != null && Date.now() - maybeUsername[2].getTime() < USERNAME_TTL) {
        const [type, id] = maybeUsername;
        if (type == "user") {
          userId = id;
        } else {
          channelId = id;
        }
      } else {
        const resolved = await this.api.contacts.resolveUsername({ username: id });
        await this.#updateManager.processChats(resolved.chats);
        await this.#updateManager.processUsers(resolved.users);
        if (resolved.peer instanceof types.PeerUser) {
          userId = resolved.peer.user_id;
        } else if (resolved.peer instanceof types.PeerChannel) {
          channelId = resolved.peer.channel_id;
        } else {
          UNREACHABLE();
        }
      }
      if (userId) {
        const accessHash = await this.storage.getUserAccessHash(userId);
        return new types.InputPeerUser({ user_id: userId, access_hash: accessHash ?? 0n });
      } else if (channelId) {
        const accessHash = await this.storage.getChannelAccessHash(channelId);
        return new types.InputPeerChannel({ channel_id: channelId, access_hash: accessHash ?? 0n });
      } else {
        UNREACHABLE();
      }
    } else if (id > 0) {
      const id_ = BigInt(id);
      const accessHash = await this.storage.getUserAccessHash(id_);
      return new types.InputPeerUser({ user_id: id_, access_hash: accessHash ?? 0n });
    } else if (-MAX_CHAT_ID <= id) {
      return new types.InputPeerChat({ chat_id: BigInt(Math.abs(id)) });
    } else if (ZERO_CHANNEL_ID - MAX_CHANNEL_ID <= id && id != ZERO_CHANNEL_ID) {
      const id_ = BigInt(Math.abs(id - ZERO_CHANNEL_ID));
      const accessHash = await this.storage.getChannelAccessHash(id_);
      return new types.InputPeerChannel({ channel_id: id_, access_hash: accessHash ?? 0n });
    } else {
      throw new Error("ID format unknown or not implemented");
    }
  }

  private [getEntity](peer: types.PeerUser): Promise<types.User | null>;
  private [getEntity](peer: types.PeerChat): Promise<types.Chat | types.ChatForbidden | null>;
  private [getEntity](peer: types.PeerChannel): Promise<types.Channel | types.ChannelForbidden | null>;
  private [getEntity](peer: types.PeerUser | types.PeerChat | types.PeerChannel): Promise<types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden | null>;
  private [getEntity](peer: types.PeerUser | types.PeerChat | types.PeerChannel) {
    const type = peer instanceof types.PeerUser ? "user" : peer instanceof types.PeerChat ? "chat" : peer instanceof types.PeerChannel ? "channel" : UNREACHABLE();
    const id = peer instanceof types.PeerUser ? peer.user_id : peer instanceof types.PeerChat ? peer.chat_id : peer instanceof types.PeerChannel ? peer.channel_id : UNREACHABLE();
    return this.storage.getEntity(type, id);
  }

  async #updatesToMessages(chatId: ID, updates: enums.Updates) {
    const messages = new Array<Message>();

    if (updates instanceof types.Updates) {
      for (const update of updates.updates) {
        if ("message" in update && update.message instanceof types.MessageEmpty) {
          continue;
        }
        if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateEditMessage) {
          messages.push(await constructMessage(update.message, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this)));
        } else if (update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage) {
          messages.push(await constructMessage(update.message, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this)));
        }
      }
    } else if (updates instanceof types.UpdateShortSentMessage) {
      const message = await this.getMessage(chatId, updates.id);
      if (message != null) {
        messages.push(message);
      }
    }

    return messages;
  }

  async #resolveSendAs(params?: Pick<SendMessageParams, "sendAs">) {
    const sendAs = params?.sendAs;
    if (sendAs !== undefined) {
      await this.#assertUser("sendAs");
      return sendAs ? await this.getInputPeer(sendAs) : undefined;
    }
  }

  #constructReplyTo(params?: _SendCommon) {
    const topMsgId = params?.messageThreadId;
    const replyToMsgId = params?.replyToMessageId;
    return replyToMsgId !== undefined ? new types.InputReplyToMessage({ reply_to_msg_id: replyToMsgId, top_msg_id: topMsgId, quote_text: params?.replyQuote?.text, quote_entities: params?.replyQuote?.entities.map(messageEntityToTlObject), quote_offset: params?.replyQuote?.offset }) : undefined;
  }

  /**
   * Send a text message.
   *
   * @method
   * @param chatId The chat to send the message to.
   * @param text The message's text.
   * @returns The sent text message.
   */
  async sendMessage(
    chatId: ID,
    text: string,
    params?: SendMessageParams,
  ): Promise<MessageText> {
    const [message, entities] = this.#parseText(text, params);

    const replyMarkup = await this.#constructReplyMarkup(params);

    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const noWebpage = params?.disableWebPagePreview ? true : undefined;
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = await this.#resolveSendAs(params);

    const result = await this.api.messages.sendMessage({
      peer,
      random_id: randomId,
      message,
      no_webpage: noWebpage,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      entities,
      reply_markup: replyMarkup,
    });

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message_, "text");
  }

  #parseText(text: string, params?: { parseMode?: ParseMode; entities?: MessageEntity[] }) {
    const entities_ = params?.entities ?? [];
    const parseMode = params?.parseMode ?? this.parseMode;
    switch (parseMode) {
      case null:
        break;
      case "HTML": {
        const [newText, entitiesToPush] = parseHtml(text);
        text = newText;
        for (const entity of entitiesToPush) {
          entities_.push(entity);
        }
        break;
      }
      default:
        UNREACHABLE();
    }
    const entities = entities_?.length > 0 ? entities_.map((v) => messageEntityToTlObject(v)) : undefined;
    return [text, entities] as const;
  }

  /**
   * Edit a message's text.
   *
   * @method
   * @param chatId The identifier of the chat that contains the messages.
   * @param messageId The message's identifier.
   * @param text The new text of the message.
   * @returns The edited text message.
   */
  async editMessageText(
    chatId: ID,
    messageId: number,
    text: string,
    params?: EditMessageParams,
  ): Promise<MessageText> {
    const [message, entities] = this.#parseText(text, params);

    const result = await this.api.messages.editMessage({
      id: messageId,
      peer: await this.getInputPeer(chatId),
      entities,
      message,
      no_webpage: params?.disableWebPagePreview ? true : undefined,
      reply_markup: await this.#constructReplyMarkup(params),
    });

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message_, "text");
  }

  /**
   * Edit a message's reply markup.
   *
   * @method
   * @param chatId The identifier of the chat that contains the messages.
   * @param messageId The message's identifier.
   * @returns The edited message.
   */
  async editMessageReplyMarkup(
    chatId: ID,
    messageId: number,
    params?: EditMessageReplyMarkupParams,
  ): Promise<Message> {
    const result = await this.api.messages.editMessage({
      id: messageId,
      peer: await this.getInputPeer(chatId),
      reply_markup: await this.#constructReplyMarkup(params),
    });

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return message_;
  }

  /**
   * Retrieve multiple messages.
   *
   * @method
   * @param chatId The identifier of the chat to retrieve the messages from.
   * @param messageIds The identifiers of the messages to retrieve.
   * @example ```ts
   * const message = await client.getMessages("@MTKruto", [210, 212]);
   * ```
   * @returns The retrieved messages.
   */
  async getMessages(chatId: ID, messageIds: number[]): Promise<Message[]> {
    const peer = await this.getInputPeer(chatId);
    let messages_ = new Array<enums.Message>();
    const chatId_ = peerToChatId(peer);
    let shouldFetch = false;
    for (const messageId of messageIds) {
      const message = await this.storage.getMessage(chatId_, messageId);
      if (message == null) {
        messages_ = [];
        shouldFetch = true;
        break;
      } else {
        messages_.push(message);
      }
    }
    if (shouldFetch) {
      if (peer instanceof types.InputPeerChannel) {
        messages_ = await this.api.channels.getMessages({
          channel: new types.InputChannel(peer),
          id: messageIds.map((v) => new types.InputMessageID({ id: v })),
        }).then((v) => v[as](types.messages.ChannelMessages).messages);
      } else {
        messages_ = await this.api.messages.getMessages({
          id: messageIds.map((v) => new types.InputMessageID({ id: v })),
        }).then((v) => v[as](types.messages.Messages).messages);
      }
    }
    const messages = new Array<Message>();
    for (const message_ of messages_) {
      if (message_ instanceof types.MessageEmpty) {
        continue;
      }
      const message = await constructMessage(message_, this[getEntity].bind(this), null, this[getStickerSetName].bind(this));
      messages.push(message);
    }
    return messages;
  }

  private async [getMessageWithReply](chatId: ID, messageId: number): Promise<Message | null> {
    const message = await this.getMessage(chatId, messageId);
    if (message != null && message.replyToMessageId) {
      message.replyToMessage = await this.getMessage(chatId, message.replyToMessageId) ?? undefined;
    }
    return message;
  }

  /**
   * Retrieve a single message.
   *
   * @method
   * @param chatId The identifier of the chat to retrieve the message from.
   * @param messageId The identifier of the message to retrieve.
   * @example ```ts
   * const message = await client.getMessage("@MTKruto", 212);
   * ```
   * @returns The retrieved message.
   */
  async getMessage(chatId: ID, messageId: number): Promise<Message | null> {
    const messages = await this.getMessages(chatId, [messageId]);
    return messages[0] ?? null;
  }

  async *#downloadInner(location: enums.InputFileLocation, dcId: number, params?: { chunkSize?: number }) {
    const id = "id" in location ? location.id : "photo_id" in location ? location.photo_id : null;
    if (id != null) {
      const partCount = await this.storage.getFile(id);
      if (partCount != null && partCount > 0) {
        for await (const part of this.storage.iterFileParts(id, partCount)) {
          yield part;
        }
        return;
      }
    }

    const chunkSize = params?.chunkSize ?? 1024 * 1024;
    if (mod(chunkSize, 1024) != 0) {
      throw new Error("chunkSize must be divisible by 1024");
    }

    const client = new Client(dcId == this.dcId ? this.storage : this.storage.branch(`download_client_${dcId}`), this.apiId, this.apiHash, {
      transportProvider: this.transportProvider,
      appVersion: this.appVersion,
      deviceModel: this.deviceModel,
      langCode: this.langCode,
      langPack: this.langPack,
      systemLangCode: this.systemLangCode,
      systemVersion: this.systemVersion,
      cdn: true,
    });
    let dc = String(dcId);
    if (this.dcId < 0) {
      dc += "-test";
    }
    await client.setDc(dc as DC);
    await client.connect();
    await client.#initConnection();

    client.invoke.use(async (ctx, next) => {
      if (ctx.error instanceof AuthKeyUnregistered) {
        try {
          const exportedAuth = await this.api.auth.exportAuthorization({ dc_id: dcId });
          await client.authorize(exportedAuth);
          return true;
        } catch (err) {
          throw err;
        }
      } else {
        return await next();
      }
    });

    const limit = chunkSize;
    let offset = 0n;
    let part = 0;

    while (true) {
      const file = await (client ?? this).invoke(new functions.upload.getFile({ location, offset, limit }));

      if (file instanceof types.upload.File) {
        yield file.bytes;
        if (id != null) {
          await this.storage.saveFilePart(id, part, file.bytes);
        }
        ++part;
        if (file.bytes.length < limit) {
          if (id != null) {
            await this.storage.setFilePartCount(id, part + 1);
          }
          break;
        } else {
          offset += BigInt(file.bytes.length);
        }
      } else {
        UNREACHABLE();
      }
    }
  }

  /**
   * Download a file.
   *
   * @method
   * @param fileId The identifier of the file to download.
   * @example ```ts
   * for await (const chunk of client.download(fileId, { chunkSize: 256 * 1024 })) {
   *   await outFile.write(chunk);
   * }
   * ```
   * @returns A generator yielding the contents of the file.
   */
  async *download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown> {
    const fileId_ = FileID.decode(fileId);
    switch (fileId_.fileType) {
      case FileType.ChatPhoto: {
        const big = fileId_.params.thumbnailSource == ThumbnailSource.ChatPhotoBig;
        const peer = await this.getInputPeer(fileId_.params.chatId!);
        const location = new types.InputPeerPhotoFileLocation({ big: big ? true : undefined, peer, photo_id: fileId_.params.mediaId! });
        for await (const chunk of this.#downloadInner(location, fileId_.dcId, params)) {
          yield chunk;
        }
        break;
      }
      case FileType.Photo: {
        if (fileId_.params.mediaId == undefined || fileId_.params.accessHash == undefined || fileId_.params.fileReference == undefined || fileId_.params.thumbnailSize == undefined) {
          UNREACHABLE();
        }
        const location = new types.InputPhotoFileLocation({
          id: fileId_.params.mediaId,
          access_hash: fileId_.params.accessHash,
          file_reference: fileId_.params.fileReference,
          thumb_size: fileId_.params.thumbnailSize,
        });
        for await (const chunk of this.#downloadInner(location, fileId_.dcId, params)) {
          yield chunk;
        }
        break;
      }
      case FileType.Document:
      case FileType.Sticker:
      case FileType.VideoNote:
      case FileType.Video:
      case FileType.Audio:
      case FileType.Voice:
      case FileType.Animation: {
        if (fileId_.params.mediaId == undefined || fileId_.params.accessHash == undefined || fileId_.params.fileReference == undefined || fileId_.params.thumbnailSize == undefined) {
          UNREACHABLE();
        }
        const location = new types.InputDocumentFileLocation({
          id: fileId_.params.mediaId,
          access_hash: fileId_.params.accessHash,
          file_reference: fileId_.params.fileReference,
          thumb_size: fileId_.params.thumbnailSize,
        });
        for await (const chunk of this.#downloadInner(location, fileId_.dcId, params)) {
          yield chunk;
        }
        break;
      }
      default:
        UNREACHABLE();
    }
  }

  private async [getStickerSetName](inputStickerSet: types.InputStickerSetID, hash = 0) {
    const maybeStickerSetName = await this.storage.getStickerSetName(inputStickerSet.id, inputStickerSet.access_hash);
    if (maybeStickerSetName != null && Date.now() - maybeStickerSetName[1].getTime() < STICKER_SET_NAME_TTL) {
      return maybeStickerSetName[0];
    } else {
      const stickerSet = await this.api.messages.getStickerSet({ stickerset: inputStickerSet, hash });
      const name = stickerSet[as](types.messages.StickerSet).set.short_name;
      await this.storage.updateStickerSetName(inputStickerSet.id, inputStickerSet.access_hash, name);
      return name;
    }
  }

  /**
   * Forward multiple messages.
   *
   * @method
   * @param from The identifier of the chat to forward the messages from.
   * @param to The identifier of the chat to forward the messages to.
   * @param messageIds The identifiers of the messages to forward.
   * @returns The forwarded messages.
   */
  async forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]> {
    const result = await this.api.messages.forwardMessages({
      from_peer: await this.getInputPeer(from),
      to_peer: await this.getInputPeer(to),
      id: messageIds,
      random_id: messageIds.map(() => getRandomId()),
      silent: params?.disableNotification || undefined,
      top_msg_id: params?.messageThreadId,
      noforwards: params?.disableNotification || undefined,
      send_as: params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined,
      drop_author: params?.dropSenderName || undefined,
      drop_media_captions: params?.dropCaption || undefined,
    });

    return await this.#updatesToMessages(to, result);
  }

  /**
   * Forward a single message.
   *
   * @method
   * @param from The identifier of the chat to forward the message from.
   * @param to The identifier of the chat to forward the message to.
   * @param messageId The identifier of the message to forward.
   * @returns The forwarded message.
   */
  async forwardMessage(from: ID, to: ID, messageId: number, params?: ForwardMessagesParams): Promise<Message> {
    return await this.forwardMessages(from, to, [messageId], params).then((v) => v[0]);
  }

  #lastGetMe: User | null = null;
  async #getMe() {
    if (this.#lastGetMe != null) {
      return this.#lastGetMe;
    } else {
      const user = await this.getMe();
      this.#lastGetMe = user;
      return user;
    }
  }

  /**
   * Get information on the currently authorized user.
   *
   * @method
   */
  async getMe(): Promise<User> {
    const users = await this.api.users.getUsers({ id: [new types.InputUserSelf()] });
    if (users.length < 1) {
      UNREACHABLE();
    }
    const user = constructUser(users[0][as](types.User));
    this.#lastGetMe = user;
    return user;
  }

  async #handleUpdate(update: enums.Update) {
    const promises = new Array<Promise<unknown>>();
    if (update instanceof types.UpdateUserName) {
      await this.storage.updateUsernames("user", update.user_id, update.usernames.map((v) => v.username));
      const peer = new types.PeerUser(update);
      const entity = await this[getEntity](peer);
      if (entity != null) {
        entity.usernames = update.usernames;
        entity.first_name = update.first_name;
        entity.last_name = update.last_name;
        await this.storage.setEntity(entity);
      }
    }

    if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditMessage || update instanceof types.UpdateEditChannelMessage) {
      if (update.message instanceof types.Message || update.message instanceof types.MessageService) {
        const chatId = peerToChatId(update.message.peer_id);
        await this.storage.setMessage(chatId, update.message.id, update.message);
        promises.push((await this.#reassignChatLastMessage(chatId))());
      }
    }

    if (update instanceof types.UpdateMessageReactions) {
      const chatId = peerToChatId(update.peer);
      const message = await this.storage.getMessage(chatId, update.msg_id);
      if (message instanceof types.Message) {
        message.reactions = update.reactions;
        await this.storage.setMessage(chatId, update.msg_id, message);
        const views = message.views ?? 0;
        const forwards = message.forwards ?? 0;
        const recentReactions = update.reactions.recent_reactions ?? [];
        const reactions = update.reactions.results.map((v) => constructMessageReaction(v, recentReactions));
        promises.push((async () => this.#handle(await this.#constructContext({ messageInteractions: { chatId, messageId: update.msg_id, reactions, views, forwards } }), resolve))());
      }
    } else if (update instanceof types.UpdateChannelMessageViews || update instanceof types.UpdateChannelMessageForwards) {
      const chatId = peerToChatId(new types.PeerChannel(update));
      const message = await this.storage.getMessage(chatId, update.id);
      if (message instanceof types.Message) {
        if ("views" in update) {
          message.views = update.views;
        }
        if ("forwards" in update) {
          message.forwards = update.forwards;
        }
        const views = message.views ?? 0;
        const forwards = message.forwards ?? 0;
        const recentReactions = message.reactions?.recent_reactions ?? [];
        const reactions = message.reactions?.results.map((v) => constructMessageReaction(v, recentReactions)) ?? [];
        promises.push((async () => this.#handle(await this.#constructContext({ messageInteractions: { chatId, messageId: update.id, reactions, views, forwards } }), resolve))());
      }
    }

    if (
      update instanceof types.UpdateNewMessage ||
      update instanceof types.UpdateNewChannelMessage ||
      update instanceof types.UpdateEditMessage ||
      update instanceof types.UpdateEditChannelMessage
    ) {
      if (!(update.message instanceof types.MessageEmpty)) {
        const isOutgoing = update.message.out;
        let shouldIgnore = isOutgoing ? (await this.storage.getAccountType()) == "user" ? false : true : false;
        if (this.#ignoreOutgoing != null && isOutgoing) {
          shouldIgnore = this.#ignoreOutgoing;
        }
        if (!shouldIgnore) {
          const message = await constructMessage(
            update.message,
            this[getEntity].bind(this),
            this.getMessage.bind(this),
            this[getStickerSetName].bind(this),
          );
          promises.push((async () => {
            let context: C;
            if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage) {
              context = await this.#constructContext({ message });
            } else {
              context = await this.#constructContext({ editedMessage: message });
            }
            await this.#handle(context, resolve);
          })());
        }
      }
    }

    if (update instanceof types.UpdateDeleteMessages) {
      const deletedMessages = new Array<{ chatId: number; messageId: number }>();
      for (const messageId of update.messages) {
        const chatId = await this.storage.getMessageChat(messageId);
        if (chatId) {
          deletedMessages.push({ chatId, messageId });
        }
      }
      if (deletedMessages.length > 0) {
        promises.push((async () => {
          try {
            await this.#handle(await this.#constructContext({ deletedMessages }), resolve);
          } finally {
            for (const { chatId, messageId } of deletedMessages) {
              await this.storage.setMessage(chatId, messageId, null);
              await this.#reassignChatLastMessage(chatId);
            }
          }
        })());
      }
    } else if (update instanceof types.UpdateDeleteChannelMessages) {
      const chatId = getChannelChatId(update.channel_id);
      const deletedMessages = new Array<{ chatId: number; messageId: number }>();
      for (const messageId of update.messages) {
        const message = await this.storage.getMessage(chatId, messageId);
        if (message != null) {
          deletedMessages.push({ chatId, messageId });
        }
      }
      if (deletedMessages.length > 0) {
        promises.push((async () => {
          try {
            await this.#handle(await this.#constructContext({ deletedMessages }), resolve);
          } finally {
            for (const { chatId, messageId } of deletedMessages) {
              await this.storage.setMessage(chatId, messageId, null);
              await this.#reassignChatLastMessage(chatId);
            }
          }
        })());
      }
    }

    if (update instanceof types.UpdateBotCallbackQuery || update instanceof types.UpdateInlineBotCallbackQuery) {
      promises.push((async () => this.#handle(await this.#constructContext({ callbackQuery: await constructCallbackQuery(update, this[getEntity].bind(this), this[getMessageWithReply].bind(this)) }), resolve))());
    } else if (update instanceof types.UpdateBotInlineQuery) {
      promises.push((async () => this.#handle(await this.#constructContext({ inlineQuery: await constructInlineQuery(update, this[getEntity].bind(this)) }), resolve))());
    } else if (update instanceof types.UpdateBotInlineSend) {
      promises.push((async () => this.#handle(await this.#constructContext({ chosenInlineResult: await constructChosenInlineResult(update, this[getEntity].bind(this)) }), resolve))());
    } else if (update instanceof types.UpdateBotMessageReactions) {
      const messageReactionCount = await constructMessageReactionCount(update, this[getEntity].bind(this));
      if (messageReactionCount) {
        promises.push((async () => this.#handle(await this.#constructContext({ messageReactionCount }), resolve))());
      }
    } else if (update instanceof types.UpdateBotMessageReaction) {
      const messageReactions = await constructMessageReactions(update, this[getEntity].bind(this));
      if (messageReactions) {
        promises.push((async () => this.#handle(await this.#constructContext({ messageReactions }), resolve))());
      }
    }

    if (update instanceof types.UpdatePinnedDialogs) {
      await this.#updatePinnedChats(update);
    } else if (update instanceof types.UpdateFolderPeers) {
      await this.#moveChats(update);
    }

    if (update instanceof types.UpdateChannel) {
      const peer = new types.PeerChannel(update);
      const channel = await this[getEntity](peer);
      if (channel != null && "left" in channel && channel.left) {
        await this.#removeChat(peerToChatId(peer));
      } else if (channel instanceof types.ChannelForbidden) {
        await this.#removeChat(peerToChatId(peer));
      } else if (channel instanceof types.Channel) {
        await this.#updateOrAddChat(peerToChatId(peer));
      }
    } else if (update instanceof types.UpdateChat) { // TODO: handle deactivated (migration)
      const peer = new types.PeerChat(update);
      const chat = await this[getEntity](peer);
      if (chat != null && "left" in chat && chat.left) {
        await this.#removeChat(peerToChatId(peer));
      } else if (chat instanceof types.ChatForbidden) {
        await this.#removeChat(peerToChatId(peer));
      } else if (chat instanceof types.Chat) {
        await this.#updateOrAddChat(peerToChatId(peer));
      }
    } else if (update instanceof types.UpdateUser || update instanceof types.UpdateUserName) {
      const peer = new types.PeerUser(update);
      const chat = await this[getEntity](peer);
      if (chat != null) {
        await this.#updateOrAddChat(peerToChatId(peer));
      }
    }

    return () => Promise.all(promises);
  }

  /**
   * Answer a callback query. Bot-only.
   *
   * @method
   * @param id ID of the callback query to answer.
   */
  async answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams) {
    await this.#assertBot("answerCallbackQuery");
    await this.api.messages.setBotCallbackAnswer({
      query_id: BigInt(id),
      cache_time: params?.cacheTime ?? 0,
      message: params?.text,
      alert: params?.alert ? true : undefined,
    });
  }

  #usernameResolver: UsernameResolver = async (v) => {
    const inputPeer = await this.getInputPeer(v).then((v) => v[as](types.InputPeerUser));
    return new types.InputUser(inputPeer);
  };

  async #constructReplyMarkup(params?: Pick<SendMessageParams, "replyMarkup">) {
    if (params?.replyMarkup) {
      await this.#assertBot("replyMarkup");
      return replyMarkupToTlObject(params.replyMarkup, this.#usernameResolver.bind(this));
    }
  }

  /**
   * Send a poll.
   *
   * @method
   * @param chatId The chat to send the poll to.
   * @param question The poll's question.
   * @param options The poll's options.
   * @returns The sent poll.
   */
  async sendPoll(chatId: ID, question: string, options: [string, string, ...string[]], params?: SendPollParams): Promise<MessagePoll> {
    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const explanation = params?.explanation;
    const parseResult = explanation !== undefined ? this.#parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;

    const solution = parseResult === undefined ? undefined : parseResult[0];
    const solutionEntities = parseResult === undefined ? undefined : parseResult[1];

    const answers = options.map((v, i) => new types.PollAnswer({ option: new Uint8Array([i]), text: v }));

    const poll = new types.Poll({
      id: getRandomId(),
      answers,
      question,
      closed: params?.isClosed ? true : undefined,
      close_date: params?.closeDate ? toUnixTimestamp(params.closeDate) : undefined,
      close_period: params?.openPeriod ? params.openPeriod : undefined,
      multiple_choice: params?.allowMultipleAnswers ? true : undefined,
      public_voters: params?.isAnonymous === false ? true : undefined,
      quiz: params?.type == "quiz" ? true : undefined,
    });

    const media = new types.InputMediaPoll({
      poll,
      correct_answers: params?.correctOptionIndex ? [new Uint8Array([params.correctOptionIndex])] : undefined,
      solution,
      solution_entities: solutionEntities,
    });

    const result = await this.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_markup: replyMarkup,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      media,
      message: "",
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message, "poll");
  }

  /**
   * Send a chat action.
   *
   * @method
   * @param chatId The chat to send the chat action to.
   * @param action The chat action.
   * @param messageThreadId The thread to send the chat action to.
   */
  async sendChatAction(chatId: ID, action: ChatAction, params?: { messageThreadId?: number }) {
    let action_: enums.SendMessageAction;
    switch (action) {
      case "type":
        action_ = new types.SendMessageTypingAction();
        break;
      case "uploadPhoto":
        action_ = new types.SendMessageUploadPhotoAction({ progress: 0 });
        break;
      case "recordVideo":
        action_ = new types.SendMessageRecordVideoAction();
        break;
      case "uploadVideo":
        action_ = new types.SendMessageRecordVideoAction();
        break;
      case "recordVoice":
        action_ = new types.SendMessageRecordAudioAction();
        break;
      case "uploadAudio":
        action_ = new types.SendMessageUploadAudioAction({ progress: 0 });
        break;
      case "uploadDocument":
        action_ = new types.SendMessageUploadDocumentAction({ progress: 0 });
        break;
      case "chooseSticker":
        action_ = new types.SendMessageChooseStickerAction();
        break;
      case "findLocation":
        action_ = new types.SendMessageGeoLocationAction();
        break;
      case "recordVideoNote":
        action_ = new types.SendMessageRecordRoundAction();
        break;
      case "uploadVideoNote":
        action_ = new types.SendMessageUploadRoundAction({ progress: 0 });
        break;
      default:
        throw new Error("Invalid chat action: " + action);
    }
    await this.api.messages.setTyping({ peer: await this.getInputPeer(chatId), action: action_, top_msg_id: params?.messageThreadId });
  }

  /**
   * Upload a file.
   *
   * @method
   * @param contents The contents of the file.
   */
  async upload(contents: Uint8Array, params?: UploadParams) {
    const isBig = contents.length > 1048576; // 10 MB

    const chunkSize = params?.chunkSize ?? 512 * 1024;
    if (mod(chunkSize, 1024) != 0) {
      throw new Error("chunkSize must be divisible by 1024");
    }

    const signal = params?.signal;

    dUpload("uploading " + (isBig ? "big " : "") + "file of size " + contents.length + " with chunk size of " + chunkSize);

    const fileId = getRandomId();
    const name = params?.fileName ?? fileId.toString();

    const client = new Client(this.storage, this.apiId, this.apiHash, {
      transportProvider: this.transportProvider,
      appVersion: this.appVersion,
      deviceModel: this.deviceModel,
      langCode: this.langCode,
      langPack: this.langPack,
      systemLangCode: this.systemLangCode,
      systemVersion: this.systemVersion,
      cdn: true,
      initialDc: this.initialDc,
      autoStart: false,
    });
    signal?.addEventListener("abort", () => drop(client.disconnect()));
    client.#state.salt = this.#state.salt;
    await client.connect();
    let part = 0;
    const partCount = Math.ceil(contents.length / chunkSize);

    try {
      main: for (; part < partCount; part++) {
        chunk: while (true) {
          try {
            const start = part * chunkSize;
            const end = start + chunkSize;
            const bytes = contents.slice(start, end);
            if (bytes.length == 0) {
              continue main;
            }
            if (isBig) {
              await client.invoke(new functions.upload.saveBigFilePart({ file_id: fileId, file_part: part, bytes, file_total_parts: partCount }));
            } else {
              await client.invoke(new functions.upload.saveFilePart({ file_id: fileId, bytes, file_part: part }));
            }
            dUpload((part + 1) + " out of " + partCount + " chunks have been uploaded so far");
            break chunk;
          } catch (err) {
            if (signal?.aborted) {
              break main;
            }
            if (err instanceof FloodWait) {
              dUpload("got a flood wait of " + err.seconds + " seconds");
              await new Promise((r) => setTimeout(r, err.seconds * 1000));
            } else if (err instanceof ConnectionError) {
              while (true) {
                try {
                  await new Promise((r) => setTimeout(r, 3000));
                  await client.connect();
                } catch {
                  if (signal?.aborted) {
                    break main;
                  }
                }
              }
            } else {
              throw err;
            }
          }
        }
      }
    } finally {
      drop(client.disconnect());
    }

    dUpload("uploaded all " + partCount + " chunk(s)");

    if (isBig) {
      return new types.InputFileBig({ id: fileId, parts: contents.length / chunkSize, name });
    } else {
      return new types.InputFile({ id: fileId, name, parts: part, md5_checksum: "" });
    }
  }

  /**
   * Set the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method
   * @param commands The commands to set.
   */
  async setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams) {
    await this.api.bots.setBotCommands({
      commands: commands.map((v) => new types.BotCommand(v)),
      lang_code: params?.languageCode ?? "",
      scope: await botCommandScopeToTlObject(params?.scope ?? { type: "default" }, this.getInputPeer.bind(this)),
    });
  }

  /**
   * Get the bot's commands in the given scope and/or language. Bot-only.
   */
  async getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]> {
    const commands_ = await this.api.bots.getBotCommands({
      lang_code: params?.languageCode ?? "",
      scope: await botCommandScopeToTlObject(params?.scope ?? { type: "default" }, this.getInputPeer.bind(this)),
    });
    return commands_.map((v) => ({ command: v.command, description: v.description }));
  }

  /**
   * Answer an inline query. Bot-only.
   *
   * @method
   * @param id The ID of the inline query to answer.
   * @param results The results to answer with.
   */
  async answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams) {
    await this.api.messages.setInlineBotResults({
      query_id: BigInt(id),
      results: await Promise.all(results.map((v) => inlineQueryResultToTlObject(v, this.#parseText.bind(this), this.#usernameResolver.bind(this)))),
      cache_time: params?.cacheTime ?? 300,
      private: params?.isPersonal ? true : undefined,
      switch_webview: params?.button && params.button.webApp ? new types.InlineBotWebView({ text: params.button.text, url: params.button.webApp.url }) : undefined,
      switch_pm: params?.button && params.button.startParameter ? new types.InlineBotSwitchPM({ text: params.button.text, start_param: params.button.startParameter }) : undefined,
      gallery: params?.isGallery ? true : undefined,
      next_offset: params?.nextOffset,
    });
  }

  //#region Composer
  #handle: MiddlewareFn<C> = skip;

  use(...middleware: Middleware<UpdateIntersection<C>>[]) {
    const composer = new Composer(...middleware);
    this.#handle = concat(this.#handle, flatten(composer));
    return composer;
  }

  branch(predicate: (ctx: UpdateIntersection<C>) => MaybePromise<boolean>, trueHandler_: Middleware<UpdateIntersection<C>>, falseHandler_: Middleware<UpdateIntersection<C>>) {
    const trueHandler = flatten(trueHandler_);
    const falseHandler = flatten(falseHandler_);
    return this.use(async (upd, next) => {
      if (await predicate(upd)) {
        await trueHandler(upd, next);
      } else {
        await falseHandler(upd, next);
      }
    });
  }

  filter<D extends C>(
    predicate: (ctx: UpdateIntersection<C>) => ctx is D,
    ...middleware: Middleware<D>[]
  ): Composer<D>;
  filter(
    predicate: (ctx: UpdateIntersection<C>) => MaybePromise<boolean>,
    ...middleware: Middleware<UpdateIntersection<C>>[]
  ): Composer<C>;
  filter(
    predicate: (ctx: UpdateIntersection<C>) => MaybePromise<boolean>,
    ...middleware: Middleware<UpdateIntersection<C>>[]
  ) {
    const composer = new Composer(...middleware);
    this.branch(predicate, composer, skip);
    return composer;
  }

  on<Q extends FilterQuery>(
    filter: Q,
    ...middleawre: Middleware<WithFilter<C, Q>>[]
  ) {
    return this.filter((ctx): ctx is UpdateIntersection<WithFilter<C, Q>> => {
      return match(filter, ctx);
    }, ...middleawre);
  }

  command(
    commands: string | RegExp | (string | RegExp)[] | {
      names: string | RegExp | (string | RegExp)[];
      prefixes: string | string[];
    },
    ...middleawre: Middleware<WithFilter<C, "message:text">>[]
  ) {
    const commands__ = typeof commands === "object" && "names" in commands ? commands.names : commands;
    const commands_ = Array.isArray(commands__) ? commands__ : [commands__];
    const prefixes_ = typeof commands === "object" && "prefixes" in commands ? commands.prefixes : (this.#prefixes ?? []);
    const prefixes = Array.isArray(prefixes_) ? prefixes_ : [prefixes_];
    for (const left of prefixes) {
      for (const right of prefixes) {
        if (left == right) {
          continue;
        }
        if (left.startsWith(right) || right.startsWith(left)) {
          throw new Error("Intersecting prefixes");
        }
      }
    }
    return this.on("message:text").filter((ctx) => {
      const prefixes_ = prefixes.length == 0 ? [!ctx.me?.isBot ? "\\" : "/"] : prefixes;
      if (prefixes_.length == 0) {
        return false;
      }
      const cmd = ctx.message.text.split(/\s/, 1)[0];
      const prefix = prefixes_.find((v) => cmd.startsWith(v));
      if (prefix === undefined) {
        return false;
      }
      if (cmd.includes("@")) {
        const username = cmd.split("@", 2)[1];
        if (username.toLowerCase() !== ctx.me!.username?.toLowerCase()) {
          return false;
        }
      }
      const command_ = cmd.split("@", 1)[0].split(prefix, 2)[1].toLowerCase();
      for (const command of commands_) {
        if (typeof command === "string" && (command.toLowerCase() == command_)) {
          return true;
        } else if (command instanceof RegExp && command.test(command_)) {
          return true;
        }
      }
      return false;
    }, ...middleawre);
  }
  //#endregion

  async #setMyInfo(info: Omit<ConstructorParameters<typeof functions.bots.setBotInfo>[0], "bot">) {
    await this.api.bots.setBotInfo({ bot: new types.InputUserSelf(), ...info });
  }

  /**
   * Set the bot's description in the given language. Bot-only.
   *
   * @method
   */
  async setMyDescription(params?: { description?: string; languageCode?: string }) {
    await this.#assertBot("setMyDescription");
    await this.#setMyInfo({ description: params?.description, lang_code: params?.languageCode ?? "" });
  }

  /**
   * Set the bot's name in the given language. Bot-only.
   *
   * @method
   */
  async setMyName(params?: { name?: string; languageCode?: string }) {
    await this.#assertBot("setMyName");
    await this.#setMyInfo({ name: params?.name, lang_code: params?.languageCode ?? "" });
  }

  /**
   * Set the bot's short description in the given language. Bot-only.
   *
   * @method
   */
  async setMyShortDescription(params?: { shortDescription?: string; languageCode?: string }) {
    await this.#assertBot("setMyShortDescription");
    await this.#setMyInfo({ about: params?.shortDescription, lang_code: params?.languageCode ?? "" });
  }

  #getMyInfo(languageCode?: string | undefined) {
    return this.api.bots.getBotInfo({ bot: new types.InputUserSelf(), lang_code: languageCode ?? "" });
  }

  /**
   * Get the bot's description in the given language. Bot-only.
   *
   * @method
   */
  async getMyDescription(params?: { languageCode?: string }): Promise<string> {
    await this.#assertBot("getMyDescription");
    return await this.#getMyInfo(params?.languageCode).then((v) => v.description);
  }

  /**
   * Set the bot's name in the given language. Bot-only.
   *
   * @method
   */
  async getMyName(params?: { languageCode?: string }): Promise<string> {
    await this.#assertBot("getMyName");
    return await this.#getMyInfo(params?.languageCode).then((v) => v.description);
  }

  /**
   * Get the bot's short description in the given language. Bot-only.
   *
   * @method
   */
  async getMyShortDescription(params?: { languageCode?: string }): Promise<string> {
    await this.#assertBot("getMyShortDescription");
    return await this.#getMyInfo(params?.languageCode).then((v) => v.about);
  }

  /**
   * Delete multiple messages.
   *
   * @method
   * @param chatId The identifier of the chat that contains the messages.
   * @param messageIds The identifier of the messages to delete.
   */
  async deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams): Promise<void> {
    const peer = await this.getInputPeer(chatId);
    if (peer instanceof types.InputPeerChannel) {
      await this.api.channels.deleteMessages({ channel: new types.InputChannel(peer), id: messageIds });
    } else {
      await this.api.messages.deleteMessages({ id: messageIds, revoke: params?.onlyForMe ? undefined : true });
    }
  }

  /**
   * Delete a single message.
   *
   * @method
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The identifier of the message to delete.
   */
  async deleteMessage(chatId: ID, messageId: number, params?: DeleteMessageParams): Promise<void> {
    await this.deleteMessages(chatId, [messageId], params);
  }

  #resolveFileId(maybeFileId: string, expectedFileType: FileType) {
    let fileId: FileID | null = null;
    try {
      fileId = FileID.decode(maybeFileId);
    } catch (err) {
      d("fileId: %o", err);
    }
    if (fileId != null) {
      if (fileId.fileType != expectedFileType) {
        UNREACHABLE();
      }
      if (fileId.params.mediaId == undefined || fileId.params.accessHash == undefined || fileId.params.fileReference == undefined) {
        UNREACHABLE();
      }
      return {
        id: fileId.params.mediaId,
        access_hash: fileId.params.accessHash,
        file_reference: fileId.params.fileReference,
      };
    }
    return null;
  }
  async #sendMedia(chatId: ID, media: enums.InputMedia, params: SendPhotoParams | undefined) {
    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? this.#parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;

    const caption = parseResult === undefined ? undefined : parseResult[0];
    const captionEntities = parseResult === undefined ? undefined : parseResult[1];

    const result = await this.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_markup: replyMarkup,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      media,
      message: caption ?? "",
      entities: captionEntities,
    });

    return await this.#updatesToMessages(chatId, result).then((v) => v[0]);
  }

  /**
   * Send a photo.
   *
   * @method
   * @param chatId The chat to send the photo to.
   * @param photo The photo to send.
   */
  async sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams): Promise<MessagePhoto> {
    let media: enums.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;

    if (typeof photo === "string") {
      const fileId = this.#resolveFileId(photo, FileType.Photo);
      if (fileId != null) {
        media = new types.InputMediaPhoto({
          id: new types.InputPhoto(fileId),
          spoiler,
        });
      }
    }

    if (media == null) {
      if (typeof photo === "string" && isHttpUrl(photo)) {
        media = new types.InputMediaPhotoExternal({ url: photo, spoiler });
      } else {
        const [contents, fileName] = await getFileContents(photo);
        const file = await this.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
        media = new types.InputMediaUploadedPhoto({ file, spoiler });
      }
    }

    const message = await this.#sendMedia(chatId, media, params);
    return assertMessageType(message, "photo");
  }

  async #sendDocumentInner(chatId: ID, document: FileSource, params: SendDocumentParams | undefined, fileType: FileType, otherAttribs: enums.DocumentAttribute[], urlSupported = false) {
    let media: enums.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;

    if (typeof document === "string") {
      const fileId = this.#resolveFileId(document, fileType);
      if (fileId != null) {
        media = new types.InputMediaDocument({
          id: new types.InputDocument(fileId),
          spoiler,
        });
      }
    }

    if (media == null) {
      if (typeof document === "string" && isHttpUrl(document)) {
        if (!urlSupported) {
          throw new Error("URL not supported");
        }
        media = new types.InputMediaDocumentExternal({ url: document, spoiler });
      } else {
        const [contents, fileName_] = await getFileContents(document);
        const fileName = params?.fileName ?? fileName_;
        const mimeType = params?.mimeType ?? contentType(fileName.split(".").slice(-1)[0]) ?? "application/octet-stream";
        const file = await this.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
        let thumb: enums.InputFile | undefined = undefined;
        if (params?.thumbnail) {
          const [thumbContents, fileName__] = await getFileContents(params.thumbnail);
          thumb = await this.upload(thumbContents, { fileName: fileName__, chunkSize: params?.chunkSize, signal: params?.signal });
        }
        media = new types.InputMediaUploadedDocument({
          file,
          thumb,
          spoiler,
          attributes: [new types.DocumentAttributeFilename({ file_name: fileName }), ...otherAttribs],
          mime_type: mimeType,
        });
      }
    }

    const message = await this.#sendMedia(chatId, media, params);
    return message;
  }

  /**
   * Send a document.
   *
   * @method
   * @param chatId The chat to send the document to.
   * @param document The document to send.
   */
  async sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams): Promise<MessageDocument> {
    const message = await this.#sendDocumentInner(chatId, document, params, FileType.Document, []);
    return assertMessageType(message, "document");
  }

  /**
   * Send a video.
   *
   * @method
   * @param chatId The chat to send the video to.
   * @param video The video to send.
   */
  async sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams): Promise<MessageVideo> {
    const message = await this.#sendDocumentInner(chatId, video, params, FileType.Video, [
      new types.DocumentAttributeVideo({
        supports_streaming: params?.supportsStreaming ? true : undefined,
        w: params?.width ?? 0,
        h: params?.height ?? 0,
        duration: params?.duration ?? 0,
      }),
    ]);
    return assertMessageType(message, "video");
  }

  /**
   * Send an animation.
   *
   * @method
   * @param chatId The chat to send the animation to.
   * @param animation The animation to send.
   */
  async sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams): Promise<MessageAnimation> {
    const message = await this.#sendDocumentInner(chatId, animation, params, FileType.Animation, [
      new types.DocumentAttributeAnimated(),
      new types.DocumentAttributeVideo({
        supports_streaming: true,
        w: params?.width ?? 0,
        h: params?.height ?? 0,
        duration: params?.duration ?? 0,
      }),
    ]);
    return assertMessageType(message, "animation");
  }

  /**
   * Send a voice message.
   *
   * @method
   * @param chatId The chat to send the voice message to.
   * @param voice The voice to send.
   */
  async sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams): Promise<MessageVoice> {
    const message = await this.#sendDocumentInner(chatId, voice, params, FileType.Voice, [
      new types.DocumentAttributeAudio({
        voice: true,
        duration: params?.duration ?? 0,
      }),
    ]);
    return assertMessageType(message, "voice");
  }

  /**
   * Send an audio file.
   *
   * @method
   * @param chatId The chat to send the audio file to.
   * @param audio The audio to send.
   */
  async sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams): Promise<MessageAudio> {
    const message = await this.#sendDocumentInner(chatId, audio, params, FileType.Audio, [
      new types.DocumentAttributeAudio({
        duration: params?.duration ?? 0,
        performer: params?.performer,
        title: params?.title,
      }),
    ]);
    return assertMessageType(message, "audio");
  }

  /**
   * Send a video note.
   *
   * @method
   * @param chatId The chat to send the video note to.
   * @param videoNote The video note to send.
   */
  async sendVideoNote(chatId: ID, audio: FileSource, params?: SendVideoNoteParams): Promise<MessageVideoNote> {
    const message = await this.#sendDocumentInner(chatId, audio, params, FileType.VideoNote, [
      new types.DocumentAttributeVideo({
        round_message: true,
        w: params?.length ?? 0,
        h: params?.length ?? 0,
        duration: params?.duration ?? 0,
      }),
    ], false);
    return assertMessageType(message, "videoNote");
  }

  /**
   * Send a location.
   *
   * @method
   * @param chatId The chat to send the location to.
   * @param latitude The location's latitude.
   * @param longitude The location's longitude.
   */
  async sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams): Promise<MessageLocation> {
    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      reply_markup: replyMarkup,
      media: params?.livePeriod !== undefined
        ? new types.InputMediaGeoLive({
          geo_point: new types.InputGeoPoint({
            lat: latitude,
            long: longitude,
            accuracy_radius: params?.horizontalAccuracy,
          }),
          heading: params?.heading,
          period: params.livePeriod,
          proximity_notification_radius: params?.proximityAlertRadius,
        })
        : new types.InputMediaGeoPoint({
          geo_point: new types.InputGeoPoint({
            lat: latitude,
            long: longitude,
            accuracy_radius: params?.horizontalAccuracy,
          }),
        }),
      message: "",
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message, "location");
  }

  /**
   * Send a contact.
   *
   * @method
   * @param chatId The chat to send the contact to.
   * @param firstName The contact's first name.
   * @param number The contact's phone number.
   */
  async sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams): Promise<MessageContact> {
    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      reply_markup: replyMarkup,
      media: new types.InputMediaContact({
        phone_number: number,
        first_name: firstName,
        last_name: params?.lastName ?? "",
        vcard: params?.vcard ?? "",
      }),
      message: "",
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message, "contact");
  }

  /**
   * Send a dice.
   *
   * @method
   * @param chatId The chat to send the dice to.
   */
  async sendDice(chatId: ID, params?: SendDiceParams): Promise<MessageDice> {
    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      reply_markup: replyMarkup,
      media: new types.InputMediaDice({
        emoticon: params?.emoji ?? "🎲",
      }),
      message: "",
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message, "dice");
  }

  /**
   * Send a venue.
   *
   * @method
   * @param chatId The chat to send the venue to.
   * @param latitude The latitude of the venue.
   * @param longitude The longitude of the venue.
   * @param title The title of the venue.
   * @param address The written address of the venue.
   */
  async sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams): Promise<MessageVenue> {
    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      reply_markup: replyMarkup,
      media: new types.InputMediaVenue({
        geo_point: new types.InputGeoPoint({
          lat: latitude,
          long: longitude,
        }),
        title,
        address,
        venue_id: params?.foursquareId ?? "",
        venue_type: params?.foursquareType ?? "",
        provider: "foursquare",
      }),
      message: "",
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message, "venue");
  }

  /**
   * Get network statistics. This might not always be available.
   *
   * @method
   */
  async getNetworkStatistics(): Promise<NetworkStatistics> {
    const [messagesRead, messagesWrite, cdnRead, cdnWrite] = await Promise.all([
      this.storage.get<number>(["netstat_messages_read"]),
      this.storage.get<number>(["netstat_messages_write"]),
      this.storage.get<number>(["netstat_cdn_read"]),
      this.storage.get<number>(["netstat_cdn_write"]),
    ]);
    const messages = {
      sent: Number(messagesWrite || 0),
      received: Number(messagesRead || 0),
    };
    const cdn = {
      sent: Number(cdnWrite || 0),
      received: Number(cdnRead || 0),
    };
    return { messages, cdn };
  }

  async #sendChatUpdate(chatId: number, added: boolean) {
    try {
      await this.#assertUser("");
    } catch {
      return;
    }
    const [chat] = this.#getChatAnywhere(chatId);
    const update = chat === undefined ? { deletedChat: { chatId } } : added ? { newChat: chat } : { editedChat: chat };
    this.#updateManager.getHandleUpdateQueue(UpdateManager.MAIN_BOX_ID).add(async () => {
      await this.#handle(await this.#constructContext(update), resolve);
    });
  }

  async #reassignChatLastMessage(chatId: number, add = false, sendUpdate = true) {
    try {
      await this.#assertUser("");
    } catch {
      return () => Promise.resolve();
    }
    const [chat, listId] = this.#getChatAnywhere(chatId);
    if (!chat && !add) {
      return () => Promise.resolve();
    }

    const message_ = await this.storage.getLastMessage(chatId);
    if (message_ != null) {
      const message = await constructMessage(message_, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this));
      if (chat) {
        chat.order = getChatOrder(message, chat.pinned);
        chat.lastMessage = message;
        await this.storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
      } else {
        const pinnedChats = await this.#getPinnedChats(listId);
        const chat = await constructChat3(chatId, pinnedChats.indexOf(chatId), message, this[getEntity].bind(this));
        if (chat == null) {
          UNREACHABLE();
        }
        this.#chats.set(chatId, chat);
        await this.storage.setChat(listId, chatId, chat.pinned, chat.lastMessage?.id ?? 0, chat.lastMessage?.date ?? new Date(0));
      }
      if (sendUpdate) {
        return () => this.#sendChatUpdate(chatId, !chat);
      }
      return () => Promise.resolve();
    }

    const message = await this.getHistory(chatId, { limit: 1 }).then((v) => v[0]);
    if (message !== undefined) {
      if (chat) {
        chat.order = getChatOrder(message, chat.pinned);
        chat.lastMessage = message;
        await this.storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
      } else {
        const pinnedChats = await this.#getPinnedChats(listId);
        const chat = await constructChat3(chatId, pinnedChats.indexOf(chatId), message, this[getEntity].bind(this));
        if (chat == null) {
          UNREACHABLE();
        }
        this.#chats.set(chatId, chat);
      }
      if (sendUpdate) {
        return () => this.#sendChatUpdate(chatId, !chat);
      }
      return () => Promise.resolve();
    }

    if (chat) {
      chat.order = getChatOrder(undefined, chat.pinned);
      chat.lastMessage = undefined;
      if (sendUpdate) {
        return () => this.#sendChatUpdate(chatId, false);
      }
    }

    return () => Promise.resolve();
  }
  #chats = new Map<number, Chat>();
  #archivedChats = new Map<number, Chat>();
  #chatsLoadedFromStorage = false;
  #tryGetChatId(username: string) {
    username = username.toLowerCase();
    for (const chat of this.#chats.values()) {
      if ("username" in chat) {
        if (chat.username === username || chat.also?.some((v) => v.toLowerCase() === username)) {
          return chat.id;
        }
      }
    }
    for (const chat of this.#archivedChats.values()) {
      if ("username" in chat) {
        if (chat.username === username || chat.also?.some((v) => v.toLowerCase() === username)) {
          return chat.id;
        }
      }
    }
    return null;
  }
  #getChatAnywhere(chatId: number): [Chat | undefined, number] {
    let chat = this.#chats.get(chatId);
    if (chat) {
      return [chat, 0];
    }
    chat = this.#archivedChats.get(chatId);
    if (chat) {
      return [chat, 1];
    }
    return [undefined, -1];
  }
  #getChatList(listId: number) {
    switch (listId) {
      case 0:
        return this.#chats;
      case 1:
        return this.#archivedChats;
      default:
        throw new Error("Invalid chat list: " + listId);
    }
  }

  async #loadChatsFromStorage() {
    const chats = await this.storage.getChats(0);
    const archivedChats = await this.storage.getChats(1);
    for (const { chatId, pinned, topMessageId } of chats) {
      const chat = await constructChat4(chatId, pinned, topMessageId, this[getEntity].bind(this), this.getMessage.bind(this));
      if (chat == null) {
        continue;
      }
      this.#chats.set(chat.id, chat);
    }
    for (const { chatId, pinned, topMessageId } of archivedChats) {
      const chat = await constructChat4(chatId, pinned, topMessageId, this[getEntity].bind(this), this.getMessage.bind(this));
      if (chat == null) {
        continue;
      }
      this.#archivedChats.set(chat.id, chat);
    }
    this.#chatsLoadedFromStorage = true;
  }
  #getLoadedChats(listId: number) {
    const chats_ = this.#getChatList(listId);

    const chats = new Array<Chat>();
    for (const chat of chats_.values()) {
      chats.push(chat);
    }
    return chats
      .sort((a, b) => b.id - a.id)
      .sort((a, b) => b.order.localeCompare(a.order));
  }
  #pinnedChats = new Array<number>();
  #pinnedArchiveChats = new Array<number>();
  #storageHadPinnedChats = false;
  #pinnedChatsLoaded = false;
  async #loadPinnedChats() {
    const [pinnedChats, pinnedArchiveChats] = await Promise.all([this.storage.getPinnedChats(0), this.storage.getPinnedChats(1)]);
    if (pinnedChats != null && pinnedArchiveChats != null) {
      this.#pinnedChats = pinnedChats;
      this.#pinnedArchiveChats = pinnedArchiveChats;
      this.#storageHadPinnedChats = true;
    }
    this.#pinnedChatsLoaded = true;
  }
  async #fetchPinnedChats(listId: number | null = null) {
    if (listId == null || listId == 0) {
      const dialogs = await this.api.messages.getPinnedDialogs({ folder_id: 0 });
      const pinnedChats = new Array<number>();
      for (const dialog of dialogs.dialogs) {
        pinnedChats.push(peerToChatId(dialog.peer));
      }
      this.#pinnedChats = pinnedChats;
      await this.storage.setPinnedChats(0, this.#pinnedChats);
    }
    if (listId == null || listId == 1) {
      const dialogs = await this.api.messages.getPinnedDialogs({ folder_id: 1 });
      const pinnedArchiveChats = new Array<number>();
      for (const dialog of dialogs.dialogs) {
        pinnedArchiveChats.push(peerToChatId(dialog.peer));
      }
      this.#pinnedArchiveChats = pinnedArchiveChats;
      await this.storage.setPinnedChats(1, this.#pinnedArchiveChats);
    }
    if (listId != null && listId != 0 && listId != 1) {
      UNREACHABLE();
    }
  }
  async #getPinnedChats(listId: number) {
    if (!this.#pinnedChatsLoaded) {
      await this.#loadPinnedChats();
    }
    if (!this.#storageHadPinnedChats) {
      await this.#fetchPinnedChats();
    }
    switch (listId) {
      case 0:
        return this.#pinnedChats;
      case 1:
        return this.#pinnedArchiveChats;
      default:
        UNREACHABLE();
    }
  }
  async #updateOrAddChat(chatId: number) {
    const [chat, listId] = this.#getChatAnywhere(chatId);
    if (chat !== undefined) {
      const newChat = await constructChat3(chatId, chat.pinned, chat.lastMessage, this[getEntity].bind(this));
      if (newChat != null) {
        this.#getChatList(listId).set(chatId, newChat);
        await this.#sendChatUpdate(chatId, false);
      }
    } else {
      const chat = await constructChat4(chatId, -1, -1, this[getEntity].bind(this), this.getMessage.bind(this));
      if (chat != null) {
        this.#getChatList(0).set(chatId, chat);
        await this.#reassignChatLastMessage(chatId, false, false);
        await this.#sendChatUpdate(chatId, true);
      }
    }
  }
  async #removeChat(chatId: number) {
    const [chat, listId] = this.#getChatAnywhere(chatId);
    if (chat !== undefined) {
      this.#getChatList(listId).delete(chatId);
      await this.#sendChatUpdate(chatId, false);
    }
  }
  async #moveChats(update: types.UpdateFolderPeers) {
    for (const { peer, folder_id: listId } of update.folder_peers) {
      const chatId = peerToChatId(peer);
      const [chat, currentListId] = this.#getChatAnywhere(chatId);
      if (chat !== undefined && listId != currentListId) {
        this.#getChatList(currentListId).delete(chatId);
        this.#getChatList(listId).set(chatId, chat);
        await this.#sendChatUpdate(chatId, true);
      }
    }
  }
  async #updatePinnedChats(update: types.UpdatePinnedDialogs) {
    const listId = update.folder_id ?? 0;
    await this.#fetchPinnedChats(update.folder_id);
    const chats = this.#getChatList(listId);
    const pinnedChats = await this.#getPinnedChats(listId);
    for (const [i, chatId] of pinnedChats.entries()) {
      const chat = chats.get(chatId);
      if (chat !== undefined) {
        chat.order = getChatOrder(chat.lastMessage, i);
        chat.pinned = i;
        await this.#sendChatUpdate(chatId, false);
      }
    }
    for (const chat of chats.values()) {
      if (chat.pinned != -1 && pinnedChats.indexOf(chat.id) == -1) {
        chat.order = getChatOrder(chat.lastMessage, -1);
        chat.pinned = -1;
        await this.#sendChatUpdate(chat.id, false);
      }
    }
    await this.storage.setPinnedChats(listId, await this.#getPinnedChats(listId));
  }
  async #fetchChats(listId: number, limit: number, after?: Chat) {
    const dialogs = await this.api.messages.getDialogs({
      limit,
      offset_id: after?.lastMessage?.id ?? 0,
      offset_date: after?.lastMessage?.date ? toUnixTimestamp(after.lastMessage.date) : 0,
      offset_peer: after ? await this.getInputPeer(after.id) : new types.InputPeerEmpty(),
      hash: 0n,
      folder_id: listId,
    });
    const pinnedChats = await this.#getPinnedChats(listId);
    if (!(dialogs instanceof types.messages.Dialogs) && !(dialogs instanceof types.messages.DialogsSlice)) {
      UNREACHABLE();
    }
    if (dialogs.dialogs.length < limit) {
      await this.storage.setHasAllChats(listId, true);
    }
    const chats = this.#getChatList(listId);
    for (const dialog of dialogs.dialogs) {
      const chat = await constructChat(dialog, dialogs, pinnedChats, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this));
      chats.set(chat.id, chat);
      await this.storage.setChat(listId, chat.id, chat.pinned, chat.lastMessage?.id ?? 0, chat.lastMessage?.date ?? new Date(0));
    }
  }
  /**
   * Get chats from a chat list. User-only.
   *
   * @method
   */
  async getChats(params?: GetChatsParams): Promise<Chat[]> {
    await this.#assertUser("getChats");
    if (!this.#chatsLoadedFromStorage) {
      await this.#loadChatsFromStorage();
    }
    if (params?.after?.id && !this.#chats.has(params.after.id)) {
      throw new Error("Invalid after");
    }
    let limit = params?.limit ?? 100;
    if (limit <= 0 || limit > 100) {
      limit = 100;
    }
    const listId = getChatListId(params?.from ?? "main");
    let chats = this.#getLoadedChats(listId);
    if (params?.after) {
      chats = chats
        .filter((v) => v.order < params.after!.order);
    }
    if (chats.length < limit) {
      d("have only %d chats but %d more is needed", chats.length, limit - chats.length);
      if (!await this.storage.hasAllChats(listId)) {
        await this.#fetchChats(listId, limit, params?.after);
        return await this.getChats(params);
      }
    }
    chats = chats.slice(0, limit);
    return chats;
  }

  /**
   * Get a chat.
   *
   * @method
   */
  async getChat(chatId: ID): Promise<Chat> {
    if (await this.storage.getAccountType() == "user") {
      let maybeChatId: number | null = null;
      if (typeof chatId === "number") {
        maybeChatId = chatId;
      } else if (typeof chatId === "string") {
        maybeChatId = this.#tryGetChatId(getUsername(chatId));
      } else {
        UNREACHABLE();
      }
      if (maybeChatId != null) {
        const [chat] = this.#getChatAnywhere(maybeChatId);
        if (chat !== undefined) {
          return chat;
        }
      }
    }
    let inputPeer: enums.InputPeer | null = null;
    if (typeof chatId === "number") {
      const chat = await constructChat3(chatId, -1, undefined, this[getEntity].bind(this));
      if (chat != null) {
        return chat;
      }
    } else {
      inputPeer = await this.getInputPeer(chatId);
      const chatId_ = peerToChatId(inputPeer);
      const chat = await constructChat3(chatId_, -1, undefined, this[getEntity].bind(this));
      if (chat != null) {
        return chat;
      }
    }
    if (inputPeer == null) {
      inputPeer = await this.getInputPeer(chatId);
    }
    if (inputPeer instanceof types.InputPeerChat) {
      const chats = await this.api.messages.getChats({ id: [inputPeer.chat_id] }).then((v) => v[as](types.messages.Chats));
      const chat = chats.chats[0];
      if (chat instanceof types.ChatEmpty) {
        UNREACHABLE();
      }
      return constructChat2(chat, -1, undefined);
    } else if (inputPeer instanceof types.InputPeerChannel) {
      const channels = await this.api.channels.getChannels({ id: [new types.InputChannel(inputPeer)] });
      const channel = channels.chats[0];
      if (channel instanceof types.ChatEmpty) {
        UNREACHABLE();
      }
      return constructChat2(channel, -1, undefined);
    } else if (inputPeer instanceof types.InputPeerUser) {
      const users = await this.api.users.getUsers({ id: [new types.InputUser(inputPeer)] });
      const user = users[0];
      if (user instanceof types.UserEmpty) {
        UNREACHABLE();
      }
      return constructChat2(user, -1, undefined);
    } else {
      UNREACHABLE();
    }
  }

  /**
   * Get chat history. User-only.
   *
   * @method
   * @param chatId The identifier of the chat to get its history.
   */
  async getHistory(chatId: ID, params?: GetHistoryParams): Promise<Message[]> {
    let limit = params?.limit ?? 100;
    if (limit <= 0) {
      limit = 1;
    } else if (limit > 100) {
      limit = 100;
    }
    let offsetId = params?.after?.id ?? 0;
    if (offsetId < 0) {
      offsetId = 0;
    }
    const peer = await this.getInputPeer(chatId);
    const messages = new Array<Message>();
    for (const message_ of await this.storage.getHistory(peerToChatId(peer), offsetId, limit)) {
      const message = await constructMessage(message_, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this), false);
      messages.push(message);
    }
    if (messages.length < limit) {
      d("have only %d messages but need %d more", messages.length, limit - messages.length);
      if (messages.length > 0) {
        offsetId = messages[messages.length - 1].id; // TODO: track id of oldest message and don't send requests for it
      }
      const result = await this.api.messages.getHistory({
        peer: peer,
        offset_id: offsetId,
        offset_date: 0,
        add_offset: 0,
        limit,
        max_id: 0,
        min_id: 0,
        hash: 0n,
      });

      if (!("messages" in result)) {
        UNREACHABLE();
      }
      for (const message_ of result.messages) {
        const message = await constructMessage(message_, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this), false);
        messages.push(message);
      }
    }
    return messages;
  }

  /**
   * Get custom emoji documents for download.
   *
   * @method
   * @param id Identifier of one or more of custom emojis.
   */
  async getCustomEmojiDocuments(id: string | string[]): Promise<Document[]> {
    id = Array.isArray(id) ? id : [id];
    if (!id.length) {
      throw new Error("No custom emoji ID provided");
    }
    const documents = new Array<Document>();
    let shouldFetch = false;
    for (const [i, id_] of id.entries()) {
      const maybeDocument = await this.storage.getCustomEmojiDocument(BigInt(id_));
      if (maybeDocument != null && Date.now() - maybeDocument[1].getTime() <= 30 * 60 * 1_000) {
        const document_ = maybeDocument[0];
        const fileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: document_.id }).encode();
        const fileId = new FileID(null, null, FileType.Document, document_.dc_id, {
          mediaId: document_.id,
          accessHash: document_.access_hash,
          fileReference: document_.file_reference,
        }).encode();
        const document = constructDocument(document_, new types.DocumentAttributeFilename({ file_name: `${id[i] ?? "customEmoji"}.${extension(document_.mime_type)}` }), fileId, fileUniqueId);
        documents.push(document);
      } else {
        shouldFetch = true;
        break;
      }
    }
    if (!shouldFetch) {
      return documents;
    }
    const documents_ = await this.api.messages.getCustomEmojiDocuments({ document_id: id.map(BigInt) }).then((v) => v.map((v) => v[as](types.Document)));
    for (const [i, document_] of documents_.entries()) {
      const fileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: document_.id }).encode();
      const fileId = new FileID(null, null, FileType.Document, document_.dc_id, {
        mediaId: document_.id,
        accessHash: document_.access_hash,
        fileReference: document_.file_reference,
      }).encode();
      const document = constructDocument(document_, new types.DocumentAttributeFilename({ file_name: `${id[i] ?? "customEmoji"}.${extension(document_.mime_type)}` }), fileId, fileUniqueId);
      documents.push(document);
    }
    return documents;
  }

  /**
   * Set a chat's available reactions.
   *
   * @method
   * @param chatId The identifier of the chat.
   * @param availableReactions The new available reactions.
   */
  async setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]): Promise<void> {
    // TODO: sync with storage
    await this.api.messages.setChatAvailableReactions({
      peer: await this.getInputPeer(chatId),
      available_reactions: availableReactions == "none" ? new types.ChatReactionsNone() : availableReactions == "all" ? new types.ChatReactionsAll() : Array.isArray(availableReactions) ? new types.ChatReactionsSome({ reactions: availableReactions.map((v) => v.type == "emoji" ? new types.ReactionEmoji({ emoticon: v.emoji }) : new types.ReactionCustomEmoji({ document_id: BigInt(v.id) })) }) : UNREACHABLE(),
    });
  }

  async #sendReaction(chatId: number, messageId: number, reactions: Reaction[], params?: AddReactionParams) {
    await this.api.messages.sendReaction({
      peer: await this.getInputPeer(chatId),
      msg_id: messageId,
      reaction: reactions.map((v) => reactionToTlObject(v)),
      big: params?.big ? true : undefined,
      add_to_recent: params?.addToRecents ? true : undefined,
    });
  }

  /**
   * Change reactions made to a message.
   *
   * @method
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to add the reaction to.
   * @param reactions The new reactions.
   */
  async setReactions(chatId: number, messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void> {
    await this.#sendReaction(chatId, messageId, reactions, params);
  }

  /**
   * Make a reaction to a message.
   *
   * @method
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to add the reaction to.
   * @param reaction The reaction to add.
   */
  async addReaction(chatId: number, messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void> {
    const chosenReactions = await this.getMessage(chatId, messageId).then((v) => v?.reactions ?? []).then((v) => v.filter((v) => v.chosen));
    for (const r of chosenReactions) {
      if (reactionEqual(r.reaction, reaction)) {
        return;
      }
    }
    const reactions = [reaction, ...chosenReactions.map((v) => v.reaction)];
    await this.setReactions(chatId, messageId, reactions, params);
  }

  /**
   * Undo a reaction made to a message.
   *
   * @method
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message which the reaction was made to.
   * @param reaction The reaction to remove.
   */
  async removeReaction(chatId: number, messageId: number, reaction: Reaction): Promise<void> {
    const chosenReactions = await this.getMessage(chatId, messageId).then((v) => v?.reactions ?? []).then((v) => v.filter((v) => v.chosen));
    for (const r of chosenReactions) {
      if (reactionEqual(r.reaction, reaction)) {
        const reactions = chosenReactions.filter((v) => v != r).map((v) => v.reaction);
        await this.setReactions(chatId, messageId, reactions);
        break;
      }
    }
  }

  /**
   * Set a chat's photo.
   *
   * @method
   * @param chatId The identifier of the chat.
   * @param photo A photo to set as the chat's photo.
   */
  async setChatPhoto(chatId: number, photo: FileSource, params?: SetChatPhotoParams): Promise<void> {
    const peer = await this.getInputPeer(chatId);
    if (!(peer instanceof types.InputPeerChannel) && !(peer instanceof types.InputPeerChat)) {
      UNREACHABLE();
    }

    const [contents, fileName] = await getFileContents(photo);
    const file = await this.upload(contents, { fileName: params?.fileName ?? fileName, chunkSize: params?.chunkSize, signal: params?.signal });
    const photo_ = new types.InputChatUploadedPhoto({ file });

    if (peer instanceof types.InputPeerChannel) {
      await this.api.channels.editPhoto({ channel: new types.InputChannel(peer), photo: photo_ });
    } else if (peer instanceof types.InputPeerChat) {
      await this.api.messages.editChatPhoto({ chat_id: peer.chat_id, photo: photo_ });
    }
  }

  /**
   * Delete a chat's photo.
   *
   * @method
   * @param chatId The identifier of the chat.
   */
  async deleteChatPhoto(chatId: number): Promise<void> {
    const peer = await this.getInputPeer(chatId);
    if (!(peer instanceof types.InputPeerChannel) && !(peer instanceof types.InputPeerChat)) {
      UNREACHABLE();
    }

    if (peer instanceof types.InputPeerChannel) {
      await this.api.channels.editPhoto({ channel: new types.InputChannel(peer), photo: new types.InputChatPhotoEmpty() });
    } else if (peer instanceof types.InputPeerChat) {
      await this.api.messages.editChatPhoto({ chat_id: peer.chat_id, photo: new types.InputChatPhotoEmpty() });
    }
  }

  /**
   * Delete all messages sent by a specific member of a chat.
   *
   * @method
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async deleteChatMemberMessages(chatId: ID, memberId: ID): Promise<void> {
    const channel = await this.getInputPeer(chatId);
    if (!(channel instanceof types.InputPeerChannel)) {
      throw new Error("Invalid chat ID");
    }
    const participant = await this.getInputPeer(memberId);
    await this.api.channels.deleteParticipantHistory({ channel: new types.InputChannel(channel), participant });
  }

  /**
   * Pin a message in a chat.
   *
   * @method
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The message's identifier.
   */
  async pinMessage(chatId: ID, messageId: number, params?: PinMessageParams): Promise<void> {
    await this.api.messages.updatePinnedMessage({
      peer: await this.getInputPeer(chatId),
      id: messageId,
      silent: params?.disableNotification ? true : undefined,
      pm_oneside: params?.bothSides ? undefined : true,
    });
  }

  /**
   * Unpin a pinned message.
   *
   * @method
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The message's identifier.
   */
  async unpinMessage(chatId: ID, messageId: number): Promise<void> {
    await this.api.messages.updatePinnedMessage({
      peer: await this.getInputPeer(chatId),
      id: messageId,
      unpin: true,
    });
  }

  /**
   * Unpin all pinned messages.
   *
   * @method
   * @param chatId The identifier of the chat.
   */
  async unpinMessages(chatId: ID): Promise<void> {
    await this.api.messages.unpinAllMessages({ peer: await this.getInputPeer(chatId) });
  }

  /**
   * Ban a member from a chat.
   *
   * @method
   * @param chatId The identifier of the chat.
   * @param memberId The identifier of the member.
   */
  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams): Promise<void> {
    const chat = await this.getInputPeer(chatId);
    if (!(chat instanceof types.InputPeerChannel) && !(chat instanceof types.InputPeerChat)) {
      throw new Error("Invalid chat ID");
    }
    const member = await this.getInputPeer(memberId);
    if (chat instanceof types.InputPeerChannel) {
      if (params?.deleteMessages) {
        try {
          await this.deleteChatMemberMessages(chatId, memberId);
        } catch {
          //
        }
      }
      await this.api.channels.editBanned({
        channel: new types.InputChannel(chat),
        participant: member,
        banned_rights: new types.ChatBannedRights({
          until_date: params?.untilDate ? toUnixTimestamp(params.untilDate) : 0, // todo
          view_messages: true,
          send_messages: true,
          send_media: true,
          send_stickers: true,
          send_gifs: true,
          send_games: true,
          send_inline: true,
          embed_links: true,
        }),
      });
    } else if (chat instanceof types.InputPeerChat) {
      if (!(member instanceof types.InputPeerUser)) {
        throw new Error("Invalid user ID");
      }
      await this.api.messages.deleteChatUser({
        chat_id: chat.chat_id,
        user_id: new types.InputUser(member),
        revoke_history: params?.deleteMessages ? true : undefined,
      });
    }
  }

  /**
   * Unban a member from a chat.
   *
   * @method
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async unbanChatMember(chatId: ID, memberId: ID): Promise<void> {
    const chat = await this.getInputPeer(chatId);
    if (!(chat instanceof types.InputPeerChannel)) {
      throw new Error("Invalid chat ID");
    }
    const member = await this.getInputPeer(memberId);
    await this.api.channels.editBanned({
      channel: new types.InputChannel(chat),
      participant: member,
      banned_rights: new types.ChatBannedRights({ until_date: 0 }),
    });
  }

  /**
   * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
   *
   * @method
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async kickChatMember(chatId: ID, memberId: ID): Promise<void> {
    await this.banChatMember(chatId, memberId);
    await this.unbanChatMember(chatId, memberId);
  }

  /**
   * Set the rights of a chat member.
   *
   * @method
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of a member.
   */
  async setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams): Promise<void> {
    const chat = await this.getInputPeer(chatId);
    if (!(chat instanceof types.InputPeerChannel)) {
      throw new Error("Invalid chat ID");
    }
    const member = await this.getInputPeer(memberId);
    await this.api.channels.editBanned({
      channel: new types.InputChannel(chat),
      participant: member,
      banned_rights: new types.ChatBannedRights({
        until_date: params?.untilDate ? toUnixTimestamp(params.untilDate) : 0,
        send_messages: params?.rights?.canSendMessages ? true : undefined,
        send_audios: params?.rights?.canSendAudio ? true : undefined,
        send_docs: params?.rights?.canSendDocuments ? true : undefined,
        send_photos: params?.rights?.canSendPhotos ? true : undefined,
        send_videos: params?.rights?.canSendVideos ? true : undefined,
        send_roundvideos: params?.rights?.canSendVideoNotes ? true : undefined,
        send_voices: params?.rights?.canSendVoice ? true : undefined,
        send_polls: params?.rights?.canSendPolls ? true : undefined,
        send_stickers: params?.rights?.canSendStickers ? true : undefined,
        send_gifs: params?.rights?.canSendAnimations ? true : undefined,
        send_games: params?.rights?.canSendGames ? true : undefined,
        send_inline: params?.rights?.canSendInlineBotResults ? true : undefined,
        embed_links: params?.rights?.canAddWebPagePreviews ? true : undefined,
        change_info: params?.rights?.canChangeInfo ? true : undefined,
        invite_users: params?.rights?.canInviteUsers ? true : undefined,
        pin_messages: params?.rights?.canPinMessages ? true : undefined,
        manage_topics: params?.rights?.canManageTopics ? true : undefined,
      }),
    });
  }
}
