/** A keyboard button representing the type of the poll that is requested to be created. */
export interface KeyboardButtonPollType {
  /** If a type is not specified, the user will be allowed to choose either type. */
  type?: "regular" | "quiz";
}
