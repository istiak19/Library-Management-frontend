import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (builder) => ({
        createBook: builder.mutation({
            query: (data) => ({
                url: "/",
                method: "POST",
                body: data
            })
        })
    })
});

export const { useCreateBookMutation } = baseApi;