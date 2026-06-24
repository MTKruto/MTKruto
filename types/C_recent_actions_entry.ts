import type { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import type { StickerSetNameGetter } from "./1_sticker.ts";
import type { MessageGetter } from "./9_message.ts";
import { constructRecentAction, type RecentAction } from "./B_recent_action.ts";

export interface RecentActionsEntry {
  id: string;
  date: number
userId: number;
action: RecentAction
}

export async function constructRecentActionsEntry(cale: Api.ChannelAdminLogEvent,getPeer: PeerGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<RecentActionsEntry> {
const id = String(cale.id);
const userId = Number(cale.user_id)
  const date = cale.date
  const action =await constructRecentAction(cale.action, getPeer, getMessage, getStickerSetName)
  return {
    id,
    date,
    userId,
    action,
  }
  
}