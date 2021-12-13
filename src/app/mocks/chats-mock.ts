import { IChat } from '@core/interfaces';

export const CHATS_MOCK: IChat[] = [
  {
    id: 1,
    name: 'Sherill Flynn',
    image: 'https://i.pinimg.com/originals/35/02/53/35025350e92015230afeadbbe98c0bb4.jpg',
    lastMessage: 'I would like to try a cheesecake. Can you buy me a raspberry one when you will go home? I would be very grateful to you.',
    lastPostDate: new Date(),
    unreadCount: 3
  },
  {
    id: 2,
    name: 'Martin Moore',
    image: 'https://bravo-girl.ru/wp-content/uploads/2019/07/h67aonjaz.jpg',
    lastMessage: 'I see. Thanks a lot. I’ll browse what is available.',
    lastPostDate: new Date(),
    unreadCount: 1
  },
  {
    id: 3,
    name: 'Edgar Benson',
    image: 'https://i.pinimg.com/474x/8b/59/1f/8b591f467a5c712c3e12eaf490e0d658.jpg',
    lastMessage: 'I’m OK, thanks. Is Cathy in?',
    lastPostDate: new Date(),
    unreadCount: 0
  },
  {
    id: 4,
    name: 'Ruby Wilkins',
    image: 'https://sos.fishki.net/upload/post/201408/25/1297423/20.jpg',
    lastMessage: 'I believe he does. But I can give it to you, just in case.',
    lastPostDate: new Date(),
    unreadCount: 5
  }
]
