interface ConnectedUser {
  id: string;
  userId: string;
  connectedUserId: string;
  connected: User;
}

interface ConnectedUserState {
  connectedUser: User[];
}
