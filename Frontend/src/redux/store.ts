import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {chatAPISlice} from '../API/ChatAPISlice';
import {chatRoomAPISlice} from '../API/ChatRoomAPISlice';
import {readDatesAPISlice} from '../API/readDatesAPISlice';
import {userAPISlice} from '../API/UserAPISlice';
import chatRoomSlice from './ChatRoomSlice';
import loginSlice from './LoginSlice';
import userListSlice from './UserListSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    chatRoom: chatRoomSlice.reducer,
    userList: userListSlice.reducer,
    [chatAPISlice.reducerPath]: chatAPISlice.reducer,
    [chatRoomAPISlice.reducerPath]: chatRoomAPISlice.reducer,
    [userAPISlice.reducerPath]: userAPISlice.reducer,
    [readDatesAPISlice.reducerPath]: readDatesAPISlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      chatAPISlice.middleware,
      chatRoomAPISlice.middleware,
      userAPISlice.middleware,
      readDatesAPISlice.middleware,
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
