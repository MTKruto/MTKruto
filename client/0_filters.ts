import { ChatP, MessageTypes, UpdateMap, User } from "../3_types.ts";

type AnyLevel1 = keyof UpdateMap;
type GetLevel1Type<L1 extends AnyLevel1> = UpdateMap[L1];

interface Level2Map {
  "message": keyof MessageTypes;
  "editedMessage": keyof MessageTypes;
  "callbackQuery": "message" | "inlineMessageId" | "data" | "gameShortName";
  "chosenInlineResult": "inlineMessageId";
}

type GetAnyLevel2<L1 extends AnyLevel1> = L1 extends keyof Level2Map ? Level2Map[L1] : never;
type AnyLevel2<L1 extends AnyLevel1 = AnyLevel1> = L1 extends unknown ? `${L1 extends "message" | "editedMessage" ? L1 | "" : L1}:${GetAnyLevel2<L1>}`
  : never;
type GetLevel2Type<L1 extends string, L2 extends string> = L2 extends keyof MessageTypes ? L1 extends "" ? { [P in "message" | "editedMessage"]?: MessageTypes[L2] } : L1 extends "message" | "editedMessage" ? { [P in L1]: MessageTypes[L2] } : never : never;

type AnyLevelX = AnyLevel1 | AnyLevel2;

type FilterCore<Q extends AnyLevelX = AnyLevelX> = Q extends AnyLevel1 ? GetLevel1Type<Q> : Q extends `${infer L1}:${infer L2}` ? GetLevel2Type<L1, L2> : 1;

type Chat<T> = "msg" extends keyof T ? T & { chat: ChatP } : T;
type Msg<T> = "message" extends keyof T ? T & { msg: NonNullable<T["message"]> } : "editedMessage" extends keyof T ? T & { msg: NonNullable<T["editedMessage"]> } : "callbackQuery" extends keyof T ? "message" extends keyof T["callbackQuery"] ? T & { msg: T["callbackQuery"]["message"] } : T : T;
type From<T> = "callbackQuery" extends keyof T ? T & { from: User } : "inlineQuery" extends keyof T ? T & { from: User } : "message" extends keyof T ? T & { from?: User } : "editedMessage" extends keyof T ? T & { from?: User } : T;
type SenderChat<T> = "message" extends keyof T ? T & { senderChat?: ChatP } : "editedMessage" extends keyof T ? T & { senderChat?: ChatP } : T;
type Shortcuts<T> = SenderChat<From<Chat<Msg<T>>>>;

type Filter<Q extends AnyLevelX> = Shortcuts<FilterCore<Q>>;
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
