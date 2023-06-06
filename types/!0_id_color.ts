const colors = [
  "#ff5a2b", // red
  "#ffa92b", // orange
  "#b364f1", // violet
  "#30dc53", // green
  "#30dcc2", // cyan
  "#309cdc", // blue
  "#e52eb1", // pink
];

export function getIdColor(id: number) {
  id = Number(String(id).replaceAll("-100", "-"));
  if (id < 0) {
    id = -id;
  }
  return colors[id % 7];
}
