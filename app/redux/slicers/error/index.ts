import {Alert} from 'react-native';
import {isRejectedWithValue, Middleware} from '@reduxjs/toolkit';

const rtkQueryErrorLogger: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    console.warn('We got a rejected action!');
    Alert.alert('Async Error!', `Message: ${action?.payload?.data?.message}`);
  }

  return next(action);
};

export default rtkQueryErrorLogger;
