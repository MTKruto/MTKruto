import type { Message } from "./9_message.ts";
import type { Topic } from "./A_topic.ts";

export interface TopicListItem {
  topic: Topic;
  lastMessage?: Message;
}
