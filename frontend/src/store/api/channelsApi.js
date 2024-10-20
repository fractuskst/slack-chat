import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROUTES } from '../../routes/routes.js';

export const channelsApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTES.channels(),
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Channels'],
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => '',
      providesTags: ['Channels'],
    }),
    createChannel: builder.mutation({
      query: (payload) => ({
        method: 'POST',
        body: {
          name: payload,
        },
      }),
      invalidatesTags: ['Channels'],
    }),
    removeChannel: builder.mutation({
      query: (payload) => ({
        url: payload,
        method: 'DELETE',
      }),
      invalidatesTags: ['Channels'],
    }),
    renameChannel: builder.mutation({
      query: ({ id, name }) => ({
        method: 'PATCH',
        url: id,
        body: {
          name,
        },
      }),
      invalidatesTags: ['Channels'],
    }),
  }),
});

export const {
  useGetChannelsQuery,
  useCreateChannelMutation,
  useRemoveChannelMutation,
  useRenameChannelMutation,
} = channelsApi;
