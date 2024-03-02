export type ColorName = "red" | "orange" | "violet" | "green" | "cyan" | "blue" | "pink" | "combination 1" | "combination 2" | "combination 3" | "combination 4" | "combination 5" | "combination 6" | "combination 7" | "combination 8" | "combination 9" | "combination 10" | "combination 11" | "combination 12" | "combination 13" | "combination 14";

export function getColorFromPeerId(id: number): number {
  id = Number(String(id).replaceAll("-100", "-"));
  if (id < 0) {
    id = -id;
  }
  return Math.floor(id % 7);
}

export function getColorName(id: number): ColorName {
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
    case 7:
      return "combination 1";
    case 8:
      return "combination 2";
    case 9:
      return "combination 3";
    case 10:
      return "combination 4";
    case 11:
      return "combination 5";
    case 12:
      return "combination 6";
    case 13:
      return "combination 7";
    case 14:
      return "combination 8";
    case 15:
      return "combination 9";
    case 16:
      return "combination 10";
    case 17:
      return "combination 11";
    case 18:
      return "combination 12";
    case 19:
      return "combination 13";
    case 20:
      return "combination 14";
    default:
      return "blue";
  }
}
