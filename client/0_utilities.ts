import { path } from "../0_deps.ts";
import { UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";

export const resolve = () => Promise.resolve();

export type With<T, K extends keyof T> = T & Required<Pick<T, K>>;

export function isPtsUpdate(v: types.TypeUpdate | types.TypeUpdates): v is
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

export function isChannelPtsUpdate(v: types.TypeUpdate | types.TypeUpdates): v is
  | types.UpdateNewChannelMessage
  | types.UpdateEditChannelMessage
  | types.UpdateDeleteChannelMessages {
  return v instanceof types.UpdateNewChannelMessage ||
    v instanceof types.UpdateEditChannelMessage ||
    v instanceof types.UpdateDeleteChannelMessages;
}

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
