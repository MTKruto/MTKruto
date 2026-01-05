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

import { unreachable } from "../0_deps.ts";
import { cleanObject, decodeText } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructOrderInfo, type OrderInfo } from "./1_order_info.ts";
import { constructUser2, type User } from "./2_user.ts";

export interface PreCheckoutQuery {
  id: string;
  from: User;
  currency: string;
  totalAmount: number;
  invoicePayload: string;
  shippingOptionId?: string;
  orderInfo?: OrderInfo;
}

export function constructPreCheckoutQuery(query: Api.updateBotPrecheckoutQuery, getPeer: PeerGetter): PreCheckoutQuery {
  const peer = getPeer({ _: "peerUser", user_id: query.user_id });
  if (!peer) {
    unreachable();
  }
  const from = constructUser2(peer[0]);
  return cleanObject({
    id: String(query.query_id),
    from,
    currency: query.currency,
    totalAmount: Number(query.total_amount),
    invoicePayload: decodeText(query.payload),
    shippingOptionId: query.shipping_option_id,
    orderInfo: query.info ? constructOrderInfo(query.info) : undefined,
  });
}
