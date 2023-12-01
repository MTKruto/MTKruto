import { enums } from "../2_tl.ts";

export interface PollOption {
  /** The option's text (1-100 characters). */
  text: string;
  /** Number of users that voted this option. */
  voterCount: number;
}

export function constructPollOption(option: enums.PollAnswer, results: Array<enums.PollAnswerVoters>): PollOption {
  return {
    text: option.text,
    voterCount: results.find((v) => v.option.every((v, i) => option.option[i] == v))?.voters ?? 0,
  };
}
