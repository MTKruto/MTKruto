import { unreachable } from "../0_deps.ts";
import { decodeText } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";

/** An answer to a poll. */
export interface PollAnswer {
  /** The identifier of the poll that was responded to. */
  pollId: string;
  /** The user who responded to the poll. */
  from: ChatP;
  /** The indexes of the options chosen by the user. */
  optionIndexes: number[];
}

export async function constructPollAnswer(update: Api.updateMessagePollVote, getEntity: EntityGetter): Promise<PollAnswer> {
  const pollId = String(update.poll_id);
  const entity = await getEntity(update.peer);
  if (!entity) {
    unreachable();
  }
  const from = constructChatP(entity);
  const optionIndexes = update.options.map((v) => Number(decodeText(v)));
  return {
    pollId,
    from,
    optionIndexes,
  };
}
