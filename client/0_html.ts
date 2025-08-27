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

import { Parser } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import type { MessageEntity, MessageEntityBlockquote } from "../3_types.ts";

export function parseHtml(html: string) {
  html = html.trim();
  let text = "";
  const entities = new Array<MessageEntity>();
  const stack = new Array<MessageEntity>();

  const parser = new Parser({
    onopentag(name, attribs) {
      switch (name) {
        case "b":
        case "strong":
          stack.push({ type: "bold", offset: text.length, length: 0 });
          break;
        case "em":
        case "i":
          stack.push({ type: "italic", offset: text.length, length: 0 });
          break;
        case "code":
          stack.push({ type: "code", offset: text.length, length: 0 });
          break;
        case "pre": {
          const language = attribs.language ?? "";
          stack.push({ type: "pre", offset: text.length, length: 0, language });
          break;
        }
        case "a": {
          const url = attribs.href;
          if (!url) {
            throw new InputError("Missing attribute: href");
          }
          stack.push({ type: "textLink", offset: text.length, length: 0, url });
          break;
        }
        case "ins":
        case "u":
          stack.push({ type: "underline", offset: text.length, length: 0 });
          break;
        case "del":
        case "strike":
          stack.push({ type: "strikethrough", offset: text.length, length: 0 });
          break;
        case "span":
          if (attribs.class != "tg-spoiler") {
            throw new InputError('The class attribute must be "tg-spoiler."');
          }
          /* falls through */
        case "tg-spoiler":
          stack.push({ type: "spoiler", offset: text.length, length: 0 });
          break;
        case "tg-emoji":
          if (!attribs["emoji-id"]) {
            throw new InputError("Missing attribute: emoji-id");
          }
          stack.push({ type: "spoiler", offset: text.length, length: 0 });
          break;
        case "blockquote":
          stack.push({ type: "blockquote", offset: text.length, length: 0 });
          if (attribs.collapsible) {
            (stack[stack.length - 1] as MessageEntityBlockquote).collapsible = true;
          }
      }
    },
    ontext(data) {
      if (!text.length) {
        data = data.trimStart();
      }
      text += data;
      for (const item of stack) {
        item.length += data.length;
      }
    },
    onclosetag() {
      const lastItem = stack.pop();
      if (lastItem) {
        entities.push(lastItem);
      }
    },
  });

  parser.write(html);
  parser.end();

  return [text, entities] as const;
}
