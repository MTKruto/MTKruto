import { Parser } from "../deps.ts";
import { MessageEntity, MessageEntityType } from "../types/0_message_entity.ts";

export function parseHtml(html: string) {
  let text = "";
  const entities = new Array<MessageEntity>();
  const queue = new Array<MessageEntity>();

  const parser = new Parser({
    onopentag(name, attribs) {
      switch (name) {
        case "b":
        case "strong":
          queue.push({ type: MessageEntityType.Bold, offset: text.length, length: 0 });
          break;
        case "em":
        case "i":
          queue.push({ type: MessageEntityType.Italic, offset: text.length, length: 0 });
          break;
        case "code":
          queue.push({ type: MessageEntityType.Code, offset: text.length, length: 0 });
          break;
        case "pre": {
          const language = attribs.language ?? "";
          queue.push({ type: MessageEntityType.Pre, offset: text.length, length: 0, language });
          break;
        }
        case "a": {
          const url = attribs.href;
          if (!url) {
            throw new Error("Missing attribute href");
          }
          queue.push({ type: MessageEntityType.TextURL, offset: text.length, length: 0, url });
          break;
        }
        case "ins":
        case "u":
          queue.push({ type: MessageEntityType.Underline, offset: text.length, length: 0 });
          break;
        case "del":
        case "strike":
          queue.push({ type: MessageEntityType.Strike, offset: text.length, length: 0 });
          break;
        case "span":
          if (attribs.class != "tg-spoiler") {
            throw new Error("The class attribute must be tg-spoiler");
          }
          // falls through
        case "tg-spoiler":
          queue.push({ type: MessageEntityType.Spoiler, offset: text.length, length: 0 });
          break;
        case "tg-emoji":
          if (!attribs["emoji-id"]) {
            throw new Error("Missing attribute emoji-id");
          }
          queue.push({ type: MessageEntityType.Spoiler, offset: text.length, length: 0 });
      }
    },
    ontext(data) {
      text += data;
      const lastItem = queue[queue.length - 1];
      if (lastItem) {
        lastItem.length += data.length;
      }
    },
    onclosetag() {
      const lastItem = queue.pop();
      if (lastItem) {
        entities.push(lastItem);
      }
    },
  });

  parser.write(html);
  parser.end();

  return [text, entities] as const;
}
