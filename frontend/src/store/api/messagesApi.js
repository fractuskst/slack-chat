import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROUTES } from '../../routes/routes.js';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTES.messages(),
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Messages'],
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => '',
      providesTags: ['Messages'],
    }),
    createMessage: builder.mutation({
      query: (payload) => ({
        method: 'POST',
        body: {
          body: payload.body,
          channelId: payload.id,
          username: payload.username,
        },
      }),
      invalidatesTags: ['Messages'],
    }),
    removeMessage: builder.mutation({
      query: (payload) => ({
        url: payload,
        method: 'DELETE',
      }),
      invalidatesTags: ['Messages'],
    }),
    renameMessage: builder.mutation({
      query: ({ id, text }) => ({
        method: 'PATCH',
        url: id,
        body: {
          body: text,
        },
      }),
      invalidatesTags: ['Messages'],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useCreateMessageMutation,
  useRemoveMessageMutation,
  useRenameMessageMutation,
} = messagesApi;
