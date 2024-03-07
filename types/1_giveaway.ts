import { types } from "../2_tl.ts";
import { constructGiveawayParameters, GiveawayParameters } from "./0_giveaway_parameters.ts";

/** A giveaway. */
export interface Giveaway {
  /** Giveaway parameters. */
  parameters: GiveawayParameters;
  /** Number of users which will receive Telegram Premium subscription gift codes. */
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
