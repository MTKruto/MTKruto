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

/**
 * Copyright (C) 2023 Dunkan
 */

import { unreachable } from "../0_deps.ts";
import { MessageEntity, MessageEntityType, sortMessageEntities } from "../3_types.ts";
import { InputError } from "../0_errors.ts";

const enc = new TextEncoder();
const dec = new TextDecoder();

export const CODEPOINTS = {
  "\t": 9,
  "\r": 13,
  "\0": 0,
  "\v": 11,
  "\n": 10,
  " ": 32,
  "_": 95,
  "[": 91,
  "]": 93,
  "(": 40,
  ")": 41,
  "`": 96,
  "~": 126,
  "\\": 92,
  "*": 42,
  "!": 33,
  "|": 124,
};

function isUtf8CharacterFirstCodeUnit(c: number): boolean {
  return (c & 0xC0) !== 0x80;
}
function isWhitespace(codepoint: number): boolean {
  return (codepoint === CODEPOINTS[" "] || codepoint === CODEPOINTS["\t"] || codepoint === CODEPOINTS["\r"] ||
    codepoint === CODEPOINTS["\n"] || codepoint === CODEPOINTS["\0"] || codepoint === CODEPOINTS["\v"]);
}

function getUrl(url_: string) {
  try {
    const url = new URL(url_);
    if (url.protocol != "http:" && url.protocol != "https:" && url.protocol != "tg:" && url.protocol != "ton:") {
      return "";
    } else {
      return url.href;
    }
  } catch {
    return "";
  }
}
function getLinkUserId(url_: string) {
  try {
    const url = new URL(url_);
    if (url.protocol != "tg:" || url.hostname != "user" || url.pathname.slice(1) != "" || url.port != "") {
      return 0;
    }
    return Number(url.searchParams.get("id")) || 0;
  } catch {
    return 0;
  }
}
function getLinkCustomEmojiId(url_: string) {
  try {
    const url = new URL(url_);
    if (url.protocol != "tg:" || url.hostname != "emoji" || url.pathname.slice(1) != "" || url.port != "") {
      return "";
    }
    const id_ = url.searchParams.get("id");
    if (!id_) {
      return "";
    }
    const id = BigInt(id_);
    if (!id) {
      return "";
    } else {
      return String(id);
    }
  } catch {
    return "";
  }
}

export function parseMarkdown(text_: string): [string, MessageEntity[]] {
  const text = enc.encode(text_);

  let resultSize = 0;
  let entities: MessageEntity[] = [];
  let utf16Offset = 0;

  interface EntityInfo {
    type: MessageEntityType;
    argument: Uint8Array | string;
    entityOffset: number;
    entityByteOffset: number;
    entityBeginPos: number;
  }

  const nestedEntities: EntityInfo[] = [];

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === CODEPOINTS["\\"] && text[i + 1] != null && text[i + 1] > 0 && text[i + 1] <= 126) {
      i++;
      utf16Offset += 1;
      text[resultSize++] = text[i];
      continue;
    }

    let reservedCharacters = enc.encode("_*[]()~`>#+-=|{}.!");
    if (nestedEntities.length !== 0) {
      switch (nestedEntities[nestedEntities.length - 1].type) {
        case "code":
        case "pre":
          reservedCharacters = Uint8Array.of(CODEPOINTS["`"]);
          break;
        default:
          break;
      }
    }

    if (!reservedCharacters.includes(text[i])) {
      if (isUtf8CharacterFirstCodeUnit(c)) {
        utf16Offset += 1 + (c >= 0xf0 ? 1 : 0);
      }
      text[resultSize++] = text[i];
      continue;
    }

    let isEndOfAnEntity = false;
    if (nestedEntities.length !== 0) {
      isEndOfAnEntity = (() => {
        switch (nestedEntities[nestedEntities.length - 1].type) {
          case "bold":
            return c === CODEPOINTS["*"];
          case "italic":
            return c === CODEPOINTS["_"] && text[i + 1] !== CODEPOINTS["_"];
          case "code":
            return c === CODEPOINTS["`"];
          case "pre":
            return c === CODEPOINTS["`"] && text[i + 1] === CODEPOINTS["`"] && text[i + 2] === CODEPOINTS["`"];
          case "textLink":
            return c === CODEPOINTS["]"];
          case "underline":
            return c === CODEPOINTS["_"] && text[i + 1] === CODEPOINTS["_"];
          case "strikethrough":
            return c === CODEPOINTS["~"];
          case "spoiler":
            return c === CODEPOINTS["|"] && text[i + 1] === CODEPOINTS["|"];
          case "customEmoji":
            return c === CODEPOINTS["]"];
          default:
            unreachable();
        }
      })();
    }

    if (!isEndOfAnEntity) {
      let type: MessageEntityType;
      let argument = new Uint8Array();
      const entityByteOffset = i;

      switch (c) {
        case CODEPOINTS["_"]:
          if (text[i + 1] === CODEPOINTS["_"]) {
            type = "underline";
            i++;
          } else {
            type = "italic";
          }
          break;
        case CODEPOINTS["*"]:
          type = "bold";
          break;
        case CODEPOINTS["~"]:
          type = "strikethrough";
          break;
        case CODEPOINTS["|"]:
          if (text[i + 1] === CODEPOINTS["|"]) {
            i++;
            type = "spoiler";
          } else {
            throw new InputError(`The character "${String.fromCharCode(c)}" is reserved and must be escaped with a preceding backslash.`);
          }
          break;
        case CODEPOINTS["["]:
          type = "textLink";
          break;
        case CODEPOINTS["`"]:
          if (text[i + 1] === CODEPOINTS["`"] && text[i + 2] === CODEPOINTS["`"]) {
            i += 3;
            type = "code";
            let languageEnd = i;
            while (text[languageEnd] != null && !isWhitespace(text[languageEnd]) && text[languageEnd] !== CODEPOINTS["`"]) {
              languageEnd++;
            }
            if (i !== languageEnd && languageEnd < text.length && text[languageEnd] !== CODEPOINTS["`"]) {
              type = "pre";
              argument = text.slice(i, languageEnd);
              i = languageEnd;
            }
            const current = text[i], next = text[i + 1];
            if (current === CODEPOINTS["\n"] || current === CODEPOINTS["\r"]) {
              if ((next === CODEPOINTS["\n"] || next === CODEPOINTS["\r"]) && current !== next) {
                i += 2;
              } else {
                i++;
              }
            }

            i--;
          } else {
            type = "code";
          }
          break;
        case CODEPOINTS["!"]:
          if (text[i + 1] === CODEPOINTS["["]) {
            i++;
            type = "customEmoji";
          } else {
            throw new Error(`Character '${String.fromCharCode(text[i])}' is reserved and must be escaped with the preceding '\\'`);
          }
          break;
        default:
          throw new Error(`Character '${String.fromCharCode(text[i])}' is reserved and must be escaped with the preceding '\\'`);
      }

      nestedEntities.push({ type, argument, entityOffset: utf16Offset, entityByteOffset, entityBeginPos: resultSize });
    } else {
      let { type, argument } = nestedEntities[nestedEntities.length - 1];
      let userId = 0;
      let customEmojiId = "";
      let skipEntity = utf16Offset === nestedEntities.at(-1)!.entityOffset;
      switch (type) {
        case "bold":
        case "italic":
        case "code":
        case "strikethrough":
          break;
        case "underline":
        case "spoiler":
          i++;
          break;
        case "pre":
          i += 2;
          break;
        case "textLink": {
          let url: Uint8Array;
          if (text[i + 1] !== CODEPOINTS["("]) {
            url = text.slice(nestedEntities.at(-1)!.entityBeginPos, resultSize);
          } else {
            i += 2;
            const urlBeginPos = i;
            const url_: number[] = [];
            while (i < text.length && text[i] !== CODEPOINTS[")"]) {
              if (text[i] === CODEPOINTS["\\"] && text[i + 1] > 0 && text[i + 1] <= 126) {
                url_.push(text[i + 1]);
                i += 2;
                continue;
              }
              url_.push(text[i++]);
            }
            url = Uint8Array.from(url_);

            if (text[i] !== CODEPOINTS[")"]) {
              throw new Error(`Can't find the end of the URL that starts at offset ${urlBeginPos}.`);
            }
          }
          userId = getLinkUserId(dec.decode(url));
          if (!userId) {
            const url_ = getUrl(dec.decode(url));
            if (!url_) {
              skipEntity = true;
            } else {
              argument = url_;
            }
          }
          break;
        }
        case "customEmoji": {
          if (text[i + 1] !== CODEPOINTS["("]) {
            throw new InputError("Custom emoji entities must contain a tg://emoji URL.");
          }
          i += 2;
          const url_: number[] = [];
          const urlBeginPos = i;
          while (i < text.length && text[i] !== CODEPOINTS[")"]) {
            if (text[i] === CODEPOINTS["\\"] && text[i + 1] > 0 && text[i + 1] <= 126) {
              url_.push(text[i + 1]);
              i += 2;
              continue;
            }
            url_.push(text[i++]);
          }
          const url = Uint8Array.from(url_);

          if (text[i] !== CODEPOINTS[")"]) {
            throw new InputError(`Can't find the end of the custom emoji URL that starts at offset ${urlBeginPos}.`);
          }
          customEmojiId = getLinkCustomEmojiId(dec.decode(url));
          break;
        }
        default:
          unreachable();
      }

      if (!skipEntity) {
        const entityOffset = nestedEntities.at(-1)!.entityOffset;
        const entityLength = utf16Offset - entityOffset;
        if (userId) {
          entities.push({ type: "textMention", offset: entityOffset, length: entityLength, userId });
        } else if (customEmojiId) {
          entities.push({ type: "customEmoji", offset: entityOffset, length: entityLength, customEmojiId });
        } else if (type == "textLink") {
          entities.push({ type, offset: entityOffset, length: entityLength, url: typeof argument === "string" ? argument : dec.decode(argument) });
        } else if (type == "pre") {
          entities.push({ type, offset: entityOffset, length: entityLength, language: typeof argument === "string" ? argument : dec.decode(argument) });
        } else if (type != "customEmoji") {
          entities.push({ type, offset: entityOffset, length: entityLength });
        }
      }

      nestedEntities.pop();
    }
  }

  if (nestedEntities.length !== 0) {
    const last = nestedEntities[nestedEntities.length - 1];
    throw new InputError(
      `Can't find the end of the ${last.type} entity that starts at offset ${last.entityByteOffset}.`,
    );
  }

  entities = sortMessageEntities(entities);

  return [dec.decode(text.slice(0, resultSize)), entities];
}
