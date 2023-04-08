import { bufferFromBigInt } from "../utilities/0_buffer.ts";

export function revampType(type: string) {
  type = type.split("?").slice(-1)[0];
  type = type[0].toUpperCase() + type.slice(1);
  type = type.replace(/\.(.)/, (_: string, g: string) => g.toUpperCase());
  return type;
}

export function revampId(id: number) {
  return "0x" + [...bufferFromBigInt(id, 4, false, true)]
    .map((v) => v.toString(16).padStart(2, "0")).join("");
}
