import { gunzip } from "../deps.ts";
import { MaybePromise } from "../types.ts";
import { ackThreshold } from "../constants.ts";
import { getRandomBigInt } from "../utilities/0_bigint.ts";
import { logger } from "../utilities/0_logger.ts";
import { decryptMessage, encryptMessage, getMessageId } from "../utilities/1_message.ts";
import { TLObject } from "../tl/1_tl_object.ts";
import { BadMsgNotification, BadServerSalt, Constructor, GZIPPacked, MsgsAck, Pong, RPCError, Updates } from "../tl/2_constructors.ts";
import { Function, Ping } from "../tl/3_functions.ts";
import { TLReader } from "../tl/3_tl_reader.ts";
import { RPCResult } from "../tl/4_rpc_result.ts";
import { Message } from "../tl/5_message.ts";
import { MessageContainer } from "../tl/6_message_container.ts";
import { ClientAbstract } from "./client_abstract.ts";
import { ClientPlain } from "./client_plain.ts";

export type UpdatesHandler = null | ((client: Client, update: Updates) => MaybePromise<void>);

export class Client extends ClientAbstract {
  private sessionId = getRandomBigInt(8, true, false);
  private auth?: { key: Uint8Array; id: bigint };
  private state = { salt: 0n, seqNo: 0 };
  private promises = new Map<bigint, { resolve: (obj: TLObject) => void; reject: (err: TLObject) => void }>();
  private toAcknowledge = new Set<bigint>();
  public updatesHandler: UpdatesHandler = null;

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
    this.receiveLoop();
    this.pingLoop();
  }

  private async receiveLoop() {
    if (!this.auth) {
      throw new Error("Not connected");
    }

    while (this.connected) {
      if (this.toAcknowledge.size >= ackThreshold) {
        await this.send(new MsgsAck({ msgIds: [...this.toAcknowledge] }));
        this.toAcknowledge.clear();
      }

      const buffer = await this.transport.receive();
      let decrypted: Message | MessageContainer;
      try {
        decrypted = await decryptMessage(
          buffer,
          this.auth.key,
          this.auth.id,
          this.sessionId,
        );
      } catch (err) {
        logger().error(`Failed to decrypt message: ${err}`);
        continue;
      }
      const messages = decrypted instanceof MessageContainer ? decrypted.messages : [decrypted];

      for (const message of messages) {
        let body = message.body
        if (body instanceof GZIPPacked) {
          body = new TLReader(gunzip(body.packedData)).readObject();
        }
        logger().debug(`Received ${body.constructor.name}`);
        if (body instanceof Updates) {
          this.updatesHandler?.(this, body);
        } else if (message.body instanceof RPCResult) {
          let result = message.body.result;
          if (result instanceof GZIPPacked) {
            result = new TLReader(gunzip(result.packedData)).readObject()
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
        } else if (message.body instanceof BadMsgNotification || message.body instanceof BadServerSalt) {
          if (message.body instanceof BadServerSalt) {
            this.state.salt = message.body.newServerSalt;
          }
          const promise = this.promises.get(message.body.badMsgId);
          if (promise) {
            promise.resolve(message.body);
            this.promises.delete(message.body.badMsgId);
          }
        }

        this.toAcknowledge.add(message.id);
      }
    }
  }

  private async pingLoop() {
    while (this.connected) {
      try {
        await this.invoke(new Ping({ pingId: getRandomBigInt(8, true, false) }));
      } catch (err) {
        logger().error(`Failed to invoke ping: ${err}`);
      }
      await new Promise((r) => setTimeout(r, 60 * 1_000));
    }
  }

  async invoke<T extends (Function<unknown> | Constructor) = Function<unknown>>(function_: T): Promise<T extends Function<unknown> ? T["__R"] : void>;
  async invoke<T extends (Function<unknown> | Constructor) = Function<unknown>>(function_: T, noWait: true): Promise<void>;
  async invoke<T extends (Function<unknown> | Constructor) = Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void> {
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

    const result = await new Promise<TLObject>((resolve, reject) => {
      this.promises.set(message.id, { resolve, reject });
    });

    if (result instanceof BadServerSalt) {
      return await this.invoke(function_) as T;
    } else {
      return result as T;
    }
  }

  send<T extends (Function<unknown> | Constructor) = Function<unknown>>(function_: T) {
    return this.invoke(function_, true);
  }
}
