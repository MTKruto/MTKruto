import * as types from "../tl/2_types.ts";

export interface Contact {
  phoneNumber: string;
  firstName: string;
  lastName?: string;
  userId?: number;
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
