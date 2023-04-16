import {configureStore} from "@reduxjs/toolkit";
import { musicApi } from "./Api";
import { useReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    user: useReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
});