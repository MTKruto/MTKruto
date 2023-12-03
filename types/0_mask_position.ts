import { enums } from "../2_tl.ts";

export interface MaskPosition {
  /** The part of the face relative to which the mask should be placed. One of "forehead", "eyes", "mouth", or "chin". */
  point: "forehead" | "eyes" | "mouth" | "chin";
  /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
  xShift: number;
  /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
  yShift: number;
  /** Mask scaling coefficient. For example, 2.0 means double size. */
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
