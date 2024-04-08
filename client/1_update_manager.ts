/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

import { unreachable } from "../0_deps.ts";
import { getLogger, Logger, Queue, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { as, enums, functions, inputPeerToPeer, peerToChatId, ReadObject, TLObject, types } from "../2_tl.ts";
import { CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER } from "../4_constants.ts";
import { C } from "./0_types.ts";

type UpdateHandler = (update: enums.Update) => Promise<(() => Promise<unknown>)>;

export type PtsUpdate =
  | types.UpdateNewMessage
  | types.UpdateDeleteMessages
  | types.UpdateReadHistoryInbox
  | types.UpdateReadHistoryOutbox
  | types.UpdatePinnedChannelMessages
  | types.UpdatePinnedMessages
  | types.UpdateFolderPeers
  | types.UpdateChannelWebPage
  | types.UpdateEditMessage
  | types.UpdateReadMessagesContents
  | types.UpdateWebPage;

export type ChannelPtsUpdate =
  | types.UpdateNewChannelMessage
  | types.UpdateEditChannelMessage
  | types.UpdateDeleteChannelMessages
  | types.UpdateChannelTooLong;

export type QtsUpdate =
  | types.UpdateNewEncryptedMessage
  | types.UpdateMessagePollVote
  | types.UpdateBotStopped
  | types.UpdateChatParticipant
  | types.UpdateChannelParticipant
  | types.UpdateBotChatInviteRequester
  | types.UpdateBotChatBoost
  | types.UpdateBotMessageReaction
  | types.UpdateBotMessageReactions
  | types.UpdateBotBusinessConnect
  | types.UpdateBotNewBusinessMessage
  | types.UpdateBotEditBusinessMessage
  | types.UpdateBotDeleteBusinessMessage;

export class UpdateManager {
  static readonly QTS_COUNT = 1;
  static readonly MAIN_BOX_ID = 0n;

  #c: C;
  #updateState?: types.updates.State;
  #updateHandler?: UpdateHandler;

  #LrecoverUpdateGap: Logger;
  #LrecoverChannelUpdateGap: Logger;
  #L$handleUpdate: Logger;
  #L$processUpdates: Logger;
  #LfetchState: Logger;

  constructor(c: C) {
    this.#c = c;

    const L = getLogger("UpdateManager").client(c.id);
    this.#LrecoverUpdateGap = L.branch("recoverUpdateGap");
    this.#LrecoverChannelUpdateGap = L.branch("recoverChannelUpdateGap");
    this.#L$handleUpdate = L.branch("#handleUpdate");
    this.#L$processUpdates = L.branch("#processUpdates");
    this.#LfetchState = L.branch("fetchState");
  }

  static isPtsUpdate(v: enums.Update): v is PtsUpdate {
    return v instanceof types.UpdateNewMessage ||
      v instanceof types.UpdateDeleteMessages ||
      v instanceof types.UpdateReadHistoryInbox ||
      v instanceof types.UpdateReadHistoryOutbox ||
      v instanceof types.UpdatePinnedChannelMessages ||
      v instanceof types.UpdatePinnedMessages ||
      v instanceof types.UpdateFolderPeers ||
      v instanceof types.UpdateChannelWebPage ||
      v instanceof types.UpdateEditMessage ||
      v instanceof types.UpdateReadMessagesContents ||
      v instanceof types.UpdateWebPage;
  }

  static isQtsUpdate(v: enums.Update): v is QtsUpdate {
    return v instanceof types.UpdateNewEncryptedMessage ||
      v instanceof types.UpdateMessagePollVote ||
      v instanceof types.UpdateBotStopped ||
      v instanceof types.UpdateChatParticipant ||
      v instanceof types.UpdateChannelParticipant ||
      v instanceof types.UpdateBotChatInviteRequester ||
      v instanceof types.UpdateBotChatBoost ||
      v instanceof types.UpdateBotMessageReaction ||
      v instanceof types.UpdateBotMessageReactions ||
      v instanceof types.UpdateBotBusinessConnect ||
      v instanceof types.UpdateBotNewBusinessMessage ||
      v instanceof types.UpdateBotEditBusinessMessage ||
      v instanceof types.UpdateBotDeleteBusinessMessage;
  }

  static isChannelPtsUpdate(v: enums.Update | enums.Updates): v is ChannelPtsUpdate {
    return v instanceof types.UpdateNewChannelMessage ||
      v instanceof types.UpdateEditChannelMessage ||
      v instanceof types.UpdateDeleteChannelMessages ||
      v instanceof types.UpdateChannelTooLong;
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

  #state: types.updates.State | null | undefined = undefined;
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

  async #setState(state: types.updates.State) {
    this.#state = state;
    if (!await this.#mustDropPendingUpdates()) {
      await this.#c.storage.setState(state);
    }
  }

  async fetchState(source: string) {
    let state = await this.#c.api.updates.getState();
    const difference = await this.#c.api.updates.getDifference(state);
    if (difference instanceof types.updates.Difference) {
      state = difference.state;
    } else if (difference instanceof types.updates.DifferenceSlice) {
      state = difference.intermediate_state;
    }
    this.#updateState = state;
    this.#LfetchState.debug(`state fetched [${source}]`);
    if (await this.#mustDropPendingUpdates()) {
      await this.#setState(state);
    }
  }

  async processChats(chats: enums.Chat[]) {
    for (const chat of chats) {
      if (chat instanceof types.Channel || chat instanceof types.ChannelForbidden) {
        await this.#c.messageStorage.setEntity(chat);
        if ("username" in chat && chat.username) {
          await this.#c.messageStorage.updateUsernames(peerToChatId(chat), [chat.username]);
        }
        if ("usernames" in chat && chat.usernames) {
          await this.#c.messageStorage.updateUsernames(peerToChatId(chat), chat.usernames.map((v) => v.username));
        }
      } else if (chat instanceof types.Chat || chat instanceof types.ChatForbidden) {
        await this.#c.messageStorage.setEntity(chat);
      }
    }
  }

  async processResult(result: ReadObject) {
    if (
      result instanceof types.account.AuthorizationForm ||
      result instanceof types.account.AutoSaveSettings ||
      result instanceof types.account.PrivacyRules ||
      result instanceof types.account.WebAuthorizations ||
      result instanceof types.AttachMenuBots ||
      result instanceof types.AttachMenuBotsBot ||
      result instanceof types.channels.AdminLogResults ||
      result instanceof types.channels.ChannelParticipant ||
      result instanceof types.channels.ChannelParticipants ||
      result instanceof types.channels.SendAsPeers ||
      result instanceof types.ChatInvite ||
      result instanceof types.chatlists.ChatlistInvite ||
      result instanceof types.chatlists.ChatlistInviteAlready ||
      result instanceof types.chatlists.ChatlistUpdates ||
      result instanceof types.chatlists.ExportedInvites ||
      result instanceof types.contacts.Blocked ||
      result instanceof types.contacts.BlockedSlice ||
      result instanceof types.contacts.Contacts ||
      result instanceof types.contacts.Found ||
      result instanceof types.contacts.ImportedContacts ||
      result instanceof types.contacts.ResolvedPeer ||
      result instanceof types.contacts.TopPeers ||
      result instanceof types.help.PromoData ||
      result instanceof types.help.RecentMeUrls ||
      result instanceof types.messages.BotResults ||
      result instanceof types.messages.ChannelMessages ||
      result instanceof types.messages.ChatAdminsWithInvites ||
      result instanceof types.messages.ChatFull ||
      result instanceof types.messages.ChatInviteImporters ||
      result instanceof types.messages.Chats ||
      result instanceof types.messages.ChatsSlice ||
      result instanceof types.messages.Dialogs ||
      result instanceof types.messages.DialogsSlice ||
      result instanceof types.messages.DiscussionMessage ||
      result instanceof types.messages.ExportedChatInvite ||
      result instanceof types.messages.ExportedChatInviteReplaced ||
      result instanceof types.messages.ExportedChatInvites ||
      result instanceof types.messages.ForumTopics ||
      result instanceof types.messages.HighScores ||
      result instanceof types.messages.InactiveChats ||
      result instanceof types.messages.MessageReactionsList ||
      result instanceof types.messages.Messages ||
      result instanceof types.messages.MessagesSlice ||
      result instanceof types.messages.MessageViews ||
      result instanceof types.messages.PeerDialogs ||
      result instanceof types.messages.PeerSettings ||
      result instanceof types.messages.SearchResultsCalendar ||
      result instanceof types.messages.SponsoredMessages ||
      result instanceof types.messages.VotesList ||
      result instanceof types.messages.WebPage ||
      result instanceof types.payments.CheckedGiftCode ||
      result instanceof types.payments.PaymentForm ||
      result instanceof types.payments.PaymentReceipt ||
      result instanceof types.phone.GroupCall ||
      result instanceof types.phone.GroupParticipants ||
      result instanceof types.phone.JoinAsPeers ||
      result instanceof types.phone.PhoneCall ||
      result instanceof types.photos.Photo ||
      result instanceof types.photos.Photos ||
      result instanceof types.photos.PhotosSlice ||
      result instanceof types.premium.BoostsList ||
      result instanceof types.premium.MyBoosts ||
      result instanceof types.stats.MegagroupStats ||
      result instanceof types.stats.PublicForwards ||
      result instanceof types.stories.AllStories ||
      result instanceof types.stories.PeerStories ||
      result instanceof types.stories.Stories ||
      result instanceof types.stories.StoryViews ||
      result instanceof types.stories.StoryViewsList ||
      result instanceof types.users.UserFull
    ) {
      if ("chats" in result) {
        await this.processChats(result.chats);
      }

      if ("users" in result) {
        await this.processUsers(result.users);
      }

      if ("messages" in result && Array.isArray(result.messages)) {
        for (const message of result.messages as unknown[]) {
          if (message instanceof types.Message || message instanceof types.MessageService) {
            await this.#c.messageStorage.setMessage(peerToChatId(message.peer_id), message.id, message);
          }
        }
      }
    }

    if (result instanceof types.messages.Messages) {
      for (const message of result.messages) {
        if (message instanceof types.Message || message instanceof types.MessageService) {
          await this.#c.messageStorage.setMessage(peerToChatId(message.peer_id), message.id, message);
        }
      }
    }
  }

  async processUsers(users: enums.User[]) {
    for (const user of users) {
      if (user instanceof types.User && user.access_hash) {
        await this.#c.messageStorage.setEntity(user);
        if (user.username) {
          await this.#c.messageStorage.updateUsernames(peerToChatId(user), [user.username]);
        }
        if (user.usernames) {
          await this.#c.messageStorage.updateUsernames(peerToChatId(user), user.usernames.map((v) => v.username));
        }
      }
    }
  }

  #handleUpdateQueues = new Map<bigint, Queue>();
  getHandleUpdateQueue(boxId: bigint) {
    let queue = this.#handleUpdateQueues.get(boxId);
    if (queue !== undefined) {
      return queue;
    } else {
      queue = new Queue(`handleUpdate-${boxId}`);
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

  async #processChannelPtsUpdateInner(update: types.UpdateNewChannelMessage | types.UpdateEditChannelMessage | types.UpdateDeleteChannelMessages | types.UpdateChannelTooLong, checkGap: boolean) {
    const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? (update.message as types.Message | types.MessageService).peer_id[as](types.PeerChannel).channel_id : update.channel_id;
    if (update instanceof types.UpdateChannelTooLong) {
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

  #queueUpdate(update: enums.Update, boxId: bigint, pts: boolean) {
    this.getHandleUpdateQueue(boxId).add(async () => {
      if (this.#c.guaranteeUpdateDelivery && pts) {
        await this.#handleStoredUpdates(boxId);
      } else {
        await this.#handleUpdate(update);
      }
    });
  }

  #processChannelPtsUpdate(update: ChannelPtsUpdate, checkGap: boolean) {
    const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? (update.message as types.Message | types.MessageService).peer_id[as](types.PeerChannel).channel_id : update.channel_id;
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
    const localState = await this.#getLocalState();
    if (update.pts != 0) {
      if (checkGap) {
        await this.#checkGap(update.pts, update.pts_count);
      }
      if (localState.pts + update.pts_count > update.pts) {
        return;
      }
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
  processUpdates(updates: enums.Update | enums.Updates, checkGap: boolean, call: TLObject | null = null, callback?: () => void) {
    this.#processUpdatesQueue.add(() => this.#processUpdates(updates, checkGap, call).then(callback));
  }

  async #processUpdates(updates_: enums.Update | enums.Updates, checkGap: boolean, call: TLObject | null = null) {
    /// First, individual updates (Update[1]) are extracted from Updates.[2]
    ///
    /// If an updatesTooLong[3] was received, an update gap recovery is initiated and no further action will be taken.
    ///
    /// [1]: https://core.telegram.org/type/Update
    /// [2]: https://core.telegram.org/type/Updates
    /// [3]: https://core.telegram.org/constructor/updatesTooLong
    let updates: enums.Update[];
    if (updates_ instanceof types.UpdatesCombined || updates_ instanceof types.Updates) {
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
    } else if (updates_ instanceof types.UpdateShort) {
      updates = [updates_.update];
    } else if (updates_ instanceof types.UpdateShortMessage) {
      updates = [
        new types.UpdateNewMessage({
          message: new types.Message({
            out: updates_.out,
            mentioned: updates_.mentioned,
            media_unread: updates_.media_unread,
            silent: updates_.silent,
            id: updates_.id,
            from_id: updates_.out ? new types.PeerUser({ user_id: await this.#c.getSelfId().then(BigInt) }) : new types.PeerUser({ user_id: updates_.user_id }),
            peer_id: new types.PeerUser({ user_id: updates_.user_id }),
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
        }),
      ];
    } else if (updates_ instanceof types.UpdateShortChatMessage) {
      updates = [
        new types.UpdateNewMessage({
          message: new types.Message({
            out: updates_.out,
            mentioned: updates_.mentioned,
            media_unread: updates_.media_unread,
            silent: updates_.silent,
            id: updates_.id,
            from_id: new types.PeerUser({ user_id: updates_.from_id }),
            peer_id: new types.PeerChat({ chat_id: updates_.chat_id }),
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
        }),
      ];
    } else if (updates_ instanceof types.UpdateShortSentMessage) {
      if (!(call instanceof functions.messages.sendMessage)) {
        unreachable();
      }
      updates = [
        new types.UpdateNewMessage({
          message: new types.Message({
            out: updates_.out,
            silent: call.silent,
            id: updates_.id,
            from_id: new types.PeerUser({ user_id: await this.#c.getSelfId().then(BigInt) }),
            peer_id: inputPeerToPeer(call.peer),
            message: call.message,
            media: updates_.media,
            date: updates_.date,
            // reply_to: call.reply_to, // TODO?
            entities: updates_.entities,
            ttl_period: updates_.ttl_period,
          }),
          pts: updates_.pts,
          pts_count: updates_.pts_count,
        }),
      ];
    } else if (updates_ instanceof types.UpdatesTooLong) {
      await this.recoverUpdateGap("updatesTooLong");
      return;
    } else if (updates_ instanceof types._Update) {
      updates = [updates_];
    } else {
      unreachable();
    }

    /// We process the updates when we are sure there is no gap.
    if (updates_ instanceof types.Updates || updates_ instanceof types.UpdatesCombined) {
      await this.processChats(updates_.chats);
      await this.processUsers(updates_.users);
      await this.#setUpdateStateDate(updates_.date);
    } else if (
      updates_ instanceof types.UpdateShort ||
      updates_ instanceof types.UpdateShortMessage ||
      updates_ instanceof types.UpdateShortChatMessage ||
      updates_ instanceof types.UpdateShortSentMessage
    ) {
      await this.#setUpdateStateDate(updates_.date);
    }

    for (const update of updates) {
      if (update instanceof types.UpdatePtsChanged) {
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
  async recoverUpdateGap(source: string) {
    this.#LrecoverUpdateGap.debug(`recovering from update gap [${source}]`);

    this.#c.setConnectionState("updating");
    try {
      let state = await this.#getLocalState();
      while (true) {
        const difference = await this.#c.api.updates.getDifference({ pts: state.pts, date: state.date, qts: state.qts ?? 0 });
        if (difference instanceof types.updates.Difference || difference instanceof types.updates.DifferenceSlice) {
          await this.processChats(difference.chats);
          await this.processUsers(difference.users);
          for (const message of difference.new_messages) {
            await this.#processUpdates(new types.UpdateNewMessage({ message, pts: 0, pts_count: 0 }), false);
          }
          for (const update of difference.other_updates) {
            await this.#processUpdates(update, false);
          }
          if (difference instanceof types.updates.Difference) {
            await this.#setState(difference.state);
            this.#LrecoverUpdateGap.debug("recovered from update gap");
            break;
          } else if (difference instanceof types.updates.DifferenceSlice) {
            state = difference.intermediate_state;
          } else {
            unreachable();
          }
        } else if (difference instanceof types.updates.DifferenceTooLong) {
          await this.#c.messageStorage.deleteMessages();
          await this.#c.storage.removeChats(0);
          await this.#c.storage.removeChats(1);
          state.pts = difference.pts;
          this.#LrecoverUpdateGap.debug("received differenceTooLong");
        } else if (difference instanceof types.updates.DifferenceEmpty) {
          await this.#setUpdateStateDate(difference.date);
          this.#LrecoverUpdateGap.debug("there was no update gap");
          break;
        } else {
          unreachable();
        }
      }
    } finally {
      this.#c.resetConnectionState();
    }
  }

  async #recoverChannelUpdateGap(channelId: bigint, source: string) {
    this.#LrecoverChannelUpdateGap.debug(`recovering channel update gap [${channelId}, ${source}]`);
    const pts_ = await this.#c.storage.getChannelPts(channelId);
    let pts = pts_ == null ? 1 : pts_;
    while (true) {
      const { access_hash } = await this.#c.getInputPeer(ZERO_CHANNEL_ID + -Number(channelId)).then((v) => v[as](types.InputPeerChannel));
      const difference = await this.#c.api.updates.getChannelDifference({
        pts,
        channel: new types.InputChannel({ channel_id: channelId, access_hash }),
        filter: new types.ChannelMessagesFilterEmpty(),
        limit: await this.#c.storage.getAccountType() == "user" ? CHANNEL_DIFFERENCE_LIMIT_USER : CHANNEL_DIFFERENCE_LIMIT_BOT,
      });
      if (difference instanceof types.updates.ChannelDifference) {
        await this.processChats(difference.chats);
        await this.processUsers(difference.users);
        for (const message of difference.new_messages) {
          await this.#processUpdates(new types.UpdateNewChannelMessage({ message, pts: 0, pts_count: 0 }), false);
        }
        for (const update of difference.other_updates) {
          await this.#processUpdates(update, false);
        }
        await this.#c.storage.setChannelPts(channelId, difference.pts);
        this.#LrecoverChannelUpdateGap.debug(`recovered from update gap [${channelId}, ${source}]`, channelId, source);
        break;
      } else if (difference instanceof types.updates.ChannelDifferenceTooLong) {
        // TODO: invalidate messages
        this.#LrecoverChannelUpdateGap.debug("received channelDifferenceTooLong");
        await this.processChats(difference.chats);
        await this.processUsers(difference.users);
        for (const message of difference.messages) {
          await this.#processUpdates(new types.UpdateNewChannelMessage({ message, pts: 0, pts_count: 0 }), false);
        }
        const pts_ = difference.dialog[as](types.Dialog).pts;
        if (pts_ != undefined) {
          pts = pts_;
        } else {
          unreachable();
        }
        this.#LrecoverChannelUpdateGap.debug("processed channelDifferenceTooLong");
      } else if (difference instanceof types.updates.ChannelDifferenceEmpty) {
        this.#LrecoverChannelUpdateGap.debug("there was no update gap");
        break;
      }
    }
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

  async #handleUpdate(update: enums.Update) {
    const handler = this.#updateHandler;
    if (handler) {
      return await handler(update);
    } else {
      return () => Promise.resolve();
    }
  }

  setUpdateHandler(handler: UpdateHandler) {
    this.#updateHandler = handler;
  }
}
