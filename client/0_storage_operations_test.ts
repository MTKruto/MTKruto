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
import { type StorageKeyPart, StorageLocalStorage } from "../2_storage.ts";
import { K, StorageOperations } from "./0_storage_operations.ts";

Deno.test("key parts", () => {
  // session
  assertEquals(K.session.serverSalt(), ["session.serverSalt"]);

  // updates
  assertEquals(K.updates.state(), ["updates.state"]);
  assertEquals(K.updates.all(), ["updates.updates"]);
  assertEquals(K.updates.updates(123n), ["updates.updates", 123n]);
  assertEquals(K.updates.update(123n, 1n), ["updates.updates", 123n, 1n]);

  // cache
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
});

Deno.test("clear", async () => {
  localStorage.clear();
  const storage_ = new StorageLocalStorage("test");
  const storage = new StorageOperations(storage_);

  function keys() {
    return Array.from(storage_.getMany({ prefix: [] }).map((v) => v[0]));
  }
  function assertKeysEqual() {
    const a = keys().sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
    const e = expectedKeys.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
    assertEquals(a, e);
  }
  function push(key: StorageKeyPart[]) {
    expectedKeys.push(key);
    assertKeysEqual();
  }

  const expectedKeys = new Array<StorageKeyPart[]>();
  assertKeysEqual();

  await storage.setState({ _: "updates.state", date: 0, pts: 0, qts: 0, seq: 0, unread_count: 0 });
  push(K.updates.state());

  await storage.auth.set({ apiId: 1, authKey: new Uint8Array(), dc: "2", isBot: true, userId: 1 });

  await storage.commit(true);
  push(["auth"]);

  const chatId = 1;
  const messageIds = new Array<number>();
  const MESSAGE_COUNT = 100;
  for (let i = 1; i < MESSAGE_COUNT + 1; ++i) {
    messageIds.push(i);
    await storage.setMessage(chatId, i, { _: "messageEmpty", id: i });
    expectedKeys.push(K.messages.messageRef(i));
    push(K.messages.message(chatId, i));
  }

  // await storage.setMessage()
});
