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

import { unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { Api } from "../2_tl.ts";
import { constructClaimedGifts, constructGift, ID } from "../3_types.ts";
import { GetClaimedGiftsParams, SendGiftParams } from "./0_params.ts";
import { getLimit } from "./0_utilities.ts";
import { C as C_ } from "./1_types.ts";
import { MessageManager } from "./3_message_manager.ts";

interface C extends C_ {
  messageManager: MessageManager;
}

export class GiftManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getGifts() {
    const gifts = await this.#c.invoke({ _: "payments.getStarGifts", hash: 0 });
    if (!(Api.is("payments.starGifts", gifts))) {
      unreachable();
    }
    return await Promise.all(gifts.gifts.map((v) => constructGift(v, this.#c.getEntity)));
  }

  async getClaimedGifts(chatId: ID, params?: GetClaimedGiftsParams) {
    this.#c.storage.assertUser("getClaimedGifts");
    const offset = params?.offset ?? "";
    const limit = getLimit(params?.limit);
    const peer = await this.#c.getInputPeer(chatId);
    const result = await this.#c.invoke({ _: "payments.getSavedStarGifts", peer, offset, limit });
    return await constructClaimedGifts(result, this.#c.getEntity);
  }

  async sendGift(chatId: ID, giftId: string, params?: SendGiftParams) {
    const hide_name = params?.private ? true : undefined;
    const include_upgrade = params?.upgrade ? true : undefined;
    const peer = await this.#c.getInputPeer(chatId);
    const gift_id = BigInt(giftId);
    let message: Api.textWithEntities | undefined;
    if (params?.message) {
      const parsedText = await this.#c.messageManager.parseText(params.message, params);
      message = { _: "textWithEntities", text: parsedText[0], entities: parsedText[1] ?? [] };
    }
    const invoice: Api.inputInvoiceStarGift = { _: "inputInvoiceStarGift", hide_name, include_upgrade, peer, gift_id, message };
    const paymentForm = await this.#c.invoke({ _: "payments.getPaymentForm", invoice });
    await this.#c.invoke({ _: "payments.sendStarsForm", form_id: paymentForm.form_id, invoice });
  }

  async sellGift(userId: ID, messageId: number) {
    const message = await this.#c.messageManager.getMessage(userId, messageId);
    if (message == null) {
      throw new InputError("Message not found.");
    }
    await this.#c.invoke({ _: "payments.convertStarGift", stargift: { _: "inputSavedStarGiftUser", msg_id: message.id } });
  }

  async getGift(slug: string) {
    if (slug.length > 100) {
      throw new InputError("Slug too long.");
    }
    slug = slug.toLowerCase();
    if (!/^[a-z]+-[1-9][0-9]*$/.test(slug)) {
      throw new InputError("Invalid slug.");
    }
    const result = await this.#c.invoke({ _: "payments.getUniqueStarGift", slug });
    return await constructGift(result.gift, this.#c.getEntity.bind(this));
  }
}
