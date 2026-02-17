import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";

/** The style of a keyboard button. */
export interface ButtonStyle {
  background?: "danger" | "primary" | "success";
  customEmojiId?: string;
}

export function constructButtonStyle(buttonStyle: Api.KeyboardButtonStyle | undefined): ButtonStyle | undefined {
  if (buttonStyle === undefined || !buttonStyle.bg_danger && !buttonStyle.bg_primary && !buttonStyle.bg_success && !buttonStyle.icon) {
    return undefined;
  }

  const buttonStyle_: ButtonStyle = {
    background: buttonStyle.bg_danger ? "danger" : buttonStyle.bg_primary ? "primary" : buttonStyle.bg_success ? "success" : undefined,
    customEmojiId: buttonStyle.icon ? String(buttonStyle.icon) : undefined,
  };
  return cleanObject(buttonStyle_);
}

export function buttonStyleToTlObject(buttonStyle: ButtonStyle | undefined): Api.KeyboardButtonStyle | undefined {
  if (buttonStyle === undefined) {
    return undefined;
  }

  return { _: "keyboardButtonStyle", bg_danger: buttonStyle.background === "danger" ? true : undefined, bg_primary: buttonStyle.background === "primary" ? true : undefined, bg_success: buttonStyle.background === "success" ? true : undefined, icon: buttonStyle.customEmojiId ? BigInt(buttonStyle.customEmojiId) : undefined };
}
