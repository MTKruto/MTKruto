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
import { constructShippingAddress, type ShippingAddress } from "./0_shipping_address.ts";

/** Information on an order. */
export interface OrderInfo {
  /** The name of the ordered item. */
  name?: string;
  /** Phone number of the recipient. */
  phoneNumber?: string;
  /** Email adderss of the recipient. */
  email?: string;
  /** The shipping address of the recipient. */
  shippingAddress?: ShippingAddress;
}

export function constructOrderInfo(info: Api.paymentRequestedInfo): OrderInfo {
  return cleanObject({
    name: info.name,
    phoneNumber: info.phone,
    email: info.email,
    shippingAddress: info.shipping_address ? constructShippingAddress(info.shipping_address) : undefined,
  });
}
