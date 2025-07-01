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
        getSingleBook: builder.query({
            query: (id) => ({
                url: `/books/${id}`,
                method: "GET"
            }),
            providesTags: (id) => [{ type: 'books', id }],
        }),
        createBook: builder.mutation<void, string>({
            query: (data) => ({
                url: "/",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["books"],
        }),
        deleteBook: builder.mutation<void, string>({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{ type: 'books' }]
        }),
    })
});

export const { useGetAllBookQuery, useGetSingleBookQuery, useCreateBookMutation, useDeleteBookMutation } = baseApi;