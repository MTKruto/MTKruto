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
  authKey?: Uint8Array;
  authKeyId?: bigint;
  salt?: bigint;
  sessionId: bigint;
  seqno = 0;

  constructor(test?: boolean) {
    super(test);
    this.sessionId = getRandomBigInt(8);
  }

  async connect() {
    const plain = new ClientPlain(this.test);
    await plain.connect();
    const { authKey, authKeyId, salt } = await plain.createAuthKey();
    await plain.disconnect();
    this.authKey = authKey;
    this.authKeyId = authKeyId;
    this.salt = salt;
    await super.connect();
    this.loop();
  }

  async loop() {
    if (!this.authKey || !this.authKeyId) {
      throw new Error("Not connected");
    }

    while (true) {
      const buffer = await this.transport.receive();
      const decrypted = await decryptMessage(
        buffer,
        this.authKey,
        this.authKeyId,
        this.sessionId,
      );
      const messages = decrypted instanceof MessageContainer
        ? decrypted.messages
        : [decrypted];

      for (const message of messages) {
        if (message.body instanceof RPCResult) {
          const result = message.body.result;
          const promise = this.promieMap.get(message.body.messageId);
          if (promise) {
            const [resolve, reject] = promise;
            if (result instanceof RpcError) {
              reject(new Error(`RPC error ${result.errorCode}`));
            } else {
              resolve(result);
            }
          }
        }
      }
    }
  }

  promieMap = new Map<
    bigint,
    [(obj: TLObject) => void, (err: Error) => void]
  >();

  async invoke(function_: Function) {
    if (!this.authKey || !this.authKeyId || !this.salt) {
      throw new Error("Not connected");
    }
    let seqNo = this.seqno * 2;
    if (!(function_ instanceof Ping)) {
      seqNo++;
      this.seqno++;
    }
    const message = new Message(getMessageId(), seqNo, function_);
    await this.transport.send(
      await encryptMessage(
        message,
        this.authKey,
        this.authKeyId,
        this.salt,
        this.sessionId,
      ),
    );
    console.log("sent");
    // return null;
    return await new Promise<TLObject>((resolve, reject) => {
      this.promieMap.set(message.id, [resolve, reject]);
    });
  }
}
