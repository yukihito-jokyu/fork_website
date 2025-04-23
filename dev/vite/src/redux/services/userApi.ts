import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  id: string,
  name: string,
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<User, void>({
      query: () => `user`,
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi