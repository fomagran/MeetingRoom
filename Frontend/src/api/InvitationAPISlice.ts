import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const invitationAPISlice = createApi({
  reducerPath: 'invitationAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.111.34:3001/api'}),
  endpoints: builder => ({
    getAllInvitations: builder.query<Invitation[], String>({
      query: (id: string) => `/invitations/${id}`,
    }),
    addInvitation: builder.mutation({
      query: (invitation: Invitation) => ({
        url: '/addInvitation',
        method: 'POST',
        body: invitation,
      }),
    }),
    editInviation: builder.mutation({
      query: (invitation: Invitation) => ({
        url: `/invitations/${invitation.id}`,
        method: 'PUT',
        body: invitation,
      }),
    }),
    deleteInvitation: builder.mutation({
      query: (id: string) => ({
        url: `/invitations/${id}`,
        method: 'DELETE',
      }),
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
