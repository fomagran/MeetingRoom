interface ChatRoom {
  id: string;
  title: string;
  userId: string;
  owner: User;
  lastChatContent: string | null;
  lastChatDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ChatRoomPayload {
  id: string;
  title: string;
  userId: string;
  lastChatContent: string | null;
  lastChatDate: Date | null;
}
