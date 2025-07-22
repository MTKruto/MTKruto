/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { Api } from "../2_tl.ts";
import { constructLinkPreview, Update } from "../3_types.ts";
import { GetLinkPreviewParams } from "./0_params.ts";
import { UpdateProcessor } from "./0_update_processor.ts";
import { C as C_ } from "./1_types.ts";
import { MessageManager } from "./3_message_manager.ts";

type C = C_ & { messageManager: MessageManager };

const linkPreviewManagerUpdates = [
  "updateWebPage",
] as const;

type LinkPreviewManagerUpdate = Api.Types[(typeof linkPreviewManagerUpdates)[number]];

export class LinkPreviewManager implements UpdateProcessor<LinkPreviewManagerUpdate> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getLinkPreview(text: string, params?: GetLinkPreviewParams) {
    const [text_, entities_] = await this.#c.messageManager.parseText(text, params);

    const result = await this.#c.invoke({
      _: "messages.getWebPagePreview",
      message: text_,
      entities: entities_,
    });
    if (Api.is("messageMediaWebPage", result.media)) {
      return constructLinkPreview(result.media, undefined, this.#c.getPeer);
    } else {
      return null;
    }
  }

  canHandleUpdate(update: Api.Update): update is LinkPreviewManagerUpdate {
    return Api.isOneOf(linkPreviewManagerUpdates, update);
  }

  handleUpdate(update: LinkPreviewManagerUpdate): Update {
    const linkPreview = constructLinkPreview({ _: "messageMediaWebPage", webpage: update.webpage }, undefined, this.#c.getPeer);
    return { linkPreview };
  }
}
