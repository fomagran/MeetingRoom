import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: UserListState = {
  tapManagementButton: false,
  connectedUsers: [],
};

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    tapManagement: (state, action: PayloadAction<UserListPayload>) => {
      state.tapManagementButton = action.payload.isTapManagementButton;
    },
    loadedConnectedUsers: (
      state,
      action: PayloadAction<{connectedUsers: User[]}>,
    ) => {
      state.connectedUsers = action.payload.connectedUsers;
    },
  },
});

export default userListSlice;
