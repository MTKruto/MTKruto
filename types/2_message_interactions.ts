import { MessageReaction } from "./1_message_reaction.ts";

export interface MessageInteractions {
  chatId: number;
  messageId: number;
  reactions: MessageReaction[];
  views: number;
  forwards: number;
}
