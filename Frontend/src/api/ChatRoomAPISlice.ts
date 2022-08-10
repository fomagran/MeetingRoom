import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const chatRoomAPISlice = createApi({
  reducerPath: 'chatRoomAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.111.34:3001/api'}),
  endpoints: builder => ({
    getAllChatRooms: builder.query<ChatRoom[], String>({
      query: () => '/allChatRooms',
    }),
    getChatRoom: builder.query<ChatRoom, String>({
      query: (id: string) => `/user/${id}`,
    }),
    addChatRoom: builder.mutation({
      query: (chatRoom: ChatRoom) => ({
        url: '/addChatRoom',
        method: 'POST',
        body: chatRoom,
      }),
    }),
    editChatRoom: builder.mutation({
      query: (chatRoom: ChatRoom) => ({
        url: `/chatRoom/${chatRoom.id}`,
        method: 'PUT',
        body: chatRoom,
      }),
    }),
    deleteChatRoom: builder.mutation({
      query: (id: string) => ({
        url: `/chatRoom/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useAddChatRoomMutation,
  useDeleteChatRoomMutation,
  useGetAllChatRoomsQuery,
  useGetChatRoomQuery,
  useEditChatRoomMutation,
} = chatRoomAPISlice;
