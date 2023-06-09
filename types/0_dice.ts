import * as types from "../tl/2_types.ts";

export interface Dice {
  emoji: string;
  value: number;
}

export function constructDice(dice_: types.MessageMediaDice): Dice {
  return { emoji: dice_.emoticon, value: dice_.value };
}
