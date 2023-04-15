import { Client } from "./client/client.ts";
import {
  HelpGetConfig,
  InitConnection,
  InvokeWithLayer,
  Ping,
} from "./tl/3_functions.ts";

const client = new Client(true);

await client.connect();
await client.invoke(
  new InvokeWithLayer({
    layer: 155,
    query: new InitConnection({
      apiId: 1,
      deviceModel: "Unknown",
      systemVersion: "1.0",
      appVersion: "1.0",
      langCode: "en",
      langPack: "",
      systemLangCode: "en",
      query: new HelpGetConfig(),
    }),
  }),
);

const pong = await client.invoke(new Ping({ pingId: 142n }));

console.log(pong);
