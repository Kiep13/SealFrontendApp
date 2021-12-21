import { IAvatar } from './avatar-interface';

export interface IUser extends IAvatar {
  id: number,
  name: string,
  surname: string,
  lastSeen? : Date
}
