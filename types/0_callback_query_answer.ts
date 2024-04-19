import { types } from "../2_tl.ts";

export interface CallbackQueryAnswer {
  alert: boolean;
  text: string;
  url: string;
}

export function constructCallbackQueryAnswer(answer: types.messages.BotCallbackAnswer): CallbackQueryAnswer {
  return {
    alert: !!answer.alert,
    text: answer.message ?? "",
    url: answer.url ?? "",
  };
}
