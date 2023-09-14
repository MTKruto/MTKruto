import { WebAppInfo } from "./0_web_app_info.ts";

export interface InlineQueryResultButton {
  text: string;
  webApp?: WebAppInfo;
  startParameter?: string;
}
