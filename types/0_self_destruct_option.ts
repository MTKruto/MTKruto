/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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

import { InputError } from "../0_errors.ts";

/**
 * A message self-destruct option that destructs the message after it has been opened.
 * @unlisted
 */
export type SelfDestructAfterOpen = "afterOpen";

/**
 * A message self-destruct option that destructs the message after a specified duration in seconds.
 * @unlisted
 */
export type SelfDestructAfterSeconds = number;

/** A message self-destruct option. */
export type SelfDestructOption = SelfDestructAfterOpen | SelfDestructAfterSeconds;

const MAX_INT_32 = ~~(0xFFFFFFFF / 2);

export function constructSelfDestructOption(ttlSeconds: number): SelfDestructOption {
  if (ttlSeconds === MAX_INT_32) {
    return "afterOpen";
  } else {
    return ttlSeconds;
  }
}

export function selfDestructOptionToInt(option: SelfDestructOption): number {
  if (option === "afterOpen") {
    return 2147483647;
  } else if (typeof option === "number") {
    if (option === 0) {
      throw new InputError("Self destruct option cannot be zero.");
    } else if (option < 0) {
      throw new InputError("Self destruct option cannot be negative.");
    } else {
      return option;
    }
  } else {
    throw new InputError("Invalid self destruct option.");
  }
}
