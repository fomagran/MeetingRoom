import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const invitationAPISlice = createApi({
  reducerPath: 'invitationAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.111.34:3001/api'}),
  tagTypes: ['Invitations'],
  endpoints: builder => ({
    getAllInvitations: builder.query<Invitation[], String>({
      query: (id: string) => `/invitations/${id}`,
      providesTags: ['Invitations'],
    }),
    addInvitation: builder.mutation({
      query: (invitation: Invitation) => ({
        url: '/addInvitation',
        method: 'POST',
        body: invitation,
      }),
      invalidatesTags: ['Invitations'],
    }),
    editInviation: builder.mutation({
      query: (invitation: Invitation) => ({
        url: `/invitations/${invitation.id}`,
        method: 'PUT',
        body: invitation,
      }),
      invalidatesTags: ['Invitations'],
    }),
    deleteInvitation: builder.mutation({
      query: (id: string) => ({
        url: `/invitations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Invitations'],
    }),
  }),
});

export const {
  useGetAllInvitationsQuery,
  useAddInvitationMutation,
  useEditInviationMutation,
  useDeleteInvitationMutation,
} = invitationAPISlice;

export default invitationAPISlice;
