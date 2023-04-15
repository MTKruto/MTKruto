import { bufferFromBigInt } from "../utilities/0_buffer.ts";

const abbrs = ["RPC", "HTTP", "DC", "CDN", "ABS", "GZIP", "OK", "DH"];
const abbrReplacements = [["Url", "URL"], ["Pq", "PQ"]];

export function toCamelCase(string: string, replaceAbbrs = false) {
  string = string.replace(/\.(.)/g, "_$1");
  if (replaceAbbrs) {
    for (const abbr of abbrs) {
      string = string.replace(new RegExp(`(^|_)${abbr}(_|$)`, "gi"), `$1${abbr}$2`);
    }
  }
  string = string.replace(/_(.)/g, (_: string, g: string) => g.toUpperCase());
  if (replaceAbbrs) {
    for (const [abbr, replacement] of abbrReplacements) {
      string = string.replaceAll(abbr, replacement);
    }
  }
  return string;
}

export function revampType(type: string, replaceAbbrs?: boolean) {
  type = type.split("?").slice(-1)[0];
  type = type[0].toUpperCase() + type.slice(1);
  type = toCamelCase(type, replaceAbbrs);
  return type;
}

export function revampId(id: number) {
  return "0x" + [...bufferFromBigInt(id, 4, false, true)]
    .map((v) => v.toString(16).padStart(2, "0")).join("");
}
