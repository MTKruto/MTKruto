import { gunzip } from "../deps.ts";
import { getRandomBigInt } from "../utilities/0_bigint.ts";
import { decryptMessage, encryptMessage, getMessageId } from "../utilities/1_message.ts";
import { TLObject } from "../tl/1_tl_object.ts";
import { GZIPPacked, MsgsAck, Pong, RPCError } from "../tl/2_constructors.ts";
import { Function, Ping } from "../tl/3_functions.ts";
import { RpcResult } from "../tl/4_rpc_result.ts";
import { Message } from "../tl/5_message.ts";
import { MessageContainer } from "../tl/6_message_container.ts";
import { ClientAbstract } from "./client_abstract.ts";
import { ClientPlain } from "./client_plain.ts";
import { TLReader } from "../tl/3_tl_reader.ts";
import { logger } from "../utilities/0_logger.ts";

export class Client extends ClientAbstract {
  private sessionId = getRandomBigInt(8, true, true);
  private auth?: { key: Uint8Array; id: bigint };
  private state = { salt: 0n, seqNo: 0 };
  private promises = new Map<bigint, { resolve: (obj: TLObject) => void; reject: (err: TLObject) => void }>();
  private toAcknowledge = new Set<bigint>();

  constructor(test?: boolean) {
    super(test);
  }

  async connect() {
    const plain = new ClientPlain(this.test);
    await plain.connect();
    const { authKey: key, authKeyId: id, salt } = await plain.createAuthKey();
    await plain.disconnect();
    this.auth = { key, id };
    this.state.salt = salt;
    await super.connect();
    logger().debug("Client connected");
    this.loop();
  }

  private async loop() {
    if (!this.auth) {
      throw new Error("Not connected");
    }

    while (true) {
      if (this.toAcknowledge.size != 0) {
        await this.invoke(new MsgsAck({ msgIds: [...this.toAcknowledge] }), true);
        this.toAcknowledge.clear();
      }

      const buffer = await this.transport.receive();
      const decrypted = await decryptMessage(
        buffer,
        this.auth.key,
        this.auth.id,
        this.sessionId,
      );
      const messages = decrypted instanceof MessageContainer ? decrypted.messages : [decrypted];

      for (const message of messages) {
        if (message.body instanceof RpcResult) {
          let result = message.body.result;
          if (result instanceof GZIPPacked) {
            result = new TLReader(gunzip(result.packedData)).readObject();
          }
          const promise = this.promises.get(message.body.messageId);
          if (promise) {
            if (result instanceof RPCError) {
              promise.reject(result);
            } else {
              promise.resolve(result);
            }
            this.promises.delete(message.body.messageId);
          }
        } else if (message.body instanceof Pong) {
          const promise = this.promises.get(message.body.msgId);
          if (promise) {
            promise.resolve(message.body);
            this.promises.delete(message.body.msgId);
          }
        }

        this.toAcknowledge.add(message.id);
      }
    }
  }

  async invoke(function_: Function): Promise<TLObject>;
  async invoke(function_: Function, noWait: true): Promise<void>;
  async invoke(function_: Function, noWait?: boolean): Promise<TLObject | void> {
    if (!this.auth) {
      throw new Error("Not connected");
    }
    let seqNo = this.state.seqNo * 2;
    if (!(function_ instanceof Ping) && !(function_ instanceof MsgsAck)) {
      seqNo++;
      this.state.seqNo++;
    }
    const message = new Message(getMessageId(), seqNo, function_);
    await this.transport.send(
      await encryptMessage(
        message,
        this.auth.key,
        this.auth.id,
        this.state.salt,
        this.sessionId,
      ),
    );
    logger().debug(`Invoked ${function_.constructor.name}`);

    if (noWait) {
      return;
    }

    return await new Promise<TLObject>((resolve, reject) => {
      this.promises.set(message.id, { resolve, reject });
    });
  }
}
