import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ChatRoomState = {
  isModalVisible: false,
};

export const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {
    passwordModalOpen: state => {
      console.log('Open');

      state.isModalVisible = true;
    },
    passwordModalClose: state => {
      console.log('Close');
      state.isModalVisible = false;
    },
  },
});

export default chatRoomSlice;
