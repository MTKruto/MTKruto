import { unreachable } from "../0_deps.ts";
import { base64EncodeUrlSafe, decodeText } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import type { ChatP, PeerGetter } from "./1_chat_p.ts";
import { constructUser2, type User } from "./2_user.ts";
import { constructWallet, type Wallet } from "./6_wallet.ts";
import { constructWalletCard, type WalletCard } from "./7_wallet_card.ts";

/** @unlisted */
export interface _WidgetQueryBase {
  /** The identifier of the widget query. */
  id: string;
  from: User;
  chat?: ChatP;
  messageId?: number;
  inlineMessageId?: string;
  chatInstance: string;
  chatType?: string;
  data: string;
  widgetId?: string;
}

export interface WidgetQueryData extends _WidgetQueryBase {
  type: "data";
  walletCard?: WalletCard;
}

export interface WidgetQuerySignData extends _WidgetQueryBase {
  type: "signData";
  wallet: Wallet;
  signData: string;
}

export interface WidgetQueryTransaction extends _WidgetQueryBase {
  type: "transaction";
  wallet: Wallet;
  messageHash: string;
}

export type WidgetQuery = WidgetQueryData | WidgetQuerySignData | WidgetQueryTransaction;

export function constructWidgetQuery(ubwq: Api.updateBotWidgetQuery | Api.updateInlineBotWidgetQuery, getPeer: PeerGetter): WidgetQuery {
  const peer = getPeer({ _: "peerUser", user_id: ubwq.user_id });
  if (peer === null) {
    unreachable();
  }

  const id = String(ubwq.query_id);
  const from = constructUser2(peer[0]);
  const chat = "peer" in ubwq ? getPeer(ubwq.peer)?.[0] : undefined;
  if ("peer" in ubwq && chat === undefined) {
    unreachable();
  }
  const messageId = "msg_id" in ubwq ? ubwq.msg_id : undefined;
  const inlineMessageId = "inline_message_id" in ubwq ? base64EncodeUrlSafe(Api.serializeObject(ubwq.inline_message_id)) : undefined;
  const chatInstance = String(ubwq.chat_instance);
  const chatType = ubwq.chat_type === "" ? undefined : ubwq.chat_type;
  const data = decodeText(ubwq.data);
  const widgetId = ubwq.widget_id === 0n ? undefined : String(ubwq.widget_id);
  const base: _WidgetQueryBase = {
    id,
    from,
    messageId,
    inlineMessageId,
    chatInstance,
    chatType,
    data,
    widgetId,
  };

  switch (ubwq.query_type._) {
    case "widgetQueryTypeData":
      return {
        type: "data",
        ...base,
        walletCard: ubwq.query_type.with_wallet ? ubwq.wallet_card !== undefined ? constructWalletCard(ubwq.wallet_card, getPeer) : undefined : undefined,
      };
    case "widgetQueryTypeSignData":
      return {
        type: "signData",
        ...base,
        wallet: constructWallet(ubwq.query_type.wallet),
        signData: ubwq.query_type.sign_data.data,
      };
    case "widgetQueryTypeSentTransaction":
      return {
        type: "transaction",
        ...base,
        wallet: constructWallet(ubwq.query_type.wallet),
        messageHash: ubwq.query_type.msg_hash,
      };
  }

  unreachable();
}
