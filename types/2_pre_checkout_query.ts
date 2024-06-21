import { unreachable } from "../0_deps.ts";
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { constructOrderInfo } from "./1_order_info.ts";
import { OrderInfo } from "./1_order_info.ts";
import { constructUser, User } from "./1_user.ts";

export interface PreCheckoutQuery {
  id: string;
  from: User;
  currency: string;
  totalAmount: number;
  invoicePayload: string;
  shippingOptionId?: string;
  orderInfo?: OrderInfo;
}

export async function constructPreCheckoutQuery(query: Api.updateBotPrecheckoutQuery, getEntity: EntityGetter): Promise<PreCheckoutQuery> {
  const user = await getEntity({ _: "peerUser", user_id: query.user_id });
  if (!user) {
    unreachable();
  }
  const from = constructUser(user);
  return cleanObject({
    id: String(query.query_id),
    from,
    currency: query.currency,
    totalAmount: Number(query.total_amount),
    invoicePayload: new TextDecoder().decode(query.payload),
    shippingOptionId: query.shipping_option_id,
    orderInfo: query.info ? constructOrderInfo(query.info) : undefined,
  });
}
