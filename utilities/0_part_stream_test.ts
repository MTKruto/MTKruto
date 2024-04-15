import { assertEquals } from "../0_deps.ts";
import { PartStream } from "./0_part_stream.ts";

const chunkSize = 1024;

const n = () => crypto.getRandomValues(new Uint8Array(chunkSize));
const buffers = [n(), n(), n(), n()];

Deno.test("exact", async () => {
  // @ts-ignore: lib
  const stream = ReadableStream.from(buffers)
    .pipeThrough(new PartStream(chunkSize));

  let i = 0;
  const expectedTotalParts = [-1, -1, -1, 4];
  for await (const part of stream) {
    assertEquals(part.small, false);
    assertEquals(part.part, i);
    assertEquals(part.totalParts, expectedTotalParts[i]);
    assertEquals(part.bytes, buffers[i++]);
  }
});

Deno.test("small", async () => {
  // @ts-ignore: lib
  const stream = ReadableStream.from(buffers.slice(0, 1))
    .pipeThrough(new PartStream(chunkSize));

  let i = 0;
  for await (const part of stream) {
    assertEquals(i++, 0);
    assertEquals(part.small, true);
    assertEquals(part.part, 0);
    assertEquals(part.bytes, buffers[0]);
    assertEquals(part.totalParts, 1);
  }
});

Deno.test("small 2", async () => {
  const buffers = [new Uint8Array(chunkSize - 20)];
  // @ts-ignore: lib
  const stream = ReadableStream.from(buffers)
    .pipeThrough(new PartStream(chunkSize));

  let i = 0;
  for await (const part of stream) {
    assertEquals(i++, 0);
    assertEquals(part.small, true);
    assertEquals(part.part, 0);
    assertEquals(part.bytes, buffers[0]);
    assertEquals(part.totalParts, 1);
  }
});
