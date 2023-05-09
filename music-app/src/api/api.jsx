import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { favoriteSlice } from '../store/slises/favorite'

export const musicApi = createApi({
  reducerPath: 'musicApi',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/',
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: '/catalog/track/all',
      }),
      providesTags: ['Tracks'],
    }),
    getTrackById: builder.query({
      query: (id) => ({
        url: `catalog/track/${id}`,
      }),
      providesTags: ['Tracks'],
    }),
    getPlaylists: builder.query({
      query: () => ({
        url: 'catalog/selection/',
      }),
    }),
    getPlaylistById: builder.query({
      query: (id) => ({
        url: `catalog/selection/${id}`,
      }),
    }),
    getFavoriteTracks: builder.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
      }),
      providesTags: ['Tracks'],
    }),
    userRegistation: builder.mutation({
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
    userTokenRefresh: builder.mutation({
      query: ({ ...payload }) => ({
        url: 'user/token/refresh/',
        method: 'POST',
        body: payload,
      }),
    }),

    toggleFavorite: builder.mutation({
      query: ({ id, isFavorite }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: isFavorite ? 'POST' : 'DELETE',
      }),
      onSuccess: ({ id, isFavorite }, { dispatch }) => {
        const { addToFavorite, removeFavoriteTrack } = favoriteSlice.actions
        dispatch(
          isFavorite ? addToFavorite({ id }) : removeFavoriteTrack({ id })
        )
      },
      providesTags: ['Tracks'],
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetTrackByIdQuery,
  useGetPlaylistsQuery,
  useGetPlaylistByIdQuery,
  useGetFavoriteTracksQuery,
  useUserRegistationMutation,
  useUserLoginMutation,
  useUserTokenMutation,
  useUserTokenRefreshMutation,
  useToggleFavoriteMutation,
} = musicApi
