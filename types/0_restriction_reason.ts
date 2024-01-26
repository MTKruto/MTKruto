import { enums } from "../2_tl.ts";

/** The reason for restricting an entity. */
export interface RestrictionReason {
  platform: string;
  reason: string;
  text: string;
}

export function constructRestrictionReason(rr: enums.RestrictionReason): RestrictionReason {
  return { platform: rr.platform, reason: rr.reason, text: rr.text };
}
