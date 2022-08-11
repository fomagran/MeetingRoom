import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: LoginState = {
  isLogin: false,
  user: {} as User,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginPayload>) => {
      state.isLogin = action.payload.isLogin;
      state.user = action.payload.user;
    },
  },
});

export default loginSlice;
