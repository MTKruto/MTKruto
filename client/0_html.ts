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

import { InputError } from "../0_errors.ts";
import type { MessageEntity, MessageEntityBlockquote } from "../3_types.ts";

const TAG_NAMES: string[] = [
  "a",
  "b",
  "strong",
  "i",
  "em",
  "s",
  "strike",
  "del",
  "u",
  "ins",
  "tg-spoiler",
  "tg-emoji",
  "span",
  "pre",
  "code",
  "blockquote",
];
const ENTITY_TYPES = [
  "textLink",
  "bold",
  "bold",
  "italic",
  "italic",
  "strikethrough",
  "strikethrough",
  "strikethrough",
  "underline",
  "underline",
  "spoiler",
  "customEmoji",
  "spoiler",
  "code",
  "code",
  "blockquote",
] satisfies MessageEntity["type"][];

export function parseHtml(html_: string): [string, MessageEntity[]] {
  html_ = html_.trim();
  let text = "";

  interface TagInfo {
    tagName: string;
    openedAt: number;
    url?: string;
    language?: string;
    userId?: number;
    collapsible?: true;
    customEmojiId?: string;
  }

  let entities = new Array<MessageEntity>();
  const entityTags = new Array<TagInfo>();

  const tagStack = new Array<TagInfo>();
  const html = Array.from(html_);
  for (let i = 0; i < html.length; ++i) {
    const c = html[i];
    if (c === "&") {
      const result = decodeEntity(html, i);
      [text, i] = [text + result[0], i + result[1]];
      continue;
    } else if (c !== "<") {
      text += c;
      continue;
    }
    ++i;
    let closing = false;
    let end = i;
    if (html[end] && html[end] === "/") {
      closing = true;
      ++i;
      ++end;
    }
    while (html[end] && html[end] !== ">") {
      ++end;
    }
    const tagName_ = html.slice(i, end);
    let tagName = tagName_.join("");
    let attributes: Record<string, string> | undefined;
    if (closing) {
      tagName = tagName.trim().toLowerCase();
    } else {
      const index = tagName_.indexOf(" ");
      if (index !== -1) {
        attributes = parseAttributes(tagName_.slice(index));
        tagName = tagName.slice(0, index).toLowerCase();
      } else {
        tagName = tagName.toLowerCase();
      }
    }
    if (closing && !tagName.length && tagStack.length) {
      tagName = tagStack[tagStack.length - 1].tagName;
    }
    if (!tagName.length) {
      throw new InputError(`Invalid tag at offset ${i}.`);
    } else if (!TAG_NAMES.includes(tagName)) {
      throw new InputError(`Unsupported HTML tag at offset ${i}: ${tagName}`);
    } else if (closing) {
      const openTag = tagStack.pop();
      if (openTag?.tagName !== tagName) {
        throw new InputError(`Unexpected closing tag at offset ${i}.`);
      }
      const offset = openTag.openedAt;
      const length = text.length - openTag.openedAt;
      if (tagName === "a") {
        let url = openTag.url;
        if (!url) {
          const text_ = text.slice(offset, offset + length);
          try {
            url = new URL(text_).href;
          } catch {
            if (!Array.from(text).some(isSpace)) {
              try {
                url = new URL(`http://${text_}`).href;
              } catch {
                //
              }
            }
          }
        }
        if (url) {
          entities.push({
            type: "textLink",
            offset,
            length,
            url,
          });
          entityTags.push(openTag);
        }
      } else if (tagName === "pre") {
        const lastEntity = entities[entities.length - 1];
        const entityTag = entityTags[entityTags.length - 1];
        if (lastEntity && lastEntity.type === "code" && lastEntity.offset === offset && lastEntity.length === length && entityTag.language) {
          entities[entities.length - 1] = {
            type: "pre",
            offset: lastEntity.offset,
            length: lastEntity.length,
            language: entityTag.language,
          };
        } else {
          entities.push({
            type: "pre",
            offset,
            length,
            language: "",
          });
          entityTags.push(openTag);
        }
      } else if (tagName === "code") {
        const lastEntity = entities[entities.length - 1];
        if (lastEntity && lastEntity.type === "pre" && lastEntity.offset === offset && lastEntity.length === length && openTag.language) {
          lastEntity.language = openTag.language;
        } else {
          entities.push({
            type: "code",
            offset,
            length,
          });
          entityTags.push(openTag);
        }
      } else if (openTag.userId !== undefined) {
        entities.push({
          type: "textMention",
          offset,
          length,
          userId: openTag.userId,
        });
        entityTags.push(openTag);
      } else if (tagName === "blockquote") {
        const entity: MessageEntityBlockquote = {
          type: "blockquote",
          offset,
          length,
        };
        if (openTag.collapsible) {
          entity.collapsible = true;
        }
        entities.push(entity);
        entityTags.push(openTag);
        if (openTag.collapsible) {
          (entities[entities.length - 1] as MessageEntityBlockquote).collapsible = true;
        }
      } else if (openTag.customEmojiId !== undefined) {
        entities.push({
          type: "customEmoji",
          offset,
          length,
          customEmojiId: openTag.customEmojiId,
        });
        entityTags.push(openTag);
      } else {
        entities.push({
          type: ENTITY_TYPES[TAG_NAMES.indexOf(openTag.tagName)] as "bold" | "italic" | "strikethrough" | "underline" | "spoiler" | "code",
          offset,
          length,
        });
        entityTags.push(openTag);
      }
    } else if (tagName === "span" && attributes?.class !== "tg-spoiler") {
      throw new InputError(`Invalid or missing attribute class for tag span at offset ${i}.`);
    } else {
      let url: string | undefined;
      let language: string | undefined;
      let userId: number | undefined;
      let collapsible: true | undefined;
      let customEmojiId: string | undefined;
      if (tagName === "a") {
        url = attributes?.href;
        if (url) {
          let url_: URL;
          try {
            url_ = new URL(url);
          } catch {
            try {
              url_ = new URL(`http://${url}`);
              url = url_.href;
            } catch {
              throw new InputError(`Invalid URL specified for tag a at offset ${i}.`);
            }
          }
          if (url_.protocol !== "tg:" && url_.protocol !== "ton:" && url_.protocol !== "http:" && url_.protocol !== "https:") {
            throw new InputError(`Unsupported URL protocol at offset ${i}: ${url_.protocol}`);
          }
          if (url_.protocol === "tg:" && url_.hostname === "user") {
            const id = Number(url_.searchParams.get("id"));
            if (!isNaN(id) && id > 0) {
              userId = id;
              url = undefined;
            } else {
              throw new InputError(`Invalid ID specified for mention at offset ${i}.`);
            }
          }
        }
      } else if (tagName === "code") {
        language = attributes?.class?.replace("language-", "");
      } else if (tagName === "blockquote" && attributes?.expandable !== undefined) {
        collapsible = true;
      } else if (tagName === "tg-emoji") {
        customEmojiId = attributes?.["emoji-id"];
        let valid: boolean;
        try {
          valid = BigInt(customEmojiId ?? "") !== 0n;
        } catch {
          valid = false;
        }
        if (!valid) {
          throw new InputError(`Invalid emoji-id specified for tag tg-emoji at offset ${i}.`);
        }
      }
      tagStack.push({ tagName, openedAt: text.length, url, language, userId, collapsible, customEmojiId });
    }
    i += end - i;
  }

  entities = entities.filter((v) => v.length);
  entities = sortEntities(entities);
  return [text, entities];
}
export function parseAttributes(attributes: string[]): Record<string, string> {
  const parsed: Record<string, string> = {};
  for (let i = 0; i < attributes.length; ++i) {
    const c = attributes[i];
    if (isSpace(c)) {
      continue;
    }
    let end = i;
    while (attributes[end] && !isSpace(attributes[end]) && attributes[end] !== "=") {
      ++end;
    }
    const name = attributes.slice(i, end);
    while (attributes[end] && isSpace(attributes[end])) {
      ++end;
    }

    let value = new Array<string>();
    if (attributes[end] === "=") {
      ++end;
      while (attributes[end] && isSpace(attributes[end])) {
        ++end;
      }
      if (attributes[end]) {
        const isQuote = attributes[end] === '"' || attributes[end] === "'";
        if (!isQuote) {
          const valueStart = end;
          ++end;
          while (attributes[end] && !isSpace(attributes[end])) {
            ++end;
          }
          value = attributes.slice(valueStart, end);
        } else {
          const quote = attributes[end];
          ++end;
          const valueStart = end;
          while (attributes[end] && attributes[end] !== quote) {
            ++end;
          }
          value = attributes.slice(valueStart, end);
        }
      }
    }

    let value_ = "";
    for (let i = 0; i < value.length; ++i) {
      const c = value[i];
      if (c === "&") {
        const result = decodeEntity(value, i);
        [value_, i] = [value_ + result[0], i + result[1]];
      } else {
        value_ += c;
      }
    }
    parsed[name.join("")] = value_;
    i += end - i;
  }
  return parsed;
}

function decodeEntity(html: string[], i: number): [string, number] {
  let text = "";
  let end = i + 1;
  let fallback = false;
  if (html[end] === "#") {
    ++end;

    let code: number;
    if (html[end] === "x") {
      ++end;
      while (isHex(html[end])) {
        ++end;
      }
      const hex = html.slice(i + 3, end).join("");
      code = parseInt(hex, 16);
    } else {
      while (isDigit(html[end])) {
        ++end;
      }
      const code_ = html.slice(i + 2, end).join("");
      code = parseInt(code_);
    }
    if (!isNaN(code) && code !== 0 && code < 0x10ffff && end - i < 10) {
      text = String.fromCharCode(code);
    } else {
      fallback = true;
    }
  } else {
    while (isAlpha(html[end])) {
      ++end;
    }
    const name = html.slice(i + 1, end).join("");
    switch (name) {
      case "amp":
        text = "&";
        break;
      case "quot":
        text = '"';
        break;
      case "lt":
        text = "<";
        break;
      case "gt":
        text = ">";
        break;
      default:
        fallback = true;
    }
  }
  if (html[end] === ";") {
    ++end;
  }
  if (fallback) {
    text = html.slice(i, end).join("");
  }
  return [text, end - i - 1];
}

function isAlpha(string: string) {
  return "a" <= string && string <= "z";
}
function isDigit(string: string) {
  return "0" <= string && string <= "9";
}
function isHex(string: string) {
  return isDigit(string) || ("a" <= string && string <= "f");
}
function isSpace(string: string) {
  return string === " " || string === "\t" || string === "\r" || string === "\n" || string === "\0" || string === "\v";
}

function sortEntities(entities: MessageEntity[]) {
  return entities.sort(({ offset, type, length }, other) => {
    if (offset !== other.offset) {
      return offset < other.offset ? -1 : 1;
    }
    if (length !== other.length) {
      return length > other.length ? -1 : 1;
    }
    const priority = ENTITY_TYPE_PRIORITIES[type];
    const otherPriority = ENTITY_TYPE_PRIORITIES[other.type];
    return priority < otherPriority ? -1 : 1;
  });
}
const ENTITY_TYPE_PRIORITIES: Record<MessageEntity["type"], number> = {
  "mention": 50,
  "hashtag": 50,
  "botCommand": 50,
  "url": 50,
  "email": 50,
  "bold": 90,
  "italic": 91,
  "code": 20,
  "pre": 11,
  "textLink": 49,
  "textMention": 49,
  "cashtag": 50,
  "phoneNumber": 50,
  "underline": 92,
  "strikethrough": 93,
  "blockquote": 0,
  "bankCard": 50,
  "spoiler": 94,
  "customEmoji": 99,
};
