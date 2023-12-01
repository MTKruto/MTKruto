import { assert } from "../0_deps.ts";
import { TLObject } from "./1_tl_object.ts";
import { Function, ping } from "./3_functions.ts";

Deno.test("instanceof", () => {
  const ping_ = new ping({ ping_id: 0xFFn });
  assert(ping_ instanceof TLObject);
  assert(ping_ instanceof Function);
});
