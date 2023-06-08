import { types } from "../mod.ts";

export interface MaskPosition {
  point: "forehead" | "eyes" | "mouth" | "chin";
  xShift: number;
  yShift: number;
  scale: number;
}

export function constructMaskPosition({ n, x, y, zoom }: types.MaskCoords): MaskPosition {
  return {
    point: n == 0 ? "forehead" : n == 1 ? "eyes" : n == 2 ? "mouth" : "chin",
    xShift: x,
    yShift: y,
    scale: zoom,
  };
}
