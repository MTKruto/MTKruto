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

import { cleanObject, fromUnixTimestamp } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructUser, User } from "./1_user.ts";
import { constructGift, Gift } from "./3_gift.ts";

/** A gift claimed by a user. */
export interface UserGift {
  /** The time when the gift was claimed. */
  date: Date;
  /** The gift. */
  gift: Gift;
  /** Whether the gift is publicly visible. */
  public: boolean;
  /** The user who sent the gift. */
  fromUser?: User;
  /** A message shared when the gift was sent. */
  message?: string;
  /** The entities of the message. */
  entities?: MessageEntity[];
  /** The identifier of the service message announcing the receival of the gift. */
  messageId?: number;
  /** The amount of stars the gift would be worth. */
  convertionStars?: number;
}

export function constructUserGift(userGift: Api.UserStarGift, user?: Api.user): UserGift {
  const gift = constructGift(userGift.gift);
  const date = fromUnixTimestamp(userGift.date);
  const public_ = !!userGift.unsaved;
  const fromUser = user ? constructUser(user) : undefined;
  const message = userGift.message?.text;
  const entities = userGift.message ? userGift.message.entities.map(constructMessageEntity).filter((v): v is MessageEntity => !!v) : undefined;
  const messageId = userGift.msg_id;
  const conversionStars = userGift.convert_stars;
  return cleanObject({
    date,
    gift,
    public: public_,
    fromUser,
    message,
    entities,
    messageId,
    conversionStars,
  });
}
