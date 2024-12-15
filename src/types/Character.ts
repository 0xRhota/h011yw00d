export interface Character {
  name: string;
  bio: string[];
  lore: string[];
  style: {
    all: string[];
    chat: string[];
    post: string[];
  };
  messageExamples: Array<{
    user: string;
    content: {
      text: string;
    };
  }>[];
}