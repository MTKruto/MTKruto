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

import { cleanObject, decodeText } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import { constructOrderInfo, type OrderInfo } from "./1_order_info.ts";

export interface SuccessfulPayment {
  currency: string;
  totalAmount: number;
  invoicePayload: string;
  telegramPaymentChargeId: string;
  providerPaymentChargeId: string;
  shippingOptionId?: string;
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
