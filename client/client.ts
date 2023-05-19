import { gunzip } from "../deps.ts";
import { MaybePromise } from "../types.ts";
import { ackThreshold } from "../constants.ts";
import { getRandomBigInt } from "../utilities/0_bigint.ts";
import { decryptMessage, encryptMessage, getMessageId } from "../utilities/1_message.ts";
import { MaybeVectorTLObject } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import * as functions from "../tl/3_functions.ts";
import { TLReader } from "../tl/3_tl_reader.ts";
import { RPCResult } from "../tl/4_rpc_result.ts";
import { Message } from "../tl/5_message.ts";
import { MessageContainer } from "../tl/6_message_container.ts";
import { ClientAbstract } from "./client_abstract.ts";
import { ClientPlain } from "./client_plain.ts";
import { Session } from "../session/session.ts";
import { SessionMemory } from "../session/session_memory.ts";
import { TransportProvider } from "../transport/transport_provider.ts";

export type UpdatesHandler = null | ((client: Client, update: types.Updates) => MaybePromise<void>);

export class Client extends ClientAbstract {
  private sessionId = getRandomBigInt(8, true, false);
  private state = { salt: 0n, seqNo: 0 };
  private promises = new Map<bigint, { resolve: (obj: MaybeVectorTLObject) => void; reject: (err: MaybeVectorTLObject) => void }>();
  private toAcknowledge = new Set<bigint>();
  public updatesHandler: UpdatesHandler = null;

  constructor(public readonly session: Session = new SessionMemory(), params?: { transportProvider?: TransportProvider }) {
    super(params?.transportProvider);
  }

  async connect() {
    await this.session.load();
    if (this.session.authKey == null) {
      const plain = new ClientPlain(this.transportProvider);
      await plain.connect();
      const { authKey, salt } = await plain.createAuthKey();
      await plain.disconnect();
      this.state.salt = salt;
      this.session.authKey = authKey;
      await this.session.save();
    }
    if (this.session.dc != null) {
      const { connection, transport, dcId } = this.transportProvider({ dc: this.session.dc, cdn: false });
      this.connection = connection;
      this.transport = transport;
      this.dcId = dcId;
    }
    await super.connect();
    // logger().debug("Client connected");
    this.receiveLoop();
    this.pingLoop();
  }

  private async receiveLoop() {
    if (!this.session.authKey) {
      throw new Error("Not connected");
    }

    while (this.connected) {
      if (this.toAcknowledge.size >= ackThreshold) {
        await this.send(new types.MsgsAck({ msgIds: [...this.toAcknowledge] }));
        this.toAcknowledge.clear();
      }

      const buffer = await this.transport.receive();
      let decrypted: Message | MessageContainer;
      try {
        decrypted = await decryptMessage(
          buffer,
          this.session.authKey,
          this.sessionId,
        );
        console.log({ decrypted });
      } catch (_err) {
        console.log("failed to decrypt msg", { _err });
        // logger().error(`Failed to decrypt message: ${err}`);
        continue;
      }
      const messages = decrypted instanceof MessageContainer ? decrypted.messages : [decrypted];

      for (const message of messages) {
        let body = message.body;
        if (body instanceof types.GZIPPacked) {
          body = new TLReader(gunzip(body.packedData)).readObject();
        }
        console.log("---");
        console.log("message.body", message.body.constructor.name);
        console.log("body", body.constructor.name);
        console.log("---");
        // logger().debug(`Received ${body.constructor.name}`);
        if (body instanceof types.Updates) {
          this.updatesHandler?.(this, body);
        } else if (message.body instanceof RPCResult) {
          let result = message.body.result;
          if (result instanceof types.GZIPPacked) {
            result = new TLReader(gunzip(result.packedData)).readObject();
          }
          // console.log(result.constructor.name)
          const promise = this.promises.get(message.body.messageId);
          if (promise) {
            if (result instanceof types.RPCError) {
              promise.reject(result);
            } else {
              promise.resolve(result);
            }
            this.promises.delete(message.body.messageId);
          }
        } else if (message.body instanceof types.Pong) {
          const promise = this.promises.get(message.body.msgId);
          if (promise) {
            promise.resolve(message.body);
            this.promises.delete(message.body.msgId);
          }
        } else if (message.body instanceof types.BadMsgNotification || message.body instanceof types.BadServerSalt) {
          if (message.body instanceof types.BadServerSalt) {
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
        await this.invoke(new functions.Ping({ pingId: getRandomBigInt(8, true, false) }));
      } catch (_err) {
        // logger().error(`Failed to invoke ping: ${err}`);
      }
      await new Promise((r) => setTimeout(r, 60 * 1_000));
    }
  }

  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void> {
    if (!this.session.authKey) {
      throw new Error("Not connected");
    }

    console.log("invoking", function_.constructor.name);

    let seqNo = this.state.seqNo * 2;
    if (!(function_ instanceof functions.Ping) && !(function_ instanceof types.MsgsAck)) {
      seqNo++;
      this.state.seqNo++;
    }
    const message = new Message(getMessageId(), seqNo, function_);
    await this.transport.send(
      await encryptMessage(
        message,
        this.session.authKey,
        this.state.salt,
        this.sessionId,
      ),
    );
    // logger().debug(`Invoked ${function_.constructor.name}`);

    if (noWait) {
      return;
    }

    const result = await new Promise<MaybeVectorTLObject>((resolve, reject) => {
      this.promises.set(message.id, { resolve, reject });
    });

    if (result instanceof types.BadServerSalt) {
      return await this.invoke(function_) as T;
    } else {
      return result as T;
    }
  }

  send<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T) {
    return this.invoke(function_, true);
  }
}
