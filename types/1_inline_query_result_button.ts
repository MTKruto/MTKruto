import { MiniAppInfo } from "./0_mini_app_info.ts";

/** A button to be shown along with the results of an inline query. */
export interface InlineQueryResultButton {
  text: string;
  miniApp?: MiniAppInfo;
  startParameter?: string;
}
