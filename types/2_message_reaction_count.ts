import { ChatP } from "./1_chat_p.ts";
import { ReactionCount } from "./1_reaction_count.ts";

export interface MessageReactionCount {
  chat: ChatP;
  messageId: number;
  date: Date;
  reactions: ReactionCount[];
}
