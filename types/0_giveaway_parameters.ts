import { fromUnixTimestamp } from "../1_utilities.ts";
import { peerToChatId, types } from "../2_tl.ts";

/** Giveaway parameters. */
export interface GiveawayParameters {
  /** Identifier of the supergroup or channel chat, which will be automatically boosted by the winners of the giveaway for duration of the Premium subscription. */
  boostedChatId: number;
  /** Identifiers of other supergroup or channel chats that must be subscribed by the users to be eligible for the giveaway. */
  additionalChatIds: number[];
  /** Point in time (Unix timestamp) when the giveaway is expected to be performed. */
  winnerSelectionDate: Date;
  /** Whether the new members of the chats will be eligible for the giveaway. */
  onlyNewMembers: boolean;
  /** The list of two-letter ISO 3166-1 alpha-2 codes of countries, users from which will be eligible for the giveaway. */
  countries: string[];
}

export function constructGiveawayParameters(g: types.MessageMediaGiveaway): GiveawayParameters {
  const countries = g.countries_iso2 ?? [];
  const boostedChatId = peerToChatId(new types.PeerChannel({ channel_id: g.channels[0] }));
  const additionalChatIds = g.channels.slice(1).map((v) => peerToChatId(new types.PeerChannel({ channel_id: v })));
  const onlyNewMembers = g.only_new_subscribers ? true : false;
  const winnerSelectionDate = fromUnixTimestamp(g.until_date);

  return { boostedChatId, additionalChatIds, winnerSelectionDate, onlyNewMembers, countries };
}
