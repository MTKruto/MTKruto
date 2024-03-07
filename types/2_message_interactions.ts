import { MessageReaction } from "./1_message_reaction.ts";

/** The interactions made with a message. */
export interface MessageInteractions {
  /** ID of the chat where the message was sent. */
  chatId: number;
  /** Unique identifier of the message. */
  messageId: number;
  /** The reactions made to the message. */
  reactions: MessageReaction[];
  /** Number of times the message was viewed. */
  views: number;
  /** Number of times the message was forwarded. */
  forwards: number;
}
