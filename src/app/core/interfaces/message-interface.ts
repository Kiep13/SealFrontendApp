import { IUser } from './user-interface';


export interface IMessage {
  id: number,
  sender: IUser;
  text: string,
  postDate: Date
}
