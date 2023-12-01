import { path } from "../0_deps.ts";
import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";

export const resolve = () => Promise.resolve();

export type With<T, K extends keyof T> = T & Required<Pick<T, K>>;

export function isPtsUpdate(v: enums.Update | enums.Updates): v is
  | types.updateShortMessage
  | types.updateShortChatMessage
  | types.updateShortSentMessage
  | types.updateNewMessage
  | types.updateDeleteMessages
  | types.updateReadHistoryInbox
  | types.updateReadHistoryOutbox
  | types.updatePinnedChannelMessages
  | types.updatePinnedMessages
  | types.updateFolderPeers
  | types.updateChannelWebPage
  | types.updateEditMessage
  | types.updateReadMessagesContents
  | types.updateWebPage {
  return v instanceof types.updateShortMessage ||
    v instanceof types.updateShortChatMessage ||
    v instanceof types.updateShortSentMessage ||
    v instanceof types.updateNewMessage ||
    v instanceof types.updateDeleteMessages ||
    v instanceof types.updateReadHistoryInbox ||
    v instanceof types.updateReadHistoryOutbox ||
    v instanceof types.updatePinnedChannelMessages ||
    v instanceof types.updatePinnedMessages ||
    v instanceof types.updateFolderPeers ||
    v instanceof types.updateChannelWebPage ||
    v instanceof types.updateEditMessage ||
    v instanceof types.updateReadMessagesContents ||
    v instanceof types.updateWebPage;
}

export function isChannelPtsUpdate(v: enums.Update | enums.Updates): v is
  | types.updateNewChannelMessage
  | types.updateEditChannelMessage
  | types.updateDeleteChannelMessages {
  return v instanceof types.updateNewChannelMessage ||
    v instanceof types.updateEditChannelMessage ||
    v instanceof types.updateDeleteChannelMessages;
}

/**
 * Source to a file. Can be a file ID, file path, URL, or `Uint8Array`.
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
