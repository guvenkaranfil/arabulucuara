import User from './user/UserSlice';

import Client from '@api/Client';

export default {
  [Client.reducerPath]: Client.reducer,
  user: User,
};
