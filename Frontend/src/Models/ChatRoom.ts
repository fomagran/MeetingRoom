interface ChatRoom {
  id: string;
  title: string;
  userId: string;
  owner: User;
  chatId: string;
  lastChat: Chat;
  createdAt: Date;
  updatedAt: Date;
}
