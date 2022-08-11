import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {chatAPISlice} from '../api/ChatAPISlice';
import {chatRoomAPISlice} from '../api/ChatRoomAPISlice';
import {userAPISlice} from '../api/UserAPISlice';
import loginSlice from './LoginSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    [chatAPISlice.reducerPath]: chatAPISlice.reducer,
    [chatRoomAPISlice.reducerPath]: chatRoomAPISlice.reducer,
    [userAPISlice.reducerPath]: userAPISlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      chatAPISlice.middleware,
      chatRoomAPISlice.middleware,
      userAPISlice.middleware,
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
