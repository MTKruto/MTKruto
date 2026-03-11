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
import { constructTodoItem, type TodoItem } from "./3_todo_item.ts";

/** A to-do list that is to be provided as an input. */
export interface TodoList {
  /** The to-do list's title. */
  title: string;
  /** The entities of the to-do list's title. */
  titleEntities?: MessageEntity[];
  /** The to-do list's items. At least one item must be provided. */
  items: TodoItem[];
  /** Whether users other than the creator of the to-do list can add more items. */
  isExtendableByOthers: boolean;
  /** Whether users other than the creator of the to-do-list can mark items as completed. */
  isCompletableByOthers: boolean;
}

export function constructTodoList(todoList: Api.todoList): TodoList {
  return cleanObject({
    title: todoList.title.text,
    titleEntities: todoList.title.entities.length ? todoList.title.entities.map((v) => constructMessageEntity(v)).filter((v) => v !== null) : undefined,
    items: todoList.list.map((v) => constructTodoItem(v)),
    isExtendableByOthers: !!todoList.others_can_append,
    isCompletableByOthers: !!todoList.others_can_complete,
  });
}
