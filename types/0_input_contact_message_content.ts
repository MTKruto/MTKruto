/** A message content that shares a contact. */
export interface InputContactMessageContent {
  /** The contact's phone number. */
  phoneNumber: string;
  /** The contact's first name. */
  firstName: string;
  /** The contact's last name. */
  lastName?: string;
  /** Additional information in the vCard format. */
  vcard?: string;
}
