/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
// deno-lint-ignore-file no-explicit-any

import { gunzip } from "../1_utilities.ts";
import { AnyObject, AnyType, Enums, Functions, schema, Types } from "./1_telegram_api.ts";
import { TLReader } from "./1_tl_reader.ts";
import { TLWriter } from "./1_tl_writer.ts";
import { unreachable } from "../0_deps.ts";
import { ZERO_CHANNEL_ID } from "../1_utilities.ts";
import * as Api from "./1_telegram_api.ts";
import { as as as_, assertIsValidObject as assertIsValidObject_, is as is_, isOfEnum as isOfEnum_, isOneOf as isOneOf_, isValidObject as isValidObject_, mustGetReturnType as mustGetReturnType_ } from "./1_utilities.ts";

export * from "./1_telegram_api.ts";

export type DeserializedType = boolean | number | bigint | string | Uint8Array | AnyType | Array<DeserializedType>;

export async function deserializeType<T extends (keyof Types) | "X" | string>(name: T, bufferOrReader: TLReader | Uint8Array): Promise<T extends keyof Types ? Types[T] : DeserializedType> {
  const reader = bufferOrReader instanceof Uint8Array ? new TLReader(bufferOrReader) : bufferOrReader;
  const id = reader.readInt32(false);
  if (id == GZIP_PACKED) {
    const buffer = await gunzip(reader.readBytes());
    return await deserializeType(name, buffer);
  }
  reader.unreadInt32();
  return await reader.readType(name, schema);
}
export const GZIP_PACKED = 0x3072CFA1;
export const RPC_RESULT = 0xF35C6D01;

export function serializeObject(object: AnyObject): Uint8Array {
  return new TLWriter().writeObject(object, schema).buffer;
}

export function isValidObject(object: any): object is AnyType {
  return isValidObject_(object, schema);
}
export function assertIsValidObject(object: any): asserts object is AnyType {
  return assertIsValidObject_(object, schema);
}

export function is<S extends keyof (Types & Functions)>(name: S, value: unknown): value is S extends keyof Types ? Types[S] : S extends keyof Functions ? Functions[S] : never {
  return is_(name, value, schema);
}
export function isOneOf<S extends keyof (Types & Functions)>(names: S[] | readonly S[], value: unknown): value is S extends keyof Types ? Types[S] : S extends keyof Functions ? Functions[S] : never {
  return isOneOf_(names as S[], value, schema);
}
export function isOfEnum<S extends keyof Enums>(name: S, value: unknown): value is Enums[S] {
  return isOfEnum_(name, value, schema);
}
export function as<S extends keyof Types>(name: S, value: unknown): Types[S] {
  return as_(name, value, schema) as Types[S];
}

export function mustGetReturnType(name: string): string {
  return mustGetReturnType_(name, schema);
}

const GENERIC_FUNCTIONS = [
  "invokeAfterMsg",
  "invokeAfterMsgs",
  "initConnection",
  "invokeWithLayer",
  "invokeWithoutUpdates",
  "invokeWithMessagesRange",
  "invokeWithTakeout",
] as const;
export function isGenericFunction(value: unknown): boolean {
  return isOneOf(GENERIC_FUNCTIONS, value);
}

export function getChannelChatId(channelId: bigint): number {
  return ZERO_CHANNEL_ID + -Number(channelId);
}

// convenience types
export type AnyEntity = Api.user | Api.channel | Api.channelForbidden | Api.chat | Api.chatForbidden;

export type InputPeerWithIdentifier = Api.inputPeerChat | Api.inputPeerUser | Api.inputPeerChannel | Api.inputPeerUserFromMessage | Api.inputPeerChannelFromMessage;

export type IdentifierContainer = { user_id: bigint } | { chat_id: bigint } | { channel_id: bigint };

export function peerToChatId(peer: AnyEntity | InputPeerWithIdentifier | Api.Peer | IdentifierContainer): number {
  if (isOneOf(["peerUser", "inputPeerUser", "inputPeerUserFromMessage", "user", "userFull"], peer) || "user_id" in peer) {
    return Number("user_id" in peer ? peer.user_id : peer.id);
  } else if ("chat_id" in peer || isOneOf(["peerChat", "inputPeerChat", "chat", "chatForbidden", "chatFull"], peer)) {
    return -Number("chat_id" in peer ? peer.chat_id : peer.id);
  } else if ("channel_id" in peer || isOneOf(["peerChannel", "inputPeerChannel", "inputPeerChannelFromMessage", "channel", "channelForbidden", "channelFull"], peer)) {
    return getChannelChatId("channel_id" in peer ? peer.channel_id : peer.id);
  } else {
    unreachable();
  }
}

export function chatIdToPeer(chatId: number): Api.Peer {
  if (chatId > 0) {
    return { _: "peerUser", user_id: BigInt(chatId) };
  } else if (chatId > ZERO_CHANNEL_ID) {
    return { _: "peerChat", chat_id: BigInt(Math.abs(chatId)) };
  } else {
    return { _: "peerChannel", channel_id: BigInt(ZERO_CHANNEL_ID - chatId) };
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

export function inputPeerToPeer(inputPeer: Api.InputPeer): Api.Peer {
  if ("user_id" in inputPeer) {
    return { ...inputPeer, _: "peerUser" };
  } else if ("chat_id" in inputPeer) {
    return { ...inputPeer, _: "peerChat" };
  } else if ("channel_id" in inputPeer) {
    return { ...inputPeer, _: "peerChannel" };
  } else {
    unreachable();
  }
}
