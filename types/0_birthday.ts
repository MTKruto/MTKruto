/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";

/** A user's birthday. */
export interface Birthday {
  day: number;
  month: number;
  year?: number;
}

export function constructBirthday(birthday: Api.birthday): Birthday {
  return cleanObject({
    day: birthday.day,
    month: birthday.month,
    year: birthday.year,
  });
}

export function birthdayToTlObject(birthday: Birthday): Api.birthday {
  return {
    _: "birthday",
    day: birthday.day,
    month: birthday.month,
    year: birthday.year,
  };
}
