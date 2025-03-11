export type SlowModeDuration =
  | "10s"
  | "30s"
  | "1m"
  | "5m"
  | "15m"
  | "1h";

export function slowModeDurationToSeconds(duration: SlowModeDuration) {
  const amount = Number(duration.slice(0, -1));
  const unit = duration[duration.length - 1];
  if (unit == "s") {
    return amount;
  }
  const multiplyBy = unit == "h" ? 60 ** 2 : 60;
  return amount * multiplyBy;
}
