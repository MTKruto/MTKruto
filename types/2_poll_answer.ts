import { Chat } from "./1_chat.ts";
import { User } from "./1_user.ts";

export interface PollAnswer {
  pollId: string;
  voterChat?: Chat;
  user?: User;
  optioIndexes: number[];
}
import * as types from "../tl/2_types.ts";
import { EntityGetter } from "./!0_misc.ts";

export async function constructPollAnswer(answer_: types.UpdateMessagePollVote, getEntity: EntityGetter) {
  const pollId = String(answer_.pollId);
  const voterChat = answer_.peer;
  if (voterChat instanceof types.PeerUser) {
    const user = await getEntity(peerUser);
  }
  await getEntity(voterChat);
}
