import { path } from "../0_deps.ts";
import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";

export const resolve = () => Promise.resolve();

export type With<T, K extends keyof T> = T & Required<Pick<T, K>>;

export function isPtsUpdate(v: enums.Update | enums.Updates): v is
  | types.UpdateShortMessage
  | types.UpdateShortChatMessage
  | types.UpdateShortSentMessage
  | types.UpdateNewMessage
  | types.UpdateDeleteMessages
  | types.UpdateReadHistoryInbox
  | types.UpdateReadHistoryOutbox
  | types.UpdatePinnedChannelMessages
  | types.UpdatePinnedMessages
  | types.UpdateFolderPeers
  | types.UpdateChannelWebPage
  | types.UpdateEditMessage
  | types.UpdateReadMessagesContents
  | types.UpdateWebPage {
  return v instanceof types.UpdateShortMessage ||
    v instanceof types.UpdateShortChatMessage ||
    v instanceof types.UpdateShortSentMessage ||
    v instanceof types.UpdateNewMessage ||
    v instanceof types.UpdateDeleteMessages ||
    v instanceof types.UpdateReadHistoryInbox ||
    v instanceof types.UpdateReadHistoryOutbox ||
    v instanceof types.UpdatePinnedChannelMessages ||
    v instanceof types.UpdatePinnedMessages ||
    v instanceof types.UpdateFolderPeers ||
    v instanceof types.UpdateChannelWebPage ||
    v instanceof types.UpdateEditMessage ||
    v instanceof types.UpdateReadMessagesContents ||
    v instanceof types.UpdateWebPage;
}

export function isChannelPtsUpdate(v: enums.Update | enums.Updates): v is
  | types.UpdateNewChannelMessage
  | types.UpdateEditChannelMessage
  | types.UpdateDeleteChannelMessages {
  return v instanceof types.UpdateNewChannelMessage ||
    v instanceof types.UpdateEditChannelMessage ||
    v instanceof types.UpdateDeleteChannelMessages;
}

/**
 * Source to a file. Can be a file ID, a file path, URL, or a `Uint8Array`, unless otherwise noted.
 */
export type FileSource = string | URL | Uint8Array;

export async function getFileContents(source: FileSource, fileName = "") {
  fileName = fileName.trim() || "file";
  let contents: Uint8Array;
  if (source instanceof Uint8Array) {
    contents = source;
  } else {
    let url: string;
    try {
      url = new URL(source).toString();
    } catch {
      if (typeof source === "string") {
        let path_: string;
        if (path.isAbsolute(source)) {
          path_ = source;
        } else {
          // @ts-ignore: lib
          path_ = path.join(Deno.cwd(), source);
        }
        url = path.toFileUrl(path_).toString();
        fileName = path.basename(path_);
      } else {
        UNREACHABLE();
      }
    }
    const res = await fetch(url);
    if (fileName == "file") {
      const contentType = res.headers.get("content-type");
      if (contentType?.includes("image/png")) {
        fileName += ".png";
      } else if (contentType?.includes("image/jpeg")) {
        fileName += ".jpg";
      }
    }
    contents = await res.arrayBuffer().then((v) => new Uint8Array(v));
  }
  return [contents, fileName] as const;
}

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
const errInvalidUsername = (u: string) => new Error("Invalid username: " + u);
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
