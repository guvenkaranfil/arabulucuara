import {createSelector} from 'reselect';
import {RootState} from '@store/RootStore';

export const isUserLoggedIn = createSelector(
  (state: RootState) => state.user,
  user => {
    console.log('user:', user);
    console.log('user:', user.token?.expires);
    if (user.token?.token && user.refreshToken) {
      return true;
    }
    return false;
  },
);
