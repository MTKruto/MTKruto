import { assert } from "../0_deps.ts";
import { match } from "./0_filters.ts";

Deno.test("match", () => {
  assert(match("message", { message: {} }));
  assert(match("connectionState", { connectionState: {} }));
  assert(!match("message", { editedMessage: {} }));
  assert(match(":text", { editedMessage: { text: {} } }));
  assert(match(":text", { message: { text: {} } }));
  assert(match("message:text", { message: { text: {} } }));
  assert(!match("editedMessage:text", { message: { text: {} } }));
  assert(!match("callbackQuery:inlineMessageId", { callbackQuery: { message: {} } }));
  assert(!match("callbackQuery:message", { callbackQuery: { inlineMessageId: {} } }));
  assert(match("callbackQuery:inlineMessageId", { callbackQuery: { inlineMessageId: {} } }));
  assert(match("callbackQuery:message", { callbackQuery: { message: {} } }));
  assert(!match("chosenInlineResult:inlineMessageId", { chosenInlineResult: {} }));
  assert(match("chosenInlineResult:inlineMessageId", { chosenInlineResult: { inlineMessageId: {} } }));
});
