import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: UserListState = {
  tapManagementButton: false,
};

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    tapManagement: (state, action: PayloadAction<UserListPayload>) => {
      state.tapManagementButton = action.payload.isTapManagementButton;
    },
  },
});

export default userListSlice;
