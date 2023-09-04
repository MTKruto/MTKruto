import * as types from "../tl/2_types.ts";
import { cleanObject } from "../utilities/0_object.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructPollOption, PollOption } from "./0_poll_option.ts";

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  totalVoterCount: number;
  isClosed: boolean;
  isAnonymous: boolean;
  type: "regular" | "quiz";
  allowMultipleAnswers?: boolean;
  correctOptionId?: number;
  explanation?: string;
  explanationEntities?: MessageEntity[];
  openPeriod?: number;
  closeDate?: Date;
}

export function constructPoll(media_: types.MessageMediaPoll): Poll {
  const poll = media_.poll;
  const correctOption = media_.results.results?.find((v) => v.correct)?.option;
  const correctOptionId = correctOption !== undefined ? poll.answers.findIndex((v) => v.option.every((v, i) => correctOption[i] == v)) : undefined;

  return cleanObject({
    id: String(poll.id),
    question: poll.question,
    options: poll.answers.map((v) => constructPollOption(v, media_.results.results ?? [])),
    totalVoterCount: media_.results.totalVoters ?? 0,
    isClosed: poll.closed || false,
    isAnonymous: !poll.publicVoters,
    type: poll.quiz ? "quiz" : "regular",
    allowMultipleAnswers: poll.quiz ? undefined : poll.multipleChoice || false,
    correctOptionId,
    explanation: media_.results.solution,
    explanationEntities: media_.results.solutionEntities?.map(constructMessageEntity).filter((v): v is MessageEntity => v != null),
    openPeriod: poll.closePeriod,
    closeDate: poll.closeDate ? new Date(poll.closeDate * 1000) : undefined,
  });
}
