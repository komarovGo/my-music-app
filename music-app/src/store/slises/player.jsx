/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    showPlayer: false,
    isPlaying: false,
    currentTrackLink: '',
    id: 8,
    ids: [],
    isShuffle: false,
    isRepeat: false,
  },
  reducers: {
    play: (state, action) => {
      state.isPlaying = action.payload
      state.showPlayer = true
    },

    getCurrentTrack: (state, action) => {
      state.currentTrackLink = action.payload
    },

    getTrackId: (state, action) => {
      state.id = action.payload
    },

    getTracksId: (state, action) => {
      state.ids.push(Number(action.payload))
    },

    clearTracksId: (state) => {
      state.ids = []
    },

    setTracksIds: (state, action) => {
      if (action.payload) {
        state.ids = action.payload
      }
    },

    playNextTrack: (state, action) => {
      if (state.ids.indexOf(state.id) > state.ids.length) {
        state.id = state.ids[0]
      }
      state.id = state.ids[action.payload + 1]
    },

    playPrevTrack: (state, action) => {
      state.id = state.ids[action.payload - 1]
    },

    shuffleTracks: (state) => {
      state.isShuffle = true
      for (let i = state.ids.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[state.ids[i], state.ids[j]] = [state.ids[j], state.ids[i]]
      }
    },

    sortTracks: (state) => {
      state.isShuffle = false
      state.ids = state.ids.sort((a, b) => a - b)
    },

    repeatTrack: (state) => {
      state.isRepeat = !state.isRepeat
    },
  },
})

export const {
  play,
  getCurrentTrack,
  getTrackId,
  getTracksId,
  clearTracksId,
  setTracksIds,
  playNextTrack,
  playPrevTrack,
  shuffleTracks,
  sortTracks,
  repeatTrack,
} = playerSlice.actions

export default playerSlice.reducer
