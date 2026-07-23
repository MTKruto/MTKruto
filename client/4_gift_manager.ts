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
import { InputError } from "../0_errors.ts";
import { Api } from "../2_tl.ts";
import { type ClaimedGifts, constructClaimedGifts, constructGift, type Gift, type ID, type InputGift, inputGiftToTlObject, type PremiumSubscriptionDuration } from "../3_types.ts";
import type { CraftGiftsParams, GetClaimedGiftsParams, GiftPremiumSubscriptionParams, SendGiftParams } from "./0_params.ts";
import { getLimit } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { MessageManager } from "./3_message_manager.ts";

interface C extends C_ {
  messageManager: MessageManager;
}

export class GiftManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getGifts(): Promise<Gift[]> {
    const gifts = await this.#c.invoke({ _: "payments.getStarGifts", hash: 0 });
    if (!(Api.is("payments.starGifts", gifts))) {
      unreachable();
    }
    return await Promise.all(gifts.gifts.map((v) => constructGift(v, this.#c.getPeer)));
  }

  async getClaimedGifts(chatId: ID, params?: GetClaimedGiftsParams): Promise<ClaimedGifts> {
    const offset = params?.offset ?? "";
    const limit = getLimit(params?.limit);
    const peer = await this.#c.getInputPeer(chatId);
    const result = await this.#c.invoke({
      _: "payments.getSavedStarGifts",
      peer,
      offset,
      limit,
      collection_id: params?.collectionId,
      exclude_hosted: params?.isHostedExcluded || undefined,
      exclude_unupgradable: params?.isUnupgradableExcluded || undefined,
      exclude_upgradable: params?.isUpgradableExcluded || undefined,
      sort_by_value: params?.isSortedByValue || undefined,
      exclude_unique: params?.isUniqueExcluded || undefined,
      exclude_unlimited: params?.isUnlimitedExcluded || undefined,
      exclude_saved: params?.isSavedExcluded || undefined,
      exclude_unsaved: params?.isUnsavedExcluded || undefined,
      peer_color_available: params?.isWithColors || undefined,
    });
    return constructClaimedGifts(result, this.#c.getPeer);
  }

  async sendGift(chatId: ID, giftId: string, params?: SendGiftParams) {
    const hide_name = params?.isPrivate || undefined;
    const include_upgrade = params?.upgrade || undefined;
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

  async sellGift(gift: InputGift) {
    const stargift = await inputGiftToTlObject(gift, this.#c.getInputPeer);
    await this.#c.invoke({ _: "payments.convertStarGift", stargift });
  }

  async craftGifts(gifts: InputGift[], params?: CraftGiftsParams) {
    if (this.#c.storage.isBot && params?.businessConnectionId === undefined) {
      throw new InputError("The parameter businessConnectionId is required for bots.");
    }
    const stargift = await Promise.all(gifts.map((v) => inputGiftToTlObject(v, this.#c.getInputPeer)));
    await this.#c.invoke({ _: "payments.craftStarGift", stargift }, { businessConnectionId: params?.businessConnectionId });
  }

  async getGift(slug: string): Promise<Gift> {
    this.#c.storage.assertUser("getGift");
    if (slug.length > 100) {
      throw new InputError("Slug too long.");
    }
    slug = slug.toLowerCase();
    if (!/^[a-z]+-[1-9][0-9]*$/.test(slug)) {
      throw new InputError("Invalid slug.");
    }
    const result = await this.#c.invoke({ _: "payments.getUniqueStarGift", slug });
    return constructGift(result.gift, this.#c.getPeer.bind(this));
  }

  async transferGift(chatId: ID, gift: InputGift) {
    this.#c.storage.assertUser("transferGift");
    const stargift = await inputGiftToTlObject(gift, this.#c.getInputPeer);
    const gifts = await this.#c.invoke({ _: "payments.getSavedStarGift", stargift: [stargift] });
    if (gifts.gifts.length < 1) {
      throw new InputError("Gift not found.");
    }
    const to_id = await this.#c.getInputPeer(chatId);
    if (gifts.gifts[0].transfer_stars === undefined) {
      await this.#c.invoke({ _: "payments.transferStarGift", stargift, to_id });
    } else {
      const invoice: Api.inputInvoiceStarGiftTransfer = { _: "inputInvoiceStarGiftTransfer", stargift, to_id };
      const { form_id } = await this.#c.invoke({ _: "payments.getPaymentForm", invoice });
      await this.#c.invoke({ _: "payments.sendStarsForm", form_id, invoice });
    }
  }

  async giftPremiumSubscription(userId: ID, duration: PremiumSubscriptionDuration, params?: GiftPremiumSubscriptionParams) {
    this.#c.storage.assertBot("giftPremiumSubscription");
    const months = duration;
    const user_id = await this.#c.getInputUser(userId);
    const message = params?.text ? this.#c.messageManager.parseText(params.text, { parseMode: params.parseMode, entities: params.entities }) : undefined;
    const invoice: Api.inputInvoicePremiumGiftStars = { _: "inputInvoicePremiumGiftStars", months, user_id, message: message ? { _: "textWithEntities", text: message[0], entities: message[1] ?? [] } : undefined };

    const form = await this.#c.invoke({ _: "payments.getPaymentForm", invoice });
    await this.#c.invoke({ _: "payments.sendStarsForm", form_id: form.form_id, invoice });
  }
}
