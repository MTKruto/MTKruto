import { serve } from "https://deno.land/std@0.182.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  if (url.pathname != "/apiws") {
    return new Response();
  }
  const { response, socket } = Deno.upgradeWebSocket(req);

  const connection = await Deno.connect({ hostname: "127.0.0.1", port: 4430 });

  let buffer = new Array<number>();
  let canceled = false;
  (async () => {
    while (!canceled) {
      const bytes = new Uint8Array(1);

      try {
        await connection.read(bytes);
      } catch (err) {
        if (
          err instanceof Deno.errors.BadResource ||
          err instanceof Deno.errors.Interrupted
        ) {
          canceled = true;
          return;
        } else {
          throw err;
        }
      }

      buffer.push(bytes[0]);
    }
  })();
  (async () => {
    while (!canceled) {
      if (buffer.length != 0) {
        const bytes = buffer;
        buffer = [];
        try {
          socket.send(new Uint8Array(bytes));
        } catch (err) {
          console.warn("Failed to send web socket message:", err);
        }
      } else {
        await new Promise((r) => setTimeout(r, 20));
      }
    }
  })();

  socket.onmessage = (e) => {
    connection.write(new Uint8Array(e.data));
  };
  socket.onclose = () => connection.close();

  return response;
});
