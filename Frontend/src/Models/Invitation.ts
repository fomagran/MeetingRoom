interface Invitation {
  id: string;
  userId: string;
  fromUserId: string;
  isReceived: boolean;
  fromUser: User;
}

interface InvitationState {
  invitations: Invitation[];
}
