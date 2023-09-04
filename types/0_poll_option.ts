import * as types from "../tl/2_types.ts";

export interface PollOption {
  text: string;
  voterCount: number;
}

export function constructPollOption(option: types.PollAnswer, results: Array<types.TypePollAnswerVoters>): PollOption {
  return {
    text: option.text,
    voterCount: results.find((v) => v.option.every((v, i) => option.option[i] == v))?.voters ?? 0,
  };
}
