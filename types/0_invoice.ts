import { Api } from "../2_tl.ts";

export interface Invoice {
  title: string;
  description: string;
  startParameter: string;
  currency: string;
  totalAmount: number;
}

export function constructInvoice(invoice: Api.messageMediaInvoice): Invoice {
  return {
    title: invoice.title,
    description: invoice.description,
    startParameter: invoice.start_param,
    currency: invoice.currency,
    totalAmount: Number(invoice.total_amount),
  };
}
