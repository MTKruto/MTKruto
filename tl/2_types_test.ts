import { assert } from "../0_deps.ts";
import { TLObject } from "./1_tl_object.ts";
import { _MessageEntity, messageEntityBold, Type } from "./2_types.ts";

Deno.test("instanceof", () => {
  const bold = new messageEntityBold({ offset: 0, length: 1 });
  assert(bold instanceof TLObject);
  assert(bold instanceof Type);
  assert(bold instanceof _MessageEntity);
});
