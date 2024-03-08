import { cleanObject } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructPollOption, PollOption } from "./0_poll_option.ts";

/** A poll. */
export interface Poll {
  /** The identifier of the poll. */
  id: string;
  /** The poll's question. */
  question: string;
  /** The poll's options. */
  options: PollOption[];
  /** The number of users who have participated in the poll. */
  totalVoterCount: number;
  /** Whether the poll is closed. */
  isClosed: boolean;
  /** Whether the poll is anonymous. */
  isAnonymous: boolean;
  /** The type of the poll. */
  type: "regular" | "quiz";
  /** Whether the poll allows multiple answers. */
  allowMultipleAnswers?: boolean;
  /** Index of the correct option. */
  correctOptionIndex?: number;
  /** A text that is shown to the user when the poll is answered. */
  explanation?: string;
  /** The explanation's entities. */
  explanationEntities?: MessageEntity[];
  /** Duration of the poll in seconds. */
  openPeriod?: number;
  /** The time in which the poll will be closed. */
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
    totalVoterCount: media_.results.total_voters ?? 0,
    isClosed: poll.closed || false,
    isAnonymous: !poll.public_voters,
    type: poll.quiz ? "quiz" : "regular",
    allowMultipleAnswers: poll.quiz ? undefined : poll.multiple_choice || false,
    correctOptionId,
    explanation: media_.results.solution,
    explanationEntities: media_.results.solution_entities?.map(constructMessageEntity).filter((v): v is MessageEntity => v != null),
    openPeriod: poll.close_period,
    closeDate: poll.close_date ? new Date(poll.close_date * 1000) : undefined,
  });
}
