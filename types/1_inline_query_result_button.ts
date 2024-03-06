import { MiniAppInfo } from "./0_mini_app_info.ts";

/** A button to be shown along with the results of an inline query. */
export interface InlineQueryResultButton {
  /** Label text on the button. */
  text: string;
  /** Description of the Web App that will be launched when the user presses the button. */
  miniApp?: MiniAppInfo;
  /**  */
  startParameter?: string;
}
