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

import type { Api } from "../2_tl.ts";

/** A change in checklist. */
export interface ChecklistChanged {
  /** The identifiers of the checked items. */
  checkedItems: number[];
  /** The identifiers of the unchecked items. */
  uncheckedItems: number[];
}
export function constructChecklistChanged(action: Api.messageActionTodoCompletions): ChecklistChanged {
  return {
    checkedItems: action.completed,
    uncheckedItems: action.incompleted,
  };
}
