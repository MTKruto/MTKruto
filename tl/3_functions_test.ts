import { assert } from "../0_deps.ts";
import { TLObject } from "./1_tl_object.ts";
import { functions } from "./3_functions.ts";

Deno.test("instanceof", () => {
  const ping = new functions.ping({ ping_id: 0xFFn });
  assert(ping instanceof TLObject);
  assert(ping instanceof functions.Function);
});
