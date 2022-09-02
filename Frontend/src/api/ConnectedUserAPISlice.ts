import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const connectedUserAPISlice = createApi({
  reducerPath: 'connectedUserAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.111.34:3001/api'}),
  tagTypes: ['ConnectedUser'],
  endpoints: builder => ({
    getAllConnectedUserById: builder.query<ConnectedUser[], String>({
      query: (id: string) => `/connectedUser/${id}`,
      providesTags: ['ConnectedUser'],
    }),
    getConnectedUser: builder.mutation({
      query: (id: string) => ({
        url: `/connectedUser/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: ConnectedUser[]) => {
        return response;
      },
      invalidatesTags: ['ConnectedUser'],
    }),
    addUser: builder.mutation({
      query: (user: ConnectedUser) => ({
        url: '/addConnectedUser',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['ConnectedUser'],
    }),
    editUser: builder.mutation({
      query: (user: User) => ({
        url: `/connectedUsers/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['ConnectedUser'],
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/connectedUsers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ConnectedUser'],
    }),
  }),
});

export const {
  useGetAllConnectedUserByIdQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  useGetConnectedUserMutation,
} = connectedUserAPISlice;

export default connectedUserAPISlice;
