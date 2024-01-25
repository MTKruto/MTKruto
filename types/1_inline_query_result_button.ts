import { MiniAppInfo } from "./0_mini_app_info.ts";

export interface InlineQueryResultButton {
  text: string;
  miniApp?: MiniAppInfo;
  startParameter?: string;
}
