/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { cleanObject, fromUnixTimestamp } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { ChatPChannel, ChatPSupergroup, constructChatP } from "./1_chat_p.ts";
import { constructUser, User } from "./1_user.ts";

/** @unlisted */
export interface _ForwardHeaderCommon {
  date: Date;
}

/** @unlisted */
export interface ForwardHeaderUser extends _ForwardHeaderCommon {
  /** @discriminator */
  type: "user";
  user: User;
}

/** @unlisted */
export interface ForwardHeaderChannel extends _ForwardHeaderCommon {
  /** @discriminator */
  type: "channel";
  chat: ChatPChannel;
  messageId: number;
  authorSignature?: string;
}

/** @unlisted */
export interface ForwardHeaderSupergroup extends _ForwardHeaderCommon {
  type: "supergroup";
  chat: ChatPSupergroup;
  title?: string;
}

/** @unlisted */
export interface ForwardHeaderHidden extends _ForwardHeaderCommon {
  type: "hidden";
  name: string;
}

/** @unlisted */
export interface ForwardHeaderUnsupported extends _ForwardHeaderCommon {
  type: "unsupported";
}

export type ForwardHeader = ForwardHeaderUser | ForwardHeaderChannel | ForwardHeaderSupergroup | ForwardHeaderHidden | ForwardHeaderUnsupported;

export async function constructForwardHeader(fwdHeader: Api.MessageFwdHeader, getEntity: EntityGetter): Promise<ForwardHeader> {
  if (fwdHeader.channel_post && fwdHeader.from_id?._ == "peerChannel") {
    const chat = await getEntity(fwdHeader.from_id);
    if (chat == null) {
      unreachable();
    }
    return cleanObject({
      type: "channel",
      date: fromUnixTimestamp(fwdHeader.date),
      chat: constructChatP(chat) as ChatPChannel,
      messageId: fwdHeader.channel_post,
      authorSignature: fwdHeader.post_author,
    });
  } else if (fwdHeader.from_id?._ == "peerChannel") {
    const chat = await getEntity(fwdHeader.from_id);
    if (chat == null) {
      unreachable();
    }
    return cleanObject({
      type: "supergroup",
      date: fromUnixTimestamp(fwdHeader.date),
      chat: constructChatP(chat) as ChatPSupergroup,
      title: fwdHeader.post_author,
    });
  } else if (fwdHeader.from_id?._ == "peerUser") {
    const user = await getEntity(fwdHeader.from_id);
    if (user == null) {
      unreachable();
    }
    return {
      type: "user",
      date: fromUnixTimestamp(fwdHeader.date),
      user: constructUser(user),
    };
  } else if (fwdHeader.from_name) {
    return {
      type: "hidden",
      date: fromUnixTimestamp(fwdHeader.date),
      name: fwdHeader.from_name,
    };
  } else {
    return {
      type: "unsupported",
      date: fromUnixTimestamp(fwdHeader.date),
    };
  }
}
