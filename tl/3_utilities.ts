/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { unreachable } from "../0_deps.ts";
import { ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { enums, types } from "./2_types.ts";

export function getChannelChatId(channelId: bigint): number {
  return ZERO_CHANNEL_ID + -Number(channelId);
}

// convenience types
export type AnyEntity = types.User | types.Channel | types.ChannelForbidden | types.Chat | types.ChatForbidden;

export function peerToChatId(peer: enums.Peer | enums.InputPeer | AnyEntity | types.ChannelFull | types.UserFull | types.ChatFull | { channel_id: bigint } | { user_id: bigint } | { chat_id: bigint }): number {
  if (peer instanceof types.PeerUser || peer instanceof types.InputPeerUser || peer instanceof types.User || peer instanceof types.UserFull || "user_id" in peer) {
    return Number("id" in peer ? peer.id : peer.user_id);
  } else if (peer instanceof types.PeerChat || peer instanceof types.InputPeerChat || peer instanceof types.Chat || peer instanceof types.ChatForbidden || peer instanceof types.ChatFull || "chat_id" in peer) {
    return -Number("id" in peer ? peer.id : peer.chat_id);
  } else if (peer instanceof types.PeerChannel || peer instanceof types.InputPeerChannel || peer instanceof types.Channel || peer instanceof types.ChannelForbidden || peer instanceof types.ChannelFull || "channel_id" in peer) {
    return getChannelChatId("id" in peer ? peer.id : peer.channel_id);
  } else {
    unreachable();
  }
}

export function chatIdToPeer(chatId: number): enums.Peer {
  if (chatId > 0) {
    return new types.PeerUser({ user_id: BigInt(chatId) });
  } else if (chatId > ZERO_CHANNEL_ID) {
    return new types.PeerChat({ chat_id: BigInt(Math.abs(chatId)) });
  } else {
    return new types.PeerChannel({ channel_id: BigInt(ZERO_CHANNEL_ID - chatId) });
  }
}

export function chatIdToPeerId(chatId: number): bigint {
  const peer = chatIdToPeer(chatId);
  if ("user_id" in peer) {
    return peer.user_id;
  } else if ("chat_id" in peer) {
    return peer.chat_id;
  } else if ("channel_id" in peer) {
    return peer.channel_id;
  } else {
    unreachable();
  }
}

export function getChatIdPeerType(chatId: number): "user" | "chat" | "channel" {
  if (chatId > 0) {
    return "user";
  } else if (chatId > ZERO_CHANNEL_ID) {
    return "chat";
  } else {
    return "channel";
  }
}

export function inputPeerToPeer(inputPeer: enums.InputPeer): enums.Peer {
  if ("user_id" in inputPeer) {
    return new types.PeerUser(inputPeer);
  } else if ("chat_id" in inputPeer) {
    return new types.PeerChat(inputPeer);
  } else if ("channel_id" in inputPeer) {
    return new types.PeerChannel(inputPeer);
  } else {
    unreachable();
  }
}
