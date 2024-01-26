import { types } from "../2_tl.ts";
import { constructGiveawayParameters, GiveawayParameters } from "./0_giveaway_parameters.ts";

/** A giveaway. */
export interface Giveaway {
  parameters: GiveawayParameters;
  winnerCount: number;
  monthCount: number;
}

export function constructGiveaway(g: types.MessageMediaGiveaway): Giveaway {
  const winnerCount = g.quantity;
  const monthCount = g.months;
  const parameters = constructGiveawayParameters(g);
  return { parameters, winnerCount, monthCount };
}
