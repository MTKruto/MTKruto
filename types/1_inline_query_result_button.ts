import { MiniAppInfo } from "./0_mini_app_info.ts";

/** A button to be shown along with the results of an inline query. */
export interface InlineQueryResultButton {
  /** Label text on the button. */
  text: string;
  /** Description of the Mini App that will be launched when the user presses the button. */
  miniApp?: MiniAppInfo;
  /** Deep linking parameter for the /start message. */
  startParameter?: string;
}
