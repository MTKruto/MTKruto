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

import type { Api } from "../2_tl.ts";
import type { ID } from "./0_id.ts";

/** The recipients of a business message. */
export interface InputBusinessRecipients {
  existingChats?: boolean;
  newChats?: boolean;
  contacts?: boolean;
  nonContacts?: boolean;
  excludeSelected?: boolean;
  userIds?: ID[];
}

export async function inputBusinessRecipientsToTlObject(recipients: InputBusinessRecipients, getInputUser: (id: ID) => Promise<Api.InputUser>): Promise<Api.InputBusinessRecipients> {
  const users = recipients.userIds?.length ? await Promise.all(recipients.userIds.map(getInputUser)) : undefined;
  return {
    _: "inputBusinessRecipients",
    existing_chats: recipients.existingChats || undefined,
    new_chats: recipients.newChats || undefined,
    contacts: recipients.contacts || undefined,
    non_contacts: recipients.nonContacts || undefined,
    exclude_selected: recipients.excludeSelected || undefined,
    users,
  };
}
