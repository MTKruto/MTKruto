import { types } from "../2_tl.ts";

/** A shared contact. */
export interface Contact {
  /** The contact's phone number. */
  phoneNumber: string;
  /** The contact's first name. */
  firstName: string;
  /** The contact's last name. */
  lastName?: string;
  /** The contact's Telegram identifier. */
  userId?: number;
  /** Additional information in the vCard format. */
  vcard?: string;
}

export function constructContact(contact: types.messageMediaContact): Contact {
  return {
    phoneNumber: contact.phone_number,
    firstName: contact.first_name,
    lastName: contact.last_name || undefined,
    userId: Number(contact.user_id) || undefined,
    vcard: contact.vcard || undefined,
  };
}
