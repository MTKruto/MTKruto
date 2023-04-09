import { getDHParams, reqPqMulti } from "./requests.ts";
import { ConnectionWebSocket } from "./connection/connection_web_socket.ts";
import { ConnectionTCP } from "./connection/connection_tcp.ts";
import { TransportIntermediate } from "./transport/transport_intermediate.ts";
import { Connection } from "./connection/connection.ts";
import { TransportAbridged } from "./transport/transport_abridged.ts";
import {
  packEncryptedMessage,
  unpackEncryptedMessage,
} from "./utilities/1_tl.ts";
import { Ping } from "./tl/3_functions.ts";
import { TLReader } from "./tl/3_tl_reader.ts";

function getConnection(server: "piltover" | "piltover-ws" | "tg" | "tg-ws") {
  switch (server) {
    case "piltover":
      return new ConnectionTCP("127.0.0.1", 4430);
    case "piltover-ws":
      return new ConnectionWebSocket("ws://127.0.0.1:8000/apiws");
    case "tg":
      return new ConnectionTCP("149.154.167.40", 80);
    case "tg-ws":
      return new ConnectionWebSocket("wss://vesta.web.telegram.org:443/apiws");
  }
}

function getTransport(
  connection: Connection,
  type: "abridged" | "intermediate",
  obfuscated: boolean,
) {
  switch (type) {
    case "abridged":
      return new TransportAbridged(connection, obfuscated);
    case "intermediate":
      return new TransportIntermediate(connection, obfuscated);
  }
}

const connection = getConnection("piltover");
const transport = getTransport(connection, "intermediate", false);

await connection.open();

await transport.initialize();

//#region genauthkey
const { pq, pqBytes, serverNonce, nonce, publicKeyFingerprint } =
  await reqPqMulti(transport);

const authKey = await getDHParams(
  transport,
  pq,
  pqBytes,
  nonce,
  serverNonce,
  publicKeyFingerprint,
);

await transport.send(
  await packEncryptedMessage(
    new Ping({ pingId: 4472942n }).serialize(),
    authKey,
  ),
);

const buffer = await transport.receive();

const { message } = await unpackEncryptedMessage(buffer, authKey);

const reader = new TLReader(message);
const obj = reader.readObject();
console.log(obj);
