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

import { CallbackQuery, ChosenInlineResult, MessageTypes, UpdateIntersection, UpdateMap } from "../3_types.ts";

type AnyLevel1 = keyof UpdateMap;
type GetLevel1Type<L1 extends AnyLevel1> = UpdateMap[L1];

interface Level2Map {
  "message": keyof MessageTypes;
  "editedMessage": keyof MessageTypes;
  "callbackQuery": "message" | "inlineMessageId" | "data" | "gameShortName";
  "chosenInlineResult": "inlineMessageId";
}

interface Level2TypeMap {
  "callbackQuery": CallbackQuery;
  "chosenInlineResult": ChosenInlineResult;
}

type GetAnyLevel2<L1 extends AnyLevel1> = L1 extends keyof Level2Map ? Level2Map[L1] : never;
type AnyLevel2<L1 extends AnyLevel1 = AnyLevel1> = L1 extends unknown ? `${L1 extends "message" | "editedMessage" ? L1 | "" : L1}:${GetAnyLevel2<L1>}`
  : never;
type GetLevel2Type<L1 extends string, L2 extends string> = L2 extends keyof MessageTypes ? L1 extends "" ? { [P in "message" | "editedMessage"]?: MessageTypes[L2] } : L1 extends "message" | "editedMessage" ? { [P in L1]: MessageTypes[L2] } : never
  : L1 extends keyof Level2TypeMap ? L2 extends Level2Map[L1] ? { [P in L1]: Level2TypeMap[P] & { [P in L2]-?: P extends keyof Level2TypeMap[L1] ? NonNullable<Level2TypeMap[L1][P]> : never } } : never
  : never;

type AnyLevelX = AnyLevel1 | AnyLevel2;

type FilterCore<Q extends AnyLevelX = AnyLevelX> = Q extends AnyLevel1 ? GetLevel1Type<Q> : Q extends `${infer L1}:${infer L2}` ? GetLevel2Type<L1, L2> : 1;

interface Shortcuts<T extends UpdateIntersection> {
  msg: T["message"] extends object ? T["message"]
    : T["editedMessage"] extends object ? T["editedMessage"]
    : T["callbackQuery"] extends object ? T["callbackQuery"]["message"]
    : undefined;
  chat: T["callbackQuery"] extends object ? NonNullable<T["callbackQuery"]["message"]>["chat"] | undefined
    : Shortcuts<T>["msg"] extends object ? Shortcuts<T>["msg"]["chat"]
    : T["messageReactions"] extends object ? T["messageReactions"]["chat"]
    : T["messageReactionCount"] extends object ? T["messageReactionCount"]["chat"]
    : T["myChatMember"] extends object ? T["myChatMember"]["chat"]
    : T["chatMember"] extends object ? T["chatMember"]["chat"]
    : undefined;
  from: T["callbackQuery"] extends object ? T["callbackQuery"]["from"]
    : T["inlineQuery"] extends object ? T["inlineQuery"]["from"]
    : T["chosenInlineResult"] extends object ? T["chosenInlineResult"]["from"]
    : T["message"] extends object ? T["message"]["from"]
    : T["editedMessage"] extends object ? T["editedMessage"]["from"]
    : T["preCheckoutQuery"] extends object ? T["preCheckoutQuery"]["from"]
    : undefined;
  senderChat: Shortcuts<T>["msg"] extends object ? Shortcuts<T>["msg"]["senderChat"] : undefined;
}

type Filter<Q extends AnyLevelX> = FilterCore<Q> & Shortcuts<FilterCore<Q>>;
export type FilterQuery = AnyLevelX;
export type WithFilter<T, Q extends FilterQuery> = T & Filter<Q>;

export function match<Q extends FilterQuery, T extends object>(filter: Q, value: T) {
  let [type, ...other] = filter.split(":");
  if (type != "" && !(type in value)) {
    return false;
  }
  if (type == "") {
    if (other.length != 1) {
      return false;
    }
    if ("message" in value) {
      type = "message";
    } else if ("editedMessage" in value) {
      type = "editedMessage";
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
