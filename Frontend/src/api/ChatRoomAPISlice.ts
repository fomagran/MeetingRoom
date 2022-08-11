import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const chatRoomAPISlice = createApi({
  reducerPath: 'chatRoomAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.111.34:3001/api'}),
  tagTypes: ['ChatRooms'],
  endpoints: builder => ({
    getAllChatRooms: builder.query<ChatRoom[], String>({
      query: () => '/allChatRooms',
      providesTags: ['ChatRooms'],
    }),
    getChatRoom: builder.query<ChatRoom, String>({
      query: (id: string) => `/user/${id}`,
    }),
    addChatRoom: builder.mutation({
      query: (payload: ChatRoomPayload) => ({
        url: '/addChatRoom',
        method: 'POST',
        body: payload,
      }),
      transformResponse: (response: ChatRoom) => {
        return response;
      },
      invalidatesTags: ['ChatRooms'],
    }),
    editChatRoom: builder.mutation({
      query: (chatRoom: ChatRoom) => ({
        url: `/chatRoom/${chatRoom.id}`,
        method: 'PUT',
        body: chatRoom,
      }),
      invalidatesTags: ['ChatRooms'],
    }),
    deleteChatRoom: builder.mutation({
      query: (id: string) => ({
        url: `/chatRoom/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ChatRooms'],
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
