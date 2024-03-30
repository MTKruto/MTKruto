import { gunzip } from "../0_deps.ts";
import { ConnectionError } from "../0_errors.ts";
import { bigIntFromBuffer, CacheMap, drop, getLogger, getRandomBigInt, Logger, sha1, UNREACHABLE } from "../1_utilities.ts";
import { enums, functions, Message_, MessageContainer, name, ReadObject, RPCResult, TLError, TLObject, TLReader, types } from "../2_tl.ts";
import { upgradeInstance } from "../4_errors.ts";
import { ClientAbstract } from "./0_client_abstract.ts";
import { ClientAbstractParams } from "./0_client_abstract.ts";
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.ts";

// global ClientEncrypted ID counter for logs
let id = 0;

export type ErrorSource = "deserialization" | "decryption" | "unknown";

export interface Handlers {
  serverSaltReassigned?: (newServerSalt: bigint) => void;
  updates?: (updates: enums.Updates | enums.Update, call: TLObject | null, callback?: () => void) => void;
  result?: (result: ReadObject, callback: () => void) => void;
  error?: (err: unknown, source: ErrorSource) => void;
}

/**
 * An MTProto client for making encrypted connections. Most users won't need to interact with this. Used internally by `Client`.
 *
 * There are a few things to note:
 *
 * - This is a bare client and it stores nothing.
 * - It expects an authorization key to be present before invoking any method.
 * - Authorization must be set using `setAuthKey`.
 * - Incoming packets that aren't a reply to a specific call are passed to the assigned handlers.
 * - It doesn't uncompress compressed packets.
 */
export class ClientEncrypted extends ClientAbstract {
  #authKey = new Uint8Array();
  #authKeyId = 0n;
  #sessionId = getRandomBigInt(8, true, false);
  #state = { serverSalt: 0n, seqNo: 0, messageId: 0n };
  #toAcknowledge = new Set<bigint>();
  #recentAcks = new CacheMap<bigint, { container?: bigint; message: Message_ }>(20);
  #promises = new Map<bigint, { container?: bigint; message: Message_; resolve?: (obj: ReadObject) => void; reject?: (err: ReadObject | Error) => void; call: TLObject }>();

  // loggers
  #L: Logger;
  #LreceiveLoop: Logger;
  #Linvoke: Logger;

  // receive loop handlers
  handlers: Handlers = {};

  constructor(params?: ClientAbstractParams) {
    super(params);

    const L = this.#L = getLogger("ClientEncrypted").client(id++);
    this.#LreceiveLoop = L.branch("receiveLoop");
    this.#Linvoke = L.branch("invoke");
  }

  async connect(): Promise<void> {
    await super.connect();
    drop(this.#receiveLoop()); // TODO: ability to join this promise
  }

  async setAuthKey(key: Uint8Array) {
    const hash = await sha1(key);
    this.#authKeyId = bigIntFromBuffer(hash.slice(-8), true, false);
    this.#authKey = key;
  }

  get authKey(): Uint8Array {
    return this.#authKey;
  }

  set serverSalt(serverSalt: bigint) {
    this.#state.serverSalt = serverSalt;
  }

  get serverSalt(): bigint {
    return this.#state.serverSalt;
  }

  #nextMessageId() {
    return this.#state.messageId = getMessageId(this.#state.messageId);
  }

  #nextSeqNo(contentRelated: boolean) {
    let seqNo = this.#state.seqNo * 2;
    if (contentRelated) {
      seqNo++;
      this.#state.seqNo++;
    }
    return seqNo;
  }

  async #sendMessage(message: Message_ | MessageContainer) {
    const payload = await encryptMessage(
      message,
      this.#authKey,
      this.#authKeyId,
      this.#state.serverSalt,
      this.#sessionId,
    );
    await this.transport!.transport.send(payload);
    this.#L.out(message);
    this.#L.outBin(payload);
  }

  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void>;
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void> {
    const messageId = this.#nextMessageId();
    const message__ = new Message_(messageId, this.#nextSeqNo(true), function_);

    let message_: Message_ | MessageContainer;
    let container: bigint | undefined = undefined;

    if (this.#toAcknowledge.size) {
      const ack = new Message_(this.#nextMessageId(), this.#nextSeqNo(false), new types.Msgs_ack({ msg_ids: [...this.#toAcknowledge] }));
      this.#recentAcks.set(ack.id, { container, message: ack });
      message_ = new MessageContainer(container = this.#nextMessageId(), this.#nextSeqNo(false), [message__, ack]);
    } else {
      message_ = message__;
    }

    await this.#sendMessage(message_);
    this.#Linvoke.debug("invoked", function_[name]);

    if (noWait) {
      this.#promises.set(messageId, {
        container,
        message: message__,
        call: function_,
      });
      return;
    }

    return await new Promise<ReadObject>((resolve, reject) => {
      this.#promises.set(messageId, { container, message: message__, resolve, reject, call: function_ });
    }).then((v) => v as T);
  }

  async #receiveLoop() {
    if (!this.transport) {
      UNREACHABLE();
    }
    while (this.connected) {
      try {
        const buffer = await this.transport.transport.receive();
        this.#L.inBin(buffer);

        let decrypted;
        try {
          decrypted = await (decryptMessage(
            buffer,
            this.#authKey,
            this.#authKeyId,
            this.#sessionId,
          ));
          this.#L.in(decrypted);
        } catch (err) {
          this.#LreceiveLoop.error("failed to decrypt message:", err);
          this.handlers.error?.(err, "decryption");
          continue;
        }
        const messages = decrypted instanceof MessageContainer ? decrypted.messages : [decrypted];

        for (const message of messages) {
          let body = message.body;
          if (body instanceof types.Gzip_packed) {
            body = new TLReader(gunzip(body.packed_data)).readObject();
          }
          this.#LreceiveLoop.debug("received", (typeof body === "object" && name in body) ? body[name] : body.constructor.name);
          if (body instanceof types._Updates || body instanceof types._Update) {
            this.handlers.updates?.(body as enums.Updates | enums.Update, null);
          } else if (body instanceof types.New_session_created) {
            this.serverSalt = body.server_salt;
            this.handlers.serverSaltReassigned?.(this.serverSalt);
          } else if (message.body instanceof RPCResult) {
            let result = message.body.result;
            if (result instanceof types.Gzip_packed) {
              result = new TLReader(gunzip(result.packed_data)).readObject();
            }
            if (result instanceof types.Rpc_error) {
              this.#LreceiveLoop.debug("RPCResult:", result.error_code, result.error_message);
            } else {
              this.#LreceiveLoop.debug("RPCResult:", (typeof result === "object" && name in result) ? result[name] : result.constructor.name);
            }
            const messageId = message.body.messageId;
            const promise = this.#promises.get(messageId);
            const resolvePromise = () => {
              if (promise) {
                if (result instanceof types.Rpc_error) {
                  promise.reject?.(upgradeInstance(result, promise.call));
                } else {
                  promise.resolve?.(result);
                }
                this.#promises.delete(messageId);
              }
            };
            if (result instanceof types._Updates || result instanceof types._Update) {
              this.handlers.updates?.(result as enums.Updates | enums.Update, promise?.call ?? null, resolvePromise);
            } else {
              this.handlers.result?.(result, resolvePromise);
            }
          } else if (message.body instanceof types.Pong) {
            const promise = this.#promises.get(message.body.msg_id);
            if (promise) {
              promise.resolve?.(message.body);
              this.#promises.delete(message.body.msg_id);
            }
          } else if (message.body instanceof types.Bad_server_salt) {
            this.#LreceiveLoop.debug("server salt reassigned");
            this.serverSalt = message.body.new_server_salt;
            this.handlers.serverSaltReassigned?.(this.serverSalt);
            const promise = this.#promises.get(message.body.bad_msg_id);
            const ack = this.#recentAcks.get(message.body.bad_msg_id);
            if (promise) {
              drop(this.#sendMessage(promise.message));
            } else if (ack) {
              drop(this.#sendMessage(ack.message));
            } else {
              for (const promise of this.#promises.values()) {
                if (promise.container && promise.container == message.body.bad_msg_id) {
                  drop(this.#sendMessage(promise.message));
                }
              }
              for (const ack of this.#recentAcks.values()) {
                if (ack.container && ack.container == message.body.bad_msg_id) {
                  drop(this.#sendMessage(ack.message));
                }
              }
            }
          }

          this.#toAcknowledge.add(message.id);
        }
      } catch (err) {
        if (!this.connected) {
          break;
        } else if (err instanceof TLError) {
          this.#LreceiveLoop.error("failed to deserialize:", err);
          this.handlers.error?.(err, "deserialization");
        } else {
          this.#LreceiveLoop.error("unexpected error:", err);
        }
      }
    }

    if (!this.connected) {
      for (const [key, { reject }] of this.#promises.entries()) {
        reject?.(new ConnectionError("Connection was closed"));
        this.#promises.delete(key);
      }
    } else {
      UNREACHABLE();
    }
  }
}
