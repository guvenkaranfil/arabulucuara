import {Alert} from 'react-native';
import {isRejectedWithValue, Middleware} from '@reduxjs/toolkit';

const rtkQueryErrorLogger: Middleware = () => next => action => {
  if (isRejectedWithValue(action) && action?.payload?.data?.message) {
    console.warn('We got a rejected action!');
    Alert.alert('Bir hata oluştu!', `${action?.payload?.data?.message}`);
  }

  return next(action);
};

export default rtkQueryErrorLogger;
