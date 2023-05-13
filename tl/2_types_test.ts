import { TLObject } from "./1_tl_object.ts";
import { MessageEntityBold, Type, TypeMessageEntity } from "./2_types.ts";
import { assert } from "../deps_t.ts";

Deno.test("instanceof", () => {
  const bold = new MessageEntityBold({ offset: 0, length: 1 });
  assert(bold instanceof TLObject);
  assert(bold instanceof Type);
  assert(bold instanceof TypeMessageEntity);
});
