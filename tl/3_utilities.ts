import { UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
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

export function chatIdToPeer(chatId: number) {
  if (chatId > 0) {
    return new types.PeerUser({ user_id: BigInt(chatId) });
  } else if (chatId > ZERO_CHANNEL_ID) {
    return new types.PeerChat({ chat_id: BigInt(Math.abs(chatId)) });
  } else {
    return new types.PeerChannel({ channel_id: BigInt(ZERO_CHANNEL_ID - chatId) });
  }
}

export function inputPeerToPeer(inputPeer: enums.InputPeer) {
  if ("user_id" in inputPeer) {
    return new types.PeerUser(inputPeer);
  } else if ("chat_id" in inputPeer) {
    return new types.PeerChat(inputPeer);
  } else if ("channel_id" in inputPeer) {
    return new types.PeerChannel(inputPeer);
  } else {
    UNREACHABLE();
  }
}
