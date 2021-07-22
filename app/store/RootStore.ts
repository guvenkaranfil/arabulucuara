import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import Client from '@api/Client';
import RootReducer from './RootReducer';
import ErrorMiddleware from '../redux/slicers/error';

const store = configureStore({
  reducer: RootReducer,

  middleware: [...getDefaultMiddleware(), Client.middleware, ErrorMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
