import { InputContactMessageContent } from "./0_input_contact_message_content.ts";
import { InputLocationMessageContent } from "./0_input_location_message_content.ts";
import { InputVenuMessageContent } from "./0_input_venue_message_content.ts";
import { InputInvoiceMessageContent } from "./1_input_invoice_message_content.ts";
import { InputTextMessageContent } from "./1_input_text_message_content.ts";

export type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | InputVenuMessageContent | InputContactMessageContent | InputInvoiceMessageContent;
