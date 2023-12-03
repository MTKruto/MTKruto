import { UNREACHABLE } from "../1_utilities.ts";
import { ZERO_CHANNEL_ID } from "../4_constants.ts";
import { enums, types } from "./2_types.ts";

export function getChannelChatId(channelId: bigint) {
  return ZERO_CHANNEL_ID + -Number(channelId);
}

export function peerToChatId(peer: enums.Peer | enums.InputPeer) {
  if (peer instanceof types.PeerUser || peer instanceof types.InputPeerUser) {
    return Number(peer.user_id);
  } else if (peer instanceof types.PeerChat || peer instanceof types.InputPeerChat) {
    return -Number(peer.chat_id);
  } else if (peer instanceof types.PeerChannel || peer instanceof types.InputPeerChannel) {
    return getChannelChatId(peer.channel_id);
  } else {
    UNREACHABLE();
  }
}
