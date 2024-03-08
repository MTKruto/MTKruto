import { cleanObject } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructPollOption, PollOption } from "./0_poll_option.ts";

/** A poll. */
export interface Poll {
  /** Unique poll identifier. */
  id: string;
  /** The poll's question. */
  question: string;
  /** List of poll options. */
  options: PollOption[];
  /** Total number of users that voted in the poll. */
  totalVoterCount: number;
  /** True, if the poll is closed. */
  isClosed: boolean;
  /** True, if the poll is anonymous. */
  isAnonymous: boolean;
  /** Poll type, currently can be “regular” or “quiz”. */
  type: "regular" | "quiz";
  /** True, if the poll allows multiple answers. */
  allowMultipleAnswers?: boolean;
  /** 0-based identifier of the correct answer option. */
  correctOptionIndex?: number;
  /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters. */
  explanation?: string;
  /** Special entities like usernames, URLs, bot commands, etc. that appear in the explanation. */
  explanationEntities?: MessageEntity[];
  /** Amount of time in seconds the poll will be active after creation. */
  openPeriod?: number;
  /** Point in time (Unix timestamp) when the poll will be automatically closed. */
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
