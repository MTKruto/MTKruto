export type Color = "red" | "orange" | "violet" | "green" | "cyan" | "blue" | "pink";

const colors: Color[] = [
  "red",
  "orange",
  "violet",
  "green",
  "cyan",
  "blue",
  "pink",
];
export function getColor(id: number) {
  id = Number(String(id).replaceAll("-100", "-"));
  if (id < 0) {
    id = -id;
  }
  return colors[id % 7];
}
