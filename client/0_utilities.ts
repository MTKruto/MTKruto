import { types } from "../2_tl.ts";

export const resolve = () => Promise.resolve();

export type With<T, K extends keyof T> = T & Required<Pick<T, K>>;

export function isPtsUpdate(v: types.TypeUpdate | types.TypeUpdates): v is
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

export function isChannelPtsUpdate(v: types.TypeUpdate | types.TypeUpdates): v is
  | types.UpdateNewChannelMessage
  | types.UpdateEditChannelMessage
  | types.UpdateDeleteChannelMessages {
  return v instanceof types.UpdateNewChannelMessage ||
    v instanceof types.UpdateEditChannelMessage ||
    v instanceof types.UpdateDeleteChannelMessages;
}
