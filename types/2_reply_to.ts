import { ID } from "./0_id.ts";
import { ReplyQuote } from "./1_reply_quote.ts";

/** @unlisted */
export interface ReplyToMessage {
  /** @discriminator */
  messageId: number;
  quote?: ReplyQuote;
}

/** @unlisted */
export interface ReplyToStory {
  chatId: ID;
  /** @discriminator */
  storyId: number;
}

export type ReplyTo = ReplyToMessage | ReplyToStory;
