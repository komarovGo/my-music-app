/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: '', isLogin: false },
  reducers: {
    setLogin: (state) => {
      state.isLogin = true
    },
    setLogout: (state) => {
      state.isLogin = false
      state.token = ''
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { setLogin, setToken, setLogout } = authSlice.actions

export default authSlice.reducer
