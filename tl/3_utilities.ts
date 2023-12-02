import { UNREACHABLE } from "../1_utilities.ts";
import { ZERO_CHANNEL_ID } from "../4_constants.ts";
import { enums, types } from "./2_types.ts";

export function getChannelChatId(channelId: bigint) {
  return ZERO_CHANNEL_ID + -Number(channelId);
}

export function peerToChatId(peer: enums.Peer | enums.InputPeer) {
  if (peer instanceof types.peerUser || peer instanceof types.inputPeerUser) {
    return Number(peer.user_id);
  } else if (peer instanceof types.peerChat || peer instanceof types.inputPeerChat) {
    return -Number(peer.chat_id);
  } else if (peer instanceof types.peerChannel || peer instanceof types.inputPeerChannel) {
    return getChannelChatId(peer.channel_id);
  } else {
    UNREACHABLE();
  }
}
