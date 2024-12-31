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

import { Api } from "../2_tl.ts";

/** An answer to a callback query. */
export interface CallbackQueryAnswer {
  /** Whether the answer should be shown as an alert. */
  alert: boolean;
  /** The text of the answer. */
  text: string;
  /** A potential URL that is to be opened. */
  url: string;
}

export function constructCallbackQueryAnswer(answer: Api.messages_botCallbackAnswer): CallbackQueryAnswer {
  return {
    alert: !!answer.alert,
    text: answer.message ?? "",
    url: answer.url ?? "",
  };
}
