import { enums } from "../2_tl.ts";

export interface RestrictionReason {
  platform: string;
  reason: string;
  text: string;
}

export function constructRestrictionReason(rr: enums.RestrictionReason): RestrictionReason {
  return { platform: rr.platform, reason: rr.reason, text: rr.text };
}
