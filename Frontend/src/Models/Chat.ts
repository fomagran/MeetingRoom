interface Chat {
  id: string;
  content: string;
  isImage: boolean;
  type: string;
  user: User;
  userId: string;
  chatRoomId: string;
  chatRoom: ChatRoom;
  createdAt: Date;
  updatedAt: Date;
}

interface ChatPayload {
  content: string;
  type: string;
  isImage: boolean;
  userId: string;
  chatRoomId: string;
}
