import { fromUnixTimestamp, UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";

export interface InactiveChat {
  /** Date of the last activity in Unix time. */
  lastActivity: Date;
  /** The chat. */
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
