import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoriteTracks: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    removeFavoriteTrack: (state, action) => ({
      ...state,
      favoriteTracks: state.favoriteTracks.filter(
        (track) => track !== action.payload.id
      ),
    }),
    addFavoriteTrack: (state, action) => {
      const index = state.favoriteTracks.findIndex(
        (track) => track === action.payload.id
      )
      if (index === -1) {
        state.favoriteTracks.push(action.payload.id)
      } else {
        state.favoriteTracks.splice(index, 1)
      }
    },
  },
})

export const { removeFavoriteTrack, addFavoriteTrack } = favoriteSlice.actions

export default favoriteSlice.reducer
