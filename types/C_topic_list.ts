import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import type { Message } from "./9_message.ts";
import { constructTopic2 } from "./A_topic.ts";
import type { TopicListItem } from "./B_topic_list_item.ts";

export interface TopicList {
  /** The items in this list. */
  items: TopicListItem[];
  /** Whether the items should be ordered by creation date. */
  isOrderedByCreationDate: boolean;
  /** The total number of items. */
  count: number;
}

export function constructTopicList(result: Api.messages_forumTopics, messages: Message[], getPeer: PeerGetter): TopicList {
  const items = result.topics.map((v) => ({ topic: constructTopic2(v, getPeer), lastMessage: messages.find((m) => Api.is("forumTopic", v) ? m.id === v.top_message : false) })).map(cleanObject);
  const count = result.count;
  const isOrderedByCreationDate = !!result.order_by_create_date;
  return { items, isOrderedByCreationDate, count };
}
