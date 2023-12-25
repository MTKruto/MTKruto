import { peerToChatId, types } from "../2_tl.ts";

export interface GiveawayParameters {
  boostedChatId: number;
  additionalChatIds: number[];
  winnerSelectionDate: Date;
  onlyNewMembers: boolean;
  countries: string[];
}

export function constructGiveawayParameters(g: types.MessageMediaGiveaway): GiveawayParameters {
  const countries = g.countries_iso2 ?? [];
  const boostedChatId = peerToChatId(new types.PeerChannel({ channel_id: g.channels[0] }));
  const additionalChatIds = g.channels.slice(1).map((v) => peerToChatId(new types.PeerChannel({ channel_id: v })));
  const onlyNewMembers = g.only_new_subscribers ? true : false;
  const winnerSelectionDate = new Date(g.until_date * 1_000);

  return { boostedChatId, additionalChatIds, winnerSelectionDate, onlyNewMembers, countries };
}
