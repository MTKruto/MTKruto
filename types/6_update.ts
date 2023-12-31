import { AuthorizationState } from "./0_authorization_state.ts";
import { ConnectionState } from "./0_connection_state.ts";
import { MessageIdentifier } from "./0_message_identifier.ts";
import { ChatP } from "./1_chat_p.ts";
import { ReactionCount } from "./1_reaction_count.ts";
import { ChosenInlineResult } from "./2_chosen_inline_result.ts";
import { InlineQuery } from "./2_inline_query.ts";
import { MessageInteractions } from "./2_message_interactions.ts";
import { Message } from "./4_message.ts";
import { CallbackQuery } from "./5_callback_query.ts";
import { Chat } from "./5_chat.ts";

/**
 * The client's connection state was changed.
 * @unlisted
 */
export interface UpdateConnectionState {
  /** The client's new connection state. */
  connectionState: ConnectionState;
}

/**
 * The client's authorization state was changed.
 * @unlisted
 */
export interface UpdateAuthorizationState {
  /** The client's new authorization state. */
  authorizationState: AuthorizationState;
}

/**
 * A message was sent or received.
 * @unlisted
 */
export interface UpdateNewMessage {
  /** The sent or received message. */
  message: Message;
}

/**
 * A message was edited.
 * @unlisted
 */
export interface UpdateEditedMessage {
  /** The edited message. */
  editedMessage: Message;
}

/**
 * One or more messages were deleted.
 * @unlisted
 */
export interface UpdateDeletedMessages {
  /** The deleted messages. */
  deletedMessages: MessageIdentifier[];
}

/**
 * A callback query was received. Bot-only.
 * @unlisted
 */
export interface UpdateCallbackQuery {
  /** The received callback query. */
  callbackQuery: CallbackQuery;
}

/**
 * An inline query was received. Bot-only.
 * @unlisted
 */
export interface UpdateInlineQuery {
  /** The received inline query. */
  inlineQuery: InlineQuery;
}

/**
 * An inline result was chosen. Bot-only.
 * @unlisted
 */
export interface UpdateChosenInlineResult {
  /** The chosen inline result. */
  chosenInlineResult: ChosenInlineResult;
}

/**
 * A new chat was added. User-only.
 * @unlisted
 */
export interface UpdateNewChat {
  /** The newly added chat. */
  newChat: Chat;
}

/**
 * A chat was deleted. User-only.
 * @unlisted
 */
export interface UpdateEditedChat {
  editedChat: Chat;
}

/**
 * A chat was deleted. User-only.
 * @unlisted
 */
export interface UpdateDeletedChat {
  /** The chat that was deleted. */
  deletedChat: { chatId: number };
}

/**
 * The interactions of a message were updated. User-only.
 * @unlisted
 */
export interface UpdateMessageInteractions {
  /** The new message interactions. */
  messageInteractions: MessageInteractions;
}

/**
 * The anonymous reactions made to a message were changed. Bot-only.
 * @unlisted
 */
export interface UpdateMessageReactionCount {
  /** The new message reactions. */
  messageReactionCount: { chat: ChatP; messageId: number; date: Date; reactions: ReactionCount[] };
}

/** @unlisted */
export interface UpdateMap {
  message: UpdateNewMessage;
  editedMessage: UpdateEditedMessage;
  connectionState: UpdateConnectionState;
  authorizationState: UpdateAuthorizationState;
  deletedMessages: UpdateDeletedMessages;
  callbackQuery: UpdateCallbackQuery;
  inlineQuery: UpdateInlineQuery;
  chosenInlineResult: UpdateChosenInlineResult;
  newChat: UpdateNewChat;
  editedChat: UpdateEditedChat;
  deletedChat: UpdateDeletedChat;
  messageInteractions: UpdateMessageInteractions;
  messageReactionCount: UpdateMessageReactionCount;
}

/** @unlisted */
export type UpdateIntersection<T> =
  & T
  & Partial<
    & UpdateConnectionState
    & UpdateAuthorizationState
    & UpdateNewMessage
    & UpdateEditedMessage
    & UpdateDeletedMessages
    & UpdateCallbackQuery
    & UpdateInlineQuery
    & UpdateChosenInlineResult
    & UpdateNewChat
    & UpdateEditedChat
    & UpdateDeletedChat
    & UpdateMessageInteractions
    & UpdateMessageReactionCount
  >;

export type Update =
  | UpdateConnectionState
  | UpdateAuthorizationState
  | UpdateNewMessage
  | UpdateEditedMessage
  | UpdateDeletedMessages
  | UpdateCallbackQuery
  | UpdateInlineQuery
  | UpdateChosenInlineResult
  | UpdateNewChat
  | UpdateEditedChat
  | UpdateDeletedChat
  | UpdateMessageInteractions
  | UpdateMessageReactionCount;
