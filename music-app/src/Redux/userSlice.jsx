import {createSlice} from '@reduxjs/toolkit'
/* eslint-disable no-param-reassign */
const initialState = {
    email: null,
    token: null,
    id: null,
}

const userSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        remoueUser(state) {
            state.email = null
            state.token = null
            state.id = null
        }
    }
})

export const {setUser,remoueUser} = userSlice.actions;

export default userSlice.reducer;