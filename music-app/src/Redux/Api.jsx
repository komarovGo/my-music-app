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
        })
    })
})

export const {useGetMusicQuery, useUserRegistroMutation} = musicApi;