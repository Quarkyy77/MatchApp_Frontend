import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "api/auth/login",
          method: "POST",
          body,
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body: {
        Name: string;
        password: string;
        email: string;
        gender: string;
      }) => {
        return {
          url: "api/auth/register",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
