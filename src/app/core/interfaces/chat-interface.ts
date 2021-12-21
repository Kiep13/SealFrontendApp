import { IAvatar } from './avatar-interface';

export interface IChat extends IAvatar {
  id: number;
  name: string;
  lastMessage: string;
  lastPostDate: Date;
  unreadCount: number;
}
