import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { musicApi } from '../api/api'
import authReducer from './slises/auth'
import filterReducer from './slises/filter'
import playerReducer from './slises/player'
import favoriteReducer from './slises/favorite'

const rootReducer = combineReducers({
  [musicApi.reducerPath]: musicApi.reducer,
  auth: authReducer,
  player: playerReducer,
  filter: filterReducer,
  favorite: favoriteReducer,
})

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
})
