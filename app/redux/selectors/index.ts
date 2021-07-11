import {createSelector} from 'reselect';
import {RootState} from '../../stores/RootStore';

export const isUserLoggedIn = createSelector(
  (state: RootState) => state.user,
  user => {
    console.log('user:', user);
    if (user.token?.token && user.refreshToken) {
      return true;
    }
    return false;
  },
);
