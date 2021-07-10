import User from './user/UserSlice';
import Home from './home/HomeSlice';
import {arabulucuara} from '../../stores/rtkApi';

export default {
  [arabulucuara.reducerPath]: arabulucuara.reducer,
  user: User,
  home: Home,
};
