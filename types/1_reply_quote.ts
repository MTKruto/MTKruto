import { enums } from "../2_tl.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";

/** A reference to a specific part of a message that is being replied to. */
export interface ReplyQuote {
  /** The byte offset of the quoted text. */  
  offset: number;
  /** The quoted text. */
  text: string;
  /** Special entities that appear in the quote. */
  entities: MessageEntity[];
}

export function constructReplyQuote(quoteText: string | undefined, quoteOffset: number | undefined, quoteEntities: enums.MessageEntity[] | undefined): ReplyQuote {
  quoteText ??= "";
  quoteOffset ??= 0;
  quoteEntities ??= [];
  return {
    offset: quoteOffset,
    text: quoteText,
    entities: quoteEntities.map(constructMessageEntity).filter((v): v is NonNullable<typeof v> => !!v),
  };
}
