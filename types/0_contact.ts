import * as types from "../tl/2_types.ts";

/** This object represents a phone contact. */
export interface Contact {
  /** Contact's phone number */
  phoneNumber: string;
  /** Contact's first name */
  firstName: string;
  /** Contact's last name */
  lastName?: string;
  /** Contact's user identifier in Telegram */
  userId?: number;
  /** Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard) */
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
