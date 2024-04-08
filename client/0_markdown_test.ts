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

import { assertEquals } from "../0_deps.ts";
import { MessageEntity } from "../3_types.ts";
import { parseMarkdown } from "./0_markdown.ts";

Deno.test("italic", () => {
  const text = "_Some italic text_";
  const expected = [
    "Some italic text",
    [
      { type: "italic", offset: 0, length: text.length - 2 },
    ],
  ];
  assertEquals(parseMarkdown(text), expected);
});

Deno.test("bold", () => {
  const text = "*Some bold text*";
  const expected = [
    "Some bold text",
    [
      { type: "bold", offset: 0, length: text.length - 2 },
    ],
  ];
  assertEquals(parseMarkdown(text), expected);
});

Deno.test("Nested entities", () => {
  const text = "_*Some bold text*_";
  const expected = [
    "Some bold text",
    [
      { type: "bold", offset: 0, length: text.length - 4 },
      { type: "italic", offset: 0, length: text.length - 4 },
    ],
  ];
  assertEquals(parseMarkdown(text), expected);
});

Deno.test("textLink", () => {
  const text = "[MTKruto](https://mtkru.to)";
  const expected = [
    "MTKruto",
    [
      { type: "textLink", offset: 0, length: "MTKruto".length, url: "https://mtkru.to/" },
    ] as MessageEntity[],
  ];
  assertEquals(parseMarkdown(text), expected);
});

Deno.test("textMention", () => {
  const text = "[User](tg://user?id=123)";
  const expected = [
    "User",
    [
      { type: "textMention", offset: 0, length: "User".length, userId: 123 },
    ] as MessageEntity[],
  ];
  assertEquals(parseMarkdown(text), expected);
});

Deno.test("code", () => {
  const text = "`mtkruto`";
  const expected = [
    "mtkruto",
    [
      { type: "code", offset: 0, length: "mtkruto".length },
    ],
  ];
  assertEquals(parseMarkdown(text), expected);
});

Deno.test("pre", () => {
  const code = `console.log("Hello, world!");\n`;
  const text = `\`\`\`typescript
${code}\`\`\``;
  const expected = [
    code,
    [
      { type: "pre", offset: 0, length: code.length, language: "typescript" },
    ] as MessageEntity[],
  ];
  assertEquals(parseMarkdown(text), expected);
});

Deno.test("customEmojiId", () => {
  const text = "![👍](tg://emoji?id=1234)";
  const expected = [
    "👍",
    [
      { type: "customEmoji", offset: 0, length: 2, customEmojiId: "1234" },
    ] as MessageEntity[],
  ];
  assertEquals(parseMarkdown(text), expected);
});

Deno.test("Ignore invalid user IDs", () => {
  const text = `[User](tg://user?idd=123)
[User](tgs://user?id=123)
[User](tg://user?id=)
[User](tg://userr?id=123)`;
  assertEquals(parseMarkdown(text)[1].filter((v) => v.type == "textMention"), []);
});

Deno.test("Ignore invalid URLs", () => {
  const text = `[Link](a)
[Link](a:b)`;
  assertEquals(parseMarkdown(text)[1], []);
});

Deno.test("Ignore unsupported URLs", () => {
  const text = "[Link](foo://bar)";
  assertEquals(parseMarkdown(text)[1], []);
});
