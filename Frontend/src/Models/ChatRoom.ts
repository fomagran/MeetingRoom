interface ChatRoom {
  id: string;
  title: string;
  lastChatContent: string | null;
  lastChatDate: Date | null;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isPrivate: boolean;
  numberOfUsers: number;
}

interface ChatRoomPayload {
  id: string;
  title: string;
  isPrivate: boolean;
  lastChatContent: string | null;
  lastChatDate: Date | null;
}

interface ChatRoomState {
  password: string;
  isModalVisible: boolean;
}

interface ChatRoomPasswordPayload {}
