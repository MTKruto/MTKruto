/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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

import type { Api } from "../2_tl.ts";
import type { CallbackQuery, ChatP, ChosenInlineResult, Message, MessageTypes, Update, UpdateMap } from "../3_types.ts";

type AnyLevel1 = Update["type"];
type GetLevel1Type<L1 extends AnyLevel1> = UpdateMap[L1];

interface Level2Map {
  "message": keyof MessageTypes;
  "editedMessage": keyof MessageTypes;
  "scheduledMessage": keyof MessageTypes;
  "callbackQuery": "message" | "inlineMessageId" | "data" | "gameShortName";
  "chosenInlineResult": "inlineMessageId";
}

interface Level2TypeMap {
  "callbackQuery": CallbackQuery;
  "chosenInlineResult": ChosenInlineResult;
}

type GetAnyLevel2<L1 extends AnyLevel1> = L1 extends keyof Level2Map ? Level2Map[L1] : never;
type AnyLevel2<L1 extends AnyLevel1 = AnyLevel1> = L1 extends unknown ? `${L1 extends "message" | "editedMessage" | "scheduledMessage" ? L1 | "" : L1}:${GetAnyLevel2<L1>}`
  : never;
type GetLevel2Type<L1 extends string, L2 extends string> = L2 extends Message["type"] ? L1 extends "" ? (
      | { type: "message"; message: Extract<Message, { type: L2 }> }
      | { type: "editedMessage"; editedMessage: Extract<Message, { type: L2 }> }
      | { type: "scheduledMessage"; scheduledMessage: Extract<Message, { type: L2 }> }
    )
  : L1 extends "message" | "editedMessage" | "scheduledMessage" ? { type: L1 } & { [P in L1]: Extract<Message, { type: L2 }> }
  : never
  : L1 extends keyof Level2TypeMap ? L2 extends Level2Map[L1] ? { type: L1 } & { [P in L1]: Level2TypeMap[P] & { [P in L2]-?: P extends keyof Level2TypeMap[L1] ? NonNullable<Level2TypeMap[L1][P]> : never } } : never
  : false;

type AnyLevelX = AnyLevel1 | AnyLevel2 | Api.Update["_"];

type FilterCore<Q extends AnyLevelX = AnyLevelX> = Q extends AnyLevel1 ? GetLevel1Type<Q> : Q extends `${infer L1}:${infer L2}` ? GetLevel2Type<L1, L2> : Q extends Api.Update["_"] ? { type: "update"; update: Extract<Api.Update, { _: Q }> } : 1;

interface Shortcuts<T extends Update> {
  msg: T extends { type: "message" } ? T["message"]
    : T extends { type: "editedMessage" } ? T["editedMessage"]
    : T extends { type: "scheduledMessage" } ? T["scheduledMessage"]
    : T extends { type: "callbackQuery" } ? T["callbackQuery"]["message"]
    : T extends { type: "guestQuery" } ? T["guestQuery"]["message"]
    : undefined;
  chat: T extends { type: "callbackQuery" } ? NonNullable<T["callbackQuery"]["message"]>["chat"] | undefined
    : Shortcuts<T>["msg"] extends object ? Shortcuts<T>["msg"]["chat"]
    : T extends { type: "messageReactions" } ? T["messageReactions"]["chat"]
    : T extends { type: "messageReactionCount" } ? T["messageReactionCount"]["chat"]
    : T extends { type: "myChatMember" } ? T["myChatMember"]["chat"]
    : T extends { type: "chatMember" } ? T["chatMember"]["chat"]
    : T extends { type: "joinRequest" } ? T["joinRequest"]["chat"]
    : undefined;
  chatId: Shortcuts<T>["chat"] extends object ? number
    : T extends { type: "messageInteractions" } ? number
    : T extends { type: "deletedChat" } ? number
    : T extends { type: "botCommands" } ? number
    : T extends { type: "chatAction" } ? number
    : undefined;
  from: T extends { type: "callbackQuery" } ? T["callbackQuery"]["from"]
    : T extends { type: "inlineQuery" } ? T["inlineQuery"]["from"]
    : T extends { type: "chosenInlineResult" } ? T["chosenInlineResult"]["from"]
    : T extends { type: "message" } ? T["message"]["from"]
    : T extends { type: "editedMessage" } ? T["editedMessage"]["from"]
    : T extends { type: "scheduledMessage" } ? T["scheduledMessage"]["from"]
    : T extends { type: "preCheckoutQuery" } ? T["preCheckoutQuery"]["from"]
    : T extends { type: "joinRequest" } ? T["joinRequest"]["from"]
    : T extends { type: "pollAnswer" } ? T["pollAnswer"]["from"]
    : undefined;
  message: T extends { type: "message" } ? T["message"] : undefined;
  editedMessage: T extends { type: "editedMessage" } ? T["editedMessage"] : undefined;
  guestQuery: T extends { type: "guestQuery" } ? T["guestQuery"] : undefined;
  callbackQuery: T extends { type: "callbackQuery" } ? T["callbackQuery"] : undefined;
  inlineQuery: T extends { type: "inlineQuery" } ? T["inlineQuery"] : undefined;
  chosenInlineResult: T extends { type: "chosenInlineResult" } ? T["chosenInlineResult"] : undefined;
}
type GetShortcuts<T extends Update> = T["type"] extends "update" ? Record<string, never> : Shortcuts<T>;

type Filter<Q extends AnyLevelX> = { update: FilterCore<Q> } & GetShortcuts<FilterCore<Q>>;
export type FilterQuery = AnyLevelX;
export type WithFilter<T, Q extends FilterQuery> = T & Filter<Q>;

export function match<Q extends FilterQuery, T extends object>(filter: Q, value: T) {
  let [type, ...other] = filter.split(":");
  if (other.length === 0 && type !== "update" && "update" in value && (value.update as { _: unknown })._ === type) {
    return true;
  } else if (type !== "" && !(type in value)) {
    return false;
  }
  if (type === "") {
    if (other.length !== 1) {
      return false;
    }
    if ("message" in value) {
      type = "message";
    } else if ("editedMessage" in value) {
      type = "editedMessage";
    } else if ("scheduledMessage" in value) {
      type = "scheduledMessage";
    } else {
      return false;
    }
  }
  const field = other[0];
  if (field) {
    if (!(field in (value as Record<symbol | number | string, object>)[type])) {
      return false;
    }
  }
  return true;
}

type ChatType<T extends ChatP["type"]> = { chat: { type: T } };
export type WithChatType<C, T extends ChatP["type"]> = C & ChatType<T> & {
  msg?: ChatType<T>;
  message?: ChatType<T>;
  editedMessage?: ChatType<T>;
  callbackQuery?: { message?: ChatType<T> };
  update: { callbackQuery?: { message?: ChatType<T> }; message?: ChatType<T>; editedMessage?: ChatType<T>; scheduledMessage?: ChatType<T>; messageReactions?: ChatType<T>; messageReactionCount?: ChatType<T>; myChatMember?: ChatType<T>; chatMember?: ChatType<T>; joinRequest?: ChatType<T> };
};
