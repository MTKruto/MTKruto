import { AuthorizationState } from "./0_authorization_state.ts";
import { ConnectionState } from "./0_connection_state.ts";
import { MessageReference } from "./0_message_reference.ts";
import { ChosenInlineResult } from "./2_chosen_inline_result.ts";
import { InlineQuery } from "./2_inline_query.ts";
import { MessageInteractions } from "./2_message_interactions.ts";
import { MessageReactionCount } from "./2_message_reaction_count.ts";
import { MessageReactions } from "./2_message_reactions.ts";
import { ChatMemberUpdated } from "./3_chat_member_updated.ts";
import { Message } from "./4_message.ts";
import { CallbackQuery } from "./5_callback_query.ts";
import { Chat } from "./5_chat.ts";

/**
 * A client's connection state was changed.
 *
 * ```
 * client.on("connectionState", (ctx) => {
 *   console.log("The client's connection state is now:", ctx.connectionState);
 * });
 * ```
 * @unlisted
 */
export interface UpdateConnectionState {
  /** The client's new connection state. */
  connectionState: ConnectionState;
}

/**
 * A client's authorization state was changed.
 *
 * ```
 * client.on("authorizationState", (ctx) => {
 *   if (ctx.authorizationState.authorized) {
 *     const me = await ctx.client.getMe();
 *     console.log("The client is now authorized as", me.firstName);
 *   } else {
 *     console.log("The client is no longer authorized.")
 *   }
 * });
 * ```
 * @unlisted
 */
export interface UpdateAuthorizationState {
  /** The client's new authorization state. */
  authorizationState: AuthorizationState;
}

/**
 * A message was sent or received.
 *
 * ```
 * // Handle text messages
 * client.on("message:text", (ctx) => {
 *   const receivedOrSent = ctx.message.out ? "sent" : "received";
 *   console.log("Just", receivedOrSent, "a text message:", ctx.message.text);
 * });
 *
 * // Handle other messages
 * client.on("message", (ctx) => {
 *   if (ctx.message.out) {
 *    console.log("Just sent a message.");
 *   }
 * });
 * ```
 *
 * Note that updates on outgoing messages are disabled by default for bots.
 * @unlisted
 */
export interface UpdateNewMessage {
  /** The sent or received message. */
  message: Message;
}

/**
 * A message was edited.
 *
 * ```
 * client.on("editedMessage", (ctx) => {
 *   console.log("A message was just edited.");
 *   // ctx.editedMessage
 * });
 * ```
 * @unlisted
 */
export interface UpdateEditedMessage {
  /** The edited message. */
  editedMessage: Message;
}

/**
 * One or more messages were deleted.
 *
 * ```
 * client.on("deletedMessages", (ctx) => {
 *   for (const deletedMessage of ctx.deletedMessages) {
 *     console.log(deletedMessage);
 *   }
 * });
 * ```
 * @unlisted
 */
export interface UpdateDeletedMessages {
  /** The deleted messages. */
  deletedMessages: MessageReference[];
}

/**
 * A callback query was made (a user presses an inline button). Bot-only.
 *
 * ```
 * client.on("callbackQuery", async (ctx) => {
 *   await ctx.answerCallbackQuery(ctx.callbackQuery.data, { alert: true });
 * });
 * ```
 * @unlisted
 */
export interface UpdateCallbackQuery {
  /** The received callback query. */
  callbackQuery: CallbackQuery;
}

/**
 * An inline query was received. Bot-only.
 *
 * ```
 * client.on("inlineQuery", (ctx) => {
 *   const { from, query } = ctx.inlineQuery;
 *   console.log("User", from.id, "sent an inline query:", query);
 * });
 * ```
 * @unlisted
 */
export interface UpdateInlineQuery {
  /** The received inline query. */
  inlineQuery: InlineQuery;
}

/**
 * An inline query result was chosen. Bot-only.
 * @unlisted
 */
export interface UpdateChosenInlineResult {
  /** The chosen inline query result. */
  chosenInlineResult: ChosenInlineResult;
}

/**
 * A new chat was added to the chat list. User-only.
 * @unlisted
 */
export interface UpdateNewChat {
  /** The newly added chat. */
  newChat: Chat;
}

/**
 * A chat in the chat list was edited. User-only.
 * @unlisted
 */
export interface UpdateEditedChat {
  editedChat: Chat;
}

/**
 * A chat was removed from the chat list. User-only.
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
  messageReactionCount: MessageReactionCount;
}

/**
 * The reactions made to a message by a user were changed. Bot-only.
 * @unlisted
 */
export interface UpdateMessageReactions {
  messageReactions: MessageReactions;
}

/**
 * The status of a chat member was changed.
 * @unlisted
 */
export interface UpdateChatMember {
  chatMember: ChatMemberUpdated;
}

/**
 * The status of the current account was changed in a chat.
 * @unlisted
 */
export interface UpdateMyChatMember {
  myChatMember: ChatMemberUpdated;
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
  messageReactions: UpdateMessageReactions;
  chatMember: UpdateChatMember;
  myChatMember: UpdateMyChatMember;
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
    & UpdateMessageReactions
    & UpdateChatMember
    & UpdateMyChatMember
  >;

/** An incoming update. */
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
  | UpdateMessageReactionCount
  | UpdateMessageReactions
  | UpdateChatMember
  | UpdateMyChatMember;
