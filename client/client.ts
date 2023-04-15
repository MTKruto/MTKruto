import { TLObject } from "../tl/1_tl_object.ts";
import { RpcError } from "../tl/2_constructors.ts";
import { Function, Ping } from "../tl/3_functions.ts";
import { RPCResult } from "../tl/5_rpc_result.ts";
import { Message } from "../tl/6_message.ts";
import { MessageContainer } from "../tl/7_message_container.ts";
import { getRandomBigInt } from "../utilities/0_bigint.ts";
import {
  decryptMessage,
  encryptMessage,
  getMessageId,
} from "../utilities/1_message.ts";
import { ClientAbstract } from "./client_abstract.ts";
import { ClientPlain } from "./client_plain.ts";

export class Client extends ClientAbstract {
  auth?: { key: Uint8Array; id: bigint };
  salt = 0n;
  seqNo = 0;
  sessionId: bigint;
  promises = new Map<
    bigint,
    { resolve: (obj: TLObject) => void; reject: (err: TLObject) => void }
  >();

  constructor(test?: boolean) {
    super(test);
    this.sessionId = getRandomBigInt(8);
  }

  async connect() {
    const plain = new ClientPlain(this.test);
    await plain.connect();
    const { authKey: key, authKeyId: id, salt } = await plain.createAuthKey();
    await plain.disconnect();
    this.auth = { key, id };
    this.salt = salt;
    await super.connect();
    this.loop();
  }

  private async loop() {
    if (!this.auth) {
      throw new Error("Not connected");
    }

    while (true) {
      const buffer = await this.transport.receive();
      const decrypted = await decryptMessage(
        buffer,
        this.auth.key,
        this.auth.id,
        this.sessionId,
      );
      const messages = decrypted instanceof MessageContainer
        ? decrypted.messages
        : [decrypted];

      for (const message of messages) {
        if (message.body instanceof RPCResult) {
          const result = message.body.result;
          const promise = this.promises.get(message.body.messageId);
          if (promise) {
            if (result instanceof RpcError) {
              promise.reject(result);
            } else {
              promise.resolve(result);
            }
          }
        }
      }
    }
  }

  async invoke(function_: Function) {
    if (!this.auth) {
      throw new Error("Not connected");
    }
    let seqNo = this.seqNo * 2;
    if (!(function_ instanceof Ping)) {
      seqNo++;
      this.seqNo++;
    }
    const message = new Message(getMessageId(), seqNo, function_);
    await this.transport.send(
      await encryptMessage(
        message,
        this.auth.key,
        this.auth.id,
        this.salt,
        this.sessionId,
      ),
    );
    return await new Promise<TLObject>((resolve, reject) => {
      this.promises.set(message.id, { resolve, reject });
    });
  }
}
