import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["books"],
    endpoints: (builder) => ({
        getAllBook: builder.query({
            query: () => ({
                url: "/books",
                method: "GET"
            }),
            providesTags: ["books"],
        }),
        createBook: builder.mutation({
            query: (data) => ({
                url: "/",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["books"],
        })
    })
});

export const { useGetAllBookQuery, useCreateBookMutation } = baseApi;