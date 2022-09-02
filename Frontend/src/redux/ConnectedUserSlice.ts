import {createSlice} from '@reduxjs/toolkit';

const initialState: ConnectedUserState = {
  connectedUser: [],
};

export const connectedUserSlice = createSlice({
  name: 'connectedUser',
  initialState,
  reducers: {},
});

export default connectedUserSlice;
