export declare namespace Reaction {
  interface Emoji {
    type: "emoji";
    emoji: string;
  }

  interface CustomEmoji {
    type: "customEmoji";
    id: string;
  }
}

export type Reaction = Reaction.Emoji | Reaction.CustomEmoji;
