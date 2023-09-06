import { getRandomId } from "./1_utilities.ts";
import { checkPassword } from "./client/0_password.ts";

export const utils = { checkPassword, getRandomId };

export * from "./2_tl.ts";
export * from "./2_connection.ts";
export * from "./3_storage.ts";
export * from "./3_transport.ts";
export { APP_VERSION, DEVICE_MODEL, INITIAL_DC, LANG_CODE, LANG_PACK, LAYER, SYSTEM_LANG_CODE, SYSTEM_VERSION } from "./4_constants.ts";
export * from "./5_client.ts";
