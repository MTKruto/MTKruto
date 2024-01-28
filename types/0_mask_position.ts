import { enums } from "../2_tl.ts";

/** A mask position. */
export interface MaskPosition {
  point: "forehead" | "eyes" | "mouth" | "chin";
  xShift: number;
  yShift: number;
  scale: number;
}

export function constructMaskPosition({ n, x, y, zoom }: enums.MaskCoords): MaskPosition {
  return {
    point: n == 0 ? "forehead" : n == 1 ? "eyes" : n == 2 ? "mouth" : "chin",
    xShift: x,
    yShift: y,
    scale: zoom,
  };
}
