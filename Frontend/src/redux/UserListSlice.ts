import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: UserListState = {
  tapManagement: false,
};

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    tapManagement: (state, action: PayloadAction<UserListPayload>) => {
      state.tapManagement = action.payload.tapManagement;
    },
  },
});

export default userListSlice;
