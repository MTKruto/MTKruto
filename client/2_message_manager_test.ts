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
