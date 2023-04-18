import {configureStore} from "@reduxjs/toolkit";
import { musicApi } from "./Api";
import  userReduxer from './userSlice'; 

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    user: userReduxer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
});