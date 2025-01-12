import { Api } from "../2_tl.ts";
import { Update } from "../3_types.ts";

export interface UpdateProcessor<U extends Api.Update> {
  canHandleUpdate(update: Api.Update): update is U;
  handleUpdate(update: U): Promise<Update | null>;
}
