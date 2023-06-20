import * as types from "../tl/2_types.ts";

/** This object represents an animated emoji that displays a random value. */
export interface Dice {
  /** Emoji on which the dice throw animation is based */
  emoji: string;
  /** Value of the dice, 1-6 for "🎲", "🎯" and "🎳" base emoji, 1-5 for "🏀" and "⚽" base emoji, 1-64 for "🎰" base emoji */
  value: number;
}

export function constructDice(dice_: types.MessageMediaDice): Dice {
  return { emoji: dice_.emoticon, value: dice_.value };
}
