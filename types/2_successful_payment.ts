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

import { cleanObject, decodeText } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import { constructOrderInfo, type OrderInfo } from "./1_order_info.ts";

/** A successful payment. */
export interface SuccessfulPayment {
  /** The currency of the payment. */
  currency: string;
  /** The total amount of the transaction. */
  totalAmount: number;
  /** The payload of the payment's invoice. */
  invoicePayload: string;
  /** Telegram payment charge ID. */
  telegramPaymentChargeId: string;
  /** Provider payment charge ID. */
  providerPaymentChargeId: string;
  /** The payment's shipping option ID. */
  shippingOptionId?: string;
  /** The payment's order info. */
  orderInfo?: OrderInfo;
}

export function constructSuccessfulPayment(action: Api.messageActionPaymentSentMe): SuccessfulPayment {
  return cleanObject({
    currency: action.currency,
    totalAmount: Number(action.total_amount),
    invoicePayload: decodeText(action.payload),
    telegramPaymentChargeId: action.charge.id,
    providerPaymentChargeId: action.charge.provider_charge_id,
    shippingOptionId: action.shipping_option_id,
    orderInfo: action.info ? constructOrderInfo(action.info) : undefined,
  });
}
