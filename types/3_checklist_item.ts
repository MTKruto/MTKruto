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

import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import { constructMessageEntity, type MessageEntity } from "./2_message_entity.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructUser2, type User } from "./2_user.ts";
import { unreachable } from "../0_deps.ts";

/**
 * An unchecked checklist item.
 * @unlisted
 */
export interface ChecklistItemUnchecked {
  /**
   * The type of the checklist item.
   * @discriminator
   */
  type: "unchecked";
  /** The identifier of the checklist item. */
  id: number;
  /** The item's text. */
  text: string;
  /** The entities of the text. */
  entities?: MessageEntity[];
}

/**
 * A checked checklist item.
 * @unlisted
 */
export interface ChecklistItemChecked {
  /**
   * The type of the checklist item.
   * @discriminator
   */
  type: "checked";
  /** The identifier of the to-do item. */
  id: number;
  /** The item's text. */
  text: string;
  /** The entities of the text. */
  entities?: MessageEntity[];
  /** A point in time in which the checklist item was checked. */
  checkedAt: number;
  /** The user who checked the item. */
  checkedBy: User;
}

/** Any type of checklist item. */
export type ChecklistItem = ChecklistItemUnchecked | ChecklistItemChecked;

export function constructChecklistItem(todoItem: Api.todoItem, completions: Api.todoCompletion[], getPeer: PeerGetter): ChecklistItem {
  const id = todoItem.id;
  const text = todoItem.title.text;
  const entities = todoItem.title.entities.length ? todoItem.title.entities.map((v) => constructMessageEntity(v)).filter((v) => v !== null) : undefined;

  const completion = completions.find((v) => v.id === todoItem.id);
  if (completion) {
    const peer = getPeer(completion.completed_by);
    if (!peer || peer[0].type !== "private") {
      unreachable();
    }

    return cleanObject({
      type: "checked",
      id,
      text,
      entities,
      checkedAt: completion.date,
      checkedBy: constructUser2(peer[0]),
    });
  } else {
    return cleanObject({
      type: "unchecked",
      id,
      text,
      entities,
    });
  }
}
