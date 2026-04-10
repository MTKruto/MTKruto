/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { unreachable } from "../0_deps.ts";
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import type { UsernameResolver } from "./_getters.ts";
import { constructInlineKeyboardButton, type InlineKeyboardButton, inlineKeyboardButtonToTlObject } from "./1_inline_keyboard_button.ts";
import { constructKeyboardButton, type KeyboardButton, keyboardButtonToTlObject } from "./1_keyboard_button.ts";

//

/** @unlisted */
export interface ReplyMarkupInlineKeyboard {
  /** @discriminator */
  type: "inlineKeyboard";
  inlineKeyboard: InlineKeyboardButton[][];
}

function constructInlineKeyboardMarkup(keyboard_: Api.replyInlineMarkup): ReplyMarkupInlineKeyboard {
  const rows = new Array<InlineKeyboardButton[]>();
  for (const row_ of keyboard_.rows) {
    const row = new Array<InlineKeyboardButton>();
    for (const button_ of row_.buttons) {
      row.push(constructInlineKeyboardButton(button_));
    }
    rows.push(row);
  }
  return { type: "inlineKeyboard", inlineKeyboard: rows };
}

async function inlineKeyboardMarkupToTlObject(keyboard: ReplyMarkupInlineKeyboard, usernameResolver: UsernameResolver): Promise<Api.replyInlineMarkup> {
  const rows_ = new Array<Api.keyboardButtonRow>();
  for (const row of keyboard.inlineKeyboard) {
    const row_ = new Array<Api.KeyboardButton>();
    for (const button of row) {
      row_.push(await inlineKeyboardButtonToTlObject(button, usernameResolver));
    }
    rows_.push({ _: "keyboardButtonRow", buttons: row_ });
  }
  return { _: "replyInlineMarkup", rows: rows_ };
}

//

/** @unlisted */
export interface ReplyMarkupKeyboard {
  /** @discriminator */
  type: "keyboard";
  keyboard: KeyboardButton[][];
  isPersistent?: boolean;
  isResized?: boolean;
  isOneTime?: boolean;
  inputFieldPlaceholder?: string;
  isSelective?: boolean;
}

function constructReplyKeyboardMarkup(keyboard_: Api.replyKeyboardMarkup): ReplyMarkupKeyboard {
  const rows = new Array<KeyboardButton[]>();
  for (const row_ of keyboard_.rows) {
    const row = new Array<KeyboardButton>();
    for (const button_ of row_.buttons) {
      row.push(constructKeyboardButton(button_));
    }
    rows.push(row);
  }
  return {
    type: "keyboard",
    isResized: keyboard_.resize || false,
    isOneTime: keyboard_.single_use || false,
    isSelective: keyboard_.selective || false,
    isPersistent: keyboard_.persistent || false,
    keyboard: rows,
  };
}

function replyKeyboardMarkupToTlObject(replyMarkup: ReplyMarkupKeyboard): Api.replyKeyboardMarkup {
  const rows_ = new Array<Api.keyboardButtonRow>();
  for (const row of replyMarkup.keyboard) {
    const row_ = new Array<Api.KeyboardButton>();
    for (const button of row) {
      row_.push(keyboardButtonToTlObject(button));
    }
    rows_.push({ _: "keyboardButtonRow", buttons: row_ });
  }
  return { _: "replyKeyboardMarkup", resize: replyMarkup.isResized || undefined, single_use: replyMarkup.isOneTime || undefined, selective: replyMarkup.isSelective || undefined, persistent: replyMarkup.isPersistent || undefined, rows: rows_, placeholder: replyMarkup.inputFieldPlaceholder };
}

//

/**
 * Makes the user's client hide the current custom keyboard.
 * @unlisted
 */
export interface ReplyMarkupRemoveKeyboard {
  /** @discriminator */
  type: "removeKeyboard";
  /** Whether to only affect specific users. If true, only users that were mentioned will be affected along with the author of the replied message if any. */
  isSelective?: boolean;
}

function constructReplyKeyboardRemove(replyMarkup_: Api.replyKeyboardHide): ReplyMarkupRemoveKeyboard {
  return cleanObject({ type: "removeKeyboard", selective: replyMarkup_.selective });
}

function replyKeyboardRemoveToTlObject(replyMarkup: ReplyMarkupRemoveKeyboard): Api.replyKeyboardHide {
  return { _: "replyKeyboardHide", selective: replyMarkup.isSelective || undefined };
}

//

/**
 * Forces the user's client to select the message as the one to reply to.
 * @unlisted
 */
export interface ReplyMarkupForceReply {
  /** @discriminator */
  type: "forceReply";
  /** A placeholder to be shown in the client's message box. */
  inputFieldPlaceholder?: string;
  /** Whether to only affect specific users. If true, only users that were mentioned will be affected along with the author of the replied message if any. */
  isSelective?: boolean;
}

function constructForceReply(replyMarkup_: Api.replyKeyboardForceReply) {
  const replyMarkup: ReplyMarkupForceReply = { type: "forceReply" };
  if (replyMarkup_.placeholder) {
    replyMarkup.inputFieldPlaceholder = replyMarkup_.placeholder;
  }
  if (replyMarkup_.selective) {
    replyMarkup.isSelective = true;
  }
  return replyMarkup;
}

function forceReplyToTlObject(replyMarkup: ReplyMarkupForceReply): Api.replyKeyboardForceReply {
  return { _: "replyKeyboardForceReply", selective: replyMarkup.isSelective || undefined, placeholder: replyMarkup.inputFieldPlaceholder };
}

//

/** A message's reply markup. */
export type ReplyMarkup = ReplyMarkupInlineKeyboard | ReplyMarkupKeyboard | ReplyMarkupRemoveKeyboard | ReplyMarkupForceReply;

export function constructReplyMarkup(replyMarkup: Api.ReplyMarkup): ReplyMarkup {
  if (Api.is("replyKeyboardMarkup", replyMarkup)) {
    return constructReplyKeyboardMarkup(replyMarkup);
  } else if (Api.is("replyInlineMarkup", replyMarkup)) {
    return constructInlineKeyboardMarkup(replyMarkup);
  } else if (Api.is("replyKeyboardHide", replyMarkup)) {
    return constructReplyKeyboardRemove(replyMarkup);
  } else if (Api.is("replyKeyboardForceReply", replyMarkup)) {
    return constructForceReply(replyMarkup);
  } else {
    unreachable();
  }
}

export async function replyMarkupToTlObject(replyMarkup: ReplyMarkup, usernameResolver: UsernameResolver): Promise<Api.ReplyMarkup> {
  switch (replyMarkup.type) {
    case "inlineKeyboard":
      return await inlineKeyboardMarkupToTlObject(replyMarkup, usernameResolver);
    case "keyboard":
      return replyKeyboardMarkupToTlObject(replyMarkup);
    case "removeKeyboard":
      return replyKeyboardRemoveToTlObject(replyMarkup);
    case "forceReply":
      return forceReplyToTlObject(replyMarkup);
  }
}
