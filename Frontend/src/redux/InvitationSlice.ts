import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: InvitationState = {
  invitations: [],
};

export const invitationSlice = createSlice({
  name: 'invitation',
  initialState,
  reducers: {
    loadedInvitations: (
      state,
      action: PayloadAction<{invitations: Invitation[]}>,
    ) => {
      state.invitations = action.payload.invitations;
    },
  },
});

export default invitationSlice;
