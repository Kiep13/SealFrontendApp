import { IMessage } from '@core/interfaces';

import { USERS_MOCK } from './users-mock';

export const MESSAGES_MOCK: IMessage[]= [
  {
    id: 1,
    sender: USERS_MOCK[0],
    text: 'Hello. Can I help you, sir? Are you interested in our duty-free goods?',
    postDate: new Date(),
  },
  {
    id: 2,
    sender: USERS_MOCK[1],
    text: 'Yes. The point is that the customs officer took away my bottle of mineral water, so I would like to buy a new one.',
    postDate: new Date(),
  },
  {
    id: 3,
    sender: USERS_MOCK[0],
    text: 'I see. No problem, sir. Which one do you prefer: still or sparkling?',
    postDate: new Date(),
  },
  {
    id: 4,
    sender: USERS_MOCK[1],
    text: 'Just still, please.',
    postDate: new Date(),
  },
  {
    id: 5,
    sender: USERS_MOCK[0],
    text: 'OK. Here you are. Anything else?',
    postDate: new Date(),
  },
  {
    id:6,
    sender: USERS_MOCK[1],
    text: 'Well. Can I have a look at that titanium watch, please?',
    postDate: new Date(),
  },
  {
    id: 7,
    sender: USERS_MOCK[0],
    text: 'Certainly. Light or dark grey?',
    postDate: new Date(),
  },
  {
    id: 8,
    sender: USERS_MOCK[1],
    text: 'Dark, please.',
    postDate: new Date(),
  },
  {
    id: 9,
    sender: USERS_MOCK[0],
    text: 'Here it is. You can try it on.',
    postDate: new Date(),
  },
  {
    id: 10,
    sender: USERS_MOCK[1],
    text: 'That’s nice. How much is it in Russian roubles?',
    postDate: new Date(),
  },
  {
    id: 11,
    sender: USERS_MOCK[0],
    text: 'That’s 7 thousand roubles.',
    postDate: new Date(),
  },
  {
    id: 12,
    sender: USERS_MOCK[1],
    text: 'Great! Why is the price so low?',
    postDate: new Date(),
  },
  {
    id: 13,
    sender: USERS_MOCK[0],
    text: 'Because it’s a duty-free shop. So our goods are tax-free and they cost cheaper.',
    postDate: new Date(),
  },
  {
    id: 14,
    sender: USERS_MOCK[1],
    text: 'OK. I’ll take the watch. And I’d like to buy some presents for my parents.',
    postDate: new Date(),
  },
  {
    id: 15,
    sender: USERS_MOCK[0],
    text: 'You can choose cosmetics, jewelry, alcoholic beverages, chocolate in our shop.',
    postDate: new Date(),
  },
  {
    id: 16,
    sender: USERS_MOCK[1],
    text: 'But if I buy a bottle of whisky for my dad will it be confiscated again? According to the rules it’s forbidden to take any liquids on board, isn’t it?',
    postDate: new Date(),
  },
  {
    id: 17,
    sender: USERS_MOCK[0],
    text: 'Don’t worry, sir. You should just show the receipt of our duty-free shop while boarding.',
    postDate: new Date(),
  },
  {
    id: 18,
    sender: USERS_MOCK[1],
    text: 'That’s fine. I’ll take this whisky and a box of sweets then. Is it possible to pay with roubles, please? How much is that in total?',
    postDate: new Date(),
  },
  {
    id: 19,
    sender: USERS_MOCK[0],
    text: 'That’s 9 thousand roubles. I’m sorry but I have to give you your change in euros.',
    postDate: new Date(),
  },
  {
    id: 20,
    sender: USERS_MOCK[1],
    text: 'No problem. Thanks.',
    postDate: new Date(),
  },
  {
    id: 21,
    sender: USERS_MOCK[0],
    text: 'Thank you for your purchase. And enjoy the flight!',
    postDate: new Date(),
  },
]
