import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ChatRoomState = {
  password: '',
  isModalVisible: false,
};

export const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<{password: string}>) => {
      state.password = action.payload.password;
    },
    passwordModalOpen: state => {
      state.isModalVisible = true;
    },
    passwordModalClose: state => {
      state.isModalVisible = false;
    },
  },
});

export default chatRoomSlice;
