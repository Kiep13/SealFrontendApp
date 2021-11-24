export interface IChat {
  id: number;
  name: string;
  image?: string;
  lastMessage: string;
  lastPostDate: Date;
  unreadCount: number;
}
