import { unreachable } from "../0_deps.ts";
import { decodeText } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import type { ChatP, PeerGetter } from "./1_chat_p.ts";

/** A poll voter. */
export interface PollVoter {
  /** The voter chat. */
  voter: ChatP;
  /** The indexes of the cast options. */
  optionIndexes: number[];
  /** The point in time when the vote was cast. */
  votedAt: number;
}

export function constructPollVoter(mpv: Api.MessagePeerVote, getPeer: PeerGetter): PollVoter {
  if (Api.is("messagePeerVoteInputOption", mpv)) {
    unreachable();
  }
  const peer = getPeer(mpv.peer);
  if (peer === null) {
    unreachable();
  }

  const options = Api.is("messagePeerVote", mpv) ? [mpv.option] : mpv.options;
  return {
    voter: peer[0],
    optionIndexes: options.map(decodeText).map(Number),
    votedAt: mpv.date,
  };
}
