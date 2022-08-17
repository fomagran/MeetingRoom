interface ChatRoom {
  id: string;
  title: string;
  userId: string;
  owner: User;
  hasNewMessage: boolean;
  lastChatContent: string | null;
  lastChatDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ChatRoomPayload {
  id: string;
  title: string;
  userId: string;
  hasNewMessage: boolean;
  lastChatContent: string | null;
  lastChatDate: Date | null;
}
