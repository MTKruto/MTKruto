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
import { MessageManager } from "./2_message_manager.ts";

Deno.test("parseText() trims trailing whitespaces", async (t) => {
  const code = `console.log("Hello, world!");`;
  const expected = [
    code,
    [
      { type: "pre", offset: 0, length: code.length, language: "typescript" },
    ] as MessageEntity[],
  ];

  await t.step("null", () => {
    const text = `${code}

`; // important blank line
    assertEquals(MessageManager.parseText(text, [{ type: "pre", offset: 0, length: text.length, language: "typescript" }], null), expected);
  });

  await t.step("HTML", () => {
    const text = `<pre language="typescript">
${code}

</pre>`; // important blank line
    assertEquals(MessageManager.parseText(text, [], "HTML"), expected);
  });

  await t.step("Markdown", () => {
    const text = `\`\`\`typescript
${code}

\`\`\``; // important blank line
    assertEquals(MessageManager.parseText(text, [], "Markdown"), expected);
  });
});
