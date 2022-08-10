import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userAPISlice = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.111.34:3001/api'}),
  endpoints: builder => ({
    getAllUsers: builder.query<User[], String>({
      query: () => '/allUsers',
    }),
    getUser: builder.query<User, String>({
      query: (id: string) => `/user/${id}`,
    }),
    getUserByName: builder.mutation({
      query: (name: string) => ({
        url: `/username/${name}`,
        method: 'GET',
      }),
      transformResponse: (response: User) => {
        return response;
      },
    }),
    addUser: builder.mutation({
      query: (user: User) => ({
        url: '/addTodo',
        method: 'POST',
        body: user,
      }),
    }),
    editUser: builder.mutation({
      query: (user: User) => ({
        url: `/todo/${user.id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/user/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  useGetUserByNameMutation,
} = userAPISlice;

export default userAPISlice;
