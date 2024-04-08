/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { types } from "../2_tl.ts";

/** A rolled dice. */
export interface Dice {
  /** The emoji on which the dice is based on. */
  emoji: string;
  /** The result of the roll, which is in the range of 1-6 for the emojis "🎲", "🎯" and "🎳",  1-5 for the emojis "🏀" and "⚽", and 1-64 for emoji "🎰". */
  value: number;
}

export function constructDice(dice_: types.MessageMediaDice): Dice {
  return { emoji: dice_.emoticon, value: dice_.value };
}
