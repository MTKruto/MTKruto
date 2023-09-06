import { assert } from "../0_deps.ts";
import { TLObject } from "./1_tl_object.ts";
import { _TypeMessageEntity, MessageEntityBold, Type } from "./2_types.ts";

Deno.test("instanceof", () => {
  const bold = new MessageEntityBold({ offset: 0, length: 1 });
  assert(bold instanceof TLObject);
  assert(bold instanceof Type);
  assert(bold instanceof _TypeMessageEntity);
});
