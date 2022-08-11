interface User {
  id: string;
  name: string;
  profileImage: string;
  createdAt: Date;
  updatedAt: Date;
}

interface LoginPayload {
  isLogin: boolean;
  user: User;
}
