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

import { assertEquals } from "../0_deps.ts";
import { K } from "./0_storage_operations.ts";

Deno.test("key parts", () => {
  // session
  assertEquals(K.session.serverSalt(), ["session.serverSalt"]);

  // auth
  assertEquals(K.auth.dc(), ["auth.dc"]);
  assertEquals(K.auth.key(), ["auth.key"]);
  assertEquals(K.auth.accountType(), ["auth.accountType"]);

  // updates
  assertEquals(K.updates.state(), ["updates.state"]);
  assertEquals(K.updates.all(), ["updates.updates"]);
  assertEquals(K.updates.updates(123n), ["updates.updates", 123n]);
  assertEquals(K.updates.update(123n, 1n), ["updates.updates", 123n, 1n]);
  assertEquals(K.updates.channelPts(123n), ["updates.channelPts", 123n]);

  // cache
  assertEquals(K.cache.usernames(), ["cache.username"]);
  assertEquals(K.cache.username("MTKruto"), ["cache.username", "MTKruto"]);
  assertEquals(K.cache.peers(), ["cache.peers"]);
  assertEquals(K.cache.peer(123), ["cache.peers", 123]);
  assertEquals(K.cache.stickerSetNames(), ["cache.stickerSetNames"]);
  assertEquals(K.cache.stickerSetName(123n, 0n), ["cache.stickerSetNames", 123n, 0n]);
  assertEquals(K.cache.files(), ["cache.files"]);
  assertEquals(K.cache.file(123n), ["cache.files", 123n]);
  assertEquals(K.cache.fileParts(), ["cache.fileParts"]);
  assertEquals(K.cache.filePart(123n, 0), ["cache.fileParts", 123n, 0]);
  assertEquals(K.cache.customEmojiDocuments(), ["cache.customEmojiDocuments"]);
  assertEquals(K.cache.customEmojiDocument(123n), ["cache.customEmojiDocuments", 123n]);

  // messages
  assertEquals(K.messages.messages(123), ["messages.messages", 123]);
  assertEquals(K.messages.message(123, 1), ["messages.messages", 123, 1]);
  assertEquals(K.messages.allMessageRefs(), ["messages.messageRefs"]);
  assertEquals(K.messages.messageRef(1), ["messages.messageRefs", 1]);

  // chatlists
  assertEquals(K.chatlists.hasAllChats(0), ["chatlists.hasAllChats", 0]);
  assertEquals(K.chatlists.chats(0), ["chatlists.chats", 0]);
  assertEquals(K.chatlists.chat(0, 123), ["chatlists.chats", 0, 123]);
  assertEquals(K.chatlists.pinnedChats(0), ["chatlists.pinnedChats", 0]);
});
