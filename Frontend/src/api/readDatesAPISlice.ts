import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const readDatesAPISlice = createApi({
  reducerPath: 'readDatesAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.111.34:3001/api'}),
  tagTypes: ['ReadDates'],
  endpoints: builder => ({
    getAllReadDates: builder.query<ReadDates[], String>({
      query: (id: string) => `/readDates/${id}`,
      providesTags: ['ReadDates'],
    }),
    addReadDates: builder.mutation({
      query: (payload: ReadDates) => ({
        url: '/addReadDates',
        method: 'POST',
        body: payload,
      }),
      transformResponse: (response: ReadDates) => {
        return response;
      },
      invalidatesTags: ['ReadDates'],
    }),
    editReadDates: builder.mutation({
      query: (payload: ReadDates) => ({
        url: '/readDates',
        method: 'PUT',
        body: payload,
      }),
      transformResponse: (response: ReadDates) => {
        return response;
      },
      invalidatesTags: ['ReadDates'],
    }),
    deleteReadDates: builder.mutation({
      query: (id: string) => ({
        url: `/readDates/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ReadDates'],
    }),
  }),
});

export const {
  useAddReadDatesMutation,
  useDeleteReadDatesMutation,
  useEditReadDatesMutation,
  useGetAllReadDatesQuery,
} = readDatesAPISlice;
