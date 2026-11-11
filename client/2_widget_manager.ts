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
import { constructWidgetQuery, type Update } from "../3_types.ts";
import { InputError } from "../4_errors.ts";
import type { AnswerWidgetQueryParams } from "./0_params.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import type { C } from "./1_types.ts";

const widgetManagerUpdates = [
  "updateBotWidgetQuery",
  "updateInlineBotWidgetQuery",
] as const;

type WidgetManagerUpdate = Api.Types[(typeof widgetManagerUpdates)[number]];

export class WidgetManager implements UpdateProcessor<WidgetManagerUpdate, false> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  canHandleUpdate(update: Api.Update): update is WidgetManagerUpdate {
    return Api.isOneOf(widgetManagerUpdates, update);
  }

  handleUpdate(update: WidgetManagerUpdate): Update {
    const widgetQuery = constructWidgetQuery(update, this.#c.getPeer);
    return { type: "widgetQuery", widgetQuery };
  }

  async answerWidgetQuery(queryId: string, params?: AnswerWidgetQueryParams): Promise<void> {
    this.#c.storage.assertBot("answerWidgetQuery");
    const query_id = BigInt(queryId);
    if (query_id === 0n) {
      throw new InputError("Invalid query ID specified.");
    }
    const result = params?.data;
    await this.#c.invoke({ _: "messages.setBotWidgetQueryAnswer", query_id, result });
  }
}
