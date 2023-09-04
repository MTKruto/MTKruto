import * as types from "../tl/2_types.ts";

export interface PollOption {
  /** Option text, 1-100 characters */
  text: string;
  /** Number of users that voted for this option */
  voterCount: number;
}

export function constructPollOption(option: types.PollAnswer, results: Array<types.TypePollAnswerVoters>): PollOption {
  return {
    text: option.text,
    voterCount: results.find((v) => v.option.every((v, i) => option.option[i] == v))?.voters ?? 0,
  };
}
