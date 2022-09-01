interface UserListState {
  tapManagementButton: boolean;
  connectedUsers: User[];
}

interface UserListPayload {
  isTapManagementButton: boolean;
}
