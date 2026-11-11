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

import { decodeText, gunzip } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";

/** A widget. */
export interface Widget {
  /** The identifier of the widget. */
  id?: string;
  /** The width of the widget. */
  width?: number;
  /** The height of the widget. */
  height?: number;
  /** The HTML code of the widget. */
  html: string;
  /** The widget's public data. */
  publicData?: string;
  /** The widget public data's hash. */
  publicDataHash?: string;
  /** The widget's chat-specific data. */
  chatData?: string;
  /** Whether the widget is queryable. */
  isQueryable: boolean;
  /** Whether the widget has background queries. */
  isBackgroundQuery: boolean;
  /** Whether the widget is a copy. */
  isCopy: boolean;
}

export async function constructWidget(mmw: Api.messageMediaWidget): Promise<Widget> {
  const id = mmw.widget_id !== undefined ? String(mmw.widget_id) : undefined;
  const width = mmw.width === 0 ? undefined : mmw.width;
  const height = mmw.height === 0 ? undefined : mmw.height;
  const html = decodeText(await gunzip(mmw.payload));
  const publicData = mmw.public_data;
  const chatData = mmw.chat_data;
  const isQueryable = !!mmw.can_query;
  const isBackgroundQuery = !!mmw.background_query;
  const isCopy = !!mmw.is_copy;
  const publicDataHash = mmw.public_data_hash !== undefined ? String(mmw.public_data_hash) : undefined;
  return {
    id,
    width,
    height,
    html,
    publicData,
    publicDataHash,
    chatData,
    isQueryable,
    isBackgroundQuery,
    isCopy,
  };
}
