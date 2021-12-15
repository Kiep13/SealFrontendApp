export interface IChat {
  id: number;
  name: string;
  imageUrl?: string;
  lastMessage: string;
  lastPostDate: Date;
  unreadCount: number;
  isOnline?: boolean;
}
