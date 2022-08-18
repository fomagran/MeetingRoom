interface ChatRoom {
  id: string;
  title: string;
  hasNewMessage: boolean;
  lastChatContent: string | null;
  lastChatDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
  isPrivate: boolean;
  numberOfUsers: number;
}

interface ChatRoomPayload {
  id: string;
  title: string;
  hasNewMessage: boolean;
  isPrivate: boolean;
  lastChatContent: string | null;
  lastChatDate: Date | null;
}
