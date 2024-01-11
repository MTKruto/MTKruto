import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";
import { constructChosenInlineResult, constructInlineQuery, InlineQueryResult, inlineQueryResultToTlObject, Update } from "../3_types.ts";
import { AnswerInlineQueryParams } from "./0_params.ts";
import { C as C_ } from "./0_types.ts";
import { MessageManager } from "./2_message_manager.ts";

type C = C_ & { messageManager: MessageManager };

export class InlineQueryManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams) {
    await this.#c.storage.assertBot("answerInlineQuery");
    await this.#c.api.messages.setInlineBotResults({
      query_id: BigInt(id),
      results: await Promise.all(results.map((v) => inlineQueryResultToTlObject(v, this.#c.messageManager.parseText.bind(this), this.#c.messageManager.usernameResolver.bind(this)))),
      cache_time: params?.cacheTime ?? 300,
      private: params?.isPersonal ? true : undefined,
      switch_webview: params?.button && params.button.webApp ? new types.InlineBotWebView({ text: params.button.text, url: params.button.webApp.url }) : undefined,
      switch_pm: params?.button && params.button.startParameter ? new types.InlineBotSwitchPM({ text: params.button.text, start_param: params.button.startParameter }) : undefined,
      gallery: params?.isGallery ? true : undefined,
      next_offset: params?.nextOffset,
    });
  }

  static canHandleUpdate(update: enums.Update): update is types.UpdateBotInlineQuery | types.UpdateBotInlineSend {
    return update instanceof types.UpdateBotInlineQuery || update instanceof types.UpdateBotInlineSend;
  }

  async handleUpdate(update: types.UpdateBotInlineQuery | types.UpdateBotInlineSend): Promise<Update> {
    if (update instanceof types.UpdateBotInlineQuery) {
      return { inlineQuery: await constructInlineQuery(update, this.#c.getEntity) };
    } else if (update instanceof types.UpdateBotInlineSend) {
      return { chosenInlineResult: await constructChosenInlineResult(update, this.#c.getEntity) };
    } else {
      UNREACHABLE();
    }
  }
}
