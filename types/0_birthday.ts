import { types } from "../2_tl.ts";

/** A user's birthday. */
export interface Birthday {
  day: number;
  month: number;
  year?: number;
}

export function constructBirthday(birthday: types.Birthday) {
  return {
    day: birthday.day,
    month: birthday.month,
    year: birthday.year,
  };
}
