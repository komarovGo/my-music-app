import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://painassasin.online/'}),
    endpoints: (builder) => ({

        getMusic: builder.query({
            query: () => `catalog/track/all`,
        }),

        userRegistro: builder.mutation({
            query: ({ ...payload }) => ({
                url: 'user/signup/',
                method: 'POST',
                body: payload,
            }), 
        }),
        
        userLogin: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/login/',
                method: 'POST',
                body: payload,
            }),
        }),

        userToken: builder.mutation({
            query: ({ ...payload }) => ({
                url: 'user/token/',
                method: 'POST',
                body: payload,
            }),
        }),
    })
})

export const {useGetMusicQuery, useUserRegistroMutation, useUserLoginMutation, useUserTokenMutation} = musicApi;