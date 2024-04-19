import { InputError } from "../0_errors.ts";

/** @unlisted */
export interface CallbackQueryQuestionGame {
  type: "game";
}

/** @unlisted */
export interface CallbackQueryQuestionPassword {
  type: "password";
  password: string;
  data: string;
}

/** @unlisted */
export interface CallbackQueryQuestionButton {
  type: "button";
  data: string;
}

export type CallbackQueryQuestion = CallbackQueryQuestionGame | CallbackQueryQuestionPassword | CallbackQueryQuestionButton;

export function validateCallbackQueryQuestion(q: CallbackQueryQuestion) {
  if (!["game", "password", "button"].includes(q.type)) {
    throw new InputError("Got invalid callback query question type.");
  }
  if (q.type == "password" && (typeof q.password !== "string" || !q.password)) {
    throw new InputError("Got empty password.");
  }
  if ((q.type == "button" || q.type == "password") && (typeof q.data !== "string" || !q.data)) {
    throw new InputError("Got empty button data.");
  }
}
