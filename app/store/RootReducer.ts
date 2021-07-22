import User from './user/UserSlice';

import Client from '@api/Client';

export default {
  user: User,

  [Client.reducerPath]: Client.reducer,
};
