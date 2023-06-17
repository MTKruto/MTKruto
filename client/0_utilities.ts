import { ZERO_CHANNEL_ID } from "../constants.ts";
import * as types from "../tl/2_types.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";

export function getChannelChatId(channelId: bigint) {
  return ZERO_CHANNEL_ID + -Number(channelId);
}

export function peerToChatId(peer: types.TypePeer | types.TypeInputPeer) {
  if (peer instanceof types.PeerUser || peer instanceof types.InputPeerUser) {
    return Number(peer.userId);
  } else if (peer instanceof types.PeerChat || peer instanceof types.InputPeerChat) {
    return -Number(peer.chatId);
  } else if (peer instanceof types.PeerChannel || peer instanceof types.InputPeerChannel) {
    return getChannelChatId(peer.channelId);
  } else {
    UNREACHABLE();
  }
}
