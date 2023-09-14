import { LabeledPrice } from "../tl/2_types.ts";

export interface InputInvoiceMessageContent {
  title: string;
  description: string;
  payload: string;
  providerToken: string;
  currency: string;
  prices: LabeledPrice[];
  maxTipAmount?: number;
  suggestedTipAmounts?: number[];
  providerData?: string;
  photoUrl?: string;
  photoSize?: number;
  photoWidth?: number;
  photoHeight?: number;
  needName?: boolean;
  needPhoneNumber?: boolean;
  needEmail?: boolean;
  needShippingAAddress?: boolean;
  sendPhoneNumberToPorvider?: boolean;
  sendEmailToProvider?: boolean;
  isFlexible?: boolean;
}
