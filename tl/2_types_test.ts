import { assert } from "../0_deps.ts";
import { TLObject } from "./1_tl_object.ts";
import { types } from "./2_types.ts";

Deno.test("instanceof", () => {
  const bold = new types.MessageEntityBold({ offset: 0, length: 1 });
  assert(bold instanceof TLObject);
  assert(bold instanceof types.Type);
  assert(bold instanceof types._MessageEntity);
});
