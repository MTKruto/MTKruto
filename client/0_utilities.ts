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

import { unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { Api, repr as repr_ } from "../2_tl.ts";

export const resolve = () => Promise.resolve();

export function isHttpUrl(string: string) {
  try {
    return new URL(string).protocol.startsWith("http");
  } catch {
    return false;
  }
}

function isAlpha(string: string) {
  const c = string.charCodeAt(0) | 0x20;
  return "a".charCodeAt(0) <= c && c <= "z".charCodeAt(0);
}
function isDigit(string: string) {
  const c = string.charCodeAt(0);
  return "0".charCodeAt(0) <= c && c <= "9".charCodeAt(0);
}
const errInvalidUsername = (u: string) => new InputError(`Invalid username: ${u}`);
function validateUsername(string: string, ignoreAt = false) {
  string = string.trim();
  if (ignoreAt && string.startsWith("@")) {
    string = string.slice(1);
  }
  if (string.length == 0 || string.length > 32) {
    throw errInvalidUsername(string);
  }
  if (!isAlpha(string[0])) {
    throw errInvalidUsername(string);
  }
  for (const c of string) {
    if (!isAlpha(c) && !isDigit(c) && c != "_") {
      throw errInvalidUsername(string);
    }
  }
  if (string[string.length - 1] == "_") {
    throw errInvalidUsername(string);
  }
  for (let i = 1; i < string.length; ++i) {
    if (string[i - 1] == "_" && string[i] == "_") {
      throw errInvalidUsername(string);
    }
  }

  return string;
}
export function getUsername(string: string) {
  let url: URL | null = null;
  try {
    url = new URL(string);
  } catch {
    try {
      url = new URL("https://" + string);
    } catch {
      //
    }
  }
  if (url === null || (url.protocol != "http:" && url.protocol != "https:")) {
    return validateUsername(string, true);
  }
  if (url.hostname != "telegram.dog" && url.hostname != "telegram.me" && url.hostname != "t.me" && !url.hostname.endsWith(".t.me")) {
    return validateUsername(string, true);
  }
  if (url.hostname == "telegram.dog" || url.hostname == "telegram.me" || url.hostname == "t.me") {
    return validateUsername(url.pathname.split("/")[1]);
  }
  const parts = url.hostname.split(".");
  if (parts.length != 3) {
    return validateUsername(string);
  }
  return validateUsername(parts[0]);
}

export function getChatListId(chatList: string) {
  switch (chatList) {
    case "main":
      return 0;
    case "archived":
      return 1;
    default:
      unreachable();
  }
}

export function checkMessageId(messageId: number) {
  if (typeof messageId !== "number" || isNaN(messageId) || messageId <= 0) {
    throw new InputError("Invalid message ID");
  }
  return messageId;
}

export function checkStoryId(storyId: number) {
  if (typeof storyId !== "number" || isNaN(storyId) || !storyId) {
    throw new InputError("Invalid story ID");
  }
  return storyId;
}

export function checkPollOption(option: string) {
  if (!option.trim()) {
    throw new InputError("Poll option must not be empty.");
  }
}

export function checkArray<T>(array: T[], check: (value: T) => void) {
  for (const item of array) {
    check(item);
  }
}

export function checkCallbackQueryId(id: string) {
  if (typeof id !== "string" || !id.trim()) {
    throw new InputError("Invalid callback query ID.");
  }
}

export function checkInlineQueryId(id: string) {
  if (typeof id !== "string" || !id.trim()) {
    throw new InputError("Invalid inline query ID.");
  }
}

const CDN_FUNCTIONS = [
  "upload.saveFilePart",
  "upload.getFile",
  "upload.saveBigFilePart",
  "upload.getWebFile",
  "upload.getCdnFile",
  "upload.reuploadCdnFile",
  "upload.getCdnFileHashes",
  "upload.getFileHashes",
] as (keyof Api.Functions)[];
export function isCdnFunction(value: unknown) {
  return Api.isOneOf(CDN_FUNCTIONS, value);
}

export function canBeInputUser(inputPeer: Api.InputPeer) {
  return Api.isOneOf(["inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], inputPeer);
}
export function toInputUser(inputPeer: Api.InputPeer) {
  let id: Api.InputUser;
  if (Api.is("inputPeerUser", inputPeer)) {
    id = { ...inputPeer, _: "inputUser" };
  } else if (Api.is("inputPeerUserFromMessage", inputPeer)) {
    id = { ...inputPeer, _: "inputUserFromMessage" };
  } else if (Api.is("inputPeerSelf", inputPeer)) {
    id = { _: "inputUserSelf" };
  } else {
    unreachable();
  }
  return id;
}

export function canBeInputChannel(inputPeer: Api.InputPeer) {
  return Api.isOneOf(["inputPeerChannel", "inputPeerChannelFromMessage"], inputPeer);
}
export function toInputChannel(inputPeer: Api.InputPeer) {
  let id: Api.InputChannel;
  if (Api.is("inputPeerChannel", inputPeer)) {
    id = { ...inputPeer, _: "inputChannel" };
  } else if (Api.is("inputPeerChannelFromMessage", inputPeer)) {
    id = { ...inputPeer, _: "inputChannelFromMessage" };
  } else {
    unreachable();
  }
  return id;
}

export function repr(value: unknown): string | null {
  if (Api.isGenericFunction(value) && "query" in value) {
    return `${repr_(value)}<${repr(value.query as Api.AnyFunction)}>`;
  } else {
    return repr_(value);
  }
}

export const UPLOAD_REQUEST_PER_CONNECTION = 2;

export const DOWNLOAD_POOL_SIZE = 1;
export const DOWNLOAD_REQUEST_PER_CONNECTION = 1;
