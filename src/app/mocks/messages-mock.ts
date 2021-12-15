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
]
