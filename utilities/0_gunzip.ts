import { toArrayBuffer } from "../0_deps.ts";

export async function gunzip(buffer: Uint8Array): Promise<Uint8Array> {
  let readable: ReadableStream;
  if (ReadableStream.from) {
    readable = ReadableStream.from([buffer]);
  } else {
    readable = new ReadableStream({
      pull(controller) {
        controller.enqueue(buffer);
        controller.close();
      },
    });
  }
  readable = readable.pipeThrough(new DecompressionStream("gzip"));
  return new Uint8Array(await toArrayBuffer(readable));
}
