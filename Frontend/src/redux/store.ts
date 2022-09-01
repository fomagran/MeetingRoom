import {invitationAPISlice} from '../API/InvitationAPISlice';
import {configureStore} from '@reduxjs/toolkit';
import {chatAPISlice} from '../API/ChatAPISlice';
import {chatRoomAPISlice} from '../API/ChatRoomAPISlice';
import connectedUserAPISlice from '../API/ConnectedUserAPISlice';
import {readDatesAPISlice} from '../API/readDatesAPISlice';
import {userAPISlice} from '../API/UserAPISlice';
import chatRoomSlice from './ChatRoomSlice';
import loginSlice from './LoginSlice';
import userListSlice from './UserListSlice';
import invitationSlice from './InvitationSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    chatRoom: chatRoomSlice.reducer,
    userList: userListSlice.reducer,
    invitation: invitationSlice.reducer,
    [chatAPISlice.reducerPath]: chatAPISlice.reducer,
    [chatRoomAPISlice.reducerPath]: chatRoomAPISlice.reducer,
    [userAPISlice.reducerPath]: userAPISlice.reducer,
    [readDatesAPISlice.reducerPath]: readDatesAPISlice.reducer,
    [connectedUserAPISlice.reducerPath]: connectedUserAPISlice.reducer,
    [invitationAPISlice.reducerPath]: invitationAPISlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      chatAPISlice.middleware,
      chatRoomAPISlice.middleware,
      userAPISlice.middleware,
      readDatesAPISlice.middleware,
      connectedUserAPISlice.middleware,
      invitationAPISlice.middleware,
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
