interface ChatRoom {
  id: string;
  title: string;
  userId: string;
  owner: User;
  chatId: string | null;
  lastChat: Chat | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ChatRoomPayload {
  title: string;
  userId: string;
  chatId: string | null;
}
