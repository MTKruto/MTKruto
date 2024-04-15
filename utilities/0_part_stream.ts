import { concat } from "../0_deps.ts";

export interface Part {
  small: boolean;
  part: number;
  totalParts: number;
  bytes: Uint8Array;
}

export class PartStream extends TransformStream<Uint8Array, Part> {
  #buffer = new Uint8Array();
  #totalRead = 0;
  #part = 0;

  constructor(chunkSize: number) {
    super({
      transform: (chunk, controller) => {
        this.#totalRead += chunk.byteLength;
        chunk = concat([this.#buffer, chunk]);
        while (chunk.byteLength > chunkSize) {
          controller.enqueue({
            small: false,
            part: this.#part++,
            totalParts: -1,
            bytes: chunk.slice(0, chunkSize),
          });
          chunk = chunk.slice(chunkSize);
        }
        this.#buffer = chunk;
      },
      flush: (controller) => {
        controller.enqueue({
          small: this.#totalRead <= chunkSize,
          part: this.#part,
          totalParts: Math.ceil(this.#totalRead / chunkSize),
          bytes: this.#buffer,
        });
      },
    });
  }
}
