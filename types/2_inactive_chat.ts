import { fromUnixTimestamp, UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";

/** An inactive chat. */
export interface InactiveChat {
  /** The point of time in which the chat was last active. */
  lastActivity: Date;
  /** The chat that has been marked as inactive. */
  chat: ChatP;
}

export function constructInactiveChat(chat_: enums.Chat, lastActivity: number): InactiveChat {
  if (chat_ instanceof types.ChatEmpty) {
    UNREACHABLE();
  }
  const chat = constructChatP(chat_);
  return {
    lastActivity: fromUnixTimestamp(lastActivity),
    chat,
  };
}
