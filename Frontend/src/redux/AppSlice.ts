import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: AppState = {
  allUsers: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loadedAllUsers: (state, action: PayloadAction<{allUsers: User[]}>) => {
      state.allUsers = action.payload.allUsers;
    },
  },
});

export default appSlice;
