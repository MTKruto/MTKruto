import { types } from "../2_tl.ts";
import { constructGiveawayParameters, GiveawayParameters } from "./0_giveaway_parameters.ts";

/** A giveaway. */
export interface Giveaway {
  parameters: GiveawayParameters;
  /** The quantity of the Telegram Premium subscriptions that will be given away.. */
  winnerCount: number;
  /** Number of months the Telegram Premium subscription will be active after code activation. */
  monthCount: number;
}

export function constructGiveaway(g: types.MessageMediaGiveaway): Giveaway {
  const winnerCount = g.quantity;
  const monthCount = g.months;
  const parameters = constructGiveawayParameters(g);
  return { parameters, winnerCount, monthCount };
}
