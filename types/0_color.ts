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
export function getColorFromPeerId(id: number) {
  id = Number(String(id).replaceAll("-100", "-"));
  if (id < 0) {
    id = -id;
  }
  return colors[id % 7];
}

export function getColorFromColorId(id: number): Color {
  switch (id) {
    case 0:
      return "red";
    case 1:
      return "orange";
    case 2:
      return "violet";
    case 3:
      return "green";
    case 4:
      return "cyan";
    case 5:
      return "blue";
    case 6:
      return "pink";
    default:
      return "blue";
  }
}
