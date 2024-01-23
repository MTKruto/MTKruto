import { debug } from "../0_deps.ts";
import { Queue, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { as, enums, functions, inputPeerToPeer, peerToChatId, ReadObject, TLObject, types } from "../2_tl.ts";
import { CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER } from "../4_constants.ts";
import { C } from "./0_types.ts";
import { isChannelPtsUpdate, isPtsUpdate } from "./0_utilities.ts";

const d = debug("UpdateManager");
const dGap = debug("UpdateManager/recoverUpdateGap");
const dGapC = debug("UpdateManager/recoverChannelUpdateGap");

type UpdateHandler = (update: enums.Update) => Promise<(() => Promise<unknown>)>;

export class UpdateManager {
  static readonly MAIN_BOX_ID = 0n;

  #c: C;
  #updateState?: types.updates.State;
  #updateHandler?: UpdateHandler;

  constructor(c: C) {
    this.#c = c;
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

  async fetchState(source: string) {
    const state = await this.#c.api.updates.getState();
    this.#updateState = state;
    d("state fetched [%s]", source);
    if (await this.#mustDropPendingUpdates()) {
      await this.#c.storage.setState(state);
    }
  }

  async processChats(chats: enums.Chat[]) {
    for (const chat of chats) {
      if (chat instanceof types.Channel || chat instanceof types.ChannelForbidden) {
        await this.#c.storage.setEntity(chat);
        if ("username" in chat && chat.username) {
          await this.#c.storage.updateUsernames("channel", chat.id, [chat.username]);
        }
        if ("usernames" in chat && chat.usernames) {
          await this.#c.storage.updateUsernames("channel", chat.id, chat.usernames.map((v) => v.username));
        }
      } else if (chat instanceof types.Chat || chat instanceof types.ChatForbidden) {
        await this.#c.storage.setEntity(chat);
      }
    }
  }

  async processResult(result: ReadObject) {
    if (
      result instanceof types.messages.Dialogs ||
      result instanceof types.messages.DialogsSlice ||
      result instanceof types.messages.Messages ||
      result instanceof types.messages.MessagesSlice ||
      result instanceof types.messages.ChannelMessages ||
      result instanceof types.messages.ChatFull ||
      result instanceof types.contacts.Found ||
      result instanceof types.account.PrivacyRules ||
      result instanceof types.contacts.ResolvedPeer ||
      result instanceof types.channels.ChannelParticipants ||
      result instanceof types.channels.ChannelParticipant ||
      result instanceof types.messages.PeerDialogs ||
      result instanceof types.contacts.TopPeers ||
      result instanceof types.channels.AdminLogResults ||
      result instanceof types.help.RecentMeUrls ||
      result instanceof types.messages.InactiveChats ||
      result instanceof types.help.PromoData ||
      result instanceof types.messages.MessageViews ||
      result instanceof types.messages.DiscussionMessage ||
      result instanceof types.phone.GroupCall ||
      result instanceof types.phone.GroupParticipants ||
      result instanceof types.phone.JoinAsPeers ||
      result instanceof types.messages.SponsoredMessages ||
      result instanceof types.messages.SearchResultsCalendar ||
      result instanceof types.channels.SendAsPeers ||
      result instanceof types.users.UserFull ||
      result instanceof types.messages.PeerSettings ||
      result instanceof types.messages.MessageReactionsList ||
      result instanceof types.messages.ForumTopics ||
      result instanceof types.account.AutoSaveSettings ||
      result instanceof types.chatlists.ExportedInvites ||
      result instanceof types.chatlists.ChatlistInviteAlready ||
      result instanceof types.chatlists.ChatlistInvite ||
      result instanceof types.chatlists.ChatlistUpdates ||
      result instanceof types.messages.Chats ||
      result instanceof types.messages.ChatsSlice
    ) {
      await this.processChats(result.chats);
      if ("users" in result) {
        await this.processUsers(result.users);
      }

      if ("messages" in result) {
        for (const message of result.messages) {
          if (message instanceof types.Message || message instanceof types.MessageService) {
            await this.#c.storage.setMessage(peerToChatId(message.peer_id), message.id, message);
          }
        }
      }
    }

    if (result instanceof types.messages.Messages) {
      for (const message of result.messages) {
        if (message instanceof types.Message || message instanceof types.MessageService) {
          await this.#c.storage.setMessage(peerToChatId(message.peer_id), message.id, message);
        }
      }
    }
  }

  async processUsers(users: enums.User[]) {
    for (const user of users) {
      if (user instanceof types.User && user.access_hash) {
        await this.#c.storage.setEntity(user);
        if (user.username) {
          await this.#c.storage.updateUsernames("user", user.id, [user.username]);
        }
        if (user.usernames) {
          await this.#c.storage.updateUsernames("user", user.id, user.usernames.map((v) => v.username));
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
      await this.recoverUpdateGap("processUpdates");
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

  #processChannelPtsUpdate(update: types.UpdateNewChannelMessage | types.UpdateEditChannelMessage | types.UpdateDeleteChannelMessages | types.UpdateChannelTooLong, checkGap: boolean) {
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

  async #processPtsUpdateInner(update: types.UpdateNewMessage | types.UpdateDeleteMessages | types.UpdateReadHistoryInbox | types.UpdateReadHistoryOutbox | types.UpdatePinnedChannelMessages | types.UpdatePinnedMessages | types.UpdateFolderPeers | types.UpdateChannelWebPage | types.UpdateEditMessage | types.UpdateReadMessagesContents | types.UpdateWebPage, checkGap: boolean) {
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
    this.#queueUpdate(update, 0n, true);
  }

  #ptsUpdateQueue = new Queue("ptsUpdate");
  #processPtsUpdate(update: types.UpdateNewMessage | types.UpdateDeleteMessages | types.UpdateReadHistoryInbox | types.UpdateReadHistoryOutbox | types.UpdatePinnedChannelMessages | types.UpdatePinnedMessages | types.UpdateFolderPeers | types.UpdateChannelWebPage | types.UpdateEditMessage | types.UpdateReadMessagesContents | types.UpdateWebPage, checkGap: boolean) {
    this.#ptsUpdateQueue.add(async () => {
      await this.#processPtsUpdateInner(update, checkGap);
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
          d("seqStart=0");
        } else {
          const localState = await this.#getLocalState();
          const localSeq = localState.seq;

          if (localSeq + 1 == seqStart) {
            // The update sequence can be applied.
            localState.seq = seq;
            localState.date = updates_.date;
            await this.#setUpdateStateDate(updates_.date);
            await this.#c.storage.setState(localState);
          } else if (localSeq + 1 > seqStart) {
            // The update sequence was already applied, and must be ignored.
            d("localSeq + 1 > seqStart");
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
        UNREACHABLE();
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
      UNREACHABLE();
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
          await this.#c.storage.setState(this.#updateState);
        } else {
          UNREACHABLE();
        }
      } else if (isPtsUpdate(update)) {
        this.#processPtsUpdate(update, checkGap);
      } else if (isChannelPtsUpdate(update)) {
        this.#processChannelPtsUpdate(update, checkGap);
      } else {
        this.#queueUpdate(update, 0n, false);
      }
    }
  }

  async #setUpdateStateDate(date: number) {
    const localState = await this.#getLocalState();
    localState.date = date;
    await this.#c.storage.setState(localState);
  }

  async #setUpdatePts(pts: number) {
    const localState = await this.#getLocalState();
    localState.pts = pts;
    await this.#c.storage.setState(localState);
  }

  async #getLocalState() {
    let localState = await this.#c.storage.getState();
    if (!localState) {
      if (this.#updateState) {
        localState = this.#updateState;
        await this.#c.storage.setState(localState);
      } else {
        await this.fetchState("getLocalState");
        if (this.#updateState) {
          localState = this.#updateState;
          await this.#c.storage.setState(localState);
        } else {
          UNREACHABLE();
        }
      }
    }
    return localState;
  }
  async recoverUpdateGap(source: string) {
    dGap("recovering from update gap [%s]", source);

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
            await this.#c.storage.setState(difference.state);
            dGap("recovered from update gap");
            break;
          } else if (difference instanceof types.updates.DifferenceSlice) {
            state = difference.intermediate_state;
          } else {
            UNREACHABLE();
          }
        } else if (difference instanceof types.updates.DifferenceTooLong) {
          await this.#c.storage.deleteMessages();
          await this.#c.storage.removeChats(0);
          await this.#c.storage.removeChats(1);
          state.pts = difference.pts;
          dGap("received differenceTooLong");
        } else if (difference instanceof types.updates.DifferenceEmpty) {
          await this.#setUpdateStateDate(difference.date);
          dGap("there was no update gap");
          break;
        } else {
          UNREACHABLE();
        }
      }
    } finally {
      this.#c.resetConnectionState();
    }
  }

  async #recoverChannelUpdateGap(channelId: bigint, source: string) {
    dGapC("recovering channel update gap [%o, %s]", channelId, source);
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
        dGapC("recovered from update gap [%o, %s]", channelId, source);
        break;
      } else if (difference instanceof types.updates.ChannelDifferenceTooLong) {
        // TODO: invalidate messages
        dGapC("received channelDifferenceTooLong");
        await this.processChats(difference.chats);
        await this.processUsers(difference.users);
        for (const message of difference.messages) {
          await this.#processUpdates(new types.UpdateNewChannelMessage({ message, pts: 0, pts_count: 0 }), false);
        }
        const pts_ = difference.dialog[as](types.Dialog).pts;
        if (pts_ != undefined) {
          pts = pts_;
        } else {
          UNREACHABLE();
        }
        dGapC("processed channelDifferenceTooLong");
      } else if (difference instanceof types.updates.ChannelDifferenceEmpty) {
        dGapC("there was no update gap");
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
          d("#handleUpdate error: %o", err);
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
