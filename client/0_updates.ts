import { AuthorizationState, CallbackQuery, Chat, ChosenInlineResult, ConnectionState, InlineQuery, Message, MessageReaction } from "../3_types.ts";

export interface Update {
  /** A message was sent or received. */
  message?: Message;
  /** A message was edited. */
  editedMessage?: Message;
  /** The client's connection state was changed. */
  connectionState?: ConnectionState;
  /** The client's authorization state was changed. */
  authorizationState?: AuthorizationState;
  /** One or more messages were deleted. */
  deletedMessages?: { chatId: number; messageId: number }[];
  /** A callback query was received. Bot-only. */
  callbackQuery?: CallbackQuery;
  /** An inline query was received. Bot-only. */
  inlineQuery?: InlineQuery;
  /** An inline result was chosen. Bot-only. */
  chosenInlineResult?: ChosenInlineResult;
  /** A new chat was added. User-only. */
  newChat?: Chat;
  /** A chat was edited. User-only. */
  editedChat?: Chat;
  /** A chat was deleted. User-only. */
  deletedChat?: { chatId: number };
  /** The interactions of a message were updated. User-only. */
  messageInteractions?: { chatId: number; messageId: number; reactions: MessageReaction[]; views: number; forwards: number };
}

export type MessageUpdates = "message" | "editedMessage";

type Update_ = Update;
export type FilterUpdate<U extends Update_, Type extends keyof Update_, Field extends string, TypeType = NonNullable<Update_[Type]>> = Omit<U, keyof Update_> & Omit<Update_, Type> & { [Type_ in Type]-?: Field extends keyof TypeType ? TypeType & { [Field_ in Field]-?: Field extends keyof TypeType ? NonNullable<TypeType[Field]> : never } : NonNullable<TypeType> };
