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

import { assertEquals, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { assertInstanceOf } from "../0_test_deps.ts";
import type { MessageEntity } from "../3_types.ts";
import { parseAttributes, parseHtml } from "./0_html.ts";

function e(fn: () => void, message: string) {
  try {
    fn();
    unreachable();
  } catch (err) {
    assertInstanceOf(err, InputError);
    assertEquals(err.message, message);
  }
}
function testCommonTag(t: string, type: "bold" | "italic" | "strikethrough" | "spoiler" | "underline" | "code" | "blockquote") {
  const T = t.toUpperCase();
  const text = "Hello, world!";
  const htmls = [
    `<${t}>${text}</${t}>`,
    `<${t} >${text}</${T}>`,
    `<${t} >${text}</ ${T} >`,
    `<${T}>${text}</${T}>`,
  ];
  const expected = ["Hello, world!", [{ type, offset: 0, length: text.length }]] satisfies [string, MessageEntity[]];
  for (const html of htmls) {
    assertEquals(parseHtml(html), expected);
  }
}

Deno.test("tag support", () => {
  e(() => parseHtml("<html></html>"), "Unsupported HTML tag at offset 1: html");

  parseHtml('<a href="https://example.org/"></a>');
  parseHtml("<b></b>");
  parseHtml("<strong></strong>");
  parseHtml("<i></i>");
  parseHtml("<em></em>");
  parseHtml("<s></s>");
  parseHtml("<strike></strike>");
  parseHtml("<del></del>");
  parseHtml("<u></u>");
  parseHtml("<ins></ins>");
  parseHtml("<tg-spoiler></tg-spoiler>");
  parseHtml('<tg-emoji emoji-id="1"></tg-emoji>');
  parseHtml('<span class="tg-spoiler"></span>');
  parseHtml("<pre></pre>");
  parseHtml("<code></code>");
  parseHtml("<blockquote></blockquote>");
});

Deno.test("common tags", () => {
  testCommonTag("b", "bold");
  testCommonTag("strong", "bold");
  testCommonTag("i", "italic");
  testCommonTag("em", "italic");
  testCommonTag("s", "strikethrough");
  testCommonTag("strike", "strikethrough");
  testCommonTag("del", "strikethrough");
  testCommonTag("u", "underline");
  testCommonTag("ins", "underline");
  testCommonTag("tg-spoiler", "spoiler"); // TODO: as span
  testCommonTag("code", "code");
  testCommonTag("blockquote", "blockquote");
});

Deno.test("parseAttributes", () => {
  const parseAttributes_ = (string: string) => parseAttributes(Array.from(string));

  assertEquals(parseAttributes_("a"), { a: "" });
  assertEquals(parseAttributes_("href=1"), { href: "1" });
  assertEquals(parseAttributes_("href='1'"), { href: "1" });
  assertEquals(parseAttributes_('href="https://example.org/"'), { href: "https://example.org/" });

  assertEquals(parseAttributes_('href="https://example.org/" valid='), { href: "https://example.org/", valid: "" });
});

Deno.test("invalid attributes", () => {
  e(() => parseHtml('<span class="spoiler"></span>'), "Invalid or missing attribute class for tag span at offset 1.");
  e(() => parseHtml('<span class=""></span>'), "Invalid or missing attribute class for tag span at offset 1.");
  e(() => parseHtml("<span></span>"), "Invalid or missing attribute class for tag span at offset 1.");

  e(() => parseHtml("<a href='very bad url'></a>"), "Invalid URL specified for tag a at offset 1.");
  e(() => parseHtml("<a href='ftp:localhost'></a>"), "Unsupported URL protocol at offset 1: ftp:");

  e(() => parseHtml('<a href="tg://user/?id=0"></a>'), "Invalid ID specified for mention at offset 1.");
  e(() => parseHtml('<a href="tg://user/"></a>'), "Invalid ID specified for mention at offset 1.");

  e(() => parseHtml('<tg-emoji emoji-id="abcdef"></tg-emoji>'), "Invalid emoji-id specified for tag tg-emoji at offset 1.");
  e(() => parseHtml('<tg-emoji emoji-id="0"></tg-emoji>'), "Invalid emoji-id specified for tag tg-emoji at offset 1.");
  e(() => parseHtml("<tg-emoji emoji-id></tg-emoji>"), "Invalid emoji-id specified for tag tg-emoji at offset 1.");
  e(() => parseHtml("<tg-emoji></tg-emoji>"), "Invalid emoji-id specified for tag tg-emoji at offset 1.");

  parseHtml('<a href="https://example.org/"></a>');
  parseHtml('<span class="tg-spoiler"></span>');
  parseHtml('<a href="tg://user/?id=1"></a>');
  parseHtml('<a href="tg://user?id=1"></a>');
  parseHtml('<tg-emoji emoji-id="1"></tg-emoji>');
  parseHtml('<a href="ton://host/"></a>');
});

Deno.test("entities", () => {
  assertEquals(parseHtml("&unsupported"), ["&unsupported", []]);
  assertEquals(parseHtml("&unsupported;"), ["&unsupported;", []]);
  assertEquals(parseHtml("&amp;"), ["&", []]);
  assertEquals(parseHtml("&quot;"), ['"', []]);
  assertEquals(parseHtml("&lt;"), ["<", []]);
  assertEquals(parseHtml("&gt;"), [">", []]);
  assertEquals(parseHtml("&unsupported &lt;"), ["&unsupported <", []]);
  assertEquals(parseHtml("&unsupported; &lt;&quot;"), ['&unsupported; <"', []]);
  assertEquals(parseHtml("&amp;quot;"), ["&quot;", []]);
  assertEquals(parseHtml("&#xyz;"), ["&#xyz;", []]);
  assertEquals(parseHtml("&#xyz; &#0; &x00;"), ["&#xyz; &#0; &x00;", []]);
  assertEquals(parseHtml("&#243;&#xf3;"), ["óó", []]);
});

Deno.test("td", () => {
  assertEquals(parseHtml(""), ["", []]);
  assertEquals(parseHtml("➡️ ➡️"), ["➡️ ➡️", []]);
  assertEquals(parseHtml("&ge;&lt;&gt;&amp;&quot;&laquo;&raquo;&#12345678;"), ['&ge;<>&"&laquo;&raquo;&#12345678;', []]);
  assertEquals(parseHtml("&Or;"), ["&Or;", []]);
  assertEquals(parseHtml("➡️ ➡️<i>➡️ ➡️</i>"), ["➡️ ➡️➡️ ➡️", [{ type: "italic", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<em>➡️ ➡️</em>"), ["➡️ ➡️➡️ ➡️", [{ type: "italic", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<b>➡️ ➡️</b>"), ["➡️ ➡️➡️ ➡️", [{ type: "bold", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<strong>➡️ ➡️</strong>"), ["➡️ ➡️➡️ ➡️", [{ type: "bold", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<u>➡️ ➡️</u>"), ["➡️ ➡️➡️ ➡️", [{ type: "underline", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<ins>➡️ ➡️</ins>"), ["➡️ ➡️➡️ ➡️", [{ type: "underline", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<s>➡️ ➡️</s>"), ["➡️ ➡️➡️ ➡️", [{ type: "strikethrough", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<strike>➡️ ➡️</strike>"), ["➡️ ➡️➡️ ➡️", [{ type: "strikethrough", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<del>➡️ ➡️</del>"), ["➡️ ➡️➡️ ➡️", [{ type: "strikethrough", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<blockquote>➡️ ➡️</blockquote>"), ["➡️ ➡️➡️ ➡️", [{ type: "blockquote", offset: 5, length: 5 }]]);
  assertEquals(parseHtml("➡️ ➡️<i>➡️ ➡️</i><b>➡️ ➡️</b>"), ["➡️ ➡️➡️ ➡️➡️ ➡️", [{ type: "italic", offset: 5, length: 5 }, { type: "bold", offset: 10, length: 5 }]]);
  assertEquals(parseHtml("🏟 🏟<i>🏟 &lt🏟</i>"), ["🏟 🏟🏟 <🏟", [{ type: "italic", offset: 5, length: 6 }]]);
  assertEquals(parseHtml("🏟 🏟<i>🏟 &gt;<b aba   =   caba>&lt🏟</b></i>"), ["🏟 🏟🏟 ><🏟", [{ type: "italic", offset: 5, length: 7 }, { type: "bold", offset: 9, length: 3 }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<i    aba  =  190azAz-.   >a</i>"), ["🏟 🏟<a", [{ type: "italic", offset: 6, length: 1 }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<i    aba  =  190azAz-.>a</i>"), ["🏟 🏟<a", [{ type: "italic", offset: 6, length: 1 }]]);
  assertEquals(parseHtml('🏟 🏟&lt;<i    aba  =  "&lt;&gt;&quot;">a</i>'), ["🏟 🏟<a", [{ type: "italic", offset: 6, length: 1 }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<i    aba  =  '&lt;&gt;&quot;'>a</i>"), ["🏟 🏟<a", [{ type: "italic", offset: 6, length: 1 }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<i    aba  =  '&lt;&gt;&quot;'>a</>"), ["🏟 🏟<a", [{ type: "italic", offset: 6, length: 1 }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<i>🏟 🏟&lt;</>"), ["🏟 🏟<🏟 🏟<", [{ type: "italic", offset: 6, length: 6 }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<i>a</    >"), ["🏟 🏟<a", [{ type: "italic", offset: 6, length: 1 }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<i>a</i   >"), ["🏟 🏟<a", [{ type: "italic", offset: 6, length: 1 }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<b></b>"), ["🏟 🏟<", []]);
  assertEquals(parseHtml("<i>\t</i>"), ["\t", [{ type: "italic", offset: 0, length: 1 }]]);
  assertEquals(parseHtml("<i>\r</i>"), ["\r", [{ type: "italic", offset: 0, length: 1 }]]);
  assertEquals(parseHtml("<i>\n</i>"), ["\n", [{ type: "italic", offset: 0, length: 1 }]]);
  assertEquals(parseHtml('➡️ ➡️<span class = "tg-spoiler">➡️ ➡️</span><b>➡️ ➡️</b>'), ["➡️ ➡️➡️ ➡️➡️ ➡️", [{ type: "spoiler", offset: 5, length: 5 }, { type: "bold", offset: 10, length: 5 }]]);
  assertEquals(parseHtml('🏟 🏟<span class="tg-spoiler">🏟 &lt🏟</span>'), ["🏟 🏟🏟 <🏟", [{ type: "spoiler", offset: 5, length: 6 }]]);
  assertEquals(parseHtml('🏟 🏟<span class="tg-spoiler">🏟 &gt;<b aba   =   caba>&lt🏟</b></span>'), ["🏟 🏟🏟 ><🏟", [{ type: "spoiler", offset: 5, length: 7 }, { type: "bold", offset: 9, length: 3 }]]);
  assertEquals(parseHtml("➡️ ➡️<tg-spoiler>➡️ ➡️</tg-spoiler><b>➡️ ➡️</b>"), ["➡️ ➡️➡️ ➡️➡️ ➡️", [{ type: "spoiler", offset: 5, length: 5 }, { type: "bold", offset: 10, length: 5 }]]);
  assertEquals(parseHtml("🏟 🏟<tg-spoiler>🏟 &lt🏟</tg-spoiler>"), ["🏟 🏟🏟 <🏟", [{ type: "spoiler", offset: 5, length: 6 }]]);
  assertEquals(parseHtml("🏟 🏟<tg-spoiler>🏟 &gt;<b aba   =   caba>&lt🏟</b></tg-spoiler>"), ["🏟 🏟🏟 ><🏟", [{ type: "spoiler", offset: 5, length: 7 }, { type: "bold", offset: 9, length: 3 }]]);
  assertEquals(parseHtml("<a href=telegram.org>\t</a>"), ["\t", [{ type: "textLink", offset: 0, length: 1, url: "http://telegram.org/" }]]);
  assertEquals(parseHtml("<a href=telegram.org>\r</a>"), ["\r", [{ type: "textLink", offset: 0, length: 1, url: "http://telegram.org/" }]]);
  assertEquals(parseHtml("<a href=telegram.org>\n</a>"), ["\n", [{ type: "textLink", offset: 0, length: 1, url: "http://telegram.org/" }]]);
  assertEquals(parseHtml("<code><i><b> </b></i></code><i><b><code> </code></b></i>"), ["  ", [{ type: "code", offset: 0, length: 1 }, { type: "bold", offset: 0, length: 1 }, { type: "italic", offset: 0, length: 1 }, { type: "code", offset: 1, length: 1 }, { type: "bold", offset: 1, length: 1 }, { type: "italic", offset: 1, length: 1 }]]);
  assertEquals(parseHtml("<i><b> </b> <code> </code></i>"), ["   ", [{ type: "italic", offset: 0, length: 3 }, { type: "bold", offset: 0, length: 1 }, { type: "code", offset: 2, length: 1 }]]);
  assertEquals(parseHtml("<a href=telegram.org> </a>"), [" ", [{ type: "textLink", offset: 0, length: 1, url: "http://telegram.org/" }]]);
  assertEquals(parseHtml('<a href  ="telegram.org"   > </a>'), [" ", [{ type: "textLink", offset: 0, length: 1, url: "http://telegram.org/" }]]);
  assertEquals(parseHtml("<a   href=  'telegram.org'   > </a>"), [" ", [{ type: "textLink", offset: 0, length: 1, url: "http://telegram.org/" }]]);
  assertEquals(parseHtml("<a   href=  'telegram.org?&lt;'   > </a>"), [" ", [{ type: "textLink", offset: 0, length: 1, url: "http://telegram.org/?%3C" }]]);
  assertEquals(parseHtml("<a> </a>"), [" ", []]);
  assertEquals(parseHtml("<a>telegram.org </a>"), ["telegram.org ", []]);
  assertEquals(parseHtml("<a>telegram.org</a>"), ["telegram.org", [{ type: "textLink", offset: 0, length: 12, url: "http://telegram.org/" }]]);
  assertEquals(parseHtml("<a>https://telegram.org/asdsa?asdasdwe#12e3we</a>"), ["https://telegram.org/asdsa?asdasdwe#12e3we", [{ type: "textLink", offset: 0, length: 42, url: "https://telegram.org/asdsa?asdasdwe#12e3we" }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<pre  >🏟 🏟&lt;</>"), ["🏟 🏟<🏟 🏟<", [{ type: "pre", offset: 6, length: 6, language: "" }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<code >🏟 🏟&lt;</>"), ["🏟 🏟<🏟 🏟<", [{ type: "code", offset: 6, length: 6 }]]);
  assertEquals(parseHtml("🏟 🏟&lt;<pre><code>🏟 🏟&lt;</code></>"), ["🏟 🏟<🏟 🏟<", [{ type: "pre", offset: 6, length: 6, language: "" }, { type: "code", offset: 6, length: 6 }]]);
  assertEquals(parseHtml('🏟 🏟&lt;<pre><code class="language-">🏟 🏟&lt;</code></>'), ["🏟 🏟<🏟 🏟<", [{ type: "pre", offset: 6, length: 6, language: "" }, { type: "code", offset: 6, length: 6 }]]);
  assertEquals(parseHtml('🏟 🏟&lt;<pre><code class="language-fift">🏟 🏟&lt;</></>'), ["🏟 🏟<🏟 🏟<", [{ type: "pre", offset: 6, length: 6, language: "fift" }]]);
  assertEquals(parseHtml('🏟 🏟&lt;<code class="language-fift"><pre>🏟 🏟&lt;</></>'), ["🏟 🏟<🏟 🏟<", [{ type: "pre", offset: 6, length: 6, language: "fift" }]]);
  assertEquals(parseHtml('🏟 🏟&lt;<pre><code class="language-fift">🏟 🏟&lt;</> </>'), ["🏟 🏟<🏟 🏟< ", [{ type: "pre", offset: 6, length: 7, language: "" }, { type: "code", offset: 6, length: 6 }]]);
  assertEquals(parseHtml('🏟 🏟&lt;<pre> <code class="language-fift">🏟 🏟&lt;</></>'), ["🏟 🏟< 🏟 🏟<", [{ type: "pre", offset: 6, length: 7, language: "" }, { type: "code", offset: 7, length: 6 }]]);
  assertEquals(parseHtml('➡️ ➡️<tg-emoji emoji-id = "12345">➡️ ➡️</tg-emoji><b>➡️ ➡️</b>'), ["➡️ ➡️➡️ ➡️➡️ ➡️", [{ type: "customEmoji", offset: 5, length: 5, customEmojiId: "12345" }, { type: "bold", offset: 10, length: 5 }]]);
  assertEquals(parseHtml('🏟 🏟<tg-emoji emoji-id="54321">🏟 &lt🏟</tg-emoji>'), ["🏟 🏟🏟 <🏟", [{ type: "customEmoji", offset: 5, length: 6, customEmojiId: "54321" }]]);
  assertEquals(parseHtml('🏟 🏟<b aba   =   caba><tg-emoji emoji-id="1">🏟</tg-emoji>1</b>'), ["🏟 🏟🏟1", [{ type: "bold", offset: 5, length: 3 }, { type: "customEmoji", offset: 5, length: 2, customEmojiId: "1" }]]);
  assertEquals(parseHtml('<blockquote   cite="" askdlbas nasjdbaj nj12b3>a&lt;<pre  >b;</></>'), ["a<b;", [{ type: "blockquote", offset: 0, length: 4 }, { type: "pre", offset: 2, length: 2, language: "" }]]);
  assertEquals(parseHtml("<blockquote   expandable>a&lt;<pre  >b;</></>"), ["a<b;", [{ type: "blockquote", offset: 0, length: 4, collapsible: true }, { type: "pre", offset: 2, length: 2, language: "" }]]);
  assertEquals(parseHtml("<blockquote   expandable   asd>a&lt;<pre  >b;</></>"), ["a<b;", [{ type: "blockquote", offset: 0, length: 4, collapsible: true }, { type: "pre", offset: 2, length: 2, language: "" }]]);
  assertEquals(parseHtml("<blockquote   expandable=false>a&lt;<pre  >b;</></>"), ["a<b;", [{ type: "blockquote", offset: 0, length: 4, collapsible: true }, { type: "pre", offset: 2, length: 2, language: "" }]]);
});
