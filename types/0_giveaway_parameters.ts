import { fromUnixTimestamp } from "../1_utilities.ts";
import { peerToChatId, types } from "../2_tl.ts";

/** Giveaway parameters. */
export interface GiveawayParameters {
  /** The identifier of the chat that will be boosted for the duration of the given away Premium subscriptions. */
  boostedChatId: number;
  /** The identifiers of additional chats that the user must subscribe to in order to be eligible for the prizes. */
  additionalChatIds: number[];
  /** The point of time in which the winners will be chosen. */
  winnerSelectionDate: Date;
  /** Whether only new members of the chats will be eligible for the prizes. */
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
