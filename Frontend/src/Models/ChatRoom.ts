interface ChatRoom {
  id: string;
  title: string;
  userId: string;
  hasNewMessage: boolean;
  lastChatContent: string | null;
  lastChatDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
  numberOfUsers: number;
}

interface ChatRoomPayload {
  id: string;
  title: string;
  userId: string;
  hasNewMessage: boolean;
  lastChatContent: string | null;
  lastChatDate: Date | null;
}
