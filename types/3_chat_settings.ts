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

import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructUser, type User } from "./2_user.ts";

export interface ChatSettings {
  report: boolean;
  addToContacts: boolean;
  block: boolean;
  shareContact: boolean;
  contactsException: boolean;
  reportLocation: boolean;
  unarchive: boolean;
  inviteMembers: boolean;
  channelJoinRequest: boolean;
  businessBotPaused: boolean;
  businessBotCanReply: boolean;
  distance?: number;
  joinRequestChatTitle?: string;
  joinRequestDate?: number;
  businessBot?: User;
  businessBotUrl?: string;
  messagePrice?: number;
  registrationMonth?: string;
  phoneCountry?: string;
  nameChangeDate?: number;
  photoChangeDate?: number;
}

export function constructChatSettings(settings_: Api.messages_peerSettings): ChatSettings {
  const settings: ChatSettings = {
    report: settings_.settings.report_spam || false,
    addToContacts: settings_.settings.add_contact || false,
    block: settings_.settings.block_contact || false,
    shareContact: settings_.settings.share_contact || false,
    contactsException: settings_.settings.need_contacts_exception || false,
    reportLocation: settings_.settings.report_geo || false,
    unarchive: settings_.settings.autoarchived || false,
    inviteMembers: settings_.settings.invite_members || false,
    channelJoinRequest: settings_.settings.request_chat_broadcast || false,
    businessBotPaused: settings_.settings.business_bot_paused || false,
    businessBotCanReply: settings_.settings.business_bot_can_reply || false,
    distance: settings_.settings.geo_distance,
    joinRequestChatTitle: settings_.settings.request_chat_title,
    joinRequestDate: settings_.settings.request_chat_date ? settings_.settings.request_chat_date : undefined,
    businessBotUrl: settings_.settings.business_bot_manage_url,
    messagePrice: settings_.settings.charge_paid_message_stars ? Number(settings_.settings.charge_paid_message_stars) : undefined,
    registrationMonth: settings_.settings.registration_month,
    phoneCountry: settings_.settings.phone_country,
    nameChangeDate: settings_.settings.name_change_date ? settings_.settings.name_change_date : undefined,
    photoChangeDate: settings_.settings.photo_change_date ? settings_.settings.photo_change_date : undefined,
  };
  const bot = settings_.users.find((v) => v.id === settings_.settings.business_bot_id);
  if (Api.is("user", bot)) {
    settings.businessBot = constructUser(bot);
  }
  return cleanObject(settings);
}
