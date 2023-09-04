import * as types from "../tl/2_types.ts";
import { cleanObject } from "../utilities/0_object.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructPollOption, PollOption } from "./0_poll_option.ts";

export interface Poll {
  /** Unique poll identifier */
  id: string;
  /** Poll question, 1-300 characters  */
  question: string;
  /** List of poll options */
  options: PollOption[];
  /** Total number of users that voted in the poll */
  totalVoterCount: number;
  /** True, if the poll is closed */
  isClosed: boolean;
  /** True, if the poll is anonymous */
  isAnonymous: boolean;
  /** Poll type, currently can be “regular” or “quiz” */
  type: "regular" | "quiz";
  /** True, if the poll allows multiple answers */
  allowMultipleAnswers?: boolean;
  /** Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
  correctOptionId?: number;
  /** Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
  explanation?: string;
  /** Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
  explanationEntities?: MessageEntity[];
  /** Optional. Amount of time in seconds the poll will be active after creation */
  openPeriod?: number;
  /** Optional. Point in time (Unix timestamp) when the poll will be automatically closed */
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
