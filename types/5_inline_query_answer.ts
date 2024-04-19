import { types } from "../2_tl.ts";
import { constructInlineQueryResult, InlineQueryResult } from "./4_inline_query_result.ts";

/** An answer to an inline query. */
export interface InlineQueryAnswer {
  /** The ID of the inline query that yielded these results. */
  id: string;
  /** The inline query results. */
  results: InlineQueryResult[];
  /** TTL of the caches of the results in seconds. */
  cacheTime: number;
  /** A parameter that can be passed to next queries with the same text to yield more results. */
  nextOffset?: string;
}

export function constructInlineQueryAnswer(results: types.messages.BotResults): InlineQueryAnswer {
  return {
    id: results.query_id + "",
    results: results.results.map(constructInlineQueryResult),
    cacheTime: results.cache_time,
    nextOffset: results.next_offset,
  };
}
