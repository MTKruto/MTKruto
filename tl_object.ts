type MaybeArrayOf<T> = T | T[];
type MaybeInArray<T> = T | [T];

export type Params = [
  | null
  | MaybeArrayOf<
    | string
    | number
    | bigint
    | boolean
    | Uint8Array
    | TLObject
  >,
  MaybeInArray<typeof TLObject | typeof Uint8Array | string>,
][];

export const id = Symbol("id");

export const params = Symbol("params");

export abstract class TLObject {
  protected abstract get [id](): number | symbol;
  protected abstract get [params](): Params | symbol;
}
