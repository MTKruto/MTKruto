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

export function constructContact(contact: types.MessageMediaContact): Contact {
  return {
    phoneNumber: contact.phoneNumber,
    firstName: contact.firstName,
    lastName: contact.lastName || undefined,
    userId: Number(contact.userId) || undefined,
    vcard: contact.vcard || undefined,
  };
}
