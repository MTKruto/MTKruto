import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { cleanObject } from "../utilities/0_object.ts";
import { MessageEntity } from "./0_message_entity.ts";
import { PollOption } from "./0_poll_option.ts";

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  totalVoterCount: number;
  isClosed: boolean;
  isAnonymous: boolean;
  type: "regular" | "quiz";
  allowMultipleAnswers?: boolean;
  correctOptionId?: string;
  explanationEntities?: MessageEntity[];
  openPeriod?: number;
  closeDate?: Date;
}

export function constructPoll(media_: types.MessageMediaPoll): Poll {
  const poll = media_.poll[as](types.Poll);
  return cleanObject({
    id: String(poll.id),
    question: poll.question,
    options: [], // TODO
    totalVoterCount: 0, // TODO
    isClosed: poll.closed || false,
    isAnonymous: !poll.publicVoters,
    type: poll.quiz ? "quiz" : "regular",
    allowMultipleAnswers: poll.quiz ? undefined : poll.multipleChoice || false,
    correctOptionId: "", // TODO,
    explanationEntities: [], // TODO
    openPeriod: poll.closePeriod,
    closeDate: poll.closeDate ? new Date(poll.closeDate * 1000) : undefined,
  });
}
