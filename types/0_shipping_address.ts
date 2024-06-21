import { Api } from "../2_tl.ts";

/** A shipping address. */
export interface ShippingAddress {
  countryCode: string;
  state: string;
  city: string;
  streetLine1: string;
  streetLine2: string;
  postCode: string;
}

export function constructShippingAddress(shippingAddress: Api.postAddress): ShippingAddress {
  return {
    countryCode: shippingAddress.country_iso2,
    state: shippingAddress.state,
    city: shippingAddress.city,
    streetLine1: shippingAddress.street_line1,
    streetLine2: shippingAddress.street_line2,
    postCode: shippingAddress.post_code,
  };
}
