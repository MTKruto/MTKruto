import { enums, types } from "../2_tl.ts";
import { constructCallbackQuery, Update } from "../3_types.ts";
import { AnswerCallbackQueryParams } from "./0_params.ts";
import { C as C_ } from "./0_types.ts";
import { MessageManager } from "./2_message_manager.ts";

type C = C_ & { messageManager: MessageManager };

export class CallbackQueryManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams) {
    await this.#c.storage.assertBot("answerCallbackQuery");
    await this.#c.api.messages.setBotCallbackAnswer({
      query_id: BigInt(id),
      cache_time: params?.cacheTime ?? 0,
      message: params?.text,
      alert: params?.alert ? true : undefined,
    });
  }

  static canHandleUpdate(update: enums.Update): update is types.UpdateBotCallbackQuery | types.UpdateInlineBotCallbackQuery {
    return update instanceof types.UpdateBotCallbackQuery || update instanceof types.UpdateInlineBotCallbackQuery;
  }

  async handleUpdate(update: types.UpdateBotCallbackQuery | types.UpdateInlineBotCallbackQuery): Promise<Update> {
    return { callbackQuery: await constructCallbackQuery(update, this.#c.getEntity, this.#c.messageManager.getMessageWithReply.bind(this)) };
  }
}
