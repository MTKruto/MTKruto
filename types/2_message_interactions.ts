import { MessageReaction } from "./1_message_reaction.ts";

/** The interactions made with a message. */
export interface MessageInteractions {
  /** The identifier of the message's chat. */
  chatId: number;
  /** The message's identifier. */
  messageId: number;
  /** The reactions made to the message. */
  reactions: MessageReaction[];
  /** Number of times the message was viewed. */
  views: number;
  /** Number of times the message was forwarded. */
  forwards: number;
}
