import { Api } from "../2_tl.ts";

export interface FailedInvitation {
  userId: number;
  premiumRequiredToInvite: boolean;
  premiumRequiredToSendMessage: boolean;
}

export function constructFailedInvitation(missingInvitee: Api.MissingInvitee): FailedInvitation {
  return {
    userId: Number(missingInvitee.user_id),
    premiumRequiredToInvite: !!missingInvitee.premium_would_allow_invite,
    premiumRequiredToSendMessage: !!missingInvitee.premium_required_for_pm,
  };
}
