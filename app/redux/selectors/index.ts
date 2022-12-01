import {createSelector} from 'reselect';
import {RootState} from '@store/RootStore';

export const isUserLoggedIn = createSelector(
  (state: RootState) => state.user,
  user => {
    if (user.token?.token && user.refreshToken) {
      return true;
    }
    return false;
  },
);
