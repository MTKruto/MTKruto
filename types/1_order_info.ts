import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructShippingAddress, ShippingAddress } from "./0_shipping_address.ts";

export interface OrderInfo {
  name?: string;
  phoneNumber?: string;
  email?: string;
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
