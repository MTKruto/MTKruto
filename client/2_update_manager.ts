/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { delay, SECOND, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getLogger, Logger, Mutex, Queue, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { PersistentTimestampInvalid } from "../3_errors.ts";
import { constructChatP, constructUser, ID } from "../3_types.ts";
import { CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER } from "../4_constants.ts";
import { peerToChatId } from "../tl/2_telegram.ts";
import { C } from "./1_types.ts";

type UpdateHandler = (update: Api.Update) => Promise<(() => Promise<unknown>)>;

export type PtsUpdate =
  | Api.updateNewMessage
  | Api.updateDeleteMessages
  | Api.updateReadHistoryInbox
  | Api.updateReadHistoryOutbox
  | Api.updatePinnedChannelMessages
  | Api.updatePinnedMessages
  | Api.updateFolderPeers
  | Api.updateChannelWebPage
  | Api.updateEditMessage
  | Api.updateReadMessagesContents
  | Api.updateWebPage;

export type ChannelPtsUpdate =
  | Api.updateNewChannelMessage
  | Api.updateEditChannelMessage
  | Api.updateDeleteChannelMessages
  | Api.updateChannelTooLong;

export type QtsUpdate =
  | Api.updateNewEncryptedMessage
  | Api.updateMessagePollVote
  | Api.updateBotStopped
  | Api.updateChatParticipant
  | Api.updateChannelParticipant
  | Api.updateBotChatInviteRequester
  | Api.updateBotChatBoost
  | Api.updateBotMessageReaction
  | Api.updateBotMessageReactions
  | Api.updateBotBusinessConnect
  | Api.updateBotNewBusinessMessage
  | Api.updateBotEditBusinessMessage
  | Api.updateBotDeleteBusinessMessage;

export class UpdateManager {
  static readonly QTS_COUNT = 1;
  static readonly MAIN_BOX_ID = 0n;

  #c: C;
  #updateState?: Api.updates_State;
  #updateHandler?: UpdateHandler;

  #LrecoverUpdateGap: Logger;
  #LrecoverChannelUpdateGap: Logger;
  #L$handleUpdate: Logger;
  #L$processUpdates: Logger;
  #LfetchState: Logger;
  #LopenChat: Logger;

  constructor(c: C) {
    this.#c = c;

    const L = getLogger("UpdateManager").client(c.id);
    this.#LrecoverUpdateGap = L.branch("recoverUpdateGap");
    this.#LrecoverChannelUpdateGap = L.branch("recoverChannelUpdateGap");
    this.#L$handleUpdate = L.branch("#handleUpdate");
    this.#L$processUpdates = L.branch("#processUpdates");
    this.#LfetchState = L.branch("fetchState");
    this.#LopenChat = L.branch("openChat");
  }

  static isPtsUpdate(v: Api.Update): v is PtsUpdate {
    return Api.isOneOf(["updateNewMessage", "updateDeleteMessages", "updateReadHistoryInbox", "updateReadHistoryOutbox", "updatePinnedChannelMessages", "updatePinnedMessages", "updateFolderPeers", "updateChannelWebPage", "updateEditMessage", "updateReadMessagesContents", "updateWebPage"], v);
  }

  static isQtsUpdate(v: Api.Update): v is QtsUpdate {
    return Api.isOneOf(["updateNewEncryptedMessage", "updateMessagePollVote", "updateBotStopped", "updateChatParticipant", "updateChannelParticipant", "updateBotChatInviteRequester", "updateBotChatBoost", "updateBotMessageReaction", "updateBotMessageReactions", "updateBotBusinessConnect", "updateBotNewBusinessMessage", "updateBotEditBusinessMessage", "updateBotDeleteBusinessMessage"], v);
  }

  static isChannelPtsUpdate(v: Api.Update | Api.Updates): v is ChannelPtsUpdate {
    return Api.isOneOf([
      "updateNewChannelMessage",
      "updateEditChannelMessage",
      "updateDeleteChannelMessages",
      "updateChannelTooLong",
    ], v);
  }

  #defaultDropPendingUpdates: boolean | null = null;
  async #mustDropPendingUpdates() {
    if (typeof this.#c.dropPendingUpdates === "boolean") {
      return this.#c.dropPendingUpdates;
    }
    if (this.#defaultDropPendingUpdates == null) {
      this.#defaultDropPendingUpdates = await this.#c.storage.getAccountType() == "bot";
    }
    return this.#defaultDropPendingUpdates;
  }

  #state: Api.updates_State | null | undefined = undefined;
  async #getState() {
    if (await this.#mustDropPendingUpdates()) {
      return this.#state ?? null;
    }
    if (this.#state !== undefined) {
      return this.#state;
    }
    const state = await this.#c.storage.getState();
    return this.#state = state;
  }

  async #setState(state: Api.updates_State) {
    this.#state = state;
    if (!await this.#mustDropPendingUpdates()) {
      await this.#c.storage.setState(state);
    }
  }

  async fetchState(source: string) {
    let state = await this.#c.invoke({ _: "updates.getState" });
    const difference = await this.#c.invoke({ ...state, _: "updates.getDifference" });
    if (Api.is("updates.difference", difference)) {
      state = difference.state;
    } else if (Api.is("updates.differenceSlice", difference)) {
      state = difference.intermediate_state;
    }
    this.#updateState = state;
    this.#LfetchState.debug(`state fetched [${source}]`);
    if (await this.#mustDropPendingUpdates()) {
      await this.#setState(state);
    }
  }

  #extractMessages(context: Api.DeserializedType) {
    const messages = new Array<Api.message>();
    if (Array.isArray(context)) {
      for (const item of context) {
        messages.push(...this.#extractMessages(item));
      }
    } else if (Api.isOneOf(["updates", "updatesCombined"], context)) {
      messages.push(...this.#extractMessages(context.updates));
    } else if (Api.isOneOf(["updates.difference", "updates.differenceSlice", "updates.channelDifference"], context)) {
      for (const message of context.new_messages) {
        if (Api.is("message", message)) {
          messages.push(message);
        }
      }
      messages.push(...this.#extractMessages(context.other_updates));
    } else if (Api.isOneOf(["updateNewMessage", "updateNewChannelMessage", "updateEditMessage", "updateEditChannelMessage", "updateBotNewBusinessMessage", "updateBotNewBusinessMessage"], context)) {
      if (Api.is("message", context.message)) {
        messages.push(context.message);
      }
    } else if (Api.is("message", context)) {
      messages.push(context);
    } else if (context != null && typeof context === "object" && "messages" in context && Array.isArray(context.messages)) {
      for (const message of context.messages) {
        if (Api.is("message", message)) {
          messages.push(message);
        }
      }
    }
    return messages;
  }

  #extractMinPeerReferences(context: Api.DeserializedType) {
    const minPeerReferences = new Array<{ chatId: number; senderId: number; messageId: number }>();
    const messages = this.#extractMessages(context);
    for (const message of messages) {
      if (!message.from_id) {
        continue;
      }
      minPeerReferences.push({ chatId: Api.peerToChatId(message.peer_id), senderId: Api.peerToChatId(message.from_id), messageId: message.id });
    }
    return minPeerReferences;
  }

  async processChats(chats: Api.Chat[], _context: Api.DeserializedType) {
    for (const chat of chats) {
      await this.processChat(chat);
    }
  }

  async processChat(chat: Api.Chat) {
    if (Api.is("chatEmpty", chat)) {
      return;
    }
    if (Api.is("channel", chat) && chat.min) {
      return; // TODO
    }
    
    this.#c.messageStorage.setPeer(chat);

    if ("username" in chat && chat.username) {
      await this.#c.messageStorage.updateUsernames(Api.peerToChatId(chat), [chat.username]);
    }
    if ("usernames" in chat && chat.usernames) {
      await this.#c.messageStorage.updateUsernames(Api.peerToChatId(chat), chat.usernames.map((v) => v.username));
    }
  }

  async processResult(result: Api.DeserializedType) {
    if (result !== null && typeof result === "object") {
      if ("chats" in result) {
        let valid = true;
        for (const chat of result.chats) {
          if (!Api.isOfEnum("Chat", chat)) {
            valid = false;
            break;
          }
        }
        if (valid) {
          await this.processChats(result.chats as Api.Chat[], result);
        }
      }

      if ("users" in result && Array.isArray(result.users)) {
        let valid = true;
        for (const user of result.users) {
          if (!Api.isOfEnum("User", user)) {
            valid = false;
            break;
          }
        }
        if (valid) {
          await this.processUsers(result.users as Api.User[], result);
        }
      }

      if ("messages" in result && Array.isArray(result.messages)) {
        for (const message of result.messages) {
          if (Api.is("message", message) || Api.is("messageService", message)) {
            await this.#c.messageStorage.setMessage(Api.peerToChatId(message.peer_id), message.id, message);
          }
        }
      }
    }

    if (Api.is("messages.messages", result)) {
      for (const message of result.messages) {
        if (Api.is("message", message) || Api.is("messageService", message)) {
          await this.#c.messageStorage.setMessage(Api.peerToChatId(message.peer_id), message.id, message);
        }
      }
    }
  }

  async processUsers(users: Api.User[], _context: Api.DeserializedType) {
    for (const user of users) {
      await this.processUser(user);
    }
  }

  async processUser(user: Api.User) {
    if (Api.is("userEmpty", user)) {
      return;
    }
    if (user.min) {
      return; // TODO
    }

    this.#c.messageStorage.setPeer(user);

    if (user.username) {
      await this.#c.messageStorage.updateUsernames(Api.peerToChatId(user), [user.username]);
    }
    if (user.usernames) {
      await this.#c.messageStorage.updateUsernames(Api.peerToChatId(user), user.usernames.map((v) => v.username));
    }
  }

  #handleUpdateQueues = new Map<bigint, Queue>();
  getHandleUpdateQueue(boxId: bigint) {
    let queue = this.#handleUpdateQueues.get(boxId);
    if (queue !== undefined) {
      return queue;
    } else {
      queue = new Queue(`handleUpdate-${boxId}`, true);
      return queue;
    }
  }

  #nonFirst = new Set<bigint>();
  async #getChannelPtsWithDropPendingUpdatesCheck(channelId: bigint) {
    if (!(await this.#mustDropPendingUpdates())) {
      return await this.#c.storage.getChannelPts(channelId);
    }
    const first = !this.#nonFirst.has(channelId);
    if (first) {
      this.#nonFirst.add(channelId);
      return null;
    } else {
      return await this.#c.storage.getChannelPts(channelId);
    }
  }

  async #checkGap(pts: number, ptsCount: number) {
    const localState = await this.#getLocalState();
    if (localState.pts + ptsCount < pts) {
      await this.recoverUpdateGap("processUpdates[pts]");
    }
  }
  async #checkGapQts(qts: number) {
    const localState = await this.#getLocalState();
    if (localState.qts + UpdateManager.QTS_COUNT < qts) {
      await this.recoverUpdateGap("processUpdates[qts]");
    }
  }
  async #checkChannelGap(channelId: bigint, pts: number, ptsCount: number) {
    let localPts = await this.#getChannelPtsWithDropPendingUpdatesCheck(channelId);
    if (!localPts) {
      localPts = pts - ptsCount;
    }
    if (localPts + ptsCount < pts) {
      await this.#recoverChannelUpdateGap(channelId, "processUpdates");
    }
  }

  #channelUpdateQueues = new Map<bigint, Queue>();

  async #processChannelPtsUpdateInner(update: Api.updateNewChannelMessage | Api.updateEditChannelMessage | Api.updateDeleteChannelMessages | Api.updateChannelTooLong, checkGap: boolean) {
    const channelId = Api.is("updateNewChannelMessage", update) || Api.is("updateEditChannelMessage", update) ? Api.as("peerChannel", (update.message as Api.message | Api.messageService).peer_id).channel_id : update.channel_id;
    if (Api.is("updateChannelTooLong", update)) {
      if (update.pts != undefined) {
        await this.#c.storage.setChannelPts(channelId, update.pts);
      }
      await this.#recoverChannelUpdateGap(channelId, "updateChannelTooLong");
      return;
    }
    if (update.pts != 0) {
      const ptsCount = update.pts_count;
      if (checkGap) {
        await this.#checkChannelGap(channelId, update.pts, ptsCount);
      }
      let currentPts: number | null = await this.#getChannelPtsWithDropPendingUpdatesCheck(channelId);
      currentPts ??= update.pts - ptsCount;
      if (currentPts + ptsCount > update.pts) {
        return;
      }
    }

    if (this.#c.guaranteeUpdateDelivery) {
      await this.#c.storage.setUpdate(channelId, update);
    }
    if (update.pts != 0) {
      await this.#c.storage.setChannelPts(channelId, update.pts);
    }
    this.#queueUpdate(update, channelId, true);
  }

  #queueUpdate(update: Api.Update, boxId: bigint, pts: boolean) {
    this.getHandleUpdateQueue(boxId).add(async () => {
      if (this.#c.guaranteeUpdateDelivery && pts) {
        await this.#handleStoredUpdates(boxId);
      } else {
        await (await this.#handleUpdate(update))();
      }
    });
  }

  #processChannelPtsUpdate(update: ChannelPtsUpdate, checkGap: boolean) {
    const channelId = Api.is("updateNewChannelMessage", update) || Api.is("updateEditChannelMessage", update) ? Api.as("peerChannel", (update.message as Api.message | Api.messageService).peer_id).channel_id : update.channel_id;
    let queue = this.#channelUpdateQueues.get(channelId);
    if (queue == undefined) {
      queue = new Queue(`channelUpdates-${channelId}`);
      this.#channelUpdateQueues.set(channelId, queue);
    }
    queue.add(async () => {
      await this.#processChannelPtsUpdateInner(update, checkGap);
    });
  }

  async #processPtsUpdateInner(update: PtsUpdate, checkGap: boolean) {
    if (update.pts != 0 && checkGap) {
      await this.#checkGap(update.pts, update.pts_count);
      if (await this.#needsGetDifference(update)) {
        await this.recoverUpdateGap("needsGetDifference");
      }
    }

    const localState = await this.#getLocalState();
    if (localState.pts + update.pts_count > update.pts) {
      return;
    }

    if (this.#c.guaranteeUpdateDelivery) {
      await this.#c.storage.setUpdate(UpdateManager.MAIN_BOX_ID, update);
    }
    if (update.pts != 0) {
      await this.#setUpdatePts(update.pts);
    }
    this.#queueUpdate(update, 1n, false);
  }

  #ptsUpdateQueue = new Queue("ptsUpdate");
  #processPtsUpdate(update: PtsUpdate, checkGap: boolean) {
    this.#ptsUpdateQueue.add(async () => {
      await this.#processPtsUpdateInner(update, checkGap);
    });
  }

  async #processQtsUpdateInner(update: QtsUpdate, checkGap: boolean) {
    const localState = await this.#getLocalState();
    if (update.qts != 0) {
      if (checkGap) {
        await this.#checkGapQts(update.qts);
      }
      if (localState.qts + UpdateManager.QTS_COUNT > update.qts) {
        return;
      }
    }

    if (this.#c.guaranteeUpdateDelivery) {
      await this.#c.storage.setUpdate(UpdateManager.MAIN_BOX_ID, update);
    }
    if (update.qts != 0) {
      await this.#setUpdateQts(update.qts);
    }
    this.#queueUpdate(update, 0n, true);
  }

  #qtsUpdateQueue = new Queue("qtsUpdate");
  #processQtsUpdate(update: QtsUpdate, checkGap: boolean) {
    this.#qtsUpdateQueue.add(async () => {
      await this.#processQtsUpdateInner(update, checkGap);
    });
  }

  #processUpdatesQueue = new Queue("UpdateManager/processUpdates");
  processUpdates(updates: Api.Update | Api.Updates, checkGap: boolean, call: Api.AnyObject | null = null, callback?: () => void) {
    this.#processUpdatesQueue.add(() => this.#processUpdates(updates, checkGap, call).finally(callback));
  }

  async #processUpdates(updates_: Api.Update | Api.Updates, checkGap: boolean, call: Api.AnyObject | null = null) {
    /// First, individual updates (Update[1]) are extracted from Updates.[2]
    ///
    /// If an updatesTooLong[3] was received, an update gap recovery is initiated and no further action will be taken.
    ///
    /// [1]: https://core.telegram.org/type/Update
    /// [2]: https://core.telegram.org/type/Updates
    /// [3]: https://core.telegram.org/constructor/updatesTooLong
    let updates: Api.Update[];
    if (Api.is("updatesCombined", updates_) || Api.is("updates", updates_)) {
      updates = updates_.updates;
      const seq = updates_.seq;
      const seqStart = "seq_start" in updates_ ? updates_.seq_start : updates_.seq;
      if (checkGap) {
        if (seqStart == 0) {
          checkGap = false;
          this.#L$processUpdates.debug("seqStart=0");
        } else {
          const localState = await this.#getLocalState();
          const localSeq = localState.seq;

          if (localSeq + 1 == seqStart) {
            // The update sequence can be applied.
            localState.seq = seq;
            localState.date = updates_.date;
            await this.#setUpdateStateDate(updates_.date);
            await this.#setState(localState);
          } else if (localSeq + 1 > seqStart) {
            // The update sequence was already applied, and must be ignored.
            this.#L$processUpdates.debug("localSeq + 1 > seqStart");
            return;
          } else if (localSeq + 1 < seqStart) {
            // There's an updates gap that must be filled.
            await this.recoverUpdateGap("localSeq + 1 < seqStart");
          }
        }
      }
    } else if (Api.is("updateShort", updates_)) {
      updates = [updates_.update];
    } else if (Api.is("updateShortMessage", updates_)) {
      updates = [
        {
          _: "updateNewMessage",
          message: ({
            _: "message",
            out: updates_.out,
            mentioned: updates_.mentioned,
            media_unread: updates_.media_unread,
            silent: updates_.silent,
            id: updates_.id,
            from_id: updates_.out ? ({ _: "peerUser", user_id: BigInt(await this.#c.getSelfId()) }) : ({ _: "peerUser", user_id: updates_.user_id }),
            peer_id: ({ _: "peerUser", user_id: updates_.user_id }),
            message: updates_.message,
            date: updates_.date,
            fwd_from: updates_.fwd_from,
            via_bot_id: updates_.via_bot_id,
            reply_to: updates_.reply_to,
            entities: updates_.entities,
            ttl_period: updates_.ttl_period,
          }),
          pts: updates_.pts,
          pts_count: updates_.pts_count,
        },
      ];
    } else if (Api.is("updateShortChatMessage", updates_)) {
      updates = [
        {
          _: "updateNewMessage",
          message: ({
            _: "message",
            mentioned: updates_.mentioned,
            media_unread: updates_.media_unread,
            silent: updates_.silent,
            id: updates_.id,
            from_id: { _: "peerUser", user_id: updates_.from_id },
            peer_id: { _: "peerChat", chat_id: updates_.chat_id },
            fwd_from: updates_.fwd_from,
            via_bot_id: updates_.via_bot_id,
            reply_to: updates_.reply_to,
            date: updates_.date,
            message: updates_.message,
            entities: updates_.entities,
            ttl_period: updates_.ttl_period,
          }),
          pts: updates_.pts,
          pts_count: updates_.pts_count,
        },
      ];
    } else if (Api.is("updateShortSentMessage", updates_)) {
      if (!Api.is("messages.sendMessage", call)) {
        unreachable();
      }
      updates = [{
        _: "updateNewMessage",
        message: ({
          _: "message",
          out: updates_.out,
          silent: call.silent,
          id: updates_.id,
          from_id: { _: "peerUser", user_id: BigInt(await this.#c.getSelfId()) },
          peer_id: Api.inputPeerToPeer(call.peer),
          message: call.message,
          media: updates_.media,
          date: updates_.date,
          // reply_to: call.reply_to, // TODO?
          entities: updates_.entities,
          ttl_period: updates_.ttl_period,
        }),
        pts: updates_.pts,
        pts_count: updates_.pts_count,
      }];
    } else if (Api.is("updatesTooLong", updates_)) {
      await this.recoverUpdateGap("updatesTooLong");
      return;
    } else if (Api.isOfEnum("Update", updates_)) {
      updates = [updates_];
    } else {
      unreachable();
    }

    /// We process the updates when we are sure there is no gap.
    if (Api.is("updates", updates_) || Api.is("updatesCombined", updates_)) {
      await this.processChats(updates_.chats, updates_);
      await this.processUsers(updates_.users, updates_);
      await this.#setUpdateStateDate(updates_.date);
    } else if (
      Api.isOneOf([
        "updateShort",
        "updateShortMessage",
        "updateShortChatMessage",
        "updateShortSentMessage",
      ], updates_)
    ) {
      await this.#setUpdateStateDate(updates_.date);
    }

    for (const update of updates) {
      if (Api.is("updatePtsChanged", update)) {
        await this.fetchState("updatePtsChanged");
        if (this.#updateState) {
          await this.#setState(this.#updateState);
        } else {
          unreachable();
        }
      } else if (UpdateManager.isPtsUpdate(update)) {
        this.#processPtsUpdate(update, checkGap);
      } else if (UpdateManager.isChannelPtsUpdate(update)) {
        this.#processChannelPtsUpdate(update, checkGap);
      } else if (UpdateManager.isQtsUpdate(update)) {
        this.#processQtsUpdate(update, checkGap);
      } else {
        this.#queueUpdate(update, 0n, false);
      }
    }
  }

  async #setUpdateStateDate(date: number) {
    const localState = await this.#getLocalState();
    localState.date = date;
    await this.#setState(localState);
  }

  async #setUpdatePts(pts: number) {
    const localState = await this.#getLocalState();
    localState.pts = pts;
    await this.#setState(localState);
  }
  async #setUpdateQts(qts: number) {
    const localState = await this.#getLocalState();
    localState.qts = qts;
    await this.#setState(localState);
  }

  async #getLocalState() {
    let localState = await this.#getState();
    if (!localState) {
      if (this.#updateState) {
        localState = this.#updateState;
        await this.#setState(localState);
      } else {
        await this.fetchState("getLocalState");
        if (this.#updateState) {
          localState = this.#updateState;
          await this.#setState(localState);
        } else {
          unreachable();
        }
      }
    }
    return localState;
  }

  #recoveringUpdateGap = false;
  #recoverUpdateGapMutex = new Mutex();
  async recoverUpdateGap(source: string) {
    const wasRecoveringUpdateGap = this.#recoveringUpdateGap;
    const unlock = await this.#recoverUpdateGapMutex.lock();
    if (wasRecoveringUpdateGap) {
      this.#LrecoverUpdateGap.debug(`update gap was just recovered [${source}]`);
      unlock();
      return;
    }
    this.#recoveringUpdateGap = true;
    this.#LrecoverUpdateGap.debug(`recovering from update gap [${source}]`);

    this.#c.setConnectionState("updating");
    try {
      let retryIn = 5;
      let state = await this.#getLocalState();
      while (true) {
        let difference: Api.updates_Difference;
        try {
          difference = await this.#c.invoke({ _: "updates.getDifference", pts: state.pts, date: state.date, qts: state.qts ?? 0 });
        } catch (err) {
          if (err instanceof PersistentTimestampInvalid) {
            await delay(retryIn * SECOND);
            ++retryIn;
            if (retryIn > 60) {
              retryIn = 60;
            }
            continue;
          } else {
            throw err;
          }
        }
        if (Api.is("updates.difference", difference) || Api.is("updates.differenceSlice", difference)) {
          await this.processChats(difference.chats, difference);
          await this.processUsers(difference.users, difference);
          for (const message of difference.new_messages) {
            await this.#processUpdates({ _: "updateNewMessage", message, pts: 0, pts_count: 0 }, false);
          }
          for (const update of difference.other_updates) {
            await this.#processUpdates(update, false);
          }
          if (Api.is("updates.difference", difference)) {
            this.#LrecoverUpdateGap.debug("recovered from update gap");
            break;
          } else if (Api.is("updates.differenceSlice", difference)) {
            state = difference.intermediate_state;
          } else {
            unreachable();
          }
        } else if (Api.is("updates.differenceTooLong", difference)) {
          await this.#c.messageStorage.deleteMessages();
          await this.#c.storage.removeChats(0);
          await this.#c.storage.removeChats(1);
          state.pts = difference.pts;
          this.#LrecoverUpdateGap.debug("received differenceTooLong");
        } else if (Api.is("updates.differenceEmpty", difference)) {
          await this.#setUpdateStateDate(difference.date);
          this.#LrecoverUpdateGap.debug("there was no update gap");
          break;
        } else {
          unreachable();
        }
      }
    } catch (err) {
      this.#LrecoverUpdateGap.error(err);
    } finally {
      unlock();
      this.#c.resetConnectionState();
      this.#recoveringUpdateGap = false;
    }
  }

  async #recoverChannelUpdateGap(channelId: bigint, source: string) {
    let lastTimeout = 1;
    this.#LrecoverChannelUpdateGap.debug(`recovering channel update gap [${channelId}, ${source}]`);
    const pts_ = await this.#c.storage.getChannelPts(channelId);
    let pts = pts_ == null ? 1 : pts_;
    let retryIn = 5;
    while (true) {
      const { access_hash } = await this.#c.getInputPeer(ZERO_CHANNEL_ID + -Number(channelId)).then((v) => Api.as("inputPeerChannel", v));
      let difference: Api.updates_ChannelDifference;
      try {
        difference = await this.#c.invoke({
          _: "updates.getChannelDifference",
          pts,
          channel: { _: "inputChannel", channel_id: channelId, access_hash },
          filter: { _: "channelMessagesFilterEmpty" },
          limit: await this.#c.storage.getAccountType() == "user" ? CHANNEL_DIFFERENCE_LIMIT_USER : CHANNEL_DIFFERENCE_LIMIT_BOT,
        });
        lastTimeout = difference.timeout ?? 1;
      } catch (err) {
        if (err instanceof PersistentTimestampInvalid) {
          await delay(retryIn * SECOND);
          retryIn += 5;
          if (retryIn > 60) {
            retryIn = 60;
          }
          continue;
        } else {
          throw err;
        }
      }
      if (Api.is("updates.channelDifference", difference)) {
        await this.processChats(difference.chats, difference);
        await this.processUsers(difference.users, difference);
        for (const message of difference.new_messages) {
          await this.#processUpdates({ _: "updateNewChannelMessage", message, pts: 0, pts_count: 0 }, false);
        }
        for (const update of difference.other_updates) {
          await this.#processUpdates(update, false);
        }
        await this.#c.storage.setChannelPts(channelId, difference.pts);
        this.#LrecoverChannelUpdateGap.debug(`recovered from update gap [${channelId}, ${source}]`, channelId, source);
        break;
      } else if (Api.is("updates.channelDifferenceTooLong", difference)) {
        // TODO: invalidate messages
        this.#LrecoverChannelUpdateGap.debug("received channelDifferenceTooLong");
        await this.processChats(difference.chats, difference);
        await this.processUsers(difference.users, difference);
        for (const message of difference.messages) {
          await this.#processUpdates({ _: "updateNewChannelMessage", message, pts: 0, pts_count: 0 }, false);
        }
        const pts_ = Api.as("dialog", difference.dialog).pts;
        if (pts_ != undefined) {
          pts = pts_;
        } else {
          unreachable();
        }
        this.#LrecoverChannelUpdateGap.debug("processed channelDifferenceTooLong");
      } else if (Api.is("updates.channelDifferenceEmpty", difference)) {
        this.#LrecoverChannelUpdateGap.debug("there was no update gap");
        break;
      }
    }
    return lastTimeout;
  }

  #handleUpdatesSet = new Set<bigint>();
  async #handleStoredUpdates(boxId: bigint) {
    if (this.#handleUpdatesSet.has(boxId)) {
      return;
    }
    this.#handleUpdatesSet.add(boxId);
    do {
      const maybeUpdate = await this.#c.storage.getFirstUpdate(boxId);
      if (maybeUpdate == null) {
        break;
      }
      const [key, update] = maybeUpdate;
      for (let i = 0; i < 100; ++i) {
        try {
          const handle = await this.#handleUpdate(update);
          handle: for (let i = 0; i < 2; ++i) {
            try {
              await handle();
              break handle;
            } catch {
              continue handle;
            }
          }
          break;
        } catch (err) {
          this.#L$handleUpdate.error(err);
        }
      }
      await this.#c.storage.set(key, null);
    } while (true);
    this.#handleUpdatesSet.delete(boxId);
  }

  #handleUpdate(update: Api.Update) {
    const handler = this.#updateHandler;
    if (handler) {
      return handler(update);
    } else {
      return Promise.resolve(() => Promise.resolve());
    }
  }

  async #needsGetDifference(update: PtsUpdate) {
    const chatIds = this.#collectChatIds(update);
    if (!chatIds.size) {
      return false;
    }
    return (await Promise.all(chatIds.values().map((v) => this.#c.messageStorage.getPeer(v)))).some((v) => !v);
  }

  #collectChatIds(object: PtsUpdate | Api.MessageMedia | Api.MessageFwdHeader): Set<number> {
    const chatIds = new Set<number>();

    if (Api.is("messageFwdHeader", object)) {
      if (object.from_id) {
        chatIds.add(peerToChatId(object.from_id));
      }
      if (object.saved_from_peer) {
        chatIds.add(peerToChatId(object.saved_from_peer));
      }
      return chatIds;
    }

    if (Api.isOfEnum("MessageMedia", object)) {
      switch (object._) {
        case "messageMediaContact":
          if (object.user_id) {
            chatIds.add(peerToChatId({ _: "peerUser", user_id: object.user_id }));
          }
          break;
        case "messageMediaStory":
          chatIds.add(peerToChatId(object.peer));
          break;
        case "messageMediaGiveaway":
          for (const chatId of object.channels.map((v) => peerToChatId({ _: "peerChannel", channel_id: v }))) {
            chatIds.add(chatId);
          }
          break;
        case "messageMediaGiveawayResults":
          chatIds.add(peerToChatId({ _: "peerChannel", channel_id: object.channel_id }));
          for (const chatId of object.winners.map((user_id) => peerToChatId({ _: "peerUser", user_id }))) {
            chatIds.add(chatId);
          }
      }

      return chatIds;
    }

    // messsages
    if (!("message" in object)) {
      return chatIds;
    }
    if (Api.is("messageEmpty", object.message)) {
      return chatIds;
    }
    chatIds.add(peerToChatId(object.message.peer_id));
    if (object.message.from_id) {
      chatIds.add(peerToChatId(object.message.from_id));
    }
    if (Api.is("messageService", object.message)) {
      switch (object.message.action._) {
        case "messageActionChatCreate":
        case "messageActionChatAddUser":
        case "messageActionInviteToGroupCall":
          for (const user_id of object.message.action.users) {
            chatIds.add(peerToChatId({ _: "peerUser", user_id }));
          }
          break;
        case "messageActionChatDeleteUser":
          chatIds.add(peerToChatId({ _: "peerUser", user_id: object.message.action.user_id }));
          break;
        case "messageActionChatMigrateTo":
          chatIds.add(peerToChatId({ _: "peerChannel", channel_id: object.message.action.channel_id }));
          break;
        case "messageActionChannelMigrateFrom":
          chatIds.add(peerToChatId({ _: "peerChat", chat_id: object.message.action.chat_id }));
          break;
        case "messageActionConferenceCall":
          if (object.message.action.other_participants) {
            for (const participant of object.message.action.other_participants) {
              chatIds.add(peerToChatId(participant));
            }
          }
          break;
        case "messageActionPaymentRefunded":
          chatIds.add(peerToChatId(object.message.action.peer));
          break;
        case "messageActionGiftCode":
          if (object.message.action.boost_peer) {
            chatIds.add(peerToChatId(object.message.action.boost_peer));
          }
          break;
        case "messageActionRequestedPeer":
          if (this.#c.storage.accountType === "user") {
            for (const peer of object.message.action.peers) {
              chatIds.add(peerToChatId(peer));
            }
          }
          break;
        case "messageActionSetMessagesTTL":
          if (object.message.action.auto_setting_from) {
            chatIds.add(peerToChatId({ _: "peerUser", user_id: object.message.action.auto_setting_from }));
          }
      }
    } else {
      if (object.message.reply_to) {
        switch (object.message.reply_to._) {
          case "messageReplyHeader":
            if (object.message.reply_to.reply_to_peer_id) {
              chatIds.add(peerToChatId(object.message.reply_to.reply_to_peer_id));
            }
            if (object.message.reply_to.reply_from) {
              for (const chatId of this.#collectChatIds(object.message.reply_to.reply_from)) {
                chatIds.add(chatId);
              }
            }
            if (object.message.reply_to.quote_entities) {
              for (const chatId of this.#collectChatIdsFromEntities(object.message.reply_to.quote_entities)) {
                chatIds.add(chatId);
              }
            }
            if (object.message.reply_to.reply_media) {
              for (const chatId of this.#collectChatIds(object.message.reply_to.reply_media)) {
                chatIds.add(chatId);
              }
            }
            break;
          case "messageReplyStoryHeader":
            chatIds.add(peerToChatId(object.message.reply_to.peer));
        }
      }
      if (object.message.fwd_from) {
        for (const chatId of this.#collectChatIds(object.message.fwd_from)) {
          chatIds.add(chatId);
        }
      }
      if (object.message.via_bot_id) {
        chatIds.add(peerToChatId({ _: "peerUser", user_id: object.message.via_bot_id }));
      }
      if (object.message.entities) {
        for (const chatId of this.#collectChatIdsFromEntities(object.message.entities)) {
          chatIds.add(chatId);
        }
      }
      if (object.message.media) {
        for (const chatId of this.#collectChatIds(object.message.media)) {
          chatIds.add(chatId);
        }
      }
    }

    return chatIds;
  }

  #collectChatIdsFromEntities(entities: Api.MessageEntity[]) {
    const chatIds = new Array<number>();
    for (const user_id of entities.filter((v): v is Api.messageEntityMentionName => Api.is("messageEntityMentionName", v)).map((v) => v.user_id)) {
      chatIds.push(peerToChatId({ _: "peerUser", user_id }));
    }
    return chatIds;
  }

  setUpdateHandler(handler: UpdateHandler) {
    this.#updateHandler = handler;
  }

  #openChats = new Map<bigint, { controller: AbortController; promise: Promise<void> }>();
  async openChat(chatId: ID) {
    const channel = await this.#c.getInputChannel(chatId);
    const channelId = channel.channel_id;
    if (this.#openChats.has(channelId)) {
      return;
    }
    const controller = new AbortController();
    const promise = Promise.resolve().then(async () => {
      const logger = this.#LopenChat.branch(Api.peerToChatId(channel) + "");
      while (true) {
        if (this.#c.disconnected()) {
          logger.debug("disconnected, stopping the loop");
          this.#openChats.delete(channelId);
          break;
        }
        if (!this.#openChats.has(channelId)) {
          const aborted = controller.signal.aborted;
          logger.debug(`closed${(aborted ? " (aborted)" : "")}, stopping the loop`);
          break;
        }
        try {
          const Ti = Date.now();
          const timeout = await this.#recoverChannelUpdateGap(channelId, "openChat");
          const dT = Date.now() - Ti;
          const delay = Math.max(timeout * 1_000 - dT, 0);
          logger.debug("timeout=", timeout, "delay=", delay, "dT=", dT);
          if (delay) {
            await new Promise<void>((r) => {
              const resolve = () => {
                r();
                controller.signal.removeEventListener("abort", resolve);
                if (controller.signal.aborted) {
                  clearTimeout(timeout);
                }
              };
              controller.signal.addEventListener("abort", resolve);
              const timeout = setTimeout(resolve, delay);
            });
          }
        } catch (err) {
          if (this.#c.disconnected()) {
            continue; // breaks the loop
          }
          this.#LopenChat.error("An unexpected error occurred:", err);
        }
      }
    });
    this.#openChats.set(channelId, { controller, promise });
  }

  async closeChat(chatId: ID) {
    const { channel_id } = await this.#c.getInputChannel(chatId);
    const openChat = this.#openChats.get(channel_id);
    if (openChat) {
      this.#openChats.delete(channel_id);
      openChat.controller.abort();
    } else {
      throw new InputError("Chat not open");
    }
  }

  closeAllChats() {
    for (const [channelId, openChat] of this.#openChats.entries()) {
      this.#openChats.delete(channelId);
      openChat.controller.abort();
    }
  }
}
