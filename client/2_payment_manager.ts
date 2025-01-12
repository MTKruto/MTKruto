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

import { InputError } from "../0_errors.ts";
import { Api, is, isOneOf } from "../2_tl.ts";
import { constructPreCheckoutQuery, ID, Update } from "../3_types.ts";
import { AnswerPreCheckoutQueryParams } from "./0_params.ts";
import { UpdateProcessor } from "./0_update_processor.ts";
import { C } from "./1_types.ts";

const paymentManagerUpdates = [
  "updateBotPrecheckoutQuery",
] as const;

type PaymentManagerUpdate = Api.Types[(typeof paymentManagerUpdates)[number]];

export class PaymentManager implements UpdateProcessor<PaymentManagerUpdate> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  canHandleUpdate(update: Api.Update): update is PaymentManagerUpdate {
    return isOneOf(paymentManagerUpdates, update);
  }

  async handleUpdate(update: PaymentManagerUpdate): Promise<Update | null> {
    if (is("updateBotPrecheckoutQuery", update)) {
      const preCheckoutQuery = await constructPreCheckoutQuery(update, this.#c.getEntity);
      return { preCheckoutQuery };
    }

    return null;
  }

  async answerPreCheckoutQuery(preCheckoutQueryId: string, ok: boolean, params?: AnswerPreCheckoutQueryParams) {
    this.#c.storage.assertBot("answerPreCheckoutQuery");
    if (!ok && !params?.error) {
      throw new InputError("error is required when ok is false");
    }
    const queryId = BigInt(preCheckoutQueryId);
    if (!queryId) {
      throw new InputError("Invalid pre-checkout query ID");
    }
    await this.#c.invoke({ _: "messages.setBotPrecheckoutResults", query_id: queryId, error: params?.error, success: ok ? true : undefined });
  }

  async refundStarPayment(userId: ID, telegramPaymentChargeId: string) {
    this.#c.storage.assertBot("refundStarPayment");
    await this.#c.invoke({ _: "payments.refundStarsCharge", user_id: await this.#c.getInputUser(userId), charge_id: telegramPaymentChargeId });
  }
}
