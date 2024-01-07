import { UNREACHABLE } from "./0_control.ts";

export function drop<T>(promise: Promise<T>) {
  promise.catch(() => {});
}

export function mustPrompt(message: string) {
  const result = prompt(message);
  if (result == null) {
    throw UNREACHABLE();
  } else {
    return result;
  }
}

export function mustPromptNumber(message: string) {
  let result = Number(BigInt(mustPrompt(message)));
  while (isNaN(result)) {
    console.log("Expected a number.");
    result = Number(BigInt(mustPrompt(message)));
  }
  return result;
}

export function mustPromptOneOf<T extends readonly string[]>(message: string, choices: T): T[number] {
  let result = prompt(message);
  while (result == null || !choices.includes(result)) {
    result = prompt(message);
  }
  return result;
}

export const ZERO_CHANNEL_ID = -1000000000000;

export const VECTOR_CONSTRUCTOR = 0x1CB5C415;

export function toUnixTimestamp(date: Date) {
  return Math.floor(date.getTime() / 1_000);
}

export function fromUnixTimestamp(date: number) {
  return new Date(date * 1_000);
}
