import { types } from "../2_tl.ts";

export function hasPts(v: types.TypeUpdate | types.TypeUpdates): v is
  | types.UpdateShortMessage
  | types.UpdateShortChatMessage
  | types.UpdateShortSentMessage
  | types.UpdateNewMessage
  | types.UpdateDeleteMessages
  | types.UpdateReadHistoryInbox
  | types.UpdateReadHistoryOutbox
  | types.UpdatePinnedChannelMessages
  | types.UpdatePinnedMessages
  | types.UpdateFolderPeers
  | types.UpdateChannelWebPage
  | types.UpdateEditMessage
  | types.UpdateReadMessagesContents
  | types.UpdateWebPage {
  return v instanceof types.UpdateShortMessage ||
    v instanceof types.UpdateShortChatMessage ||
    v instanceof types.UpdateShortSentMessage ||
    v instanceof types.UpdateNewMessage ||
    v instanceof types.UpdateDeleteMessages ||
    v instanceof types.UpdateReadHistoryInbox ||
    v instanceof types.UpdateReadHistoryOutbox ||
    v instanceof types.UpdatePinnedChannelMessages ||
    v instanceof types.UpdatePinnedMessages ||
    v instanceof types.UpdateFolderPeers ||
    v instanceof types.UpdateChannelWebPage ||
    v instanceof types.UpdateEditMessage ||
    v instanceof types.UpdateReadMessagesContents ||
    v instanceof types.UpdateWebPage;
}

export function hasChannelPts(v: types.TypeUpdate | types.TypeUpdates): v is
  | types.UpdateNewChannelMessage
  | types.UpdateEditChannelMessage
  | types.UpdateDeleteChannelMessages
  | types.UpdateReadChannelInbox {
  return v instanceof types.UpdateNewChannelMessage ||
    v instanceof types.UpdateEditChannelMessage ||
    v instanceof types.UpdateDeleteChannelMessages ||
    v instanceof types.UpdateReadChannelInbox;
}
