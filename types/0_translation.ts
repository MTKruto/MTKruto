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

import { Api } from "../2_tl.ts";

/** A translation. */
export interface Translation {
  key: string;
  value: string;
  one?: string;
  zero?: string;
  two?: string;
  few?: string;
  many?: string;
}

export function constructTranslation(langPackString: Api.LangPackString): Translation {
  if (Api.is("langPackString", langPackString)) {
    return {
      key: langPackString.key,
      value: langPackString.value,
    };
  } else if (Api.is("langPackStringPluralized", langPackString)) {
    return {
      key: langPackString.key,
      value: langPackString.other_value,
      one: langPackString.one_value,
      zero: langPackString.zero_value,
      two: langPackString.two_value,
      few: langPackString.few_value,
      many: langPackString.many_value,
    };
  } else {
    return {
      key: langPackString.key,
      value: "",
    };
  }
}
