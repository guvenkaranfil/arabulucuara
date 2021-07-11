import {configureStore} from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import RootReducer from './features';
import Client from '@api/Client';

// const middleware = [thunk].filter(Boolean);
const store = configureStore({
  reducer: RootReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middleware),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(Client.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
