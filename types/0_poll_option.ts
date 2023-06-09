import * as types from "../tl/2_types.ts";

export interface PollOption {
  text: string;
  voterCount: number;
}

export function constructPollOption(option_: types.PollAnswer) {
    return option_.
}
